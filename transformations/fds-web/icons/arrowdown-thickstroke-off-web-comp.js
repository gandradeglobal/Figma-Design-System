
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
<path d="M28.8749 13.625V47.375M28.8749 47.375L42.3748 31.625M28.8749 47.375L15.3749 31.625" stroke="#353739" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
`;

class LIBarrowdownThickstrokeOff extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-arrowdown-thickstroke-off', LIBarrowdownThickstrokeOff);