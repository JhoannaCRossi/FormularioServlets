function validarForma(forma){
    var usuario= forma.usuario;
    if(usuario.value == "" || usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false; //retornamos false para que no haga el envio sin datos
    }
    
    var password= forma.password;
    if(password.value == "" || password.value <3){
        alert("Debe proporcionar un password mayor de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
    
    var tecnologias= forma.tecnologia;
    var checkSeleccionado = false;
    
    for(var i = 0; i < tecnologias.length; i++){
        if(tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    
    if(!checkSeleccionado){
        alert("Sebe seleccionar una tecnología");
        return false;
    }
    
    var genero = forma.genero;
    var radioSeleccionado = false;
    
    for(var i = 0; i < genero.length; i++){
        if(genero[i].checked){
            radioSeleccionado = true;
        }
    }
    
    if(!radioSeleccionado){
        alert("Sebe seleccionar un genero");
        return false;
    }
    
    var ocupacion = forma.ocupacion;
    if(ocupacion.value == ""){
        alert("Debe seleccionar una ocupación");
        return false;
    }
    
    //si llega hasta este punto el formulario es valido
    alert("Formulario Válido, enviando datos hasta el servidor");
    return true;
}
    


