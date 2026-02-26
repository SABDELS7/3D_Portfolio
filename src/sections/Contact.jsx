import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ from_name: '', reply_to: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setForm({ from_name: '', reply_to: '', message: '' });
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });
          setTimeout(() => hideAlert(), 3000);
        },
        (error) => {
          console.error(error);
          setLoading(false);
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-5 sm:px-10 lg:px-20"
    >
      {alert.show && <Alert {...alert} />}

      {/* Background */}
      <img
        src="/assets/terminal.png"
        alt="terminal-bg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative max-w-3xl mx-auto w-full">
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Let's talk
        </h3>

        <p className="text-base sm:text-lg text-center text-white-600 mb-10 px-2">
          Whether you’re looking to build a new website, improve your existing
          platform, or bring a unique project to life, I’m here to help.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="reply_to"
              value={form.reply_to}
              onChange={handleChange}
              required
              placeholder="johndoe@gmail.com"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Share your thoughts..."
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-white transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;