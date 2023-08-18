import React from "react";
import App from "../src/App";
import path from "path";
import fs from "fs";

export const InitialCartoonCharacterDataContext = React.createContext();

export async function getStaticProps() {
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  const jsonFile = path.resolve("./", "db.json");
  let initialCartoonCharacterData;
  try {
    const readFileData = await readFile(jsonFile);
    initialCartoonCharacterData = JSON.parse(readFileData).cartoons;
  } catch (e) {
    console.log("/api/cartoons error:", e);
  }

  return { revalidate: 1, props: { initialCartoonCharacterData } };
}

function cartoons(initialCartoonCharacterData) {
  return (
    <InitialCartoonCharacterDataContext.Provider
      value={initialCartoonCharacterData}
    >
      <App pageName="Cartoons" />
    </InitialCartoonCharacterDataContext.Provider>
  );
}

export default cartoons;
