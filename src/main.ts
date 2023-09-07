import AttachApp, { AttachAppGenerator } from './App/AttachApp';
import RenderApp, { RenderAppGenerator } from './App/RenderApp';
import './index.scss';
import OwlComponentWrapper from './owl-render/OwlComponentWrapper';

const root = document.getElementById('root')! as HTMLDivElement;

const appComponentWrapper = new OwlComponentWrapper();
const renderApp = appComponentWrapper.generateOperator(new RenderAppGenerator()) as RenderApp;
const attachApp = appComponentWrapper.generateOperator(new AttachAppGenerator({ rootElement: root })) as AttachApp;

renderApp.render();
attachApp.attach();
