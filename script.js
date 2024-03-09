const contenedorPresente = document.getElementById("optionContainer");

if (contenedorPresente) {
    // Ejecuta el código solo si el contenedor está presente
    document.getElementById("type").addEventListener("change", function () {
        var seleccion = this.value;
        var contenedor = document.getElementById("optionContainer");
        if (seleccion === "checkbox") {
            contenedor.classList.remove("oculto");
        } else {
            contenedor.classList.add("oculto");
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const formCreate = document.getElementById("surveyForm1");
    const addQuestionButton = document.getElementById("submit");
    const surveyList = document.querySelector(".surveyList");
    const nombreEncuestaInput = document.getElementById("nombreEncuesta");

    // Mostrar el campo de entrada del nombre de la encuesta inicialmente
    nombreEncuestaInput.style.display = "block";

    // Agregar evento al formulario para almacenar el nombre de la encuesta
    formCreate.addEventListener("submit", function(event) {
        event.preventDefault();
        var nombreEncuesta = nombreEncuestaInput.value;
        localStorage.setItem("nombreEncuesta", nombreEncuesta);
        // Ocultar el campo de entrada del nombre de la encuesta después de guardar el nombre
        nombreEncuestaInput.style.display = "none";
        nombreEncuestaInput.value = ""; // Limpiar el campo de entrada
    });

    // Agregar evento al botón "Agregar pregunta"
    addQuestionButton.addEventListener("click", function() {
        var nombreEncuesta = localStorage.getItem("nombreEncuesta");
        var pregunta = document.getElementById("question").value;
        var tipoRespuesta = document.getElementById("type").value;
        var optionsInput = document.querySelectorAll(".option");
        var opciones = [];
        var datosEncuestaCreada = {
            nombreEncuesta: nombreEncuesta
        };

        // Ocultar el campo de entrada del nombre de la encuesta después de agregar la primera pregunta
        nombreEncuestaInput.style.display = "none";

        // Recorrer los campos de opciones si la respuesta es de tipo "checkbox"
        if (tipoRespuesta === "checkbox") {
            optionsInput.forEach(function(input) {
                opciones.push(input.value);
            });
            var preguntaOpciones = {
                pregunta: pregunta,
                tipoRespuesta: tipoRespuesta,
                opciones: opciones
            }
            datosEncuestaCreada.pregunta = preguntaOpciones;
        } else {
            var preguntatext ={
                pregunta: pregunta
            }
            datosEncuestaCreada.pregunta = preguntatext;
        }

        // Crear el elemento <li> que contiene la pregunta y agregarlo a la lista
        var listItem = document.createElement("li");
        if (tipoRespuesta === "checkbox") {
            var optionsText = opciones.join(", "); // Convertir las opciones en un string separado por comas
            listItem.textContent = pregunta + " (con opciones: " + optionsText + ")"; // Mostrar las opciones en el texto del ítem
        } else {
            listItem.textContent = pregunta; // Mostrar la pregunta sin opciones
        }
        surveyList.appendChild(listItem);

        // Mostrar una alerta con los datos de la encuesta
        var datosString = JSON.stringify(datosEncuestaCreada, null, 2);
        //alert("Datos de la encuesta:\n" + datosString);
    });
});



    
    

    
    
    





    


/*############js de pagina encuestas creadas##############*/
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


