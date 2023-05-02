import classes from "./Navbar.module.scss";
import hydra from "../../assets/images/Hydra.svg";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={hydra} alt="Hydra logo" />
        <h1>Hydra</h1>
      </div>
      <ul>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">services</a>
        </li>
        <li>
          <a href="#">technologies</a>
        </li>
        <li>
          <a href="#">how to</a>
        </li>
      </ul>
      <div className={classes.buttons}>
        <button>Contact Us</button>
        <button>Join Hydra</button>
      </div>
    </div>
  );
};

export default Navbar;
