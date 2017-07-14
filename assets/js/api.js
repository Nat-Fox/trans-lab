$(document).ready(function() {
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=123456',
            type: 'GET',
            datatype: 'JSON',
        })
        .done(function(response) {
            console.log(':D');
            console.log(response);
        })
        .fail(function() {
            console.log('error')
        })
        .always(function() {
            console.log('complete')
        });
})