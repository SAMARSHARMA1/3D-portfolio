// src/sections/Contact.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      console.error(error);
      showAlertMessage("danger", "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "mk9816785085@gmail.com",
      href: "mailto:mk9816785085@gmail.com",
      accent: "from-lavender to-royal",
      glow: "rgba(122,87,219,0.5)",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Jalandhar, Punjab, India",
      href: null,
      accent: "from-mint to-aqua",
      glow: "rgba(87,219,150,0.5)",
    },
    {
      icon: "⚡",
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
      accent: "from-sand to-orange",
      glow: "rgba(214,153,92,0.5)",
    },
  ];

  return (
    <section className="relative c-space pt-20 md:pt-28 pb-20 overflow-hidden">
      {/* Background particles */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-royal/10 blur-[150px] rounded-full pointer-events-none" />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      {/* Section Header */}
      <div className="relative flex items-center gap-4 mb-4">
        <div className="h-[2px] w-12 bg-gradient-to-r from-lavender to-transparent" />
        <h2 className="text-heading">Let's Talk</h2>
      </div>
      <p className="subtext mb-12 max-w-lg">
        Have a project in mind or just want to say hi? Drop a message and I'll
        get back to you as soon as possible.
      </p>

      {/* Two-column layout */}
      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl">
        {/* Left Column — Contact Info */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative p-4 rounded-xl border border-white/10 bg-gradient-to-b from-storm/60 to-indigo/80 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b ${info.accent} opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-lg bg-gradient-to-br ${info.accent} flex items-center justify-center text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 6px 20px -5px ${info.glow}` }}
                >
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm md:text-base text-white hover:text-lavender transition-colors block truncate"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm md:text-base text-white truncate">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3 relative rounded-2xl border border-white/10 bg-gradient-to-b from-storm/70 to-indigo/90 p-6 md:p-8 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lavender to-transparent opacity-60" />

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-xs font-medium text-neutral-400 uppercase tracking-wider"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-xs font-medium text-neutral-400 uppercase tracking-wider"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="john@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-xs font-medium text-neutral-400 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="field-input field-input-focus resize-none"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-3 rounded-xl font-medium text-white overflow-hidden group bg-gradient-to-r from-royal to-lavender hover:shadow-[0_10px_40px_-10px_rgba(122,87,219,0.6)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}
              </span>
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;