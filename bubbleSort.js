let array = [1, 5, 4, 1, 7, 8, 10, 100, 201, 1, 450,100, 0.5, 0.10];
let aux = 0;

for(let i = 0; i < array.length; i++){
    console.log(array);
    for(let j = 0; j < array.length - 1; j++){
        if(array[j] > array[j + 1]){
            aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
        }
    }
}