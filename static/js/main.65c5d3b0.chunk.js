(this.webpackJsonphackernews=this.webpackJsonphackernews||[]).push([[0],{36:function(e,t,n){e.exports=n(64)},41:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),l=n.n(o);n(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(1),c=n(8),s={extraTiny:"0.6.25rem",tiny:"0.75rem",small:"0.875rem",medium:"1rem",large:"1.125rem",extraLarge:"1.25rem",extraExtraLarge:"1.5rem",extraExtraExtraLarge:"3rem"},m={white:"#F3F7F0",lightGrey:"#d4d4d4",darkGrey:"#343434",blue:"#1B4965",pink:"#A93F55",yellow:"#FFC857"},u={fontSizes:s,breakpoints:{large:"1400px"},globalPadding:"10vw",spacing:{tiny:"0.5rem",small:"1rem",medium:"1.5rem",large:"3rem",extraLarge:"4rem",extraExtraLarge:"8rem"},colors:m},d=n(7),f="/hackernews/",p="/hackernews/designSystem",h=function(e){return"\n    font-family: 'Quicksand', sans-serif;\n    color: ".concat(e.color?m["".concat(e.color)]:m.darkGrey,";\n    text-align: ").concat(e.textAlign?e.textAlign:"left",";\n    font-size: ").concat(e.fontSize?s["".concat(e.fontSize)]:s.medium,";\n    line-height: 1.5em;\n    font-weight: ").concat(e.bold?700:400,";\n    overflow: ").concat(e.ellipsis?"hidden":"visible","\n    text-overflow: ").concat(e.ellipsis?"ellipsis":"unset","\n")},g=i.b.span.withConfig({displayName:"Typography__Span",componentId:"edde5r-0"})(["",""],(function(e){return h(e)})),E=i.b.p.withConfig({displayName:"Typography__Paragraph",componentId:"edde5r-1"})([""," max-width:600px;"],(function(e){return h(e)})),w=i.b.h1.withConfig({displayName:"Typography__H1",componentId:"edde5r-2"})([""," text-transform:uppercase;font-weight:700;font-size:",";"],(function(e){return h(e)}),(function(e){var t=e.fontSize,n=e.theme.fontSizes.extraExtraExtraLarge;return t||n})),y=i.b.h2.withConfig({displayName:"Typography__H2",componentId:"edde5r-3"})([""," text-transform:uppercase;font-weight:700;letter-spacing:-0.03rem;font-size:",";"],(function(e){return h(e)}),(function(e){var t=e.fontSize,n=e.theme.fontSizes.extraExtraLarge;return t||n})),b=i.b.h3.withConfig({displayName:"Typography__H3",componentId:"edde5r-4"})([""," text-transform:uppercase;font-weight:700;letter-spacing:-0.03rem;font-size:",";text-overflow:ellipsis;overflow:hidden;"],(function(e){return h(e)}),(function(e){var t=e.fontSize,n=e.theme.fontSizes.extraLarge;return t||n})),x=i.b.h4.withConfig({displayName:"Typography__H4",componentId:"edde5r-5"})([""," text-transform:uppercase;font-weight:700;letter-spacing:-0.03rem;font-size:",";text-overflow:ellipsis;overflow:hidden;"],(function(e){return h(e)}),(function(e){var t=e.fontSize,n=e.theme.fontSizes.medium;return t||n})),v=i.b.div.withConfig({displayName:"Layout__Block",componentId:"hhafxj-0"})(["background-color:",";"],(function(e){var t=e.color,n=e.theme,r=n.colors,a=n.colors.white;return t?r["".concat(t)]:a})),k=function(e){var t=e.color,n=e.padding,r=void 0===n||n,o=e.children;return a.a.createElement(v,{color:t||"white"},r&&a.a.createElement(L,{size:"extraLarge"}),o,r&&a.a.createElement(L,{size:"extraExtraLarge"}))},z=i.b.div.withConfig({displayName:"Layout__PageWrapper",componentId:"hhafxj-1"})(["min-height:100vh;width:100%;background-color:",";"],(function(e){return e.theme.colors.lightGrey})),j=i.b.div.withConfig({displayName:"Layout__PageContent",componentId:"hhafxj-2"})(["width:100%;height:100%;max-width:",";margin:0 auto;"],(function(e){return e.theme.breakpoints.large})),_=(i.b.div.withConfig({displayName:"Layout__Row",componentId:"hhafxj-3"})(["display:flex;flex-direction:row;justify-content:flex-start;"]),i.b.div.withConfig({displayName:"Layout__RowCenter",componentId:"hhafxj-4"})(["display:flex;flex-direction:row;justify-content:center;"])),C=(i.b.div.withConfig({displayName:"Layout__Column",componentId:"hhafxj-5"})(["display:flex;flex-direction:column;justify-content:flex-start;"]),i.b.div.withConfig({displayName:"Layout__ColumnCenter",componentId:"hhafxj-6"})(["display:flex;flex-direction:column;justify-content:center;"]),i.b.div.withConfig({displayName:"Layout__ContentWrapper",componentId:"hhafxj-7"})(["padding:",";"],(function(e){var t=e.theme.globalPadding;return"0 ".concat(t)}))),L=i.b.div.withConfig({displayName:"Layout__VerticalSpacer",componentId:"hhafxj-8"})(["height:",";"],(function(e){var t=e.size,n=e.theme,r=n.spacing,a=n.spacing.medium;return t?r["".concat(t)]:a})),O=n(14),I=n.n(O),N=n(30),S=n(6),G=n(31),H=n.n(G),T=function(e,t){var n=Object(r.useState)(e),a=Object(S.a)(n,2),o=a[0],l=a[1],i=Object(r.useState)(t),c=Object(S.a)(i,2),s=c[0],m=c[1],u=Object(r.useState)(!1),d=Object(S.a)(u,2),f=d[0],p=d[1],h=Object(r.useState)(!1),g=Object(S.a)(h,2),E=g[0],w=g[1],y=function(){var e=Object(N.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),p(!0),e.prev=2,e.next=5,H()(t);case 5:n=e.sent,m(n.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),w(!0);case 12:p(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){y(o)}),[o]),{data:s,isLoading:f,isError:E,setUrl:l}},W="undefined"!==typeof window;function P(e){var t=e.element,n=e.useWindow;if(!W)return{x:0,y:0};var r=t?t.current:document.body,a=r?r.getBoundingClientRect():{top:0,left:0,height:0,width:0};return n?{x:window.scrollX,y:window.scrollY,width:window.innerWidth,height:window.innerHeight}:{x:a.left,y:a.top,width:a.width,height:a.height}}function B(e,t,n,a,o){var l=Object(r.useRef)(P({useWindow:a,element:n})),i=null,c=function(){var t=P({element:n,useWindow:a});e({prevPos:l.current,currPos:t}),l.current=t,i=null};Object(r.useLayoutEffect)((function(){var e=function(){o?null===i&&(i=setTimeout(c,o)):c()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),t)}var F=n(3);function q(){var e=Object(F.a)(["\n    font-size: ",";\n    padding: ",";\n    font-weight: 500;\n    text-transform: uppercase;\n    transition: color 0.3s ease, background-color 0.3s ease;\n    background-color: ",";\n    border-width: 0.12rem;\n    border-style: solid;\n    border-radius: 1.5rem;\n    border-color: ",";\n    color: ",";\n\n    &:hover,\n    &:focus {\n        background-color: ",";\n        color: ",";\n    }\n"]);return q=function(){return e},e}var R=i.b.button(q(),(function(e){return e.theme.fontSizes.medium}),(function(e){var t=e.theme.spacing,n=t.tiny,r=t.medium;return"".concat(n," ").concat(r)}),(function(e){var t=e.color,n=e.theme,r=n.colors,a=n.colors.blue;return t?r["".concat(t)]:a}),(function(e){var t=e.color,n=e.theme,r=n.colors,a=n.colors.blue;return t?r["".concat(t)]:a}),(function(e){var t=e.color,n=e.theme.colors,r=n.white,a=n.darkGrey;switch(t){case"white":case"yellow":return a;case"blue":case"pink":case"darkGrey":case void 0:default:return r}}),(function(e){var t=e.color,n=e.theme.colors.white;switch(t){case"white":case"yellow":return"rgba(0, 0, 0, 0.4)";case"blue":case"pink":case"darkGrey":case void 0:default:return n}}),(function(e){var t=e.color,n=e.theme,r=n.colors,a=n.colors.blue;return t?r["".concat(t)]:a})),A=function(e){var t=e.color,n=void 0===t?"blue":t,r=e.onClick,o=void 0===r?function(){return null}:r,l=e.children;return a.a.createElement(R,{onClick:o,color:n},l)},M=i.b.div.withConfig({displayName:"styles__ErrorWrapper",componentId:"sc-1r0yy8f-0"})(["background-color:",";padding:",";border-radius:1rem;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.spacing.medium})),U=function(e){var t=e.errorMessage,n=e.retry;return a.a.createElement(M,null,a.a.createElement(y,null,"Something broke!"),a.a.createElement(L,{size:"large"}),a.a.createElement(E,null,t),a.a.createElement(L,{size:"large"}),n?a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{onClick:n},"Retry"),a.a.createElement(L,{size:"medium"})):null,a.a.createElement(c.b,{to:f},a.a.createElement(A,{color:"darkGrey"},"Home")))};function D(){var e=Object(F.a)(["\n    text-decoration: none;\n"]);return D=function(){return e},e}function Y(){var e=Object(F.a)(["\n    left: 0;\n    right: 0;\n    position: absolute;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n"]);return Y=function(){return e},e}function J(){var e=Object(F.a)(["\n    position: relative;\n"]);return J=function(){return e},e}function $(){var e=Object(F.a)(["\n    text-overflow: ellipsis;\n"]);return $=function(){return e},e}function Q(){var e=Object(F.a)(["\n    font-size: ",";\n    color: ",";\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 5;\n    -webkit-box-orient: vertical;\n\n    &:hover {\n        text-decoration: underline;\n    }\n"]);return Q=function(){return e},e}function V(){var e=Object(F.a)(["\n    flex-basis: 0px;\n    flex-grow: 1;\n    padding: ",";\n"]);return V=function(){return e},e}function X(){var e=Object(F.a)(["\n    flex-basis: 2rem;\n    padding: ",";\n"]);return X=function(){return e},e}function Z(){var e=Object(F.a)(["\n    background-color: ",";\n    border-radius: 0.25rem;\n    transition: background-color 0.3s ease;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n\n    grid-column: ",";\n    grid-row: ",";\n\n    &:hover {\n        cursor: pointer;\n    }\n"]);return Z=function(){return e},e}var K=i.b.article(Z(),(function(e){var t=e.selected,n=e.theme.colors,r=n.blue,a=n.pink;return"".concat(t?a:r)}),(function(e){return e.selected?"span 2":"span 1"}),(function(e){return e.selected?"span 2":"span 1"})),ee=i.b.div(X(),(function(e){return e.theme.spacing.small})),te=i.b.div(V(),(function(e){var t=e.theme.spacing,n=t.small,r=t.medium;return"".concat(n," ").concat(r," ").concat(n," 0")})),ne=Object(i.b)(x)(Q(),(function(e){return e.theme.fontSizes.small}),(function(e){return e.theme.colors.yellow})),re=Object(i.b)(g)($()),ae=i.b.div(J()),oe=Object(i.b)(E)(Y()),le=i.b.a(D()),ie=function(e){var t=e.isError,n=e.isLoading,o=e.story,l=e.retry,i=Object(r.useState)(!1),c=Object(S.a)(i,2),s=c[0],m=c[1];return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(U,{errorMessage:"Unable to retrieve story",retry:l}):n?a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,"Loading story")):o?a.a.createElement(K,{onClick:function(e){if("h4"===e.target.localName)return null;e.target&&m(!s)},selected:s},a.a.createElement(ee,null,a.a.createElement(E,{color:"white",textAlign:"center"},"Score"),a.a.createElement(E,{color:"white",textAlign:"center"},o.score)),a.a.createElement(te,null,a.a.createElement(le,{href:o.url,target:"_blank"},a.a.createElement(ne,{color:"white"},o.title)),a.a.createElement(ae,null,a.a.createElement(oe,{color:"white"},a.a.createElement(g,{color:"white"},"By "),a.a.createElement(re,{color:"white",bold:!0},o.by))))):null)},ce=(Object(r.memo)(ie),Object(r.memo)((function(e){var t=e.storyId,n="".concat("https://hacker-news.firebaseio.com/v0/item/").concat(t,".json"),o=T(n,[]),l=o.data,i=o.isLoading,c=o.isError,s=o.setUrl,m=l;Object(r.useEffect)((function(){s(n)}),[s,n]);return a.a.createElement(ie,{isError:c,isLoading:i,retry:function(){s(n)},story:m})})));function se(){var e=Object(F.a)(["\n    display: grid;\n    /* grid-template-columns: repeat(6, 1fr); */\n    grid-gap: 1rem;\n    justify-content: center;\n    align-content: start;\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n    grid-auto-rows: minmax(180px, auto);\n"]);return se=function(){return e},e}var me=i.b.div(se()),ue=function(e){var t=e.isError,n=e.isLoading,o=e.storyIds,l=e.retry,i=Object(r.useRef)(null),c=Object(r.useState)(24),s=Object(S.a)(c,2),m=s[0],u=s[1],d="undefined"!==typeof window;return B((function(e){var t,n,r,a=e.currPos;if(!d||!i||!i.current||m>=500)return null;if(t=a.y,n=a.height,r=window.innerHeight,t+n<=r){var o=function(e,t,n){if(t>n)throw new Error("min must be smaller than max");return Math.min(Math.max(e,t),n)}(m+24,0,500);u(o)}}),[m],i,!1,300),a.a.createElement(a.a.Fragment,null,t?a.a.createElement(U,{errorMessage:"Unable to retrieve stories",retry:l}):n?a.a.createElement(me,null,a.a.createElement("span",null,"Loading stories")):a.a.createElement(me,{ref:i},o.slice(0,m).map((function(e){return a.a.createElement(ce,{key:e,storyId:e})}))))},de=function(e){var t=e.storyType,n="".concat("https://hacker-news.firebaseio.com/v0/").concat(t,".json"),o=T(n,[]),l=o.data,i=o.isLoading,c=o.isError,s=o.setUrl,m=l;Object(r.useEffect)((function(){s(n)}),[s,n]);return a.a.createElement(ue,{isError:c,isLoading:i,retry:function(){s(n)},storyIds:m})},fe=function(){return a.a.createElement(z,null,a.a.createElement(j,null,a.a.createElement(k,null,a.a.createElement(C,null,a.a.createElement(L,{size:"extraExtraLarge"}),a.a.createElement(w,null,"Hacker News"),a.a.createElement(L,{size:"large"}),a.a.createElement(de,{storyType:"topstories"})))))},pe=i.b.div.withConfig({displayName:"styles__TilesWrapper",componentId:"sc-8cdiqq-0"})(["width:100%;"]),he=i.b.div.withConfig({displayName:"styles__FlexWrapRow",componentId:"sc-8cdiqq-1"})(["display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;margin:",";"],(function(e){var t=e.theme.spacing.small;return"-".concat(t)})),ge=i.b.div.withConfig({displayName:"styles__ColorTileWrapper",componentId:"sc-8cdiqq-2"})(["padding:",";"],(function(e){return e.theme.spacing.small})),Ee=i.b.div.withConfig({displayName:"styles__ColorTile",componentId:"sc-8cdiqq-3"})(["box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px;padding:",";background-color:",";width:170px;"],(function(e){var t=e.theme.spacing,n=t.small,r=t.extraLarge;return"".concat(r," ").concat(n," ").concat(n," ").concat(n)}),(function(e){return e.color})),we=i.b.div.withConfig({displayName:"styles__ColorLabelWrapper",componentId:"sc-8cdiqq-4"})(["display:flex;flex-direction:row;justify-content:space-around;background-color:",";padding:",";"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.spacing.tiny})),ye=Object.keys(m),be=function(){return a.a.createElement(z,null,a.a.createElement(j,null,a.a.createElement(k,null,a.a.createElement(L,{size:"extraExtraLarge"}),a.a.createElement(C,null,a.a.createElement(w,null,"Design System"),a.a.createElement(L,{size:"large"}),a.a.createElement(y,null,"Colours"),a.a.createElement(L,{size:"large"}),a.a.createElement(pe,null,a.a.createElement(he,null,ye.map((function(e){return a.a.createElement(ge,{key:e},a.a.createElement(Ee,{color:m["".concat(e)]},a.a.createElement(we,null,a.a.createElement(g,null,function(e){var t=e.replace(/([A-Z])/g," $1").trim();return t.charAt(0).toUpperCase()+t.slice(1)}(e),":"),a.a.createElement(g,null,m["".concat(e)]))))})))))),a.a.createElement(k,{color:"yellow"},a.a.createElement(L,{size:"medium"}),a.a.createElement(C,null,a.a.createElement(y,{color:"darkGrey"},"Colour Sections"),a.a.createElement(L,{size:"large"}),a.a.createElement(b,{color:"darkGrey"},"Yellow"),a.a.createElement(L,{size:"large"}),a.a.createElement(E,{color:"darkGrey"},"Example section text"))),a.a.createElement(k,{color:"blue"},a.a.createElement(L,{size:"medium"}),a.a.createElement(C,null,a.a.createElement(b,{color:"white"},"Blue"),a.a.createElement(L,{size:"large"}),a.a.createElement(E,{color:"white"},"Example section text"))),a.a.createElement(k,{color:"white"},a.a.createElement(L,{size:"medium"}),a.a.createElement(C,null,a.a.createElement(b,{color:"darkGrey"},"White"),a.a.createElement(L,{size:"large"}),a.a.createElement(E,{color:"darkGrey"},"Example section text"))),a.a.createElement(k,{color:"pink"},a.a.createElement(L,{size:"medium"}),a.a.createElement(C,null,a.a.createElement(b,{color:"white"},"Pink"),a.a.createElement(L,{size:"large"}),a.a.createElement(E,{color:"white"},"Example section text"))),a.a.createElement(k,{color:"darkGrey"},a.a.createElement(L,{size:"medium"}),a.a.createElement(C,null,a.a.createElement(b,{color:"white"},"Dark Grey"),a.a.createElement(L,{size:"large"}),a.a.createElement(E,{color:"white"},"Example section text"))),a.a.createElement(k,{color:"blue"},a.a.createElement(L,{size:"medium"}),a.a.createElement(C,null,a.a.createElement(y,{color:"white"},"Typography"),a.a.createElement(L,{size:"large"}),a.a.createElement(w,{color:"white"},"H1 Example text"),a.a.createElement(L,{size:"large"}),a.a.createElement(y,{color:"white"},"H2 Example text"),a.a.createElement(L,{size:"large"}),a.a.createElement(b,{color:"white"},"H3 Example text"),a.a.createElement(L,{size:"large"}),a.a.createElement(E,{color:"white"},"Paragraph example text"))),a.a.createElement(k,{color:"white",padding:!1},a.a.createElement(L,{size:"extraLarge"}),a.a.createElement(C,null,a.a.createElement(L,{size:"medium"}),a.a.createElement(y,{color:"darkGrey"},"Controls"),a.a.createElement(L,{size:"large"}),a.a.createElement(b,{color:"darkGrey"},"Buttons"),a.a.createElement(L,{size:"large"}),a.a.createElement(A,null,"Blue button (default)"),a.a.createElement(L,{size:"small"}),a.a.createElement(A,{color:"pink"},"Pink Button"),a.a.createElement(L,{size:"small"}),a.a.createElement(A,{color:"darkGrey"},"Dark Grey Button"),a.a.createElement(L,{size:"tiny"}))),a.a.createElement(k,{color:"pink",padding:!1},a.a.createElement(L,{size:"tiny"}),a.a.createElement(C,null,a.a.createElement(A,{color:"yellow"},"Yellow Button"),a.a.createElement(L,{size:"small"}),a.a.createElement(A,{color:"white"},"white Button"),a.a.createElement(L,{size:"tiny"}))),a.a.createElement(k,{color:"blue",padding:!1},a.a.createElement(L,{size:"extraLarge"}),a.a.createElement(C,null,a.a.createElement(L,{size:"medium"}),a.a.createElement(y,{color:"white"},"Components"),a.a.createElement(L,{size:"large"}),a.a.createElement(b,{color:"white"},"Error message"),a.a.createElement(L,{size:"medium"}),a.a.createElement(U,{errorMessage:"This is an error message",retry:function(){}}),a.a.createElement(L,{size:"large"})),a.a.createElement(L,{size:"extraExtraLarge"}))))},xe=function(){var e=Object(d.g)().pathname;return Object(r.useEffect)((function(){void 0!==typeof window&&window.scrollTo&&window.scrollTo(0,0)}),[e]),null},ve=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(xe,null),a.a.createElement(d.d,null,a.a.createElement(d.b,{path:p,component:be}),a.a.createElement(d.b,{exact:!0,path:f,component:fe}),a.a.createElement(d.a,{from:"/",to:f})))},ke=i.b.header.withConfig({displayName:"styles__HeaderWrapper",componentId:"o6tmny-0"})(["position:fixed;top:0;left:0;right:0;margin:0 auto;width:100vw;max-width:",";transition:margin ease 0.2s,opacity ease 0.3s;margin-top:",";opacity:",";z-index:10;"],(function(e){return e.theme.breakpoints.large}),(function(e){return e.visible?"0":"-100px"}),(function(e){return e.visible?"1":"0"})),ze=i.b.div.withConfig({displayName:"styles__HeaderInner",componentId:"o6tmny-1"})(["margin:0 auto;background-color:",";padding:",";"],(function(e){return e.theme.colors.darkGrey}),(function(e){var t=e.theme,n=t.spacing.small,r=t.globalPadding;return"".concat(n," ").concat(r)})),je=i.b.ul.withConfig({displayName:"styles__Links",componentId:"o6tmny-2"})(["padding:0;max-width:",";display:flex;flex-direction:row;list-style-type:none;justify-content:flex-start;"],(function(e){return e.theme.breakpoints.large})),_e=i.b.li.withConfig({displayName:"styles__HeaderLinkItem",componentId:"sc-15rws53-0"})(["padding:0;margin:",";"],(function(e){var t=e.theme.spacing.small;return"0 ".concat(t," 0 0")})),Ce=i.b.div.withConfig({displayName:"styles__HoverInidcator",componentId:"sc-15rws53-1"})(["height:3px;background-color:",";margin-top:",";width:100%;max-width:0;transition:max-width ease 0.3s;"],(function(e){return e.theme.colors.yellow}),(function(e){return e.theme.spacing.tiny})),Le=(i.b.div.withConfig({displayName:"styles__RowCenter",componentId:"sc-15rws53-2"})(["display:flex;flex-direction:row;justify-content:center;"]),Object(i.b)(c.c).withConfig({displayName:"styles__NavLinkStyled",componentId:"sc-15rws53-3"})(["text-decoration:none;display:flex;flex-direction:column;justify-content:center;","{transition:color ease 0.3s;font-weight:600;}&.selected{","{max-width:150px;}}&:hover,&:focus{outline:none;","{color:",";}}"],E,Ce,E,(function(e){return e.theme.colors.yellow}))),Oe=function(e){var t=e.to,n=e.title,r=e.exact,o=void 0!==r&&r;return a.a.createElement(_e,null,a.a.createElement(Le,{exact:o,to:t,activeClassName:"selected"},a.a.createElement(E,{color:"white"},n),a.a.createElement(_,null,a.a.createElement(Ce,null))))},Ie=function(e){var t=e.visible;return a.a.createElement(ke,{visible:t},a.a.createElement(ze,null,a.a.createElement(y,{color:"white"},"Hacker News"),a.a.createElement(L,{size:"medium"}),a.a.createElement("nav",null,a.a.createElement(je,null,a.a.createElement(Oe,{to:f,title:"Home",exact:!0}),a.a.createElement(Oe,{to:p,title:"Design System"})))))},Ne=function(){var e=Object(r.useState)(!0),t=Object(S.a)(e,2),n=t[0],o=t[1];return B((function(e){var t=e.prevPos,r=e.currPos.y>=t.y;r!==n&&o(r)}),[n],null,!1,300),Object(r.useMemo)((function(){return a.a.createElement(Ie,{visible:n})}),[n])},Se=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{theme:u},a.a.createElement(c.a,null,a.a.createElement(Ne,null),a.a.createElement(ve,null))))};l.a.render(a.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.65c5d3b0.chunk.js.map