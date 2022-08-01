import { useState } from "react";
import { motion } from "framer-motion";

import Icon from "./Icon";
import "./AddTodo.scss";

const AddTodo = ({ toggleHandler, createTodo }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });

  const saveTodo = (event) => {
    handleSubmit(event);
    createTodo(formData);
    toggleHandler();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="addTodo__overlay"
    >
      <form className="addTodo" onSubmit={saveTodo}>
        <div className="addTodo__titleWrapper">
          <h2 className="addTodo__title text-xl">Add a new Todo</h2>
          <button type="button" onClick={toggleHandler}>
            <Icon icon="icon-xmark" className="addTodo__xmarkIcon" />
          </button>
        </div>

        <input
          input="text"
          className="addTodo__input"
          placeholder="What are you going to do? 🚶🏻‍♂️"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <div className="addTodo__input--dateWrapper">
          Date
          <input
            type="date"
            className="addTodo__input--date"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
        <textarea
          className="addTodo__description"
          placeholder="Write a note, for example: Going to walk to grandma via the grocery store to pick up some groceries 🥦"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <button type="submit" className="squareButton">
          Save todo
        </button>
      </form>
    </motion.button>
  );
};

export default AddTodo;
