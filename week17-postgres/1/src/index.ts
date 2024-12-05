import "dotenv/config";
import { Client } from "pg";

const pgClient = new Client(process.env.DB_CONN_STRING);

async function main() {
  await pgClient.connect();
}

main();
