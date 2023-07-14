import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './core/article/article.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import configuration from './config/configration'
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      load: [configuration],
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: (
        configService: ConfigService,
      ) => configService.get<object>('db.mysql'),
      inject: [ConfigService],
    }),

    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: '/var/log/itranswarp_nestjs/combined.log' })
      ]
    }),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {}
}
