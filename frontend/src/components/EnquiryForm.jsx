import { Send } from "lucide-react";
import { useState } from "react";
import { courseOptions } from "../data.js";

const initialState = {
  name: "",
  mobile: "",
  email: "",
  course: "Generative AI",
  message: ""
};

export default function EnquiryForm({ compact = false }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit enquiry.");
      setStatus({ type: "success", message: "Enquiry submitted successfully. Our team will contact you soon." });
      setForm(initialState);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className={`premium-card ${compact ? "p-5" : "p-6 sm:p-8"}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Name
          <input required name="name" value={form.name} onChange={update} className="rounded-xl border border-slate-200 px-4 py-3 font-medium outline-none focus:border-secondary focus:ring-4 focus:ring-blue-100" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Mobile
          <input required name="mobile" value={form.mobile} onChange={update} className="rounded-xl border border-slate-200 px-4 py-3 font-medium outline-none focus:border-secondary focus:ring-4 focus:ring-blue-100" placeholder="Mobile number" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Email
          <input required type="email" name="email" value={form.email} onChange={update} className="rounded-xl border border-slate-200 px-4 py-3 font-medium outline-none focus:border-secondary focus:ring-4 focus:ring-blue-100" placeholder="Email address" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Course
          <select name="course" value={form.course} onChange={update} className="rounded-xl border border-slate-200 px-4 py-3 font-medium outline-none focus:border-secondary focus:ring-4 focus:ring-blue-100">
            {courseOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700">
        Message
        <textarea required name="message" value={form.message} onChange={update} rows={4} className="resize-none rounded-xl border border-slate-200 px-4 py-3 font-medium outline-none focus:border-secondary focus:ring-4 focus:ring-blue-100" placeholder="Tell us what you want to learn" />
      </label>
      <button type="submit" disabled={loading} className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70">
        <Send size={18} /> {loading ? "Submitting..." : "Submit Enquiry"}
      </button>
      {status.message && (
        <p className={`mt-4 rounded-xl px-4 py-3 text-sm font-semibold ${status.type === "success" ? "bg-green-50 text-brandGreen" : "bg-red-50 text-red-700"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
