# modulo-2-evaluacion-intermedia-elevalgue

El ejercicio consiste en desarrollar una página web con un juego de "Adivinar el número".

El juego consiste en que el programa genera un número al azar entre 1 y 100, y la jugadora tiene que
adivinarlo. El juego da pistas sobre si el número que prueba es demasiado alto o bajo, y va contabilizando el
número de intentos. Hasta que al final la jugadora acierta el número.
En la parte superior, la jugadora introduce un número y da al botón de Prueba.
Debajo, en el apartado de Pista aparecen los siguientes textos:
Al arrancar la página: Escribe un número y dale a Prueba.
Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba: Demasiado
alto.
Cuando la jugadora introduzca un número menor que el aleatorio y pulse en Prueba: Demasiado
bajo.
Cuando la jugadora introduzca un número igual que el aleatorio y pulse en Prueba: Has ganado
campeona!!!
Cuando la jugadora no introduzca un número válido y pulse en Prueba: El número debe estar
entre 1 y 100.
En la parte inferior debe aparecer el número de veces que se ha pulsado el bóton Prueba.
Pasos para realizar el juego
Para realizar una versión sencilla del juego tenemos que realizar las siguientes funcionalidades desde
JavaScript:
1. Crear una maquetación mínima con el input, el botón, el espacio para pistas y el espacio para el
contador de intentos.
2. Generar un número aleatorio con la ayuda de Math.random y Math.ceil. Podéis usar este código. Para
ello copiad estas 3 líneas de código en vuestro JS y no las modifiquéis:
function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}
3. Mostrar en consola el número aleatorio generado para poder saber qué número se ha generado y
poder hacer pruebas.
4. Al pulsar el botón de Prueba, acceder al contenido del input y mostrarlo en la consola.
5. Comparar el número que la jugadora ha escrito en el input con el número aleatorio, y pintar las pistas
correspondientes en la pantalla.
6. Actualizar el contador de intentos cada vez que la jugadora pruebe.
Según vayáis trabajando en el ejercicio, id haciendo nuevas versiones del mismo y subid los cambios a
GitHub. De esta forma podremos ver cómo vais avanzando. También publicad el resultado usando GitHub
Pages (en las preferencias del proyecto) y poned el enlace a GitHub Pages al lado de la descripción del repo.
Entrega
La evaluación solo se considerará terminada cuando:
Esté publicada en GitHub Pages y esté funcionando.
El enlace a GitHub Pages esté en la página página principal del repositorio, en la parte superior, al lado
de la descripción.
¡A jugar!
