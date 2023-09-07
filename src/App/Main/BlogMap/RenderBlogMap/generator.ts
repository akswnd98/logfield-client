import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperatorGenerator from '@/owl-mo/OwlOperatorGenerator';
import RenderBlogMap from '.';

export class RenderBlogMapGenerator extends OwlOperatorGenerator<OwlComponent> {
  generate (data: OwlComponent) {
    return new RenderBlogMap({ data });
  }
}
