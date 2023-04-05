
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
<path d="M13.125 50.25V43.5C13.125 39.772 16.1471 36.75 19.875 36.75H40.125C43.853 36.75 46.875 39.772 46.875 43.5V50.25M36.75 19.875C36.75 23.6029 33.7279 26.625 30 26.625C26.2721 26.625 23.25 23.6029 23.25 19.875C23.25 16.1471 26.2721 13.125 30 13.125C33.7279 13.125 36.75 16.1471 36.75 19.875Z" stroke="#353739" stroke-width="2" stroke-linecap="round"/>
</svg>
</div>
`;

class LIBaccountThickstrokeOn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-account-thickstroke-on', LIBaccountThickstrokeOn);