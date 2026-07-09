import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecurityModule } from './security/security.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfig } from './config/env.config';
import { MongooseModule } from '@nestjs/mongoose';
import { ManageModule } from './manage/manage.module';
import { EntitiesModule } from './entities/entities.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
        dbName: configService.get('DB_NAME'),
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      }),
    }),
    SecurityModule,
    ManageModule,
    EntitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
