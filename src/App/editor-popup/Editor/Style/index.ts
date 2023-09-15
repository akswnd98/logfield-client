import OwlStyle from '@/webowl/OwlManipulator/OwlStyle';
import styles from './index.scss?inline';

export default class StyleEditor extends OwlStyle {
  constructor () {
    super({ styles });
  }
}
