class CountdownTimer {
  // the current time left on the timer in seconds
  currentTime;
  timer;
  displayElement;
  TOTAL_TIME;

  // GETTERS AND SETTERS

  setDisplayElement(htmlTextElement) {
    this.displayElement = htmlTextElement;
  }
  setTime(time) {
    this.pauseTimer();
    this.currentTime = time
    this.TOTAL_TIME = time
  }
  getTime() {
    return this.currentTime;
  }



  constructor(time) {
    this.currentTime = time;
  }
  
  
  // Interface Code
  pauseTimer() {
    if (this.timer) {
      clearInterval(this.timer)  
      this.timer = undefined;
    }
  }
  
  
  runTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.currentTime -= 1;
        console.log("ran")
        if (this.currentTime <= 0) {
          this.currentTime = 0;
          this.pauseTimer()
        }
        this.displayTime()
      }, 1000)
    }
  }
  
  resetTimer() {
    this.setTime(this.TOTAL_TIME);
    this.displayTime();
  }
  
  getTimeInHourFormat() {
    const HOURS = Math.floor(this.currentTime / 3600);
    const MINUTES = Math.floor((this.currentTime - HOURS * 3600) / 60);
    const SECONDS = this.currentTime - HOURS * 3600 - MINUTES * 60;
    return [HOURS, MINUTES, SECONDS];
  }


  displayTime() {
    let message = ""
    const TIME = this.getTimeInHourFormat();
    for (let i = 0; i < 3; i++) {
      if (TIME[i] < 10) {
        message += `0${TIME[i]}`
      } else {
        message += String(TIME[i])
      }

      if (i != 2) {
        message += ":"
      }
    }
    this.displayElement.innerText = message;
  }

}
