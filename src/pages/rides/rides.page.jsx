import React from "react";
import { motion } from "framer-motion";
import "./rides.styles.css";
import RideCard from "../../components/ridecard/ridecard.component";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Search from "react-bootstrap-icons/dist/icons/search";

const Rides = () => {
  const list = [
    {
      id: 1,
      Name: "Emily",
      dropLocation: "Target",
      seats: "3",
      price: 6.2,
      driverRating: 4.5,
      Car: "Honda Civic",
      date: "2023-05-10",
      time: "08:30",
    },
    {
      id: 2,
      Name: "Michael",
      dropLocation: "Whole Foods",
      seats: "4",
      price: 7.5,
      driverRating: 4.8,
      Car: "Toyota Camry",
      date: "2023-05-11",
      time: "09:15",
    },
    {
      id: 3,
      Name: "Sophia",
      dropLocation: "IKEA",
      seats: "2",
      price: 4.9,
      driverRating: 4.7,
      Car: "Mazda CX-5",
      date: "2023-05-12",
      time: "14:00",
    },
    {
      id: 4,
      Name: "Daniel",
      dropLocation: "Starbucks",
      seats: "3",
      price: 5.6,
      driverRating: 5,
      Car: "Nissan Altima",
      date: "2023-05-13",
      time: "16:45",
    },
    {
      id: 5,
      Name: "Jessica",
      dropLocation: "McDonald's",
      seats: "4",
      price: 5.2,
      driverRating: 4.2,
      Car: "Ford Fusion",
      date: "2023-05-14",
      time: "10:30",
    },
    {
      id: 6,
      Name: "David",
      dropLocation: "Apple Store",
      seats: "2",
      price: 6.5,
      driverRating: 4.9,
      Car: "Chevrolet Malibu",
      date: "2023-05-15",
      time: "12:00",
    },
    {
      id: 7,
      Name: "Olivia",
      dropLocation: "Costco",
      seats: "3",
      price: 6.7,
      driverRating: 4.6,
      Car: "Hyundai Sonata",
      date: "2023-05-16",
      time: "18:15",
    },
    {
      id: 8,
      Name: "William",
      dropLocation: "Trader Joe's",
      seats: "4",
      price: 8.3,
      driverRating: 5,
      Car: "Subaru Impreza",
      date: "2023-05-17",
      time: "19:30",
    },
    {
      id: 9,
      Name: "Grace",
      dropLocation: "Best Buy",
      seats: "2",
      price: 5.0,
      driverRating: 4.4,
      Car: "Kia Optima",
      date: "2023-05-18",
      time: "11:45",
    },
  ];
  return (
    <motion.div>
      <InputGroup className="mb-5 mx-auto" style={{ maxWidth: "80%" }}>
        <InputGroup.Text id="basic-addon1" className="btn btn-dark">
          <Search />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search Location"
          aria-label="Search"
          aria-describedby="search-location"
        />
      </InputGroup>
      <Container style={{ marginTop: "100px" }}>
        {list.map((booking, i) => {
          return <RideCard delay={i} key={booking.id} data={booking} />;
        })}
      </Container>
    </motion.div>
  );
};

export default Rides;
