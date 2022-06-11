import { UserSession } from '../auth/[...nextauth]';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
const prisma = new PrismaClient()

type TodoUpdate={
    title?: string
    isComplated?:boolean
}

// POST /api/todo -> create todo
// PUT /api/todo/:id -> update todo
// DELETE /api/todos/:id -> delete todo
 export default async function handler (req:NextApiRequest, res:NextApiResponse){
    if(!["DELETE", "PUT", "GET"].includes(req.method || "")){
        res.status(405).send("Method not Allowed")
        return
    }

    const session: Session | null = await getSession({req})

    if(!session){
        res.status(401).send("Unautharized")
        return
    }
    
    
    if(req.method === "PUT"){
        //*PUT /api/todo/:id -> update todo
        const { pid } = req.query
        const { title, isComplated } = req.body;

        const updatedDate: TodoUpdate = {}
        if(title) updatedDate.title = title
        if(isComplated !== undefined) updatedDate.isComplated = isComplated
        const id: string = pid.toString()
       const updateTodo = await prisma.todo.update({
            where: {id},
            data:updatedDate
        })
        return res.json(updateTodo)
    }
    
    if(req.method === "DELETE"){
        //DELETE /api/todos/:id -> delete todo
        const { pid } = req.query
        console.log(pid)
        const id: string = pid.toString()
        const deleteTodo = await prisma.todo.delete({
            where:{ id },
        })
        console.log(deleteTodo)
        return res.json(deleteTodo)
    }
}

