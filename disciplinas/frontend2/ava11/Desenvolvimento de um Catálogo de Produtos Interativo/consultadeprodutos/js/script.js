let produtos = [
    {
        nome : 'Camisa Azul',
        descricao : 'Material de tecido xadrez',
        preco : 23.56,
        horario : 'Criado em 10/04/2024 as 22h32',
        quantidade: 0
    },
    {
        nome : 'Camisa Verde',
        descricao : 'Material de cetim',
        preco : 78.90,
        horario : 'Criado em 10/04/1768 as 10h32',
        quantidade: 0
    }
]


// receber o evento do botao submit
const formulario = document.getElementById('formulario');
// funcao com callback function
formulario.addEventListener('submit', function(evento) {
    // Definimos o evento para a funcao
    evento.preventDefault();
    console.log(evento);

    // ao receber o elemento, ele procura o evento target e repassa os dados com o elements
    console.log(evento.target.elements[0].value);
    console.log(evento.target.elements[1].value);
    console.log(evento.target.elements[2].value);

    // Cria um objeto data e formata um variavel com a data do dia atual
    const data = new Date();
    const horario = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()} as ${data.getHours()}h${data.getMinutes()}`;
    console.log(horario);

    // Recebe os dados do imput e armazena na variavel
    const nome = evento.target.elements[0].value;
    const descricao = evento.target.elements[1].value;
    const preco = evento.target.elements[2].value;

    const produto = {nome, descricao, preco, horario};

    //Atualiza as variaveis na funcao cadastrarProdutos
    //cadastrarProduto(nome, descricao, preco, horario);
    cadastrarProduto(produto);
    //zera os elementos depois de criados.
    evento.target.elements[0,1,2].value = "";

    //produtos.push(produto);
    produtos = [...produtos, produto];
    console.log(produtos);
});

// Cadastrar produto e criar o html com template string
let cadastrarProduto = (produto) => {
    const res = document.getElementById('cadastros');
    res.innerHTML += `<div class="produtos">${produto.nome} - ${produto.descricao} - R$ ${produto.preco},00<br><span class='data'>Criado em ${produto.horario}</span></div><input type='number'>`
};