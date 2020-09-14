const yargs = require("yargs");

const files = require("../utils/files");

// List command return the list of the sets
yargs.command({
  command: "list",
  description: "List of currently available sets",
  aliases: ["l"],
  async handler() {
    try {
      //Read data from set.json file, ! it always returns javascript object
      const data = await files.readFile(process.env.SET_LOC);

      //loop over data and printout data.[property] property, which is where the name of set is stored
      for (let setName in data) {
        process.stdout.write(`   ${setName} \n`);
      }
    } catch (e) {
      process.stderr.write(e.message);
    }
  },
});
