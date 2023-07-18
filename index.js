import express from "express";
import db from "./config/Database.js";
import catsRoute from "./routes/CatsRoute.js";

const port = 3080;
const app = express();

app.use(catsRoute);

app.use("/", (req, res) => {
	res.send({
		message: "App Working!",
	});
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

db.authenticate()
	.then(() => {
		console.log("Database Connected!");
	})
	.catch((err) => {
		console.error("Unable to connect! : ", err);
	});
