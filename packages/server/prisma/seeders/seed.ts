import { PrismaClient } from '@prisma/client'
import { users } from '../factories/users';
import { boards } from '../factories/boards';
import { columns } from '../factories/columns';
import { tasks } from '../factories/tasks';
import { boardMembers } from '../factories/boardMembers';
import { taskMembers } from '../factories/taskMembers';

const prisma = new PrismaClient()

async function populate() {
  await prisma.user.createMany({
    data: users,
  })
  await prisma.board.createMany({
    data: boards,
  })
  await prisma.column.createMany({
    data: columns
  })
  await prisma.task.createMany({
    data: tasks
  })
  await prisma.boardMember.createMany({
    data: boardMembers
  })
  await prisma.taskMember.createMany({
    data: taskMembers
  })
}

async function main() {
  await prisma.$transaction(async () => {
    await populate()
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })
