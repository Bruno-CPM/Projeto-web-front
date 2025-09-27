// Dados do questionário
const questions = [
    {
        question: "O que você mais gosta de fazer no tempo livre?",
        options: [
            { text: "Explorar lugares novos 🧭", scores: { dora: 3, botas: 2, raposo: 1 } },
            { text: "Brincar com amigos 🐒", scores: { dora: 1, botas: 3, raposo: 2 } },
            { text: "Procurar objetos escondidos 🕵️", scores: { dora: 1, botas: 2, raposo: 3 } }
        ]
    },
    {
        question: "Qual dessas qualidades te define melhor?",
        options: [
            { text: "Corajoso(a) 💪", scores: { dora: 3, botas: 2, raposo: 1 } },
            { text: "Engraçado(a) 😄", scores: { dora: 1, botas: 3, raposo: 2 } },
            { text: "Esperto(a) 🧠", scores: { dora: 2, botas: 1, raposo: 3 } }
        ]
    },
    {
        question: "Se você estivesse em uma aventura, o que levaria?",
        options: [
            { text: "Um mapa 🗺️", scores: { dora: 3, botas: 2, raposo: 1 } },
            { text: "Um brinquedo 🧸", scores: { dora: 1, botas: 3, raposo: 2 } },
            { text: "Um plano secreto 🤫", scores: { dora: 1, botas: 2, raposo: 3 } }
        ]
    },
    {
        question: "Qual seu lugar favorito?",
        options: [
            { text: "A floresta 🌳", scores: { dora: 3, botas: 2, raposo: 1 } },
            { text: "O parquinho 🎠", scores: { dora: 1, botas: 3, raposo: 2 } },
            { text: "Um esconderijo secreto 🕳️", scores: { dora: 1, botas: 2, raposo: 3 } }
        ]
    },
    {
        question: "Como você reage quando alguém precisa de ajuda?",
        options: [
            { text: "Ajuda imediatamente 🤝", scores: { dora: 3, botas: 2, raposo: 1 } },
            { text: "Tenta animar a pessoa 🎉", scores: { dora: 1, botas: 3, raposo: 2 } },
            { text: "Observa antes de agir 👀", scores: { dora: 1, botas: 2, raposo: 3 } }
        ]
    },
    {
        question: "Qual dessas frases combina mais com você?",
        options: [
            { text: "\"Vamos lá!\" 🚀", scores: { dora: 3, botas: 2, raposo: 1 } },
            { text: "\"Isso vai ser divertido!\" 🎈", scores: { dora: 1, botas: 3, raposo: 2 } },
            { text: "\"Ninguém vai me pegar!\" 🦊", scores: { dora: 1, botas: 2, raposo: 3 } }
        ]
    },
    {
        question: "Qual acessório você usaria?",
        options: [
            { text: "Mochila 🎒", scores: { dora: 3, botas: 2, raposo: 1 } },
            { text: "Botas coloridas 👢", scores: { dora: 1, botas: 3, raposo: 2 } },
            { text: "Máscara de disfarce 🎭", scores: { dora: 1, botas: 2, raposo: 3 } }
        ]
    },
    {
        question: "Como você lida com desafios?",
        options: [
            { text: "Enfrenta com coragem 💥", scores: { dora: 3, botas: 2, raposo: 1 } },
            { text: "Tenta se divertir no processo 🎮", scores: { dora: 1, botas: 3, raposo: 2 } },
            { text: "Cria estratégias para vencer 🧩", scores: { dora: 1, botas: 2, raposo: 3 } }
        ]
    },
    {
        question: "Qual animal você gostaria de ser?",
        options: [
            { text: "Um pássaro livre 🐦", scores: { dora: 3, botas: 2, raposo: 1 } },
            { text: "Um macaco brincalhão 🐵", scores: { dora: 1, botas: 3, raposo: 2 } },
            { text: "Uma raposa astuta 🦊", scores: { dora: 1, botas: 2, raposo: 3 } }
        ]
    },
    {
        question: "O que você faz quando está em apuros?",
        options: [
            { text: "Pede ajuda aos amigos 📣", scores: { dora: 3, botas: 2, raposo: 1 } },
            { text: "Tenta resolver com criatividade 🎨", scores: { dora: 1, botas: 3, raposo: 2 } },
            { text: "Foge rapidamente 🏃‍♂️", scores: { dora: 1, botas: 2, raposo: 3 } }
        ]
    }
];

