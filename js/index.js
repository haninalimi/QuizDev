const subjectCards = document.querySelectorAll('.subject-card');

subjectCards.forEach(card => {
    card.addEventListener('click', () => {
        const subject = card.getAttribute('data-subject');
        localStorage.setItem('selectedSubject', subject);
        window.location.href = 'levels.html';
    });
});