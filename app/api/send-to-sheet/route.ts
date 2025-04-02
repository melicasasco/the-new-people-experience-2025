
  
  export async function POST(req: Request) {
    const body = await req.json()
  
    const response = await fetch("https://script.google.com/macros/s/AKfycbz83AuNNnJbUlLkH3pmmQXqlbta-Y1Mkj4J9bNcnBH9oJYY-tSSC96eV2hP1GC5B46wYQ/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
  
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Error al enviar a Google Sheets" }), {
        status: 500,
      })
    }
  
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  }