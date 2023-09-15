export default class OwlComponent extends HTMLElement {
  shadowRoot: ShadowRoot;

  constructor () {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
  }
}
customElements.define('owl-component', OwlComponent);
