// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Dropdown functionality for mobile
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 767) {
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-toggle') && !e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Botões de login/register
document.querySelectorAll('.login-btn, .register-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Funcionalidade de ' + this.textContent + ' em desenvolvimento!');
    });
});

// Verificação Matemática (mantida do código anterior)
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
        if (mathQuestion) {
            mathQuestion.textContent = `Quanto é ${this.num1} + ${this.num2}?`;
        }
    }

    setupValidation() {
        const mathAnswerInput = document.getElementById('mathAnswer');
        const mathFeedback = document.getElementById('mathFeedback');

        if (mathAnswerInput && mathFeedback) {
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
    }

    validateForm() {
        const userAnswer = parseInt(document.getElementById('mathAnswer').value);
        return !isNaN(userAnswer) && userAnswer === this.correctAnswer;
    }
}

// Inicializar verificação matemática
const mathVerification = new MathVerification();

// Validação do Formulário
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!mathVerification.validateForm()) {
            alert('Por favor, resolva corretamente a verificação matemática antes de enviar.');
            return;
        }

        // Simular envio do formulário
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData);
        
        console.log('Dados do formulário:', formObject);
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        
        // Limpar formulário e gerar novo problema
        this.reset();
        mathVerification.generateProblem();
        const mathFeedback = document.getElementById('mathFeedback');
        if (mathFeedback) {
            mathFeedback.textContent = '';
        }
    });
}

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

// Botões de aplicar nas vagas
document.querySelectorAll('.aplicar-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const vagaTitle = this.closest('.vaga-card').querySelector('h3').textContent;
        alert('Candidatura para "' + vagaTitle + '" enviada com sucesso!');
    });
});

// Interação com categorias (opcional)
document.querySelectorAll('.categoria-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});
