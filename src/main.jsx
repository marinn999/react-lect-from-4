import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Counter from "./components/Counter/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    <Counter />
  </>
);
