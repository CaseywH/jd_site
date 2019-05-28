import React from 'react';
import contactStyles from './contact.module.scss';

const contact = () => (
  <div className={contactStyles.content}>
    <h1>Contact us</h1>
    <form action="https://formspree.io/John@btomare.com" name="contact" method="POST">
      <input type="hidden" name="_next" value="/success" />
      <div className={contactStyles.item}>
        <label>
Your Name:
          {' '}
          <input type="text" name="name" />
        </label>
      </div>
      <div className={contactStyles.item}>
        <label>
Your Email:
          {' '}
          <input type="email" name="email" />
        </label>
      </div>
      <div className={contactStyles.item}>
        <label>
Message:
          {' '}
          <textarea name="message" />
        </label>
      </div>

      <button className={contactStyles.submit} type="submit">Send</button>
    </form>
  </div>
);

export default contact;
