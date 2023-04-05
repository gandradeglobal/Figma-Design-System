
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
<path d="M11.4377 51.9375V45.1875C11.4377 41.4595 14.4598 38.4375 18.1877 38.4375H41.8128M38.4378 19.875C38.4378 24.5349 34.6601 28.3125 30.0002 28.3125C25.3403 28.3125 21.5627 24.5349 21.5627 19.875C21.5627 15.2151 25.3403 11.4375 30.0002 11.4375C34.6601 11.4375 38.4378 15.2151 38.4378 19.875ZM46.3853 52.8994L52.4009 46.0245C52.8781 45.4788 52.4907 44.6249 51.7657 44.6249H39.7345C39.0096 44.6249 38.6225 45.4788 39.0997 46.0245L45.1153 52.8994C45.4514 53.2834 46.0491 53.2834 46.3853 52.8994Z" stroke="#353739" stroke-linecap="round"/>
</svg>
</div>
`;

class LIBaccountdropdownThickstrokeOff extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-accountdropdown-thickstroke-off', LIBaccountdropdownThickstrokeOff);