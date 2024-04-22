let mediaAritmetica = (nota1, nota2, nota3) => {
    nota1  = parseFloat(document.getElementById('nota1').value);
    nota2  = parseFloat(document.getElementById('nota2').value);
    nota3  = parseFloat(document.getElementById('nota3').value);
    
    let media = (nota1 + nota2 + nota3) / 3

    let texto = document.querySelector('.resultado');
    texto.innerHTML = `M. Aritmética: ${media}`;
    texto.classList.add('resultado');
    console.log(texto);
}

let mediaPonderada = (nota1, nota2, nota3) => {
    nota1  = parseFloat(document.getElementById('nota1').value);
    nota2  = parseFloat(document.getElementById('nota2').value);
    nota3  = parseFloat(document.getElementById('nota3').value);
    
    let media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;

    let texto = document.querySelector('.resultado');
    texto.innerHTML = `M. Ponderada: ${media}`;
    texto.classList.add('resultado');
    console.log(texto);
}

let mediaHarmonica = (nota1, nota2, nota3) => {
    nota1  = parseFloat(document.getElementById('nota1').value);
    nota2  = parseFloat(document.getElementById('nota2').value);
    nota3  = parseFloat(document.getElementById('nota3').value);
    
    let media = 3 / (1/nota1 + 1/nota2 + 1/nota3);

    let texto = document.querySelector('.resultado');
    texto.innerHTML = `M. Harmonica: ${media}`;
    texto.classList.add('resultado');
    console.log(texto);
}

let aritmetica = window.document.getElementById('aritmetica');
aritmetica.addEventListener('click', mediaAritmetica);
console.log(aritmetica);

let ponderada = window.document.getElementById('ponderada');
ponderada.addEventListener('click', mediaPonderada);
console.log(ponderada);

let harmonica = window.document.querySelector('#harmonica');
harmonica.addEventListener('click', mediaHarmonica);
console.log(harmonica);