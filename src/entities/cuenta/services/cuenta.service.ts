import { Inject, Injectable } from '@nestjs/common';
import {
  CUENTA_REPOSITORY,
  CuentaRepository,
} from '../../cuenta/interfaces/cuenta-repository.interfaces';
import { Cuenta } from '../../cuenta/entities/cuenta.entity';
import { CreateCuentaDto } from '../../cuenta/dtos/create-cuenta.dto';
import { UpdateCuentaDto } from '../dtos/update-cuenta.dto';

@Injectable()
export class CuentaService {
  constructor(
    @Inject(CUENTA_REPOSITORY)
    private readonly cuentaRepository: CuentaRepository,
  ) {}

  async create(createCuentaDto: CreateCuentaDto): Promise<Cuenta> {
    return await this.cuentaRepository.create(createCuentaDto);
  }

  async update(id: string, updateCuentaDto: UpdateCuentaDto): Promise<Cuenta> {
    return await this.cuentaRepository.update(id, updateCuentaDto);
  }

  async delete(id: string): Promise<Cuenta> {
    return await this.cuentaRepository.delete(id);
  }

  async findAll(): Promise<Cuenta[]> {
    return await this.cuentaRepository.findAll();
  }

  async findOne(id: string): Promise<Cuenta> {
    return await this.cuentaRepository.findOne(id);
  }
}
