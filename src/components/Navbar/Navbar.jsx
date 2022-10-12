import React ,{useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="nav">
      <Link to={"/"} >
        <h2 className="logo">Game_X</h2>
      </Link >
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={
            ()=> setIsMobile(false)}>
        <Link to={"/counter"} className="link"><li>Counter</li></Link>
        <Link to={"/todos"} className="link"><li>Todos</li></Link>
        <Link to={"/games"} className="link"><li>Games</li></Link>
        <Link to={"/login"} className="link"><li>Login</li></Link>
      </ul>
      <span className="mobile-mene-icon" onClick={()=> setIsMobile(!isMobile)}>
            {isMobile ? <img src='icons/x-48.png' alt="_" />:<img src='icons/menu-48.png' alt="_" />}
      </span>
    </nav>
  );
}
