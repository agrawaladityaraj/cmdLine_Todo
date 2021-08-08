const readline = require("readline-sync");
const fs = require("fs");
const { read, write } = require("../utils/FileOps");

const editParticularTask = async () => {
  let email = readline.question("Email ID: ");
  let id = readline.question("ID of Particular Task: ");
  let task = readline.question("Task: ");
  let data = await read("./data/todo.json");
  if (data.toString() != "" && data != []) {
    data = JSON.parse(data);
    let tf1 = false;
    let tf2 = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].Email == email) {
        for (let j = 0; j < data[i].Todos.length; j++) {
          if (data[i].Todos[j].id == id) {
            data[i].Todos[j].task = task;
            tf2 = true;
          }
        }
        tf1 = true;
      }
    }
    if (tf1 && !tf2) {
      console.log("Task not found");
    } else if (!tf1) {
      console.log("Email not registered.");
    } else {
      await write("./data/todo.json", JSON.stringify(data));
      console.log("Task Edited Successfully");
    }
  } else {
    console.log("No users exist.");
  }
};

module.exports = editParticularTask;
