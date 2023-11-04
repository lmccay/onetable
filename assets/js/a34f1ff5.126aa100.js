"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[369],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var g=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},6253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={sidebar_position:1,title:"Hive Metastore"},s="Syncing to Hive Metastore",u={unversionedId:"hms",id:"hms",title:"Hive Metastore",description:"This document walks through the steps to register a OneTable synced table on Hive Metastore (HMS).",source:"@site/docs/hms.md",sourceDirName:".",slug:"/hms",permalink:"/docs/hms",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Hive Metastore"},sidebar:"docs",previous:{title:"Catalogs",permalink:"/docs/catalogs-index"},next:{title:"Glue Data Catalog",permalink:"/docs/glue-catalog"}},c={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Running sync",id:"running-sync",level:3},{value:"Register the target table in Hive Metastore",id:"register-the-target-table-in-hive-metastore",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"syncing-to-hive-metastore"},"Syncing to Hive Metastore"),(0,r.kt)("p",null,"This document walks through the steps to register a OneTable synced table on Hive Metastore (HMS)."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Source table(s) (Hudi/Delta/Iceberg) already written to your local storage or external storage locations like S3/GCS/ADLS.\nIf you don't have the source table written in place already,\nyou can follow the steps in ",(0,r.kt)("a",{parentName:"li",href:"/docs/how-to#create-dataset"},"this")," tutorial to set it up."),(0,r.kt)("li",{parentName:"ol"},"A compute instance where you can run Apache Spark. This can be your local machine, docker,\nor a distributed system like Amazon EMR, Google Cloud's Dataproc, Azure HDInsight etc.\nThis is a required step to register the table in HMS using a Spark client."),(0,r.kt)("li",{parentName:"ol"},"Clone the OneTable ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/onetable-io/onetable"},"repository")," and create the\n",(0,r.kt)("inlineCode",{parentName:"li"},"utilities-0.1.0-SNAPSHOT-bundled.jar")," by following the steps on the ",(0,r.kt)("a",{parentName:"li",href:"/docs/setup"},"Installation page")," "),(0,r.kt)("li",{parentName:"ol"},"This guide also assumes that you have configured the Hive Metastore locally or on EMR/Dataproc/HDInsight\nand is already running.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"running-sync"},"Running sync"),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"my_config.yaml")," in the cloned OneTable directory."),(0,r.kt)(l.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"targetFormat: HUDI",value:"hudi"},{label:"targetFormat: DELTA",value:"delta"},{label:"targetFormat: ICEBERG",value:"iceberg"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"hudi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: DELTA|ICEBERG # choose only one\ntargetFormats:\n  - HUDI\ndatasets:\n  -\n    tableBasePath: file:///path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE\n"))),(0,r.kt)(o.Z,{value:"delta",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: HUDI|ICEBERG # choose only one\ntargetFormats:\n  - DELTA\ndatasets:\n  -\n    tableBasePath: file:///path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE\n"))),(0,r.kt)(o.Z,{value:"iceberg",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: HUDI|DELTA # choose only one\ntargetFormats:\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: file:///path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE\n")))),(0,r.kt)("admonition",{title:"Note:",type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Replace with appropriate values for ",(0,r.kt)("inlineCode",{parentName:"li"},"sourceFormat"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tableBasePath")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tableName")," fields."),(0,r.kt)("li",{parentName:"ol"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"file:///path/to/source/data")," to appropriate source data path\nif you have your source table in S3/GCS/ADLS i.e. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"S3 - ",(0,r.kt)("inlineCode",{parentName:"li"},"s3://path/to/source/data")," "),(0,r.kt)("li",{parentName:"ul"},"GCS - ",(0,r.kt)("inlineCode",{parentName:"li"},"gs://path/to/source/data")," or"),(0,r.kt)("li",{parentName:"ul"},"ADLS - ",(0,r.kt)("inlineCode",{parentName:"li"},"abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<path-to-data>")))))),(0,r.kt)("p",null,"From your terminal under the cloned OneTable directory, run the sync process using the below command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},"java -jar utilities/target/utilities-0.1.0-SNAPSHOT-bundled.jar --datasetConfig my_config.yaml\n")),(0,r.kt)("admonition",{title:"Note:",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"At this point, if you check your bucket path, you will be able to see ",(0,r.kt)("inlineCode",{parentName:"p"},".hoodie")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"_delta_log")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),"\ndirectory with relevant metadata files that helps query engines to interpret the data as a Hudi/Delta/Iceberg table.")),(0,r.kt)("h3",{id:"register-the-target-table-in-hive-metastore"},"Register the target table in Hive Metastore"),(0,r.kt)("p",null,"Now you need to register the OneTable synced target table in Hive Metastore.  "),(0,r.kt)(l.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"targetFormat: HUDI",value:"hudi"},{label:"targetFormat: DELTA",value:"delta"},{label:"targetFormat: ICEBERG",value:"iceberg"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"hudi",mdxType:"TabItem"},(0,r.kt)("p",null,"A Hudi table can directly be synced to the Hive Metastore using Hive Sync Tool\nand subsequently be queried by different query engines. For more information on the Hive Sync Tool, check\n",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/syncing_metastore"},"Hudi Hive Metastore")," docs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},"cd $HUDI_HOME/hudi-sync/hudi-hive-sync\n\n./run_sync_tool.sh  \\\n--jdbc-url <jdbc_url> \\\n--user <username> \\\n--pass <password> \\\n--partitioned-by <partition_field> \\\n--base-path <'/path/to/synced/hudi/table'> \\\n--database <database_name> \\\n--table <tableName>\n")),(0,r.kt)("admonition",{title:"Note:",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"file:///path/to/source/data")," to appropriate source data path\nif you have your source table in S3/GCS/ADLS i.e."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"S3 - ",(0,r.kt)("inlineCode",{parentName:"li"},"s3://path/to/source/data")),(0,r.kt)("li",{parentName:"ul"},"GCS - ",(0,r.kt)("inlineCode",{parentName:"li"},"gs://path/to/source/data")," or"),(0,r.kt)("li",{parentName:"ul"},"ADLS - ",(0,r.kt)("inlineCode",{parentName:"li"},"abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<path-to-data>")))),(0,r.kt)("p",null,"Now you will be able to query the created table directly as a Hudi table from the same ",(0,r.kt)("inlineCode",{parentName:"p"},"spark")," session or\nusing query engines like ",(0,r.kt)("inlineCode",{parentName:"p"},"Presto")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"Trino"),". Check out the guides for querying the OneTable synced tables on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/presto"},"Presto")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/trino"},"Trino")," query engines for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"SELECT * FROM <database_name>.<table_name>;\n"))),(0,r.kt)(o.Z,{value:"delta",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},'spark-sql --packages io.delta:delta-core_2.12:2.0.0 \\\n--conf "spark.sql.extensions=io.delta.sql.DeltaSparkSessionExtension" \\\n--conf "spark.sql.catalog.spark_catalog=org.apache.spark.sql.delta.catalog.DeltaCatalog" \\\n--conf "spark.sql.catalogImplementation=hive"\n')),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-sql")," shell, you need to create a schema and table like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"CREATE SCHEMA delta_db;\n\nCREATE TABLE delta_db.<table_name> USING DELTA LOCATION '/path/to/synced/delta/table';\n")),(0,r.kt)("admonition",{title:"Note:",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"file:///path/to/source/data")," to appropriate source data path\nif you have your source table in S3/GCS/ADLS i.e. "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"S3 - ",(0,r.kt)("inlineCode",{parentName:"li"},"s3://path/to/source/data")),(0,r.kt)("li",{parentName:"ul"},"GCS - ",(0,r.kt)("inlineCode",{parentName:"li"},"gs://path/to/source/data")," or"),(0,r.kt)("li",{parentName:"ul"},"ADLS - ",(0,r.kt)("inlineCode",{parentName:"li"},"abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<path-to-data>")))),(0,r.kt)("p",null,"Now you will be able to query the created table directly as a Delta table from the same ",(0,r.kt)("inlineCode",{parentName:"p"},"spark")," session or\nusing query engines like ",(0,r.kt)("inlineCode",{parentName:"p"},"Presto")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"Trino"),". Check out the guides for querying the OneTable synced tables on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/presto"},"Presto")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/trino"},"Trino")," query engines for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"SELECT * FROM delta_db.<table_name>;\n"))),(0,r.kt)(o.Z,{value:"iceberg",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},'spark-sql --packages org.apache.iceberg:iceberg-spark-runtime-3.2_2.12:1.2.1 \\\n--conf "spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions" \\\n--conf "spark.sql.catalog.spark_catalog=org.apache.iceberg.spark.SparkSessionCatalog" \\\n--conf "spark.sql.catalog.spark_catalog.type=hive" \\\n--conf "spark.sql.catalog.hive_prod=org.apache.iceberg.spark.SparkCatalog" \\\n--conf "spark.sql.catalog.hive_prod.type=hive"\n')),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-sql")," shell, you need to create a schema and table like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"CREATE SCHEMA iceberg_db;\n\nCALL hive_prod.system.register_table(\n   table => 'hive_prod.iceberg_db.<table_name>',\n   metadata_file => '/path/to/synced/iceberg/table/metadata/<VERSION>.metadata.json'\n);\n\n")),(0,r.kt)("admonition",{title:"Note:",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Replace the dataset path while creating a dataframe to appropriate data path if you have your table\nin S3/GCS/ADLS i.e. "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"S3 - ",(0,r.kt)("inlineCode",{parentName:"li"},"s3://path/to/source/data")),(0,r.kt)("li",{parentName:"ul"},"GCS - ",(0,r.kt)("inlineCode",{parentName:"li"},"gs://path/to/source/data")," or"),(0,r.kt)("li",{parentName:"ul"},"ADLS - ",(0,r.kt)("inlineCode",{parentName:"li"},"abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<path-to-data>")))),(0,r.kt)("p",null,"Now you will be able to query the created table directly as an Iceberg table from the same ",(0,r.kt)("inlineCode",{parentName:"p"},"spark")," session or\nusing query engines like ",(0,r.kt)("inlineCode",{parentName:"p"},"Presto")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"Trino"),". Check out the guides for querying the OneTable synced tables on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/presto"},"Presto")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/trino"},"Trino")," query engines for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'md title="sql"',md:!0,title:'"sql"'},"SELECT * FROM iceberg_db.<table_name>;\n")))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this guide we saw how to,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"sync a source table to create metadata for the desired target table formats using OneTable"),(0,r.kt)("li",{parentName:"ol"},"catalog the data in the target table format in Hive Metastore"),(0,r.kt)("li",{parentName:"ol"},"query the target table using Spark")))}h.isMDXComponent=!0}}]);