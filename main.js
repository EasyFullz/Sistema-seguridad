// Selecciona todos los enlaces con la clase 'link'
const links = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.sections');

// Función para manejar el clic en los enlaces
links.forEach(link => {
  link.addEventListener('click', () => {
    
    // Remueve la clase 'active' de todos los enlaces
    links.forEach(link => link.classList.remove('nav__link--active'));

    // Añade la clase 'active' al enlace clicado
    link.classList.add('nav__link--active');
  });
});

