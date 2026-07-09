import { Inject, Injectable } from '@nestjs/common';
import {
  TIPO_CUENTA_REPOSITORY,
  TipoCuentaRepository,
} from '../interfaces/tipo-cuenta-repository.interfaces';
import { TipoCuenta } from '../entities/tipo-cuenta.entity';
import { CreateTipoCuentaDto, TipoCuentaDto } from '../dtos/tipo-cuenta.dto';

@Injectable()
export class TipoCuentaService {
  constructor(
    @Inject(TIPO_CUENTA_REPOSITORY)
    private readonly tipoCuentaRepository: TipoCuentaRepository,
  ) {}

  async create(createTipoCuentaDto: CreateTipoCuentaDto): Promise<TipoCuenta> {
    return await this.tipoCuentaRepository.create(createTipoCuentaDto);
  }

  async update(id: string, tipoCuentaDto: TipoCuentaDto): Promise<TipoCuenta> {
    return await this.tipoCuentaRepository.update(id, tipoCuentaDto);
  }

  async delete(id: string): Promise<TipoCuenta> {
    return await this.tipoCuentaRepository.delete(id);
  }

  async findAll(tipoCuentaDto: TipoCuentaDto): Promise<TipoCuenta[]> {
    return await this.tipoCuentaRepository.findAll(tipoCuentaDto);
  }

  async findOne(id: string): Promise<TipoCuenta> {
    return await this.tipoCuentaRepository.findOne(id);
  }
}
