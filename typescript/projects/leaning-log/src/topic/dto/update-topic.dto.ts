import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateTopicDto {
    @ApiProperty({ description: 'Título do tópico', required: false })
    @IsString()
    @IsOptional()
    title?: string;

    @ApiProperty({ description: 'Descrição do tópico', required: false })
    @IsString()
    @IsOptional()
    description?: string;
}
