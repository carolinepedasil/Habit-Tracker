import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient(); // acesso ao banco de dados

app.register(cors);

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany();
    // const habits = await prisma.habit.findMany({
    //     where: {
    //         title: {
    //             startsWith: 'Estudar'
    //         }
    //     }
    // });
    return habits;
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
});