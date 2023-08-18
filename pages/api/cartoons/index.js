// import cartoonCharacterData from "../../../src/CartoonData";

import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const delay = (ms) => new promisify((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  // res.status(200).send(JSON.stringify(cartoonCharacterData, null, 2));
  const jsonFile = path.resolve("./", "db.json");
  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const cartoons = JSON.parse(readFileData).cartoons;

    if (!cartoons) {
      res.status(404).send("Error: request failed with status code 404");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(cartoons, null, 2));
      console.log("GET /api/cartoons status: 200");
    }
  } catch (e) {
    console.log("/api/cartoons error:", e);
  }
}
