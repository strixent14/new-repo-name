import React from 'react';
import "./contact.css";  // Ensure this file name matches the actual CSS file name
import Robot from "../../assets/robot.png";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact Us</h2>
      <span className='section_subtitle'>Get in touch with us</span>

    

      <div className="contact_container container grid">
        <h1 className="contact_title">Contact Form</h1>
        <form className="contact_form">
          <div className="form_group-name">
            <label htmlFor="name">Fullname</label>
            <i className="uil uil-user form_group-icon1"></i>
            <input type="text" name='name' className="form_control-name" id="name" placeholder="Enter your Fullname" />
          </div>

          <div className="contact_form-group">
            <div className="form_group">
              <label htmlFor="email">E-mail</label>
              <i className="uil uil-envelope form_group-icon"></i>
              <input type="email" name='email' className="form_control" id="email" placeholder="example@gmail.com" />
            </div>

            <div className="form_group">
              <label htmlFor="contact">Contact No.</label>
              <i className="uil uil-phone form_group-icon2"></i>
              <input type="text" name='contact' className="form_control" id="contact" placeholder="Contact No." />
            </div>
          </div>

          <button className='form_group-btn'>
            <i className="fa-solid fa-envelope btn-icon"></i>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
