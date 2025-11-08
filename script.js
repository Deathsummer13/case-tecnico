// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Verificação Matemática
class MathVerification {
    constructor() {
        this.num1 = 0;
        this.num2 = 0;
        this.correctAnswer = 0;
        this.init();
    }

    init() {
        this.generateProblem();
        this.setupValidation();
    }

    generateProblem() {
        this.num1 = Math.floor(Math.random() * 10) + 1;
        this.num2 = Math.floor(Math.random() * 10) + 1;
        this.correctAnswer = this.num1 + this.num2;

        const mathQuestion = document.getElementById('mathQuestion');
        mathQuestion.textContent = `Quanto é ${this.num1} + ${this.num2}?`;
    }

    setupValidation() {
        const mathAnswerInput = document.getElementById('mathAnswer');
        const mathFeedback = document.getElementById('mathFeedback');

        mathAnswerInput.addEventListener('input', (e) => {
            const userAnswer = parseInt(e.target.value);
            
            if (isNaN(userAnswer)) {
                mathFeedback.textContent = '';
                mathFeedback.className = 'feedback';
                return;
            }

            if (userAnswer === this.correctAnswer) {
                mathFeedback.textContent = '✓ Resposta correta!';
                mathFeedback.className = 'feedback correct';
            } else {
                mathFeedback.textContent = '✗ Resposta incorreta. Tente novamente.';
                mathFeedback.className = 'feedback incorrect';
            }
        });
    }

    validateForm() {
        const userAnswer = parseInt(document.getElementById('mathAnswer').value);
        return !isNaN(userAnswer) && userAnswer === this.correctAnswer;
    }
}

// Inicializar verificação matemática
const mathVerification = new MathVerification();

// Validação do Formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!mathVerification.validateForm()) {
        alert('Por favor, resolva corretamente a verificação matemática antes de enviar.');
        return;
    }

    // Simular envio do formulário
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData);
    
    console.log('Dados do formulário:', formObject);
    alert('Formulário enviado com sucesso!');
    
    // Limpar formulário e gerar novo problema
    this.reset();
    mathVerification.generateProblem();
    document.getElementById('mathFeedback').textContent = '';
});

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar classe de scroll no header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--white)';
        header.style.backdropFilter = 'none';
    }
});