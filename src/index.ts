import { Request, Response } from "express";
import app from "./app";

app.get("/", (req:Request, res:Response)=>{
    console.log("está tudo funcionando")
})
console.log("aaaaaaaaa")