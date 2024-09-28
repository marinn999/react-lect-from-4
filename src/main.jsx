import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Counter from "./components/Counter/Counter.jsx";
import App1 from "./App1.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import LangProvider from "./context/LangProvider.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <Counter /> */}
    <AuthProvider>
      <LangProvider>
        <App1 />
      </LangProvider>
      <Toaster />
    </AuthProvider>
  </>
);
