import { NextResponse } from "next/server";
import { transporter } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const { nom, telephone, email, service, message } =
      await request.json();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nouvelle demande de devis - ${service}`,
      html: `
<div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:40px;">
  <div style="max-width:700px;margin:auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.08);">

    <div style="background:#0b5d3b;padding:25px;text-align:center;">
      <h1 style="color:#FFD54A;margin:0;">SENTRANSCOM</h1>
      <p style="color:white;margin-top:8px;">
        Nouvelle demande de devis
      </p>
    </div>

    <div style="padding:30px;">

      <table style="width:100%;border-collapse:collapse;">

        <tr>
          <td style="padding:12px;font-weight:bold;">👤 Nom</td>
          <td style="padding:12px;">${nom}</td>
        </tr>

        <tr style="background:#f8f8f8;">
          <td style="padding:12px;font-weight:bold;">📞 Téléphone</td>
          <td style="padding:12px;">
            <a href="tel:${telephone}">
              ${telephone}
            </a>
          </td>
        </tr>

        <tr>
          <td style="padding:12px;font-weight:bold;">📧 Email</td>
          <td style="padding:12px;">
            <a href="mailto:${email}">
              ${email}
            </a>
          </td>
        </tr>

        <tr style="background:#f8f8f8;">
          <td style="padding:12px;font-weight:bold;">🚛 Service</td>
          <td style="padding:12px;">${service}</td>
        </tr>

      </table>

      <h3 style="margin-top:35px;color:#0b5d3b;">
        Description du projet
      </h3>

      <div
        style="
          background:#fafafa;
          padding:20px;
          border-left:5px solid #FFD54A;
          border-radius:8px;
        "
      >
        ${message}
      </div>

    </div>

    <div
      style="
        background:#0b5d3b;
        color:white;
        text-align:center;
        padding:18px;
        font-size:14px;
      "
    >
      © SENTRANSCOM • Bâtir l'avenir, transporter l'excellence.
    </div>

  </div>
</div>
`,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

   const errorMessage =
  error instanceof Error ? error.message : "Erreur inconnue";

console.error(errorMessage);

return NextResponse.json(
  {
    success: false,
    message: errorMessage,
  },
  {
    status: 500,
  }
);
  }
}