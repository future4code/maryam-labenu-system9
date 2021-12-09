export type Estudante = {
    id_aluno: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}

export type Turma = {
    id: string,
    turma: string,
    modulo: number
}

export type Docente = {
    id_docente: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}