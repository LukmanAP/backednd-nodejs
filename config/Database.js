import { Sequelize } from "sequelize";

const db = new Sequelize("catidentifier", "root", "", {
	host: "localhost",
	port: "3306",
	dialect: "mysql",
});

export default db;
