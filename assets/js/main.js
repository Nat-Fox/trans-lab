/* Holiii acá va tu código también :D*/
$(document).ready(function() {
    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();



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

var btnRegis = $('#btn-ini').on('click', function() {
    // Valores ingresados por el usuario
    var correo = $('#input-email').val();
    var pass = $('#pass').val();
    // Validaciones para el correo
    if (correo !== '') {
        if (validarCorreo(correo)) {
            $('#input-email').parent().append('<span>Ingresa un correo valido. Ejem: name@domain.com</span>');
        }
    } else {
        $('#input-email').parent().append('<span>Debes ingresar tu correo</span>');
    }


    // Validaciones para la contraseña
    if (pass !== '') {
        if (password(pass)) {
            $('#pass').parent().append('<span>Debes ingresar una contraseña más segura.</span>');
        }
        if (!contenidoAlfa(pass)) {
            $('#pass').parent().append('<span>Solo se permiten números.</span>');
        }
    } else {
        $('#pass').parent().append('<span>Debes ingresar tu contraseña</span>');
    }

    // Si todo esta correcto se limpia el formulario
    if (contenidoAlfa(pass) && !validarCorreo(correo)) {
        console.log('correcto');
        $(location).attr('href', 'menu.html')
    }

})