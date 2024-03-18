var vetor = [11, 12, 34 ,123, 23, 18, 4, 5, 6, 56];

function bubbleSort(vetor) {
    var i, j, aux;
    for(i = 0; i < vetor.lenght - 1; i++){
        for(j = 0; j < vetor.lenght - 1; j++) {
            if(vetor[j] > vetor[j+1]){
                aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
            }
        }
    }
}

bubbleSort(vetor);
console.log(vetor);