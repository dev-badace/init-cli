const path = require("path");
const yargs = require("yargs");
const chalk = require("chalk");
const check = require("../utils/validatorCheck");
const files = require("../utils/files");

//Runs on every command , This command is to initialize a project from a set
yargs.command({
  command: "*",
  description: "Creates the boilerplate project",
  builder: {
    // Takes an optional argument called foldername , alias -f , i not provided then allbacks to default
    folderName: {
      alias: "f",
      demandOption: false,
      description: "sets the folder name",
      type: "string",
    },
  },
  async handler(args) {
    try {
      console.log();
      // It will return false if the command is one of the predifined commands else it will return the command itself
      const arg = check.checkArgs();
      if (!arg) return;

      //Reads from the set.json file .  readFile alwas return a javascript object
      const data = await files.readFile(process.env.SET_LOC);

      // If arg is not present in data return.
      if (!data[arg]) throw new Error(`${chalk.red("Error: no set found!")}`);

      // folderName is the folder path of the folder to copy!
      const { folderName, defaultName } = data[arg];
      console.log(`${chalk.green("Initalizing the project ...")}`);
      await files.copyDir(
        folderName,
        path.join(process.cwd(), args.folderName || defaultName) // set the foldername if folderName provided in args, else set to default
      );
      console.log(`${chalk.green("The Project is successfully created!")}`);
    } catch (e) {
      console.log(e);
      console.log(e.message);
    }
  },
}).argv;
