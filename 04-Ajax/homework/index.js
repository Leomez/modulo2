let URL = "http://localhost:5000/amigos"


let traerAmigos = function () {
    $('#lista').empty();
    $.get(`${URL}`, function (amigos) {
        amigos.forEach(amigo => {
            $('#lista').append(`<li id='${amigo.id}'>${amigo.name}</li>`)
            // console.log(amigo.name);
        });
    })
};

let buscarAmigo = function () { 
    let id = $('#input').val();   
    // console.log(id);
    $.get(`${URL}/${id}`, function (amigo) {
        console.log(amigo.name);
        $('#amigo').html(`${amigo.name}`) 
        $('#input').val("");               
    })
}

let borrarAmigo = function() {
    let id = $('#inputDelete').val();
    console.log(id);
    let amigo;
    $.get(`${URL}/${id}`, function (data) {
         amigo = data;
    })
    $.ajax(`${URL}/${id}`, )
}

$('#boton').click(traerAmigos);
$('#search').click(buscarAmigo);
$('#delete').click(borrarAmigo);

