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

const produtos = [
    {
        nome: 'Kotlin',
        descricao: 'Aprenda os fundamentos da linguagem Kotlin, desde a instalação do ambiente até a criação de projetos simples. Ideal para quem deseja iniciar sua jornada no desenvolvimento Android ou em outras plataformas',
        photo: 'kotlin.png',
        preco: 'R$ 390,90',
        duration:'Duração',
        duracoes: ['D1','D2','D3','D4','D5'],
        cart: 'ADD TO CART'
    },
    {
        nome: 'FRONT-END',
        descricao: 'Torne-se um desenvolvedor front-end completo! Aprenda a construir interfaces modernas e responsivas com HTML, CSS e JavaScript, além de entender como funciona o desenvolvimento web',
        photo: 'front_end.png',
        preco: 'R$ 499,90',
        duration:'Duração',
        duracoes: ['D1','D2','D3','D4','D5'],
        cart: 'ADD TO CART'
    },
    {
        nome: 'BACK-END',
        descricao: 'Construa sistemas robustos e escaláveis com Java e Spring Boot. Este curso ensina desde o básico até a criação de APIs RESTful, passando por autenticação e banco de dados.',
        photo: 'backend.png',
        preco: 'R$ 599,90',
        duration:'Duração',
        duracoes: ['D1','D2','D3','D4','D5'],
        cart: 'ADD TO CART'
    },
    {
        nome: 'Projetos',
        descricao: 'Aprenda a gerenciar projetos de software utilizando metodologias ágeis como Scrum e Kanban, com foco na integração entre equipes de desenvolvimento e stakeholders',
        photo: 'projetos.png',
        preco: 'R$ 449,90',
        duration:'Duração',
        duracoes: ['D1','D2','D3','D4','D5'],
        cart: 'ADD TO CART'
    }
]

function criarCards(produto){
    const novoGrupao = document.createElement('div')
    const novoCard = document.createElement('div')
}


disciplinas.forEach(criarMenu)