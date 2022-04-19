"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[2515],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5919:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},s="CWE",l={unversionedId:"learn-devsec/cwe",id:"learn-devsec/cwe",isDocsHomePage:!1,title:"CWE",description:"CWE is a Common Weakness Enumeration. This represents the abstract vulnerability rather than a specific instance.",source:"@site/docs/learn-devsec/cwe.md",sourceDirName:"learn-devsec",slug:"/learn-devsec/cwe",permalink:"/docs/learn-devsec/cwe",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/learn-devsec/cwe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar2",previous:{title:"CVE",permalink:"/docs/learn-devsec/CVE"}},p=[{value:"Can my application have a CWE",id:"can-my-application-have-a-cwe",children:[]},{value:"Relationship between CVE and CWE",id:"relationship-between-cve-and-cwe",children:[]},{value:"Choosing Which CWE to Use",id:"choosing-which-cwe-to-use",children:[]}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cwe"},"CWE"),(0,o.kt)("p",null,"CWE is a ",(0,o.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/data/definitions/699.html"},"Common Weakness Enumeration"),". This represents the abstract vulnerability rather than a specific instance."),(0,o.kt)("h2",{id:"can-my-application-have-a-cwe"},"Can my application have a CWE"),(0,o.kt)("p",null,'Yes. Most custom applications do not go through the entire CVE assignment process so it is easier to say something like, "this application has a ',"[CWE name]"," vulnerability."),(0,o.kt)("h2",{id:"relationship-between-cve-and-cwe"},"Relationship between CVE and CWE"),(0,o.kt)("p",null,"SQL Injection is a CWE because it is a type of vulnerability. When an application is vulnerable to SQL Injection, that instance of ",(0,o.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/data/definitions/89.html"},"SQL Injection")," may be assigned a CVE. The cardinality between CWE to CVE is generally one-to-many."),(0,o.kt)("h2",{id:"choosing-which-cwe-to-use"},"Choosing Which CWE to Use"),(0,o.kt)("p",null,"Some CVEs may look similar. They often contain a heirarchy - it's most important to follow the heirarchy to the point that it can be understood and not be overly pedantic."),(0,o.kt)("p",null,"For example, CWE-89 is SQL Injection. There is a child-type for the popular ORM framework Hibernate (CWE-564 Hibernate injection) but it's not necessary to use. Not every ORM framework will have its own CWE so the focus of any discussion or report should be on how well it can be understood and acted upon rather than if there is maybe a more appropriate CWE."))}h.isMDXComponent=!0}}]);