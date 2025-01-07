// src/user/dto/update-user.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
    @ApiPropertyOptional({ description: 'Name of the user', example: 'Jane Doe' })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ description: 'Email of the user', example: 'jane.doe@example.com' })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiPropertyOptional({
        description: 'Password of the user (minimum 8 characters)',
        example: 'newSecurePassword123',
    })
    @IsOptional()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    password?: string;

    @ApiPropertyOptional({
        description: 'Profile image URL of the user',
        example: 'https://example.com/new-profile.jpg',
    })
    @IsOptional()
    @IsString()
    profileImage?: string;
}
