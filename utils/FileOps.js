const fs = require("fs");

const write = (filepath, data) => {
  return new Promise((res, rej) => {
    fs.writeFile(filepath, data.toString(), (err) => {
      if (err) {
        rej(err);
      }
      res("Written.");
    });
  });
};

const read = (filepath) => {
  return new Promise((res, rej) => {
    fs.readFile(filepath, (err, data) => {
      if (err) {
        rej(err);
      }
      res(data);
    });
  });
};

module.exports = { read, write };
