const readline = require("readline-sync");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { read, write } = require("../utils/FileOps");

const addTodo = async () => {
  let email = readline.question("Email ID: ");
  let task = readline.question("Task: ");
  let data = await read("./data/todo.json");
  if (data.toString() != "" && data != []) {
    data = JSON.parse(data);
    let tf = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].Email == email) {
        let input = {
          id: uuidv4(),
          task: task,
        };
        data[i].Todos.unshift(input);
        tf = true;
      }
    }
    if (tf) {
      await write("./data/todo.json", JSON.stringify(data));
      console.log("Task Added Successfully");
    } else {
      console.log("Email ID not registered");
    }
  } else {
    console.log("No users exist.");
  }
};

module.exports = addTodo;
