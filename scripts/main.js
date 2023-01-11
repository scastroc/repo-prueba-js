var miTitulo = document.querySelector('h2');
miTitulo.innerHTML = '¡Hola Mundo!';



function miFunc() {
    alert('Mi primera funcion con JS!!!')
}


const selectElement = document.querySelector('.nieve');

selectElement.addEventListener('change', (event) => {
    const resultado = document.querySelector('.resultado');
    resultado.textContent = `Te gusta el sabor ${event.target.value}`;
});

