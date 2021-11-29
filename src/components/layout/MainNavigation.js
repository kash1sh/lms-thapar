import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>THAPAR LAUNDRY MANAGEMENT SYSTEM</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/orders"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              All Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-order"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Create Order
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
