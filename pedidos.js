

function sumarPrecios() {
    const precio1Select = document.getElementById("precio1");
    const precio2Select = document.getElementById("precio2");
    const precio3Select = document.getElementById("precio3");
    const precio4Select = document.getElementById("precio4");
    const resultadoDiv = document.getElementById("resultado");
    

    const selectedPrice1 = parseFloat(precio1Select.value);
    const selectedPrice2 = parseFloat(precio2Select.value);
    const selectedPrice3 = parseFloat(precio3Select.value);
    const selectedPrice4 = parseFloat(precio4Select.value);
    const suma = selectedPrice1 + selectedPrice2 + selectedPrice3 + selectedPrice4;

    // Puedes hacer lo que desees con la suma de precios aquí.
    swal.fire(  resultadoDiv.innerHTML =  "Total de sus articulos a Pagar es: RD$" + suma + ".00" ,
    '!Gracias Por Su Compra!',
    'success' );

    // Evita que el formulario se envíe al servidor.
    return suma ;

    
}



// Example starter JavaScript for disabling form submissions if there are invalid fields
( function()  {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  


// Función para generar un número aleatorio de 6 dígitos
//function generarNumeroAleatorio() {
    //const min = 100000; // Valor mínimo (inclusivo)
    ///const max = 999999; // Valor máximo (inclusivo)
    //return Math.floor(Math.random() * (max - min + 1)) + min;
//}

// Obtener el elemento HTML donde se mostrará el número aleatorio
//const numeroAleatorioElement = document.getElementById("numeroAleatorio");

// Obtener el botón
//const generarNumeroButton = document.getElementById("generarNumero");

// Agregar un evento click al botón
//generarNumeroButton.addEventListener("click", function() {
    // Generar el número aleatorio y mostrarlo en la página cuando se presiona el botón
   // const numeroAleatorio = generarNumeroAleatorio();
    //numeroAleatorioElement.textContent = numeroAleatorio;
//});


// Obtener los elementos HTML
const inputs = document.querySelectorAll("input");
const generarNumerosButton = document.getElementById("generarNumeros");
const numerosAleatoriosList = document.getElementById("numerosAleatorios");

// Agregar un evento "input" a todos los campos de entrada
inputs.forEach(input => {
    input.addEventListener("input", validarCampos);
});

// Función para validar si todos los campos están llenos
function validarCampos() {
    const todosLlenos = Array.from(inputs).every(input => input.value !== "");
    generarNumerosButton.disabled = !todosLlenos;
}

// Agregar un evento "click" al botón para generar números aleatorios
generarNumerosButton.addEventListener("click", () => {
    const numerosAleatorios = generar6NumerosAleatorios();
    // Limpiar la lista antes de agregar los nuevos números
    numerosAleatoriosList.innerHTML = "";
    // Agregar los números aleatorios a la lista
    numerosAleatorios.forEach(numero => {
        const listItem = document.createElement("li");
        listItem.textContent = numero;
        numerosAleatoriosList.appendChild(listItem);
    });
});

// Función para generar un número aleatorio de 6 dígitos seguidos
function generar6NumerosAleatorios() {
  const numeroAleatorio = Math.floor(100000 + Math.random() * 900000); // Genera un número aleatorio de 6 dígitos
  return numeroAleatorio;
}

// Obtener el elemento HTML donde se mostrará el número aleatorio
const numeroAleatorioElement = document.getElementById("numerosAleatorios");

// Obtener el botón
const generarNumeroButton = document.getElementById("generarNumeros");

// Agregar un evento click al botón
generarNumeroButton.addEventListener("click", function() {
  // Generar el número aleatorio y mostrarlo en la página cuando se presiona el botón
  const numeroAleatorio = generar6NumerosAleatorios();
  numeroAleatorioElement.textContent = "Codigo del Producto: " + numeroAleatorio;
});




 //Pedido estandar  

function sumarPrecios() {

  const precio5Select = document.getElementById("precio5");
  const resultadoDiv = document.getElementById("resultado");
  const selectedPrice5 = parseFloat(precio5Select.value);
  const suma = selectedPrice5
 
  

  // Puedes hacer lo que desees con la suma de precios aquí.
  swal.fire(  resultadoDiv.innerHTML =  "Total de sus articulos a Pagar es: RD$" + suma + ".00" ,
  '!Gracias Por Su Compra!',
  'success' );

  // Evita que el formulario se envíe al servidor.
  return  ;

  
}


 // funcion al seleccionar un opcion aparezca imagen

function selectImage(){


}