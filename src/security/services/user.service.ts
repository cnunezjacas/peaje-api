import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from '../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { ChangePasswordUserDto } from '../dtos/change-passwordUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(dto: CreateUserDto) {
    const { name, password, role, username } = dto;
    const userByUserName = await this.findByUsername(username);
    if (userByUserName) {
      throw new ConflictException('Username already exists');
    }
    try {
      const salt: string = await bcrypt.genSalt();
      const hashedPassword: string = await bcrypt.hash(password, salt);
      return await this.userModel.create({
        name,
        password: hashedPassword,
        role,
        username,
        salt,
      });
    } catch (error: any) {
      console.error(error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async update(id: string, dto: UpdateUserDto) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return await this.userModel.findByIdAndUpdate(id, dto, { new: true });
  }
  async delete(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userModel.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true },
    );
  }
  async changePassword(id: string, dto: ChangePasswordUserDto) {
    const { password } = dto;
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const salt: string = await bcrypt.genSalt();
    const hashedPassword: string = await bcrypt.hash(password, salt);
    return await this.userModel.findByIdAndUpdate(id, {
      password: hashedPassword,
      salt,
    });
  }

  async findAll(skip: number, take: number, keyword: string) {
    return this.userModel.find();
  }

  findByUsername(username: string) {
    return this.userModel.findOne({
      username,
    });
  }
}
