var expr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

$(document).ready(()=>{
    $("#enviar").click(()=>{
        var nombre = $(".nombre").val();
        var apellido = $(".apellido").val();
        var contraseña = $(".contraseña").val();
        var email = $(".email").val();
        var telefono = $(".telefono").val();
        var mensaje = $(".mensaje").val();

        if (nombre ==""){
            $("#error1").fadeIn();
            return false;
        }else{
            $("#error1").fadeOut();
        }

        if(apellido ==""){
            $("#error2").fadeIn();
            return false;
        }else{
            $("#error2").fadeOut();
        }

        if(contraseña ==""){
            $("#error3").fadeIn();
            return false;
        }else{
            $("#error3").fadeOut();
        }

        if(email =="" || !expr.test(email)){
            $("#error4").fadeIn();
            return false;
        }else{
            $("#error4").fadeOut();
        }

        if(telefono ==""){
            $("#error5").fadeIn();
            return false;
        }else{
            $("#error5").fadeOut();
        }

        if(mensaje ==""){
            $("#error6").fadeIn();
            return false;
        }else{
            $("#error6").fadeOut();
        }
        
    })

})

