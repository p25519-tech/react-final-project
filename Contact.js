import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.includes('@')) e.email = 'Valid email required';
    if (form.message.length < 10) e.message = 'Message too short';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleChange = (field, val) => {
    setForm((prev) => ({ ...prev, [field]: val }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="contact page">
      <div className="section">
        <p className="section-label">Let's Connect</p>
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              I'm always open to discussing new opportunities, academic collaborations, or just a friendly conversation about technology and business.
            </p>
            <div className="contact-items">
              {[
                ['🎓', 'University', 'Pacific States University'],
                ['📚', 'Program', 'BBA / Computer Science for Business'],
                ['🌐', 'Location', 'California, USA'],
              ].map(([icon, label, val]) => (
                <div className="contact-item" key={label}>
                  <span className="ci-icon">{icon}</span>
                  <div>
                    <p className="ci-label">{label}</p>
                    <p className="ci-val">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-msg">
                <span>✓</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {[
                  { field: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { field: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                ].map(({ field, label, type, placeholder }) => (
                  <div className="form-group" key={field}>
                    <label>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className={errors[field] ? 'error' : ''}
                    />
                    {errors[field] && <span className="err-msg">{errors[field]}</span>}
                  </div>
                ))}
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows={5}
                    placeholder="Your message here..."
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="err-msg">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
