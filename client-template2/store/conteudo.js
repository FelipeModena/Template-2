
export const state = () => ({
    headerOpcoes: [
        { nomePagina: 'Inicio', url: '/', id: 0 },
        { nomePagina: 'Quem somos', url: 'quemSomos', id: 1 },
        { nomePagina: 'Nossos produtos', url: 'produtos', id: 2 },
        { nomePagina: 'Portfólio', url: 'portfolio', id: 3 },
        { nomePagina: 'Contato', url: 'contato', id: 4 }
    ],
    index: {
        forms: {
            titulo: "Faça seu orçamento online",
            txtBotao1: "Enviar"
        },
        carouselTopo: [
            {
                imgUrl: 'boloChoco.jpg',
                texto: 'Bolos especiais para momentos especiais',
                urlBotao1: '/produtos'
            },
            {
                imgUrl: 'cenoura.jpg',
                texto: 'Bolos especiais para momentos especiais',
                urlBotao1: '/produtos'
            },
            {
                imgUrl: 'macaron.jpg',
                texto: 'Macaron especiais para momentos especiais',
                urlBotao1: '/produtos'
            },
        ],
        conteudo1: {
            titulo: 'Nossa historia',
            texto: 'Pequeno texto sobre a empresa, ou sobre qualquer coisa na verdade, esse site é apenas um exemplo e pode ser adaptado a qualquer outra com áreas de atuação distintas. Trocando cores e inganes tudo  e possivel! É interessante deixaros texto da pagtina inicial curtos e sucientos, apresnetar seu negocio, sua  area de atuação. Exsitem páginas internas onde é posivel detalhar mais as coisas'
        },
        conteudo3: {
            ativo: true,
            titulo: "Nossa historia",
            corTitulo: "#1968a4",
            corFundo: "#e2e689",
            subTitulo: null,
            corSubTitulo: null,
            texto: "Pequeno texto sobre a empresa, ou sobre qualquer coisa na verdade, esse site é apenas um exemplo e pode ser adaptado a qualquer outra com áreas de atuação distintas. Trocando cores e inganes tudo e possivel! É interessante deixaros texto da pagtina inicial curtos e sucientos, apresnetar seu negocio, sua area de atuação. Exsitem páginas internas onde é posivel detalhar mais as coisas\n\n",
            urlBotao1: "/pagina2",
            txtBotao1: "Saiba mais",
            corBotao1: "#2f739d",
            urlDirecionamentoPaginas: null,
            texto: 'Pequeno texto sobre a empresa, ou sobre qualquer coisa na verdade, esse site é apenas um exemplo e pode ser adaptado a qualquer outra com áreas de atuação distintas. Trocando cores e inganes tudo  e possivel! É interessante deixaros texto da pagtina inicial curtos e sucientos, apresnetar seu negocio, sua  area de atuação. Exsitem páginas internas onde é posivel detalhar mais as coisas',
            imgUrl: 'tortaColorida.jpg'
        },
        conteudo2: ['tortaMaca.jpg', 'boloCremeMorango.jpg', 'boloChocoBranco.jpg', 'cupcake.jpg',
            'boloBarbie.jpg', 'tortinha.jpg', 'tortaCreme.jpg', 'colecaoCupcake.jpg',
        ]

    },
    quemSomos: {
        bannerSuperior: {
            imgUrl: 'topo-quemsomos.jpg'
        },
        conteudo1: {
            titulo: 'Nossa historia',
            texto: 'Pequeno texto sobre a empresa, ou sobre qualquer coisa na verdade, esse site é apenas um exemplo e pode ser adaptado a qualquer outra com áreas de atuação distintas. Trocando cores e inganes tudo  e possivel! É interessante deixaros texto da pagtina inicial curtos e sucientos, apresnetar seu negocio, sua  area de atuação. Exsitem páginas internas onde é posivel detalhar mais as coisas'
        },
        conteudo2: {
            imgs: [
                {
                    imgUrl: 'tortaEncomenda.jpg',
                    texto: 'Tortas espaciais sob demanda'
                },
                {
                    imgUrl: 'tortaCreme.jpg',
                    texto: 'Tortas espaciais sob demanda'
                },
                {
                    imgUrl: 'tortaMorango.jpg',
                    texto: 'Tortas espaciais sob demanda'
                },
                {
                    imgUrl: 'tortaColorida.jpg',
                    texto: 'Tortas espaciais sob demanda'
                },
            ]
        }
    },
    produtos: [
        {
            titulo: 'Bolos decorados',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.',
            imgUrl: 'boloFrutaBanner.jpg',
        },
        {
            titulo: 'Tortas doces',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.',
            imgUrl: 'tortaMorangoP.jpg',
        },
        {
            titulo: 'Docinhos para festa',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.',
            imgUrl: 'macaron.jpg',
        },
    ],
    portfolio: {
        titulo: 'Portfólio',
        imagens: [
            {
                imgUrl: "cenoura.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 101
            },
            {
                imgUrl: "boloChocoBranco.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 102
            },
            {
                imgUrl: "bolinhoMoranho.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 103
            },
            {
                imgUrl: "tortinha.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 104
            },
            {
                imgUrl: "tortaPequena.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 105
            },
            {
                imgUrl: "tortaMorangoP.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 106
            },
            {
                imgUrl: "tortaMorango.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 107
            },
            {
                imgUrl: "tortaMaca.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 108
            },
            {
                imgUrl: "tortaEncomenda.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 109
            },
            {
                imgUrl: "boloCremeMorango.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 110
            },
            {
                imgUrl: "tortaCreme.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 111
            },
            {
                imgUrl: "tortaColorida.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 112
            },
            {
                imgUrl: "topo-quemsomos.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 113
            },
            {
                imgUrl: "macaronBanner.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 114
            },
            {
                imgUrl: "macaron.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 115
            },
            {
                imgUrl: "ex-08.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 116
            },
            {
                imgUrl: "cupcakeGourmet.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 117
            },
            {
                imgUrl: "cupcake.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 118
            },
            {
                imgUrl: "colecaoCupcake.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 119
            },
            {
                imgUrl: "tortaCortada.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 120
            },
            {
                imgUrl: "boloFrutaBanner.jpg",
                texto: "",
                compatibilidade: "desktop",
                ordenacao: 0,
                id: 121
            }
        ],
    },
    contato: {
        iframeMapaGoogle: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5554.362154665995!2d-49.050529729305254!3d-22.35358764178771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1624995827887!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    dadosCadastrais:
    {
        endereco: "Rua Pedro Cardoso n 56",
        cidade: "Florianopolis ",
        bairro: "Bairro Jd.Florido",
        estado: "São Paulo",
        complemento: "Predio Azul",
        whatsapp: "(xx) 96525-5422",
        telefone: "(xx) 96525-5422",
        email: "email.loja.com.br",
        facebook: "https://www.facebook.com/sharkdatabr/",
        instagram: "https://www.instagram.com/sharkdata/",
        linkedin: "https://br.linkedin.com/company/sharkdata",
        youtube: null,
    },


})

export const getters = {
    headerOpcoes(state) {
        return state.headerOpcoes
    },
    index(state) {
        return state.index
    },
    quemSomos(state) {
        return state.quemSomos
    },
    produtos(state) {
        return state.produtos
    },
    portfolio(state) {
        return state.portfolio
    },
    dadosCadastrais(state) {
        return state.dadosCadastrais
    },
    contato(state) {
        return state.contato
    }
}
