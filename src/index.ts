/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { readvSync } from "fs";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);

  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05

  // R01
  const entrada = require("prompt-sync")({ sigint: true });
  //const Aluno = new Alunos();
  let q;
  var NotaMaior: number = 0;
  var NomeAluno: string = "";
  var name: string;
  var nota: number;

  console.log("");
  console.log("DESAFIO 03.");
  console.log("");

  q = parseInt(entrada("Qual a quantidade de alunos nesta sala? "));
  for (let i = 1; i <= q; i++) {
    name = entrada(`Nome do ${i}º aluno: `);
    nota = parseFloat(entrada(`Nota do aluno ${name}: `));
    if (nota > NotaMaior) {
      NotaMaior = nota;
      NomeAluno = name;
    }
  }
  console.log("");
  console.log(`Alunos com a maior Nota da Classe:`);
  console.log(`${NomeAluno}, com a Nota ${NotaMaior}`);
});
