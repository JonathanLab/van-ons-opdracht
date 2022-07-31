import { useState } from "react";
import { nanoid } from "nanoid";

import "./App.scss";
import AddTodo from "./AddTodo";
import Banner from "./Banner";
import AddTodoButton from "./AddTodoButton";
import TodoItem from "./TodoItem";

let sample_todos = [
  {
    id: "todo-0",
    title: "Walking the dog",
    description:
      "Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus…",
    date: "18 February 2021",
    completed: false,
    overdue: false,
  },
  {
    id: "todo-1",
    title: "Do the dishes",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit…",
    date: "Yesterday",
    completed: false,
    overdue: true,
  },
  {
    id: "todo-2",
    title: "Do the groceries",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit…",
    date: "Yesterday",
    completed: true,
    overdue: false,
  },
  {
    id: "todo-3",
    title: "Create the Van Ons Todo",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit…",
    date: "18 February 2021",
    completed: true,
    overdue: false,
  },
];

const App = function () {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState(sample_todos);

  const toggleAddTodo = () => {
    setShowAddTodo(!showAddTodo);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const editTodo = () => {};

  const createTodo = ({ title, description, date }) => {
    setTodos([
      ...todos,
      {
        id: "todo-" + nanoid(),
        title: title,
        description: description,
        date: date,
        completed: false,
        overdue: false,
      },
    ]);
  };

  return (
    <div className="app">
      <div className="background"></div>
      <div className="container">
        <Banner />
        <div className="todo__list">
          {todos.length
            ? todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  date={todo.date}
                  completed={todo.completed}
                  overdue={todo.overdue}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              ))
            : "No todo's remaining!"}
        </div>
        {showAddTodo && (
          <AddTodo toggleHandler={toggleAddTodo} createTodo={createTodo} />
        )}
        <AddTodoButton onClick={toggleAddTodo} />
      </div>
    </div>
  );
};

export default App;
