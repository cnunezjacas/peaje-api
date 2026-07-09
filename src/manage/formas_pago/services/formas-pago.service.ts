import { Inject, Injectable } from '@nestjs/common';
import {
  FORMAS_PAGO_REPOSITORY,
  FormasDePagoRepository,
} from '../interfaces/formas-pago-repository.interface';
import { FormasDePago } from '../entities/formas-pago.entity';
import { CreateFormasDePagoDto, FormasDePagoDto } from '../dtos/formas-pago.dto';

@Injectable()
export class FormasDePagoService {
  constructor(
    @Inject(FORMAS_PAGO_REPOSITORY)
    private readonly formasDePagoRepository: FormasDePagoRepository,
  ) {}

  async create(createFormasDePagoDto: CreateFormasDePagoDto): Promise<FormasDePago> {
    //TODO validaci'on
    // try{
    return await this.formasDePagoRepository.create(createFormasDePagoDto);
    /*} catch(error){
            if(error.name === 'ValidationError') throw new Error('El moneda ya existe.');
            throw new Error('Error al crear el moneda');
        }*/
  }

  async update(id: string, formasDePagoDto: FormasDePagoDto): Promise<FormasDePago> {
    return await this.formasDePagoRepository.update(id, formasDePagoDto);
  }

  async delete(id: string): Promise<FormasDePago> {
    return await this.formasDePagoRepository.delete(id);
  }

  async findAll(formasDePagoDto: FormasDePagoDto): Promise<FormasDePago[]> {
    return await this.formasDePagoRepository.findAll(formasDePagoDto);
  }

  async findOne(id: string): Promise<FormasDePago> {
    return await this.formasDePagoRepository.findOne(id);
  }
}
