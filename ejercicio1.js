let AgregarALista = function(){
    const lista=document.getElementById("miLista")
    const input =document.getElementById("miInput")
    let valor = input.value;
    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = valor;
    lista.appendChild(nuevoItem);


}


let OcultarMenu = function(){
    display: none;


}