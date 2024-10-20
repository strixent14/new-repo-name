import React from 'react';
import './review.css'; // Ensure this CSS file exists and is correctly styled

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Review = () => {
    return (
        <section className="review section" id="review">
            <h2 className="section_title">Customer Feedback</h2>
            <span className="section_subtitle">Introducing Our New Company</span>

            <div className="review_container container">
                <p className="intro_text">
                    As a newly established company, we are committed to delivering outstanding digital solutions tailored to your needs. 
                    Currently, we do not have customer reviews to showcase, but we are dedicated to building a reputation for quality and excellence.
                </p>

                <div className="discount_offer">
                    <h3 className="offer_title">Exclusive Offer for Our First Customers</h3>
                    <p className="offer_text">
                        To celebrate our launch, we are offering an exclusive <strong>25% discount</strong> on the total price for the first five websites purchased. 
                        This limited-time opportunity allows you to experience our services at a reduced rate while we work diligently to earn your trust.
                    </p>
                </div>

                <div className="writing_slots">
                    <h3 className="thoughts_title">Your Thoughts Matter</h3>
                    <p className="thoughts_text">
                        We value your input and look forward to your feedback as we grow. If you have any questions or would like to discuss your project, 
                        please don't hesitate to get in touch with us!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Review;
