import "./Header.modules.scss";
import { mBurg } from "./../../assets/menu-burger";
import { menus } from "./../../assets/text";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const Header = () => {

const [isActive, setIsActive] = useState(false)


const handlerClick = e => {
  const itemList = e.target.parentElement.parentElement.children

  const addClass = () => {
    for (const itemLi of itemList) {
      itemLi.classList.remove('active')
    }
    e.target.parentElement.classList.add('active')
  }


  setIsActive(addClass)
}
  
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="header__wrap flex">

            <a href="#" className="header__logo">
              <img src="/logo.png" alt="logo" />
            </a>

            <ul className="header__menu">
              {
              menus.map((m) => (
                <li key={m.id} className={m.href === window.location.pathname ? m.class : ' '}>
                  <Link to={m.href} onClick={handlerClick}>{m.text}</Link>
                </li>
              ))
              }
            </ul>

            <div className="header__burger menu-btn" onClick={mBurg}>
              <div className="menu-btn__burger"></div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
