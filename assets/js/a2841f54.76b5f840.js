"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[9837],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4823:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={},c="Cross Site Scripting (XSS)",l={unversionedId:"learn-devsec/vulnerabilities/xss",id:"learn-devsec/vulnerabilities/xss",isDocsHomePage:!1,title:"Cross Site Scripting (XSS)",description:"What is Cross-Site Scripting (XSS)",source:"@site/docs/learn-devsec/vulnerabilities/xss.mdx",sourceDirName:"learn-devsec/vulnerabilities",slug:"/learn-devsec/vulnerabilities/xss",permalink:"/docs/learn-devsec/vulnerabilities/xss",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/learn-devsec/vulnerabilities/xss.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar2",previous:{title:"XPath Injection",permalink:"/docs/learn-devsec/vulnerabilities/xpath-injection"},next:{title:"XML eXternal Entity Injection / XXE",permalink:"/docs/learn-devsec/vulnerabilities/xxe"}},p=[{value:"What is Cross-Site Scripting (XSS)",id:"what-is-cross-site-scripting-xss",children:[]},{value:"When can XSS affect my application",id:"when-can-xss-affect-my-application",children:[]},{value:"How do I know if/where my application has an XSS vulnerability",id:"how-do-i-know-ifwhere-my-application-has-an-xss-vulnerability",children:[]},{value:"How do I fix XSS",id:"how-do-i-fix-xss",children:[]},{value:"How do people attack XSS flaws",id:"how-do-people-attack-xss-flaws",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cross-site-scripting-xss"},"Cross Site Scripting (XSS)"),(0,a.kt)("h2",{id:"what-is-cross-site-scripting-xss"},"What is Cross-Site Scripting (XSS)"),(0,a.kt)("p",null,"XSS vulnerabilities occur in web applications that render remote input as part of an HTML document or script.\nThe result of XSS is often execution of an attacker's JavaScript in the client's browser, in the protection domain of the site. This can steal client information such as cookies."),(0,a.kt)("h2",{id:"when-can-xss-affect-my-application"},"When can XSS affect my application"),(0,a.kt)("p",null,"XSS affects server backends that generate HTML pages, or client front-ends that render remote input directly as HTML (or a virtual DOM)."),(0,a.kt)("h2",{id:"how-do-i-know-ifwhere-my-application-has-an-xss-vulnerability"},"How do I know if/where my application has an XSS vulnerability"),(0,a.kt)("p",null,"Contrast Scan can detect XSS vulnerabilities in many applications by scanning code."),(0,a.kt)("p",null,"Contrast Assess can detect XSS vulnerabilities as they are tested by watching HTML output and encoding."),(0,a.kt)("h2",{id:"how-do-i-fix-xss"},"How do I fix XSS"),(0,a.kt)("p",null,"XSS can be fixed by applying proper sanitization for the HTML context: sanitizing data to appear on a page (as text), in an HTML tag as an attribute or value, or in JavaScript."),(0,a.kt)("h2",{id:"how-do-people-attack-xss-flaws"},"How do people attack XSS flaws"),(0,a.kt)("p",null,"The most common XSS attack is to submit an alert box into parameters or a custom script that would inform an attacker't detection tool.\nIt is extremely difficult to block XSS through a deny-list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<script>alert('XSS worked')<\/script>\n")))}d.isMDXComponent=!0}}]);