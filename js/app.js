let abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encriptarTexto() {
    let texto = document.getElementById('texto').value;
    let textoEncriptado = '';

    for (const element of texto) {
        let indice = abecedario.indexOf(element.toLowerCase());
        if (indice !== -1) {
            let nuevoIndice = (indice + 4) % abecedario.length;
            textoEncriptado += abecedario[nuevoIndice];
        } else {
            textoEncriptado += element; 
        }
    }
    
    let contenedor = document.getElementById('resultado');
    contenedor.innerHTML = '';  

    let textarea = document.createElement('textarea');
    textarea.className = 'encriptador__seccion__contenedor__dos__campo';
    textarea.value = textoEncriptado;
    textarea.readOnly = true;

    let btn_copy = document.createElement('button');
    btn_copy.className = 'btn_copy';
    btn_copy.innerHTML = 'Copiar';
    btn_copy.onclick = function () {
        navigator.clipboard.writeText(textoEncriptado).then(function () {
            alert('Texto copiado al portapapeles');
        }, function (err) {
            console.error('No se pudo copiar el texto: ', err);
        });
    }

    contenedor.appendChild(textarea);
    contenedor.appendChild(btn_copy);

    console.log(textoEncriptado);
}

function desencriptarTexto() {
    let texto = document.getElementById('texto').value;
    let textoDesencriptado = '';

    for (const element of texto) {
        let indice = abecedario.indexOf(element.toLowerCase());
        if (indice !== -1) {
            let nuevoIndice = (indice - 4 + abecedario.length) % abecedario.length;
            textoDesencriptado += abecedario[nuevoIndice];
        } else {
            textoDesencriptado += element; 
        }
    }

    let contenedor = document.getElementById('resultado');
    contenedor.innerHTML = '';  

    let textarea = document.createElement('textarea');
    textarea.className = 'encriptador__seccion__contenedor__dos__campo';
    textarea.value = textoDesencriptado;
    textarea.readOnly = true;

    let btn_copy = document.createElement('button');
    btn_copy.innerHTML = 'Copiar';
    btn_copy.onclick = function () {
        navigator.clipboard.writeText(textoEncriptado).then(function () {
            alert('Texto copiado al portapapeles');
        }, function (err) {
            console.error('No se pudo copiar el texto: ', err);
        });
    }

    contenedor.appendChild(textarea);
    contenedor.appendChild(btn_copy);


    console.log(textoDesencriptado);
    return textoDesencriptado;
}


