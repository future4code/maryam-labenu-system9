import { Request, Response } from "express";
import { connection } from "../connection";

export default async function mudarDocenteDeTurma (req: Request, res: Response){
    try {
        const {turma_id, id_docente} = req.body
        if (!turma_id || !id_docente){
            throw new Error("Está faltando parametros.")
        }
        await connection.raw(`
            UPDATE Docente
            SET turma_id = "${turma_id}"
            WHERE id_docente = "${id_docente}"
        `)
        res.status(200).send("turma alterada com sucesso")
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}