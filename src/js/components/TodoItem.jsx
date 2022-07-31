import { useState, useRef, useEffect } from "react";
import "./TodoItem.scss";
import Dropdown from "./Dropdown";
import Icon from "./Icon";

const TodoItem = ({
  id,
  title,
  description,
  date,
  completed,
  overdue,
  editTodo,
  deleteTodo,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const determineDropdown = (e) => {
    if (
      dropdownRef.current &&
      showDropdown &&
      !dropdownRef.current.contains(e.target)
    ) {
      setShowDropdown(false);
    }
  };

  const getClassModifier = () => {
    if (completed) {
      return "--completed";
    } else if (overdue) {
      return "--overdue";
    } else {
      return "";
    }
  };

  const getIcon = () => {
    if (completed) {
      return "check";
    } else if (overdue) {
      return "exclamation";
    } else {
      return "";
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", determineDropdown);
  });

  return (
    <div className={"todo__item" + getClassModifier()}>
      <Icon
        icon={"icon-" + getIcon()}
        className={"todo__statusIcon" + getClassModifier()}
      />
      <div className="todo__wrapper">
        <div className="todo__titleWrapper">
          <h2 className={"todo__title" + getClassModifier()}>{title}</h2>
          <div className="dropdown__wrapper" ref={dropdownRef}>
            <button type="button" onClick={toggleDropdown}>
              <Icon
                icon="icon-ellipsis-vertical"
                className="todo__optionsIcon"
              />
            </button>
            {showDropdown && (
              <div>
                <Dropdown
                  editTodo={editTodo}
                  deleteTodo={deleteTodo}
                  toggleDropdown={toggleDropdown}
                  id={id}
                />
              </div>
            )}
          </div>
        </div>
        <p className={"todo__description" + getClassModifier()}>
          {description}
        </p>
        <div className="todo__dateWrapper">
          <Icon icon="icon-calendar" className="todo__dateIcon" />
          <time className="todo__date">{date}</time>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
