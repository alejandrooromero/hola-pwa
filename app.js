// Clave donde se guardan los gastos
const CLAVE_GASTOS = 'gastos';

// Al iniciar la app, mostrar gastos guardados
document.addEventListener('DOMContentLoaded', mostrarGastos);

// Obtener gastos del almacenamiento
function obtenerGastos() {
  const datos = localStorage.getItem(CLAVE_GASTOS);
  return datos ? JSON.parse(datos) : [];
}

// Guardar gastos
function guardarGastos(gastos) {
  localStorage.setItem(CLAVE_GASTOS, JSON.stringify(gastos));
}

// Agregar un gasto
function agregarGasto() {
  const concepto = document.getElementById('concepto').value;
  const monto = document.getElementById('monto').value;

  if (!concepto || !monto) {
    alert('Completá concepto y monto');
    return;
  }

  const nuevoGasto = {
    concepto: concepto,
    monto: Number(monto),
    fecha: new Date().toLocaleDateString()
  };

  const gastos = obtenerGastos();
  gastos.push(nuevoGasto);
  guardarGastos(gastos);

  document.getElementById('concepto').value = '';
  document.getElementById('monto').value = '';

  mostrarGastos();
}

// Mostrar gastos en pantalla
function mostrarGastos() {
  const lista = document.getElementById('lista-gastos');
  lista.innerHTML = '';

  const gastos = obtenerGastos();

  gastos.forEach(gasto => {
    const li = document.createElement('li');
    li.textContent = `${gasto.fecha} - ${gasto.concepto}: $${gasto.monto}`;
    lista.appendChild(li);
  });
}
