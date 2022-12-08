import{T as s,r as f,A as p,t as m,y as a,f as l,_ as c,g as h,h as u,Q as C}from"./index-41c5945f.js";import{C as d}from"./content.controller-bfde8771.js";import{s as y}from"./subscribe.decorator-b8b77f67.js";import{C as $}from"./component.mixin-da8e468a.js";import{NotificationCenterComponent as v}from"./notification-center.component-0f5e5ac1.js";import{e as N,n as S}from"./ref-a6112978.js";import"./state-2f3bc3a1.js";const b=i=>i?`[position=${i}]`:"";class w{getCenter(t="body",e){let o=document.querySelector(`${t} ${s}${b(e)}`);return o instanceof v||(o=this.createCenter(t,e)),o}createCenter(t="body",e){const o=document.querySelector(t);if(!o)throw new Error("Parent element not found for the creation of a new NotificationCenter");const n=document.createElement(s);return e&&n.setAttribute("position",e),o.append(n),n}}let r=class extends $(){constructor(){super(...arguments),this.notificationService=new w,this.siteNotificationService=f(C),this.contentController=new d(this),this.options$=this.contentController.getOptions(),this.centerRef=N(),this.notification$=this.siteNotificationService.get().pipe(p(t=>!!t),m(async t=>{var e,o;this.centerRef.value&&"open"in this.centerRef.value||await customElements.whenDefined("oryx-notification-center"),(o=(e=this.centerRef.value)==null?void 0:e.open)==null||o.call(e,t)}))}render(){return a`${l(this.options$,t=>a`<oryx-notification-center
        position="${t.position??"top-end"}"
        ${S(this.centerRef)}
      ></oryx-notification-center>`)}`}};c([y(),h("design:type",Object)],r.prototype,"notification$",void 0);r=c([u()],r);export{r as SiteNotificationCenterComponent};
