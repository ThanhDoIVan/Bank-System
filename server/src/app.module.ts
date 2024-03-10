/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { AccountsModule } from './accounts/accounts.module';
import { AccountCode } from './accounts/entities/type.entity';
import { Account } from './accounts/entities/account.entity';
import { ContractsModule } from './contracts/contracts.module';


@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [
        User, AccountCode, Account
      ],
      synchronize: true,
    }),
    AccountsModule,
    ContractsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
