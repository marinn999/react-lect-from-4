import React, { useContext } from "react";
import { authContext } from "../../context/AuthProvider";

const ToDoListItem = ({ id, handleDelete, todo }) => {
  const { user } = useContext(authContext);
  return (
    <li>
      <input type="checkbox" />
      <span>{todo}</span>
      {/* Тільки адмін може видаляти ітеми */}
      {user === "admin" && (
        <button onClick={() => handleDelete(id)}>Delete</button>
      )}
    </li>
  );
};

export default ToDoListItem;
