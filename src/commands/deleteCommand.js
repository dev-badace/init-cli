const yargs = require("yargs");

const files = require("../utils/files");
const check = require("../utils/validatorCheck");
const chalk = require("chalk");

// List command return the list of the sets
yargs.command({
  command: "remove",
  description: "removes a set",
  aliases: ["r"],
  async handler() {
    try {
      // Get the set to remove from agrs
      const set = check.getArg(3);

      if (!set)
        return process.stderr.write(
          `${chalk.red(" Please Provide a set to remove")}`
        );
      //Read data from set.json file, ! it always returns javascript object
      const data = await files.readFile(process.env.SET_LOC);

      // Check if set exists ? remove the set and write to the file : log the error
      if (!data.hasOwnProperty(set))
        return process.stderr.write(`${chalk.red(" The set Does not exists")}`);

      delete data[set];

      await files.writeFile(process.env.SET_LOC, data);
      process.stdout.write(`${chalk.green(`Successfully removed ${set}`)}`);
    } catch (e) {
      process.stderr.write(e.message);
    }
  },
}).argv;
