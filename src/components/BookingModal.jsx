import React, { useState, useEffect } from 'react';

const purposeOptions = [
  { id: 'cab', label: 'Cab' },
  { id: 'tours', label: 'Tours' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'acting driver', label: 'Acting Driver' }
];

export default function BookingModal({ isOpen, onClose, initialItem = null, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: 'tours',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      let defaultPurpose = 'tours';
      let defaultMessage = '';

      if (initialItem) {
        if (initialItem.luggage || initialItem.type?.toLowerCase().includes('cab') || initialItem.type?.toLowerCase().includes('ac')) {
          defaultPurpose = 'cab';
        } else if (initialItem.bedType || initialItem.category === 'cottage' || initialItem.category === 'suite') {
          defaultPurpose = 'rooms';
        } else if (initialItem.driver || initialItem.role?.includes('Driver')) {
          defaultPurpose = 'acting driver';
        } else {
          defaultPurpose = 'tours';
        }

        const itemName = initialItem.title || initialItem.name;
        if (itemName) {
          defaultMessage = `Inquiring regarding ${itemName}.`;
        }
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        purpose: defaultPurpose,
        message: defaultMessage
      });
      setErrors({});
      setIsSubmitted(false);
    }
  }, [initialItem, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      if (onShowToast) onShowToast('Please fill in required fields (Name & Phone).', 'error');
      return;
    }

    setIsSubmitted(true);

    if (onShowToast) {
      onShowToast(`Thank you, ${formData.name}! Your enquiry has been submitted. Our team will contact you shortly.`, 'success');
    }

    // Auto-close after brief confirmation
    setTimeout(() => {
      onClose();
    }, 2200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Slim Modal Header (Navbar) */}
        <div className="bg-[#0a2540] text-white px-5 py-3 sm:py-3.5 flex items-center justify-between border-b border-[#c59b27]/30 shrink-0">
          <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide">
            Enquiry Form
          </h3>
          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body: Success state or Compact Enquiry Form */}
        {isSubmitted ? (
          <div className="p-6 sm:p-8 text-center space-y-3 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">
              ✓
            </div>
            <h4 className="text-lg font-bold font-serif text-[#0a2540]">
              Enquiry Received!
            </h4>
            <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our team will contact you at <strong className="text-slate-900">{formData.phone}</strong> shortly.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-[#0a2540] text-white text-xs font-bold hover:bg-[#c59b27] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3.5 py-2 rounded-lg border text-xs sm:text-sm text-slate-800 focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#c59b27]'
                }`}
              />
              {errors.name && <p className="text-[11px] text-red-500 mt-0.5">{errors.name}</p>}
            </div>

            {/* Phone Number & Email ID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2 rounded-lg border text-xs sm:text-sm text-slate-800 focus:outline-none transition-colors ${
                    errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#c59b27]'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-500 mt-0.5">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mail ID (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#c59b27] transition-colors"
                />
              </div>
            </div>

            {/* Purpose (Cab, Tours, Rooms, Acting Driver) */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Purpose <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {purposeOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setFormData(prev => ({ ...prev, purpose: opt.id }))}
                    className={`py-1.5 sm:py-2 px-2.5 rounded-lg text-xs font-bold border transition-all text-center flex items-center justify-center gap-1 cursor-pointer ${
                      formData.purpose === opt.id
                        ? 'border-[#c59b27] bg-[#c59b27] text-white shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className="capitalize">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={2}
                placeholder="Enter your message, travel dates, or requirements..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#c59b27] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button Only */}
            <div className="pt-1.5">
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 px-5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b0871a] hover:brightness-105 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
              >
                <span>Submit Enquiry</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
