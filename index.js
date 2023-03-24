import express from "express";
import mongoose from "mongoose";
import postsRouter from "./routers/posts-router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL =
	"mongodb+srv://user:user1@cluster0.i6ztgvf.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", postsRouter);

async function startApp() {
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

startApp();

console.log("haha");
