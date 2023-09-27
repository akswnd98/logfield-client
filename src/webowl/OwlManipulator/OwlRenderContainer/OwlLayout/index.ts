import OwlComponent from '@/webowl/OwlComponent';
import { ChildType } from '..';

export default abstract class OwlLayout {
  abstract manipulate (component: OwlComponent, children: ChildType[]): Promise<void>;
}
