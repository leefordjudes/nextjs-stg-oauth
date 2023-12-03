import { PrismaClient } from '@prisma/client';

// export const db = new PrismaClient();

const global = {
  db: new PrismaClient(),
};
let db: PrismaClient;

//check if we are running in production mode
if (process.env.NODE_ENV === 'production') {
  console.log('\nProduction mode: New Prisma client\n');
  db = new PrismaClient();
} else {
  console.log('\nDev mode\n');
  //check if there is already a connection to the database
  if (!global.db) {
    console.log('\nNew Prisma client\n');
    global.db = new PrismaClient();
  }
  console.log('\nExisting Prisma client\n');
  db = global.db;
}

export { db };
