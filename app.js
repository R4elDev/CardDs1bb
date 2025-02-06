'use strict'


// Criando um objeto para armazenas os conteudos

const disciplinas = [
    {nome: 'PPDM', icon: 'android.png', cor:'purple'},
    {nome: 'BACK', icon: 'api.png', cor:'red'},
    {nome: 'FRONT', icon: 'http.png', cor:'pink'},
    {nome: 'PROJ', icon: 'projetos.png', cor:'plum'}
]
function criarMenu(disciplina){

    

    // Criando Tags
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    // Adicionando conteudo nas Tags filhas
    novaImagem.src = `./img/${disciplina.icon}`
    novoSpan.textContent = disciplina.nome

    // Adicionando conteudo na tag mae
    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover: ${disciplina.cor}`

    lista.appendChild(novoItem)
    
}

disciplinas.forEach(criarMenu)