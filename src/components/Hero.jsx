import heroImg from "../assets/Group@2x.png";
const Hero = () => {
  return (
    <div className="container">
      <div className="texts">
        <h1>Introduce your product quickly & effectively</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
          in, omnis odit perspiciatis laborum nobis reiciendis ipsum! Optio nam
          qui fugit atque ratione ullam assumenda aperiam, rerum id laboriosam?
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          similique?
        </p>
        <div className="cta">
          <button>Purchace UI Kit</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="img-container">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
