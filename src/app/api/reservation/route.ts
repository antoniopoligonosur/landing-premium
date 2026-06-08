import { NextResponse } from "next/server";

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

    // Log the simulated email sending to principalemed@gmail.com
    console.log(`
      ===========================================================
      [EMAIL SYSTEM] SENDING NOTIFICATION TO: principalemed@gmail.com
      ===========================================================
      Asunto: Nueva Reserva de Clase Gratis - Marcelo's School
      
      Detalles del Alumno:
      - Nombre: ${nombre}
      - Email: ${email}
      - Teléfono: ${telefono}
      - Disciplina: ${disciplina.toUpperCase()}
      
      Mensaje adicional:
      ${mensaje || "Ninguno"}
      
      Destino: Calle Arce, Sevilla
      Fecha de Envío: ${new Date().toLocaleString("es-ES")}
      ===========================================================
    `);

    // Simulate database write or network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({
      success: true,
      message: "Reserva recibida correctamente. Nos pondremos en contacto contigo en breve."
    });
  } catch (error) {
    console.error("Error en API de reservaciones:", error);
    return NextResponse.json(
      { error: "Ha ocurrido un error interno al procesar su solicitud" },
      { status: 500 }
    );
  }
}
