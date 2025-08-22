import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const Contact = () => {


  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_yc06dvi",    
    "template_1ki5f1x",   
    e.target,
    "cO0eiPyw7530vCKNq"   
  )
  .then((result) => {
    console.log(result.text);
 Swal.fire({
  title: "Message Sent!",
  text: "Thank you.",
  icon: "success",
  confirmButtonText: "OK",
  width: "90%",
  maxWidth: "400px", 
  padding: "1.5rem",
  confirmButtonColor: "#000",
  background: "rgba(255, 255, 255, 0.2)",
  color: "#ffffff",
  timer: 6000,
  timerProgressBar: true,
  showClass: {
    popup: 'animate__animated animate__zoomIn'
  },
  hideClass: {
    popup: 'animate__animated animate__zoomOut'
  },
  customClass: {
    popup: "rounded-xl shadow-lg",
    title: "text-xl font-normal",
    confirmButton: "uppercase px-5 py-2 rounded-md"
  }
});
    e.target.reset();
  }, (error) => {
    console.log(error.text);
    Swal.fire({
      title: "❌ Failed to Send",
      text: "Please try again later.",
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "#d33",
    });
  });
};

return (
    <div>
      <div className="font-[sans-serif] py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="flex justify-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl md:text-4xl font-semibold font-[inter] text-gray-800 uppercase">
            VISIT US
          </h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row lg:flex-row gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Contact Us</h2>
            <form className="space-y-6" onSubmit={sendEmail}>
              <input
                type="text"
                name="name" 
                placeholder="Name"
                className="text-gray-900 w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
              <input
                type="email"
                name="email" 
                placeholder="Email"
                className="text-gray-900 w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
              <textarea
                name="message" 
                placeholder="Message"
                rows={5}
                className="text-gray-900 w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full text-white font-semibold tracking-wider uppercase py-3 px-6 rounded-[10px] shadow-lg transition-all duration-300 bg-gray-900 hover:shadow-textcolor"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 space-y-10">
            <h3 className="text-lg text-gray-800 font-sans">Your Collection, Your Way</h3>
            <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg">
              Are you interested in our Men’s, Women’s, Kids’ wear or Household Textile collection?
              Share your requirements with us — whether it’s wholesale or custom orders, we provide the best quality at competitive prices.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg">
                Fill out the form below or contact us directly via email : <span className='text-blue-700 underline'> awwaltextiles@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
