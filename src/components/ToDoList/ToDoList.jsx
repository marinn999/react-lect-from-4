import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";
import todosData from "./todosData.json";
import { nanoid } from "nanoid";

const ToDoList = () => {
  // Додаємо стан useState з початковим масивом todo, щоб мати змогу змінювати цей масив
  const [todos, setTodos] = useState(todosData);

  const handleDelete = (id) => {
    //   Якщо id не дорівнює id елемента, на який ми клікнули, то елемент рендериться.

    // Пишу prev => prev. filter замість todos.filter, бо я міняю масив і треба
    // відштовхуватись від попереднього масиву(одна видалена todo, чи дві додані - обидва масиви нові)
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const [newTodoValue, setNewTodoValue] = useState("");
  const handleAdd = () => {
    //   записую newTodo як приклад нового пункту.
    //Далі беру prev масив, розсипаю всі його елементи і додаю один новий
    const newTodo = { todo: newTodoValue, id: nanoid() };
    setTodos((prev) => [...prev, newTodo]);
    setNewTodoValue("");
  };

  return (
    <>
      <div>
        {/* Все що я напишу в інсту, передається в setNewTodo */}
        <input
          value={newTodoValue}
          onChange={(e) => setNewTodoValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add item</button>
      </div>
      <ul>
        {todos.map((item) => (
          // Пропсами передаю функцію видалення handleDelete туди, де є кнопка видалення
          <ToDoListItem key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
      ;
    </>
  );
};
export default ToDoList;
