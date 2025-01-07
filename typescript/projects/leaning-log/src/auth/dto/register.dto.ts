import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty({ example: 'John Doe', description: 'Name of the user' })
    name: string;

    @ApiProperty({ example: 'user@example.com', description: 'Email of the user' })
    email: string;

    @ApiProperty({ example: 'https://example.com/profile.jpg', description: 'Profile image URL of the user' })
    profileImage: string;

    @ApiProperty({ example: 'password123', description: 'Password of the user' })
    password: string;
}
