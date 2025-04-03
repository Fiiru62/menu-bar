/* Este código no funciona pero lo mantengo para reutilizar algún recurso en el futuro si hace falta */


export async function GET() {
  const sheetId = "1_SSfYwNJDOvZRSmffLR_-043_i_GUiS7LGHzwVA7Jgc"; // ID
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

  try {
    const response = await fetch(url);
    let text = await response.text();
    text = text.substring(47, text.length - 2); // Limpiar la respuesta JSON de Google
    const json = JSON.parse(text);

    const productos = json.table.rows.map((row: any) => ({
      nombre: row.c[0].v, 
    }));

    return new Response(JSON.stringify(productos), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "No se pudo obtener los datos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
