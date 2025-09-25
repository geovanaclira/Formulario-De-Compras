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
            <button onclick="editarItem(${index})">Editar</button>
            <button onclick="removerItem(${index})">Excluir</button>
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

document.addEventListener("DOMContentLoaded", atualizarLista)