let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedSubject = '';
let selectedLevel = '';
let quizTimer = null;

document.addEventListener('DOMContentLoaded', () => {
    selectedSubject = localStorage.getItem('selectedSubject') || 'html';
    selectedLevel = localStorage.getItem('selectedLevel') || 'beginner';
    
    quizTimer = new QuizTimer();
    startQuiz(selectedSubject, selectedLevel);
});

async function startQuiz(subject, level) {
    try {
        showLoading();
        
        const apiUrl = `http://localhost/QUIZDEV/api/get_questions.php?subject=${subject}&level=${level}`;
        console.log('URL appelée:', apiUrl);
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
            currentQuiz = data.questions;
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

            document.getElementById('current-subject').textContent = subjectNames[subject];
            document.getElementById('current-level').textContent = levelNames[level];
            
            hideLoading();
            loadQuestion();
        } else {
            throw new Error(data.error || 'Erreur inconnue');
        }
    } catch (error) {
        console.error('Erreur détaillée:', error);
        hideLoading();
        alert('Erreur lors du chargement des questions: ' + error.message);
        window.location.href = 'levels.html';
    }
}

function loadQuestion() {
    if (!currentQuiz[currentQuestionIndex]) return;

    const question = currentQuiz[currentQuestionIndex];
    
    document.getElementById('question-text').textContent = question.q;
    document.getElementById('next-button').classList.add('hidden');
    document.getElementById('next-button').disabled = true;
    updateQuestionCounter();
    updateProgressBar();
    
    const optionsContainer = document.getElementById('options-container');
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
    
    const optionsContainer = document.getElementById('options-container');
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
        
        const optionText = button.querySelector('span:last-child').textContent;
        if (optionText === currentQuiz[currentQuestionIndex].a) {
            button.classList.add('correct');
        }
    });
    
    const penalty = quizTimer.baseTime * quizTimer.penaltyPerSecond;
    score = Math.max(0, score - penalty);
    
    const nextButton = document.getElementById('next-button');
    nextButton.classList.remove('hidden');
    nextButton.disabled = false;
}

function checkAnswer(selectedButton, selectedAnswer, correctAnswer) {
    quizTimer.stopTimer();
    
    const optionsContainer = document.getElementById('options-container');
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

    const nextButton = document.getElementById('next-button');
    nextButton.classList.remove('hidden');
    nextButton.disabled = false;
}

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
});

