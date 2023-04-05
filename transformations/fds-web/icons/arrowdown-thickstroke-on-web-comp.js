
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      width: 42px;
      height: 42px;
    }
      :host, #root {
        display: inline-block;
      }
        #root, svg {
          width: 100%;
          height: 100%;
        }
          svg, svg * {
            fill: var( --color, #222 ) !important;
          }
      .error {
        font-family: sans-serif;
        font-size: 12px;
        color: #f00;
      }
  </style>
  <div id="root"><svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 13.625V47.375M30 47.375L43.5 33.875M30 47.375L16.5 33.875" stroke="#353739" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
`;

class LIBarrowdownThickstrokeOn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-arrowdown-thickstroke-on', LIBarrowdownThickstrokeOn);