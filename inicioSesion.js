document.getElementById('loginFormulario').addEventListener('submit',function(e){
    e.preventDefault();

    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;

    if(usuario === 'Usuario1' && password === 'Contraseña1'){
        localStorage.setItem('logCorrecto', true);

        window.location.href = 'index.html';
    }
    else{
        document.getElementById('mensajeLogin').innerText = 'Los datos ingresados no son válidos.'
    }
})

window.addEventListener('load', function(){
    if(localStorage.getItem('logCorrecto')) {
        window.location.href = 'index.html';
    }
})