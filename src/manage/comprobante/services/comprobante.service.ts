import { Inject, Injectable } from '@nestjs/common';
import {
  COMPROBANTE_REPOSITORY,
  ComprobanteRepository,
} from '../interfaces/comprobante-repository.interface';
import { Comprobante } from '../entities/comprobante.entity';
import { CreateComprobanteDto, ComprobanteDto } from '../dtos/comprobante.dto';

@Injectable()
export class ComprobanteService {
  constructor(
    @Inject(COMPROBANTE_REPOSITORY)
    private readonly comprobanteRepository: ComprobanteRepository,
  ) {}

  async create(createComprobanteDto: CreateComprobanteDto): Promise<Comprobante> {
    //TODO validaci'on
    // try{
    return await this.comprobanteRepository.create(createComprobanteDto);
    /*} catch(error){
            if(error.name === 'ValidationError') throw new Error('El moneda ya existe.');
            throw new Error('Error al crear el moneda');
        }*/
  }

  async update(id: string, comprobanteDto: ComprobanteDto): Promise<Comprobante> {
    return await this.comprobanteRepository.update(id, comprobanteDto);
  }

  async delete(id: string): Promise<Comprobante> {
    return await this.comprobanteRepository.delete(id);
  }

  async findAll(comprobanteDto: ComprobanteDto): Promise<Comprobante[]> {
    return await this.comprobanteRepository.findAll(comprobanteDto);
  }

  async findOne(id: string): Promise<Comprobante> {
    return await this.comprobanteRepository.findOne(id);
  }
}
