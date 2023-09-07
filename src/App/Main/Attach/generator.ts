import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperator from '@/owl-mo/OwlOperator';
import OwlAttachGenerator from '@/owl-mo/OwlOperatorGenerator/OwlAttachGenerator';
import AttachMain from '.';

export default class AttachMainGenerator extends OwlAttachGenerator {
  generate (data: OwlComponent) {
    return new AttachMain({ data, parentComponent: this.parentComponent });
  }
}
