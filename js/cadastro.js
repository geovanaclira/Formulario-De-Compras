const form = document.getElementById('form')

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const nome = document.getElementById('nome-input').value.trim()
    const preco = document.getElementById('preco-input').value.trim()
    const categoria = document.getElementById('categoria-input').value.trim()
    const origem = document.getElementById('origem-input').value.trim()
    const validade = document.getElementById('validade-input').value.trim()

    if (nome !== "" && preco !== "" && categoria !== "" && origem !== "" && validade !== "") {

        let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || []
        const item = {nome, preco, categoria, origem, validade}
        listaCompras.push(item)

        localStorage.setItem("listaCompras", JSON.stringify(listaCompras))
        form.reset() 
    }
})
