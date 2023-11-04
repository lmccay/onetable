"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),u=r(7392),c=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var h=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},6194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),l=r(5162);const i={sidebar_position:5,title:"Presto"},s="Querying from Presto",u={unversionedId:"presto",id:"presto",title:"Presto",description:"Presto allows you to query table formats like Hudi, Delta and Iceberg using connectors. The same setup will",source:"@site/docs/presto.md",sourceDirName:".",slug:"/presto",permalink:"/docs/presto",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Presto"},sidebar:"docs",previous:{title:"Google BigQuery",permalink:"/docs/bigquery"},next:{title:"Snowflake",permalink:"/docs/snowflake"}},c={},p=[],m={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"querying-from-presto"},"Querying from Presto"),(0,n.kt)("p",null,"Presto allows you to query table formats like Hudi, Delta and Iceberg using connectors. The same setup will\nwork for OneTable synced tables as well."),(0,n.kt)("p",null,"For more information and required configurations refer to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://prestodb.io/docs/current/connector/hudi.html"},"Hudi Connector")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://prestodb.io/docs/current/connector/deltalake.html"},"Delta Lake")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://prestodb.io/docs/current/connector/iceberg.html"},"Iceberg Connector"))),(0,n.kt)("admonition",{title:"Delta Lake:",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Delta Lake supports ",(0,n.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/delta/generated-columns.html"},"generated columns"),"\nwhich are a special type of column whose values are automatically generated based on a user-specified function\nover other columns in the Delta table. During sync, OneTable uses the same logic to generate partition columns wherever required.\nCurrently, the generated columns from OneTable sync shows ",(0,n.kt)("inlineCode",{parentName:"p"},"NULL")," when queried from Presto CLI.")),(0,n.kt)("p",null,"For hands on experimentation, please follow ",(0,n.kt)("a",{parentName:"p",href:"/docs/setup"},"Creating your first interoperable table")," tutorial\nto create OneTable synced tables followed by ",(0,n.kt)("a",{parentName:"p",href:"/docs/hms"},"Hive Metastore")," tutorial to register the target table\nin Hive Metastore. Once done, follow the below high level steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If you are working with a self-managed Presto service, from the presto-server directory run ",(0,n.kt)("inlineCode",{parentName:"li"},"./bin/launcher run")),(0,n.kt)("li",{parentName:"ol"},"From the directory where you have installed presto-cli: login to presto-cli by running ",(0,n.kt)("inlineCode",{parentName:"li"},"./presto-cli")),(0,n.kt)("li",{parentName:"ol"},"Start querying the table i.e. ",(0,n.kt)("inlineCode",{parentName:"li"},"SELECT * FROM catalog.schema.table;"),". ")),(0,n.kt)(o.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"targetFormat: HUDI",value:"hudi"},{label:"targetFormat: DELTA",value:"delta"},{label:"targetFormat: ICEBERG",value:"iceberg"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"hudi",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Note: ",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you are following the example from ",(0,n.kt)("a",{parentName:"p",href:"/docs/hms"},"Hive Metastore"),", you can query the OneTable synced Hudi table\nfrom Presto using the below query."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"SELECT * FROM hudi.hudi_db.<table_name>;\n")))),(0,n.kt)(l.Z,{value:"delta",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Note:",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you are following the example from ",(0,n.kt)("a",{parentName:"p",href:"/docs/hms"},"Hive Metastore"),", you can query the OneTable synced Delta table\nfrom Presto using the below query."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"SELECT * FROM delta.delta_db.<table_name>;\n")))),(0,n.kt)(l.Z,{value:"iceberg",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Note:",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you are following the example from ",(0,n.kt)("a",{parentName:"p",href:"/docs/hms"},"Hive Metastore"),", you can query the OneTable synced Iceberg table\nfrom Presto using the below query."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"SELECT * FROM iceberg.iceberg_db.<table_name>;\n"))))))}f.isMDXComponent=!0}}]);