document.addEventListener('DOMContentLoaded', () => {
    const score = parseInt(localStorage.getItem('quizScore')) || 0;
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
    
    finalScoreSpan.textContent = score;
    totalQuestionsSpan.textContent = totalQuestions;

    const scoreCircle = document.querySelector('.score-circle');
    const percentage = (score / totalQuestions) * 100;
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
});