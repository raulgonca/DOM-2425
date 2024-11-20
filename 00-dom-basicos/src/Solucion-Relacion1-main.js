document.addEventListener("DOMContentLoaded", () => {

//-----------------------------------------------------------------------Relacion1 ----------------------------------------------------------------

//1. Seleccionar el elemento 'h1' por si ID.
  const elementDiv = document.getElementById("contenedorPrincipal");
  const elementH1 = elementDiv.querySelector("h1");
  console.log(elementH1.textContent); //solo texto
  console.log(elementH1) // etiqueta y texto

//forma rapida 
  const elementH1V2 = document
    .getElementById("contenedorPrincipal")
    .querySelector("h1");
  console.log(elementH1V2)

//2. Seleccionar todos los parrafos con la clase 'parrafo'.
  const parrafosDiv = document.querySelectorAll("#contenedorPrincipal .parrafo"); //queryselector usa las misma forma que css para el elemento
  console.log(parrafosDiv);
  
//3. Selecciona el elemento `img` por su atributo `src`.
  const elementImg = document.querySelector("img[src='imagen.png']");
  console.log(elementImg);

//4. Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.
  const elementosSpan =document.querySelectorAll("#contenedorSecundario span");
  console.log(elementosSpan);

//5. Selecciona el primer párrafo con la clase 'importante'.
  const primerParrafoImportante = document.querySelector(".parrafo.importante");
  console.log(primerParrafoImportante);

//6. Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".
  const parrafosContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal p");
  console.log(parrafosContenedorPrincipal);

//7. Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".
  const elementosConAtributos = document.querySelectorAll("[data-atributo='valor1']");
  console.log(elementosConAtributos);

//8. Selecciona el segundo párrafo que está dentro de un elemento con la clase 'importante'.
  const segundoParrafoImportante = document.querySelectorAll(".parrafo.importante");
  segundoParrafoImportante.length>1 
    ? console.log(segundoParrafoImportante[1])
    : null;

  
//9. Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase 'contenedorSecundario'.
    const elementosSpanContenedorScundario = document.querySelectorAll("#contenedorSecundario span");
    console.log(elementosSpanContenedorScundario);

//10. Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase 'parrafo'.

  const tercerParrafo = document.querySelectorAll("#contenedorPrincipal .parrafo");
  tercerParrafo.length>2 
    ? console.log(tercerParrafo[2]) 
    : null;


//-----------------------------------------------------------------------Relacion1 ----------------------------------------------------------------

 });