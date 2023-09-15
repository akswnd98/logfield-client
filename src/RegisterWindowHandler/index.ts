export default abstract class RegisterWindowHandler<Event extends keyof WindowEventMap> {
  protected abstract eventName: Event;

  register () {
    window.addEventListener(this.eventName, async (e: WindowEventMap[Event]) => {
      await this.handle(e);
    });
  }

  protected abstract handle (e: WindowEventMap[Event]): Promise<void>;
}
