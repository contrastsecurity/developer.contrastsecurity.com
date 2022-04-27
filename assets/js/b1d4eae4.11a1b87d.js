"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[8858],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],c={title:"Log Injection"},l=void 0,s={unversionedId:"docs/vulnerabilities/log-injection",id:"docs/vulnerabilities/log-injection",title:"Log Injection",description:"What is Log Injection",source:"@site/docs/docs/vulnerabilities/log-injection.mdx",sourceDirName:"docs/vulnerabilities",slug:"/docs/vulnerabilities/log-injection",permalink:"/docs/vulnerabilities/log-injection",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/docs/vulnerabilities/log-injection.mdx",tags:[],version:"current",frontMatter:{title:"Log Injection"},sidebar:"tutorialSidebar",previous:{title:"LDAP Injection",permalink:"/docs/vulnerabilities/ldap-injection"},next:{title:"NoSQL Injection",permalink:"/docs/vulnerabilities/nosql-injection"}},p={},u=[{value:"What is Log Injection",id:"what-is-log-injection",level:2},{value:"When can Log Injection affect my application",id:"when-can-log-injection-affect-my-application",level:2},{value:"How do I know if/where my application has a Log Injection vulnerability",id:"how-do-i-know-ifwhere-my-application-has-a-log-injection-vulnerability",level:2},{value:"How do I fix Log Injection",id:"how-do-i-fix-log-injection",level:2},{value:"How do people attack Log Injection flaws",id:"how-do-people-attack-log-injection-flaws",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-log-injection"},"What is Log Injection"),(0,r.kt)("p",null,"Log Injection occurs when remote input is used as part of a log statement without sanitization.\nAttackers can insert new lines and attempt add additional log statements of things that did not happen or simply pollute the ability of logs to be parsed."),(0,r.kt)("h2",{id:"when-can-log-injection-affect-my-application"},"When can Log Injection affect my application"),(0,r.kt)("p",null,"Log Injection affects applications can affect any application that logs data to files, which is most applications.\nLog Injection is commonly a nuisance vulnerability more than a major risk that can compromise an organization."),(0,r.kt)("h2",{id:"how-do-i-know-ifwhere-my-application-has-a-log-injection-vulnerability"},"How do I know if/where my application has a Log Injection vulnerability"),(0,r.kt)("p",null,"Contrast Assess can detect log injection vulnerabilities."),(0,r.kt)("h2",{id:"how-do-i-fix-log-injection"},"How do I fix Log Injection"),(0,r.kt)("p",null,"System operators can stream logs remotely or index logs into systems where things like new lines do not impact the records."),(0,r.kt)("h2",{id:"how-do-people-attack-log-injection-flaws"},"How do people attack Log Injection flaws"),(0,r.kt)("p",null,"Attackers generally append new lines to various parameters and then add custom timestamps that follow common logging conventions.\nAs a result when someone goes to parse logs as a file, it becomes difficult to read and hides certain actions."))}f.isMDXComponent=!0}}]);