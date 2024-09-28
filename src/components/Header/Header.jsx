import React, { useContext } from "react";
import s from "./Header.module.css";
import { authContext } from "../../context/AuthProvider";
import { langContext } from "../../context/LangProvider";
import Modal from "../Modal/Modal";
import { useToggle } from "../../hooks/useToggle";

const Header = () => {
  const { user, logout } = useContext(authContext);
  const { changeLang, vocabularyENG, vocabularyUKR, lang } =
    useContext(langContext);

  const { isOpen, openModal, closeModal } = useToggle();
  return (
    <div className={s.wrapper}>
      <div>LOGO</div>
      <h2>
        {lang === "eng" ? vocabularyENG.hello : vocabularyUKR.hello}
        {user}
      </h2>
      <select onChange={(e) => changeLang(e.target.value)} value={lang}>
        <option value="eng">Eng</option>
        <option value="ukr">Ukr</option>
      </select>
      <button onClick={openModal}>Show info</button>
      {isOpen && <Modal onClose={closeModal}>INFO</Modal>}
      <button onClick={logout}>Exit</button>
    </div>
  );
};

export default Header;
