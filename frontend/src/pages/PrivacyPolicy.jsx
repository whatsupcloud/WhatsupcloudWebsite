import SectionTitle from "../components/SectionTitle.jsx";

const sections = [
  ["Information We Collect", "When you submit an enquiry, we may collect your name, mobile number, email address, selected course and message."],
  ["How We Use Information", "We use your details to contact you about courses, workshops, internships, e-books, training updates and support related to your enquiry."],
  ["Lead Storage", "Enquiry details may be stored securely in our MongoDB database for admission follow-up, communication and internal reporting."],
  ["Email Communication", "After form submission, we may send confirmation emails to you and notification emails to the WhatsUpCloud admin team using Gmail SMTP."],
  ["Data Sharing", "We do not sell your personal information. Details may be shared only with authorized WhatsUpCloud team members for enquiry handling."],
  ["Your Rights", "You can contact us to request correction or deletion of your enquiry information, subject to operational and legal requirements."],
  ["Contact", "For privacy-related questions, email us at whatsupcloud26@gmail.com."]
];

export default function PrivacyPolicy() {
  return (
    <section className="section bg-blue-50/70">
      <div className="container-max">
        <SectionTitle
          eyebrow="Privacy Policy"
          title="How WhatsUpCloud handles enquiry information"
          text="This policy explains how WhatsUpCloud collects and uses information submitted through this website."
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
          Last updated: 2026. This page is for general website transparency and may be updated as services, tools or legal requirements change.
        </p>
      </div>
    </section>
  );
}
