const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Task Array
let tasks = ["complete assignment", "do laundary", "do dishes"];

// Function to add a new task

function addTask(description) {

console.log("Adding tasks to the database")
  setTimeout(() => {
   tasks.push(description);
   console.log(`Task added: ${description}`);

   askForAction(); // Ask for next action after adding a task
  },2000); // Simulate a 2-second delay
}
// Function to view all tasks

function viewTasks() {
console.log("Retrieving tasks from the database")
  setTimeout(() => {
    if (tasks.length === 0) {
      console.log("No tasks to show");
    } else {
      console.log("Tasks:");
      tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`))
    }
    askForAction(); // Ask for next   action after viewing tasks
  },  1000); // Simulate a 1-second delay
}

// Function to ask user for an action
function askForAction() {
  rl.question("What would you like to do?(add/view/quit): ", (answer) => {
    if (answer === "add") {
      rl.question("Enter the task to add: ", (task) => {
        addTask(task); // Cause the addTask function to be called
      });
    } else if (answer === "view") {
      viewTasks(); // Cause the viewTasks function to be called to display tasks
    } else if (answer === "quit") {
      console.log("Exiting...");
      rl.close(); // Close the readline interface and exit the program
    } else {
      console.log("Invalid input. Please try again.");
      askForAction(); // Ask for the next action if input is invalid
    }
  });
}

// Start the program by asking for the first action
askForAction();

