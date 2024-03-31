# Bibliotecas de Comandos
## Utilizados nas funções

1. **createElement**:
   - `document.createElement('tagName')` é um método DOM que cria um novo elemento HTML com a tag especificada. Por exemplo, `document.createElement('div')` cria um novo elemento `<div>`.
   
2. **append** e **appendChild**:
   - `append` e `appendChild` são métodos que adicionam um ou mais nós ao final de uma lista de nós filho de um nó pai específico no DOM. A diferença principal é que `append` aceita múltiplos argumentos (ou elementos) para serem adicionados, enquanto `appendChild` aceita apenas um nó filho para ser adicionado.
   
3. **classList**:
   - `classList` é uma propriedade de um elemento DOM que fornece acesso a uma lista de classes CSS associadas ao elemento. Você pode adicionar, remover ou verificar a presença de classes usando métodos como `add`, `remove`, `toggle`, e `contains`.
   
4. **setAttribute**:
   - `setAttribute` é um método que permite definir um novo atributo em um elemento HTML ou atualizar o valor de um atributo existente. Por exemplo, `element.setAttribute('name', 'value')` define um atributo chamado "name" com o valor "value" para o elemento especificado.
   
5. **querySelector e querySelectorAll**:
   - `querySelector` e `querySelectorAll` são métodos que permitem selecionar elementos do DOM com base em um seletor CSS. `querySelector` retorna o primeiro elemento correspondente ao seletor especificado, enquanto `querySelectorAll` retorna todos os elementos correspondentes em um NodeList.
   
6. **evento.target**:
   - `event.target` é uma propriedade de um objeto de evento que retorna o elemento DOM que desencadeou o evento. Isso é útil para identificar qual elemento foi afetado por um evento, como um clique de mouse ou uma mudança de valor de entrada.
   
7. **parentNode**:
   - `parentNode` é uma propriedade de um nó DOM que retorna o nó pai do nó atual no DOM.
   
8. **removeChild**:
   - `removeChild` é um método que remove um nó filho de um nó pai no DOM. É comumente usado para remover elementos do DOM.
   
9. **forEach**:
   - `forEach` é um método que executa uma função para cada elemento em um array. Ele permite iterar sobre os elementos de um array e executar uma ação específica em cada um deles.
   
10. **closest**:
    - `closest` é um método que percorre a árvore DOM começando pelo próprio elemento e indo para cima pelos pais até encontrar o primeiro ancestral que corresponda a um seletor especificado. Ele retorna o elemento mais próximo que corresponde ao seletor especificado.

11. **toggle**:
    - `toggle` é um método da propriedade `classList` de um elemento DOM. Ele alterna a presença de uma classe em um elemento. Se a classe estiver presente, ela será removida; se estiver ausente, ela será adicionada.
    - Isso é útil para alternar entre dois estados de estilo ou comportamento em resposta a um evento, como um clique de botão.
    - Por exemplo, `element.classList.toggle('classeAtiva')` adicionará a classe 'classeAtiva' se não estiver presente e a removerá se estiver presente. Isso pode ser usado para alternar a visibilidade de um elemento ou alterar seu estilo com base em um evento.