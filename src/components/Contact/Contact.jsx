import React, { useState } from 'react';
import "./contact.css"; // Ensure this file name matches the actual CSS file name
import Robot from "../../assets/robot.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://your-domain.com/send_email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    });

    const result = await response.text();
    alert(result);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact Us</h2>
      <span className='section_subtitle'>Get in touch with us</span>

      <div className="contact_container container grid">
        <h1 className="contact_title">Contact Form</h1>
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="form_group-name">
            <label htmlFor="name">Fullname</label>
            <i className="uil uil-user form_group-icon1"></i>
            <input type="text" name='name' className="form_control-name" id="name" placeholder="Enter your Fullname" onChange={handleChange} required />
          </div>

          <div className="contact_form-group">
            <div className="form_group">
              <label htmlFor="email">E-mail</label>
              <i className="uil uil-envelope form_group-icon"></i>
              <input type="email" name='email' className="form_control" id="email" placeholder="example@gmail.com" onChange={handleChange} required />
            </div>

            <div className="form_group">
              <label htmlFor="contact">Contact No.</label>
              <i className="uil uil-phone form_group-icon2"></i>
              <input type="text" name='contact' className="form_control" id="contact" placeholder="Contact No." onChange={handleChange} required />
            </div>
          </div>

          <button className='form_group-btn'>
            <i className="fa-solid fa-envelope btn-icon"></i>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;