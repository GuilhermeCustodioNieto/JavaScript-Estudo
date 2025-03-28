import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ example: 'user@example.com', description: 'Email of the user' })
    email: string;

    @ApiProperty({ example: 'password123', description: 'Password of the user' })
    password: string;
}
