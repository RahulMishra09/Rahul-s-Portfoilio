import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaUser, FaEdit } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      user_name: name,
      user_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_ug1s6e2",
        "template_m4kb07g",
        templateParams,
        "zdMmFSzeHeonH77i5"
      )
      .then(
        (response) => {
          setSuccess(true);
          setLoading(false);
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-radial from-primary-orange/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-6 bg-orange-gradient bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Feel free to reach out for collaborations, questions, or just a friendly chat!
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="bg-card-gradient backdrop-blur-sm border border-glass-white rounded-2xl p-10 shadow-glow-orange/20 hover:shadow-glow-orange/30 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 via-transparent to-primary-orange/5 opacity-50"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={inputVariants} whileFocus="focus" className="relative">
                <label className="block text-gray-200 text-sm font-semibold mb-3 flex items-center gap-2">
                  <FaUser className="text-primary-orange" />
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-4 rounded-xl bg-glass-white backdrop-blur-sm border border-primary-orange/30 text-white placeholder-gray-400 focus:border-primary-orange focus:outline-none focus:shadow-glow-orange/20 transition-all duration-300 text-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus" className="relative">
                <label className="block text-gray-200 text-sm font-semibold mb-3 flex items-center gap-2">
                  <FaEdit className="text-primary-orange" />
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-4 rounded-xl bg-glass-white backdrop-blur-sm border border-primary-orange/30 text-white placeholder-gray-400 focus:border-primary-orange focus:outline-none focus:shadow-glow-orange/20 transition-all duration-300 text-lg"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject"
                  required
                />
              </motion.div>
            </div>

            <motion.div variants={inputVariants} whileFocus="focus" className="relative">
              <label className="block text-gray-200 text-sm font-semibold mb-3 flex items-center gap-2">
                <FaEnvelope className="text-primary-orange" />
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-5 py-4 rounded-xl bg-glass-white backdrop-blur-sm border border-primary-orange/30 text-white placeholder-gray-400 focus:border-primary-orange focus:outline-none focus:shadow-glow-orange/20 transition-all duration-300 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </motion.div>

            <motion.div variants={inputVariants} whileFocus="focus" className="relative">
              <label className="block text-gray-200 text-sm font-semibold mb-3 flex items-center gap-2">
                <FaEdit className="text-primary-orange" />
                Your Message
              </label>
              <textarea
                className="w-full px-5 py-4 rounded-xl bg-glass-white backdrop-blur-sm border border-primary-orange/30 text-white placeholder-gray-400 focus:border-primary-orange focus:outline-none focus:shadow-glow-orange/20 transition-all duration-300 text-lg resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                rows="6"
                required
              ></textarea>
            </motion.div>

            <div className="text-center pt-4">
              <motion.button
                className="bg-orange-gradient text-white font-bold py-4 px-8 rounded-xl shadow-glow-orange/30 hover:shadow-glow-orange/50 transition-all duration-300 focus:outline-none text-lg flex items-center gap-3 mx-auto relative overflow-hidden group"
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Message"}
                </span>
                <motion.div
                  animate={loading ? { rotate: 360 } : { rotate: 0 }}
                  transition={loading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
                  className="relative z-10"
                >
                  <FaPaperPlane />
                </motion.div>
              </motion.button>
            </div>

            {success === true && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary-orange text-center mt-6 text-lg font-semibold"
              >
                Message sent successfully! ✅
              </motion.p>
            )}
            {success === false && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center mt-6 text-lg font-semibold"
              >
                Failed to send message. Please try again. ❌
              </motion.p>
            )}
          </div>

          <div className="absolute top-0 left-0 w-full h-1 bg-orange-gradient opacity-60"></div>
        </form>
      </motion.div>
    </section>
  );
}

export default ContactSection;
