import Accordion from 'react-bootstrap/Accordion';
import FAQ from '../../components/faq/faq.component';


import { motion } from "framer-motion";
import "./faqs.styles.css";
const FAQS = () => {
  
    return (


     <motion.div
        className="fqa"
        transition={{ delay: 0.25 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
;


        <b className="fqa-head">FAQ</b>

            <Accordion className="fqa">


              {/* each faq needs a new key */}
              {/* pass in a question/header and an answer/body as props */}
              <FAQ
                number = {1}
                header = "How do I get a ride?"
                body = 'Click "Available Rides" find a ride.'
              />

              <FAQ 
                number = {2} 
                header = "How do I share my car?"
                body = "First you will need to log in from the home page."
              />
              <FAQ 
                number = {3} 
                header = "Where do the profits of this app go?"
                body = 'The profits go to the Juniata ABD club.'
              />

                        
            </Accordion>


      </motion.div>
      
    );
  };
  
  export default FAQS;
  

