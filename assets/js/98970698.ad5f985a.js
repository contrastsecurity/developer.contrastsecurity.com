"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[2725],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return f}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(i),f=n,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return i?a.createElement(h,o(o({ref:t},u),{},{components:i})):a.createElement(h,o({ref:t},u))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8691:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=i(7462),n=i(3366),r=(i(7294),i(3905)),o=["components"],s={title:"Untrusted Deserialization"},l=void 0,c={unversionedId:"docs/vulnerabilities/deserialization",id:"docs/vulnerabilities/deserialization",title:"Untrusted Deserialization",description:"What is Untrusted Deserialization",source:"@site/docs/docs/vulnerabilities/deserialization.md",sourceDirName:"docs/vulnerabilities",slug:"/docs/vulnerabilities/deserialization",permalink:"/docs/vulnerabilities/deserialization",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/docs/vulnerabilities/deserialization.md",tags:[],version:"current",frontMatter:{title:"Untrusted Deserialization"},sidebar:"tutorialSidebar",previous:{title:"Cross Site Request Forgery",permalink:"/docs/vulnerabilities/csrf"},next:{title:"Expression Language Injection / EL Injection",permalink:"/docs/vulnerabilities/el-injection"}},u={},d=[{value:"What is Untrusted Deserialization",id:"what-is-untrusted-deserialization",level:2},{value:"When can Untrusted Deserialization affect my application",id:"when-can-untrusted-deserialization-affect-my-application",level:2},{value:"How do I know if/where my application has an Untrusted Deserialization vulnerability",id:"how-do-i-know-ifwhere-my-application-has-an-untrusted-deserialization-vulnerability",level:2},{value:"How do I fix Untrusted Deserialization",id:"how-do-i-fix-untrusted-deserialization",level:2},{value:"How do people attack Untrusted Deserialization flaws",id:"how-do-people-attack-untrusted-deserialization-flaws",level:2}],p={toc:d};function f(e){var t=e.components,i=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-untrusted-deserialization"},"What is Untrusted Deserialization"),(0,r.kt)("p",null,"Untrusted Deserialization occurs when an application deserializes remote data and executes code instructions from the incoming data as part of the process. This results in a remote code execution flaw when attackers embed custom commands into the serialized objects."),(0,r.kt)("h2",{id:"when-can-untrusted-deserialization-affect-my-application"},"When can Untrusted Deserialization affect my application"),(0,r.kt)("p",null,"Untrusted Deserialization affects many applications because serialization is often done by a third party library or framework that the application relies on. This vulnerability can occur if any part of the application deserializes data."),(0,r.kt)("h2",{id:"how-do-i-know-ifwhere-my-application-has-an-untrusted-deserialization-vulnerability"},"How do I know if/where my application has an Untrusted Deserialization vulnerability"),(0,r.kt)("p",null,"Contrast Scan can detect if an application has Untrusted Deserialization by looking at its code."),(0,r.kt)("p",null,"Contrast Assess can detect if an application has Untrusted Deserialization as it is tested."),(0,r.kt)("p",null,"Contrast Protect can permit trusted serialization while blocking untrusted deserialization from exploiting a running system."),(0,r.kt)("h2",{id:"how-do-i-fix-untrusted-deserialization"},"How do I fix Untrusted Deserialization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Patch any libraries that have serialization flaws."),(0,r.kt)("li",{parentName:"ul"},"Use any serialization filters to create an allow-list of classes."),(0,r.kt)("li",{parentName:"ul"},"Use an alternate serialization format that does not mix data and code.")),(0,r.kt)("h2",{id:"how-do-people-attack-untrusted-deserialization-flaws"},"How do people attack Untrusted Deserialization flaws"),(0,r.kt)("p",null,"Various tools exist to attack deserialization flaws, such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/frohoff/ysoserial"},"ysoserial")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pwntester/ysoserial.net"},"ysoserial.net"),"."),(0,r.kt)("p",null,"Deserialization ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GrrrDog/Java-Deserialization-Cheat-Sheet"},"attack cheat sheets")," exist for various languages."))}f.isMDXComponent=!0}}]);