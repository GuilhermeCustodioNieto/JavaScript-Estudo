import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService
    ) { }




    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;

        const user = this.userService.findOneByEmail(email);

        if (user) {
            if (await bcrypt.compare(password, (await user).password)) {
                return { loginAccess: 'allowed' }
            }

        }

        return { loginAccess: 'denied' }
    }

    async register(registerDto: RegisterDto) {
        const { name, email, profileImage, password } = registerDto

        const user = await this.userService.findOneByEmail(email);

        if (user) {
            throw new Error('The user already exists on the sistem.')
        }

        const newPassword = await bcrypt.hash(password, 10)

        const newUser = await this.userService.create({
            name, email, profileImage, password: newPassword
        });

        return { message: 'User registered succesfully' }
    }



}
