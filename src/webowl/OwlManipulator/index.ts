import OwlComponent from '../OwlComponent';

export default abstract class OwlManipulator {
  abstract manipulate (component: OwlComponent): Promise<void>;
}
