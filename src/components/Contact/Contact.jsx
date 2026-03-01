// src/components/Contact/Contact.jsx
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ EXACT values from your EmailJS dashboard
const SERVICE_ID = "service_vngk0a";        // Email Services → service_vngk0a
const TEMPLATE_ID = "template_h9r3h2p";     // Email Templates → template_h9r3h2p
const PUBLIC_KEY = "bbWG_Az-xtDjiuWUj";     // Account → API keys → Public Key

const Contact = () => {
  const form = useRef();

  // optional but fine
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error); // 👈 check console if it still fails
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="text"
            name="user_name"      // must match {{user_name}} in template
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600
                       focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            name="user_email"     // must match {{user_email}}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600
                       focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="subject"        // must match {{subject}}
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600
                       focus:outline-none focus:border-purple-500"
          />

          <textarea
            name="message"        // must match {{message}}
            placeholder="Your Message..."
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600
                       focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3
                       text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
