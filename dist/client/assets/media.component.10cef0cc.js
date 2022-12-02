import{r as g,j as c,m as S,y as l,f as h,_ as f,h as x,ax as $}from"./index.d896b0c8.js";import{C as y}from"./content.controller.3e9f2440.js";import{P}from"./product.controller.828cf3a5.js";import{P as v}from"./product.mixin.8facbf11.js";import"./context.controller.c92fa790.js";import"./component.mixin.09051c71.js";let d=class extends v(){constructor(){super(...arguments),this.imageService=g($),this.productMedia$=c([new y(this).getOptions(),new P(this).getProduct()]).pipe(S(([e,a])=>{var m,i;const t=this.resolveImage(a,e),r=this.imageService.resolveSources(t,(m=e==null?void 0:e.containerSize)!=null?m:"detail");return{src:(i=r==null?void 0:r[0])==null?void 0:i.url,alt:(e==null?void 0:e.alt)||(a==null?void 0:a.name),srcset:this.getSrcSet(r),loading:e==null?void 0:e.loading}}))}render(){return l`${h(this.productMedia$,e=>{var a;return l`<oryx-image
          .src=${e.src}
          .srcset=${e.srcset}
          .alt=${e.alt}
          .loading=${(a=e.loading)!=null?a:"lazy"}
        ></oryx-image>`})}`}resolveImage(e,a){var r,m,i,n;const t=a.mediaSet?(m=e==null?void 0:e.mediaSet)==null?void 0:m.find(s=>s.name===a.mediaSet):(r=e==null?void 0:e.mediaSet)==null?void 0:r[0];return(n=t==null?void 0:t.media)==null?void 0:n[(i=a==null?void 0:a.mediaIndex)!=null?i:0]}getSrcSet(e){if(!(e.length<2))return e.map(a=>{var t,r;return(t=a.context)!=null&&t.density?`${a.url} ${(r=a.context)==null?void 0:r.density}x`:void 0}).filter(a=>a).join(",")||void 0}};d=f([x()],d);export{d as ProductMediaComponent};
//# sourceMappingURL=media.component.10cef0cc.js.map
