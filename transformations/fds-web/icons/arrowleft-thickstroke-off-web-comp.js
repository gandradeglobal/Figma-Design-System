
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
  <div id="root"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.875 28.875H13.125M13.125 28.875L28.875 42.3751M13.125 28.875L28.875 15.375" stroke="#353739" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
`;

class LIBarrowleftThickstrokeOff extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-arrowleft-thickstroke-off', LIBarrowleftThickstrokeOff);