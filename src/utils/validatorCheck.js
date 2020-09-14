const methods = ["set", "list", "l", "remove", "r"];

const checkArgs = () => {
  if (process.argv[2] && methods.indexOf(process.argv[2]) === -1) {
    return process.argv[2];
  }

  return false;
};

const getArg = (index) => {
  if (process.argv[index]) return process.argv[index];
  return false;
};

module.exports = {
  checkArgs,
  getArg,
};
