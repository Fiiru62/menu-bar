async function obtenerDatos() {
    const url = `URL_DE_TU_GOOGLE_SHEETS_API?timestamp=${new Date().getTime()}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos); // Para ver si llegan bien los datos en la consola
}
obtenerDatos();
