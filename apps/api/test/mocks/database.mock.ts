import { PrismaClient } from '@prisma/client';

export class MockPrismaService extends PrismaClient {
  constructor() {
    super();
    this.$use(async (params, next) => {
      if (params.model === 'User') {
        if (params.action === 'create') {
          params.args.data.id = 1;
        }
      }
      return next(params);
    });
  }

  async cleanDatabase() {
    const deleteUsers = this.user.deleteMany();
    const deletePortfolios = this.portfolio.deleteMany();
    const deleteInvestments = this.investment.deleteMany();
    await this.$transaction([deleteUsers, deletePortfolios, deleteInvestments]);
  }
}
