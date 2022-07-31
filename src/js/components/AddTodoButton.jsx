import "./AddTodoButton.scss";
import Icon from "./Icon";

const AddTodoButton = ({ onClick }) => {
  return (
    <button type="button" className="circularButton" onClick={onClick}>
      <Icon icon="icon-plus" className="addTodoIcon" />
    </button>
  );
};

export default AddTodoButton;
