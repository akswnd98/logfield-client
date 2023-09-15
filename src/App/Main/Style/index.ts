import OwlStyle from '@/webowl/OwlManipulator/OwlStyle';
import styles from './index.scss?inline';

export default class StyleMain extends OwlStyle {
  constructor () {
    super({ styles: styles.toString() });
  }
}
