import{T as s,r as f,A as p,t as m,y as a,f as l,_ as c,g as h,h as u,Q as C}from"./index.175fafb9.js";import{C as d}from"./content.controller.9c48864b.js";import{s as y}from"./subscribe.decorator.7a4aa6ea.js";import{C as $}from"./component.mixin.527a540b.js";import{NotificationCenterComponent as v}from"./notification-center.component.1bd4285e.js";import{e as N,n as S}from"./ref.53a0536e.js";import"./state.943d97d2.js";const b=i=>i?`[position=${i}]`:"";class w{getCenter(e="body",t){let o=document.querySelector(`${e} ${s}${b(t)}`);return o instanceof v||(o=this.createCenter(e,t)),o}createCenter(e="body",t){const o=document.querySelector(e);if(!o)throw new Error("Parent element not found for the creation of a new NotificationCenter");const n=document.createElement(s);return t&&n.setAttribute("position",t),o.append(n),n}}let r=class extends $(){constructor(){super(...arguments),this.notificationService=new w,this.siteNotificationService=f(C),this.contentController=new d(this),this.options$=this.contentController.getOptions(),this.centerRef=N(),this.notification$=this.siteNotificationService.get().pipe(p(e=>!!e),m(async e=>{var t,o;this.centerRef.value&&"open"in this.centerRef.value||await customElements.whenDefined("oryx-notification-center"),(o=(t=this.centerRef.value)==null?void 0:t.open)==null||o.call(t,e)}))}render(){return a`${l(this.options$,e=>{var t;return a`<oryx-notification-center
        position="${(t=e.position)!=null?t:"top-end"}"
        ${S(this.centerRef)}
      ></oryx-notification-center>`})}`}};c([y(),h("design:type",Object)],r.prototype,"notification$",void 0);r=c([u()],r);export{r as SiteNotificationCenterComponent};
