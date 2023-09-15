import OwlStyle from '@/webowl/OwlManipulator/OwlStyle';
import styles from 'katex/dist/katex.min.css?inline';

export default class StyleKatex extends OwlStyle {
  constructor () {
    super({ styles });
  }
}
