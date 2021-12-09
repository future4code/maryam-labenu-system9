import { connection } from "../connection";
import { Response, Request } from "express";
import { Estudante } from "../types";
const criarEstudante = async (req: Request, res: Response) => {
    try {
        const { nome, email, data_nasc, turma_id } = req.body
        if (!nome || !email || !data_nasc || !turma_id) {
            throw new Error("Esta faltando parametros.");
        }
        const estudante: Estudante = {
            id_aluno: Date.now().toString(),
            nome,
            email,
            data_nasc,
            turma_id
        }
        await connection("Estudante").insert(estudante)
        res.send({ message: "Estudante adicionado com sucesso!" })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}
export default criarEstudante