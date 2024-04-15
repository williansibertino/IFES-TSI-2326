/* De acordo com conteúdo apresentado, implemente o seguinte sistema:
Insira dois campos do tipo <input type=”text”> onde o usuário deverá
inserir duas notas e quando o usuário clicar em um botão de calcular
média, o sistema deverá imprimir o resultado em algum elemento
HTML. */

let calcularMedia = (nota1, nota2) => {
    // Seleciona os elementos do input e receber os valores digitados
    nota1 = parseFloat(document.querySelector('.nota1').value);
    nota2 = parseFloat(document.querySelector('.nota2').value);

    console.log(nota1);

    if(nota1 > 0 || nota2 > 0) {
        let media = (nota1 + nota2) / 2;
        //alert(`A media das duas notas sao: ${media}`);
        let resposta = document.querySelector('.resposta');
       //resultado = document.createTextNode(media);
        console.log(resposta)
        //resposta.appendChild(resultado);
        resposta.innerHTML = `Resultado: ${media}`;
    } else {
        alert('Voce precisa digitar pelo menos uma nota maior que zero.');
    }
}

let btnCalcular = document.getElementById('btn');
console.log(btnCalcular);
// adiciona o evento de onclick ao button
btnCalcular.addEventListener('click',calcularMedia);