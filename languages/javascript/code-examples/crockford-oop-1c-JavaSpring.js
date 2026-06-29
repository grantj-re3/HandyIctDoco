/*
 * https://www.javaspring.net/blog/douglas-crockford-on-class-free-oop-in-javascript/
 * Title: Douglas Crockford's Class-Free OOP in JavaScript: How to Avoid `new`, 
 *        `this`, and Prototypal Inheritance (The Better Parts ES6)
 * Sample code below from "Real-World Example: A Todo App with Class-Free OOP".
 */
/***** Class Todo *****/
function createTodo(text) {
  let completed = false; // Private state
 
  return {
    getText: () => text,
    isCompleted: () => completed,
    toggle: () => { completed = !completed; },
    toString: () => `${completed ? "[✓]" : "[ ]"} ${text}`
  };
}

/***** Class TodoList *****/
function createTodoList() {
  const todos = []; // Private array of todos
 
  return {
    addTodo: (text) => {
      const todo = createTodo(text);
      todos.push(todo);
      return todo; // Return the new todo for chaining
    },
    removeTodo: (todo) => {
      const index = todos.indexOf(todo);
      if (index !== -1) todos.splice(index, 1);
    },
    getTodos: () => [...todos], // Return a copy to prevent mutation
    getCompletedTodos: () => todos.filter(todo => todo.isCompleted()),
    toString: () => todos.map(todo => todo.toString()).join("\n")
  };
}

/***** Main *****/
// Create a todo list
const myTodos = createTodoList();
 
// Add todos
myTodos.addTodo("Learn class-free OOP");
myTodos.addTodo("Build a todo app");
const groceryTodo = myTodos.addTodo("Buy groceries");
 
// Toggle a todo
groceryTodo.toggle();
 
// Log the list
console.log(myTodos.toString());
// Output:
// [ ] Learn class-free OOP
// [ ] Build a todo app
// [✓] Buy groceries
 
// Get completed todos
console.log(myTodos.getCompletedTodos().map(t => t.getText())); // ["Buy groceries"]
