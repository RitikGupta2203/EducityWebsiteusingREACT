import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    // Web3Forms accessToken to send emails
    const accessKey = "aadf307f-84a7-4535-bd3c-7f17daf32f35";
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt = ''/></h3>
            <p>Feel free to reach out through contact form or find our contact information below.Your feedback,questions, suggestions are important to us as we strive to provide exceptional services to our university community.</p>
            <ul>
                <li><img src= {mail_icon} /> sample@email.com</li>
                <li><img src= {phone_icon} />+1 123-456-7890</li>
                <li><img src= {location_icon} />58 Address Park ave ,Boston<br/> MA 02145, United States </li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type ="text" name ='name' placeholder ='Enter your Name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder ='Enter Your PhoneNumber' required/>
                <label>Write your messages Here</label>
                <textarea name ="message" id ="" rows="6" placeholder='Enter your Message' required></textarea>
                <button type="submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt=" "/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
