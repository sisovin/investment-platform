import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: 'password123',
      portfolios: {
        create: [
          {
            name: 'Retirement Fund',
            investments: {
              create: [
                { amount: 1000 },
                { amount: 2000 },
              ],
            },
          },
          {
            name: 'Savings Account',
            investments: {
              create: [
                { amount: 500 },
                { amount: 1500 },
              ],
            },
          },
        ],
      },
    },
  });

  console.log({ user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
