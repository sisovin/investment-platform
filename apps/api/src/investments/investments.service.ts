import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvestmentDto } from './dto/create-investment.dto';

@Injectable()
export class InvestmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInvestmentDto: CreateInvestmentDto) {
    return this.prisma.investment.create({
      data: createInvestmentDto,
    });
  }

  async findAll() {
    return this.prisma.investment.findMany();
  }

  async findOne(id: number) {
    return this.prisma.investment.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateInvestmentDto: CreateInvestmentDto) {
    return this.prisma.investment.update({
      where: { id },
      data: updateInvestmentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.investment.delete({
      where: { id },
    });
  }
}
