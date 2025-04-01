/* import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { google } from "googleapis" */

// Configuración para Google Sheets
/* const sheets = google.sheets("v4")
 */
// Configuración para la autenticación con Google
/* const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
 */
// ID de la hoja de cálculo
/* const SPREADSHEET_ID = "1z8elUftTGu3Y9rVmcChtqsW55fKgLJUG6dj9DjsKzkk"
 */
// Configuración para el envío de correos
/* const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "tu-email@gmail.com", // Reemplazar con tu email o usar variables de entorno
    pass: process.env.EMAIL_PASS || "tu-contraseña", // Reemplazar con tu contraseña o usar variables de entorno
  },
}) */

/* export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, campaign, email } = body

    if (!name || !company || !campaign || !email) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }
 */
    // 1. Enviar correo electrónico
/*     const mailOptions = {
      from: process.env.EMAIL_USER || "tu-email@gmail.com",
      to: "melanie@gmail.com",
      subject: "Nuevo mensaje de contacto - be People Experience",
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Campaña de interés:</strong> ${campaign}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
 */
    // 2. Guardar en Google Sheets
/*     try { */
      // Nota: En un entorno de producción, deberías configurar la autenticación adecuada
      // con Google usando OAuth2 o una cuenta de servicio.
      // Este es un ejemplo simplificado.

      // Para una implementación completa, necesitarías:
      // 1. Crear credenciales OAuth2 o una cuenta de servicio en Google Cloud Console
      // 2. Configurar la autenticación adecuada
      // 3. Compartir la hoja de cálculo con la cuenta de servicio

      // Ejemplo de cómo sería la implementación con una cuenta de servicio:
      /*
      const auth = new google.auth.GoogleAuth({
        keyFile: 'path/to/your/service-account-key.json',
        scopes: SCOPES,
      });
      
      const authClient = await auth.getClient();
      
      const request = {
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!A:D', // Ajusta según tu hoja de cálculo
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [[name, company, campaign, email, new Date().toISOString()]],
        },
        auth: authClient,
      };
      
      await sheets.spreadsheets.values.append(request);
      */

      // Para fines de demostración, registramos que intentamos guardar los datos
      /* console.log("Intentando guardar en Google Sheets:", {
        name,
        company,
        campaign,
        email,
        date: new Date().toISOString(),
      })
    } catch (error) {
      console.error("Error al guardar en Google Sheets:", error)
      // Continuamos con la respuesta exitosa incluso si falla Google Sheets
    } */

  /*   return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error en la API de contacto:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
} */

