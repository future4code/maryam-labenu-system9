import { Request, Response } from "express";
import { connection } from "../connection";

export default async function mudarEstudanteDeTurma (req: Request, res: Response){
    try {
        const {turma_id, id_aluno} = req.body
        if (!turma_id || !id_aluno){
            throw new Error("Está faltando parametros.")
        }
        await connection.raw(`
            UPDATE Estudante
            SET turma_id = "${turma_id}"
            WHERE id_aluno = "${id_aluno}"
        `)
        res.status(200).send("turma alterada com sucesso")
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}