import styles from './index.scss?inline';
import OwlStyle from '@/webowl/OwlManipulator/OwlStyle';

export default class StyleVisNetwork extends OwlStyle {
  constructor () {
    super({ styles });
  }
}
