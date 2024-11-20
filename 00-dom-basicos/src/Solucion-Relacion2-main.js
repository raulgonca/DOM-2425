document.addEventListener("DOMContentLoaded", function() {

//---------- Declaracion de variables ----------


//---------- Declaracion de funciones ----------

const handlerClickSpan = (e) => {
  const span = e.target;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  span.style.backgroundColor = `#${randomColor}`;
};

const handlerClickAlert = (e) => {
  const p = e.target;
  alert(p.textContent)
}


//-----------------------------------------------------------------------Relacion2 ----------------------------------------------------------------


//1. Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. Cuando se haga clic, cambia el color de fondo del elemento al azar.
document.querySelectorAll("#contenedorSecundario span")
  .forEach((span) => {
    span.addEventListener("click", handlerClickSpan)});



//2. Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.
document.querySelectorAll(".parrafo").forEach((p) => {
    p.addEventListener("dblclick", handlerClickAlert)});
  
  
//4. Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter".
// El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    document.querySelectorAll("#contenedorSecundario p").forEach((parrafo) => {
      parrafo.textContent = "has pulsado enter";
      parrafo.innerhtml = "has pulsado enter2";
      parrafo.innerHTML = "<Strong> has pulsado enter3</Strong>";
      });
  }
  });

//5. Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.

document.querySelectorAll(".etiqueta").forEach((etiqueta) => {
  etiqueta.addEventListener("click", () => {
    etiqueta.remove();
  });
});

//6. Crea una función que añada un nuevo párrafo al `contenedorSecundario` cuando se haga doble clic en un elemento con la clase "boton".
document.querySelectorAll("#contenedorSecundario span").forEach((span) => {
  span.addEventListener("mouseover", () => {
    span.style.color = "blue";
  });
  span.addEventListener("mouseout", () => {
    span.style.color = "";
  });
});

//8. Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`.
// El nuevo tamaño debe ser el doble del tamaño actual.

document.querySelector("#contenedorPrincipal img")
  .addEventListener("click", () => {
    document.querySelectorAll("#contenedorPrincipal p")
    .forEach((parrafo) => {
      const currentSize = window.getComputedStyle(parrafo).fontSize;
      parrafo.style.fontSize = `${parseInt(currentSize) * 2}px`;
    });
  });


  








});