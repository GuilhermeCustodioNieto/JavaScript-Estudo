import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopicService } from './topic.service';
import { Topic } from './entities/topic.entity';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('topic')
@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) { }

  @Post()
  @ApiOperation({ summary: 'Criar um tópico de estudo' })
  @ApiBody({ type: CreateTopicDto })
  @ApiResponse({ status: 201, description: 'Tópico criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao criar tópico.' })
  create(@Body() topic: CreateTopicDto) {
    return this.topicService.create(topic);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os tópicos de estudo' })
  @ApiResponse({ status: 200, description: 'Lista de tópicos.' })
  findAll() {
    return this.topicService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar tópico de estudo por ID' })
  @ApiResponse({ status: 200, description: 'Tópico encontrado.' })
  @ApiResponse({ status: 404, description: 'Tópico não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.topicService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um tópico de estudo' })
  @ApiBody({ type: UpdateTopicDto })
  @ApiResponse({ status: 200, description: 'Tópico atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Tópico não encontrado.' })
  update(@Param('id') id: string, @Body() topic: UpdateTopicDto) {
    return this.topicService.update(+id, topic);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um tópico de estudo' })
  @ApiResponse({ status: 200, description: 'Tópico deletado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Tópico não encontrado.' })
  remove(@Param('id') id: string) {
    return this.topicService.remove(+id);
  }
}
