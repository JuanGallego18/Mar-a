function cambiarPagina() {
    // Ocultamos la primera página
    document.getElementById('pagina1').style.display = 'none';
    // Mostramos la segunda página
    document.getElementById('pagina2').style.display = 'block';
}

function volver() {
    // Ocultamos la segunda página
    document.getElementById('pagina2').style.display = 'none';
    // Mostramos la primera página
    document.getElementById('pagina1').style.display = 'block';
}
