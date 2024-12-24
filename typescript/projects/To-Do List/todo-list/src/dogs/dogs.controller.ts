/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogsService: DogsService) { }

    @Get()
    findAll(): string[] {
        return this.dogsService.findAll()
    }

    @Post()
    create(@Body() dog: string) {
        this.dogsService.create(dog)
    }
}
