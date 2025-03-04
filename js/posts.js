class Post {
  nombre;
  descripcion;
  etiquetas;
  img;
  constructor(nombre, descripcion, img, etiquetas) {
    this.descripcion = descripcion;
    this.nombre = nombre;
    this.etiquetas = etiquetas;
    this.img = img;
  }
}

let etiquetas = ["All posts", "Art", "Development", "LifeStyle", "Accesories"];
let posts = [
  new Post(
    "Post 1",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "post1.jpg",
    ["Art", "Development"]
  ),
  new Post(
    "Post 2",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae odio culpa delectus omnis magni molestias eligendi quod quos! Ea debitis, sint atque quia inventore et sed! Quibusdam cumque doloribus maxime!",
    "post2.jpg",
    ["LifeStyle", "Art"]
  ),
  new Post(
    "Post 3",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae odio culpa delectus omnis magni molestias eligendi quod quos! Ea debitis",
    "post3.jpg",
    ["Development"]
  ),
  new Post(
    "Post 4",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae odio culpa delectus omnis magni molestias eligendi quod quos! Ea debitis, sint atque quia inventore et sed!",
    "post4.jpg",
    ["Accesories", "LifeStyle"]
  ),
  new Post(
    "Post 5",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae odio culpa delectus omnis magni",
    "post5.jpg",
    ["Development", "Art"]
  ),
];

//Para que cuando se clicke se vean los posts de esa etiqueta
document.querySelectorAll("#etiquetas>div").forEach((etiqueta) => {
  etiqueta.addEventListener("click", () => {
    let etiquetaNombre = etiqueta.textContent;
    if (etiquetaNombre == "All posts") {
      mostrarPosts(posts);
    } else {
      let postEtiqueta = [];
      posts.forEach((post) => {
        post.etiquetas.forEach((etiquetaComp) => {
          if (etiquetaComp == etiquetaNombre) {
            postEtiqueta.push(post);
          }
        });
      });
      mostrarPosts(postEtiqueta);
    }
  });
});

//Escribe los posts de la etiqueta seleccionada
function mostrarPosts(posts) {
  let divPosts = document.getElementById("posts");
  divPosts.innerHTML = "";
  posts.forEach((post) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = "img/posts/" + post.img;
    img.alt = post.img;
    div.appendChild(img);

    let titulo = document.createElement("h3");
    titulo.textContent = post.nombre;
    div.appendChild(titulo);

    let divEtiquetas = document.createElement("div");
    divEtiquetas.id = "etiquetas-post";
    post.etiquetas.forEach((etiqueta) => {
      let divEtiqueta = document.createElement("div");
      divEtiqueta.className = "etiqueta-post";
      divEtiqueta.textContent = etiqueta;
      divEtiquetas.appendChild(divEtiqueta);
    });
    div.appendChild(divEtiquetas);

    let descripcion = document.createElement("p");
    descripcion.textContent = post.descripcion;
    div.appendChild(descripcion);

    let ver = document.createElement("div");
    ver.textContent = "View Post";
    ver.className = "boton";
    div.appendChild(ver);

    divPosts.appendChild(div);
  });
}

mostrarPosts(posts);
