"use strict";(self.webpackChunkds_integration_test=self.webpackChunkds_integration_test||[]).push([[6016],{6016:(e,t,n)=>{n.r(t),n.d(t,{bds_tab_group:()=>r});var i=n(6510),r=function(){function e(e){var t=this;(0,i.r)(this,e),this.bdsTabChange=(0,i.c)(this,"bdsTabChange",7),this.bdsTabDisabled=(0,i.c)(this,"bdsTabDisabled",7),this.tabItensElement=null,this.getEventsDisable=function(e){e.forEach((function(e){e.addEventListener("tabDisabled",(function(){t.setInternalItens(Array.from(t.tabItensElement))}),!1)}))},this.checkSlideTabs=function(){if(t.headerSlideElement.offsetWidth>t.headerElement.offsetWidth)return!0},this.setFirstActive=function(){Array.from(t.tabItensElement).filter((function(e){return e.open})).length||(t.tabItensElement[0].open=!0)},this.setnumberElement=function(){for(var e=0;e<t.tabItensElement.length;e++)t.tabItensElement[e].numberElement=e},this.setInternalItens=function(e){var n=e.map((function(e,t){return{label:e.label,open:e.open,numberElement:t,disable:e.disable}}));return t.internalItens=n},this.handleClick=function(e){var n=t.internalItens.map((function(e){return{label:e.label,open:!1,numberElement:e.numberElement}}));t.internalItens=n;for(var i=0;i<t.tabItensElement.length;i++)t.tabItensElement[i].numberElement!=e?t.tabItensElement[i].open=!1:(t.tabItensElement[i].open=!0,t.bdsTabChange.emit(t.tabItensElement[i]))},this.refHeaderElement=function(e){t.headerElement=e},this.refHeaderSlideElement=function(e){t.headerSlideElement=e},this.handleDisabled=function(e){t.bdsTabDisabled.emit(t.tabItensElement[e])},this.nextSlide=function(){var e=t.headerElement.offsetWidth-t.headerSlideElement.offsetWidth,n=t.headerSlideElement.offsetWidth/t.headerElement.offsetWidth,i=parseInt(n.toString()),r=t.positionLeft-t.headerElement.offsetWidth;t.positionLeft=r<e?e:r,t.alignTab=r<e?"right":"scrolling",t.tabRefSlide=i<=t.tabRefSlide?t.tabRefSlide+1:i},this.prevSlide=function(){var e=t.headerSlideElement.offsetWidth/t.headerElement.offsetWidth,n=parseInt(e.toString()),i=t.positionLeft+t.headerElement.offsetWidth;t.positionLeft=i>0?0:i,t.alignTab=i>0?"left":"scrolling",t.tabRefSlide=n<=t.tabRefSlide?t.tabRefSlide-1:n},this.internalItens=void 0,this.isSlideTabs=!1,this.alignTab="left",this.tabRefSlide=0,this.positionLeft=0,this.contentScrollable=!0,this.align="center",this.dtButtonPrev=null,this.dtButtonNext=null}return e.prototype.componentWillRender=function(){this.tabItensElement=this.element.getElementsByTagName("bds-tab-item"),this.setnumberElement(),this.setFirstActive(),this.setInternalItens(Array.from(this.tabItensElement)),this.getEventsDisable(Array.from(this.tabItensElement))},e.prototype.connectedCallback=function(){var e=this;this.isSlide=window.setInterval((function(){e.isSlideTabs=e.checkSlideTabs()}),100)},e.prototype.disconnectedCallback=function(){window.clearInterval(this.isSlide)},e.prototype.render=function(){var e,t=this,n={left:"".concat(this.positionLeft,"px")};return(0,i.h)(i.H,null,(0,i.h)("div",{class:{tab_group:!0}},this.isSlideTabs&&"left"!=this.alignTab&&(0,i.h)("bds-button-icon",{class:"tab_group__slide-button",icon:"arrow-left",size:"short",id:"bds-tabs-button-left",onClick:function(){return t.prevSlide()},dataTest:this.dtButtonPrev,variant:"secondary"}),(0,i.h)("div",{class:{tab_group__header:!0,tab_group__slide:this.isSlideTabs},ref:this.refHeaderElement},(0,i.h)("div",{class:(e={tab_group__header__itens:!0,tab_group__slide__itens:this.isSlideTabs},e["tab_group__header__itens__".concat(this.align)]=!this.isSlideTabs,e),ref:this.refHeaderSlideElement,style:n},this.internalItens&&this.internalItens.map((function(e,n){var r=1==e.open?"bold":"regular";return(0,i.h)("div",{class:{tab_group__header__itens__item:!0,tab_group__header__itens__item__open:e.open,tab_group__header__itens__item__disable:e.disable},key:n,tabindex:"0",onClick:function(){return e.disable?t.handleDisabled(e.numberElement):t.handleClick(e.numberElement)}},(0,i.h)("bds-typo",{variant:"fs-16",bold:r},e.label))})))),this.isSlideTabs&&"right"!=this.alignTab&&(0,i.h)("bds-button-icon",{class:"tab_group__slide-button",icon:"arrow-right",size:"short",id:"bds-tabs-button-right",onClick:function(){return t.nextSlide()},dataTest:this.dtButtonNext,variant:"secondary"}),(0,i.h)("div",{class:{tab_group__content:!0,tab_group__scrolled:this.contentScrollable}},(0,i.h)("slot",null))))},Object.defineProperty(e.prototype,"element",{get:function(){return(0,i.g)(this)},enumerable:!1,configurable:!0}),e}();r.style=":host{display:block;width:100%}.tab_group{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.tab_group__header{padding:0 16px;overflow:hidden}.tab_group__header__itens{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:-webkit-max-content;width:-moz-max-content;width:max-content;gap:32px;margin:auto}.tab_group__header__itens__center{-ms-flex-pack:center;justify-content:center;margin:auto}.tab_group__header__itens__right{-ms-flex-pack:right;justify-content:right;margin:0 0 0 auto}.tab_group__header__itens__left{-ms-flex-pack:left;justify-content:left;margin:0 auto 0 0}.tab_group__header__itens__item{cursor:pointer;height:46px;width:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--color-content-disable, #636363);border-bottom:2px solid transparent}.tab_group__header__itens__item__open{color:var(--color-content-default, #454545);border-color:var(--color-primary, #1e6bf1)}.tab_group__header__itens__item__disable{cursor:default;color:var(--color-content-ghost, #8C8C8C)}.tab_group__slide{position:relative;overflow:hidden;height:48px;margin-left:56px;margin-right:56px}.tab_group__slide-button{position:absolute;z-index:1;background-color:var(--color-surface-1, #F6F6F6)}.tab_group__slide-button[icon=arrow-left]{left:0}.tab_group__slide-button[icon=arrow-right]{right:0}.tab_group__slide__itens{position:absolute;left:56px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:48px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;gap:32px;-webkit-transition:left 0.5s;-moz-transition:left 0.5s;transition:left 0.5s}.tab_group__content{height:100%}.tab_group__scrolled{-ms-flex-negative:999;flex-shrink:999;overflow:auto}.tab_group__scrolled::-webkit-scrollbar{width:16px;background-color:transparent}.tab_group__scrolled::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}"}}]);
//# sourceMappingURL=6016.636aee15.chunk.js.map