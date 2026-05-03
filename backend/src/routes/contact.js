import { Router } from "express";
import Lead from "../models/Lead.js";
import { sendLeadEmails } from "../utils/mailer.js";

const router = Router();

function validateLead(body) {
  const fields = ["name", "mobile", "email", "course", "message"];
  const missing = fields.filter((field) => !body[field] || String(body[field]).trim().length === 0);

  if (missing.length) {
    const error = new Error(`Missing required fields: ${missing.join(", ")}`);
    error.status = 400;
    throw error;
  }

  if (!/^\S+@\S+\.\S+$/.test(body.email)) {
    const error = new Error("Please enter a valid email address.");
    error.status = 400;
    throw error;
  }
}

router.post("/", async (request, response, next) => {
  try {
    validateLead(request.body);

    const lead = await Lead.create({
      name: request.body.name,
      mobile: request.body.mobile,
      email: request.body.email,
      course: request.body.course,
      message: request.body.message
    });

    await sendLeadEmails(lead);

    response.status(201).json({
      success: true,
      message: "Enquiry submitted successfully."
    });
  } catch (error) {
    next(error);
  }
});

export default router;
