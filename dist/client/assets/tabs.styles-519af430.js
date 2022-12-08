import{m as e}from"./screen-c0aae3c9.js";import{z as a,c as r}from"./index-74abacf3.js";const o=a("secondary"),s=r`
  slot:not([name]) {
    display: flex;
    flex: 1 0 auto;
    overflow-x: auto;
    scroll-behavior: smooth;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    cursor: pointer;
  }

  slot:not([name])::-webkit-scrollbar {
    display: none;
  }

  :host([shadow]) slot:not([name]) {
    box-shadow: 0 4px 8px var(--oryx-color-canvas-200);
  }

  input[type='range'] {
    width: 0;
    height: 0;
    background: transparent;
    appearance: none;
    position: absolute;
  }

  input[type='range']:focus-visible + ::slotted(oryx-tab[selected]) {
    outline: solid 1px var(--oryx-color-focus);
    outline-offset: -1px;
  }

  input[type='range']::-webkit-slider-thumb {
    appearance: none;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type='range']::-moz-range-thumb {
    border: none;
    background: none;
  }

  :host([appearance='${o}']) ::slotted(oryx-tab) {
    color: var(--oryx-color-ink);
    background: var(--oryx-color-canvas-200);
    border-block-start: 4px solid transparent;
    border-bottom: none;
  }

  :host([appearance='${o}']) ::slotted(oryx-tab:hover) {
    color: var(--oryx-color-ink);
    background: none;
    border-color: var(--oryx-color-neutral-400);
  }

  :host([appearance='${o}']) ::slotted(oryx-tab[selected]) {
    color: var(--oryx-color-primary-300);
    background: none;
    border-color: var(--oryx-color-primary-300);
    border-bottom: none;
  }

  :host([appearance='${o}']) ::slotted(oryx-tab[error]) {
    color: var(--oryx-color-error-300);
    background: var(--oryx-color-canvas-200);
    border-color: transparent;
    border-bottom: none;
  }

  :host([appearance='${o}']) ::slotted(oryx-tab[error]:hover) {
    color: var(--oryx-color-error-300);
    background: none;
    border-color: var(--oryx-color-neutral-400);
  }

  :host([appearance='${o}']) ::slotted(oryx-tab[error][selected]) {
    color: var(--oryx-color-error-300);
    background: none;
    border-color: var(--oryx-color-error-300);
    border-bottom: none;
  }

  slot[name='panels'] {
    display: flex;
  }

  slot[name='panels']::slotted(*:not([selected])) {
    display: none;
  }
`,t=r`
  :host([appearance='${o}']) ::slotted(oryx-tab) {
    border-width: 2px;
  }
`,c=[{media:e,css:t}];export{s as baseStyles,c as screenStyles};
