import{j as n,au as r,f as a,_ as i,h as m}from"./index.4dee5cd5.js";import{C as p}from"./content.controller.2f1fd9c8.js";import{P as d}from"./product.controller.30fcb264.js";import{P as h}from"./product.mixin.0505c424.js";import"./context.controller.c080d1c5.js";import"./component.mixin.d2c5a023.js";let s=class extends h(){constructor(){super(...arguments),this.product$=new d(this).getProduct(),this.options$=new p(this).getOptions(),this.data$=n([this.options$,this.product$])}render(){return r`
      ${a(this.data$,([e,t])=>{var o;return r`${(o=e.prefix)!=null?o:"SKU"}: ${t==null?void 0:t.sku}`})}
    `}};s=i([m()],s);export{s as ProductIdComponent};
