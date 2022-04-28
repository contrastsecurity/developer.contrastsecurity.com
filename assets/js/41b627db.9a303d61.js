"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[3476],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Microsoft / Azure AKS",sidebar_position:2},s=void 0,c={unversionedId:"contrast-platform/keep-going/github-actions/azure-eks",id:"contrast-platform/keep-going/github-actions/azure-eks",title:"Microsoft / Azure AKS",description:"This article covers an ultra-quick way to get started with incorporating security into your existing developer onboarding via GitHub Actions, Contrast Security and Azure AKS.",source:"@site/docs/contrast-platform/keep-going/github-actions/azure-eks.md",sourceDirName:"contrast-platform/keep-going/github-actions",slug:"/contrast-platform/keep-going/github-actions/azure-eks",permalink:"/docs/contrast-platform/keep-going/github-actions/azure-eks",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/contrast-platform/keep-going/github-actions/azure-eks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Microsoft / Azure AKS",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AWS EKS",permalink:"/docs/contrast-platform/keep-going/github-actions/aws-eks"},next:{title:"Learn DevSec",permalink:"/docs/learn-devsec"}},u={},p=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Documentation:",id:"documentation",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article covers an ultra-quick way to get started with incorporating security into your existing developer onboarding via GitHub Actions, Contrast Security and Azure AKS."),(0,i.kt)("p",null,"GitHub Actions are everywhere. Whether you\u2019re a part of an organization looking to scale workflows across the entire breadth of your business or a developer looking to get a leg up by incorporating new technologies and best practices into your automation stack, GitHub Actions and the GitHub Marketplace have you covered."),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,i.kt)("p",null,"This step-by-step guide assumes you will be instrumenting Contrast Security with a containerized Java application that will be deployed to an Azure Kubernetes Service (AKS) PaaS Environment."),(0,i.kt)("p",null,"In order to work with the Contrast Security AKS GitHub Action, you will need the following in place:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An AKS cluster"),(0,i.kt)("li",{parentName:"ul"},"A GitHub account"),(0,i.kt)("li",{parentName:"ul"},"Contrast Security License"),(0,i.kt)("li",{parentName:"ul"},"Contrast Security API Connection Details"),(0,i.kt)("li",{parentName:"ul"},"Azure Service Details")),(0,i.kt)("p",null,"Further details can be found in the Documentation section of this article."),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("p",null,"Let\u2019s get started by creating two repository secrets for our Contrast Security and Azure credentials named ",(0,i.kt)("inlineCode",{parentName:"p"},"CONRAST_CREDS_FILE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AZURE_CREDS_FILE")," respectively."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note - The repository secrets will need to be in JSON format.")),(0,i.kt)("p",null,"The contents of the CONTRAST_CREDS_FILE contain details necessary for the Contrast Agent to communicate with the central Contrast Security Team Server:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"contrast_api_url"),(0,i.kt)("li",{parentName:"ul"},"contrast_api_username"),(0,i.kt)("li",{parentName:"ul"},"contrast_api_api_key"),(0,i.kt)("li",{parentName:"ul"},"contrast_api_service_key"),(0,i.kt)("li",{parentName:"ul"},"contrast_agent_java_standalone_app_name"),(0,i.kt)("li",{parentName:"ul"},"contrast_application_version")),(0,i.kt)("p",null,"The AZURE_CREDS_FILE repository secret contains the following Azure resource details necessary to interact with the AKS Service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"azure_application_id"),(0,i.kt)("li",{parentName:"ul"},"azure_tenant_id"),(0,i.kt)("li",{parentName:"ul"},"azure_client_secret"),(0,i.kt)("li",{parentName:"ul"},"Azure_subscription_id - the subscription used for the AKS Service"),(0,i.kt)("li",{parentName:"ul"},"Azure_resource_group_name - resource group the cluster is under"),(0,i.kt)("li",{parentName:"ul"},"Azure_region - region where the cluster is deployed"),(0,i.kt)("li",{parentName:"ul"},"Azure_container_registry - URL used for the container registry")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"AKS Secrets",src:n(8368).Z,width:"2406",height:"1336"})),(0,i.kt)("p",null,"Next, we will paste the following workflow YAML and create a new file in the location ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/main.yml"),". This YAML is a basic workflow that will pull the specified github repository code locally onto the GitHub Action Runner. Once the code is pulled locally, the Contrast Security AKS GitHub Action will build and deploy a containerized PetClinic Java application with a Contrast Security Agent baked inside. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admiralappsec/eks-github-actions-demo"},"sample repository")," can be cloned or browsed, and the location of the workflow YAML is under the workflow directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Build and Deploy Java app to Azure Kubernetes Service\n\non:\n  push:\n    branches:\n      - main\n\nenv:\n  IMAGE_NAME_TAG: 'aks-petclinic-testing:contrast-demo-4'\n  APPLICATION_MANIFEST: '/example/kubernetes/petclinic.yaml'\n  APPLICATION_DOCKERFILE: '/example/docker/Dockerfile'\n  CLUSTER_NAME: 'aks-testing-ga'\n  APPLICATION_ARTIFACT: '/example/docker/spring-petclinic-1.5.1.jar'\n\njobs:\n  build-and-deploy:\n    name: Build and Deploy\n    runs-on: ubuntu-latest\n    steps:\n    - name: Checkout\n      uses: actions/checkout@v2\n    - name: Contrast Security Azure Kubernetes Service Build-Deploy\n      uses: admiralappsec/aks-github-action@main\n      id: contrast-build-deploy\n      with:\n        application-manifest: ${{ env.APPLICATION_MANIFEST }}\n        application-dockerfile: ${{ env.APPLICATION_DOCKERFILE }}\n        application-output-image-name-tag: ${{ env.IMAGE_NAME_TAG }}\n        cluster-name: ${{ env.CLUSTER_NAME }}\n        contrast-security-credentials-file: ${{ secrets.CONTRAST_CREDS_FILE }}\n        azure-credentials-file: ${{ secrets.AZURE_CREDS_FILE }}\n        application-artifact: ${{ env.APPLICATION_ARTIFACT }}\n")),(0,i.kt)("p",null,"The workflow file above will trigger on all commits to the main branch. Looking at the inputs associated with the GitHub Action, you\u2019ll need to make sure the following are passed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Application-manifest - location of the kubernetes manifest"),(0,i.kt)("li",{parentName:"ul"},"Application-dockerfile - location of the dockerfile"),(0,i.kt)("li",{parentName:"ul"},"Application-output-image-name-tag - name of the resulting container image with Contrast baked inside"),(0,i.kt)("li",{parentName:"ul"},"Cluster-name - name of the AKS cluster"),(0,i.kt)("li",{parentName:"ul"},"Contrast-security-credentials-file - location of the Contrast Security credentials file"),(0,i.kt)("li",{parentName:"ul"},"Azure-credentials-file - location of the Azure credentials file"),(0,i.kt)("li",{parentName:"ul"},"Application-artifact - artifacts associated with the docker build (dockerfile needs)")),(0,i.kt)("p",null,"Commit this file and go to the \u2018Actions\u2019 tab and watch the action work!"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note - the GitHub Actions setting must be set to \u2018allow\u2019 on the repository itself, and this can be found under the \u2018Settings\u2019 tab.")),(0,i.kt)("p",null,"The action should complete within 2-3 minutes. When completed, open the job and towards the end of the STDOUT, you will see links to your deployed service. Click the link."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure log",src:n(1213).Z,width:"1904",height:"683"})),(0,i.kt)("p",null,"You should see the application up and running."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App Running",src:n(3795).Z,width:"3245",height:"1374"})),(0,i.kt)("p",null,"Navigate to the Contrast Security UI and you will see the application\u2019s security posture start to populate the screen."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"EKS Secrets",src:n(8647).Z,width:"3216",height:"1539"})),(0,i.kt)("h2",{id:"documentation"},"Documentation:"),(0,i.kt)("p",null,"Example Contrast Security Credential File:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "contrast_api_url":"xxx",\n    "contrast_api_username": "xxx",\n    "contrast_api_api_key": "xxx",\n    "contrast_api_service_key": "xxx",\n    "contrast_agent_java_standalone_app_name": "xxx",\n    "contrast_application_version": "xxx"\n}\n')),(0,i.kt)("p",null,"Example Azure Credentials File:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "azure_application_id": "xxx",\n    "azure_tenant_id": "xxx",\n    "azure_client_secret": "xxx",\n    "azure_subscription_id": "xxx",\n    "azure_resource_group_name": "xxx",\n    "azure_region": "xxx",\n    "azure_container_registry": "xxx"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note - The Service Principal will need enough permissions to build, commit, pull, and deploy a container image to AKS Documentation can be found at these locations:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/contrast-security-eks-build-deploy"},"Marketplace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Contrast-Security-OSS/integration-eks-github-action"},"Action Repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/admiralappsec/eks-github-actions-demo"},"Example Code Repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://contrastsecurity.com/"},"Contrast Security Website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.contrastsecurity.com/?lang=en"},"Contrast Security Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.contrastsecurity.com/"},"Contrast Security Developer Hub"))))}m.isMDXComponent=!0},1213:function(e,t,n){t.Z=n.p+"assets/images/azure-ga-log-output-d27dde0dbda866f11198f74ba2d8192d.png"},8368:function(e,t,n){t.Z=n.p+"assets/images/azure-ga-secrets-6c517c82955a680b3062a57cacd27a5e.png"},8647:function(e,t,n){t.Z=n.p+"assets/images/contast-ui-f-screen-shot-9e0f298841369ad17b08f58a696624d6.png"},3795:function(e,t,n){t.Z=n.p+"assets/images/spring-boot-petclinic-landing-page-4c72bbde00187f7fb1ccd3cdbde2236f.png"}}]);