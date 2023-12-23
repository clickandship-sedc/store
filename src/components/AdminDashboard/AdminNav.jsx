import React from "react"
import { NavLink } from "react-router-dom"

const AdminNav = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to={"/store/"} exact="true">Categories</NavLink>
        </li>
        <li>
          <NavLink to={"/store/sub"}>Sub-Categories</NavLink>
        </li>
        <li>
          <NavLink to={"/store/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/store/orders"}>Orders</NavLink>
        </li>
        <li>
          <NavLink to={"/store/users"}>Users</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default AdminNav;
