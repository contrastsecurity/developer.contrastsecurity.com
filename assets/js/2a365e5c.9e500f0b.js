"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[1184],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:e},l),{},{components:r})):n.createElement(m,i({ref:e},l))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3889:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Securing Java Applications",sidebar_position:1},s=void 0,u={unversionedId:"docs/contrast-platform/tutorial-java/index",id:"docs/contrast-platform/tutorial-java/index",title:"Securing Java Applications",description:"Automated tools give developers accurate security context at different phases of development without the need to become a dedicated security expert. Choose the part of development that you are securing:",source:"@site/docs/docs/contrast-platform/tutorial-java/index.md",sourceDirName:"docs/contrast-platform/tutorial-java",slug:"/docs/contrast-platform/tutorial-java/",permalink:"/docs/contrast-platform/tutorial-java/",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/docs/contrast-platform/tutorial-java/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Securing Java Applications",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Where Do I Start?",permalink:"/docs/contrast-platform/where-do-i-start"},next:{title:"Getting Started: Build-Time Security",permalink:"/docs/contrast-platform/tutorial-java/securing-build-time"}},l={},p=[],d={toc:p};function f(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Automated tools give developers accurate security context at different phases of development without the need to become a dedicated security expert. Choose the part of development that you are securing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At ",(0,a.kt)("a",{parentName:"li",href:"/docs/contrast-platform/tutorial-java/securing-build-time"},"build time"),", tools can analyze dependencies to find vulnerable components (keeping risk out) and scan code to find custom vulnerabilities."),(0,a.kt)("li",{parentName:"ul"},"During ",(0,a.kt)("a",{parentName:"li",href:"/docs/contrast-platform/tutorial-java/iast-security"},"testing"),", a monitoring agent works inside the application to gather accurate security information from running APIs."),(0,a.kt)("li",{parentName:"ul"},"In production, a performance-optimized security agent works inside the application to defend specific APIs against specific threats.")))}f.isMDXComponent=!0}}]);