function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      imagen.src = "./img/lock.png";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }


function desencriptar() {
    let texto = document.getElementById("texto").value;
    let mensaje = document.getElementById("mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        mensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./img/unlocked.png";
    }else {
        imagen.src = "./img/muneco.png";
        mensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}