//Criando os nós individuais
class No{
    constructor(valor){
      this.valor = valor;
      this.anterior = null;
    }
  }
  
  //Definição da nossa pilha
  class Pilha{
    constructor(){
      this.topo = null;
      this.tamanho = 0;
    }
  
    //criando a função empilhar
    empilhar(valor){
      let novoNo = new No(valor);
      novoNo.anterior = this.topo;
      this.topo = novoNo;
      this.tamanho++;
    }
  
    //criando a função desempilhar
    desempilhar(){
      if(this.tamanho === 0){
        return null;
      }
      let valorDesempilhado = this.topo.valor;
      this.topo = this.topo.anterior;
      this.tamanho--;
      return valorDesempilhado;
    }
  
    //Criando a função que mostra o topo
    topoDaPilha(){
      if(this.tamanho === 0){
        return null;
      }
      return this.topo.valor;
    }
  
    //Função que verifica se a pilha está vazia
    estaVazia(){
      return this.tamanho === 0;
    }
    //Função que retorna o tamanho da pilha
    tamanhoDaPilha(){
      return this.tamanho;
    }
  }
  
  var pilha01 = new Pilha();
  pilha01.empilhar("Lusíadas");
  pilha01.empilhar("Harry Potter");
  pilha01.empilhar("O senhor dos anéis");
  pilha01.empilhar("Como fazer amigos e influenciar pessoas");//topo atual
  console.log(pilha01.topoDaPilha());
  console.log(pilha01.desempilhar());
  console.log(pilha01.topoDaPilha());
  console.log(pilha01.estaVazia());
  console.log(pilha01.tamanhoDaPilha());
  