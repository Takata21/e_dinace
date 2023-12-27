// Importa los módulos necesarios de Next.js
import { NextResponse } from "next/server";

// Define la función POST adaptada para Next.js
export async function POST(req) {
  try {
    // Obtén la URL del cuerpo de la solicitud
    const { url } = await req.json();
    // Realiza la solicitud a la URL utilizando fetch
    const response = await fetch(url, {
      method: "POST",
    });

    // Parsea la respuesta como JSON
    const data = await response.json();

    // Retorna una respuesta JSON con la data obtenida
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // Maneja los errores y logéalos
    console.error(error.message);

    // Retorna una respuesta de error
    return NextResponse.json(
      { error: "Error en la solicitud" },
      { status: 500 }
    );
  }
}
