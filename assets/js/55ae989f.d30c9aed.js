"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[8361],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:e},u),{},{components:a})):n.createElement(h,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1079:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),o=a(7294),i=a(3905);function l(t){var e=t.children;return o.createElement("span",{style:{backgroundColor:"black",borderRadius:"2px",color:"#39ff14",padding:"0.2rem"}},o.createElement(o.Fragment,null,e))}var c=["components"],s={title:"Getting Started: Test Security",sidebar_position:3},u=void 0,p={unversionedId:"contrast-platform/tutorial-java/iast-security",id:"contrast-platform/tutorial-java/iast-security",title:"Getting Started: Test Security",description:"Done by: Application Developer",source:"@site/docs/contrast-platform/tutorial-java/iast-security.mdx",sourceDirName:"contrast-platform/tutorial-java",slug:"/contrast-platform/tutorial-java/iast-security",permalink:"/docs/contrast-platform/tutorial-java/iast-security",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/contrast-platform/tutorial-java/iast-security.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Getting Started: Test Security",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started: Build-Time Security",permalink:"/docs/contrast-platform/tutorial-java/securing-build-time"},next:{title:"How It Works",permalink:"/docs/contrast-platform/tutorial-java/how-it-works"}},d={},m=[{value:"Identify the Application Structure: Container or Standalone",id:"identify-the-application-structure-container-or-standalone",level:2},{value:"Download the agent (standalone)",id:"download-the-agent-standalone",level:3},{value:"Download the agent (Docker)",id:"download-the-agent-docker",level:3},{value:"Locate the Startup Script or Set an Environment Variable",id:"locate-the-startup-script-or-set-an-environment-variable",level:2},{value:"If you are using a Startup Script",id:"if-you-are-using-a-startup-script",level:3},{value:"If you are using an Environment variable:",id:"if-you-are-using-an-environment-variable",level:3}],h={toc:m};function f(t){var e=t.components,a=(0,r.Z)(t,c);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Done by: Application Developer",(0,i.kt)("br",null),"\nTime needed: 15 minutes",(0,i.kt)("br",null),"\nFrequency: done once for automation"),(0,i.kt)("p",null,"What you get: high accuracy security results based from watching what your app did, with results as they happen."),(0,i.kt)("h2",{id:"identify-the-application-structure-container-or-standalone"},"Identify the Application Structure: Container or Standalone"),(0,i.kt)("p",null,"Contrast leverages the Java instrumentation API to operate inside the runtime. The agent can be packaged with the application or added to the environment."),(0,i.kt)("p",null,"For containerized Java applications, Contrast goes inside the container, packaged with the application."),(0,i.kt)("p",null,"For standard Java applications, Contrast is often deployed alongside the application. The startup step can be done when the app is packaged or in the area where it is launched."),(0,i.kt)("h3",{id:"download-the-agent-standalone"},"Download the agent (standalone)"),(0,i.kt)("p",null,"Many teams download the agent during a CI/CD packaging job when the application is assembled, making it available when the application is tested."),(0,i.kt)("p",null,"Most teams automate the download from ",(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.contrastsecurity/contrast-agent"},"Maven Central"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -o contrast.jar -L https://repository.sonatype.org/service/local/artifact/maven/redirect?r=central-proxy\\&g=com.contrastsecurity\\&a=contrast-agent\\&v=LATEST\n")),(0,i.kt)("p",null,"While teams can add Contrast as a dependency, a separate download is recommended because it is an agent and should not be bundled/consolidated with other JAR files."),(0,i.kt)("h3",{id:"download-the-agent-docker"},"Download the agent (Docker)"),(0,i.kt)("p",null,"When creating a Docker container, add the following lines to your Dockerfile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FROM BASE_IMAGE\nARG CONTRAST_AGENT_VERSION\nADD https://repo1.maven.org/maven2/com/contrastsecurity/contrast-agent/$CONTRAST_AGENT_VERSION/contrast-agent-$CONTRAST_AGENT_VERSION.jar \n/opt/contrast/contrast.jar\n")),(0,i.kt)("h2",{id:"locate-the-startup-script-or-set-an-environment-variable"},"Locate the Startup Script or Set an Environment Variable"),(0,i.kt)("p",null,"Decide which integration option is easier for your app:\nStartup script (most common) works well for applications and is easy to scope, track, and version control."),(0,i.kt)("p",null,"Environment variables work for applications that may launch a number of ways or where the startup script cannot be identified. The benefit and drawback to environment variables is that they will impact ALL Java processes launched in the scope of the variable.\nThe command used for each integration is the same, it just goes in a different place:"),(0,i.kt)("h3",{id:"if-you-are-using-a-startup-script"},"If you are using a Startup Script"),(0,i.kt)("p",null,"Add a variable to control Contrast, then add the variable to the startup Java command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="your_startup_script.sh"',title:'"your_startup_script.sh"'},"CONTRAST_OPTS=-javaagent:contrast.jar -Dcontrast.config=contrast.yaml\njava $CONTRAST_OPTS ...[your command]...\n")),(0,i.kt)("h3",{id:"if-you-are-using-an-environment-variable"},"If you are using an Environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"_JAVA_TOOL_OPTIONS=-javaagent:contrast.jar -Dcontrast.config=contrast.yaml\n")),(0,i.kt)("p",null,"When launching your application. look for the following log message:"),(0,i.kt)(l,{mdxType:"Terminal"},"[Contrast] ...date... Starting Contrast (build ...)"))}f.isMDXComponent=!0}}]);