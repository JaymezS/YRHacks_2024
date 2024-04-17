class Timer {

  // the current time left on the timer in seconds
  currentTime;
  timerInterval;

  constructor(time) {
    this.currentTime = time;
  }


  startTimer() {
    this.timerInterval = setInterval(() => {
      this.currentTime -= 1;
      if (this.currentTime <= 0) {
        clearInterval()
      }
    }, 1000); 
  }
}