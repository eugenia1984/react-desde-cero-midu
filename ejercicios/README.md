# :star: Ejercicios

Se realizaron los primeros ejercicios, para partir desde HTML, CSS y JavaScript para llegar iterativamente a React.

- En **primer-ejercicio** armamos avatares dinámicamente con JavaScript (mediante la función **Avatar()**), para no tener la misma estructura repetida en HTML. Utilicé la API [https://randomuser.me/](https://randomuser.me/). Recuperamos todas las imagenes y les agregamos un **addEventListener** para que cada vez que se le haga **click** en una imagen la pasamos **activa** / **inactiva** por medio de la **disabled**.

![image](https://user-images.githubusercontent.com/72580574/207409319-2d735751-cc3c-49cd-91e3-93031c2e4261.png)

- En **segundo-ejercicio** basandonos en el primer ejercicio, aplicamos [React](https://reactjs.org/) mediante CDN y hacemos los cambios necesarios. [Link a la documentación de React para agregar React en tu sitio web](https://reactjs.org/docs/add-react-to-a-website.html). Implementaciçon de **Babel** para utilizar **JSX**. Pasamos **props** al componente para determinar el src y el nombre a renderizar. Y se actualiza el **state** con**useState** para cambiar la clase y agregar **disabled** si se hace click para que se desabilite y se saque al volver a hacer click.

Por medio de props modifico el tamaño del avatar (el primero tiene la imagen más chica y el último la más gande, los dos del medio tiene le tamaño por default -el mediano-), asi puede ser más reutilizable.

También se ve el **renderizado condicional**, de no recibir un id va a mostrar el avatar de la mujer.

Y agrego otro renderizado condicional, si esta desactivada ademas de ponerse la imagen mas transparente no se muestra el nombre.

![image](https://user-images.githubusercontent.com/72580574/207450238-86e50f0c-bd77-4ebf-b08f-105d7d75c1cf.png)


- En **tercer-ejercicio** hago un contador para ver el hook **useState**

![image](https://user-images.githubusercontent.com/72580574/207459194-fd9e3f82-76be-415f-bdbc-549383088ec5.png)


---
