import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Key from "react-bootstrap-icons/dist/icons/key";
import Envelope from "react-bootstrap-icons/dist/icons/envelope";
import InputGroup from "react-bootstrap/InputGroup";
import Person from "react-bootstrap-icons/dist/icons/person";
import { motion } from "framer-motion";
import "./signup.styles.css";
import axios from "axios";

const SignUp = () => {
  const [isDriver, setIsDriver] = useState(false);

  const checkedDriver = (event) => {
    setIsDriver(event.target.checked);
  };

  const [username, Setusername] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [vin, Setvin] = useState("");
  const [insurance, SetInsurance] = useState(null);
  const [carRegistration, SetcarRegistration] = useState(null);
  const [dl, setDl] = useState(null);

  const handleSubmission = (e) => {
    e.preventDefault();
    const sendDataUrl = "http://localhost/greenroutez/signup.php";
    let formdata = new FormData();
    formdata.append("name", username);
    formdata.append("email", email + "@juniata.edu");
    formdata.append("password", password);
    if (isDriver) {
      formdata.append("vin", vin);
    }
    axios
      .post(sendDataUrl, formdata)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Name <Person />
            </Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => {
                Setusername(e.target.value);
              }}
              type="text"
              placeholder="Sahil"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Juniata Email <Envelope />
            </Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                value={email}
                onChange={(e) => {
                  Setemail(e.target.value);
                }}
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
            <Form.Control
              value={password}
              onChange={(e) => {
                Setpassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          {isDriver ? (
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Car Vin Number</Form.Label>

                <Form.Control
                  value={vin}
                  onChange={(e) => {
                    Setvin(e.target.value);
                  }}
                  placeholder="4Y1SL65848Z411439"
                  required
                />
                <Form.Text className="text-muted">
                  We need this to calculate your cars gas milage and
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Car Insurance</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    SetInsurance(e.target.files[0]);
                  }}
                  type="file"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Car Registration</Form.Label>
                <Form.Control type="file" required />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Drivers License</Form.Label>
                <Form.Control type="file" required />
              </Form.Group>
            </div>
          ) : null}

          <Form.Check
            onChange={checkedDriver}
            type="switch"
            id="custom-switch"
            label="Join as a Driver and Rider (Will have some extra steps)"
          />

          <Button
            onClick={handleSubmission}
            className="mt-3"
            variant="dark"
            type="submit"
          >
            Join Now
          </Button>
        </Form>
      </Container>
    </motion.div>
  );
};

export default SignUp;
