function validacion(){
  var nombre, telefono, mail, mensaje, expresion;
  nombre = document.getElementById("nombre").value;
  telefono =document.getElementById("telefono").value;
  mail =document.getElementById("mail").value;
  mensaje =document.getElementById("mensaje").value;
  expresion = /\w+@\w+\.+[a-z]/;

  console.log("hola");


 
  if(nombre === "" || nombre === null || mail === '' ||  mail === null || telefono === '' || telefono === null || mensaje === ''  || mensaje === null){
   alert('Todos los campos son obligatorios');
     return false;

  }

 else  if (nombre.length>50){
    alert('El nombre es muy largo');
    return false;
  }

  else if (!expresion.test(mail)){
    alert('Ingresa un correo válido')
    return false
  }
  
 else if (mensaje.length>300){
    alert('El mensaje es muy largo');
    return false;
  }

else if(isNaN(telefono)){
  alert('Ingresa un número válido')
  return false
}
}