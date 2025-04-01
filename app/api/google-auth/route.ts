/* import { NextResponse } from "next/server"

// Esta ruta es para configurar la autenticación con Google
// En un entorno de producción, deberías usar variables de entorno para las credenciales

export async function GET(request: Request) {
  try {
    // Instrucciones para configurar la autenticación con Google
    return NextResponse.json({
      message: "Para configurar la autenticación con Google Sheets, sigue estos pasos:",
      steps: [
        "1. Ve a Google Cloud Console (https://console.cloud.google.com/)",
        "2. Crea un nuevo proyecto",
        "3. Habilita la API de Google Sheets",
        "4. Crea una cuenta de servicio y descarga las credenciales JSON",
        "5. Comparte tu hoja de cálculo con el email de la cuenta de servicio",
        "6. Guarda el archivo JSON de credenciales en un lugar seguro",
        "7. Configura las variables de entorno en tu proyecto",
      ],
    })
  } catch (error) {
    console.error("Error en la API de autenticación de Google:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}

 */