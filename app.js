function mostrarVista(id) {
  // Ocultar todas las vistas
  const vistas = document.querySelectorAll('.vista');
  vistas.forEach(vista => {
    vista.style.display = 'none';
  });

  // Mostrar la vista seleccionada
  document.getElementById(id).style.display = 'block';
}

// Mostrar una vista por defecto al iniciar
document.addEventListener('DOMContentLoaded', () => {
  mostrarVista('stock');
});
