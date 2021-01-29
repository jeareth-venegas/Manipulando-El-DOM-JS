/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el forom
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE

// añado constantes
const form = document.querySelector("form");
const input = document.querySelectorAll('.requerido');
const js = document.querySelector('script');
const formPadre = form.parentElement;
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
// mensajes de error y confirmación
let invalid = '';
let valid = '';

form.addEventListener("submit", function(e) {
  e.preventDefault();
  input.forEach(element =>{
    if(element.value != ''){
      element.style.border = 'solid 1px green';
      invalid = '';
      valid = "Su formulario ha sido enviado con éxito";
    }else{
      element.style.border = 'solid 1px red';
      invalid = 'Error. Llene los espacios con asterisco (*)';
      valido = '';
    }
  });
  //estructura
  h2.innerText = valid;
  h3.innerText = invalid;
  formPadre.insertBefore(h2, js);
  h2.style.backgroundColor = "#00be0d88";
  formuPadre.insertBefore(h3, form);
  h3.style.backgroundColor = "#ff020257";
  console.log("FORMULARIO ENVIADO");
});

  console.log("FORMULARIO ENVIADO");

