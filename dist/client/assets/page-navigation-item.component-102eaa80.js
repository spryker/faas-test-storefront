import{c as a,d as i,y as n,_ as t,v as e,g as s}from"./index-41c5945f.js";const l=a`
  :host {
    text-align: start;
    margin-block-end: 10px;
    text-decoration: none;
    border: 1px solid var(--oryx-color-canvas-500);
    border-radius: 9px;
    position: relative;
    display: block;
    padding-block: 10px;
    padding-inline-end: 20px;
    padding-inline-start: 38px;
    min-height: 22px;
    cursor: pointer;
  }

  h3::before {
    content: '';
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background: var(--oryx-color-canvas-500);
    position: absolute;
    inset-block-start: 17px;
    inset-inline-start: 20px;
  }

  h3 {
    line-height: 22px;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--oryx-color-ink);
    margin: 0;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  slot[name='content'] {
    color: var(--oryx-color-neutral-400);
    text-transform: none;
    font-size: 14px;
  }

  :host([active]) h3::before {
    background: var(--oryx-color-primary-300);
  }

  :host([active]) h3 {
    color: var(--oryx-color-primary-300);
  }

  :host(:hover) {
    box-shadow: 0 4px 12px var(--oryx-elevation-color-2);
  }

  :host(:focus-visible) {
    outline: none;
    border: 1px solid var(--oryx-color-primary-300);
    box-shadow: 0 0 3px var(--oryx-color-primary-300);
  }
`,r=class extends i{constructor(){super(...arguments),this.active=!1}render(){return n`
      <h3><slot></slot></h3>
      <slot name="content"></slot>
    `}};let o=r;(()=>{r.styles=l})();t([e({reflect:!0,type:Boolean}),s("design:type",Object)],o.prototype,"active",void 0);t([e(),s("design:type",String)],o.prototype,"targetId",void 0);export{o as PageNavigationItemComponent};
