import { connection } from "../connection";
import { Response, Request } from "express";
import { Docente } from "../types";
const criarDocente = async (req: Request, res: Response) => {
    try {
        const { nome, email, data_nasc, turma_id } = req.body
        if (!nome || !email || !data_nasc || !turma_id) {
            throw new Error("Esta faltando parametros.");
        }
        const docente: Docente = {
            id_docente: Date.now().toString(),
            nome,
            email,
            data_nasc,
            turma_id
        }
        await connection("Docente").insert(docente)
        res.send({ message: "Docente adicionado com sucesso!" })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}
export default criarDocente