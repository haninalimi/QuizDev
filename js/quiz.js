let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedSubject = '';
let selectedLevel = '';
let quizTimer = null;

const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const currentSubjectSpan = document.getElementById('current-subject');
const currentLevelSpan = document.getElementById('current-level');

document.addEventListener('DOMContentLoaded', () => {
    selectedSubject = localStorage.getItem('selectedSubject');
    selectedLevel = localStorage.getItem('selectedLevel');
    
    if (!selectedSubject || !selectedLevel) {
        window.location.href = 'index.html';
        return;
    }
    
    quizTimer = new QuizTimer();
    
    startQuiz(selectedSubject, selectedLevel);
});

function startQuiz(subject, level) {
    if (!quizData[subject] || !quizData[subject][level]) {
        alert("Ce niveau de quiz n'est pas encore disponible. Démarrage en mode 'Débutant' HTML.");
        subject = 'html';
        level = 'beginner';
    }

    currentQuiz = quizData[subject][level];
    currentQuestionIndex = 0;
    score = 0;

    const subjectNames = {
        'html': 'HTML',
        'css': 'CSS',
        'js': 'JavaScript'
    };
    
    const levelNames = {
        'beginner': 'Débutant',
        'intermediate': 'Intermédiaire',
        'expert': 'Expert'
    };

    currentSubjectSpan.textContent = subjectNames[subject];
    currentLevelSpan.textContent = levelNames[level];
    
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    
    questionText.textContent = question.q;
    nextButton.classList.add('hidden');
    nextButton.disabled = true;
    updateQuestionCounter();
    updateProgressBar();
    optionsContainer.innerHTML = '';

    quizTimer.startTimer(currentQuestionIndex, handleTimeOut);

    const optionLetters = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        
        const letterSpan = document.createElement('span');
        letterSpan.classList.add('option-letter');
        letterSpan.textContent = optionLetters[index];
        
        const textSpan = document.createElement('span');
        textSpan.textContent = option;
        
        button.appendChild(letterSpan);
        button.appendChild(textSpan);
        
        button.addEventListener('click', () => checkAnswer(button, option, question.a));
        optionsContainer.appendChild(button);
    });
}

function handleTimeOut(questionIndex) {
    if (questionIndex !== currentQuestionIndex) return;
    
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
        
        const optionText = button.querySelector('span:last-child').textContent;
        if (optionText === currentQuiz[currentQuestionIndex].a) {
            button.classList.add('correct');
        }
    });
    
    const penalty = quizTimer.baseTime * quizTimer.penaltyPerSecond;
    score = Math.max(0, score - penalty);
    
    nextButton.classList.remove('hidden');
    nextButton.disabled = false;
}

function checkAnswer(selectedButton, selectedAnswer, correctAnswer) {
    quizTimer.stopTimer();
    
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });

    let pointsEarned = 1;
    
    if (selectedAnswer === correctAnswer) {
        pointsEarned += quizTimer.getTimeBonus();
        score += pointsEarned;
        selectedButton.classList.add('correct');
    } else {
        const penalty = quizTimer.getTimePenalty();
        score = Math.max(0, score - penalty);
        selectedButton.classList.add('wrong');
        
        Array.from(optionsContainer.children).forEach(button => {
            if (button.querySelector('span:last-child').textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }

    nextButton.classList.remove('hidden');
    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        loadQuestion();
    } else {
        const finalScore = Math.round(score * 10) / 10; 
        
        localStorage.setItem('quizScore', finalScore);
        localStorage.setItem('totalQuestions', currentQuiz.length);
        localStorage.setItem('selectedSubject', selectedSubject);
        localStorage.setItem('selectedLevel', selectedLevel);
        
        saveHighScore(finalScore, selectedSubject, selectedLevel, currentQuiz.length);
        
        window.location.href = 'results.html';
    }
});

function updateQuestionCounter() {
    questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${currentQuiz.length}`;
}

function updateProgressBar() {
    const percentage = ((currentQuestionIndex) / currentQuiz.length) * 100;
    progressBar.style.width = `${percentage}%`;
}

function saveHighScore(score, subject, level, totalQuestions) {
    const highscores = JSON.parse(localStorage.getItem('quizHighscores')) || [];
    
    const newScore = {
        score: score,
        subject: subject,
        level: level,
        totalQuestions: totalQuestions,
        percentage: Math.round((score / totalQuestions) * 100),
        date: new Date().toISOString(),
        timestamp: Date.now()
    };
    
    highscores.push(newScore);
    
    highscores.sort((a, b) => b.percentage - a.percentage);
    const topScores = highscores.slice(0, 10);
    
    localStorage.setItem('quizHighscores', JSON.stringify(topScores));
}

progressBar.style.width = '0%';