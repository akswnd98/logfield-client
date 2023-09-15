import OwlComponent from '@/webowl/OwlComponent';
import Page from './Page';
import './index.scss';
import Title from './Page/Title';
import Body from './Page/Body';
import { html, render } from 'lit-html';
import find from '@/utils/api/post/find';

const root = document.getElementById('root')!;
const params = new URLSearchParams(document.location.search);
const idStr = params.get('id');
if (idStr === null) {
  throw 'no id in search params';
}
const id = Number(idStr);

(async () => {
  const pageComponent = new OwlComponent();
  const titleComponent = new OwlComponent();
  const bodyComponent = new OwlComponent();


  const res = await find(id);

  await new Page({
    idTreeNodes: [{
      id: 'title',
      component: titleComponent,
      manipulator: new Title({ title: res.title })
    }, {
      id: 'body',
      component: bodyComponent,
      manipulator: new Body({ body: res.body })
    }]
  }).manipulate(pageComponent);
  root.appendChild(pageComponent);
})();
