import RenderApp from './App/Render';
import RenderAppGenerator from './App/Render/generator';
import AttachApp from './App/Attach';
import AttachAppGenerator from './App/Attach/generator';
import './index.scss';
import OwlComponentWrapper from './owl-mo/OwlComponentWrapper';
import { RenderMainGenerator } from './App/Main/Render/generator';
import RenderMain from './App/Main/Render';
import AttachMainGenerator from './App/Main/Attach/generator';
import AttachMain from './App/Main/Attach';
import OwlRegisterParentComponent from './owl-mo/OwlOperator/OwlRegisterParentComponent';
import OwlRegisterParentComponentGenerator from './owl-mo/OwlOperatorGenerator/OwlRegisterParentComponentGenerator';

const root = document.getElementById('root')! as HTMLDivElement;

const appComponentWrapper = new OwlComponentWrapper();
const renderApp = appComponentWrapper.generateOperator(new RenderAppGenerator()) as RenderApp;
const attachApp = appComponentWrapper.generateOperator(new AttachAppGenerator({ rootElement: root })) as AttachApp;
const registerParentApp = appComponentWrapper.generateOperator(new OwlRegisterParentComponentGenerator()) as OwlRegisterParentComponent;

const mainComponentWrapper = new OwlComponentWrapper();
const renderMain = mainComponentWrapper.generateOperator(new RenderMainGenerator()) as RenderMain;
const attachMain = mainComponentWrapper.generateOperator(new AttachMainGenerator({ registerParentComponent: registerParentApp })) as AttachMain;

renderApp.render();
attachApp.attach();

renderMain.render();
attachMain.attach();
