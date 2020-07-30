import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"
import img from "../components/Image/hunch_logo.png"

const MenuItem = ({ active, children, to }) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
)

const Header = () => {
  return (
    <div>
      <div className="logo">
        {/* <MenuItem to={"/home"}> */}
        <a href={"/home"}>
          <img src={img} className="hunchlogo"></img>
        </a>
        {/* </MenuItem> */}
      </div>
      <div className="menu">
        <MenuItem to={"/introduction"}>Hunch 소개</MenuItem>
        <MenuItem to={"/functionHunch"}>Hunch 기능</MenuItem>
        <MenuItem to={"/payment"}>Hunch 데이터 구매</MenuItem>
      </div>
    </div>
  )
}

export default Header
