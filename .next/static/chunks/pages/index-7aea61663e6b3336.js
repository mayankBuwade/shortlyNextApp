(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9590:function(e,n,t){"use strict";function r(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(d){return void t(d)}c.done?n(u):Promise.resolve(u).then(r,i)}t.r(n),t.d(n,{default:function(){return Ce}});var i=t(7794),o=t.n(i),a=t(7294);function c(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(n){o(n)}}function c(e){try{u(r.throw(e))}catch(n){o(n)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))}function u(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(c){o=[6,c],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}var d,s=function(){},l=s(),f=Object,h=function(e){return e===l},g=function(e){return"function"==typeof e},m=function(e,n){return f.assign({},e,n)},p="undefined",v=function(){return typeof window!=p},x=new WeakMap,w=0,y=function(e){var n,t,r=typeof e,i=e&&e.constructor,o=i==Date;if(f(e)!==e||o||i==RegExp)n=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(n=x.get(e))return n;if(n=++w+"~",x.set(e,n),i==Array){for(n="@",t=0;t<e.length;t++)n+=y(e[t])+",";x.set(e,n)}if(i==f){n="#";for(var a=f.keys(e).sort();!h(t=a.pop());)h(e[t])||(n+=t+":"+y(e[t])+",");x.set(e,n)}}return n},b=!0,k=v(),j=typeof document!=p,_=k&&window.addEventListener?window.addEventListener.bind(window):s,S=j?document.addEventListener.bind(document):s,C=k&&window.removeEventListener?window.removeEventListener.bind(window):s,E=j?document.removeEventListener.bind(document):s,R={isOnline:function(){return b},isVisible:function(){var e=j&&document.visibilityState;return h(e)||"hidden"!==e}},Z={initFocus:function(e){return S("visibilitychange",e),_("focus",e),function(){E("visibilitychange",e),C("focus",e)}},initReconnect:function(e){var n=function(){b=!0,e()},t=function(){b=!1};return _("online",n),_("offline",t),function(){C("online",n),C("offline",t)}}},O=!v()||"Deno"in window,T=function(e){return v()&&typeof window.requestAnimationFrame!=p?window.requestAnimationFrame(e):setTimeout(e,1)},I=O?a.useEffect:a.useLayoutEffect,P="undefined"!==typeof navigator&&navigator.connection,N=!O&&P&&(["slow-2g","2g"].includes(P.effectiveType)||P.saveData),D=function(e){if(g(e))try{e=e()}catch(t){e=""}var n=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?y(e):"",n,e?"$swr$"+e:""]},V=new WeakMap,L=function(e,n,t,r,i,o,a){void 0===a&&(a=!0);var c=V.get(e),u=c[0],d=c[1],s=c[3],l=u[n],f=d[n];if(a&&f)for(var h=0;h<f.length;++h)f[h](t,r,i);return o&&(delete s[n],l&&l[0])?l[0](2).then((function(){return e.get(n)})):e.get(n)},z=0,F=function(){return++z},M=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return c(void 0,void 0,void 0,(function(){var n,t,r,i,o,a,c,d,s,f,p,v,x,w,y,b,k,j,_,S;return u(this,(function(u){switch(u.label){case 0:if(n=e[0],t=e[1],r=e[2],i=e[3],a=!!h((o="boolean"===typeof i?{revalidate:i}:i||{}).populateCache)||o.populateCache,c=!1!==o.revalidate,d=!1!==o.rollbackOnError,s=o.optimisticData,f=D(t),p=f[0],v=f[2],!p)return[2];if(x=V.get(n),w=x[2],e.length<3)return[2,L(n,p,n.get(p),l,l,c,!0)];if(y=r,k=F(),w[p]=[k,0],j=!h(s),_=n.get(p),j&&(n.set(p,s),L(n,p,s)),g(y))try{y=y(n.get(p))}catch(C){b=C}return y&&g(y.then)?[4,y.catch((function(e){b=e}))]:[3,2];case 1:if(y=u.sent(),k!==w[p][0]){if(b)throw b;return[2,y]}b&&j&&d&&(a=!0,y=_,n.set(p,_)),u.label=2;case 2:return a&&(b||(g(a)&&(y=a(y,_)),n.set(p,y)),n.set(v,m(n.get(v),{error:b}))),w[p][1]=F(),[4,L(n,p,y,b,l,c,!!a)];case 3:if(S=u.sent(),b)throw b;return[2,a?S:y]}}))}))},A=function(e,n){for(var t in e)e[t][0]&&e[t][0](n)},B=function(e,n){if(!V.has(e)){var t=m(Z,n),r={},i=M.bind(l,e),o=s;if(V.set(e,[r,{},{},{},i]),!O){var a=t.initFocus(setTimeout.bind(l,A.bind(l,r,0))),c=t.initReconnect(setTimeout.bind(l,A.bind(l,r,1)));o=function(){a&&a(),c&&c(),V.delete(e)}}return[e,i,o]}return[e,V.get(e)[4]]},G=B(new Map),q=G[0],W=G[1],H=m({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:function(e,n,t,r,i){var o=t.errorRetryCount,a=i.retryCount,c=~~((Math.random()+.5)*(1<<(a<8?a:8)))*t.errorRetryInterval;!h(o)&&a>o||setTimeout(r,c,i)},onDiscarded:s,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:N?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:N?5e3:3e3,compare:function(e,n){return y(e)==y(n)},isPaused:function(){return!1},cache:q,mutate:W,fallback:{}},R),J=function(e,n){var t=m(e,n);if(n){var r=e.use,i=e.fallback,o=n.use,a=n.fallback;r&&o&&(t.use=r.concat(o)),i&&a&&(t.fallback=m(i,a))}return t},X=(0,a.createContext)({}),$=function(e){return g(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},K=function(){return m(H,(0,a.useContext)(X))},U=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}},Q={dedupe:!0},Y=(f.defineProperty((function(e){var n=e.value,t=J((0,a.useContext)(X),n),r=n&&n.provider,i=(0,a.useState)((function(){return r?B(r(t.cache||q),n):l}))[0];return i&&(t.cache=i[0],t.mutate=i[1]),I((function(){return i?i[2]:l}),[]),(0,a.createElement)(X.Provider,m(e,{value:t}))}),"default",{value:H}),d=function(e,n,t){var r=t.cache,i=t.compare,o=t.fallbackData,d=t.suspense,s=t.revalidateOnMount,f=t.refreshInterval,p=t.refreshWhenHidden,v=t.refreshWhenOffline,x=V.get(r),w=x[0],y=x[1],b=x[2],k=x[3],j=D(e),_=j[0],S=j[1],C=j[2],E=(0,a.useRef)(!1),R=(0,a.useRef)(!1),Z=(0,a.useRef)(_),P=(0,a.useRef)(n),N=(0,a.useRef)(t),z=function(){return N.current},A=function(){return z().isVisible()&&z().isOnline()},B=function(e){return r.set(C,m(r.get(C),e))},G=r.get(_),q=h(o)?t.fallback[_]:o,W=h(G)?q:G,H=r.get(C)||{},J=H.error,X=!E.current,$=function(){return X&&!h(s)?s:!z().isPaused()&&(d?!h(W):h(W)||t.revalidateIfStale)},K=!(!_||!n)&&(!!H.isValidating||X&&$()),Y=function(e,n){var t=(0,a.useState)({})[1],r=(0,a.useRef)(e),i=(0,a.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,a.useCallback)((function(e){var o=!1,a=r.current;for(var c in e){var u=c;a[u]!==e[u]&&(a[u]=e[u],i.current[u]&&(o=!0))}o&&!n.current&&t({})}),[]);return I((function(){r.current=e})),[r,i.current,o]}({data:W,error:J,isValidating:K},R),ee=Y[0],ne=Y[1],te=Y[2],re=(0,a.useCallback)((function(e){return c(void 0,void 0,void 0,(function(){var n,o,a,c,d,s,f,m,p,v,x,w,y;return u(this,(function(u){switch(u.label){case 0:if(n=P.current,!_||!n||R.current||z().isPaused())return[2,!1];c=!0,d=e||{},s=!k[_]||!d.dedupe,f=function(){return!R.current&&_===Z.current&&E.current},m=function(){var e=k[_];e&&e[1]===a&&delete k[_]},p={isValidating:!1},v=function(){B({isValidating:!1}),f()&&te(p)},B({isValidating:!0}),te({isValidating:!0}),u.label=1;case 1:return u.trys.push([1,3,,4]),s&&(L(r,_,ee.current.data,ee.current.error,!0),t.loadingTimeout&&!r.get(_)&&setTimeout((function(){c&&f()&&z().onLoadingSlow(_,t)}),t.loadingTimeout),k[_]=[n.apply(void 0,S),F()]),y=k[_],o=y[0],a=y[1],[4,o];case 2:return o=u.sent(),s&&setTimeout(m,t.dedupingInterval),k[_]&&k[_][1]===a?(B({error:l}),p.error=l,x=b[_],!h(x)&&(a<=x[0]||a<=x[1]||0===x[1])?(v(),s&&f()&&z().onDiscarded(_),[2,!1]):(i(ee.current.data,o)?p.data=ee.current.data:p.data=o,i(r.get(_),o)||r.set(_,o),s&&f()&&z().onSuccess(o,_,t),[3,4])):(s&&f()&&z().onDiscarded(_),[2,!1]);case 3:return w=u.sent(),m(),z().isPaused()||(B({error:w}),p.error=w,s&&f()&&(z().onError(w,_,t),("boolean"===typeof t.shouldRetryOnError&&t.shouldRetryOnError||g(t.shouldRetryOnError)&&t.shouldRetryOnError(w))&&A()&&z().onErrorRetry(w,_,t,re,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return c=!1,v(),f()&&s&&L(r,_,p.data,p.error,!1),[2,!0]}}))}))}),[_]),ie=(0,a.useCallback)(M.bind(l,r,(function(){return Z.current})),[]);if(I((function(){P.current=n,N.current=t})),I((function(){if(_){var e=_!==Z.current,n=re.bind(l,Q),t=0,r=U(_,y,(function(e,n,t){te(m({error:n,isValidating:t},i(ee.current.data,e)?l:{data:e}))})),o=U(_,w,(function(e){if(0==e){var r=Date.now();z().revalidateOnFocus&&r>t&&A()&&(t=r+z().focusThrottleInterval,n())}else if(1==e)z().revalidateOnReconnect&&A()&&n();else if(2==e)return re()}));return R.current=!1,Z.current=_,E.current=!0,e&&te({data:W,error:J,isValidating:K}),$()&&(h(W)||O?n():T(n)),function(){R.current=!0,r(),o()}}}),[_,re]),I((function(){var e;function n(){var n=g(f)?f(W):f;n&&-1!==e&&(e=setTimeout(t,n))}function t(){ee.current.error||!p&&!z().isVisible()||!v&&!z().isOnline()?n():re(Q).then(n)}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[f,p,v,re]),(0,a.useDebugValue)(W),d&&h(W)&&_)throw P.current=n,N.current=t,R.current=!1,h(J)?re(Q):J;return{mutate:ie,get data(){return ne.data=!0,W},get error(){return ne.error=!0,J},get isValidating(){return ne.isValidating=!0,K}}},t(7379)),ee=t(247),ne={src:"/_next/static/media/icon-brand-recognition.22883b05.svg",height:40,width:40},te=t(7287),re=t(5893);var ie=function(){return(0,re.jsxs)(oe,{children:[(0,re.jsx)("div",{children:(0,re.jsx)(ee.default,{alt:"logo",src:ne,width:"25px",height:"25px"})}),(0,re.jsx)("h1",{children:"Brand Recognition"}),(0,re.jsx)("p",{children:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instil confidence in your content."})]})},oe=Y.ZP.div.withConfig({displayName:"Card__Div",componentId:"sc-1hhn4dm-0"})(["width:15rem;padding-left:1rem;padding-right:1rem;margin-left:2rem;margin-right:2rem;margin-top:2rem;margin-bottom:5rem;background-color:#fff;h1{font-size:1.5vw;}p{font-size:1.5vw;color:",";}div{width:3rem;height:3rem;border-radius:50%;display:flex;justify-content:center;align-items:center;background-color:",";position:relative;bottom:1.56rem;}@media only screen and (max-width:720px){div{width:35px;height:35px;}}@media only screen and (max-width:720px){flex-direction:column;max-width:375px;padding:1rem;margin:1rem;height:fit-content;h1{font-size:12px;}p{font-size:12px;color:",";}div{width:35px;height:35px;}}"],te.Z.colors.gray,te.Z.colors.darkViolet,te.Z.colors.gray);var ae=function(){return(0,re.jsxs)(ce,{children:[(0,re.jsx)(ie,{}),(0,re.jsx)(ie,{}),(0,re.jsx)(ie,{})]})},ce=Y.ZP.div.withConfig({displayName:"Cards__Div",componentId:"sc-1kplr86-0"})(["display:flex;justify-content:center;flex-direction:row;justify-content:space-around;@media only screen and (max-width:720px){flex-direction:column;align-items:center;}"]);var ue=function(){return(0,re.jsxs)(de,{children:[(0,re.jsx)("h1",{children:"Advance Statistics"}),(0,re.jsx)("p",{children:"Track how your links are performing across the web with our advance statistics dashboard"})]})},de=Y.ZP.div.withConfig({displayName:"Details__Div",componentId:"sc-1vjh57e-0"})(["display:flex;flex-direction:column;align-items:center;margin-left:12%;margin-right:12%;padding-left:16%;padding-right:16%;p{text-align:center;color:",";}h1{text-align:center;}@media only screen and (max-width:480px){margin:0;margin-top:2rem;margin-bottom:4rem;h1{font-size:6vw;}p{font-size:2vh;}}"],te.Z.colors.gray),se=Y.ZP.div.withConfig({displayName:"styleLinkShortner__Div",componentId:"sc-1ndkjd1-0"})(['display:flex;flex-direction:row;justify-content:center;margin-left:auto;margin-right:auto;background-image:url("/meteor.svg");width:fit-content;height:20vh;padding:0;position:relative;bottom:2.4em;background-size:cover;@media only screen and (max-width:480px){flex-direction:column;}']),le=Y.ZP.form.withConfig({displayName:"styleLinkShortner__Form",componentId:"sc-1ndkjd1-1"})(["display:flex;flex-direction:row;align-items:center;padding:1rem;@media only screen and (max-width:480px){flex-direction:column;}"]),fe=Y.ZP.input.withConfig({displayName:"styleLinkShortner__Input",componentId:"sc-1ndkjd1-2"})(["width:50vw;height:6vh;margin-left:1rem;margin-right:1rem;::placeholder{color:",";}"],te.Z.colors.red),he=Y.ZP.button.withConfig({displayName:"styleLinkShortner__Button",componentId:"sc-1ndkjd1-3"})(["min-width:15vw;min-height:40px;padding-left:1rem;padding-right:1rem;margin:1rem;background:",";color:#fff;border:0;border-radius:5px;&:hover{background-color:",";font-weight:bold;}@media only screen and (max-width:480px){flex-direction:column;padding:.5rem;min-height:20px;font-size:.7rem;margin:5px;}"],te.Z.colors.cyan,te.Z.colors.lightCyan),ge=se;var me=function(){return(0,re.jsxs)(pe,{children:[(0,re.jsx)("h1",{children:"Boost your links today"}),(0,re.jsx)(ve,{children:"Get Started"})]})},pe=Y.ZP.div.withConfig({displayName:"GetStarted__Div",componentId:"sc-vehswi-0"})(['background-image:url("/meteor.png");display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem;h1{color:#fff;}']),ve=(0,Y.ZP)(he).withConfig({displayName:"GetStarted__ModifiedButton",componentId:"sc-vehswi-1"})(["border-radius:180px;padding:10px;max-width:150px;"]);var xe=function(e){var n=e.handleOnSubmitSearch,t=(0,a.useState)(""),r=t[0],i=t[1];return(0,re.jsx)(ge,{children:(0,re.jsxs)(le,{onSubmit:function(e){e.preventDefault(),n(r)},children:[(0,re.jsx)(fe,{type:"text",name:"name",onChange:function(e){return i(e.target.value)},value:r,placeholder:"Shorten a link here"}),(0,re.jsx)(he,{children:"Shorten It!"})]})})};var we=function(e){var n=e.query,t=e.shortLink,r=(0,a.useState)("Copy"),i=r[0],o=r[1],c=(0,a.useState)(),u=c[0],d=c[1];return t!=u&&"Copy"!==i&&o("Copy"),(0,re.jsxs)(ye,{children:[(0,re.jsx)("h2",{children:n}),(0,re.jsx)("hr",{}),(0,re.jsx)("h3",{children:t}),(0,re.jsx)(be,{onClick:function(){o("Copied"),d(t),navigator.clipboard.writeText(t)},buttonText:i,children:i})]})},ye=Y.ZP.div.withConfig({displayName:"ShortLinks__Div",componentId:"sc-u73ah6-0"})(["display:flex;align-items:center;margin-bottom:2rem;background-color:#fff;margin-left:15vw;margin-right:15vw;h2,h3{font-size:12px;font-weight:400;padding-left:1rem;padding-right:1rem;}h2{flex-grow:6;white-space:nowrap;width:150px;overflow:hidden;}h3{color:",";flex-grow:3;}@media only screen and (max-width:720px){flex-direction:column;font-size:2px;margin-left:5rem;margin-right:5rem;hr{flex-grow:1;border:none;background-color:",";height:1px;width:100%;}h2{width:250px;}}@media only screen and (max-width:480px){flex-direction:column;font-size:2px;margin-left:2rem;margin-right:2rem;h2{width:150px;}}@media only screen and (max-width:375px){flex-direction:column;font-size:2px;margin-left:1rem;margin-right:1rem;}"],te.Z.colors.cyan,te.Z.colors.gray),be=Y.ZP.button.withConfig({displayName:"ShortLinks__ModifiedButton",componentId:"sc-u73ah6-1"})(["background:",";color:#fff;border:0;border-radius:5px;flex-grow:3;padding:10px;margin:1rem;min-width:100px;min-height:25px;max-height:35px;background-color:",";&:hover{background-color:",";font-weight:bold;}"],te.Z.colors.cyan,(function(e){return"Copy"===e.buttonText?te.Z.colors.cyan:te.Z.colors.darkViolet}),(function(e){return"Copy"===e.buttonText?te.Z.colors.lightCyan:te.Z.colors.grayishViolet})),ke=t(5675),je=Y.ZP.div.withConfig({displayName:"styleVenue__Div",componentId:"sc-vvjuu3-0"})(["color:",";font-size:1.4em;text-align:center;display:flex;flex-direction:column;justify-content:center;padding-left:25%;padding-right:25%;padding-bottom:10%;background-color:#fff;@media only screen and (max-width:480px){padding-left:15%;padding-right:15%;div{max-width:240;max-height:240;}}"],(function(e){return e.color})),_e={src:"/_next/static/media/people_working.fb42ac58.svg",height:405,width:405};var Se=function(){return(0,re.jsx)(re.Fragment,{children:(0,re.jsxs)(je,{children:[(0,re.jsx)("h1",{children:"MORE THAN JUST SHORTER LINK"}),(0,re.jsx)("div",{children:(0,re.jsx)(ke.default,{src:_e,alt:"img",width:250,height:250})})]})})};var Ce=function(){var e=(0,a.useState)(""),n=e[0],t=e[1],i=(0,a.useState)(""),c=i[0],u=i[1],d=(0,a.useState)(""),s=d[0],l=d[1],f=function(){var e,n=(e=o().mark((function e(n){var r,i,a,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(n),u("https://api.shrtco.de/v2/shorten?url=".concat(n)),e.next=4,fetch(c,{method:"post"});case 4:return r=e.sent,e.next=7,r.json();case 7:return i=e.sent,a=i.result,console.log(a),e.next=12,a.short_link;case 12:d=e.sent,console.log(d),l(d);case 15:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(i,o){var a=e.apply(n,t);function c(e){r(a,i,o,c,u,"next",e)}function u(e){r(a,i,o,c,u,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,re.jsxs)(re.Fragment,{children:[(0,re.jsx)(Se,{}),(0,re.jsx)(xe,{handleOnSubmitSearch:f}),s?(0,re.jsx)(we,{query:n,shortLink:s}):void 0,(0,re.jsx)(ue,{}),(0,re.jsx)(ae,{}),(0,re.jsx)(me,{})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9590)}])}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);