import icon from "../assets/icon.png";
import img from "../assets/undraw_mobile_login_ikmvhello.png";
const About = () => {
  return (
    <div className="about">
      <div className="texts">
        <h1>Light, Fast & Powerful</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
          consequuntur incidunt illum odit nobis officiis unde exercitationem
          voluptatum laboriosam dolorum explicabo error, earum minima beatae
          molestiae. Reiciendis, nulla qui! Voluptate!{" "}
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          facere.
        </p>
        <div className="icons">
          <div className="icon">
            <img src={icon} alt="" />
            <h4>Title Goes Here!</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              sit!
            </p>
          </div>
          <div className="icon">
            <img src={icon} alt="" />
            <h4>Title Goes Here!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
              ad.
            </p>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
