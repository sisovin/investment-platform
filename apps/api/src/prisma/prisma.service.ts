import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async createInvestment(data: any) {
    return this.investment.create({ data });
  }

  async findAllInvestments() {
    return this.investment.findMany();
  }

  async findInvestmentById(id: number) {
    return this.investment.findUnique({ where: { id } });
  }

  async updateInvestment(id: number, data: any) {
    return this.investment.update({ where: { id }, data });
  }

  async deleteInvestment(id: number) {
    return this.investment.delete({ where: { id } });
  }

  async createPortfolio(data: any) {
    return this.portfolio.create({ data });
  }

  async findAllPortfolios() {
    return this.portfolio.findMany();
  }

  async findPortfolioById(id: number) {
    return this.portfolio.findUnique({ where: { id } });
  }

  async updatePortfolio(id: number, data: any) {
    return this.portfolio.update({ where: { id }, data });
  }

  async deletePortfolio(id: number) {
    return this.portfolio.delete({ where: { id } });
  }

  async createTransaction(data: any) {
    return this.transaction.create({ data });
  }

  async findAllTransactions() {
    return this.transaction.findMany();
  }

  async findTransactionById(id: number) {
    return this.transaction.findUnique({ where: { id } });
  }

  async updateTransaction(id: number, data: any) {
    return this.transaction.update({ where: { id }, data });
  }

  async deleteTransaction(id: number) {
    return this.transaction.delete({ where: { id } });
  }
}
