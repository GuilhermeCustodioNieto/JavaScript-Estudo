import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTopicDto {
    @ApiProperty({ description: 'Título do tópico', example: 'java' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ description: 'Descrição do tópico', example: 'Slk java é insano' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ description: 'Id do criador do tópico', example: 1 })
    @IsNotEmpty()
    userId: number;
}
