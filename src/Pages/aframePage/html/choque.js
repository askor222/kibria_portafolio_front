// Función para cargar la imagen desde el API y actualizar el atributo "src" de <a-sky>
async function loadSkyImageFromAPI() {
    try {
    const response = await fetch('http://127.0.0.1:8000/api/mundos/3');
    const data = await response.json();

    // Obtiene el elemento <a-sky> por su ID
    const skyElement = document.getElementById('skyElement');

    // Actualiza el atributo "src" con la URL de la imagen del API
    skyElement.setAttribute('src', data.img);
    } catch (error) {
    console.error('Error al obtener datos desde el API:', error);
    }
}

// Llama a la función para cargar la imagen desde el API
loadSkyImageFromAPI();
