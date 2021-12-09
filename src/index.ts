import { Request, Response } from "express";
import app from "./app";
import criarDocente from "./endpoints/criarDocente";
import criarEstudante from "./endpoints/criarEstudante";
import criarTurma from "./endpoints/criarTurma"
import pegarEstudante from "./endpoints/pegarEstudante";
import pegarTurmasAtivas from "./endpoints/pegarTurmasAtivas";


app.post("/criar/turma", criarTurma)
app.post("/criar/estudante", criarEstudante)
app.post("/criar/docente", criarDocente)
app.get("/pegar/turma", pegarTurmasAtivas)
app.post("/pegar/estudante", pegarEstudante) 