import { Request, Response } from "express";
import { connection } from "../connection";

export default async function atualizaModuloTurma (req: Request, res: Response){
    try {
        const {modulo, id} = req.body
        if (!modulo || !id){
            throw new Error("Está faltando parametros.")
        }
        await connection.raw(`
            UPDATE Turma
            SET modulo = ${modulo}
            WHERE id = ${id}
        `)
        res.status(200).send("modulo alterado com sucesso")
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}