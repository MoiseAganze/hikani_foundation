import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Configurez SendGrid avec votre clé API
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    const { to, subject, text, name } = await request.json();

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #dddddd;
          }
          .header h1 {
            color: #333333;
            font-size: 24px;
            margin: 0;
          }
          .content {
            padding: 20px 0;
          }
          .content p {
            color: #555555;
            font-size: 16px;
            line-height: 1.6;
            margin: 0 0 20px;
          }
          .footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #dddddd;
            color: #777777;
            font-size: 14px;
          }
          .footer a {
            color: #007BFF;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
           
        </style>
      </head>
      <body>
      
        <div class="email-container">
          <div class="header">
            <h1>Message de ${name} !</h1>
          </div>
          <div class="content">
            <p>${text}</p>
           
          </div>
          <div class="footer">
            <p>Cet email a été envoyé par ${name} depuis <a href="https://hikani-foundation.vercel.app/">VotreSite</a>.</p>
            
          </div>
        </div>
      </body>
      </html>
    `;

    await sgMail.send({
      //to: "Fondationhikani@gmail.com", // admin
      to: "aganzedev@gmail.com", // admin
      subject,
      html: htmlContent,
      replyTo: to,
      from: "aganzedev@gmail.com", // Remplacez par votre email vérifié
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 },
    );
  }
}
