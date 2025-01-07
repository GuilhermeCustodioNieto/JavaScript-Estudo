import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateStudyDto {
    @ApiProperty({ description: 'Título do estudo', example: 'Spring boot, o que é?' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ description: 'Descrição do estudo', example: "spring boot é basicamente um framework java para desenvolver muitas coisas e agilizar o processo." })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ description: 'ID do tópico associado ao estudo', example: 1 })
    @IsNotEmpty()
    topicId: number;
}
