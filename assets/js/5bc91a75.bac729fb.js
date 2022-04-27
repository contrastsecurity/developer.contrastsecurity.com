"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[4930],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6533:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Securing Go Applications",sidebar_position:1},s=void 0,l={unversionedId:"docs/contrast-platform/tutorial-golang/index",id:"docs/contrast-platform/tutorial-golang/index",title:"Securing Go Applications",description:"Contrast provides sensors for Go applications that work inside the application to gather accurate security information from the executing APIs.",source:"@site/docs/docs/contrast-platform/tutorial-golang/index.md",sourceDirName:"docs/contrast-platform/tutorial-golang",slug:"/docs/contrast-platform/tutorial-golang/",permalink:"/docs/contrast-platform/tutorial-golang/",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/docs/contrast-platform/tutorial-golang/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Securing Go Applications",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:".NET Core",permalink:"/docs/contrast-platform/tutorial-dotnet/dotnet-core"},next:{title:"Getting Started: Test Security",permalink:"/docs/contrast-platform/tutorial-golang/iast-security"}},u={},p=[],f={toc:p};function d(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contrast provides sensors for Go applications that work inside the application to gather accurate security information from the executing APIs."),(0,a.kt)("p",null,"The agent works by integrating into the build phase, adding sensors at compile-time. After testing, teams deploy a separate build of the applicatio that does not contain these sensors."))}d.isMDXComponent=!0}}]);