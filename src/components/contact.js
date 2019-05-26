import React from 'react';
import contactStyles from './contact.module.scss';

const contact = () => (
  <div className={contactStyles.content}>
    <form action="/success" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
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
