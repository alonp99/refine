"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"useCan",title:"useCan",siderbar_label:"useCan"},s=void 0,i={unversionedId:"api-reference/core/hooks/accessControl/useCan",id:"api-reference/core/hooks/accessControl/useCan",title:"useCan",description:"Usage",source:"@site/docs/api-reference/core/hooks/accessControl/useCan.md",sourceDirName:"api-reference/core/hooks/accessControl",slug:"/api-reference/core/hooks/accessControl/useCan",permalink:"/docs/api-reference/core/hooks/accessControl/useCan",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/core/hooks/accessControl/useCan.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1664864788,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{id:"useCan",title:"useCan",siderbar_label:"useCan"},sidebar:"someSidebar",previous:{title:"Router Provider",permalink:"/docs/api-reference/core/providers/router-provider"},next:{title:"useAuthenticated",permalink:"/docs/api-reference/core/hooks/auth/useAuthenticated"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Performance",id:"performance",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3}],l=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," as the query function for ",(0,a.kt)("strong",{parentName:"p"},"react-query"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),". It takes the parameters that ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," takes. It can also be configured with ",(0,a.kt)("inlineCode",{parentName:"p"},"queryOptions")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),". Returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCan } from "@pankod/refine-core";\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" },\n});\n')),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("p",null,"As the number of points that checks for access control in your app increases the performance of your app may take a hit especially if its access control involves remote endpoints. Caching the access control checks helps a great deal. Since ",(0,a.kt)("strong",{parentName:"p"},"refine")," uses react-query it can be easily done configuring ",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"cacheTime"))," properties."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useCan } from "@pankod/refine-core";\n\n// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n);\n')),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)(l,{module:"@pankod/refine-core/useCan",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Desription"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#canreturntype"},"CanReturnType")),(0,a.kt)("td",{parentName:"tr",align:null},"Result data of the query ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,a.kt)("h3",{id:"return-values"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,a.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,a.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: CanReturnType; }>")))))))}m.isMDXComponent=!0}}]);