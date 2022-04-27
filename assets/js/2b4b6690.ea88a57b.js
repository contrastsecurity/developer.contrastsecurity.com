"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[6060],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Get Started"},s="Contrast CLI",c={unversionedId:"get-started/index",id:"get-started/index",title:"Get Started",description:"Scan your AWS Lambda functions and ensure security for policy permissions, dependencies and your code.",source:"@site/docs/get-started/index.md",sourceDirName:"get-started",slug:"/get-started/",permalink:"/get-started/",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/get-started/index.md",tags:[],version:"current",frontMatter:{title:"Get Started"}},u={},m=[{value:"Getting Started",id:"getting-started",level:2},{value:"Download",id:"download",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Example AWS Policy",id:"example-aws-policy",level:4},{value:"Running Your First Scan",id:"running-your-first-scan",level:2},{value:"Authenticate with Contrast",id:"authenticate-with-contrast",level:3},{value:"Scan a Lambda Function",id:"scan-a-lambda-function",level:3},{value:"Commands",id:"commands",level:2},{value:"Example",id:"example",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contrast-cli"},"Contrast CLI"),(0,o.kt)("p",null,"Scan your AWS Lambda functions and ensure security for policy permissions, dependencies and your code."),(0,o.kt)("p",null,"This initial release supports both Java and Python functions."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"download"},"Download"),(0,o.kt)("p",null,"Binaries for the Contrast CLI are available for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/contrastsecurity/contrast/releases/download/v1.0.0/contrast-1.0.0-windows.zip"},"Windows"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/contrastsecurity/contrast/releases/download/v1.0.0/contrast-1.0.0-macos.tar.gz"},"macOS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/contrastsecurity/contrast/releases/download/v1.0.0/contrast-1.0.0-linux.tar.gz"},"Linux"),"."),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap contrastsecurity/homebrew-contrast\nbrew install contrast\n")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Make sure your AWS credentials are available. The Contrast CLI can find your credentials in one of the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configured in your user profile (usually located at ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.aws/credentials"),")"),(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("inlineCode",{parentName:"li"},"--profile")," argument when running the CLI"),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"AWS_DEFAULT_REGION"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY")," environment variables")),(0,o.kt)("p",null,"You will also need the following permissions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lambda: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html"},"GetFunction"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html"},"GetLayerVersion")),(0,o.kt)("li",{parentName:"ul"},"IAM: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html"},"GetRolePolicy"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html"},"GetPolicy"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html"},"GetPolicyVersion"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html"},"ListRolePolicies"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html"},"ListAttachedRolePolicies"))),(0,o.kt)("h4",{id:"example-aws-policy"},"Example AWS Policy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "iam:GetPolicyVersion",\n                "iam:GetPolicy",\n                "lambda:GetLayerVersion",\n                "lambda:GetFunction",\n                "iam:ListAttachedRolePolicies",\n                "iam:ListRolePolicies",\n                "iam:GetRolePolicy"\n            ],\n            "Resource": [\n                "arn:aws:lambda:*:YOUR_ACCOUNT:layer:*:*",\n                "arn:aws:lambda:*:YOUR_ACCOUNT:function:*",\n                "arn:aws:iam::YOUR_ACCOUNT:role/*",\n                "arn:aws:iam::YOUR_ACCOUNT:policy/*"\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"running-your-first-scan"},"Running Your First Scan"),(0,o.kt)("h3",{id:"authenticate-with-contrast"},"Authenticate with Contrast"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"contrast auth\n")),(0,o.kt)("h3",{id:"scan-a-lambda-function"},"Scan a Lambda Function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"contrast lambda --function-name <YOUR_FUNCTION_NAME> --region <AWS_REGION>\n")),(0,o.kt)("p",null,"For more help, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"contrast lambda --help\n")),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contrast auth")," ","\u2013"," Authenticate using your GitHub or Google account"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contrast lambda")," ","\u2013"," Perform a scan on an AWS Lambda function"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contrast config")," ","\u2013"," Display your stored credentials"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contrast config --clear")," ","\u2013"," Remove your stored credentials"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contrast version")," ","\u2013"," Display the installed version of the Contrast CLI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contrast help")," ","\u2013"," Display help")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"contrast lambda --function-name myFunctionName\ncontrast lambda -f myFunctionName --region eu-central-1\ncontrast lambda -f myFunctionName --region eu-central-1 --profile myDevProfile\ncontrast lambda -f myFunctionName -v -j -r eu-central-1 -p myDevProfile\ncontrast lambda --function-name myFunctionName --verbose --json-output --region eu-central-1 --profile myDevProfile\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/289035/165555050-e9a709c9-f2a9-4edc-a064-8208445238bc.png",alt:"image"})))}d.isMDXComponent=!0}}]);