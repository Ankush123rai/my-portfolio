import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
          alert("Message Sent Successfully");
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
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
      alert("Please enter your name.");
    }

    if (!emailInput.value.trim()) {
      isValid = false;
      alert("Please enter your email.");
    } else if (!isValidEmail(emailInput.value)) {
      isValid = false;
      alert("Please enter a valid email.");
    }

    if (!messageInput.value.trim()) {
      isValid = false;
      alert("Please enter a message.");
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };


  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400" height="300" loading="lazy" title="Google Map"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form ref={form} onSubmit={sendEmail}>

          <div className="input-wrapper">
            <input type="text" className="form-input"
            name="user_name"
             placeholder="Full name" required data-form-input />

            <input type="email" name="user_email" className="form-input" placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

          <input
              type="submit"
              value={isSubmitting ? "Sending..." : "Send Message"}
              disabled={isSubmitting}
              className="form-btn"
              data-form-btn
            />

        </form>

      </section>

    </section>
  );
};

export default Contact;
