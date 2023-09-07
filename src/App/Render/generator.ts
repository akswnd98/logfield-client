import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperatorGenerator from '@/owl-mo/OwlOperatorGenerator';
import RenderApp from '.';

export default class RenderAppGenerator extends OwlOperatorGenerator<OwlComponent> {
  generate (data: OwlComponent) {
    return new RenderApp({ data });
  }
}
