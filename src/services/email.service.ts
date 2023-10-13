import nodemailer from "nodemailer";

import { configs } from "../configs/config";

class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: configs.NO_REPLY_EMAIL,
        pass: configs.NO_REPLY_PASSWORD,
      },
    });
  }

  public async sendMail(email: string) {
    try {
      const info = await this.transporter.sendMail({
        from: "No reply", // Добавлено указание отправителя
        to: email,
        subject: "SUBJECT",
        html: "<div>MY FIRST EMAIL</div>",
      });
      console.log("Email sent: ", info.messageId);
      return info.messageId;
    } catch (error) {
      console.error("Error sending email: ", error);
      throw new Error("Failed to send email");
    }
  }
}

export const emailService = new EmailService();
