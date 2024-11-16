let pontuacao = 0;

const cenas = [
    { 
        id: 1, 
        texto: "O Pequeno Príncipe está no seu planeta com a rosa. Ele decide se deve sair para explorar ou ficar mais um pouco com a rosa.",
        escolhas: [
            { texto: "Ficar com a rosa", proximaCena: 2, imagem: "rosa.jpg" },
            { texto: "Partir para explorar", proximaCena: 3, imagem: "remix-rumble-1500x500.jpg" }
        ]
    },
    { 
        id: 2, 
        texto: "Depois de passar um tempo com a rosa, o Pequeno Príncipe decide que está na hora de partir em busca de novas aventuras.",
        escolhas: [
            { texto: "Partir para explorar", proximaCena: 3, imagem: "explorar.jpg" }
        ]
    },
    { 
        id: 3, 
        texto: "O Pequeno Príncipe chega a um planeta onde encontra um pintor pintando um quadro. O pintor pede ajuda para buscar três coisas: um girassol, um balde de água e uma semente de árvore. O Pequeno Príncipe aceita?",
        escolhas: [
            { texto: "Sim, ajudar o pintor", proximaCena: 4, imagem: "pintor.jpg" },
            { texto: "Não, continuar explorando", proximaCena: 5, imagem: "explorar.jpg" }
        ]
    },
    { 
        id: 4, 
        texto: "O Pequeno Príncipe decide ajudar o pintor. Ele vai primeiro ao jardim em busca do girassol. Ele encontra o jardim, mas o girassol está no alto de uma colina. O que ele faz?",
        escolhas: [
            { texto: "Escalar a colina", proximaCena: 6, imagem: "colina.jpg" },
            { texto: "Procurar outra forma de alcançar", proximaCena: 7, imagem: "escada.jpg" }
        ]
    },
    { 
        id: 5, 
        texto: "O Pequeno Príncipe decide não ajudar o pintor e continua explorando o planeta. No entanto, ele percebe que está se sentindo perdido e decide voltar ao pintor para ajudá-lo.",
        escolhas: [
            { texto: "Voltar ao pintor", proximaCena: 4, imagem: "pintor.jpg" }
        ]
    },
    { 
        id: 6, 
        texto: "O Pequeno Príncipe escala a colina e consegue pegar o girassol. Agora ele deve buscar o balde de água da correnteza. Ele encontra um rio, mas a correnteza é muito forte. O que ele faz?",
        escolhas: [
            { texto: "Enfrentar a correnteza", proximaCena: 8, imagem: "correnteza.jpg" },
            { texto: "Procurar um balde", proximaCena: 9, imagem: "balde.jpg" }
        ]
    },
    { 
        id: 7, 
        texto: "O Pequeno Príncipe procura outra forma de alcançar o girassol e encontra uma escada escondida atrás de uma árvore. Ele usa a escada e pega o girassol. Agora ele deve buscar o balde de água da correnteza.",
        escolhas: [
            { texto: "Ir até a correnteza", proximaCena: 6, imagem: "correnteza.jpg" }
        ]
    },
    { 
        id: 8, 
        texto: "Ele enfrenta a correnteza, mas percebe que está ficando muito perigoso. Ele recua e decide procurar outra maneira de conseguir a água.",
        escolhas: [
            { texto: "Procurar um balde", proximaCena: 9, imagem: "balde.jpg" }
        ]
    },
    { 
        id: 9, 
        texto: "O Pequeno Príncipe encontra um balde e usa-o para pegar a água da correnteza com segurança. Agora só falta a semente da árvore. Ele encontra a árvore, mas a semente está enterrada no chão. O que ele faz?",
        escolhas: [
            { texto: "Cavar para pegar a semente", proximaCena: 10, imagem: "cavar.jpg" },
            { texto: "Procurar outra solução", proximaCena: 11, imagem: "passaro.jpg" }
        ]
    },
    { 
        id: 10, 
        texto: "O Pequeno Príncipe cava e encontra a semente. Ele retorna ao pintor com todos os itens: o girassol, a água e a semente.",
        escolhas: [
            { texto: "Entregar os itens ao pintor", proximaCena: 12, imagem: "pintor.jpg" }
        ]
    },
    { 
        id: 11, 
        texto: "O Pequeno Príncipe procura outra solução e encontra um pássaro que está cavando perto da árvore. Ele pede ajuda ao pássaro, que lhe entrega a semente. Ele volta ao pintor com todos os itens.",
        escolhas: [
            { texto: "Entregar os itens ao pintor", proximaCena: 12, imagem: "pintor.jpg" }
        ]
    },
    { 
        id: 12, 
        texto: "O pintor agradece o Pequeno Príncipe por sua ajuda. O Pequeno Príncipe, então, pensa sobre o que fazer a seguir: ele poderia ficar e pintar mais com o pintor ou partir em busca de novas aventuras. O que ele faz?",
        escolhas: [
            { texto: "Ficar e pintar mais", proximaCena: 13, imagem: "pintar.jpg" },
            { texto: "Ir embora para novas aventuras", proximaCena: 14, imagem: "partir.jpg" }
        ]
    },
    { 
        id: 13, 
        texto: "O Pequeno Príncipe decide ficar no planeta e continuar pintando ao lado do pintor. Eles passam os próximos dias criando belas obras de arte e compartilhando histórias.",
        escolhas: [
            { texto: "Ir para o quiz final", proximaCena: 15 }
        ]
    },
    { 
        id: 14, 
        texto: "O Pequeno Príncipe agradece ao pintor pela companhia e decide partir em busca de novas aventuras, levando consigo o quadro que ganharam juntos.",
        escolhas: [
            { texto: "Ir para o quiz final", proximaCena: 15 }
        ]
    },


    { 
        id: 15, 
        texto: "Quiz: O que o Pequeno Príncipe buscou primeiro?",
        quiz: {
            pergunta: "O que o Pequeno Príncipe buscou primeiro?",
            opcoes: ["Girassol", "Semente", "Água", "Pássaro"],
            respostaCorreta: "Girassol"
        },
        escolhas: [
            { texto: "Próxima pergunta", proximaCena: 16 }
        ]
    },
    { 
        id: 16, 
        texto: "Quiz: Como o Pequeno Príncipe conseguiu pegar o girassol?",
        quiz: {
            pergunta: "Como o Pequeno Príncipe conseguiu pegar o girassol?",
            opcoes: ["Escalou", "Achou uma escada", "Usou uma corda", "Pediu ajuda"],
            respostaCorreta: "Achou uma escalou"
        },
        escolhas: [
            { texto: "Próxima pergunta", proximaCena: 17 }
        ]
    },
    { 
        id: 17, 
        texto: "Quiz: O que o pintor precisava para completar sua pintura?",
        quiz: {
            pergunta: "O que o pintor precisava para completar sua pintura?",
            opcoes: ["Girassol, água e semente", "Semente e pássaro", "Rosas", "Cores mágicas"],
            respostaCorreta: "Girassol, água e semente"
        },
        escolhas: [
            { texto: "Próxima pergunta", proximaCena: 18 }
        ]
    },
    { 
        id: 18, 
        texto: "Quiz: Como o Pequeno Príncipe conseguiu a semente?",
        quiz: {
            pergunta: "Como o Pequeno Príncipe conseguiu a semente?",
            opcoes: ["Ele cavou o chão", "O pintor deu a ele", "Ele pegou do pássaro", "Ele comprou de um mercador"],
            respostaCorreta: "Ele pegou do pássaro"
        },
        escolhas: [
            { texto: "Próxima pergunta", proximaCena: 19 }
        ]
    },
    { 
        id: 19, 
        texto: "Quiz: O que o pintor presenteou ao Pequeno Príncipe?",
        quiz: {
            pergunta: "O que o pintor presenteou ao Pequeno Príncipe?",
            opcoes: ["Um quadro", "Uma escultura", "Um girassol", "Uma árvore"],
            respostaCorreta: "Um quadro"
        },
        escolhas: [
            { texto: "Ver pontuação", proximaCena: 20 }
        ]
    },


    { 
        id: 20, 
        texto: "Fim do quiz! Você ajudou o Pequeno Príncipe a completar sua missão. Clique abaixo para ver sua pontuação.",
        escolhas: [
            { texto: "Ver pontuação", proximaCena: null }  
        ]
    }
];


