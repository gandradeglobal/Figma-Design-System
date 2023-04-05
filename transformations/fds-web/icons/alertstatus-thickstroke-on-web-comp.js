
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
<path d="M27.0766 13.6297L7.60762 47.376C6.30956 49.6258 7.93341 52.4375 10.531 52.4375H49.469C52.0664 52.4375 53.6905 49.6258 52.3924 47.376L32.9234 13.6297C31.6246 11.3784 28.3754 11.3784 27.0766 13.6297Z" stroke="#353739" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 33.875V23.75M30 44V43.9798" stroke="#353739" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
`;

class LIBalertstatusThickstrokeOn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-alertstatus-thickstroke-on', LIBalertstatusThickstrokeOn);