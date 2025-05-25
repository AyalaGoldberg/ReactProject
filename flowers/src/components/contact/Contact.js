import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן אפשר להוסיף שליחה לשרת אם תרצה
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 4000); // מעלים הודעה אחרי 4 שניות
  };

  return (
    <div className="contact-page" dir="rtl">
      <h2>צור קשר</h2>
      <div className="contact-details">
        <div>
          <b>טלפון:</b> <a href="tel:0527546523">052-7546523</a>
        </div>
        <div>
          <b>מייל:</b> <a href="mailto:cherryBlossom@gmail.com">cherryBlossom@gmail.com</a>
        </div>
        <div>
          <b>כתובת:</b> רחוב הפרחים 5, מודיעין
        </div>
        <div>
          <b>שעות פתיחה:</b> 09:00-18:00
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          שם מלא:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="הכנס/י שם מלא"
            required
          />
        </label>
        <label>
          אימייל:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="הכנס/י כתובת מייל"
            required
          />
        </label>
        <label>
          הודעה:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="כתוב/י את הודעתך..."
            required
          />
        </label>
        <button type="submit">שלח/י הודעה</button>
        {success && <div className="success-message">ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.</div>}
      </form>
    </div>
  );
}