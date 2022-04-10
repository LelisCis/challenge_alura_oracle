var ingreso_correcto = true;
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var mail = document.form1.mail.value;
var numeros = /^[0-9]+$/;
var tel = document.form1.telefono.value;

function validacion() {


  if (nombre.length === " ") {
    ingreso_correcto= false;
 
  }
    
  if (mail.value === " ") {
    ingreso_correcto= false;
    
  }

  if (!expresion.test(mail)){
    ingreso_correcto = false;
}

  if (telefono.value === " " ) {
    
     ingreso_correcto = false;
  
  }
  if (!numeros.test(telefono)){
    ingreso_correcto = false;
}
  

  if (mensaje.value === " ") {
    ingreso_correcto= false;

  }
}









