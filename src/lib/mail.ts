import nodemailer from "nodemailer";

if (!process.env.EMAIL_USER) {
  throw new Error("EMAIL_USER est manquant");
}

if (!process.env.EMAIL_PASS) {
  throw new Error("EMAIL_PASS est manquant");
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});