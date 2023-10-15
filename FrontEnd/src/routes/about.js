import React from 'react';
import "../components/Heroabout.css";
import Navbar from "../components/Navbar";
import Heroabout from "../components/Heroabout";
import Footer from "./footer";
import "./about.css";

function About() {
    return (
        <>
           <div>
            <div className="about" style={{ background: "#888" }}>
                <div className="hero-txt-about">
                    <Navbar />
                    <Heroabout />
                    <h1>Where Compassion Meets Commerce</h1>
                    <p>At We Care, our mission is simple but profound: to extend a helping hand to those in need, not just with words, but with tangible, everyday essentials. We believe that when compassion meets commerce, we can create a world of positive change.</p>
                    <blockquote>"We don't just sell products; we sell hope, kindness, and the promise of a better tomorrow."</blockquote>
                    <h2>Our Vision</h2>
                    <p>We envision a world where no one is left behind, where every individual, irrespective of their circumstances, can access essential products and services with dignity.</p>
                    <blockquote>"In the heart of adversity, We Care shines as a beacon of hope."</blockquote>
                    <h2>Who We Are</h2>
                    <p>At We Care, we are more than just an e-commerce platform. We are a community of compassionate individuals, united by the belief that together, we can make the world a better place.</p>
                    <blockquote>"In giving, we receive. In caring, we find purpose."</blockquote>
                    <h2>Our Commitment</h2>
                    <ul>
                        <li><strong>Quality:</strong> We source and provide high-quality products to ensure that everyone receives items that are both practical and durable.</li>
                        <blockquote>"Quality is the foundation of dignity."</blockquote>
                        <li><strong>Affordability:</strong> We work tirelessly to keep our prices affordable, making sure that those facing economic challenges can still access what they need.</li>
                        <blockquote>"Affordability is the bridge to accessibility."</blockquote>
                        <li><strong>Inclusivity:</strong> We welcome all, regardless of background, gender, or age. Our diverse range of products caters to the unique needs of everyone.</li>
                        <blockquote>"Inclusivity is the cornerstone of equality."</blockquote>
                        <li><strong>Sustainability:</strong> We are dedicated to sustainable practices, minimizing our impact on the environment and preserving our planet for future generations.</li>
                        <blockquote>"Sustainability is the promise of a better tomorrow."</blockquote>
                    </ul>
                    <h2>How We Operate</h2>
                    <p>We partner with various organizations, charities, and NGOs to identify individuals and communities in need. By collaborating with these dedicated groups, we ensure our assistance reaches those who need it most.</p>
                    <blockquote>"Together, we create ripples of positive change that reach the farthest shores."</blockquote>
                    <h2>Our Impact</h2>
                    <p>Since our inception, We Care has touched the lives of countless individuals, providing them with access to essential products and services. We have helped bridge the gap between privilege and poverty, one purchase at a time.</p>
                    <blockquote>"Our impact is a testament to the power of collective compassion."</blockquote>
                    <h2>Get Involved</h2>
                    <p>You can join our journey of compassion by shopping at We Care or by volunteering with our partner organizations. Every contribution, no matter how big or small, brings us one step closer to a more caring and compassionate world.</p>
                    <blockquote>"Together, we can create change that lasts a lifetime."</blockquote>
                    <p>At We Care, we believe that commerce can indeed be a force for good. Our commitment to making a difference is unwavering. Thank you for being part of our mission to show the world that we care.</p>
                    <blockquote>"In the end, it's not just about what we have; it's about what we've given."</blockquote>
                </div>
            </div>
            <div className="about-container">
                <div className="about-content">
                    <h7>Our Team</h7>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="John Doe" />
                        <p>Member 1</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                        <p>Member 2</p>
                    </div>
                </div>
            </div>
            <p>Thank you for choosing We Care. We look forward to serving you.</p>
            <Footer />
        </div>
        </>
    );
}

export default About;
