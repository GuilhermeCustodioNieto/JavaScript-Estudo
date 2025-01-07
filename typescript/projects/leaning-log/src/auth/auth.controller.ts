import { UserService } from './../user/user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@ApiTags('auth') // Agrupa as rotas de autenticação no Swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) { }

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({
    status: 200,
    description: 'User successfully authenticated.',
    schema: {
      example: { loginAccess: 'allowed' },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials.',
    schema: {
      example: { loginAccess: 'denied' },
    },
  })
  @ApiBody({
    type: LoginDto,
    description: 'Email and password required for authentication.',
  })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered.',
    schema: {
      example: { message: 'User registered successfully' },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'The user already exists on the system.',
    schema: {
      example: { message: 'The user already exists on the system.' },
    },
  })
  @ApiBody({
    type: RegisterDto,
    description: 'User details required for registration.',
  })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
