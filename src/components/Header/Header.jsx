import classes from "./Header.module.scss";
import header from "../../assets/images/header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const contactUs = [
  {
    icon: faLocationDot,
    title: "Pay Us a Visit",
    method: "Union St, Seattle, WA 98101, United States",
  },
  {
    icon: faPhoneVolume,
    title: "Give Us a Call",
    method: "(110) 1111-1010",
  },
  {
    icon: faEnvelope,
    title: "Send Us a Message",
    method: "Contact@HydraVTech.com",
  },
];
const Header = () => {
  const contactInfo = contactUs.map((obj) => (
    <div className={classes.content}>
      <FontAwesomeIcon icon={obj.icon} />
      <div className={classes.data}>
        <h4>{obj.title}</h4>
        <p>{obj.method}</p>
      </div>
    </div>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.VR}>
        <div className={classes.description}>
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
      <div className={classes.info}>{contactInfo}</div>
    </header>
  );
};

export default Header;
