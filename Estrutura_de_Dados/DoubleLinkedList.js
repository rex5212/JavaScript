// Classe ListaDuplamenteEncadeada
function DoubledLinkedList() {
    // algumas variáveis globais da classe DoubledLinkedList
    let length = 0;  // para contar a quantidade de elementos (nós) da lista duplamente ligada
    let head = null; // para identificar o primeiro nó
    let tail = null; // para identificar o último nó

    // classe interna (espécie de método construtor)
    let Node = function(element) {
        this.element = element; // valor do nó
        this.next = null; // ponteiro para o próximo nó
        this.prev = null; // ponteiro para o nó anterior
    }

    // agora iremos implementar os métodos da Lista Duplamente Ligada

    // vamos criar o método que insere elementos em uma determinada posição
    // da lista duplamente ligada, passando a posição (position) e o valor(element)
    this.insert = function(position, element){        
        if(position >= 0 && position <= length){
            let node = new Node(element),
                current = head,
                previous;
           // primeiro cenário, adiciona um elemento no início da lista (index=0)
           if (position === 0){ // insere no início?
               // se a lista estiver vazia, atribuímos o nó instanciado
               // na própria variável head (início) e na variável tail (final)
               if (!head){
                    head = node;
                    tail = node;
               } else {
                    node.next = current; // mesmo que head(início)
                    current.prev = node; // referência anterior ao node
                    head = node; // será o primeiro elemento
               }
           } else if (position === length) {  // insere no final?
                    // segundo cenário, adiciona elemento no final da lista
                    current = tail; //último elemento da lista ligada
                    current.next = node;
                    node.prev = current;
                    tail = node; //a cauda (final da lista) apontará para node
                  } else {
                    // iterando até encontrar a posição desejada para inserir
                    previous = this.getElementAt(position - 1);
                    current = previous.next;
                    node.next = current;
                    previous.next = node;
                    // agora (após inserir o node) corrigindo as ligações
                    current.prev = node;
                    node.prev = previous;
                  }
           // atualiza o tamanho da lista
           length++;
           return true;
        }
        return false;    
    };

    // método que recupera o elemento (node) de uma determinada posição
    this.getElementAt = function(position){
        if(position >= 0 && position <= this.size()){
            let node = head;
            // percorrendo a lista até encontrar o elemento da position
            for (let i = 0; (i < position) && (node != null); i++){
                node = node.next;
                //console.log('O elemento na posição: ' + i + ' é: ' + node.element);
            }
            // devolvo o elemento da posição encontrada
            //console.log('Elemento devolvido: ' + node.element);
            return node;
           
        }
        return null;
    };

    // agora vamos implementar um método para adicionar elementos na lista
    this.append = function(element){
        // cria um novo Node (nó da lista) passando element como argumento
        const node = new Node(element);
        // variável para guardar o endereço do elemento atual
        let current = null;
        //primeiro cenário, quando a lista ligada está vazia
        if (head === null){
            head = node;
            tail = node; // linha nova para estabelecer a dupla ligação
        }else {
            // segundo cenário, quando a lista ligada não estiver vazia
            current = head;
            // percorrendo a lista até chegar no valor atual (head)
            while (current.next){
                // obtém o último item
                current = current.next;
            }
            // e atribui um novo elemento a next para criar a ligação
            current.next = node;
            tail = node; // linha nova para estabelecer a dupla ligação
        }
        // e por fim, não esquecer de incrementar a variável length
        length++;  // no final nos dará o tamanho da lista
    };

    // método size retorna a quantidade (this.length)
    // de elementos da lista encadeada
    this.size = function(){
        return length;
    };

   // removendo um elemento(nó) da lista, passando sua posição (endereço)
   this.removeAt = function(position) {
    // verifica primeiro se a posição está no intervalo da lista
        if (position >= 0 && position <= length){
            let current = head,
                previous;
            // primeiro cenário: removendo o primeiro item
            if (position === 0){
                head = current.next;
                // se tiver apenas um item, atualizamos tail
                if (length === 1){
                    tail = null;
                } else{
                    head.prev = null;
                }
            } else if (position === length - 1) {
                // ultimo item
                // 2 - Remover do meio da lista
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                // iterando até encontrar a posição desejada
                previous = this.getElementAt(position - 1);      
                // 3 - remover o último elemento da lista
                current = previous.next;
                previous.next = current.next;
                current.next.prev = previous;
            }
            // já que eliminamos um nó, devemos atualizar o tamanho
            length--;
            return current.element;
        } else{
            return null;
        }
    };

    // para remover um elemento, de forma simples
    // basta encontrar sua posição e passar para o método anterior
    // removeAt que remove baseado na posição do elemento
    this.removeByValue = function(element) {
        // primeiro encontro o endereço do elemento
        let position = this.indexOf(element);
        // depois passo esse endereço como argumento para remover
        // o elemento da lista encadeada
        this.removeAt(position);
    };

    // método para retornar a posição de um elemento na lista
    this.indexOf = function(element){
        let current = head;
        let index = 0;
        // percorrendo a lista, incrementando a variável index
        while (current) {
            if (element === current.element) {
                // encontrando o elemento, retorna sua posição
                return index;
            }
            index++;
            // setando o elemento atual, com o próximo
            // para percorrer cada nó seguinte
            current = current.next;
        }
        return -1;
    };

    // verificar se a lista está vazia e retorna true
    // caso contrário returna false
    this.isEmpty = function(){
        return length === 0;
    };

    // retorna o elemento do final da lista encadeada
    // lembrando que seu próximo (next) está com null/undefined
    this.getHead = function(){
        return head;
    };

    // método para transformar a lista em um texto (String)
    // para mostrar o conteúdo na console
    this.toString = function() {
        let current = head;
        let string = '';
        // percorrendo os elementos da lista e concatenando e uma string
        while(current){
            string += current.element + (current.next ? ' -> ':' ');
            current = current.next;
        }
        //devolvendo a string com todos os elementos da lista
        // concatenados com uma setinha
        return string;
    };  
    // chamando o método conversor toString para mostrar na console
    this.print = function() {
        console.log(this.toString());
    }

};  

