import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {

  constructor(@InjectRepository(Account) private repo: Repository<Account>) {

  }

  create(createAccountDto: CreateAccountDto) {
    return 'This action adds a new account';
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOne({where: {id}});
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    return await this.repo.save({id, ...updateAccountDto});
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
