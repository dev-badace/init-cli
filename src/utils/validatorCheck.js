const methods = ["set", "list", "l"];

const checkArgs = () => {
  if (process.argv[2] && methods.indexOf(process.argv[2]) === -1) {
    return process.argv[2];
  }

  return false;
};

module.exports = {
  checkArgs,
};
