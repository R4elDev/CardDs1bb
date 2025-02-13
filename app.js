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

    

    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.className = 'card'


    // Div Textos
    const textos = document.createElement('div')
    textos.className = 'textos'

    const titulo = document.createElement('div')
    titulo.className = 'titulo'
    const tituloH = document.createElement('h1')

    const desc = document.createElement('div')
    desc.className = 'desc'
    const descP = document.createElement('p')

    // Div Foto
    const image = document.createElement('div')
    image.className = 'foto'
    const img = document.createElement('img')

    // Div Variacoes 
    const variacoes = document.createElement('div')
    variacoes.className = 'variacoes'
    const valor = document.createElement('div')
    valor.className = 'valor'
    const valorH = document.createElement('h1')
    const subtitulo = document.createElement('div')
    subtitulo.className = 'subtitulo'
    const subtituloH = document.createElement('h1')
    
    const duracao = document.createElement('div')
    duracao.className = 'duracao'

    const duracoes = document.createElement('div')
    duracoes.className = 'duracoes'
    const duracoesP = document.createElement('p')


    const carrinho = document.createElement('div')
    carrinho.className = 'carrinho'

    const carrinhoH = document.createElement('h1')


    // Adicionando valor
    tituloH.textContent = produto.nome
    descP.textContent = produto.descricao
    img.src = `./imgCard/${produto.photo}`
    valorH.textContent = produto.preco
    subtituloH.textContent = produto.duration

    produtos.forEach(function(item){
        duracoesP.textContent = item.duracoes.join(' ')
    })



    carrinhoH.textContent = produto.cart


    // Adicionando aos pais
    carrinho.appendChild(carrinhoH)
    duracoes.appendChild(duracoesP)
    duracao.appendChild(duracoes)
    variacoes.appendChild(duracao)
    valor.appendChild(valorH)
    subtitulo.appendChild(subtituloH)
    variacoes.appendChild(subtitulo)
    variacoes.appendChild(valor)
    

    image.appendChild(img)
    titulo.appendChild(tituloH)
    desc.appendChild(descP)
    textos.replaceChildren(titulo,desc)



    card.appendChild(textos)
    card.appendChild(image)
    card.appendChild(variacoes)
    card.appendChild(carrinho)
    container.appendChild(card)
}


disciplinas.forEach(criarMenu)
produtos.forEach(criarCards)

