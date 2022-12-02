import{c as n,j as e,m as s,y as r,f as c,K as l,_ as p,h as x}from"./index.d896b0c8.js";import{C as d}from"./cart.controller.12085ee0.js";import{C as y}from"./cart.mixin.cb5d5ef3.js";import{C as m}from"./content.controller.3e9f2440.js";import"./component.mixin.09051c71.js";const h=n`
  a {
    display: inline-flex;
    padding: 8px;
    border-radius: 4px;
    outline: none;
    background: var(--oryx-color-canvas-200);
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--oryx-color-ink);
    width: 53px;
    height: 50px;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border: 2px solid var(--oryx-color-canvas-200);
  }

  a:hover {
    background: var(--oryx-color-canvas-300);
    border-color: var(--oryx-color-canvas-300);
  }

  a:active {
    background: var(--oryx-color-canvas-300);
    border-color: var(--oryx-color-canvas-300);
  }

  a:focus-visible {
    border-color: var(--oryx-color-primary-400);
    box-shadow: 0 0 3px var(--oryx-color-primary-400);
  }

  oryx-icon {
    --oryx-icon-size: 38px;

    display: block;
    padding-inline-start: 6px;
  }

  .badge + oryx-icon {
    margin-inline-start: 1px;
    padding-inline-start: 0;
  }

  .badge {
    border-radius: 2px;
    background: var(--oryx-color-primary-400);
    color: var(--oryx-color-canvas-100);
    position: absolute;
    inset-inline-end: 6px;
    top: 6px;
    padding: 1px 6px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
  }

  span {
    text-align: center;
    font-weight: 600;
  }

  /* TODO: refactor with theme BP's */
  @media (max-width: 375px) {
    a {
      display: inline-flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
      width: auto;
      height: auto;
      gap: 6px;
      border-radius: 0;
      min-width: 41px;
      padding-top: 7px;
      padding-bottom: 7px;
    }

    .badge {
      position: static;
    }

    oryx-icon {
      --oryx-icon-size: 24px;

      padding-inline-start: 0;
      margin-inline-start: 0;
    }

    span {
      display: none;
    }
  }
`;let t=class extends y(){constructor(){super(...arguments),this.contentController=new m(this),this.cartController=new d(this),this.maxVisibleQuantity=99,this.quantity$=e([this.cartController.getTotalQuantity(),this.contentController.getOptions()]).pipe(s(([o,i])=>{var a;return(a=i.quantity)!=null?a:o}))}render(){return r`
      <a href="/cart">
        ${c(this.quantity$,o=>r`${l(o,()=>r`
                <div class="badge">
                  ${Number(o)>this.maxVisibleQuantity?`${this.maxVisibleQuantity}+`:o}
                </div>
              `)} `)}
        <oryx-icon type="cart"></oryx-icon>
        <span>Cart</span>
      </a>
    `}};t.styles=h;t=p([x()],t);export{t as MiniCartComponent};
//# sourceMappingURL=mini-cart.component.c3c6a4d6.js.map
