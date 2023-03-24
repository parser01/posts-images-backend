import * as uuid from "uuid";
import * as path from "path";
import { fileURLToPath } from "url";

class FileService {
	save(file) {
		try {
			const __filename = fileURLToPath(import.meta.url);
			const __dirname = path.dirname(__filename);
			const fileName = `${uuid.v4()}.jpg`;
			const filePath = path.join(__dirname, "..", "static", fileName);
			// const filePath = path.resolve("static", fileName);
			file.mv(filePath);
			return fileName;
		} catch (error) {
			console.log(error);
		}
	}
}

export default new FileService();
