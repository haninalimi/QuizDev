class QuizTimer {
    constructor() {
        this.timeLeft = 30;
        this.timerInterval = null;
        this.currentQuestionIndex = 0;
        this.baseTime = 30;
        this.penaltyPerSecond = 0.1; 
    }

    startTimer(questionIndex, onTimeOut) {
        this.currentQuestionIndex = questionIndex;
        this.timeLeft = this.baseTime;
        this.updateTimerDisplay();
        
        const timerElement = document.getElementById('timer');
        timerElement.parentElement.className = 'timer-container';
        
        clearInterval(this.timerInterval);
        
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 10) {
                timerElement.parentElement.classList.add('danger');
            } else if (this.timeLeft <= 15) {
                timerElement.parentElement.classList.add('warning');
            }
            
            if (this.timeLeft <= 0) {
                this.stopTimer();
                onTimeOut(this.currentQuestionIndex);
            }
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = this.timeLeft;
        }
    }

    getTimePenalty() {
     
        return (this.baseTime - this.timeLeft) * this.penaltyPerSecond;
    }

    getTimeBonus() {
        return this.timeLeft > 20 ? 0.5 : 0;
    }

    reset() {
        this.stopTimer();
        this.timeLeft = this.baseTime;
        this.updateTimerDisplay();
    }
}