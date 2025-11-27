document.addEventListener('DOMContentLoaded', () => {
    const score = parseFloat(localStorage.getItem('quizScore')) || 0;
    const totalQuestions = parseInt(localStorage.getItem('totalQuestions')) || 0;
    const selectedSubject = localStorage.getItem('selectedSubject');
    const selectedLevel = localStorage.getItem('selectedLevel');
    
    if (totalQuestions === 0) {
        window.location.href = 'index.html';
        return;
    }
    
    const finalScoreSpan = document.getElementById('final-score');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const feedbackMessage = document.getElementById('feedback-message');
    const viewHighscoresBtn = document.getElementById('view-highscores-btn');
    const highscoresSection = document.getElementById('highscores-section');
    const backToResultsBtn = document.getElementById('back-to-results');
    const highscoresList = document.getElementById('highscores-list');
    
    finalScoreSpan.textContent = score;
    totalQuestionsSpan.textContent = totalQuestions;

    const scoreCircle = document.querySelector('.score-circle');
    const percentage = Math.round((score / totalQuestions) * 100);
    scoreCircle.style.background = `conic-gradient(var(--primary) ${percentage}%, #e9ecef ${percentage}%)`;

    let message = '';

    if (percentage === 100) {
        message = "✨ FÉLICITATIONS ! Un sans faute ! Vous êtes un(e) véritable expert(e) en " + selectedSubject.toUpperCase() + ". Votre projet est entre de bonnes mains !";
    } else if (percentage >= 80) {
        message = "🌟 Excellent travail ! Vous maîtrisez bien le sujet. Quelques détails à revoir pour la perfection.";
    } else if (percentage >= 50) {
        message = "👍 Bon départ ! Vous avez les bases. Continuez à pratiquer pour devenir un pro.";
    } else {
        message = "💡 Ne vous découragez pas ! Le développement web est un voyage. Reprenez le quiz et ciblez vos faiblesses.";
    }

    feedbackMessage.textContent = message;
    
    finalScoreSpan.classList.add('pulse');

    viewHighscoresBtn.addEventListener('click', showHighscores);
    backToResultsBtn.addEventListener('click', hideHighscores);

    function showHighscores() {
        document.querySelector('.results-content').classList.add('highscores-active');
        highscoresSection.classList.remove('hidden');
        displayHighscores();
    }

    function hideHighscores() {
        document.querySelector('.results-content').classList.remove('highscores-active');
        highscoresSection.classList.add('hidden');
    }

    function displayHighscores() {
        const highscores = JSON.parse(localStorage.getItem('quizHighscores')) || [];
        
        if (highscores.length === 0) {
            highscoresList.innerHTML = '<div class="no-scores">Aucun meilleur score enregistré pour le moment.</div>';
            return;
        }

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

        let html = `
            <table class="highscores-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Score</th>
                        <th>Sujet</th>
                        <th>Niveau</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
        `;

        highscores.forEach((score, index) => {
            const date = new Date(score.date);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            
            html += `
                <tr>
                    <td class="score-rank">${index + 1}</td>
                    <td class="score-value-high">${score.score}/${score.totalQuestions} (${score.percentage}%)</td>
                    <td>${subjectNames[score.subject] || score.subject}</td>
                    <td>${levelNames[score.level] || score.level}</td>
                    <td>${formattedDate}</td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;

        highscoresList.innerHTML = html;
    }
});