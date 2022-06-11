import { UserSession } from './auth/[...nextauth]';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
const prisma = new PrismaClient()
//    *GET /api/todos -> all the todos of the current user
 export default async function handler (req:NextApiRequest, res:NextApiResponse){
    if(req.method !== "GET"){
        res.status(405).send("Method not Allowed")
        return
    }

    const session: Session | null = await getSession({req})

    if(!session){
        res.status(401).send("Unautharized")
        return
    }
    
    if(req.method === "GET"){
        // Process a GET request 
        // Process all the todos of the current user

    const userSession :UserSession = session as UserSession 

       const todos =  await prisma.todo.findMany({
           orderBy:[
               {
                   createdAt:"desc"
               },
           ],
            where:{
                userId:userSession.userId
            }
        })
        return res.json(todos)
    }
}

