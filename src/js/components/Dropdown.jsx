import "./Dropdown.scss";
import Icon from "./Icon";

const Dropdown = ({ editTodo, deleteTodo, toggleDropdown, id }) => {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown__item"
        onClick={() => {
          toggleDropdown();
          editTodo(id);
        }}
      >
        <Icon icon="icon-pencil" className="dropdown__itemIcon" />
        Edit
      </button>

      <button
        type="button"
        className="dropdown__item--last warning"
        onClick={() => {
          toggleDropdown();
          deleteTodo(id);
        }}
      >
        <Icon icon="icon-trash" className="dropdown_itemIcon--trash" />
        Remove
      </button>
    </div>
  );
};

export default Dropdown;
