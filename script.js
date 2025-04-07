// Función para validar el formulario de contacto
function validateContactForm(event) {
    // Prevenir el envío del formulario si no está bien validado
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
      alert("Todos los campos son obligatorios.");
      return false;
    }
  
    // Si todo está correcto, mostrar un mensaje de éxito
    alert("Formulario enviado correctamente.");
    return true;
  }
  
// Agregar un escuchador de evento para el botón "Iniciar sesión" en el Header
const headerLoginButton = document.getElementById('header-login-btn');
headerLoginButton.addEventListener('click', showLoginForm);
  
  // Función para mostrar más servicios al hacer clic en el botón "Ver más"
  function showMoreServices() {
    const moreServices = document.getElementById("more-services");
    moreServices.style.display = "block";
  }
  
  // Agregar un escuchador de evento para el formulario de contacto
  const contactForm = document.querySelector('form');
  contactForm.addEventListener('submit', validateContactForm);
  

// Agregar un escuchador de evento para el botón "Iniciar sesión" en el Home (Llamado a la acción)
const homeLoginButton = document.getElementById('login-btn');
homeLoginButton.addEventListener('click', showLoginForm);
  
  // Agregar un escuchador de evento para el botón "Ver más servicios"
  const viewMoreButton = document.getElementById('view-more-btn');
  viewMoreButton.addEventListener('click', showMoreServices);

  // Función para mostrar el formulario de inicio de sesión
function showLoginForm() {
    document.getElementById('login-form').style.display = 'flex';
  }
  
  // Función para ocultar el formulario de inicio de sesión
function hideLoginForm() {
    document.getElementById('login-form').style.display = 'none';
  }

  // Agregar un escuchador de evento para el botón "Aceptar" del formulario
const acceptButton = document.getElementById('accept-btn');
acceptButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario
  alert("Formulario enviado. Bienvenido!");
  hideLoginForm(); // Cerrar el formulario
});

// Agregar un escuchador de evento para el botón "Cancelar" del formulario
const cancelButton = document.getElementById('cancel-btn');
cancelButton.addEventListener('click', hideLoginForm);