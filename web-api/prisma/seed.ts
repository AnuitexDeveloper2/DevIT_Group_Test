import { PrismaClient, Role } from '@prisma/client';
import * as argon from 'argon2';

const prisma = new PrismaClient();
async function main() {
  const hash = await argon.hash('000000');
  await prisma.user.upsert({
    where: { email: 'test@prisma.io' },
    update: {},
    create: {
      email: 'admin@gmail.com',
      hash: hash,
      firstName: 'Admin',
      lastName: 'Admin',
      role: Role.ADMIN,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
