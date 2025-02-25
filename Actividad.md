# Práctica de Ruteo

En este práctico utilizaremos los contenidos aprendidos sobre ruteo para realizar una aplicación simple.

Para este proyecto, utilizaremos la API de [países](https://restcountries.com/). Nuestra aplicación será capaz de listar países de una región o subregión determinada. Nuestra aplicación contendrá las siguientes rutas:

- `/`: La ruta raíz, donde se le informa al usuario el objetivo y funcionamiento de la página. Esta ruta también contendrá links a cada una de las diferentes regiones (investigar en la documentación de la API cuales son las regiones disponibles).
- `/{region}`: Habrá una ruta por cada región existente, y en ella se listaran las posibles subregiones (norte, sur, este, oeste, centro). Se puede también colocar una opción para listar todos los países de la región seleccionada.
- `/{región}/{subregion}`: Esta ruta listará todos los países correspondientes a la subregión seleccionada. Implementar una componente para renderizar un país de forma individual (para luego ser utilizada múltiples veces). Se debe listar el nombre, código, bandera, moneda y lenguaje de cada país.

Investigar sobre el uso de rutas dinámicas para implementar de forma compacta la estructura de rutas del sitio.
Para desarrollar este práctico puede ser consultada la documentación de la librería [react-router-dom](https://reactrouter.com/en/main)