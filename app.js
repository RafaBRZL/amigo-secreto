// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); // trim() remove espaços extras

    // Validação: se o campo estiver vazio, exibe um alerta e retorna
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    inputNome.value = "";

    // Atualiza a lista na tela
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre o array e cria um item <li> para cada amigo
    for (let amigo of amigos) {
        let li = document.createElement("li"); // Cria um elemento <li>
        li.textContent = amigo; // Define o texto como o nome do amigo
        lista.appendChild(li); // Adiciona o <li> à lista
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Valida se há pelo menos um amigo na lista
    if (amigos.length === 0) {
        alert("Nenhum amigo adicionado para sortear.");
        return;
    }

    // Gera um índice aleatório dentro do tamanho do array
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome sorteado

    // Exibe o resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

