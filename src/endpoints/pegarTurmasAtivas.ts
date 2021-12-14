import { Request, Response } from "express";
import { connection } from "../connection";

export default async function pegarTurmasAtivas (req: Request, res: Response){
    try {
        const resultado: any = await connection.raw(`
            SELECT * FROM Turma
            WHERE modulo > 0
        `);
        res.status(200).send(resultado[0])
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}