import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    nameError: false,
    emailError: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
      [`${id}Error`]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    if (!formState.name) {
      setFormState((prevState) => ({ ...prevState, nameError: true }));
      hasError = true;
    }
    if (!formState.email) {
      setFormState((prevState) => ({ ...prevState, emailError: true }));
      hasError = true;
    }
    if (hasError) return;

    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <div id="form">
      <div className="fish" id="fish"></div>
      <div className="fish" id="fish2"></div>

      <form id="waterform" method="post" onSubmit={handleSubmit}>
        <div className={`formgroup ${formState.nameError ? 'formgroup-error' : ''}`} id="name-form">
          <label htmlFor="name">Your name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            onFocus={() => setFormState((prevState) => ({ ...prevState, nameError: false }))}
          />
        </div>

        <div className={`formgroup ${formState.emailError ? 'formgroup-error' : ''}`} id="email-form">
          <label htmlFor="email">Your e-mail*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            onFocus={() => setFormState((prevState) => ({ ...prevState, emailError: false }))}
          />
        </div>

        <div className="formgroup" id="message-form">
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <input type="submit" value="Send your message!" />
      </form>
    </div>
  );
};

export default ContactForm;