function updateQuestionCounter() {
    document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1}/${currentQuiz.length}`;
}

function updateProgressBar() {
    const percentage = ((currentQuestionIndex) / currentQuiz.length) * 100;
    document.getElementById('progress-bar').style.width = `${percentage}%`;
}

async function endQuiz() {
    const finalScore = Math.round(score * 10) / 10;
    
    localStorage.setItem('quizScore', finalScore);
    localStorage.setItem('totalQuestions', currentQuiz.length);
    localStorage.setItem('selectedSubject', selectedSubject);
    localStorage.setItem('selectedLevel', selectedLevel);
    
    await saveHighScore(finalScore, selectedSubject, selectedLevel, currentQuiz.length);
    
    window.location.href = 'results.html';
}

async function saveHighScore(score, subject, level, totalQuestions) {
    const playerName = await showCustomNamePrompt();
    if (!playerName) return; 
    
    const percentage = Math.round((score / totalQuestions) * 100);
    
    const scoreData = {
        player_name: playerName,
        subject: subject,
        level: level,
        score: score,
        total_questions: totalQuestions,
        percentage: percentage
    };

    try {
        const response = await fetch('http://localhost/QUIZDEV/api/save_score.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(scoreData)
        });

        const result = await response.json();
        if (result.success) {
            console.log('Score sauvegardé avec succès');
            showSuccessMessage(playerName);
        }
    } catch (error) {
        console.error('Erreur sauvegarde score:', error);
    }
    
    saveToLocalStorage(score, subject, level, totalQuestions, percentage, playerName);
}

function showCustomNamePrompt() {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;

        const dialog = document.createElement('div');
        dialog.style.cssText = `
            background: white;
            padding: 40px 30px;
            border-radius: 20px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            text-align: center;
            max-width: 450px;
            width: 90%;
            animation: slideUp 0.4s ease;
            border: 3px solid var(--primary);
        `;

        dialog.innerHTML = `
            <div style="margin-bottom: 25px;">
                <div style="font-size: 4rem; margin-bottom: 15px;">🎉</div>
                <h2 style="color: var(--primary); margin-bottom: 10px; font-size: 1.8rem; font-weight: 800;">FÉLICITATIONS !</h2>
                <p style="color: var(--gray); margin-bottom: 5px; font-size: 1.1rem;">Vous avez terminé le quiz avec succès !</p>
                <p style="color: var(--dark); margin-bottom: 0; font-weight: 600; font-size: 1.1rem;">Score: ${Math.round(score * 10) / 10}/${currentQuiz.length}</p>
            </div>
            
            <div style="margin-bottom: 25px;">
                <label style="display: block; color: var(--dark); margin-bottom: 10px; font-weight: 600; font-size: 1.1rem;">
                    Entrez votre nom pour sauvegarder votre score
                </label>
                <input type="text" 
                       id="player-name-input" 
                       placeholder="Votre nom..." 
                       maxlength="20"
                       style="width: 100%; 
                              padding: 15px 20px; 
                              border: 2px solid var(--primary-light); 
                              border-radius: 12px; 
                              font-size: 1.1rem;
                              text-align: center;
                              outline: none;
                              transition: all 0.3s ease;
                              background: #f8f9ff;"
                       onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(67, 97, 238, 0.2)'; this.style.background='white';"
                       onblur="this.style.borderColor='var(--primary-light)'; this.style.boxShadow='none'; this.style.background='#f8f9ff';">
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button id="cancel-btn" 
                        style="padding: 15px 30px; 
                               border: 2px solid var(--gray); 
                               background: white; 
                               color: var(--gray); 
                               border-radius: 12px; 
                               cursor: pointer;
                               font-size: 1.1rem;
                               font-weight: 600;
                               transition: all 0.3s ease;
                               flex: 1;">
                    Annuler
                </button>
                <button id="save-btn" 
                        style="padding: 15px 30px; 
                               background: linear-gradient(135deg, var(--primary), var(--secondary)); 
                               color: white; 
                               border: none; 
                               border-radius: 12px; 
                               cursor: pointer;
                               font-size: 1.1rem;
                               font-weight: 600;
                               transition: all 0.3s ease;
                               box-shadow: 0 5px 20px rgba(67, 97, 238, 0.4);
                               flex: 1;">
                    💾 Sauvegarder
                </button>
            </div>
        `;

        document.body.appendChild(overlay);
        overlay.appendChild(dialog);

        const input = dialog.querySelector('#player-name-input');
        setTimeout(() => input.focus(), 100);

        const saveBtn = dialog.querySelector('#save-btn');
        const cancelBtn = dialog.querySelector('#cancel-btn');

        const saveName = () => {
            const name = input.value.trim();
            if (name) {
                document.body.removeChild(overlay);
                resolve(name);
            } else {
                input.style.borderColor = 'var(--danger)';
                input.style.boxShadow = '0 0 0 3px rgba(247, 37, 133, 0.2)';
                input.placeholder = 'Veuillez entrer un nom';
                input.value = '';
                
                input.style.animation = 'shake 0.5s ease';
                setTimeout(() => input.style.animation = '', 500);
            }
        };

        const cancel = () => {
            document.body.removeChild(overlay);
            resolve('Anonyme');
        };

        saveBtn.addEventListener('click', saveName);
        cancelBtn.addEventListener('click', cancel);
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveName();
            }
        });

        overlay.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                cancel();
            }
        });
    });
}

function showSuccessMessage(playerName) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4cc9f0, #4895ef);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(76, 201, 240, 0.4);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        font-weight: 600;
    `;
    messageDiv.textContent = `✅ Score sauvegardé pour ${playerName} !`;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            if (document.body.contains(messageDiv)) {
                document.body.removeChild(messageDiv);
            }
        }, 500);
    }, 3000);
}

function saveToLocalStorage(score, subject, level, totalQuestions, percentage, playerName) {
    const highscores = JSON.parse(localStorage.getItem('quizHighscores')) || [];
    
    const newScore = {
        player_name: playerName,
        score: score,
        subject: subject,
        level: level,
        totalQuestions: totalQuestions,
        percentage: percentage,
        date: new Date().toISOString()
    };
    
    highscores.push(newScore);
    highscores.sort((a, b) => b.percentage - a.percentage);
    const topScores = highscores.slice(0, 10);
    
    localStorage.setItem('quizHighscores', JSON.stringify(topScores));
}

function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading';
    loadingDiv.innerHTML = '<div class="loading-spinner">Chargement des questions...</div>';
    loadingDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    document.body.appendChild(loadingDiv);
}

function hideLoading() {
    const loadingDiv = document.getElementById('loading');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes slideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(style);