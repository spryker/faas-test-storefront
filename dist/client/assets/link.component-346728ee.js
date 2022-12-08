import{c as n,d,y as s,K as c,_ as e,v as t,g as r}from"./index-41c5945f.js";var l;(function(i){i.Link="link",i.ExternalLink="external"})(l||(l={}));const p=n`
  :host {
    --oryx-icon-size: 16px;

    display: inline-flex;
    align-items: center;
    color: var(--oryx-color-primary-300);
  }

  oryx-icon,
  ::slotted(oryx-icon) {
    position: absolute;
    padding-inline-start: 8px;
    color: inherit;
    pointer-events: none;
  }

  ::slotted(a) {
    border-radius: var(--oryx-border-radius-large);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 4px 8px;
    text-decoration: none;
    outline: 0;
    border: solid 1px transparent;
    color: currentColor;
  }

  :host([disabled]) {
    pointer-events: none;
    color: var(--oryx-color-neutral-300);
  }

  :host(:hover:not([disabled])) {
    color: var(--oryx-color-primary-400);
  }

  :host(:not([disabled])) ::slotted(a:active),
  :host(:not([disabled])) ::slotted(a:focus-visible) {
    background-color: var(--oryx-color-canvas-200);
  }

  :host(:not([disabled])) ::slotted(a:active) {
    border: solid 1px var(--oryx-color-canvas-100);
  }

  :host(:not([disabled])) ::slotted(a:focus-visible) {
    box-shadow: 0 0 3px var(--oryx-color-primary-300);
  }

  /* additional space at the start whenever an icon is available */
  :host([icon]) ::slotted(a),
  :host([custom-icon]) ::slotted(a) {
    padding-inline-start: 32px;
  }

  :host([linktype='external']:not([disabled])) {
    color: var(--oryx-color-neutral-400);
  }

  :host([linktype='external']:hover) {
    color: var(--oryx-color-ink);
  }
`,a=class extends d{render(){return s`
      <slot name="icon">
        ${c(this.icon,()=>s`<oryx-icon .type=${this.icon}></oryx-icon>`)}
      </slot>
      <slot></slot>
    `}};let o=a;(()=>{a.styles=p})();e([t({reflect:!0}),r("design:type",String)],o.prototype,"linkType",void 0);e([t({type:Boolean,reflect:!0}),r("design:type",Boolean)],o.prototype,"disabled",void 0);e([t({reflect:!0}),r("design:type",Object)],o.prototype,"icon",void 0);export{o as LinkComponent};
