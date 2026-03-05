function obtenerNumeros() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    return [n1, n2];
}

function mostrarResultado(valor) {
    document.getElementById("resultado").textContent = valor;
}

function sumar() {
    let [n1, n2] = obtenerNumeros();
    mostrarResultado(n1 + n2);
}

function restar() {
    let [n1, n2] = obtenerNumeros();
    mostrarResultado(n1 - n2);
}

function multiplicar() {
    let [n1, n2] = obtenerNumeros();
    mostrarResultado(n1 * n2);
}

function dividir() {
    let [n1, n2] = obtenerNumeros();
    if (n2 === 0) {
        mostrarResultado("No se puede dividir por 0");
    } else {
        mostrarResultado(n1 / n2);
    }
}

function porcentaje() {
    let [n1, n2] = obtenerNumeros();
    mostrarResultado((n1 * n2) / 100);
}




// ===== CRUD DE DOCENTE =====

let docentes = [];

function agregarDocente() {

    let docente = {
        tipoDoc: document.getElementById("tipoDoc").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        fecha: document.getElementById("fecha").value,
        nivel: document.getElementById("nivel").value,
        area: document.getElementById("area").value,
        grado: document.getElementById("grado").value,
        eps: document.getElementById("eps").value,
        salario: document.getElementById("salario").value
    };

    docentes.push(docente);
    mostrarDocentes();
    limpiarFormulario();
}

function mostrarDocentes() {

    let tabla = document.getElementById("tablaDocentes");
    tabla.innerHTML = "";

    docentes.forEach((docente, index) => {

tabla.innerHTML += `
<tr>
    <td>${docente.tipoDoc}</td>
    <td>${docente.nombre}</td>
    <td>${docente.apellido}</td>
    <td>${docente.nivel}</td>
    <td>${docente.area}</td>
    <td>${docente.salario}</td>
    <td>
        <button onclick="eliminarDocente(${index})">Eliminar</button>
    </td>
</tr>
`;
    });
}

function eliminarDocente(index) {
    docentes.splice(index, 1);
    mostrarDocentes();
}

function limpiarFormulario() {
    document.getElementById("tipoDoc").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("nivel").value = "";
    document.getElementById("area").value = "";
    document.getElementById("grado").value = "";
    document.getElementById("eps").value = "";
    document.getElementById("salario").value = "";
}