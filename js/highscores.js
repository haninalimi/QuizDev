document.addEventListener('DOMContentLoaded', () => {
    const highscoresList = document.getElementById('all-highscores-list');
    const clearScoresBtn = document.getElementById('clear-scores-btn');
    
    displayAllHighscores();
    
    clearScoresBtn.addEventListener('click', () => {
        if (confirm('Êtes-vous sûr de vouloir effacer tous les scores ? Cette action est irréversible.')) {
            localStorage.removeItem('quizHighscores');
            displayAllHighscores();
        }
    });
    
    function displayAllHighscores() {
        const highscores = JSON.parse(localStorage.getItem('quizHighscores')) || [];
        
        if (highscores.length === 0) {
            highscoresList.innerHTML = `
                <div class="no-scores">
                    <i class="fas fa-trophy" style="font-size: 3rem; margin-bottom: 20px; color: var(--gray);"></i>
                    <p>Aucun score enregistré pour le moment.</p>
                    <p>Complétez un quiz pour apparaître dans le classement !</p>
                </div>
            `;
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
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
            const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
            
            let rowClass = '';
            if (index === 0) rowClass = 'first-place';
            else if (index === 1) rowClass = 'second-place';
            else if (index === 2) rowClass = 'third-place';
            
            html += `
                <tr class="${rowClass}">
                    <td class="score-rank">
                        ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                    </td>
                    <td class="score-value-high">
                        <strong>${score.score}/${score.totalQuestions}</strong><br>
                        <small>${score.percentage}%</small>
                    </td>
                    <td>${subjectNames[score.subject] || score.subject}</td>
                    <td>
                        <span class="level-badge ${score.level}">${levelNames[score.level] || score.level}</span>
                    </td>
                    <td>
                        ${formattedDate}<br>
                        <small>${formattedTime}</small>
                    </td>
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