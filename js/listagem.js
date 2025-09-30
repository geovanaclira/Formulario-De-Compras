let editIndex = null

function atualizarLista() {
    const tabela = document.getElementById('tabela')

    let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || []
    tabela.innerHTML = ""

    listaCompras.forEach((item, index) => {
        const novaLinha = document.createElement('tr')
        novaLinha.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.nome}</td>
        <td>${item.preco}</td>
        <td>${item.categoria}</td>
        <td>${item.origem}</td>
        <td>${item.validade}</td>
        <td>
           <button class="btn-editar" onclick="editarItem(${index})">
                <i class="fa fa-edit"></i> <span>Editar</span
            </button>
            <button class="btn-excluir" onclick="removerItem(${index})">
                <i class="fa fa-trash"></i> <span>Excluir</span>
            </button>
        </td>
        `
        tabela.appendChild(novaLinha)
    })
}

function removerItem(index) {
    let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || []
    listaCompras.splice(index, 1)
    localStorage.setItem("listaCompras", JSON.stringify(listaCompras))
    atualizarLista()
}

function editarItem(index) {
    let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || []
    const item = listaCompras[index]

    editIndex = index

    document.getElementById('edit-nome').value = item.nome
    document.getElementById('edit-preco').value = item.preco
    document.getElementById('edit-categoria').value = item.categoria
    document.getElementById('edit-origem').value = item.origem
    document.getElementById('edit-validade').value = item.validade

    document.getElementById('modal').style.display = 'flex'
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none'
}

document.getElementById('form-editar').addEventListener('submit', function(e) {
    e.preventDefault()

    let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || []

    listaCompras[editIndex] = {
        nome: document.getElementById('edit-nome').value.trim(),
        preco: document.getElementById('edit-preco').value.trim(),
        categoria: document.getElementById('edit-categoria').value.trim(),
        origem: document.getElementById('edit-origem').value.trim(),
        validade: document.getElementById('edit-validade').value.trim()
    }

    localStorage.setItem("listaCompras", JSON.stringify(listaCompras))
    fecharModal()
    atualizarLista()
})


document.addEventListener("DOMContentLoaded", atualizarLista)