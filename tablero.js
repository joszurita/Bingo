var contenedores= document.getElementById("contenedor");

var tablero = [];
var numerosJugados=[]
var valor = 1;
dibujar();
document.getElementById("botonJugar")
    .addEventListener("click", function() {
jugar();
dibujar()
    });

function dibujar(){
    tablero = [];
    for (var i = 1; i < 91; i++) {
        tablero.push(i);
        var celda= document.createElement('div');
      //  console.log(numTablero);
       // console.log(nJugados);
        celda.className = 'celdas';
        celda.id =i;
        for (var k = 0; k < numerosJugados.length; k++) {
            if (numerosJugados[k] === celda.id) {
                console.log("encontrado " + celda.id+ "  y " + numerosJugados[k])
            }else{
            console.log("dibujado");
            
            }

        }
        celda.appendChild(document.createTextNode(i));
        contenedores.appendChild(celda);
        //celda.style.backgroundColor = "#465881";
        
    }
}

function jugar(){
    contenedores.innerHTML = "";
    var numero=generarNumero(1, 90);
    if ((numerosJugados.includes(numero)|| numerosJugados === [])&& numerosJugados.length < 90 ) {
        jugar();
    } else if(numerosJugados.length < 90){
        numerosJugados.push(numero);
        console.log(numerosJugados[numerosJugados.length - 1]);
        pintar();
    }else{
        alert("Todos los numeros se han jugado");
    }
}
function generarNumero(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function pintar(){
    if(numerosJugados == numerosJugados.length-1){
        numerosJugados.style.backgroundColor = "#465881"
    }
}
