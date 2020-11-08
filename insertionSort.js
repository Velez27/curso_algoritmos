let array = [1, 2, 7, 5, 3, 10, -10, 0.10, 1000, 5, 10];
let valorActual = 0;
let auxWhile = 0
let aux = 0;

for(let i = 0; i < array.length; i++){
    valorActual = array[i];
    auxWhile = i - 1;

    while(auxWhile >= 0 && array[auxWhile] > valorActual){
        array[auxWhile + 1] = array[auxWhile];
        auxWhile = auxWhile - 1;
    }
    array[auxWhile + 1] = valorActual;
}

console.log(array);