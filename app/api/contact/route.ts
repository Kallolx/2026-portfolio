import { NextResponse } from "next/server";
    import nodemailer from "nodemailer";

    export async function POST(req: Request) {
      try {
        const body = await req.json();
        const { fullName, email, projectType, message } = body;

        // Validation
        if (!fullName || !email || !message) {
          return NextResponse.json(
            { error: "Full Name, Email, and Message are required fields." },
            { status: 400 }
          );
        }

        const user = process.env.GMAIL_USER;
        const pass = process.env.GMAIL_PASS;

        if (!user || !pass) {
          return NextResponse.json(
            { error: "SMTP Server credentials not configured on host environment." },
            { status: 500 }
          );
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user,
            pass,
          },
        });

        // Email structure
        const mailOptions = {
          from: `"${fullName}" <${user}>`, // Gmail always overwrites 'from' to GMAIL_USER, but we can set the name label
          to: user, // Send to yourself
          replyTo: email, // Replying goes to the visitor
          subject: `📩 New Portfolio Lead: ${fullName} (${projectType || "General"})`,
          text: `Name: ${fullName}\nEmail: ${email}\nProject Type: ${projectType || "None"}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #fafafa;">
              <h2 style="color: #5E2BE2; margin-top: 0; border-bottom: 2px solid #5E2BE2; padding-bottom: 10px;">New Portfolio Contact</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eef0f2; width: 30%;">Full Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eef0f2;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eef0f2;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eef0f2;"><a href="mailto:${email}" style="color: #0066FF; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eef0f2;">Project Type:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eef0f2;">${projectType || "General Inquiry"}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-left: 4px solid #5E2BE2; border-radius: 4px; font-style: italic; white-space: pre-wrap; line-height: 1.6; color: #333333;">
                ${message}
              </div>
              <p style="font-size: 11px; color: #777777; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 10px; text-align: center;">
                Sent from portfolio contact form at kamrulhasan.site
              </p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
      } catch (err: any) {
        console.error("Nodemailer error:", err);
        return NextResponse.json(
          { error: "Failed to send email. Please check server logs." },
          { status: 500 }
        );
      }
    }
