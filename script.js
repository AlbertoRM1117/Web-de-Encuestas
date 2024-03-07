const abrirAviso = document.querySelector("#abrir-aviso");
const cerrarAviso = document.querySelector("#cerrar-aviso");

document.addEventListener("DOMContentLoaded", function() {
  const formulario = document.querySelector("#surveyForm");
  const modal = document.querySelector("#modal");

  formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  // Obtener los valores del formulario
  var nombre = document.querySelector("#nombre").value;
  var empresa = document.querySelector("#empresa").value;
  var satisfaccion = document.querySelector("#satisfaccion").value;
  var recomendacion = document.querySelector("#recomendacion").value;
  var calidad = document.querySelector("#calidad").value;
  var comentario = document.querySelector("#comentario").value;

  // Crear un objeto con los datos de la encuesta
  var datos = {
    nombre: nombre,
    empresa: empresa,
    satisfaccion: satisfaccion,
    recomendacion: recomendacion,
    calidad: calidad,
    comentario: comentario
  };

// Mostrar los datos en un alert
var datosString = JSON.stringify(datos, null, 2); // Convertir el objeto a una cadena con formato
alert("Datos de la encuesta:\n" + datosString);

  });
});

//Mantiene abierta la ventana emergente
abrirAviso.addEventListener("click", ()=>{
    modal.showModal();
})

//Cierra la ventana emergente
cerrarAviso.addEventListener("click",()=>{
    modal.close();
})