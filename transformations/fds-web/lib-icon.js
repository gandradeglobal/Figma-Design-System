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
    <div id="root"></div>
  `;
  
  class LIBIcon extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    static get observedAttributes() {
      return ['icon'];
    }
  
    async getSvg(icon) {
      let svg;
      switch (icon) {
        case 'account-thickstroke-off' :
          svg = await import('./icons/account-thickstroke-off.js');
          break;
        case 'account-thickstroke-on' :
          svg = await import('./icons/account-thickstroke-on.js');
          break;
        case 'accountdropdown-thickstroke-off' :
          svg = await import('./icons/accountdropdown-thickstroke-off.js');
          break;
        case 'accountdropdown-thickstroke-on' :
          svg = await import('./icons/accountdropdown-thickstroke-on.js');
          break;
        case 'accounts-thickstroke-off' :
          svg = await import('./icons/accounts-thickstroke-off.js');
          break;
        case 'accounts-thickstroke-on' :
          svg = await import('./icons/accounts-thickstroke-on.js');
          break;
        case 'alertstatus-thickstroke-off' :
          svg = await import('./icons/alertstatus-thickstroke-off.js');
          break;
        case 'alertstatus-thickstroke-on' :
          svg = await import('./icons/alertstatus-thickstroke-on.js');
          break;
        case 'arrowdown-thickstroke-off' :
          svg = await import('./icons/arrowdown-thickstroke-off.js');
          break;
        case 'arrowdown-thickstroke-on' :
          svg = await import('./icons/arrowdown-thickstroke-on.js');
          break;
        case 'arrowleft-thickstroke-off' :
          svg = await import('./icons/arrowleft-thickstroke-off.js');
          break;
        case 'arrowleft-thickstroke-on' :
          svg = await import('./icons/arrowleft-thickstroke-on.js');
          break;
      }
      if (svg) {
        this.shadowRoot.querySelector(
          '#root'
        ).innerHTML = svg.default;
      }else{
        this.shadowRoot.querySelector(
          '#root'
        ).innerHTML = '<div class="error">no icon</div>';
      }
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'icon') {
        this.getSvg(newValue);
      }
    }
  }
  
  window.customElements.define('lib-icon', LIBIcon);