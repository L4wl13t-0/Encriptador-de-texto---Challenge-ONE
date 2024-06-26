function encriptar() {
    const textArea = document.getElementById("texto").value
    if (textArea.trim().length === 0) {
        alert("El texto está vacío. Por favor, ingrese un texto encriptado.");
        return;
    }
    if (textArea !== textArea.toLowerCase()) {
        alert("El texto encriptado debe estar en minúsculas.");
        return;
    }
    if (!/^[a-z ]+$/.test(textArea)) {
        alert("El texto debe contener solo letras minúsculas sin acentos ni símbolos.");
        return;
    }

    const copy = document.getElementById("copy")
    let textFinal = ''
    for (let i = 0; i < textArea.length; i++) {
        const caracter = textArea[i];

        switch (caracter) {
            case 'a':
                textFinal += 'ai';
                break;
            case 'e':
                textFinal += 'enter';
                break;
            case 'i':
                textFinal += 'imes';
                break;
            case 'o':
                textFinal += 'ober';
                break;
            case 'u':
                textFinal += 'ufat';
                break;
            default:
                textFinal += caracter;
        }
    }
    copy.innerHTML = textFinal;
    checkTextos();
}

function desencriptar() {
    const textoEncriptado = document.getElementById("texto").value;
    if (textoEncriptado.trim().length === 0) {
        alert("El texto está vacío. Por favor, ingrese un texto encriptado.");
        return;
    }
    if (textoEncriptado !== textoEncriptado.toLowerCase()) {
        alert("El texto encriptado debe estar en minúsculas.");
        return;
    }
    if (!/^[a-z ]+$/.test(textoEncriptado)) {
        alert("El texto encriptado debe contener solo letras minúsculas sin acentos ni símbolos.");
        return;
    }
    let textoDesencriptado = textoEncriptado
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById("copy").innerHTML = textoDesencriptado;
    checkTextos();
}

function checkTextos() {
    const textCopy = document.getElementById("copy");
    const elementos = document.getElementsByClassName("copyInfo")
    if (textCopy.innerHTML != '') {
        for (let elemento of elementos){
            elemento.style.display = 'none';
        }
        document.getElementById("copy").style.display = 'block';
    } 
}

document.addEventListener("DOMContentLoaded", function() {
    const copyText = document.getElementById("copy");
    if (copyText) {
        copyText.addEventListener("click", onCopy);
    }

    function onCopy() {
        const textCopy = document.getElementById("copy");
        if (textCopy.innerHTML != '') {
            navigator.clipboard.writeText(textCopy.innerHTML)
                .then(() => {
                    alert("Texto copiado al portapapeles.");
                })
                .catch(err => {
                    console.error("Error al copiar el texto al portapapeles: ", err);
                });
        }
    }
});