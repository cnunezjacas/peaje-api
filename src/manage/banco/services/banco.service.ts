import { Inject, Injectable } from '@nestjs/common';
import { BANCO_REPOSITORY, BancoRepository } from '../interfaces/banco-repository.interfaces';
import { Banco } from '../entities/banco.entity';
import { CreateBancoDto, BancoDto } from '../dtos/banco.dto';

@Injectable()
export class BancoService {
  constructor(
    @Inject(BANCO_REPOSITORY)
    private readonly bancoRepository: BancoRepository,
  ) {}

  async create(createBancoDto: CreateBancoDto): Promise<Banco> {
    return await this.bancoRepository.create(createBancoDto);
  }

  async update(id: string, bancoDto: BancoDto): Promise<Banco> {
    return await this.bancoRepository.update(id, bancoDto);
  }

  async delete(id: string): Promise<Banco> {
    return await this.bancoRepository.delete(id);
  }

  async findAll(bancoDto: BancoDto): Promise<Banco[]> {
    return await this.bancoRepository.findAll(bancoDto);
  }

  async findOne(id: string): Promise<Banco> {
    return await this.bancoRepository.findOne(id);
  }
}
