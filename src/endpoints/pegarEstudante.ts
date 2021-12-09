import { Request, Response } from "express";
import { connection } from "../connection";

export default async function pegarEstudante (req: Request, res: Response){
    try {
        const nomeDaPesquisa = req.params.nome
        const resultado: any = await connection.raw(`
            SELECT * FROM Estudante
            WHERE nome LIKE "%${nomeDaPesquisa}%"
        `)
        res.status(200).send(resultado[0])
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}