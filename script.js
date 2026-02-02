// Espera a que cargue todo el HTML
document.addEventListener("DOMContentLoaded", () => {

  // Mensaje de bienvenida
  console.log("Bienvenido al portafolio de Jhon Jairo 👨‍💻");

  // Interacción con la foto de perfil
  const fotoPerfil = document.querySelector(".sidebar_userimage img");

  if (fotoPerfil) {
    fotoPerfil.addEventListener("click", () => {
      alert("Hola, soy Jhon Jairo Guerrero Bolívar\nEstudiante de Ingeniería en Software");
    });
  }

  // Portafolio dinámico
  const proyectos = [
    { nombre: "Proyecto HTML & CSS", link: "#" },
    { nombre: "Proyecto JavaScript", link: "#" },
    { nombre: "Sistema Universitario", link: "#" },
    { nombre: "Portafolio Web", link: "#" }
  ];

  const contenedorPortafolio = document.querySelector(".bloque:nth-of-type(2)");

  if (contenedorPortafolio) {
    // Limpia los enlaces actuales
    contenedorPortafolio.querySelectorAll("a").forEach(a => a.remove());

    // Agrega proyectos dinámicamente
    proyectos.forEach(proyecto => {
      const enlace = document.createElement("a");
      enlace.href = proyecto.link;
      enlace.target = "_blank";

      const texto = document.createElement("p");
      texto.textContent = proyecto.nombre;

      enlace.appendChild(texto);
      contenedorPortafolio.appendChild(enlace);
    });
  }

});
