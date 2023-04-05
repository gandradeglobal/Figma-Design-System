
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
<path d="M28.3123 35.5625V25.4375M28.3123 42.3125V42.2899M46.12 44.1782L31.331 14.5999C30.0872 12.1124 26.5374 12.1124 25.2936 14.5999L10.5045 44.1782C9.38247 46.4222 11.0143 49.0625 13.5232 49.0625H43.1014C45.6104 49.0625 47.2422 46.4222 46.12 44.1782Z" stroke="#353739" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
`;

class LIBalertstatusThickstrokeOff extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-alertstatus-thickstroke-off', LIBalertstatusThickstrokeOff);