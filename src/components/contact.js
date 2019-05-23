import React from 'react';

const contact = () => (
  <div>
    <form
      name="contact"
      method="post"
      data-netlify="true"
    >
      <input name="name" type="text" placeholder="your name" />
      <button type="submit">Send</button>
    </form>
  </div>
);

export default contact;
