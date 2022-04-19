"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[8364],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?i.createElement(h,a(a({ref:n},p),{},{components:t})):i.createElement(h,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5579:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],c={},l="LDAP Injection",s={unversionedId:"learn-devsec/vulnerabilities/ldap-injection",id:"learn-devsec/vulnerabilities/ldap-injection",isDocsHomePage:!1,title:"LDAP Injection",description:"What is LDAP Injection",source:"@site/docs/learn-devsec/vulnerabilities/ldap-injection.mdx",sourceDirName:"learn-devsec/vulnerabilities",slug:"/learn-devsec/vulnerabilities/ldap-injection",permalink:"/docs/learn-devsec/vulnerabilities/ldap-injection",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/learn-devsec/vulnerabilities/ldap-injection.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar2",previous:{title:"Insecure Hash Algorithm",permalink:"/docs/learn-devsec/vulnerabilities/insecure-hash-algorithm"},next:{title:"Log Injection",permalink:"/docs/learn-devsec/vulnerabilities/log-injection"}},p=[{value:"What is LDAP Injection",id:"what-is-ldap-injection",children:[]},{value:"When can LDAP Injection affect my application",id:"when-can-ldap-injection-affect-my-application",children:[]},{value:"How do I know if/where my application has an LDAP Injection vulnerability",id:"how-do-i-know-ifwhere-my-application-has-an-ldap-injection-vulnerability",children:[]},{value:"How do I fix LDAP Injection",id:"how-do-i-fix-ldap-injection",children:[]},{value:"How do people attack LDAP Injection flaws",id:"how-do-people-attack-ldap-injection-flaws",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ldap-injection"},"LDAP Injection"),(0,o.kt)("h2",{id:"what-is-ldap-injection"},"What is LDAP Injection"),(0,o.kt)("p",null,"LDAP Injection occurs when remote attacker input can reach LDAP queries, changing the query to return different (or more) results."),(0,o.kt)("h2",{id:"when-can-ldap-injection-affect-my-application"},"When can LDAP Injection affect my application"),(0,o.kt)("p",null,"LDAP Injection occurs in applications that directly query LDAP systems, most often for user lookup or authentication.\nWhen remote input can change the LDAP query, attackers can often gain access to more objects within the LDAP directory."),(0,o.kt)("h2",{id:"how-do-i-know-ifwhere-my-application-has-an-ldap-injection-vulnerability"},"How do I know if/where my application has an LDAP Injection vulnerability"),(0,o.kt)("p",null,"Contrast Assess can monitor applications as they are tested to detect LDAP Injection vulnerabilities."),(0,o.kt)("h2",{id:"how-do-i-fix-ldap-injection"},"How do I fix LDAP Injection"),(0,o.kt)("p",null,"LDAP Injection is most often fixed by creating an allow-list of characters and ensuring proper escaping.\nMost APIs do not provide parameterized LDAP queries."),(0,o.kt)("h2",{id:"how-do-people-attack-ldap-injection-flaws"},"How do people attack LDAP Injection flaws"),(0,o.kt)("p",null,"Attackers often look for signs of an LDAP query on input and add attitional characters to change records.ac"))}d.isMDXComponent=!0}}]);