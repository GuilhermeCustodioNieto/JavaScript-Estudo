import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudyModule } from './study/study.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicModule } from './topic/topic.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: 'root',
    password: "12345678",
    database: 'learningLog',
    autoLoadEntities: true,
    synchronize: false,
  }), StudyModule, TopicModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
