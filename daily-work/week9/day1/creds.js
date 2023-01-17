const Pool = require("pg").Pool

const creds = new Pool({
    host: "localhost",
    port: 5432,
    database: "todolist",
    user: "postgres",
    password: process.env.POSTGRES_PASS
})

module.exports = creds