import { UserSession } from './auth/[...nextauth]';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
const prisma = new PrismaClient()
// POST /api/todos -> create todo
 export default async function handler (req:NextApiRequest, res:NextApiResponse){
    if(req.method !== "POST"){
        res.status(405).send("Method not Allowed")
        return
    }

    const session: Session | null = await getSession({req})

    if(!session){
        res.status(401).send("Unautharized")
        return
    }
    
    if(req.method === "POST"){
        //POST /api/todos -> create todo
        const { title } = req.body;

        if(!title){
            res.status(400).send("Bod Request")
        return
        }
        const userSession :UserSession = session as UserSession
        const userTodo = await prisma.todo.create({
            data:{
                title,
                userId:userSession.userId,
                isComplated:false
            }
        })

        return res.json(userTodo)
    }
}

