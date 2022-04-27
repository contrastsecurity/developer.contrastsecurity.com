"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[3481],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Performance",sidebar_position:3},l=void 0,c={unversionedId:"docs/contrast-platform/how-it-works/performance",id:"docs/contrast-platform/how-it-works/performance",title:"Performance",description:"Speed of execution is a crucial to execution. Security tooling performs differently in the three areas:",source:"@site/docs/docs/contrast-platform/how-it-works/performance.md",sourceDirName:"docs/contrast-platform/how-it-works",slug:"/docs/contrast-platform/how-it-works/performance",permalink:"/docs/contrast-platform/how-it-works/performance",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/docs/contrast-platform/how-it-works/performance.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Performance",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Accuracy",permalink:"/docs/contrast-platform/how-it-works/accuracy"},next:{title:"How Integrated Analysis Works",permalink:"/docs/contrast-platform/how-it-works/how-integrated-analysis-works"}},u={},d=[{value:"During your secured build",id:"during-your-secured-build",level:2},{value:"While you test",id:"while-you-test",level:2},{value:"While your app runs (in prod)",id:"while-your-app-runs-in-prod",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Speed of execution is a crucial to execution. Security tooling performs differently in the three areas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When applications are built and packaged, security scans generally add between a few seconds (to scan dependencies) to a few minutes (to scan the code). This can be on all builds or select builds."),(0,o.kt)("li",{parentName:"ul"},"When applications are tested, there is a moderate impact on performance due to the collection of detailed security information. Integrated Application Security Testing tools should be disabled during performance testing and turned on during other automated tests."),(0,o.kt)("li",{parentName:"ul"},"In production, Runtime Protection may add a few milliseconds per request. The performance impact is significantly less than the test phase because less data is collected.")),(0,o.kt)("h2",{id:"during-your-secured-build"},"During your secured build"),(0,o.kt)("p",null,"At build time, two key aspects occur:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A local scanner inventories resolved dependencies, queries a service, and obtains a list of vulnerabilities that are present in each dependency. This may take a few seconds."),(0,o.kt)("li",{parentName:"ul"},"When a static scan is requested, a utility uploads the fully packaged application to a cloud service, which then performs a static scan. Scans may take a few minutes to complete, when results will become available. If desired, builds can wait for these results to fail a vulnerable build.")),(0,o.kt)("p",null,"Performance considerations of the static scan:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scan time is improved relative to common static analyzers because it focuses on accessible code paths (from entry points to where they go) rather than traversing all possible code paths."),(0,o.kt)("li",{parentName:"ul"},"Static scans do not need to run on every build. Select a frequency that is common but not an interference.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Teams with infrequent or periodic builds can select every build."),(0,o.kt)("li",{parentName:"ul"},"Teams with frequent build cycles can run on deployment-oriented builds."))),(0,o.kt)("li",{parentName:"ul"},"Scan results can be tracked and merged over time, for example to mark vulnerabilities with mitigating controls. This tracking can prevent these issues from failing future builds.")),(0,o.kt)("h2",{id:"while-you-test"},"While you test"),(0,o.kt)("p",null,"When applications are tested, an automated security agent is woven in to the runtime to watch execution and gather data. The agent contains all security intelligence, so users simply use the application as normal."),(0,o.kt)("p",null,"The agent performs two actions that impact performance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"At startup, a quick static analysis is performed during each file load to identify immediate issues and determine where runtime monitoring will go. Applications may experience a slight startup delay of 500ms to one minute. Most applications are a few seconds and time varies with the number of loads. When a relevant class or file is loaded, the security agent will add a statement at the beginning or end of a select functions/methods to perform a security check or improve intelligence of future security checks. Most functions are left alone."),(0,o.kt)("li",{parentName:"ul"},"At runtime, the added checks observe data used by the application to determine any custom risk within the application.")),(0,o.kt)("p",null,"Performance considerations at test time:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Functionality is equivalent. You do not need to duplicate with and without the agent."),(0,o.kt)("li",{parentName:"ul"},"Performance-related testing should be done without the agent present.")),(0,o.kt)("p",null,"If desired, adding additional memory may improve application performance during the security tests."),(0,o.kt)("h2",{id:"while-your-app-runs-in-prod"},"While your app runs (in prod)"),(0,o.kt)("p",null,"Production applications have  highest performance demand and cannot tolerate impact. While the production and test agents use similar technology, performance is significantly different because of what they do with it."),(0,o.kt)("p",null,"Contrast Protect addresses production performance by changing the audience and adjusting the level of data collection. Unlike Test where the audience is a human, the agent becomes the audience and it gathers enough data for three goals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Allow the action/request (most common), is the action either considered safe or not unsafe enough to block. In this case the agent has minimal impact."),(0,o.kt)("li",{parentName:"ul"},"Block the action, is there enough data available to deem the action unsafe and worth blocking."),(0,o.kt)("li",{parentName:"ul"},"Report the action asynchronously, does enough information exist that the action is in-between safe and unsafe but merits a record. In this case the report is async to allow the original request to continue without delay.")),(0,o.kt)("p",null,"Unlike performance at test, the agent does not collect as much data in-between when data enter the system and when it makes one of these decisions. As a result performance is similar to an unprotected application."))}m.isMDXComponent=!0}}]);