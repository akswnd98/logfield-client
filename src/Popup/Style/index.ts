import OwlStyle from '@/webowl/OwlManipulator/OwlStyle';
import styles from './index.scss?inline';

export default class StylePopup extends OwlStyle {
  constructor () {
    super({ styles });
  }
}
