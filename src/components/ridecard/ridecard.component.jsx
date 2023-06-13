import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClockFill from "react-bootstrap-icons/dist/icons/clock-fill";
import Calendar from "react-bootstrap-icons/dist/icons/calendar";
import Button from "react-bootstrap/Button";
import Person from "react-bootstrap-icons/dist/icons/person";
import CarFrontFill from "react-bootstrap-icons/dist/icons/car-front-fill";
import PersonFillUp from "react-bootstrap-icons/dist/icons/person-fill-up";
import Cash from "react-bootstrap-icons/dist/icons/cash";
import CurrencyDollar from "react-bootstrap-icons/dist/icons/currency-dollar";
import { motion } from "framer-motion";
import "./ridecard.styles.css";
const RideCard = (props) => {
  console.log(props.data);
  const { Name, seats, price, Car, date, time } = props.data;
  const i = props.delay;

  return (
    <motion.div
      className="ride-card-wrapper"
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translatY: 0 }}
      transition={{ duration: 1.5, delay: i * 0.5 }}
    >
      <Card className="mx-auto mb-5 shadow-lg" style={{ width: "60%" }}>
        <Card.Body>
          <Row className="text-center">
            <Col lg={4}>
              <img
                className="location-img"
                src="https://prod-lippincott.imgix.net/app/uploads/2020/01/02210649/Walmart1_Logo-scaled.jpg?auto=false%2Ccompress&q=90&w=1400"
                alt="walmart"
              />
            </Col>
            <Col lg={8}>
              <Row className="mb-3">
                <Col lg={6} className="ridecard-col">
                  <Button variant="dark">
                    <Calendar /> {date}
                  </Button>
                </Col>
                <Col lg={6} className="ridecard-col">
                  <Button variant="dark">
                    <ClockFill /> {time}
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <h5>
                    <Person /> {Name}
                  </h5>
                </Col>
                <Col lg={6}>
                  <h5>
                    <CarFrontFill /> {Car}
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <h5>
                    <PersonFillUp /> {seats} Seats
                  </h5>
                </Col>
                <Col lg={6}>
                  <h5>
                    <CurrencyDollar /> {price}
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <Button variant="success">
                    <Cash /> Reserve Now
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default RideCard;
