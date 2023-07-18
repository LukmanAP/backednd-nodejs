import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Cats = db.define("cats", {
	id_cat: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	cat_race: {
		type: DataTypes.STRING,
	},
	cat_desc: {
		type: DataTypes.TEXT,
	},
	cat_care: {
		type: DataTypes.TEXT,
	},
});

export default Cats;
