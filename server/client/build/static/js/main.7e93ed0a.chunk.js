(this.webpackJsonpafterwork_nfts=this.webpackJsonpafterwork_nfts||[]).push([[0],{220:function(e,t,n){},221:function(e,t){},262:function(e,t){},264:function(e,t){},287:function(e,t){},289:function(e,t){},301:function(e,t){},302:function(e,t){},326:function(e,t){},337:function(e,t){},339:function(e,t){},433:function(e,t,n){},435:function(e,t){},436:function(e,t){},437:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(196),s=n.n(r),i=(n(220),n(0)),o=n(4),u=n(38),l=n(209),d=n(444),b=n(57),p=(n(432),n(208)),j=(n(433),n.p+"static/media/nft.59f23ade.png"),f=n.p+"static/media/XBTO.b7e281bc.png",h=n.p+"static/media/DevFund.9c9f4b36.png",O=n.p+"static/media/LACITY.47474788.png",g=n(13);var m=function(){var e=new l.a({infuraId:"f8ccbba88cde4fbf8cfa8c82dc353e08",rpc:{137:"https://matic-mainnet.chainstacklabs.com",80001:"https://matic-mumbai.chainstacklabs.com"}}),t=a.a.useState(null),n=Object(u.a)(t,2),c=n[0],r=n[1],s=a.a.useState(null),m=Object(u.a)(s,2),x=m[0],v=m[1],C=a.a.useState(!1),k=Object(u.a)(C,2),w=k[0],y=k[1];function N(){return(N=Object(o.a)(Object(i.a)().mark((function t(){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.enable();case 2:r(new d.a.Web3Provider(e));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){return(F=Object(o.a)(Object(i.a)().mark((function t(){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.disconnect();case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return(L=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=2;break}return e.abrupt("return");case 2:return t=fetch("/mint/"+x),y(!0),n=b.b.loading("Mint en cours..."),e.prev=5,e.next=8,t;case 8:return c=e.sent,e.next=11,c.json();case 11:(a=e.sent).minted?b.b.update(n,{render:"Mint r\xe9ussi !",type:"success",isLoading:!1,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}):b.b.update(n,{render:a.error,type:"error",isLoading:!1,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),y(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(5),b.b.update(n,{render:"Erreur lors de la requ\xeate",type:"error",isLoading:!1,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),y(!1);case 20:case"end":return e.stop()}}),e,null,[[5,16]])})))).apply(this,arguments)}return e.on("accountsChanged",(function(t){t.length>0&&(r(new d.a.Web3Provider(e)),v(t[0]))})),e.on("chainChanged",(function(t){137===t&&r(new d.a.Web3Provider(e))})),e.on("disconnect",(function(e,t){r(null),v(null),console.log(e,t)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"App",children:Object(g.jsx)("header",{className:"App-header",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("img",{src:j,alt:""}),Object(g.jsxs)("div",{className:"infos",children:[Object(g.jsx)("h5",{children:"Afterwork by LaCity - 24/06/22"}),Object(g.jsxs)("p",{children:["Contract"," ",Object(g.jsx)("a",{href:"https://polygonscan.com/address/0x8303A493ff94565a71D6a5a60D303aC2F3153983",target:"_blank",rel:"noreferrer",children:"0x8303...3983"})]}),c?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{onClick:function(){return L.apply(this,arguments)},className:"mint",children:w?Object(g.jsx)(p.a.ThreeDots,{className:"loading",height:".6rem"}):"Mint votre NFT"}),Object(g.jsx)("button",{onClick:function(){return F.apply(this,arguments)},className:"disconnect",children:"X"})]}):Object(g.jsx)("button",{onClick:function(){return N.apply(this,arguments)},className:"connect",children:"Connecter son Wallet"})]})]})})}),Object(g.jsxs)("div",{className:"partners",children:[Object(g.jsx)("img",{src:f,alt:""}),Object(g.jsx)("img",{src:h,alt:""})]}),Object(g.jsxs)("div",{className:"logo",children:[Object(g.jsx)("img",{src:O,alt:""}),Object(g.jsx)("span",{children:"LaCity"})]}),Object(g.jsx)(b.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,445)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(m,{})})),x()}},[[437,1,2]]]);
//# sourceMappingURL=main.7e93ed0a.chunk.js.map