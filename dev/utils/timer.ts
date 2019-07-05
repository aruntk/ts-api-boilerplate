export class Timer {
  private readonly startTime = new Date().getTime()

  // tslint:disable-next-line:completed-docs
  public elapsed() {
    return new Date().getTime() - this.startTime
  }
}
