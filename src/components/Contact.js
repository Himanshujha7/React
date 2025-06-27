

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have a question about features,
        pricing, need a demo, or anything else — our team is ready to help.
      </p>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message..." required />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Info</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +91-9876543210</p>
        <p>Address: 123, Your Company Lane, Delhi, India</p>
      </div>
    </div>
  );
};

export default Contact;

