class Task {
  timer;
  constructor(duration) {
    this.timer = new CountdownTimer(duration);
  }
}