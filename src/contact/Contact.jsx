import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import Footer from "../footer/Footer";



const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        "service_vgl4uej",
        "template_zqdl3r3",
        form.current,
        "hiP53NsVv7OPF9FY1"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully");
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  const validateForm = () => {
    const nameInput = form.current.user_name;
    const emailInput = form.current.user_email;
    const messageInput = form.current.message;
    let isValid = true;

    if (!nameInput.value.trim()) {
      isValid = false;
      toast.error("Please enter your name.");
    }

    if (!emailInput.value.trim()) {
      isValid = false;
      toast.error("Please enter your email.");
    } else if (!isValidEmail(emailInput.value)) {
      isValid = false;
      toast.error("Please enter a valid email.");
    }

    if (!messageInput.value.trim()) {
      isValid = false;
      toast.error("Please enter a message.");
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <>
    <div className={style.container}>

    <div className={style.banner}>
      <img src="https://assets.atlanticbt.com/content/uploads/2019/12/g_feature-web-development-3.svg" alt="" />
    </div>
     <div>
     <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="enter your name..."/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder="enter your email..." />
        <label>Message</label>
        <textarea name="message" placeholder="message..."/>
        <input
          type="submit"
          value={isSubmitting ? "Sending..." : "Send"}
          disabled={isSubmitting}
        />
         <div className={style.social}>
          <Link to="https://www.linkedin.com/in/ankush-rai-7733871b5/" target='blank' className={style.social_icons}><FaLinkedin /></Link>
          <Link to="https://twitter.com/Ankushkrra15224" target='blank' className={style.social_icons}><FaTwitter /></Link>
          <Link to="https://www.instagram.com/ankush_kr_rai_/" target='blank' className={style.social_icons}><GrInstagram/></Link>
          <Link to="https://github.com/Ankush123rai/" target='blank' className={style.social_icons}><FaGithub /></Link>
        </div>
        
      </form>
     
      <ToastContainer />
     </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
