"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[904],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2,title:"Amazon Redshift Spectrum"},o="Querying from Redshift Spectrum",i={unversionedId:"redshift",id:"redshift",title:"Amazon Redshift Spectrum",description:"To read a OneTable synced target table (regardless of the table format) in Amazon Redshift,",source:"@site/docs/redshift.md",sourceDirName:".",slug:"/redshift",permalink:"/docs/redshift",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Amazon Redshift Spectrum"},sidebar:"docs",previous:{title:"Amazon Athena",permalink:"/docs/athena"},next:{title:"Apache Spark",permalink:"/docs/spark"}},s={},c=[{value:"Hudi and Iceberg tables",id:"hudi-and-iceberg-tables",level:3},{value:"Delta Lake table",id:"delta-lake-table",level:3}],d={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"querying-from-redshift-spectrum"},"Querying from Redshift Spectrum"),(0,r.kt)("p",null,"To read a OneTable synced target table (regardless of the table format) in Amazon Redshift,\nusers have to create an external schema and refer to the external data catalog that contains the table.\nRedshift infers the table's schema and format from the external catalog/database directly.\nFor more information on creating external schemas, refer to\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-external-schemas.html#c-spectrum-external-catalogs"},"Redshift docs"),"."),(0,r.kt)("h3",{id:"hudi-and-iceberg-tables"},"Hudi and Iceberg tables"),(0,r.kt)("p",null,"The following query creates an external schema ",(0,r.kt)("inlineCode",{parentName:"p"},"onetable_synced_schema")," using the Glue database ",(0,r.kt)("inlineCode",{parentName:"p"},"glue_database_name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"CREATE EXTERNAL SCHEMA onetable_synced_schema\nFROM DATA CATALOG\nDATABASE <glue_database_name>\nIAM_ROLE 'arn:aws:iam::<accountId>:role/<roleName>'\nCREATE EXTERNAL DATABASE IF NOT EXISTS;\n")),(0,r.kt)("admonition",{title:"Note:",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The IAM role needs to have minimum access to Amazon S3 and AWS Glue Data Catalog. For more information refer to\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-iam-policies.html#spectrum-iam-policies-s3"},"AWS docs"),".")),(0,r.kt)("p",null,"Redshift can infer the tables present in the Glue database automatically. You can then query the tables using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"SELECT *\nFROM onetable_synced_schema.<table_name>;\n")),(0,r.kt)("h3",{id:"delta-lake-table"},"Delta Lake table"),(0,r.kt)("p",null,"For Delta Lake, steps slightly vary because Redshift Spectrum relies on Delta Lake's manifest file - a text\nfile containing the list of data files to read for querying a Delta table."),(0,r.kt)("p",null,"You have two options to create and query Delta tables in Redshift Spectrum:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Follow the steps in\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.delta.io/latest/redshift-spectrum-integration.html#set-up-a-redshift-spectrum-to-delta-lake-integration-and-query-delta-tables"},"this"),"\narticle to set up a Redshift Spectrum to Delta Lake integration and query Delta tables directly from Amazon S3."),(0,r.kt)("li",{parentName:"ol"},"While creating the Glue Crawler to crawl the OneTable synced Delta table, choose the ",(0,r.kt)("inlineCode",{parentName:"li"},"Create Symlink tables"),"\noption in ",(0,r.kt)("inlineCode",{parentName:"li"},"Add data source")," pop-up window. This will add ",(0,r.kt)("inlineCode",{parentName:"li"},"_symlink_format_manifest")," folder with manifest files in the table\nroot path.")),(0,r.kt)("p",null,"You can then use a similar approach to query the Hudi and Iceberg tables mentioned above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"CREATE EXTERNAL SCHEMA onetable_synced_schema_delta\nFROM DATA CATALOG\nDATABASE <delta_glue_database_name>\nIAM_ROLE 'arn:aws:iam::<accountId>:role/<roleName>'\nCREATE EXTERNAL DATABASE IF NOT EXISTS;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"SELECT *\nFROM onetable_synced_schema_delta.<table_name>;\n")))}p.isMDXComponent=!0}}]);