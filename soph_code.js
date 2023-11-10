/* soph_code.js - Complex Code Example */

// This code demonstrates a complex example of a web-based task management system
// It includes features like user authentication, task creation, assignment, and monitoring

// Global Variables
let users = [];
let tasks = [];

// Class definition for User
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.tasksAssigned = [];
    this.tasksCompleted = [];
  }

  assignTask(task) {
    this.tasksAssigned.push(task);
    task.assignee = this;
  }

  completeTask(task) {
    const index = this.tasksAssigned.indexOf(task);
    if (index !== -1) {
      this.tasksAssigned.splice(index, 1);
      this.tasksCompleted.push(task);
      task.markComplete();
    }
  }
}

// Class definition for Task
class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.assignee = null;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }
}

// Function to create a new user
function createUser(name, email, password) {
  const user = new User(name, email, password);
  users.push(user);
  return user;
}

// Function to create a new task
function createTask(title, description, dueDate) {
  const task = new Task(title, description, dueDate);
  tasks.push(task);
  return task;
}

// Perform user authentication
function authenticateUser(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      return users[i];
    }
  }
  return null;
}

// Example usage of the code
createUser("John Doe", "john@example.com", "password123");
createUser("Jane Smith", "jane@example.com", "securePassword");

const currentUser = authenticateUser("john@example.com", "password123");
if (currentUser) {
  console.log(`Welcome, ${currentUser.name}!`);

  const task1 = createTask("Complete Project", "Finish all pending tasks", "2022-12-31");
  const task2 = createTask("Review Proposal", "Provide feedback on the marketing proposal", "2022-11-15");

  currentUser.assignTask(task1);
  currentUser.assignTask(task2);

  console.log(`${currentUser.name} has ${currentUser.tasksAssigned.length} tasks assigned to them:`);
  for (let i = 0; i < currentUser.tasksAssigned.length; i++) {
    console.log(`${i + 1}. ${currentUser.tasksAssigned[i].title}`);
  }

  currentUser.completeTask(task2);

  console.log(`${currentUser.name} has completed ${currentUser.tasksCompleted.length} tasks:`);
  for (let i = 0; i < currentUser.tasksCompleted.length; i++) {
    console.log(`${i + 1}. ${currentUser.tasksCompleted[i].title}`);
  }
} else {
  console.log("Authentication failed. Please check your credentials.");
}

// More complex code for task monitoring, notifications, UI implementation, etc. could be added here

// ... (additional lines of code)