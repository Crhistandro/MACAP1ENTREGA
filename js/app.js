document.addEventListener('DOMContentLoaded', function(){
    const botAmbur = document.querySelector('.boton-ambur');
    const todo = document.querySelector('.todo');
    const menuItems = document.querySelectorAll('.menu-items');
    const submenuItems = document.querySelectorAll('.submenu-items');

// Función para colapsar/expandir la barra lateral
botAmbur.addEventListener('click', () => {
    todo.classList.toggle('collapsed');
});

  // Función para mostrar/ocultar submenús
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle active class
        item.classList.toggle('active');
        
        // Encontrar el submenu siguiente
        const submenu = item.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.classList.toggle('active');
        }
    });
});


    // Función para mostrar contenido
    submenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const sectionId = item.getAttribute('data-section');
            
            // Ocultar todas las secciones
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostrar la sección seleccionada
            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.classList.add('active');
            }
        });
    });
});
