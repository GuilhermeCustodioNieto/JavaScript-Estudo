import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateStudyDto {
    @ApiProperty({ description: 'Título do estudo', required: false })
    @IsString()
    @IsOptional()
    title?: string;

    @ApiProperty({ description: 'Descrição do estudo', required: false })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({ description: 'ID do tópico associado ao estudo', required: false })
    @IsOptional()
    topicId?: number;
}
