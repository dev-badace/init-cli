const fs = require("fs").promises;
const { existsSync } = require("fs");

const fse = require("fs-extra");
const chalk = require("chalk");

const existsCheck = async (path) => {
  return await fs.access(path);
};

const folderCheck = async (folderPath) => {
  await existsCheck(folderPath);

  const isFolder = await fs.lstat(folderPath);
  if (!isFolder.isDirectory())
    throw new Error(`chalk.red("Specified path is not a folder")`);
  return true;
};
const fileCheck = async (folderPath) => {
  await existsCheck(folderPath);

  const isFile = await fs.lstat(folderPath);
  if (!isFile.isFile())
    throw new Error(`chalk.red("Specified path is not a folder")`);
  return true;
};

const appendFile = async (filePath, Objdata) => {
  try {
    const fileExists = existsSync(filePath);

    if (!fileExists)
      return await fs.writeFile(filePath, JSON.stringify(Objdata));

    const fileBuffer = await fs.readFile(filePath);
    const data = JSON.parse(fileBuffer);

    return await fs.writeFile(
      filePath,
      JSON.stringify({ ...data, ...Objdata })
    );
  } catch (e) {
    console.log(e.message);
    console.log(`${chalk.red("Error: Something went worng")}`);
  }
};

const writeFile = async (filePath, data) => {
  try {
    return await fs.writeFile(filePath, JSON.stringify({ ...data }));
  } catch (e) {
    console.log(e.message);
    console.log(`${chalk.red("Error: Something went worng")}`);
  }
};

const readFile = async (filePath) => {
  try {
    await fileCheck(filePath);

    const data = await fs.readFile(filePath);

    return JSON.parse(data);
  } catch (e) {
    console.log(
      `${chalk.red(
        `If you see this error, chances are that you have not created a set yet`
      )}`
    );
    console.log(e.message);
  }
};

const copyDir = async (src, dest) => {
  try {
    await folderCheck(src);
    const destFolderExist = existsSync(dest);

    if (!destFolderExist) {
      await fs.mkdir(dest);
    }

    fse.copy(src, dest, (err) => {
      if (err) return console.error(err);
    });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  existsCheck,
  folderCheck,
  fileCheck,
  appendFile,
  writeFile,
  copyDir,
  readFile,
};
