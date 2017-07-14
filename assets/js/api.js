$(document).ready(function() {

    // Para el funcionamiento del sideNav
    $('.button-collapse').sideNav();

    // Si no hay cards se crea un arreglo de tipo string para el localstorage    
    if (!localStorage.cards) {
        localStorage.cards = '[]';
    } else {
        var cards = JSON.parse(localStorage.cards);
        cards.forEach(function(element) {
            $('#number-bip').append(`<a class="btn btn-bip-number">${element}</a>`);
        });
    }

    // Evento para obtener el valor del numero de tarjeta agregado
    $('#btn-agregar').on('click', function() {
        var valueTar = $('.input-perfil').val();

        $.ajax({
                url: `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${valueTar}`,
                type: 'GET',
                datatype: 'JSON',
            })
            .done(function(response) {
                console.log(':D');
                console.log(response);
                // En caso de que sea un número válido lo apendo
                $('#number-bip').append(`<a class="btn btn-bip-number">${response.id}</a>`);
                // Guardo en local storage las card -> string
                localStorage.numValido = response.id;
                // de string a arr
                var cards = JSON.parse(localStorage.cards);
                // agrego el numero de bip al arreglo de cards
                cards.push(response.id);
                // de arreglo a string
                localStorage.cards = JSON.stringify(cards);

                // Llenar el select de saldo.html
                // cards.forEach(function(num) {
                //     //console.log('NUM', num);
                //     var option = 1;
                //     $('#select-option').append(`
                //         <select>
                //             <option value="" disabled selected>Choose your option</option>
                //             <option value="${option}">${num}</option>                 
                //         </select>
                //     `);
                //     option++;
                // })

            })
            .fail(function() {
                alert('La tarjeta ingresada no es válida');
            })
            .always(function() {
                console.log('complete')
            });
    })

    // Evento para el boton de saldo que comprueba si el número es válido
    $('#btn-saldo').on('click', function() {
        var numTarjetaSaldo = $('.input-number-saldo').val();
        //console.log('valor de tarjeta apra el saldo', numTarjetaSaldo);
        // Segunda llamada a la API para confirmar que la tarjeta por la que se consulta el saldo es válida 
        $.ajax({
                url: `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numTarjetaSaldo}`,
                type: 'GET',
                datatype: 'JSON',
            })
            .done(function(responseTwo) {
                console.log('response', responseTwo);
                $('#number-bip-for-saldo').append(` 
                    <div class="container container-saldo">
                        <div class="row center">
                            <div class="col s12">
                                <div class="card" id="container-saldo">
                                    <div class="card-content title-card-saldo">
                                        <span class="card-title">SALDO TOTAL</span>
                                    </div>
                                    <div class="card-content title-info-saldo">
                                        <span class="card-title">${responseTwo.saldoTarjeta}</span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>`);
                var saldoObtenido = responseTwo.saldoTarjeta;
                // Saldo de la tarjeta
                console.log('SALDO', saldoObtenido);
            })
            .fail(function() {
                alert('La tarjeta ingresada no es válida');
            })
            .always(function() {
                console.log('complete')
            });
    })


    // Evento para realizar el calculo de costo del viaje mas saldo restante
    $('#btn-calcular').on('click', function() {
        console.log('click calcular');
        var texto = document.getElementById('selectid').options[document.getElementById('selectid').selectedIndex].text;
        console.log(texto)

        if (texto === 'Horario Alto') {
            $('#number-bip-for-horario').append(
                `<div class="container container-horario">
                    <div class="row center">
                        <div class="col s12">
                            <div class="card" id="container-horario">
                                <div class="card-content title-card-horario">
                                    <span class="card-title">SALDO TOTAL</span>
                                </div>
                                <div class="card-content title-info-horario">
                                    <span class="card-title">$740</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            )
        } else if (texto === 'Horario Medio') {
            $('#number-bip-for-horario').append(
                `<div class="container container-horario">
                    <div class="row center">
                        <div class="col s12">
                            <div class="card" id="container-horario">
                                <div class="card-content title-card-horario">
                                    <span class="card-title">SALDO TOTAL</span>
                                </div>
                                <div class="card-content title-info-horario">
                                    <span class="card-title">$680</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            )
        } else if (texto === 'Horario Bajo') {
            $('#number-bip-for-horario').append(
                `<div class="container container-horario">
                    <div class="row center">
                        <div class="col s12">
                            <div class="card" id="container-horario">
                                <div class="card-content title-card-horario">
                                    <span class="card-title">SALDO TOTAL</span>
                                </div>
                                <div class="card-content title-info-horario">
                                    <span class="card-title">$640</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            )
        }
    });

})