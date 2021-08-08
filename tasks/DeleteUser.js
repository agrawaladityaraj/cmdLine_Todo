const readline = require("readline-sync");
const fs = require("fs");
const { read, write } = require("../utils/FileOps");

const deleteUser = async () => {
  let email = readline.question("Email ID: ");
  let data = await read("./data/todo.json");
  if (data.toString() != "" && data != []) {
    data = JSON.parse(data);
    dataCopy = [...data];
    data = data.filter((id) => id.Email !== email);
    if (data.length == dataCopy.length) {
      console.log("User not found.");
      return;
    } else {
      await write("./data/todo.json", JSON.stringify(data));
      console.log("User removed successfully.");
    }
  } else {
    console.log("No users exist.");
  }
};

module.exports = deleteUser;
