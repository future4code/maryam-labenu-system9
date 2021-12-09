import { Request, Response } from "express";
import { connection } from "../connection";
import { Turma } from "../types";

export default async function criarTurma (req:Request, res:Response) {

    try {
        const turma = req.body.turma
        if (!turma){
            throw new Error("Está faltando parametros.")
        }

        const novaTurma: Turma = {
            id: Date.now().toString(),
            turma,
            modulo: 0
        }

        await connection("Turma").insert(novaTurma)
        res.status(201).send({message: "turma criada com sucesso!"})
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}