import OwlOperatorGenerator from '@/owl-mo/OwlOperatorGenerator';
import OwlComponent from '@/owl-mo/OwlComponent';
import RenderMain from '.';

export class RenderMainGenerator extends OwlOperatorGenerator<OwlComponent> {
  generate (data: OwlComponent) {
    return new RenderMain({ data });
  }
}
