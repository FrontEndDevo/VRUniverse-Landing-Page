import classes from "./Header.module.scss";
import header from "../../assets/images/header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <div>
          <h2>
            <span>Dive </span>into the depths
            <br />
            of <span>virtual reality</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <div className={classes.buttons}>
            <button>Build your world</button>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className={classes["header-img"]}>
          <img src={header} alt="virtual reality" />
        </div>
      </div>
      <div>
        <div className={classes.contact}>
          <FontAwesomeIcon icon={faLocationDot} />
          <div className={classes.info}>
            <h4>Pay Us a Visit</h4>
            <p>Union St, Seattle, WA 98101, United States</p>
          </div>
        </div>

        <div className={classes.contact}>
          <FontAwesomeIcon icon={faPhoneVolume} />
          <div className={classes.info}>
            <h4>Give Us a Call</h4>
            <p>(110) 1111-1010</p>
          </div>
        </div>

        <div className={classes.contact}>
          <FontAwesomeIcon icon={faEnvelope} />
          <div className={classes.info}>
            <h4>Send Us a Message</h4>
            <p>Contact@HydraVTech.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
