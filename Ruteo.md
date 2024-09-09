# Ruteo de aplicaciones - React

En este práctico aprenderemos a establecer diferentes rutas en nuestra aplicación react.
Para ello, utilizaremos la librería "React Router" la cual es la más utilizada actualmente para realizar esta tarea.

La idea detrás de utilizar un router es poder establecer diferentes secciones en nuestra página.
De esta forma podremos segmentar de forma mas clara y amigable para el usuario las distintas features o características de nuestro sitio.

Recuerda que para utilizar una librería en tu proyecto React debes instalarla de la siguiente manera:
```bash
npm install react-router-dom
```

## El componente `<BrowseRouter>`

Este es el componente "principal" de nuestro ruteo, y estará ubicado en el `index.js`

Si buscamos en la documentación de la librería, veremos que la descripción de este componente nos dice algo como: "Un <BrowserRouter> almacena la ubicación actual en la barra de direcciones del navegador utilizando URLs limpias y navega utilizando la pila de historial incorporada del navegador". Veamos qué significa esto:

* "Almacena la ubicación actual en la barra de direcciones": Cuando navegamos por internet, la barra de direcciones (donde escribimos las páginas web) muestra una URL (como www.mi-sitio.com). El <BrowserRouter> se asegura de que esa URL cambie cada vez que el usuario se mueve por diferentes partes de la aplicación, sin que sea necesario recargar la página completa.
* "URLs limpias": Esto significa que las direcciones son claras, sin símbolos extraños ni números. Por ejemplo, en lugar de www.mi-sitio.com/#/pagina123, veríamos algo más simple como www.mi-sitio.com/pagina.
* "Navega usando la pila de historial del navegador": Cuando usamos el botón "atrás" o "adelante" en el navegador, lo que hacemos es movernos a través del "historial" de las páginas que ya visitamos. El <BrowserRouter> permite que esas funciones sigan funcionando en una aplicación web, para que podamos retroceder o avanzar como lo haríamos en cualquier página web común.

En el siguiente fragmento de código se ilustra como se utiliza este componente: 
```javascript
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>
);
```

## Componente `<Routes>`

Cada vez que la ubicación (URL) cambia, <Routes> revisa todas sus rutas hijas para encontrar la mejor coincidencia y renderiza esa rama de la interfaz de usuario. Los elementos <Route> pueden estar anidados para indicar una interfaz de usuario anidada, que también corresponde a rutas de URL anidadas. Las rutas padre renderizan sus rutas hijas a través de un <Outlet> (veremos el uso de `<Outlet>` más adelante).

A continuación se muestra el uso del componente `<Routes>` utilizando el código anterior:
```javascript
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
      <Routes>
        {/* Each of your routes go here */}
      </Routes>
  </BrowserRouter>
);
```

## Componente `<Route>`
(No confundir con el anterior)
Las rutas (Routes) son quizás la parte más importante de una aplicación con React Router. Conectan segmentos de URL con componentes, la carga de datos y las modificaciones de datos. A través del anidamiento de rutas, los diseños complejos de aplicaciones y las dependencias de datos se vuelven simples y declarativos.

Es a través de este componente que sucede la "magia" del ruteo. Este será el componente que se encargará de establecer (o matchear) la ruta del url con la componente a renderizar.

Esta componente puede tomar muchos atributos, estos son los que más utilizaremos:
* **path:** Será el patron a utilizar para determinar si esta ruta corresponde al url de la página.
* **element:** Establecerá el componente a renderizar cuando el url coincide con la ruta especificada.