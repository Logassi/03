import { config } from "dotenv";

config({
  path: ".env",
});

export const { PORT, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } =
  process.env;
