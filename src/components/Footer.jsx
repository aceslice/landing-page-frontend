const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <p>&copy; Copyright 2024</p>
        <h1>Landing</h1>
        <button>Purchase Now</button>
      </div>
      <hr
        style={{ width: "100%", backgroundColor: "gray", marginBottom: "1rem" }}
      />
      <div className="lower">
        <div className="links">
          <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>{" "}
        </div>
        <div className="socials">
          <box-icon type="logo" color="gray" name="facebook"></box-icon>
          <box-icon type="logo" color="gray" name="linkedin"></box-icon>
          <box-icon type="logo" color="gray" name="twitter"></box-icon>
          <box-icon color="gray" type="logo" name="youtube"></box-icon>
          <box-icon color="gray" type="logo" name="instagram"></box-icon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
