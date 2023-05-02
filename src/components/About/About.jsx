import classes from "./About.module.scss";
import about from "../../assets/images/about.png";
const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.intro}>
        <div className={classes["L-H-S"]}>
          <h3>Introduction</h3>
          <div className={classes.arrow}>
            <p>to hydra VR</p>
          </div>
        </div>
        <p className={classes["R-H-S"]}>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>

      <div className={classes["hydra-VR"]}>
        <div className={classes["L-H-S"]}>
          <img src={about} alt="about section" />
        </div>
        <div className={classes["R-H-S"]}>
          <h3>About</h3>
          <h5>hydra VR</h5>
          <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <button>Let&apos;s get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default About;
