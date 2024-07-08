document.addEventListener("DOMContentLoaded", function() {
    const cifrarBtn = document.querySelector("#cifrarBtn");
    const descifrarBtn = document.querySelector("#descifrarBtn");
    const copiarBtn = document.querySelector("#copiarBtn");

    cifrarBtn.addEventListener("click", cifrarTexto);
    descifrarBtn.addEventListener("click", descifrarTexto);
    copiarBtn.addEventListener("click", copiarTexto);
});

function cifrarTexto() {
    const textoOriginal = document.querySelector('#textoOriginal').value;
    if (!validarTexto(textoOriginal)) {
        mostrarError();
        return;
    }
    let textoCifrado = ''; 
    for (let i = 0; i < textoOriginal.length; i++) {
        textoCifrado += String.fromCharCode(textoOriginal.charCodeAt(i) + 1);
    }
    const resultado = document.querySelector('#resultado');
    resultado.value = textoCifrado;
    resultado.style.backgroundImage = textoCifrado ? "url('C:/Users/saraa/Desktop/Challenge/img/encriptado.png')" : "none";
    resultado.style.backgroundSize = "50px 50px"; // Ajustar tamaño de la imagen
    resultado.style.backgroundRepeat = "no-repeat";
    resultado.style.backgroundPosition = "center"; // Colocar imagen en el centro a la derecha
    document.querySelector('#textoResultado').style.display = 'block';
    ocultarError();
}

function descifrarTexto() {
    const textoCifrado = document.querySelector('#textoOriginal').value;
    if (!validarTexto(textoCifrado)) {
        mostrarError();
        return;
    }
    let textoDescifrado = '';
    for (let i = 0; i < textoCifrado.length; i++) {
        textoDescifrado += String.fromCharCode(textoCifrado.charCodeAt(i) - 1);
    }
    const resultado = document.querySelector('#resultado');
    resultado.value = textoDescifrado;
    resultado.style.backgroundImage = textoDescifrado ? "url('C:/Users/saraa/Desktop/Challenge/img/encriptado.png')" : "none";
    resultado.style.backgroundSize = "50px 50px"; // Ajustar tamaño de la imagen
    resultado.style.backgroundRepeat = "no-repeat";
    resultado.style.backgroundPosition = "center"; // Colocar imagen en el centro a la derecha
    document.querySelector('#textoResultado').style.display = 'block';
    ocultarError();
}

function validarTexto(texto) {
    const regex = /^[a-z0-9\s]+$/;
    return regex.test(texto);
}

function mostrarError() {
    document.querySelector('#mensajeError').style.display = 'block';
    document.querySelector('#textoResultado').style.display = 'none';
}

function ocultarError() {
    document.querySelector('#mensajeError').style.display = 'none';
}

function copiarTexto() {
    const textoResultado = document.querySelector('#resultado');
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
