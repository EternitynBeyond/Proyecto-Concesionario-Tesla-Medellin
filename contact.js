


function validateForm() {
    const name = document.getElementById("name").value;
    const last_name = document.getElementById("last_name").value;
    const phone_number = document.getElementById("phone_number").value;
    const email_address = document.getElementById("email_address").value;
  
    const namePattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
    const phoneNumberPattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!namePattern.test(name)) {
      alert("El nombre debe contener solo letras (alfabético).");
      return false;
    }
  
    if (!namePattern.test(last_name)) {
      alert("El apellido debe contener solo letras (alfabético).");
      return false;
    }
  
    if (!phoneNumberPattern.test(phone_number)) {
      alert("El teléfono debe contener 10 dígitos.");
      return false;
    }
  
    if (!emailPattern.test(email_address)) {
      alert("El correo electrónico no es válido.");
      return false;
    }
  
    return true;
  }