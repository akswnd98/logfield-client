import OwlStyle from '@/webowl/OwlManipulator/OwlStyle';
import styles from './index.scss?inline';

export default class StyleMyPage extends OwlStyle {
  constructor () {
    super({ styles: styles.toString() });
  }
}
