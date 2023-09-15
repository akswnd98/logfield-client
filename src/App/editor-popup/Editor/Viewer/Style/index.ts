import OwlStyle from '@/webowl/OwlManipulator/OwlStyle';
import styles from './index.scss?inline';

export default class StyleViewer extends OwlStyle {
  constructor () {
    super({ styles });
  }
}
