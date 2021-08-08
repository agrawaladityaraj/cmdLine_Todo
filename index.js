const readline = require("readline-sync");
createUser = require("./tasks/CreateUser");
deleteUser = require("./tasks/DeleteUser");
addTodo = require("./tasks/AddTodo");
getAllTasks = require("./tasks/GetAllTasks");
getParticularTask = require("./tasks/GetParticularTask");
editParticularTask = require("./tasks/EditParticularTask");
deleteParticularTask = require("./tasks/DeleteParticularTask");

let choice = 1;

const todo = async () => {
  try {
    while (choice != 0) {
      console.log("1. Create a User ID");
      console.log("2. Delete Existing User ID");
      console.log("3. Add a Todo-Task");
      console.log("4. Get all the Existing Tasks");
      console.log("5. Get a Particular Task Data");
      console.log("6. Edit a Particular Task Data");
      console.log("7. Delete a Particular Task");
      console.log("0. Exit the Program");
      console.log();
      choice = Number(readline.question());

      switch (choice) {
        case 1:
          await createUser();
          break;
        case 2:
          await deleteUser();
          break;
        case 3:
          await addTodo();
          break;
        case 4:
          await getAllTasks();
          break;
        case 5:
          await getParticularTask();
          break;
        case 6:
          await editParticularTask();
          break;
        case 7:
          await deleteParticularTask();
          break;
        case 0:
          break;
        default:
          console.log("Wrong Choice!!");
          break;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

todo();
