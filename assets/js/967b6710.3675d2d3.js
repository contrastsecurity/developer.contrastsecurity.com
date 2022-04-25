"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[2976],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},219:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Getting Started: Test Security",sidebar_position:3},s=void 0,c={unversionedId:"getting-started/tutorial-node/iast-security",id:"getting-started/tutorial-node/iast-security",title:"Getting Started: Test Security",description:"Done by: Application Developer",source:"@site/docs/getting-started/tutorial-node/iast-security.md",sourceDirName:"getting-started/tutorial-node",slug:"/getting-started/tutorial-node/iast-security",permalink:"/docs/getting-started/tutorial-node/iast-security",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/getting-started/tutorial-node/iast-security.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Getting Started: Test Security",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started: Build-Time Security",permalink:"/docs/getting-started/tutorial-node/securing-build-time"},next:{title:"How It Works",permalink:"/docs/getting-started/tutorial-node/how-it-works"}},u={},p=[{value:"Integrate the agent into startup",id:"integrate-the-agent-into-startup",level:3},{value:"Reference Documentation",id:"reference-documentation",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Done by: Application Developer",(0,o.kt)("br",null),"\nTime needed: 15 minutes",(0,o.kt)("br",null),"\nFrequency: done once for automation",(0,o.kt)("br",null),"\nWhat you get: high accuracy security results based from watching what your app did, with results as they happen."),(0,o.kt)("h3",{id:"integrate-the-agent-into-startup"},"Integrate the agent into startup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the agent",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @contrast/agent --no-optional\n"))),(0,o.kt)("li",{parentName:"ol"},"Update the scripts to instrument the application:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="package.json"',title:'"package.json"'},'  "scripts": {\n    "contrast": "node -r @contrast/agent <app-main>.js",\n    "start": ...,\n    "test": ...\n}\n'))),(0,o.kt)("li",{parentName:"ol"},"To test, start your application with:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run contrast\n")),"To use the application as normal, use the regular call. Contrast will have no performance impact when it is not engaged.")),(0,o.kt)("h2",{id:"reference-documentation"},"Reference Documentation"),(0,o.kt)("p",null,"For reference documentation, please consult the installation guide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.contrastsecurity.com/en/install-node-js-manually.html"},"Manual Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.contrastsecurity.com/en/install-node-js-agent-in-a-container.html"},"Container-specific options")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.contrastsecurity.com/en/ibm-cloud.html"},"IBM cloud")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.contrastsecurity.com/en/transpilers,-compilers-and-the-node-js-agent.html"},"Details about transpilers, Typescript, and source maps"))))}m.isMDXComponent=!0}}]);