// testando o método insert e o método append
let listaDuplamenteEncadeada = new DoubledLinkedList();
// inserindo três elementos no final da lista
listaDuplamenteEncadeada.append('Erick');
listaDuplamenteEncadeada.append('Davi');
listaDuplamenteEncadeada.append('Giovanna');
// mostrando o conteúdo da lista duplamente encadeada
console.log('A lista duplamente ligada agora tem 3 pessoas: ' + listaDuplamenteEncadeada.toString());
 
listaDuplamenteEncadeada.insert(0, 'Carlos');
console.log('Inserindo Carlos na primeira (0) posição: ' + listaDuplamenteEncadeada.toString());


listaDuplamenteEncadeada.insert(4, 'Cabral');
console.log('Inserindo Cabral na quarta (4) posição: ' + listaDuplamenteEncadeada.toString());


listaDuplamenteEncadeada.insert(2, 'Pedrinho');
console.log('Inserindo Pedrinho na segunda (2) posição: ' + listaDuplamenteEncadeada.toString());

// Quem está na quarta posição
console.log('Quem é o Head da lista duplamente encadeada?: ' + listaDuplamenteEncadeada.getElementAt(0).element);
console.log('A posição do Carlos é: ' + listaDuplamenteEncadeada.indexOf('Carlos'));

// vamos remover um elemento de uma posição específica (Giovanna que está na 4 posição)
listaDuplamenteEncadeada.removeAt(4);
console.log('Verificando se removeu Giovanna da quarta posição: '+ listaDuplamenteEncadeada.toString());

// vamos remover um elemento passando seu valor
listaDuplamenteEncadeada.removeByValue('Pedrinho');
console.log('Verificando se removeu Pedrinho da quarta posição: '+ listaDuplamenteEncadeada.toString());

// mostrando o tamanho da lista duplamente encadeada
console.log('O tamanho da lista duplamente encadeada agora é: '+ listaDuplamenteEncadeada.size());