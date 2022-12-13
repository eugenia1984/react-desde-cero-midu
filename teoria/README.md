# :book: Teoría

---

## :star: Características

- React es una biblioteca (no es un framework) para crear UI, tanto para páginas webs, como para desarrollo móbil (React Native) y se puede llevar a otras plataformas como videos juegos y realidad virtual.

- React es **declarativo**, no necesitamos decir paso a paso que hacer.

- React está basado en **componentes**, los que son reutilizables, se crea un sol ocomponente y se utiliza más de una vez, lo que se puede es modificarle la información que contine. La página completa en sí es un componente que contiene otros componentes hijos, nietos, bisnietos, etc.

---

## :star: Algunos datos

### ¿ Por qué aprender React?

- **Facebook (Meta)** está detrás de REact, por loq ue siempre está actualizandose y menteniendose.

- Tiene una gran comunidad, se utiliza mucho, si tenes algún problema googleando vas a encontrar solución y mucha documentación. **Next.js** es un framework de React que se está utilizand cada vez más, está basado en React. **TS** también se utiliza con React.

- Los conceptos que tiene React luego sirven para pasarse a Vue.

---

## :star:  ¿ Como agrego React a mi web ?

- [Documentación de React](https://reactjs.org/docs/add-react-to-a-website.html)

- Pasos:

1. Agrego un **div** en mi HTML que v a aser el contenedor de todo lo que renderice, le doy un **id** para poder identificarlo.

2. En mi HTMl, antes de mi `script` agrego **React** y **ReactDOM**:

```HTML
 <!-- Load React. -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
```

3. Creo mi componente de React

```JavaScript
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
```

---

## :star: JSX

- Hago el mismo ejercicio, pero esta vez utilizando **JSX**, **props** y [**useState**](https://reactjs.org/docs/hooks-reference.html#usestate).

JSX es un pseudolenguaje que transforma a llamadas de JavaScript, no es HTML con JavaScript.

```JSX
'use strict';

const APP = document.getElementById("app");
const useState = React.useState;

const Avatar = ({ id, name }) => {
  const [ enabled, setEnabled ] = useState(true);

  const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;

  const className = enabled ? "" : "disabled";

  return (
    <picture>
      <img
        src={src}
        alt="women"
        className={className}
        onClick={ () => {setEnabled(!enabled)}}
        />
      <p>{name}</p>
    </picture>
  )
}

// ReactDOM.render()
ReactDOM.createRoot(APP).render(
  <div className="container">
    <Avatar id={4} name="Ana"/>
    <Avatar id={5} name="María"/>
    <Avatar id={6} name="Sol"/>
    <Avatar id={7} name="Luna"/>
  </div>
)
```

También utilicé **onClick**, uno de los [**eventos sintéticos**](https://reactjs.org/docs/events.html#gatsby-focus-wrapper) y [¿cómo se manejan?](https://reactjs.org/docs/handling-events.html) (  que será luego los [eventHandler](https://beta.reactjs.org/learn/responding-to-events#adding-event-handlers)).

- Agregamos otro modo de hacerlo más reutilizable con la prop **size** para modificar el tamaño. Y agrego el **renderizado condicional**, si no recibe un id no puede mostrar una imagen de la APi, por lo que le paso un avatar por defecto.

```JSX
'use strict';

const APP = document.getElementById("app");
const useState = React.useState;

const Avatar = ({ id, name = "Unknown", size }) => {
  const [ enabled, setEnabled ] = useState(true);

  const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;

  let pictureClassName = ""
  if(size === "small") {
    pictureClassName = "is-small"
   } else if(size === "large") {
    pictureClassName = "is-large"
   }
  const imgClassName = enabled ? "" : "disabled"; 

  return (
    <picture>
      {id?
      (
        <img 
        src={src} 
        alt="women"
        className={` ${imgClassName} ${pictureClassName}`}
        onClick={ () => {setEnabled(!enabled)}}
        />
      )
      :
      (
        <picture>
        <img 
        src="https://img.icons8.com/office/80/null/user-female-skin-type-4.png"
        alt="women"
        className={` ${imgClassName} ${pictureClassName}`}
        onClick={ () => {setEnabled(!enabled)}}
        />
      </picture> 
      )
      }
      <p>{name}</p>
    </picture>
  )
}

// ReactDOM.render()
ReactDOM.createRoot(APP).render(
  <div className="container">
    <Avatar id={4} name="Ana" size="small"/>
    <Avatar id={5} name="María"/>
    <Avatar id={6} name="Sol"/>
    <Avatar id={7} name="Luna" size="large"/>
    <Avatar name="Luisa"/>
    <Avatar />
  </div>
)


```
---
