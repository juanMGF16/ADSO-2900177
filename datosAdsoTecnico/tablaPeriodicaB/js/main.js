const infoModales = dataTable;

// elementos de DOM
let elementosInfo = document.querySelectorAll('.elemento');

// DOM modal
let modal = document.querySelector('.informacionModal');
let botonT = document.querySelector('#activar');
let title = document.getElementById('titleElement');


elementosInfo.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
        let dataElemento = event.currentTarget.getAttribute("data-id-elemento");
        modal.innerHTML = infoModales[dataElemento].descripcion;

        let titleModal = `${infoModales[dataElemento].nombreElement} (${infoModales[dataElemento].simbolo})`
        title.innerHTML = titleModal;
        botonT.click();
    });
});