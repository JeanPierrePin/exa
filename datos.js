document.querySelector('#boton').addEventListener('click', mostrardatos());
document.querySelector('#borrar').addEventListener('click', borrardatos);

function mostrardatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState  == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let cuerpo = document.querySelector('#cuerpo');
            cuerpo.innerHTML = '';
            for (let elementos of datos) {
                cuerpo.innerHTML += `
                <tr>
                <td>${elementos.id}</td>
                <td>${elementos.cedula}</td>
                <td>${elementos.nombre}</td>
                <td>${elementos.direccion}</td>
                <td>${elementos.telefono}</td>
                <td>${elementos.correo}</td>
               
                </tr>
                `

            }
        }
    }
}
function borrardatos(){
    window.location.href = 'index.html'
}