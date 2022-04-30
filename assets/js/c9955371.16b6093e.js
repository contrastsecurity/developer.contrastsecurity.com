"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[7621],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1753:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"SQL Injection"},s=void 0,c={unversionedId:"guides/learn-devsec/vulnerabilities/sqli",id:"guides/learn-devsec/vulnerabilities/sqli",title:"SQL Injection",description:"What Is It?",source:"@site/learn/guides/learn-devsec/vulnerabilities/sqli.md",sourceDirName:"guides/learn-devsec/vulnerabilities",slug:"/guides/learn-devsec/vulnerabilities/sqli",permalink:"/learn/guides/learn-devsec/vulnerabilities/sqli",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/learn/guides/learn-devsec/vulnerabilities/sqli.md",tags:[],version:"current",frontMatter:{title:"SQL Injection"},sidebar:"docsSidebar",previous:{title:"Remote Code Execution (RCE)",permalink:"/learn/guides/learn-devsec/vulnerabilities/remote-code-execution"},next:{title:"Weak Random Number Generator",permalink:"/learn/guides/learn-devsec/vulnerabilities/weak-random"}},u={},d=[{value:"What Is It?",id:"what-is-it",level:2},{value:"When Can It Affect My Application?",id:"when-can-it-affect-my-application",level:2},{value:"How Do I Know If and Where I Have This Vulnerability?",id:"how-do-i-know-if-and-where-i-have-this-vulnerability",level:2},{value:"How Do I Fix It?",id:"how-do-i-fix-it",level:2},{value:"How Do People Attack Using This Flaw?",id:"how-do-people-attack-using-this-flaw",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-it"},"What Is It?"),(0,i.kt)("p",null,"SQL Injection (SQLi) is a vulnerability where remote users can take control of a query sent to your database. Most often the attack aims to bypass authentication, access other records to steal data, or sometimes execute commands on the SQL server."),(0,i.kt)("h2",{id:"when-can-it-affect-my-application"},"When Can It Affect My Application?"),(0,i.kt)("p",null,"SQL Injection can affect your application when user input is placed as part of the query rather than as a parameter of the query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"Good Query:\nSELECT * FROM users WHERE username=? AND hashed_password=?\n\nBAD Query:\nSELECT * FROM users WHERE username=concatenatedUsername AND hashed_password=concatenatedPassword\n")),(0,i.kt)("h2",{id:"how-do-i-know-if-and-where-i-have-this-vulnerability"},"How Do I Know If and Where I Have This Vulnerability?"),(0,i.kt)("p",null,"Contrast Scan can evaluate your code and determine at build time if you introduce a SQL Injection vulnerability."),(0,i.kt)("p",null,"Contrast Assess can monitor your running code to determine if you have any SQL Injection flaws in your code."),(0,i.kt)("p",null,"Contrast Protect can defend any SQL Injection flaws against exploitation by monitoring the SQL APIs."),(0,i.kt)("h2",{id:"how-do-i-fix-it"},"How Do I Fix It?"),(0,i.kt)("p",null,"There are two primary ways to fix SQL Injection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parameterize queries, adding input to the parameter instead of concatenating Strings into the query."),(0,i.kt)("li",{parentName:"ul"},"Use indirect selection of known-safe allow-lists for items that cannot be parameterized.")),(0,i.kt)("p",null,"When an analyzer detect the flaw in your application, it will suggest a more context-sensitive recommendation based on your code."),(0,i.kt)("h2",{id:"how-do-people-attack-using-this-flaw"},"How Do People Attack Using This Flaw?"),(0,i.kt)("p",null,"Most often attackers inject ' and -- or other encoded characters that become part of the query. Attemping a deny-list by watching for these characters is ineffective and difficult."),(0,i.kt)("p",null,"On SQL Servers, attackers may attempt to access the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/xp-cmdshell-transact-sql?view=sql-server-ver15"},"xp_cmdshell")," to run system commands."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://pentestmonkey.net/cheat-sheet/sql-injection/mysql-sql-injection-cheat-sheet"},"MySQL SQL Injection Cheat Sheet"))))}f.isMDXComponent=!0}}]);