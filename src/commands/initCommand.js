const yargs = require("yargs");

const checkArgs = require("../utils/validatorCheck");
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
      // It will return false if the command is one of the predifined commands else it will return the command itself
      const arg = checkArgs.checkArgs();
      if (!arg) return;

      //Reads from the set.json file .  readFile alwas return a javascript object
      const data = await files.readFile(process.env.SET_LOC);

      // If arg is not present in data return.
      if (!data[arg]) throw new Error(`${chalk.red("Error: no set found!")}`);

      // folderName is the folder path of the folder to copy!
      const { folderName, defaultName } = data[arg];
      await files.copyDir(
        folderName,
        path.join(process.cwd(), args.folderName || defaultName) // set the foldername if folderName provided in args, else set to default
      );
    } catch (e) {
      console.log(e.message);
    }
  },
}).argv;
