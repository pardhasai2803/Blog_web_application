import mysql from 'mysql';

export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"pardhasai123",
    database:"blog"
})