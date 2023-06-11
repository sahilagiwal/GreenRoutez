import React from 'react';
import PropTypes from 'prop-types';
import "../../components/aboutuscards/aboutuscard.style.css";



export default function AboutUsCard(props) {
  return ( 
    <div className="card-section">
  <div className="card-size">
    <div className="card shadow-sm">
     <img className="bd-placeholder-img card-img-top" width="100px" height="200px" src="https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG" alt="Cardcap"/> 
      <div className="card-body">
      <p className="card-text">
      <tr>{props.name}</tr>
      <tr>{props.poe}</tr>
      <tr>{props.fact}</tr>
      </p>
      </div>
    </div>
  </div>
</div>
  );
}

AboutUsCard.propTypes = {
  name: PropTypes.string,
  poe: PropTypes.string,
  fact: PropTypes.string
};

AboutUsCard.defaultProps = {
  name: "Name",
  poe: " POE",
  fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
}
