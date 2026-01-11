// prisma.context.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Ngữ cảnh 1: Kết nối cơ sở dữ liệu PostgreSQL qua DATABASE_URL
// .env: DATABASE_URL="postgresql://user:pass@localhost:5432/mydb"

// Ngữ cảnh 2: Tạo bảng qua schema.prisma
// schema.prisma
/*
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String
  posts Post[]
}

model Post {
  id      Int     @id @default(autoincrement())
  title   String
  content String?
  userId  Int
  user    User    @relation(fields: [userId], references: [id])
}
*/

// Ngữ cảnh 3: CRUD dữ liệu
const createUser = async () => {
  return await prisma.user.create({
    data: { email: 'test@example.com', name: 'Test User' }
  });
};

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const updateUser = async (id) => {
  return await prisma.user.update({
    where: { id },
    data: { name: 'Updated Name' }
  });
};

const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id } });
};

// Ngữ cảnh 4: Truy vấn liên kết (1-n) với include
const getUserWithPosts = async () => {
  return await prisma.user.findMany({
    include: { posts: true }
  });
};

// Ngữ cảnh 5: Truy vấn nâng cao với điều kiện
const getFilteredPosts = async () => {
  return await prisma.post.findMany({
    where: {
      title: { contains: 'react' },
      user: { email: { endsWith: '@gmail.com' } }
    },
    orderBy: { id: 'desc' },
    take: 5
  });
};

// Ngữ cảnh 6: Seed dữ liệu giả để test
const seed = async () => {
  await prisma.user.create({
    data: {
      email: 'admin@site.com',
      name: 'Admin',
      posts: {
        create: [
          { title: 'Hello', content: 'World' },
          { title: 'React', content: 'Next.js is cool' }
        ]
      }
    }
  });
};

// Ngữ cảnh 7: Ẩn thông tin nhạy cảm (chọn trường cụ thể)
const getUsersNoEmail = async () => {
  return await prisma.user.findMany({
    select: { id: true, name: true } // bỏ email
  });
};

// Ngữ cảnh 8: Dùng Transaction cho nhiều thao tác
const createUserAndPost = async () => {
  return await prisma.$transaction([
    prisma.user.create({
      data: { email: 'tx@demo.com', name: 'TX User' }
    }),
    prisma.post.create({
      data: { title: 'Tx Post', userId: 1 }
    })
  ]);
};

// Ngữ cảnh 9: Tạo chỉ mục, đảm bảo unique (schema.prisma)
/*
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String

  @@index([name])
}
*/

// Ngữ cảnh 10: Prisma Middleware (ghi log truy vấn)
prisma.$use(async (params, next) => {
  console.log(`⚙️ Query: ${params.model}.${params.action}`);
  const result = await next(params);
  return result;
});
