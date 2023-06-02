import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./login.styles.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Key from "react-bootstrap-icons/dist/icons/key";
import Envelope from "react-bootstrap-icons/dist/icons/envelope";
import CustomAlert from "../../components/smallcomponents/alert.component";

const LoginPage = () => {
  const [loginStat, setLoginStat] = useState(false);
  return (
    <motion.div
      className="login-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        {loginStat && (
          <CustomAlert
            variant="danger"
            msg="Login Failed, Please check your username or password! Forgot Password?"
          />
        )}
        <Form className="form-login shadow-lg">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Email address <Envelope />
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Password <Key />
            </Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Button variant="dark" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </motion.div>
  );
};

export default LoginPage;
