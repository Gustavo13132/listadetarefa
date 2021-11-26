const input = document.getElementById("input")
const lista = document.getElementById("lista")
const tarefa = []

function add() {
    tarefa.push(input.value)
    input.value = ""
    render()
}
function render() {
    lista.innerHTML = null
    tarefa.forEach(i => {
        const li = document.createElement("li")
        li.innerText = i
        lista.appendChild(li)
    })
}
