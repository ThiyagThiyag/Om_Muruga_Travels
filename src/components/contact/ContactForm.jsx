import React, { useState } from 'react';

export default function ContactForm({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Room Booking Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      if (onShowToast) onShowToast('Please fill in your name, phone number, and message.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onShowToast) {
        onShowToast(`Thank you, ${formData.name}! Your message has been received. Our concierge will get back to you within 2 hours.`, 'success');
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Room Booking Inquiry',
        message: ''
      });
    }, 600);
  };

  const sendWhatsAppMessage = () => {
    let msg = `Hi Om Muruga Holidays, I am reaching out from your website:\n• Name: ${formData.name || 'Guest'}\n• Phone: ${formData.phone || 'Not specified'}\n• Inquiry: ${formData.subject}\n• Message: ${formData.message || 'I would like to inquire about cottage availability and seasonal packages.'}`;
    window.open(`https://wa.me/916382508601?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="lg:col-span-7 bg-white p-5 xs:p-7 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
      <div>
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block mb-1">
          Send a Direct Message
        </span>
        <h3 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-[#0a2540] tracking-tight">
          How Can We Assist Your Trip?
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Fill out the form below and our holiday planners will reach back with tailored tariffs and quotes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Full Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Ramesh Kumar"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#c59b27]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number / WhatsApp *
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="e.g. +91 63825 08601"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#c59b27]"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. ramesh@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#c59b27]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Subject / Inquiry Type
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:border-[#c59b27]"
            >
              <option value="Room Booking Inquiry">Cottage & Room Booking Inquiry</option>
              <option value="Tour Package Customization">Tour Package Customization</option>
              <option value="Family / Corporate Group Stay">Family / Corporate Group Stay</option>
              <option value="Cab & Transportation Services">Cab & Transportation Services</option>
              <option value="General Question">General Feedback or Question</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Your Message / Travel Dates / Requirements *
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your proposed dates, group size, and any special requests..."
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#c59b27]"
            required
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full text-white font-bold text-xs sm:text-sm bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b0871a] shadow-md hover:shadow-lg hover:shadow-[#c59b27]/30 transition-all disabled:opacity-60 min-h-[44px] flex items-center justify-center text-center"
          >
            {isSubmitting ? 'Transmitting Message...' : 'Send Message'}
          </button>
          <button
            type="button"
            onClick={sendWhatsAppMessage}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 min-h-[44px] text-center"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.17.585 4.202 1.605 5.955l-1.705 6.229 6.398-1.678c1.676.914 3.593 1.494 5.702 1.494 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Send via WhatsApp (+91 63825 08601)</span>
          </button>
        </div>
      </form>
    </div>
  );
}
