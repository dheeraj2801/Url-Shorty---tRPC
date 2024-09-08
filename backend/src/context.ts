import { PrismaClient } from '@prisma/client';
import { initTRPC } from '@trpc/server';

export const trpc = initTRPC.create();
