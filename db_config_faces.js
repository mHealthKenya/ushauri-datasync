const Sequelize = require("sequelize");
require("dotenv").config();

const database = process.env.DB_DATABASE_FACES;
const username = process.env.DB_USERNAME_FACES;
const password = process.env.DB_PASSWORD_FACES;
const port = process.env.DB_PORT_FACES;
const db_server = process.env.DB_HOST_FACES;

const sequelize = new Sequelize(database, username, password, {
    host: db_server,
    port: port,
    query: {raw: true},
    dialect: "mysql"
});

const connect = async () => {
    await sequelize
        .authenticate()
        .then(() => {
            console.log("Connection has been established successfully.");
        })
        .catch(err => {
            console.log("Unable to connect to the database:", err.message);
        });
};
const db = {
    sequelize: sequelize,
    connect
};

module.exports = db;
