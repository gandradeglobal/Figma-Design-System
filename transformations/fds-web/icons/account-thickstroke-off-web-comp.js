
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
<path d="M11.4375 51.9375V45.1875C11.4375 41.4595 14.4596 38.4375 18.1875 38.4375H41.8125C45.5405 38.4375 48.5625 41.4595 48.5625 45.1875V51.9375M38.4375 19.875C38.4375 24.5349 34.6599 28.3125 30 28.3125C25.3401 28.3125 21.5625 24.5349 21.5625 19.875C21.5625 15.2151 25.3401 11.4375 30 11.4375C34.6599 11.4375 38.4375 15.2151 38.4375 19.875Z" stroke="#353739" stroke-linecap="round"/>
</svg>
</div>
`;

class LIBaccountThickstrokeOff extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-account-thickstroke-off', LIBaccountThickstrokeOff);