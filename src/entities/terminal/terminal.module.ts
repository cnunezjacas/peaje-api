import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Terminal, TerminalSchema } from './entities/terminal.entity';

// 2. Imports del Controller y Service
import { TerminalController } from './controllers/terminal.controller';
import { TerminalService } from './services/terminal.service';

// 3. Imports de la Interface y el Repository
import { TERMINAL_REPOSITORY } from './interfaces/terminal-repository.interface';
import { TerminalMongoRepository } from './repository/terminal-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: Terminal.name,
        schema: TerminalSchema,
      },
    ]),
  ],
  // B. Registramos el Controller
  controllers: [TerminalController],
  // C. Registramos el Service y el Repository (con su token)
  providers: [
    TerminalService,
    {
      provide: TERMINAL_REPOSITORY,
      useClass: TerminalMongoRepository,
    },
  ],
  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [TerminalService, TERMINAL_REPOSITORY],
})
export class TerminalModule {}
