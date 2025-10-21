document.addEventListener('DOMContentLoaded', () => {
    const selectedSubject = localStorage.getItem('selectedSubject');
    
    if (!selectedSubject) {
        window.location.href = 'index.html';
        return;
    }
    
    const subjectNames = {
        'html': 'HTML',
        'css': 'CSS',
        'js': 'JavaScript'
    };
    
    const selectedSubjectTitle = document.getElementById('selected-subject-title');
    selectedSubjectTitle.textContent = subjectNames[selectedSubject];
    
    const levelCards = document.querySelectorAll('.level-card');
    
    levelCards.forEach(card => {
        card.addEventListener('click', () => {
            const level = card.getAttribute('data-level');
            localStorage.setItem('selectedLevel', level);
            window.location.href = 'quiz.html';
        });
    });
});