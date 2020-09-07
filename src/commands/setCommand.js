const yargs = require("yargs");

const files = require("../utils/files");

yargs.command({
  command: "set",
  describe:
    "Sets an boilerplate project, It will overwrite if any existing key is created!",
  builder: {
    folder: {
      alias: "f",
      demandOption: true,
      description: "relative path to folder",
      type: "string",
    },
    name: {
      alias: "n",
      demandOption: true,
      description: "name of the set boileplate",
      type: "string",
    },
    defaultName: {
      alias: "d",
      demandOption: false,
      description:
        "will set the name of the directory if no directory name is passed! it default to boilerplate",
      default: "boilerplate",
      type: "string",
    },
  },
  async handler({ folder, name, defaultName }) {
    // checks if folder exist , else throws an error
    await files.folderCheck(folder);

    // creates an absolute path of the folder
    const folderName = path.join(process.cwd(), folder);

    // creates an dataObj, sets the key to the name of the set and other data as property in the object
    const dataObj = {
      [name]: { folderName, defaultName },
    };

    // writes the data to set.json file
    await files.appendFile(process.env.SET_LOC, dataObj);
    process.exit(0);
  },
}).argv;
