import React, { useState } from "react";
import classNames from "classnames";
import { ReactComponent as MenuButton } from "../icons/menu_btn.svg";
import { ReactComponent as TelegaIcon } from "../icons/Telegram_white.svg";
import { ReactComponent as InstaIcon } from "../icons/Instagram_white.svg";
import { ReactComponent as FbIcon } from "../icons/Facebook_white.svg";
import "./nav.scss";

function NavBar() {
  const [navStatus, setNav] = useState(false);
  const btnClass = classNames({
    nav_btn: true,
    nav_btn_off: navStatus,
  });
  const navClass = classNames({
    nav_hidden: !navStatus,
    nav: true,
  });
  const navMenu = classNames({
    nav_menu: true,
    nav_menu_hidden: !navStatus,
  });
  const langClass = classNames({
    "nav_lang-select": true,
    "nav_lang-select_hidden": navStatus,
  });
  function toggleMenu() {
    setNav(!navStatus);
  }
  const deepDarkFantasies = classNames({
    nav_light: true,
    nav_dark: navStatus,
  });
  return (
    <div>
      <div className={deepDarkFantasies}></div>
      <nav className={navClass}>
        <MenuButton className={btnClass} onClick={toggleMenu} />
        <div className={navMenu}>
          <ul>
            <li>Парковка</li>
            <li>Страховка</li>
            <li>Бензин</li>
            <li>Обслуживание</li>
          </ul>
          <div className="nav_menu_soc-media">
            <TelegaIcon />
            <FbIcon />
            <InstaIcon />
          </div>
        </div>
        <div className={langClass}>
          <p>Eng</p>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
