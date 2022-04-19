"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[3170],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,h=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return t?i.createElement(h,o(o({ref:n},u),{},{components:t})):i.createElement(h,o({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4369:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],c={},l="Hibernate Injection",s={unversionedId:"learn-devsec/vulnerabilities/hibernate-injection",id:"learn-devsec/vulnerabilities/hibernate-injection",isDocsHomePage:!1,title:"Hibernate Injection",description:"What is Hibernate Injection",source:"@site/docs/learn-devsec/vulnerabilities/hibernate-injection.mdx",sourceDirName:"learn-devsec/vulnerabilities",slug:"/learn-devsec/vulnerabilities/hibernate-injection",permalink:"/docs/learn-devsec/vulnerabilities/hibernate-injection",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/learn-devsec/vulnerabilities/hibernate-injection.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar2",previous:{title:"Hardcoded Cryptographic Key",permalink:"/docs/learn-devsec/vulnerabilities/hardcoded-key"},next:{title:"Insecure Encryption Algorithm",permalink:"/docs/learn-devsec/vulnerabilities/insecure-encryption-algorithm"}},u=[{value:"What is Hibernate Injection",id:"what-is-hibernate-injection",children:[]},{value:"When can Hibernate Injection affect my application",id:"when-can-hibernate-injection-affect-my-application",children:[]},{value:"How do I know if/where my application has a X vulnerability",id:"how-do-i-know-ifwhere-my-application-has-a-x-vulnerability",children:[]},{value:"How do I fix Hibernate Injection",id:"how-do-i-fix-hibernate-injection",children:[]},{value:"How do people attack Hibernate Injection flaws",id:"how-do-people-attack-hibernate-injection-flaws",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hibernate-injection"},"Hibernate Injection"),(0,a.kt)("h2",{id:"what-is-hibernate-injection"},"What is Hibernate Injection"),(0,a.kt)("p",null,"Hibernate Injection is a form of SQL Injection, where user input makes its way to control the Hibernate HQL and then control the database query.\nThe affects match SQL Injection for stealing records, altering data, etc."),(0,a.kt)("h2",{id:"when-can-hibernate-injection-affect-my-application"},"When can Hibernate Injection affect my application"),(0,a.kt)("p",null,"Hibernate Injection can only affect applications using Hibernate, limiting it to Java and .NET.\nThe vulnerability occurs in dynamically created HQL queries that add user input to the query. It does not occur in parameterized HQL queries, such as those provided by most Hibernate and JPA annotations."),(0,a.kt)("h2",{id:"how-do-i-know-ifwhere-my-application-has-a-x-vulnerability"},"How do I know if/where my application has a X vulnerability"),(0,a.kt)("p",null,"Contrast Scan can locate Hibernate Injection vulnerabilities through code scanning."),(0,a.kt)("p",null,"Contrast Assess can locate Hibernate Injection by watching applications as they are tested."),(0,a.kt)("p",null,"Contrast Protect can defend Hibernate Injection in production applications."),(0,a.kt)("h2",{id:"how-do-i-fix-hibernate-injection"},"How do I fix Hibernate Injection"),(0,a.kt)("p",null,"HQL queries should be parameterized through the proper syntax. When a query cannot be parameterized, it should be matched against an allow-list."),(0,a.kt)("h2",{id:"how-do-people-attack-hibernate-injection-flaws"},"How do people attack Hibernate Injection flaws"),(0,a.kt)("p",null,"Hibernate Injection is attackes by appending different HQL statements to user input."))}d.isMDXComponent=!0}}]);