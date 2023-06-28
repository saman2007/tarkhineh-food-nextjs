import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASENAME,
};

const connection = mysql.createPool(dbConfig);

export { connection as mysql };
