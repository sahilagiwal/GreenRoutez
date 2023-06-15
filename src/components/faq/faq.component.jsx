import Accordion from 'react-bootstrap/Accordion';
import { motion } from "framer-motion";
import "./faq.styles.css";
const FAQ = (props) => {
  
    return (

              <Accordion.Item eventKey = {props.number}>
                <Accordion.Header> {props.header}</Accordion.Header>
                <Accordion.Body>
                {props.body}
                </Accordion.Body>
              </Accordion.Item>
      
    );
  };
  
  export default FAQ;
  