// Dados dos personagens
const characters = {
    dora: {
        name: "Dora",
        icon: "🧍‍♀️",
        description: "Dora é uma menina curiosa, corajosa e cheia de energia. Ela adora explorar novos lugares, resolver desafios e ajudar quem precisa. Com sua mochila mágica e seu fiel mapa, Dora está sempre pronta para embarcar em uma nova aventura. Sua determinação e espírito colaborativo fazem dela uma líder nata.",
        phrase: "\"Vamos lá!\""
    },
    botas: {
        name: "Botas",
        icon: "🐒",
        description: "Botas é o melhor amigo da Dora. Um macaquinho alegre, brincalhão e muito leal. Ele está sempre animado para viver novas aventuras ao lado da amiga, mesmo que às vezes se atrapalhe um pouco. Com suas botas vermelhas e seu coração gigante, Botas conquista todos com seu bom humor e entusiasmo.",
        phrase: "\"Isso vai ser divertido!\""
    },
    raposo: {
        name: "Raposo",
        icon: "🦊",
        description: "Raposo é o astuto antagonista das aventuras. Inteligente e sorrateiro, ele vive tentando pegar os objetos da Dora e seus amigos. Apesar de suas travessuras, Raposo é parte essencial do universo, trazendo desafios que tornam a jornada mais emocionante. Sempre com um plano em mente, ele adora se esconder e surpreender.",
        phrase: "\"Você não vai me pegar!\""
    }
};

// Variáveis globais
let currentQuestion = 0;
let scores = { dora: 0, botas: 0, raposo: 0 };
let answers = [];

// Função para iniciar o questionário
function startQuiz() {
    // Resetar variáveis
    currentQuestion = 0;
    scores = { dora: 0, botas: 0, raposo: 0 };
    answers = [];
    
    // Mostrar página do questionário
    showPage('quiz-page');
    showQuestion();
}

// Função para mostrar uma pergunta
function showQuestion() {
    const question = questions[currentQuestion];
    
    // Atualizar contador de progresso
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('progress-fill').style.width = ((currentQuestion + 1) / questions.length) * 100 + '%';
    
    // Atualizar texto da pergunta
    document.getElementById('question-text').textContent = question.question;
    
    // Limpar e criar opções
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="option-${index}">
            <label for="option-${index}">${option.text}</label>
        `;
        
        // Adicionar evento de clique
        optionElement.addEventListener('click', () => {
            selectOption(index);
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Atualizar botões de navegação
    updateNavigationButtons();
}

// Função para selecionar uma opção
function selectOption(optionIndex) {
    // Marcar o radio button
    document.getElementById(`option-${optionIndex}`).checked = true;
    
    // Salvar resposta
    answers[currentQuestion] = optionIndex;
    
    // Atualizar botões de navegação
    updateNavigationButtons();
}

// Função para atualizar botões de navegação
function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    // Botão anterior
    prevButton.disabled = currentQuestion === 0;
    
    // Botão próxima
    nextButton.disabled = answers[currentQuestion] === undefined;
    
    // Mudar texto do último botão
    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = 'Ver Resultado →';
    } else {
        nextButton.textContent = 'Próxima →';
    }
}

// Função para próxima pergunta
function nextQuestion() {
    if (answers[currentQuestion] === undefined) return;
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        calculateResult();
    }
}

// Função para pergunta anterior
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        
        // Restaurar resposta anterior se existir
        if (answers[currentQuestion] !== undefined) {
            document.getElementById(`option-${answers[currentQuestion]}`).checked = true;
        }
    }
}

// Função para calcular resultado
function calculateResult() {
    // Calcular pontuações
    questions.forEach((question, questionIndex) => {
        const answerIndex = answers[questionIndex];
        const selectedOption = question.options[answerIndex];
        
        scores.dora += selectedOption.scores.dora;
        scores.botas += selectedOption.scores.botas;
        scores.raposo += selectedOption.scores.raposo;
    });
    
    // Determinar personagem vencedor
    let winner = 'dora';
    let maxScore = scores.dora;
    
    if (scores.botas > maxScore) {
        winner = 'botas';
        maxScore = scores.botas;
    }
    if (scores.raposo > maxScore) {
        winner = 'raposo';
        maxScore = scores.raposo;
    }
    
    // Mostrar resultado
    showResult(winner);
}

// Função para mostrar resultado
function showResult(winner) {
    const character = characters[winner];
    
    // Atualizar pontuações na tela
    document.getElementById('dora-score').textContent = scores.dora;
    document.getElementById('botas-score').textContent = scores.botas;
    document.getElementById('raposo-score').textContent = scores.raposo;
    
    // Criar elemento do personagem vencedor
    const resultCharacter = document.getElementById('result-character');
    resultCharacter.innerHTML = `
        <div class="character-result">
            <div class="character-icon-large">${character.icon}</div>
            <h2>Você é ${character.name}!</h2>
            <p class="character-phrase">${character.phrase}</p>
            <p class="character-description">${character.description}</p>
        </div>
    `;
    
    // Mostrar página de resultado
    showPage('result-page');
}

// Função para reiniciar o questionário
function restartQuiz() {
    showPage('home-page');
}

// Função para mostrar uma página específica
function showPage(pageId) {
    // Esconder todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Mostrar página selecionada
    document.getElementById(pageId).classList.add('active');
}

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    showPage('home-page');
});
