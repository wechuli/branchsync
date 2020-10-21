const yaml = require("js-yaml");
const fs = require("fs");

const fileContent = fs.readFileSync("./test.yml", "utf-8").toString();
const data = yaml.safeLoad(fileContent);

console.log(data);
