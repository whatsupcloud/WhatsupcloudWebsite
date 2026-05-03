import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return undefined;
    const timer = window.setTimeout(() => setOpen(true), 10000);
    return () => window.clearTimeout(timer);
  }, [dismissed]);

  const scrollToForm = () => {
    const form = document.getElementById("enquiry-form");
    setDismissed(true);
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.href = "/contact#enquiry-form";
  };

  if (!open || dismissed) return null;

  return (
    <div className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-md rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl sm:left-auto sm:right-6 sm:mx-0">
      <button
        type="button"
        className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600"
        aria-label="Close popup"
        onClick={() => setDismissed(true)}
      >
        <X size={17} />
      </button>
      <p className="eyebrow">AI Training Enquiry</p>
      <h3 className="mt-3 pr-8 text-2xl font-black text-primary">Want to Learn AI?</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">Fill the form and our team will contact you.</p>
      <button type="button" onClick={scrollToForm} className="btn-primary mt-5 w-full">
        Enquire Now
      </button>
    </div>
  );
}
