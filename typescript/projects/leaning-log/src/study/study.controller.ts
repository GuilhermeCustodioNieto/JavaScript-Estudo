import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudyService } from './study.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Study } from './entities/study.entity';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('study') // Marca as rotas com o tag "study"
@Controller('study')
export class StudyController {
  constructor(private readonly studyService: StudyService) { }

  @Post()
  @ApiOperation({ summary: 'Criar um estudo' })
  @ApiBody({ type: CreateStudyDto })
  @ApiResponse({ status: 201, description: 'Estudo criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao criar estudo.' })
  create(@Body() study: Partial<Study>) {
    return this.studyService.create(study);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os estudos' })
  @ApiResponse({ status: 200, description: 'Lista de estudos.' })
  findAll() {
    return this.studyService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar estudo por ID' })
  @ApiResponse({ status: 200, description: 'Estudo encontrado.' })
  @ApiResponse({ status: 404, description: 'Estudo não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.studyService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um estudo' })
  @ApiBody({ type: UpdateStudyDto })
  @ApiResponse({ status: 200, description: 'Estudo atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Estudo não encontrado.' })
  update(@Param('id') id: string, @Body() study: Partial<Study>) {
    return this.studyService.update(+id, study);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um estudo' })
  @ApiResponse({ status: 200, description: 'Estudo deletado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Estudo não encontrado.' })
  remove(@Param('id') id: string) {
    return this.studyService.remove(+id);
  }
}
