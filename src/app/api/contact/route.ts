import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, disciplina, mensaje } = body;

    // Validation
    if (!nombre || !email || !telefono || !disciplina) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn("Nodemailer: Falta configurar SMTP_USER o SMTP_PASS en las variables de entorno.");
      return NextResponse.json(
        { error: "El servicio de correo no está configurado en el servidor." },
        { status: 500 }
      );
    }

    // Configure SMTP transport
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for port 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"Marcelo's School" <${smtpUser}>`,
      to: "principalemed@gmail.com",
      subject: `Nueva Reserva de Clase: ${disciplina.toUpperCase()} - ${nombre}`,
      text: `
        Nueva solicitud de reserva de clase gratis en Marcelo's School (Calle Arce, Sevilla).

        Datos del Alumno:
        - Nombre: ${nombre}
        - Email: ${email}
        - Teléfono: ${telefono}
        - Disciplina: ${disciplina}

        Mensaje:
        ${mensaje || "Sin mensaje adicional."}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #ffffff; color: #1f2937;">
          <h2 style="color: #ef4444; margin-top: 0; font-family: sans-serif; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">Nueva Reserva de Clase Gratis</h2>
          <p>Se ha registrado una solicitud de contacto desde la landing page para el dojo <strong>Marcelo's School</strong> en Sevilla.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; width: 150px;">Nombre:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #ef4444; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Teléfono:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><a href="tel:${telefono}" style="color: #ef4444; text-decoration: none;">${telefono}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Disciplina:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; text-transform: uppercase; font-weight: bold; color: #b91c1c;">${disciplina}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 6px; border: 1px solid #e5e7eb;">
            <strong style="display: block; margin-bottom: 8px; color: #374151;">Mensaje adicional:</strong>
            <p style="margin: 0; white-space: pre-wrap; color: #4b5563; font-style: italic;">"${mensaje || "Sin mensaje adicional."}"</p>
          </div>

          <p style="margin-top: 30px; font-size: 11px; color: #9ca3af; text-align: center; border-t: 1px solid #f3f4f6; padding-top: 15px;">
            Este correo fue generado de manera automática desde el formulario de reservas de Marcelo's School Sevilla (Calle Arce).
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Tu reserva ha sido procesada con éxito y se ha enviado la notificación por correo.",
    });
  } catch (error: any) {
    console.error("Error al enviar el correo con nodemailer:", error);
    return NextResponse.json(
      { error: "Error del servidor al procesar el envío de correo: " + error.message },
      { status: 500 }
    );
  }
}
