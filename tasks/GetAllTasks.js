const readline = require("readline-sync");
const fs = require("fs");
const { read, write } = require("../utils/FileOps");

const getAllTasks = async () => {
  let email = readline.question("Email ID: ");
  let data = await read("./data/todo.json");
  if (data.toString() != "" && data != []) {
    data = JSON.parse(data);
    let tf = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].Email == email) {
        for (let j = 0; j < data[i].Todos.length; j++) {
          console.log(data[i].Todos[j].task);
        }
        tf = true;
      }
    }
    if (tf == false) {
      console.log("Email not registered");
    }
  } else {
    console.log("No users exist.");
  }
};

module.exports = getAllTasks;
