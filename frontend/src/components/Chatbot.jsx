import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useMemo, useState } from "react";
import { additionalCourses, aiCourses } from "../data.js";

const courseNames = [...aiCourses.map(([title]) => title), ...additionalCourses];
const internshipNames = ["Generative AI Internship", "AI Digital Marketing Internship", "Cloud Internship", "DevOps Internship"];
const workshopNames = ["Generative AI Workshop", "Prompt Engineering Workshop", "AI Digital Marketing Workshop", "AI Automation Workshop", "AI for Business Workshop"];

const initialMessages = [
  { from: "bot", text: "Hi, welcome to WhatsUpCloud. How can I help you today?" },
  { from: "bot", text: "You can ask about courses, internships, workshops, fees or career support. I can also take your enquiry details." }
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [mode, setMode] = useState("idle");
  const [lead, setLead] = useState({ name: "", mobile: "", question: "", course: "General Enquiry" });
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const suggestions = useMemo(() => ["Courses", "Internship", "Workshop", "Fees", "Career Support", "Contact"], []);

  const addMessages = (...nextMessages) => {
    setMessages((current) => [...current, ...nextMessages]);
  };

  const askContact = (course = "General Enquiry") => {
    setLead({ name: "", mobile: "", question: "", course });
    setOptions([]);
    setMode("name");
    addMessages(
      { from: "bot", text: course === "General Enquiry" ? "Sure. Please share your name." : `Great choice: ${course}. Please share your name.` }
    );
  };

  const showList = (title, items) => {
    setOptions(items);
    setMode("idle");
    addMessages({
      from: "bot",
      text: `${title}\n${items.map((item, index) => `${index + 1}. ${item}`).join("\n")}\n\nReply with a number or course name to continue.`
    });
  };

  const submitLead = async (finalLead) => {
    setLoading(true);
    try {
      const mobileDigits = finalLead.mobile.replace(/\D/g, "");
      if (mobileDigits.length < 10 || mobileDigits.length > 15) {
        throw new Error("Please enter a valid mobile number.");
      }

      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: finalLead.name,
          mobile: finalLead.mobile,
          course: finalLead.course,
          message: finalLead.question
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit enquiry.");
      addMessages({ from: "bot", text: "Thank you. Your enquiry is submitted. Our team will contact you soon." });
      setMode("idle");
      setLead({ name: "", mobile: "", question: "", course: "General Enquiry" });
    } catch (error) {
      addMessages({
        from: "bot",
        text: "Sorry, I could not submit it right now. Please use the Contact page form, or try again after a few minutes."
      });
      setMode("idle");
    } finally {
      setLoading(false);
    }
  };

  const handleFlow = (text) => {
    if (mode === "name") {
      if (text.length < 2) {
        addMessages({ from: "bot", text: "Please enter your full name." });
        return true;
      }
      setLead((current) => ({ ...current, name: text }));
      setMode("mobile");
      addMessages({ from: "bot", text: "Please share your mobile number." });
      return true;
    }

    if (mode === "mobile") {
      const mobileDigits = text.replace(/\D/g, "");
      if (mobileDigits.length < 10 || mobileDigits.length > 15) {
        addMessages({ from: "bot", text: "Please enter a valid mobile number." });
        return true;
      }
      setLead((current) => ({ ...current, mobile: text }));
      setMode("question");
      addMessages({ from: "bot", text: "What should our team help you with?" });
      return true;
    }

    if (mode === "question") {
      const finalLead = { ...lead, question: text };
      setLead(finalLead);
      submitLead(finalLead);
      return true;
    }

    return false;
  };

  const send = (text = input) => {
    if (!text.trim() || loading) return;
    const userText = text.trim();
    addMessages({ from: "user", text: userText });
    setInput("");

    if (handleFlow(userText)) return;

    const normalized = userText.toLowerCase();
    const selectedCourse = courseNames.find((course) => course.toLowerCase() === normalized);
    const selectedInternship = internshipNames.find((item) => item.toLowerCase() === normalized);
    const selectedWorkshop = workshopNames.find((item) => item.toLowerCase() === normalized);
    const selectedByNumber = /^\d+$/.test(normalized) ? options[Number(normalized) - 1] : "";

    if (selectedCourse || selectedInternship || selectedWorkshop || selectedByNumber) {
      askContact(selectedCourse || selectedInternship || selectedWorkshop || selectedByNumber);
      return;
    }

    if (normalized.includes("course") || normalized.includes("training")) {
      showList("Available courses:", courseNames);
      return;
    }

    if (normalized.includes("internship") || normalized.includes("project")) {
      showList("Available internships:", internshipNames);
      return;
    }

    if (normalized.includes("workshop")) {
      showList("Available workshops:", workshopNames);
      return;
    }

    if (normalized.includes("fee") || normalized.includes("price") || normalized.includes("cost")) {
      addMessages({ from: "bot", text: "Fees depend on the selected course or workshop. Please share your details and our team will guide you." });
      askContact("Fees Enquiry");
      return;
    }

    if (normalized.includes("career") || normalized.includes("job") || normalized.includes("resume") || normalized.includes("linkedin")) {
      addMessages({ from: "bot", text: "We provide resume, LinkedIn, portfolio and mock interview guidance with selected programs." });
      askContact("Career Support Enquiry");
      return;
    }

    if (normalized.includes("contact") || normalized.includes("call") || normalized.includes("help")) {
      askContact("General Enquiry");
      return;
    }

    addMessages({ from: "bot", text: "I can help with Courses, Internship, Workshop, Fees, Career Support or Contact. Please select one option." });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-4 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-white">
            <div className="flex items-center gap-2 font-bold"><Bot size={19} /> WhatsUpCloud AI</div>
            <button type="button" aria-label="Close chatbot" onClick={() => setOpen(false)}><X size={19} /></button>
          </div>
          <div className="max-h-96 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[86%] whitespace-pre-line rounded-2xl px-4 py-2 text-sm leading-6 ${message.from === "user" ? "bg-secondary text-white" : "bg-slate-100 text-slate-700"}`}>
                  {message.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 px-4 pb-3">
            {suggestions.map((item) => (
              <button key={item} type="button" onClick={() => send(item)} className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-brandGreen">
                {item}
              </button>
            ))}
          </div>
          <div className="flex border-t border-slate-100 p-3">
            <input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === "Enter" && send()} className="min-w-0 flex-1 rounded-l-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-secondary" placeholder={mode === "idle" ? "Ask or select option" : "Type your answer"} />
            <button type="button" onClick={() => send()} disabled={loading} className="grid w-12 place-items-center rounded-r-xl bg-brandGreen text-white disabled:opacity-60">
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
