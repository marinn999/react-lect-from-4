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

import React, { useContext } from "react";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import { authContext } from "./context/AuthProvider";
import { Login } from "./components/Login/Login";

const App1 = () => {
  const context = useContext(authContext);
  //Якщо юзер не залогінився, то повернути форму Логін
  if (!context.user) {
    return <Login />;
  }
  return (
    <div>
      <Header />
      <ToDoList />
    </div>
  );
};

export default App1;
