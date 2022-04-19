"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[3924],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1593:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1,title:"What is DevSec",hide_table_of_contents:!0},l=void 0,c={unversionedId:"getting-started/what-is-devsec",id:"getting-started/what-is-devsec",isDocsHomePage:!1,title:"What is DevSec",description:"DevSec is Security Self-Service Tools for Developers",source:"@site/docs/getting-started/what-is-devsec.md",sourceDirName:"getting-started",slug:"/getting-started/what-is-devsec",permalink:"/docs/getting-started/what-is-devsec",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/getting-started/what-is-devsec.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"What is DevSec",hide_table_of_contents:!0},sidebar:"tutorialSidebar",next:{title:"DevSec with Contrast",permalink:"/docs/getting-started/where-do-i-start"}},u=[{value:"DevSec is Security Self-Service Tools for Developers",id:"devsec-is-security-self-service-tools-for-developers",children:[{value:"Does DevSec fit into what I&#39;m already doing?",id:"does-devsec-fit-into-what-im-already-doing",children:[]}]},{value:"How do I apply DevSec",id:"how-do-i-apply-devsec",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"devsec-is-security-self-service-tools-for-developers"},"DevSec is Security Self-Service Tools for Developers"),(0,i.kt)("p",null,"DevSec is a suite of techniques that enable developers to self-service on most security tasks. DevSec does not solve all security problems, rather it plugs high-accuracy automation into the right development spots to solve issues with a low cognitive burden."),(0,i.kt)("p",null,"Tools that support DevSec come in a few forms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tools that detect build/coding flaws:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Composition analyzers, that look for known vulnerabilities in libraries."),(0,i.kt)("li",{parentName:"ul"},"Static Analyzers, that look for coding flaws or code smells in individual files or traced between code and libraries."))),(0,i.kt)("li",{parentName:"ul"},"Tools that get security results from applications as they are tested:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Integrated analyzers, that watch inside of applications to extract security and/or performance information."))),(0,i.kt)("li",{parentName:"ul"},"Tools that monitor and/or defend production applications:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Application Security Monitoring, a technique for observing and tracing security flows within an application.")))),(0,i.kt)("h3",{id:"does-devsec-fit-into-what-im-already-doing"},"Does DevSec fit into what I'm already doing?"),(0,i.kt)("p",null,"DevSec fits into ",(0,i.kt)("strong",{parentName:"p"},"agile")," styles because its automation enables teams to get an act on specific security results during any sprints."),(0,i.kt)("p",null,"DevSec fits into ",(0,i.kt)("strong",{parentName:"p"},"team topologies")," because the tools can often be provided and managed by an enabling team, freeing developers (a stream-aligned team) from the cognitive burden of always knowing and worrying about security."),(0,i.kt)("h2",{id:"how-do-i-apply-devsec"},"How do I apply DevSec"),(0,i.kt)("p",null,"You can do DevSec by adding automated security tooling into your regular development flow and making sure that results can be seen when they matter. "),(0,i.kt)("p",null,"When automated tools are in place, the important step is people looking at and acting on results. The value is in the remediation and fixing of any findings. Setting up a ceremonial tool whose results will be ignored is not DevSec."))}p.isMDXComponent=!0}}]);