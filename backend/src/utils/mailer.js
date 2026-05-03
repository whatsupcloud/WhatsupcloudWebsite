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
    <h2>New Lead - WhatsUpCloud</h2>
    <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Mobile:</strong> ${escapeHtml(lead.mobile)}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Course:</strong> ${escapeHtml(lead.course)}</p>
    <p><strong>Message:</strong> ${escapeHtml(lead.message)}</p>
  `;

  await Promise.all([
    mailer.sendMail({
      from: `"WhatsUpCloud" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Lead – WhatsUpCloud",
      html: adminHtml
    }),
    mailer.sendMail({
      from: `"WhatsUpCloud" <${process.env.GMAIL_USER}>`,
      to: lead.email,
      subject: "Registration Submitted",
      text: "Thank you for contacting WhatsUpCloud. Our team will contact you soon."
    })
  ]);
}
