import { Send } from "lucide-react";

function scrollToForm() {
  const form = document.getElementById("enquiry-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  window.location.href = "/contact#enquiry-form";
}

export default function StickyCTA() {
  return (
    <button
      type="button"
      onClick={scrollToForm}
      className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-4 text-sm font-black text-primary shadow-2xl shadow-yellow-200/70 transition hover:-translate-y-1 sm:px-6"
    >
      <Send size={18} /> Enquire Now
    </button>
  );
}
