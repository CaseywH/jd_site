import React from 'react';

const contact = () => (
  <div>
    <form action="/success" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
Your Name:
          {' '}
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
Your Email:
          {' '}
          <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
Message:
          {' '}
          <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);

export default contact;
