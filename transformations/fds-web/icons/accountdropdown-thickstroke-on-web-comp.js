
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
<path d="M9.75 50.25C9.75 52.114 11.2611 53.625 13.125 53.625C14.9889 53.625 16.5 52.114 16.5 50.25H9.75ZM16.5 50.25V43.5H9.75V50.25H16.5ZM19.875 40.125H43.5V33.375H19.875V40.125ZM33.375 19.875C33.375 21.739 31.8639 23.25 30 23.25V30C35.5919 30 40.125 25.4669 40.125 19.875H33.375ZM30 23.25C28.1361 23.25 26.625 21.7389 26.625 19.875H19.875C19.875 25.4669 24.4081 30 30 30V23.25ZM26.625 19.875C26.625 18.0111 28.1361 16.5 30 16.5V9.75C24.4081 9.75 19.875 14.2831 19.875 19.875H26.625ZM30 16.5C31.8639 16.5 33.375 18.011 33.375 19.875H40.125C40.125 14.2831 35.5919 9.75 30 9.75V16.5ZM43.5 40.125H50.25C50.25 36.3971 47.228 33.375 43.5 33.375V40.125ZM16.5 43.5C16.5 41.636 18.0111 40.125 19.875 40.125V33.375C14.2831 33.375 9.75 37.908 9.75 43.5H16.5Z" fill="#353739"/>
<path d="M52.0485 43.5H41.7015C41.0278 43.5 40.6258 44.2509 40.9995 44.8119L46.173 52.572C46.5068 53.0728 47.2432 53.0728 47.577 52.572L52.7505 44.8119C53.1241 44.2509 52.7222 43.5 52.0485 43.5Z" fill="#353739"/>
</svg>
</div>
`;

class LIBaccountdropdownThickstrokeOn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('lib-icon-accountdropdown-thickstroke-on', LIBaccountdropdownThickstrokeOn);