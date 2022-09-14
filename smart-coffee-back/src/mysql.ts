import mysql from 'mysql'

export const dbConnection = mysql.createPool({
  "host": "mysql",
  "user": "root",
  "password": "root",
  "database": "smart_coffee",
  "port": 3306,
  multipleStatements: true,
})