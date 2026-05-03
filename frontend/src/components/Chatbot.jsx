import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useMemo, useState } from "react";

function replyFor(input) {
  const text = input.toLowerCase();
  if (text.includes("course") || text.includes("training")) return "We offer AI training and digital skills programs.";
  if (text.includes("internship") || text.includes("project")) return "We provide internships with projects and certificates.";
  if (text.includes("fee") || text.includes("price") || text.includes("cost")) return "Please submit enquiry form, our team will contact you.";
  if (text.includes("workshop")) return "Our AI Digital Marketing Workshop covers content, posters, WhatsApp Business, lead generation and automation basics.";
  return "Please submit the enquiry form and our team will guide you with the best program.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi, how can I help you?" }]);
  const suggestions = useMemo(() => ["Courses", "Internship", "Guidance"], []);

  const send = (text = input) => {
    if (!text.trim()) return;
    const userText = text.trim();
    setMessages((current) => [...current, { from: "user", text: userText }, { from: "bot", text: replyFor(userText) }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-4 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-white">
            <div className="flex items-center gap-2 font-bold"><Bot size={19} /> WhatsUpCloud AI</div>
            <button type="button" aria-label="Close chatbot" onClick={() => setOpen(false)}><X size={19} /></button>
          </div>
          <div className="max-h-80 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[82%] rounded-2xl px-4 py-2 text-sm leading-6 ${message.from === "user" ? "bg-secondary text-white" : "bg-slate-100 text-slate-700"}`}>
                  {message.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-2 px-4 pb-3">
            {suggestions.map((item) => (
              <button key={item} type="button" onClick={() => send(item)} className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-brandGreen">
                {item}
              </button>
            ))}
          </div>
          <div className="flex border-t border-slate-100 p-3">
            <input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === "Enter" && send()} className="min-w-0 flex-1 rounded-l-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-secondary" placeholder="Ask about courses" />
            <button type="button" onClick={() => send()} className="grid w-12 place-items-center rounded-r-xl bg-accent text-primary">
              <Send size={17} />
            </button>
          </div>
        </div>
      )}
      <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-14 w-14 place-items-center rounded-full bg-brandGreen text-white shadow-xl shadow-green-900/25 transition hover:-translate-y-1" aria-label="Open chatbot">
        <MessageCircle size={25} />
      </button>
    </div>
  );
}
