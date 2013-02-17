window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(C.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function u(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),u(o,t,n))}function l(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)D[n[r]]=!!(n[r]in w);return D.list&&(D.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),D}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;c>i;i++)w.setAttribute("type",o=e[i]),r="text"!==w.type,r&&(w.value=E,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==n?(g.appendChild(w),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=E)),N[e[i]]=!!r;return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,d,m="2.6.2",p={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,w=t.createElement("input"),E=":)",x={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",k=S.split(" "),T=S.toLowerCase().split(" "),M={svg:"http://www.w3.org/2000/svg"},$={},N={},D={},P=[],j=P.slice,F=function(e,n,r,o){var a,i,c,u,s=t.createElement("div"),l=t.body,f=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),s.appendChild(c);return a=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),s.id=v,(l?s:f).innerHTML+=a,f.appendChild(s),l||(f.style.background="",f.style.overflow="hidden",u=g.style.overflow,g.style.overflow="hidden",g.appendChild(f)),i=n(s,e),l?s.parentNode.removeChild(s):(f.parentNode.removeChild(f),g.style.overflow=u),!!i},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;d=a(L,"undefined")||a(L.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(j.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(j.call(arguments)))};return r}),$.flexbox=function(){return s("flexWrap")},$.flexboxlegacy=function(){return s("boxDirection")},$.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},$.canvastext=function(){return!(!p.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},$.webgl=function(){return!!e.WebGLRenderingContext},$.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},$.geolocation=function(){return"geolocation"in navigator},$.postmessage=function(){return!!e.postMessage},$.websqldatabase=function(){return!!e.openDatabase},$.indexedDB=function(){return!!s("indexedDB",e)},$.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},$.history=function(){return!(!e.history||!history.pushState)},$.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},$.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},$.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},$.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},$.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},$.backgroundsize=function(){return s("backgroundSize")},$.borderimage=function(){return s("borderImage")},$.borderradius=function(){return s("borderRadius")},$.boxshadow=function(){return s("boxShadow")},$.textshadow=function(){return""===t.createElement("div").style.textShadow},$.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},$.cssanimations=function(){return s("animationName")},$.csscolumns=function(){return s("columnCount")},$.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+C.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},$.cssreflections=function(){return s("boxReflect")},$.csstransforms=function(){return!!s("transform")},$.csstransforms3d=function(){var e=!!s("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},$.csstransitions=function(){return s("transition")},$.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},$.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',E,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},$.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},$.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},$.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},$.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},$.webworkers=function(){return!!e.Worker},$.applicationcache=function(){return!!e.applicationCache},$.svg=function(){return!!t.createElementNS&&!!t.createElementNS(M.svg,"svg").createSVGRect},$.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==M.svg},$.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(x.call(t.createElementNS(M.svg,"animate")))},$.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(x.call(t.createElementNS(M.svg,"clipPath")))};for(var H in $)d($,H)&&(f=H.toLowerCase(),p[f]=$[H](),P.push((p[f]?"":"no-")+f));return p.input||l(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,h!==n&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=w=null,function(e,t){function r(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function o(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function i(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),o.canHaveChildren&&!m.test(e)?r.frag.appendChild(o):o}function c(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||a(e);for(var r=n.frag.cloneNode(),i=0,c=o(),u=c.length;u>i;i++)r.createElement(c[i]);return r}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var n=a(e);return!y.shivCSS||l||n.hasCSS||(n.hasCSS=!!r(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),f||u(e,n),e}var l,f,d=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return e.cloneNode===n||e.createDocumentFragment===n||e.createElement===n}()}catch(r){l=!0,f=!0}})();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:f,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:c};e.html5=y,s(t)}(this,t),p._version=m,p._prefixes=C,p._domPrefixes=T,p._cssomPrefixes=k,p.mq=z,p.hasEvent=A,p.testProp=function(e){return c([e])},p.testAllProps=s,p.testStyles=F,p.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+P.join(" "):""),p}(this,this.document);