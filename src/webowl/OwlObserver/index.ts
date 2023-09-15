export default abstract class OwlObserver<NotificationType> {
  abstract observe (data: NotificationType): Promise<void>;
}
