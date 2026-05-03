import SectionTitle from "../components/SectionTitle.jsx";

const sections = [
  ["What Cookies Are", "Cookies and local storage are small browser-based tools that help websites remember preferences and improve user experience."],
  ["How We Use Cookies", "WhatsUpCloud uses essential browser storage to remember cookie consent and support basic website functionality such as enquiry flow and user experience preferences."],
  ["Analytics and Marketing", "If analytics or marketing tools are added in future, this policy may be updated to explain what is collected and how it is used."],
  ["Managing Cookies", "You can disable or delete cookies from your browser settings. Some website preferences may reset if cookies or local storage are cleared."],
  ["Contact", "For cookie-related questions, email us at whatsupcloud26@gmail.com."]
];

export default function CookiesPolicy() {
  return (
    <section className="section bg-green-50/70">
      <div className="container-max">
        <SectionTitle
          eyebrow="Cookies Policy"
          title="How cookies and browser storage are used"
          text="This page explains how WhatsUpCloud uses essential cookies and local storage on the website."
          center
        />
        <div className="mx-auto grid max-w-4xl gap-5">
          {sections.map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-primary">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-sm leading-6 text-slate-500">
          Last updated: 2026. This policy may be updated when website tools or tracking features change.
        </p>
      </div>
    </section>
  );
}
