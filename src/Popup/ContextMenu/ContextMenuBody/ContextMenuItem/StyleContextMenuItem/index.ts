import styles from './index.scss?inline';
import OwlStyle from '@/webowl/OwlManipulator/OwlStyle';

export default class StyleContextMenuItem extends OwlStyle {
  constructor () {
    super({ styles });
  }
}
