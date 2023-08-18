import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const delay = (ms) => new promisify((resolve) => setTimeout(resolve, ms));
const writeFile = promisify(fs.writeFile);

export default async function handler(req, res) {
  const method = req?.method;
  const id = parseInt(req?.query.id);
  const recordFromBody = req?.body;

  if (method != 'PUT') {
    res.send(501).send(`Method ${method} not implemented`);
  } else {
    const jsonFile = path.resolve("./", "db.json");
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const cartoons = JSON.parse(readFileData).cartoons;

      if (!cartoons) {
        res.status(404).send("Error: request failed with status code 404");
      } else {
        const newCartoonsArray = cartoons.map(function (rec) {
          return rec.id === id ? recordFromBody : rec;
        });
        writeFile(
          jsonFile,
          JSON.stringify({ cartoons: newCartoonsArray }, null, 2)
        );
        res.status(200).json(recordFromBody);
        console.log(`PUT /api/cartoons/${id} status: 200`);
      }
    } catch (e) {
      console.log(`/api/cartoons/${id} error:`, e);
    }
  }
}
