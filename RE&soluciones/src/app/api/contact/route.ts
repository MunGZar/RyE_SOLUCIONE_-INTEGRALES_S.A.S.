import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { nombre, empresa, correo, telefono, asunto, mensaje } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const asuntoMap: Record<string, string> = {
      capacitacion: "Capacitación Organizacional",
      consultoria: "Consultoría Administrativa",
      suministros: "Suministro de Bienes e Insumos",
      asesoria: "Asesoría Especializada",
      otro: "Otro Requerimiento"
    };
    const asuntoTexto = asuntoMap[asunto] || asunto;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'iryesolucionesintegrales@gmail.com', // El destino de los mensajes
      replyTo: correo,
      subject: `Nueva Solicitud Web: ${asuntoTexto} - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #0C458A; border-bottom: 2px solid #3F9036; padding-bottom: 10px;">Nueva Solicitud de Servicio 🏢</h2>
          
          <h3 style="color: #333;">Datos del Contacto:</h3>
          <ul style="list-style: none; padding: 0; color: #555;">
            <li style="margin-bottom: 8px;">👤 <strong>Nombre:</strong> ${nombre}</li>
            <li style="margin-bottom: 8px;">🏢 <strong>Organización/Entidad:</strong> ${empresa || 'No especificada'}</li>
            <li style="margin-bottom: 8px;">📧 <strong>Correo Corporativo:</strong> ${correo}</li>
            <li style="margin-bottom: 8px;">📱 <strong>Teléfono:</strong> ${telefono}</li>
          </ul>

          <h3 style="color: #333; margin-top: 25px;">Detalles del Requerimiento:</h3>
          <p style="color: #555;">📌 <strong>Servicio de Interés:</strong> ${asuntoTexto}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0C458A; color: #333; white-space: pre-wrap;">
            ${mensaje}
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
            Solicitud generada desde el formulario de contacto del sitio web corporativo de R&S Soluciones Integrales.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return NextResponse.json({ success: false, message: 'Error al enviar el correo' }, { status: 500 });
  }
}
