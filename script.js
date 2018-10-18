//let menu = document.getElementsByClassName('menu');


function cambiador() {
    let originals = [];

    setInterval(
        () => {
            let imgs = document.querySelectorAll('img');

            for (let index = 0; index < imgs.length; index++) {
                if (originals.length < imgs.length) originals[index] = imgs[index].src;

                imgs[index].src = imgs[index].src.indexOf(originals[index]) >= 0 ? './imgs/joker.jpg' : originals[index];
            }
        }, 3000
    );
}

let getFormValues = () => {
    let form = document.getElementById('commentForm');

    let values = {};

    let inputs = form.querySelectorAll('input');

    for (let idx = 0; idx < inputs.length; idx++) {
        values[inputs[idx].name] = inputs[idx].value;
    }

    let textareas = form.querySelectorAll('textarea');
    for (let idx = 0; idx < textareas.length; idx++) {
        values[textareas[idx].name] = textareas[idx].value;
    }

    let buttons = form.querySelectorAll('button');
    for (let idx = 0; idx < buttons.length; idx++) {
        values[buttons[idx].value] = buttons[idx].value;
    }

    return values;
}

console.log(getFormValues());

let generateHTML = () => {
    let datosForm = getFormValues();

    document.getElementById('resultado').innerHTML = `
    <div class="verde">
        <h2>Valores</h2>
        <ul>
            <li>Nombre: ${datosForm.nombre}</li>
            <li>Email: ${datosForm.mail}</li>
            <li>Edad: ${datosForm.edad}</li>
            <li>Comentario:${datosForm.comentario}</li>
        </ul>
    </div>
    `;
}

document.getElementById('btnEnviar').onclick = (function (evnt) {
    evnt.preventDefault();
    generateHTML();
});
//////-----------------------------------------13/04/18

document.getElementById('nombre').onclick = (function (evnt) {
    evnt.preventDefault(); // 
    console.log('click en nombre', evnt);

});

/* bloqueamos el menu */
(function () {

    let menuc = document.querySelectorAll('header nav ul li');


    for (let idx = 0; idx < menuc.length; idx++) {
        menuc[idx].onclick = function (evnt) {
            evnt.preventDefault();
            console.log('click de menu', evnt)

        }

    }
})();



let menuc = document.querySelectorAll('header nav ul li');


for (let idx = 0; idx < menuc.length; idx++) {
    menuc[idx].addEventListener('click', function () { }, false);


}
(function () {
    document.getElementById('nombre').onkeydown = (function (k) {
        k.key;
        // 
        console.log('tocas=', k.key);
    });

     let palabra='';   
    document.getElementById('nombre').onkeydown = (function (ri) {
        console.log('tecla:', ri.keyCode);
        if ((ri.keyCode >= 65 && ri.keyCode <= 90) || ri.keyCode == 9 || ri.keyCode == 8) {
            /* palabra += ri.keyCode; */
            console.log(palabra);
                console.log(this.value + ri.keyCode)
        } else {
            ri.preventDefault();
        }


       


    });

})();

/* let cajacosas = [];
 document.getElementById('nombre').onkeydown = (function (ro){

 
for (let index = 0; index < cajacosas.length; index++) {
    cajacosas[index,'hola'];
    console.log(cajacosas);
}
 }

 */






/*     for (let index = 0; index < cajaNumeros.length; index++) {
        cajaNumeros[index].keycode;
        
    }
    document.getElementById('nombre').onkeydown = (function (r) {
    if (r=cajaNumeros) {

    }

});
 */
