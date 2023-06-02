import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Key from "react-bootstrap-icons/dist/icons/key";
import Envelope from "react-bootstrap-icons/dist/icons/envelope";
import InputGroup from "react-bootstrap/InputGroup";
import { motion } from "framer-motion";
import "./signup.styles.css";

const SignUp = () => {
  const [isDriver, setIsDriver] = useState(false);

  const checkedDriver = (event) => {
    setIsDriver(event.target.checked);
  };

  const DriverDetail = () => {
    return (
      <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Car Vin Number</Form.Label>

          <Form.Control type="text" placeholder="4Y1SL65848Z411439" required />
          <Form.Text className="text-muted">
            We need this to calculate your cars gas milage and
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Car Insurance</Form.Label>
          <Form.Control type="file" required />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Car Registration</Form.Label>
          <Form.Control type="file" required />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control type="file" required />
        </Form.Group>
      </div>
    );
  };
  return (
    <motion.div
      className="signup-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Form className="form-signup shadow-lg">
          <Form.Group className="mb-3">
            <Form.Label>
              Juniata Email <Envelope />
            </Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="agiwasx21"
                aria-label="email"
                aria-describedby="basic-addon2"
                required
              />
              <InputGroup.Text id="basic-addon2">@juniata.edu</InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Password <Key />
            </Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          {isDriver ? <DriverDetail /> : null}

          <Form.Check
            onChange={checkedDriver}
            type="switch"
            id="custom-switch"
            label="Join as a Driver and Rider (Will have some extra steps)"
          />

          <Button className="mt-3" variant="dark" type="submit">
            Join Now
          </Button>
        </Form>
      </Container>
    </motion.div>
  );
};

export default SignUp;