function mostrarCena(id) {
    const cena = cenas.find(c => c.id === id);
    const textoDiv = document.getElementById("texto");
    const opcoesDiv = document.getElementById("opcoes");
    const imagemDiv = document.getElementById("historia-imagem");
    const bookPage = document.querySelector('.book-page');

   
    bookPage.classList.add('fade-out');
    
   
    setTimeout(() => {
        textoDiv.innerText = cena.texto;
        opcoesDiv.innerHTML = "";
        imagemDiv.src = ""; 

      
        if (cena.escolhas) {
            cena.escolhas.forEach(escolha => {
                const button = document.createElement("button");
                button.innerText = escolha.texto;
                button.onclick = () => {
                    if (id === 20) {
                        salvarPontuacao();
                        window.location.href = 'score.html';
                    } else {
                        if (escolha.imagem) {
                            imagemDiv.src = escolha.imagem;
                        }
                        mostrarCena(escolha.proximaCena);
                    }
                };
                opcoesDiv.appendChild(button);
            });
        }

      
        if (cena.quiz) {
            const perguntaDiv = document.createElement("div");
            perguntaDiv.innerText = cena.quiz.pergunta;
            opcoesDiv.appendChild(perguntaDiv);

           
            cena.quiz.opcoes.forEach(opcao => {
                const button = document.createElement("button");
                button.innerText = opcao;
                button.onclick = () => {
                    verificarResposta(opcao, cena.quiz.respostaCorreta, cena.escolhas[0].proximaCena, button);
                };
                opcoesDiv.appendChild(button);
            });
        }

        
        bookPage.classList.remove('fade-out');
    }, 500); 
}


function verificarResposta(resposta, respostaCorreta, proximaCena, button) {
    if (resposta === respostaCorreta) {
        pontuacao += 1;
        button.classList.add('correta'); 
    } else {
        button.classList.add('errada'); 
    }
    
    
    setTimeout(() => {
        mostrarCena(proximaCena);
    }, 1000); 
}



function salvarPontuacao() {
    localStorage.setItem('pontuacaoFinal', pontuacao);
}


mostrarCena(1);