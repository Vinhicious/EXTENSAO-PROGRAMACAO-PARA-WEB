const form = document.getElementById("user-form");
const userList = document.getElementById("user-list");

//função para carregar
function carregarUsuarios() {
    fetch('/api/users')
        .then(res => res.json())
        .then(data => {
            userList.innerHTML = "";
            data.forEach(user => {
                const li = document.createElement("li");
                li.innerHTML = 
                    `${user.nome} (${user.email})
                    <button onclick="atualizarUsuario(${user.id})">Editar</button>
                    <button onclick="excluirUsuario(${user.id})">Excluir</button>`;
                userList.appendChild(li);
            });
        });  
};

carregarUsuarios();

//ações para cadastrar usuários
form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value

    //criar uma função para cadastro
    cadastrarUsuarios(nome, email);
})

function cadastrarUsuarios(nome, email) {
    fetch('/api/users',{ 
        method: 'POST',
        headers: {'Content-type': "application/json"},
        body: JSON.stringify({nome, email})
    })
    .then(() => {
        form.reset();
        carregarUsuarios()
    })
}

//função para atualizar
function atualizarUsuario(id) {
    const nome = prompt("Digite o novo nome:");
    const email = prompt("Digite o novo email:");
    fetch(`/api/users/${id}`,{ 
        method: 'PUT',
        headers: {'Content-type': "application/json"},
        body: JSON.stringify({nome, email})
    })
    .then(() => {
        carregarUsuarios()
    })
}

//função para deletar
function excluirUsuario(id) {
    fetch(`/api/users/${id}`,{ 
        method: 'DELETE'
    })
    .then(() => {
        carregarUsuarios()
    })
}