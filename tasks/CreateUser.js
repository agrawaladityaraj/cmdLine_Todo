const readline = require("readline-sync");
const fs = require("fs");
const { read, write } = require("../utils/FileOps");

const createUser = async () => {
  let email = readline.question("Email ID: ");
  let name = readline.question("Name: ");
  let data = await read("./data/todo.json");
  data = data.toString() ? JSON.parse(data) : [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].Email == email && data[i].Name == name) {
      console.log("User Already Exists");
      return;
    } else if (data[i].Email == email) {
      console.log("Email Already Exists");
      return;
    } else if (data[i].Name == name) {
      console.log("Name Already Exists");
      return;
    }
  }
  let input = {
    Email: email,
    Name: name,
    Todos: [],
  };
  data.unshift(input);
  await write("./data/todo.json", JSON.stringify(data));
  console.log("User Added Successfully");
};

module.exports = createUser;
