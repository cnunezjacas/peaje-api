import { Inject, Injectable } from '@nestjs/common';
import { CUENTA_REPOSITORY, CuentaRepository } from '../interfaces/cuenta-repository.interfaces';
import { Cuenta } from '../entities/cuenta.entity';
import { CreateCuentaDto, CuentaDto } from '../dtos/cuenta.dto';

@Injectable()
export class CuentaService {
  constructor(
    @Inject(CUENTA_REPOSITORY)
    private readonly cuentaRepository: CuentaRepository,
  ) {}

  async create(createCuentaDto: CreateCuentaDto): Promise<Cuenta> {
    return await this.cuentaRepository.create(createCuentaDto);
  }

  async update(id: string, cuentaDto: CuentaDto): Promise<Cuenta> {
    return await this.cuentaRepository.update(id, cuentaDto);
  }

  async delete(id: string): Promise<Cuenta> {
    return await this.cuentaRepository.delete(id);
  }

  async findAll(cuentaDto: CuentaDto): Promise<Cuenta[]> {
    return await this.cuentaRepository.findAll(cuentaDto);
  }

  async findOne(id: string): Promise<Cuenta> {
    return await this.cuentaRepository.findOne(id);
  }
}
