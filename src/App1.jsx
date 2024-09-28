// ...........................Example 1.........................
// import React, { createContext } from "react";
// import Parent from "./components/ContextExample/Parent";

// export const userContext = createContext();
// const App1 = () => {

//   const auto = "Audi";
//   return (
//     <div>
//       <userContext.Provider value={{ auto, model: "RS6", engine: "5.0" }}>
//         <Parent />
//       </userContext.Provider>
//     </div>
//   );
// .........................../ Example 1.........................

//Контекстом можна передавати щось через багато рівнів.

//Наприклад перемикач мови: на всьому сайті є перемикач мови і кожна сторінка може достукатись до контексту

//Або логін користувача, за допомогою входу можна користуватись штуками, доступними лише після реєстрації

import React, { useContext, useState } from "react";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import { authContext } from "./context/AuthProvider";
import { Login } from "./components/Login/Login";
import Modal from "./components/Modal/Modal";
import { useToggle } from "./hooks/useToggle";

const App1 = () => {
  const context = useContext(authContext);

  const { isOpen, openModal, closeModal } = useToggle();

  //Якщо юзер не залогінився, то повернути форму Логін
  if (!context.user) {
    return <Login />;
  }

  return (
    <div>
      <Header />
      <ToDoList />
      <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            minus autem accusamus velit aperiam laboriosam officia delectus
            nobis incidunt, eos numquam harum temporibus obcaecati, non esse
            eaque vitae! Cumque, libero.
          </h2>
        </Modal>
      )}
    </div>
  );
};

export default App1;
