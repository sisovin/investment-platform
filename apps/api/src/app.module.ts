import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { InvestmentsModule } from './investments/investments.module';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [AuthModule, UsersModule, InvestmentsModule, PortfoliosModule, TransactionsModule],
  providers: [PrismaService],
})
export class AppModule {}
