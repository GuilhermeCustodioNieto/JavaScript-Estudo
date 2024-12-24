/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
    private readonly dogs = []

    findAll(): string[] {
        return this.dogs
    }

    create(dog: string) {
        this.dogs.push(dog)
    }

}

