
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
<path d="M8.0625 48.5625V45.1875C8.0625 41.4595 11.0846 38.4375 14.8125 38.4375H28.3125C32.0404 38.4375 35.0625 41.4595 35.0625 45.1875V48.5625M35.0625 31.6875H45.1875C48.9155 31.6875 51.9375 34.7096 51.9375 38.4375V41.8125M28.3125 21.5625C28.3125 25.2904 25.2904 28.3125 21.5625 28.3125C17.8346 28.3125 14.8125 25.2904 14.8125 21.5625C14.8125 17.8346 17.8346 14.8125 21.5625 14.8125C25.2904 14.8125 28.3125 17.8346 28.3125 21.5625Z" stroke="#353739" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M45.1875 19.875C45.1875 22.671 42.9209 24.9375 40.125 24.9375C37.3291 24.9375 35.0625 22.671 35.0625 19.875C35.0625 17.079 37.3291 14.8125 40.125 14.8125C42.9209 14.8125 45.1875 17.079 45.1875 19.875Z" stroke="#353739" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
`;

class LIBaccountsThickstrokeOff extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-accounts-thickstroke-off', LIBaccountsThickstrokeOff);