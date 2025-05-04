import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';

@Injectable()
export class PortfoliosService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPortfolioDto: CreatePortfolioDto) {
    return this.prisma.portfolio.create({ data: createPortfolioDto });
  }

  findAll() {
    return this.prisma.portfolio.findMany();
  }

  findOne(id: number) {
    return this.prisma.portfolio.findUnique({ where: { id } });
  }

  update(id: number, updatePortfolioDto: UpdatePortfolioDto) {
    return this.prisma.portfolio.update({
      where: { id },
      data: updatePortfolioDto,
    });
  }

  remove(id: number) {
    return this.prisma.portfolio.delete({ where: { id } });
  }
}
