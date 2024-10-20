import React from "react";
import "./pricing.css";

function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <h2 className="section_title">Our Pricing Plans</h2>
      <span className="section_subtitle">Choose your best option</span>

      {/* Discount Alert */}
      <div className="discount_alert">
        <p className="alert_message">25% Off for the first 5 websites sold!</p>
      </div>

      <div className="pricing_container">
        {/* Row 1 - Basic Website Plans */}
        <div className="pricing_row centered_row">
          <div className="pricing_card">
            <h1 className="pricing_title">Small Website (Basic)</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">5-10 Pages</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Normal Website (Basic)</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">11-20 Pages</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Large Website (Basic)</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">20+ Pages</p>
          </div>
        </div>

        {/* Row 2 - Additional Add-Ons */}
        <div className="pricing_row">
          <div className="pricing_card">
            <h1 className="pricing_title">Moderate Small Website</h1>
            <p className="pricing_price">$?</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Complex Small Website</h1>
            <p className="pricing_price">$?</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Moderate Normal Website</h1>
            <p className="pricing_price">$?</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Complex Normal Website</h1>
            <p className="pricing_price">$?</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Moderate Large Website</h1>
            <p className="pricing_price">$?</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Complex Large Website</h1>
            <p className="pricing_price">$?</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact_info">
          <p>Contact us to explore the full range of services we offer, including website design, development, and maintenance. Let’s work together to determine the best plan and pricing for your needs!</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
