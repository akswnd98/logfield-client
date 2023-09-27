import OwlStyle from '@/webowl/OwlManipulator/OwlStyle';
import styles from './index.scss?inline';

export default class StyleBody extends OwlStyle {
  constructor () {
    super({ styles });
  }
}
