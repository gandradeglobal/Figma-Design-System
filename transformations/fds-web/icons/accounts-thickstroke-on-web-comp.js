
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
<path d="M6.375 50.75V44C6.375 40.272 9.39708 37.25 13.125 37.25H33.375C37.103 37.25 40.125 40.272 40.125 44V50.75M30 20.375C30 24.1029 26.9779 27.125 23.25 27.125C19.5221 27.125 16.5 24.1029 16.5 20.375C16.5 16.6471 19.5221 13.625 23.25 13.625C26.9779 13.625 30 16.6471 30 20.375Z" stroke="#353739" stroke-width="2" stroke-linecap="round"/>
<path d="M46.875 13.625C46.875 15.4889 45.364 17 43.5 17C41.636 17 40.125 15.4889 40.125 13.625C40.125 11.7611 41.636 10.25 43.5 10.25C45.364 10.25 46.875 11.7611 46.875 13.625Z" stroke="#353739" stroke-width="2" stroke-linecap="round"/>
<path d="M40.125 27.125H46.875C50.603 27.125 53.625 30.1471 53.625 33.875V37.2499" stroke="#353739" stroke-width="2" stroke-linecap="round"/>
</svg>
</div>
`;

class LIBaccountsThickstrokeOn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-accounts-thickstroke-on', LIBaccountsThickstrokeOn);