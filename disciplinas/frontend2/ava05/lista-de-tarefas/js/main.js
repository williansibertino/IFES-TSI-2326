// Pegar o valor do campo de entrada.
// Criar um novo elemento de lista (<li>) com o valor da tarefa.
// </li> Adicionar a nova tarefa à área de exibição da lista.


// Função 1 : Criar os elementos e escreve eles no html
let cadastrarNovaTarefa = (nomeTarefa) => {
    // recebe o valor do input e salva na variável criada no parâmetro da função
    nomeTarefa = window.document.getElementById('nomeNovaTarefa').value;
    console.log(nomeTarefa);

    // cria um raiz de elementos começando pelo elemento pai li {div {input, p}, button } 
    let lista = window.document.createElement('li');
    let tag = window.document.createElement('div')
    let descricao = window.document.createElement('p');
    let btn1 = document.createElement('input');
    let btn2 = document.createElement('button');

    // Cria um novo texto com o parâmetro da função e adiciona esse parâmetro como filho na tag p criada
    let textoDescricao = document.createTextNode(nomeTarefa);
    descricao.appendChild(textoDescricao);
    let textoBtn2 = window.document.createTextNode('X');
    btn2.appendChild(textoBtn2);

    // Adiciona elementos dentro do elemento pai pela função append que pode receber mais de um parâmetro, diferente do appendChild
    tag.append(btn1, descricao);
    lista.append(tag, btn2);
    console.log(lista);

    // Configuração para adicionar classes CSS para as tags criadas
    lista.classList.add('tarefa');
    descricao.classList.add('descricao');
    btn1.classList.add('btnConcluir');
    btn2.classList.add('btnApagar');

    // Configuração para adicionar atributos nos elementos criados
    btn1.setAttribute('type','checkbox');
    btn2.setAttribute('type','button');
    btn1.setAttribute('name','btnConcluir')

    // Através do querySelector, ele busca o elemento identificado e adiciona como filho a variável lista criada
    document.querySelector('ul.listaDeTarefas').appendChild(lista);

    // Adiciona o evento de conclusão à nova tarefa criada
    btn1.addEventListener('click', concluirTarefaCriada);

    // // Adiciona o evento de apagar a tarefa criada
    btn2.addEventListener('click', removerTarefaCriada);

}

// Função 2 : Cria um evento que verifica o status do checkbox e muda a classe do texto
let concluirTarefaCriada = (evento) => {
    const checkbox = evento.target;
    const descricao = checkbox.parentNode.querySelector('.descricao');
    descricao.classList.toggle('descricaoActive');
};

// Função 3 : Utiliza o evento do botao para procurar o primeiro elemento pai li do botao para entao remover do html
let removerTarefaCriada = (event) => {
    //lista = document.querySelector('.tarefa');
    //lista.parentNode.removeChild(lista);
    let button = event.target;
    let li = button.closest('li');
    li.parentNode.removeChild(li);
    console.log('Tarefa apagada');
}



// Cria um objeto (btn) // E Adiciona um evento (click) a este objeto
let btnAdicionarNovaTarefa = window.document.getElementById('btnNovaTarefa');
btnAdicionarNovaTarefa.addEventListener('click', cadastrarNovaTarefa);

// Cria um vetor de objetos e através do foreach percorre essa lista adicionando um evento de concluir a tarefa
let concluir = document.querySelectorAll('.btnConcluir');
concluir.forEach((checkbox) => {
    checkbox.addEventListener('click', concluirTarefaCriada);
});

// Cria um vetor de objetos e através do foreach percorre essa lista adicionando um evento de apagar o elemento li no botao
let apagar = document.querySelectorAll('.btnApagar');
apagar.forEach((button) => {
    button.addEventListener('click', removerTarefaCriada);
});

