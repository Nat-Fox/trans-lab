/* Holiii acá va tu código también :D*/
$(document).ready(function() {
    // Para el funcionamiento del sideNav
    $('.button-collapse').sideNav();
    // Para el funcionamiento del select
    $('select').material_select();

});

// FALTA REMOVER LOS MENSAJES DE ERROR


//función para validar el correo
function validarCorreo(correo) {
    var expRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!expRegCorreo.test(correo)) {
        return true;
    }
}

//función que valida la contraseña
function password(pass) {
    var largoPass = pass.length;
    if (largoPass < 9) {
        return true;
    }
}

//función que si tiene numeros da true
function contenidoAlfa(data) {
    var expReg = /^[a-zA-Z ]+$/;
    if (!expReg.test(data)) {
        return true;
    }
}

$('#btn-ini').on('click', function() {

    // Valores ingresados por el usuario
    var correo = $('#input-email').val();
    console.log('correo', correo);
    var pass = $('#pass').val();
    // Validaciones para el correo
    if (correo !== '') {
        if (validarCorreo(correo)) {
            $('#error-correo').parent().append('<div>Ingresa un correo valido. Ejem: name@domain.com</div>');
        }
    } else {
        $('#error-correo').parent().append('<div>Debes ingresar tu correo</div>');
    }


    // Validaciones para la contraseña
    if (pass !== '') {
        if (password(pass)) {
            $('#error-clave').parent().append('<div>Debes ingresar una contraseña más segura.</div>');
        }
        if (!contenidoAlfa(pass)) {
            $('#error-clave').parent().append('<div>Solo se permiten números.</div>');
        }
    } else {
        $('#error-clave').parent().append('<div>Debes ingresar tu contraseña</div>');
    }

    // Si todo esta correcto se limpia el formulario
    if (contenidoAlfa(pass) && !validarCorreo(correo)) {
        console.log('correcto');
        // Se guarda el correo en local storage
        localStorage.correo = correo;
        $(location).attr('href', 'menu.html');
    }

})


//var email = document.getElementById('input-email').value;


$('#btn-perfil').on('click', function() {
    console.log('click');
    console.log(localStorage.correo);
    $('#correo-ingresado').append(`<a class="btn btn-ini btn-mail" id="correo-ingresado">${localStorage.correo}</a`);
    //$(location).attr('href', 'perfil.html');


});

// var element = document.querySelector(".btn-perfil");
// element.addEventListener('submit', function() {
//     console.log(click);
// });
// $('#btn-perfil').on('click', function() {

//         // var correoIngresado = $('#input-email').val();
//         // console.log('correo', correoIngresado);
//         // $('#correo-ingresado').append(`<a class="btn btn-ini btn-mail" id="correo-ingresado">${correo}</a`);
// });