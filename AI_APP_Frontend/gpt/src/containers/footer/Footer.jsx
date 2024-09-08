import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-top'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className='gpt3__footer-bottom'>
          <div className='gpt3__footer-bottom__logo'>
            <img src="logo.svg" alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkb, All Rights Reserved</p>
          </div>
          <div className='gpt3__footer-bottom__about'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Conuters</p>
            <p>Contack</p>
          </div>
          <div className='gpt3__footer-bottom__about'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-bottom__about'>
            <h4>Get in Touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
      </div>
      <div className='gpt3__footer-rights'>
        <p>@ 2021 GPT-3, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer;
