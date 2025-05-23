import dotenv from "dotenv";
dotenv.config();

import pkg from "pg";
const { Client } = pkg;

async function testConnection() {
  try {
    const dbConfig = {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DATABASE,
      password: process.env.POSTGRES_PASSWORD,
    };

    console.log("Configuração utilizada:", dbConfig);
    const client = new Client(dbConfig);

    console.log("Tentando conectar ao PostgreSQL...");
    await client.connect();
    console.log("Conectado com sucesso!");

    const result = await client.query("SELECT 1 + 1 as sum;");
    console.log("Resultado da query:", result.rows);

    await client.end();
    console.log("Conexão fechada.");
  } catch (error) {
    console.error("Erro ao conectar ao PostgreSQL:", error.message);
  }
}

testConnection();
