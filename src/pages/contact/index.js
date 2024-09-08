import React,{useState} from 'react';
import './style.css';
import img from "../../assets/contact.png";
import emailjs from 'emailjs-com';
import { FaCheck, FaPhoneAlt } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleInputChange = (event) => {
    console.log('Input field changed:', event.target.name, event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    // Send email using EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_va1vcsu', // Your EmailJS service ID
      'template_hks7iqw', // Your EmailJS template ID
      templateParams,
      'GSa7S860-CwJF8V8L' // Your EmailJS user ID
    )
    .then((response) => {
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000); // hide popup after 3 seconds
         // Clear form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
    return (
        <div style={{marginTop:"105px"}}className="contact-container">
            <div className="contact-image">
                <img style={{width: "300px", height: "300px"}}src={img} alt="Contact" />
            </div>
            <div className="contact-form">
                <h2 style={{fontSize: "39px"}}>Contact <strong className='purple'> Us</strong> <FaPhoneAlt size="25px"/> </h2>
                <form onSubmit={handleSubmit}>
                    <label for = "name">Full Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                     required
                    />
                    <label for = "email">E-mail</label>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    />
                    
                    <label for = "message">Message</label>
                    <textarea
                    name="message" 
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    cols = "0"
                    rows= "7"
                    required
                    ></textarea>
                    
                    <button type="submit">Send Message  <MdSend/></button>
                </form>
            </div>
            <div className="contact-info" >
                <p style={{color: "black", fontSize: "18px"}}>Contact</p>
                <p>7903815745</p>
                <p style={{color: "black", fontSize: "18px"}}>Based in </p>
                <p>Bihar, India</p>
            </div>
            {showSuccessPopup && (
        <div className="success-popup">
          <p>Message sent successfully!</p><FaCheck color="green"/>
        </div>
      )}
        </div>
    );
}

export default ContactUs;