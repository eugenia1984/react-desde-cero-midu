const APP = document.getElementById("app");

const Avatar = (params) => {
  const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;

  return `
    <picture>
      <img src="${src}">
      <p>${params.name}</p>
    </picture>
  `;
};

// Para ir añadiendo cada avatar
APP.innerHTML += Avatar({ id: 1, name: "Andrea" });
APP.innerHTML += Avatar({ id: 2, name: "María" });
APP.innerHTML += Avatar({ id: 3, name: "Martina" });

// Para que al hacer click cambie entre activo / inactivo
APP.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("disabled")
  })
})
