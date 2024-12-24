/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.controller.stec';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [CatsModule, DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
