import { Module } from '@nestjs/common';
import { ProvinciaController } from './provincia/controllers/provincia.controller';
import { ProvinciaService } from './provincia/services/provincia.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProvinciaSchema } from './provincia/schemas/provincia.schema';
import { Provincia } from './provincia/entities/provincia.entity';
import { PROVINCIA_REPOSITORY } from './provincia/interfaces/provincia-repository.interface';
import { MongoProvinciaRepository } from './provincia/repository/mongo-provincia.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Provincia.name,
        schema: ProvinciaSchema
      }
    ])
  ],
  controllers: [ProvinciaController],
  providers: [
    ProvinciaService,
    {
      provide: PROVINCIA_REPOSITORY,
      useClass: MongoProvinciaRepository,
    }
  ],
})
export class ManageModule { }
