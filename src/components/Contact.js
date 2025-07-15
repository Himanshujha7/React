// import Lottie from "./Lottie";


const Contact = () => {
  return (
    <div className="flex shadow-lg border text-slate-700 border-slate-200  bg-[#fffff9]">
      <div className="flex flex-col gap-4 items-center justify-center m-10 p-4  w-1/2 shadow-md rounded-2xl">
        <h1 className="text-3xl font-bold p-4 text-center ">Contact Us</h1>
      <p className="text-sm font-medium  text-slate-700 p-4 text-center">
        We’d love to hear from you! Whether you have a question about features,
        pricing, need a demo, or anything else — our team is ready to help.
      </p>

      <div className="flex flex-col items-center text-center p-4  text-slate-700 bg-[#335c67] rounded-3xl shadow-xl">
        <h2 className="font-bold text-xl text-amber-50">Get in Touch</h2>
        <form className="flex flex-col gap-2 p-4 items-start justify-start">
          <div className="gap-3 flex items-center">
            <label className="font-medium text-[#fdfcdc]" htmlFor="">Name</label>
            <input className="border bg-amber-50 border-slate-200 p-2 rounded-lg" type="text" id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="gap-4 flex items-center">
            <label className="font-medium text-[#fdfcdc]" htmlFor="email">Email</label>
            <input className="border bg-amber-50 border-slate-200 p-2 rounded-lg" type="email" id="email" name="email" placeholder="Your email" required />
          </div>

          <div className="gap-2 flex items-center">
            <label className="font-medium text-[#fdfcdc]" htmlFor="message">Message</label>
            <textarea className="border bg-amber-50 border-slate-200 p-2 rounded-lg" id="message" name="message" rows="5" placeholder="Write your message..." required />
          </div>

          <button className="flex items-center justify-center bg-[#fed9b7] px-4 w-full py-2 rounded-lg font-bold hover:bg-[#e9c3a0]" type="submit">Send Message</button>
        </form>
      </div>

      <div className=" flex flex-col items-center justify-center p-4 text-slate-400 font-medium ">
        <h2>Contact Info</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +91-9876543210</p>
        <p>Address: 123, Your Company Lane, Delhi, India</p>
      </div>
      
      </div>
      {/* <Lottie/> */}
    </div>
    

  );
};

export default Contact;

