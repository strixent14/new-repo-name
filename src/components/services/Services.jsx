import React from 'react'
import "./services.css"
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Customer Services</h2>
        <span className='section_subtitle'>Report customer</span>
        
        <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="services_container container grid">
          <h1 className="services_title">Report Form</h1>
          <form className="services_form">
            <div className="form_group-name">
              <label htmlFor="name">
              Fullname
              </label>

              <i class="uil uil-user form_group-icon1"></i>

              <input type="text" name='name' className="form_control-name" id="name" placeholder="Enter your Fullname"/>
            </div>

            <div className="form_group-name">
                <label htmlFor="email">
                  E-mail
                </label>

                <i class="uil uil-envelope form_group-icon"></i>

                <input type="email" name='email' className="form_control-name" id="email" placeholder="example@gmail.com"/>
              </div>

              <div className="form_group-name">
                <label htmlFor="email">
                  Message
                </label>

                <textarea name="message" id="" className="form_controls">

                </textarea>
              </div>

            <button className='form_group-btn'>
            <i class="uil uil-message btn-icon"></i>
            Send message
            </button>
          </form>
        </motion.div>
    </section>
  )
}

export default Services