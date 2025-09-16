let listaCompras = []

const form = document.getElementById('form')
const inputItem = document.getElementById('item-input')
const tabela = document.getElementById('tabela')
const limparBtn = document.getElementById('limpar-item')
const atualizarBtn = document.getElementById('atualizar-item')


form.addEventListener("submit", function(event) {
    event.preventDefault()

    const item = document.getElementById('item-input').value.trim()

    if (item !== "") {
        listaCompras.push(item)
        atualizarLista()
        form.reset() 
    }
})

function atualizarLista() {
    tabela.innerHTML = ""

    listaCompras.forEach((listaCompras, index) => {
        const novaLinha = document.createElement('tr')
        novaLinha.innerHTML = `<td> ${index + 1} </td> <td>${listaCompras}`
        tabela.appendChild(novaLinha)
        form.reset()
    })
}

limparBtn.addEventListener("click", () => {
    listaCompras = []
    tabela.innerHTML = ""
})
