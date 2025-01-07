// src/user/dto/create-user.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: 'Email of the user', example: 'john.doe@example.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Password of the user (minimum 8 characters)',
        example: 'securePassword123',
    })
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    password: string;

    @ApiPropertyOptional({
        description: 'Profile image URL of the user',
        example: 'https://example.com/profile.jpg',
    })
    @IsOptional()
    @IsString()
    profileImage?: string;
}
