import app from "./app";
import atualizaModuloTurma from "./endpoints/atualizaModuloTurma";
import criarDocente from "./endpoints/criarDocente";
import criarEstudante from "./endpoints/criarEstudante";
import criarTurma from "./endpoints/criarTurma"
import mudarDocenteDeTurma from "./endpoints/mudarDocenteDeTurma";
import mudarEstudanteDeTurma from "./endpoints/mudarEstudanteDeTurma";
import pegarDocente from "./endpoints/pegarDocentes";
import pegarEstudante from "./endpoints/pegarEstudante";
import pegarTurmasAtivas from "./endpoints/pegarTurmasAtivas";

app.get("/pegar/turma", pegarTurmasAtivas)
app.get("/pegar/docente", pegarDocente)
app.get("/pegar/estudante/:nome", pegarEstudante) 
app.post("/criar/turma", criarTurma)
app.post("/criar/estudante", criarEstudante)
app.post("/criar/docente", criarDocente)
app.put("/atualiza/modulo", atualizaModuloTurma)
app.put("/mudar/turma/estudante", mudarEstudanteDeTurma)
app.put("/mudar/turma/docente", mudarDocenteDeTurma)