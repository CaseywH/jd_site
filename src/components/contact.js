import React from 'react';

const contact = () => (
  <div>
    <form
      name="contact"
      method="post"
      data-nedlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="name" type="text" placeholder="your name" />
      <button>Send</button>
    </form>
  </div>
);

export default contact;
