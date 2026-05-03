import nodemailer from "nodemailer";

const required = ["GMAIL_USER", "GMAIL_APP_PASSWORD", "ADMIN_EMAIL"];

function assertMailConfig() {
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing email configuration: ${missing.join(", ")}`);
  }
}

function transporter() {
  assertMailConfig();
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendLeadEmails(lead) {
  const mailer = transporter();
  const adminHtml = `
    <h2>New Lead &#8211; WhatsUpCloud</h2>
    <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Mobile:</strong> ${escapeHtml(lead.mobile)}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Course:</strong> ${escapeHtml(lead.course)}</p>
    <p><strong>Message:</strong> ${escapeHtml(lead.message)}</p>
  `;

  const emails = [
    mailer.sendMail({
      from: `"WhatsUpCloud" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Lead \u2013 WhatsUpCloud",
      html: adminHtml
    })
  ];

  if (lead.email) {
    emails.push(mailer.sendMail({
      from: `"WhatsUpCloud" <${process.env.GMAIL_USER}>`,
      to: lead.email,
      subject: "Registration Submitted",
      text: [
        "Hi,",
        "",
        "Thank you for contacting WhatsUpCloud.",
        "",
        "Our team will contact you soon.",
        "",
        "Team WhatsUpCloud",
        "Powered by Inovalytics Technology"
      ].join("\n")
    }));
  }

  await Promise.all(emails);
}
