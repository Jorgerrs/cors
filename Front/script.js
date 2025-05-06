document.getElementById("btn-search").addEventListener("click", async () => {
  const name = document.getElementById("search").value.trim();
  console.log("Buscando personaje con nombre:", name);
  try {
    const response = await fetch(`http://localhost:3000/characters/${name}`);
    if (response.ok) {
      const data = await response.json();
      console.log("Datos recibidos:", data);
      const { name, status, species, gender, origin, image } = data;
      document.getElementById("result").innerHTML = `
        <h2>${name}</h2>
        <img src="${image}" alt="${name}" />
        <p>Status: ${status}</p>
        <p>Species: ${species}</p>
        <p>Gender: ${gender}</p>
        <p>Origin: ${origin.name}</p>
      `;
    } else {
      console.log("Respuesta no ok:", response.status);
      document.getElementById("result").innerHTML = `<p>Personaje no encontrado</p>`;
    }
  } catch (error) {
    console.error('Error en fetch:', error);
    document.getElementById("result").innerHTML = `<p>Error al buscar el personaje</p>`;
  }
});