import React from "react";
//Components
import Typed from "react-typed";
import Button from "react-bootstrap/Button";
import BoxArrowInRight from "react-bootstrap-icons/dist/icons/box-arrow-in-right";
import PersonPlusFill from "react-bootstrap-icons/dist/icons/person-plus-fill";
import { motion } from "framer-motion";
//Css
import "./home.styles.css";
import { Link } from "react-router-dom";
//Images
import carImage from "../../assets/home/car.svg";
import mapImage from "../../assets/home/map.svg";
import money from "../../assets/home/money.svg";

const HomePage = () => {
  return (
    <motion.div
      className="home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img className="car-image" src={carImage} alt="CarImage" />
      <div className="heading-box">
        <h1 className="heading">
          <i className="fab fa-react fa-5x" id="react-logo" />
          <Typed
            strings={["SAVE", "EARN", "RIDE"]}
            typeSpeed={300}
            backSpeed={100}
            loop
          />
        </h1>
      </div>
      <div className="m-5">
        <Link className=" btn btn-outline-dark btn-lg me-2" to="/login">
          Login <BoxArrowInRight />
        </Link>
        <Link to="/signup" className=" btn btn-dark btn-lg me-2">
          Join now <PersonPlusFill />
        </Link>
      </div>

      {/* <Button className="btn-home-cus" variant="outline-dark" size="lg">
        <Speedometer2 />
      </Button> */}
      <img className="map-image" src={mapImage} alt="MapImage" />
      <img className="money-image" src={money} alt="MapImage" />
    </motion.div>
  );
};

export default HomePage;
