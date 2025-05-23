import dotenv from "dotenv";
dotenv.config();

console.log("Variáveis carregadas do .env:");
console.log("POSTGRES_HOST:", process.env.POSTGRES_HOST);
console.log("POSTGRES_PORT:", process.env.POSTGRES_PORT);
console.log("POSTGRES_USER:", process.env.POSTGRES_USER);
console.log("POSTGRES_DATABASE:", process.env.POSTGRES_DATABASE);
console.log(
  "POSTGRES_PASSWORD:",
  process.env.POSTGRES_PASSWORD ? "***definida***" : "undefined",
);
