import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  withoutDigits(text) {
    if (text.match(/\d/)) 
      return false
    else
      return true
  }

  deleteSpaces(text) {
    text = text.trim();
    if (text) 
      return true
    else 
      return false
  }

  dateSend() {
    
  }

  constructor(@InjectRepository(User) private repo: Repository<User>) {

  }

  async create(createUserDto: CreateUserDto) {
    if (this.withoutDigits(createUserDto.name) && this.withoutDigits(createUserDto.surname) && this.withoutDigits(createUserDto.fatherName) 
    && this.deleteSpaces(createUserDto.name) && this.deleteSpaces(createUserDto.surname) && this.deleteSpaces(createUserDto.fatherName)) {
      return await this.repo.save(createUserDto);
    }
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOne({where: {id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (this.withoutDigits(updateUserDto.name) && this.withoutDigits(updateUserDto.surname) && this.withoutDigits(updateUserDto.fatherName)
    && this.deleteSpaces(updateUserDto.name) && this.deleteSpaces(updateUserDto.surname) && this.deleteSpaces(updateUserDto.fatherName)) {
      return await this.repo.save({id, ...updateUserDto});
    }
  }

  async remove(id: number) {
    const user = await this.repo.findOne({where: {id}});
    return await this.repo.remove(user);
  }
}
