import { AccountsService } from './../accounts/accounts.service';
import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './entities/contract.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContractsService {

  constructor(@InjectRepository(Contract) private repo: Repository<Contract>,
              private accountsService: AccountsService) {

  }

  async create(createContractDto: CreateContractDto) {
    const id = 1;
    const account = await this.accountsService.findOne(id);
    account.credit = account.credit + createContractDto.amount;
    account.saldo = account.saldo + createContractDto.amount;
    this.accountsService.update(id, account);

    return this.repo.save(createContractDto);
  }

  findAll() {
    return `This action returns all contracts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contract`;
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    return `This action updates a #${id} contract`;
  }

  remove(id: number) {
    return `This action removes a #${id} contract`;
  }
}
