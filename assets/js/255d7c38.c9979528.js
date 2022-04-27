"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[5706],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"CVE"},c=void 0,l={unversionedId:"CVE",id:"CVE",title:"CVE",description:"Common Vulnerabilities and Exposures (CVE) represents a known vulnerability, commonly in an application or framework. Most CVEs have known exploits that can be used to attack the application.",source:"@site/docs/CVE.md",sourceDirName:".",slug:"/CVE",permalink:"/docs/CVE",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/CVE.md",tags:[],version:"current",frontMatter:{title:"CVE"},sidebar:"tutorialSidebar",previous:{title:"XML eXternal Entity Injection / XXE",permalink:"/docs/vulnerabilities/xxe"},next:{title:"CWE",permalink:"/docs/cwe"}},u={},p=[{value:"How do I know if I have a CVE?",id:"how-do-i-know-if-i-have-a-cve",level:2},{value:"Does the absence of CVEs mean I&#39;m secure?",id:"does-the-absence-of-cves-mean-im-secure",level:2},{value:"Does the presence of a CVE mean that I&#39;m insecure?",id:"does-the-presence-of-a-cve-mean-that-im-insecure",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Common Vulnerabilities and Exposures (CVE) represents a known vulnerability, commonly in an application or framework. Most CVEs have known exploits that can be used to attack the application."),(0,o.kt)("p",null,"When left without any mitigating control, many applications are left vulnerable to attack. Attackers will often crawl around applications with payloads that attack these CVEs. Rather than selecting an application and then locating attacks, this is essentially a search-engine style where attackers just crawl around until they land a hit."),(0,o.kt)("h2",{id:"how-do-i-know-if-i-have-a-cve"},"How do I know if I have a CVE?"),(0,o.kt)("p",null,"The easiest way for developers to see if their application contains a CVE is to create an ",(0,o.kt)("a",{parentName:"p",href:"/docs/finding/sbom"},"SBOM")," and compare those entries to the CVE database. This is more easily done by automated tools than humans."),(0,o.kt)("h2",{id:"does-the-absence-of-cves-mean-im-secure"},"Does the absence of CVEs mean I'm secure?"),(0,o.kt)("p",null,"The absence of CVEs does not mean the application is secure - it just means that the application does not bring in any known vulnerabilities. The application could take two denpendencies with no CVEs and put them together in an unsafe way.",(0,o.kt)("br",null),"\nIn late 2021, Atlassian Confluence leveraged an OGNL library with no CVEs but let the OGNL scripting engine run code based on remote query string input. While no CVE was present, Confluence was vulnerable to arbitrary code execution."),(0,o.kt)("h2",{id:"does-the-presence-of-a-cve-mean-that-im-insecure"},"Does the presence of a CVE mean that I'm insecure?"),(0,o.kt)("p",null,"The presence of a CVE usually means that the application is insecure.",(0,o.kt)("br",null),"\nApplications often import many dependencies but do not use all of the code from every dependency. In some cases applications may not load the vulnerable code. In this case teams can prioritize other security work ahead of this library since it is unused. At other times it is less work to patch and remove the CVE than to debate."))}m.isMDXComponent=!0}}]);