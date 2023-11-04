"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var g=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},5080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const o={sidebar_position:1,title:"Creating your first interoperable table"},s="Creating your first interoperable table",u={unversionedId:"how-to",id:"how-to",title:"Creating your first interoperable table",description:"Using OneTable to sync your source tables in different target format involves running sync on your",source:"@site/docs/how-to.md",sourceDirName:".",slug:"/how-to",permalink:"/docs/how-to",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Creating your first interoperable table"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/setup"},next:{title:"Catalogs",permalink:"/docs/catalogs-index"}},c={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Initialize a pyspark shell",id:"initialize-a-pyspark-shell",level:3},{value:"Create dataset",id:"create-dataset",level:3},{value:"Running sync",id:"running-sync",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-your-first-interoperable-table"},"Creating your first interoperable table"),(0,r.kt)("admonition",{title:"Important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Using OneTable to sync your source tables in different target format involves running sync on your\ncurrent dataset using a bundled jar. You can create this bundled jar by following the instructions\non the ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup"},"Installation page"),". Read through OneTable's\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onetable-io/onetable#building-the-project-and-running-tests"},"GitHub page")," for more information.")),(0,r.kt)("p",null,"In this tutorial we will look at how to use OneTable to add interoperability between table formats.\nFor example, you can expose a table ingested with Hudi as an Iceberg and/or Delta Lake table without\ncopying or moving the underlying data files used for that table while maintaining a similar commit\nhistory to enable proper point in time queries."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A compute instance where you can run Apache Spark. This can be your local machine, docker,\nor a distributed service like Amazon EMR, Google Cloud's Dataproc, Azure HDInsight etc"),(0,r.kt)("li",{parentName:"ol"},"Clone the OneTable ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/onetable-io/onetable"},"repository")," and create the\n",(0,r.kt)("inlineCode",{parentName:"li"},"utilities-0.1.0-SNAPSHOT-bundled.jar")," by following the steps on the ",(0,r.kt)("a",{parentName:"li",href:"/docs/setup"},"Installation page")),(0,r.kt)("li",{parentName:"ol"},"Optional: Setup access to write to and/or read from distributed storage services like:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Amazon S3 by following the steps\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"here")," to install AWSCLIv2\nand setup access credentials by following the steps\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html"},"here")),(0,r.kt)("li",{parentName:"ul"},"Google Cloud Storage by following the steps\n",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/keys-create-delete#creating"},"here"))))),(0,r.kt)("p",null,"For the purpose of this tutorial, we will walk through the steps to using OneTable locally."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"initialize-a-pyspark-shell"},"Initialize a pyspark shell"),(0,r.kt)("admonition",{title:"Note:",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can choose to follow this example with ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-sql")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-shell")," as well.")),(0,r.kt)(l.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"Hudi",value:"hudi"},{label:"Delta",value:"delta"},{label:"Iceberg",value:"iceberg"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"hudi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},'pyspark \\\n  --packages org.apache.hudi:hudi-spark3.2-bundle_2.12:0.14.0 \\\n  --conf "spark.serializer=org.apache.spark.serializer.KryoSerializer" \\\n  --conf "spark.sql.catalog.spark_catalog=org.apache.spark.sql.hudi.catalog.HoodieCatalog" \\\n  --conf "spark.sql.extensions=org.apache.spark.sql.hudi.HoodieSparkSessionExtension"\n'))),(0,r.kt)(i.Z,{value:"delta",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},'pyspark \\\n  --packages io.delta:delta-core_2.12:2.1.0 \\\n  --conf "spark.sql.extensions=io.delta.sql.DeltaSparkSessionExtension" \\\n  --conf "spark.sql.catalog.spark_catalog=org.apache.spark.sql.delta.catalog.DeltaCatalog"\n'))),(0,r.kt)(i.Z,{value:"iceberg",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},'pyspark \\\n  --packages org.apache.iceberg:iceberg-spark-runtime-3.2_2.12:1.4.1 \\\n  --conf "spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions" \\\n  --conf "spark.sql.catalog.spark_catalog=org.apache.iceberg.spark.SparkSessionCatalog"\n')))),(0,r.kt)("admonition",{title:"Note:",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"You may need additional configurations to write to external cloud storage locations like Amazon S3, GCS or ADLS\nwhen you are working with spark locally. Refer to the respective cloud provider's documentation for more information.")),(0,r.kt)("h3",{id:"create-dataset"},"Create dataset"),(0,r.kt)("p",null,"Write a source table locally."),(0,r.kt)(l.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"Hudi",value:"hudi"},{label:"Delta",value:"delta"},{label:"Iceberg",value:"iceberg"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"hudi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'md title="python"',md:!0,title:'"python"'},"from pyspark.sql.types import *\n\n# initialize the bucket\ntable_name = \"people\"\nlocal_base_path = \"/tmp/hudi-dataset\"\n\nrecords = [\n   (1, 'John', 25, 'NYC', '2023-09-28 00:00:00'),\n   (2, 'Emily', 30, 'SFO', '2023-09-28 00:00:00'),\n   (3, 'Michael', 35, 'ORD', '2023-09-28 00:00:00'),\n   (4, 'Andrew', 40, 'NYC', '2023-10-28 00:00:00'),\n   (5, 'Bob', 28, 'SEA', '2023-09-23 00:00:00'),\n   (6, 'Charlie', 31, 'DFW', '2023-08-29 00:00:00')\n]\n\nschema = StructType([\n   StructField(\"id\", IntegerType(), True),\n   StructField(\"name\", StringType(), True),\n   StructField(\"age\", IntegerType(), True),\n   StructField(\"city\", StringType(), True),\n   StructField(\"create_ts\", StringType(), True)\n])\n\ndf = spark.createDataFrame(records, schema)\n\nhudi_options = {\n   'hoodie.table.name': table_name,\n   'hoodie.datasource.write.partitionpath.field': 'city',\n   'hoodie.datasource.write.hive_style_partitioning': 'true'\n}\n\n(\n   df.write\n   .format(\"hudi\")\n   .options(**hudi_options)\n   .save(f\"{local_base_path}/{table_name}\")\n)\n"))),(0,r.kt)(i.Z,{value:"delta",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'md title="python"',md:!0,title:'"python"'},"from pyspark.sql.types import *\n\n# initialize the bucket\ntable_name = \"people\"\nlocal_base_path = \"/tmp/delta-dataset\"\n\nrecords = [\n   (1, 'John', 25, 'NYC', '2023-09-28 00:00:00'),\n   (2, 'Emily', 30, 'SFO', '2023-09-28 00:00:00'),\n   (3, 'Michael', 35, 'ORD', '2023-09-28 00:00:00'),\n   (4, 'Andrew', 40, 'NYC', '2023-10-28 00:00:00'),\n   (5, 'Bob', 28, 'SEA', '2023-09-23 00:00:00'),\n   (6, 'Charlie', 31, 'DFW', '2023-08-29 00:00:00')\n]\n\nschema = StructType([\n   StructField(\"id\", IntegerType(), True),\n   StructField(\"name\", StringType(), True),\n   StructField(\"age\", IntegerType(), True),\n   StructField(\"city\", StringType(), True),\n   StructField(\"create_ts\", StringType(), True)\n])\n\ndf = spark.createDataFrame(records, schema)\n\n(\n   df.write\n   .format(\"delta\")\n   .partitionBy(\"city\")\n   .save(f\"{local_base_path}/{table_name}\")\n)\n"))),(0,r.kt)(i.Z,{value:"iceberg",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'md title="python"',md:!0,title:'"python"'},"from pyspark.sql.types import *\n\n# initialize the bucket\ntable_name = \"people\"\nlocal_base_path = \"/tmp/iceberg-dataset\"\n\nrecords = [\n   (1, 'John', 25, 'NYC', '2023-09-28 00:00:00'),\n   (2, 'Emily', 30, 'SFO', '2023-09-28 00:00:00'),\n   (3, 'Michael', 35, 'ORD', '2023-09-28 00:00:00'),\n   (4, 'Andrew', 40, 'NYC', '2023-10-28 00:00:00'),\n   (5, 'Bob', 28, 'SEA', '2023-09-23 00:00:00'),\n   (6, 'Charlie', 31, 'DFW', '2023-08-29 00:00:00')\n]\n\nschema = StructType([\n   StructField(\"id\", IntegerType(), True),\n   StructField(\"name\", StringType(), True),\n   StructField(\"age\", IntegerType(), True),\n   StructField(\"city\", StringType(), True),\n   StructField(\"create_ts\", StringType(), True)\n])\n\ndf = spark.createDataFrame(records, schema)\n\n(\n   df.write\n   .format(\"iceberg\")\n   .partitionBy(\"city\")\n   .save(f\"{local_base_path}/{table_name}\")\n)\n")))),(0,r.kt)("h3",{id:"running-sync"},"Running sync"),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"my_config.yaml")," in the cloned onetable directory."),(0,r.kt)(l.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"Hudi",value:"hudi"},{label:"Delta",value:"delta"},{label:"Iceberg",value:"iceberg"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"hudi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: HUDI\ntargetFormats:\n  - DELTA\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: file:///tmp/hudi-dataset/people\n    tableName: people\n    partitionSpec: city:VALUE\n"))),(0,r.kt)(i.Z,{value:"delta",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: DELTA\ntargetFormats:\n  - HUDI\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: file:///tmp/delta-dataset/people\n    tableName: people\n    partitionSpec: city:VALUE\n"))),(0,r.kt)(i.Z,{value:"iceberg",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: ICEBERG\ntargetFormats:\n  - HUDI\n  - DELTA\ndatasets:\n  -\n    tableBasePath: file:///tmp/iceberg-dataset/people\n    tableName: people\n    partitionSpec: city:VALUE\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optional:")," If your source table exists in Amazon S3, GCS or ADLS you should use a ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," file similar to below."),(0,r.kt)(l.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"Hudi",value:"hudi"},{label:"Delta",value:"delta"},{label:"Iceberg",value:"iceberg"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"hudi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: HUDI\ntargetFormats:\n  - DELTA\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: s3://path/to/hudi-data  # replace this with gs://path/to/hudi_data if your data is in GCS. \n    tableName: people\n    partitionSpec: city:VALUE\n"))),(0,r.kt)(i.Z,{value:"delta",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: HUDI\ntargetFormats:\n  - DELTA\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: s3://path/to/delta-data  # replace this with gs://path/to/delta_data if your data is in GCS. \n    tableName: people\n    partitionSpec: city:VALUE\n"))),(0,r.kt)(i.Z,{value:"iceberg",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: HUDI\ntargetFormats:\n  - DELTA\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: s3://path/to/iceberg-data  # replace this with gs://path/to/iceberg_data if your data is in GCS. \n    tableName: people\n    partitionSpec: city:VALUE\n")))),(0,r.kt)("admonition",{title:"Note:",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Authentication for AWS is done with ",(0,r.kt)("inlineCode",{parentName:"p"},"com.amazonaws.auth.DefaultAWSCredentialsProviderChain"),".\nTo override this setting, specify a different implementation with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--awsCredentialsProvider")," option."),(0,r.kt)("p",{parentName:"admonition"},"Authentication for GCP requires service account credentials to be exported. i.e.\n",(0,r.kt)("inlineCode",{parentName:"p"},"export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service_account_key.json"))),(0,r.kt)("p",null,"In your terminal under the cloned OneTable directory, run the below command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},"java -jar utilities/target/utilities-0.1.0-SNAPSHOT-bundled.jar --datasetConfig my_config.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optional:"),"\nAt this point, if you check your local path, you will be able to see the necessary metadata files that contain the schema,\ncommit history, partitions, and column stats that helps query engines to interpret the data in the target table format."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial, we saw how to create a source table and use OneTable to create the metadata files\nthat can be used to query the source table in different target table formats."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Go through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/catalogs-index"},"Catalog Integration guides")," to register the OneTable synced tables\nin different data catalogs."))}h.isMDXComponent=!0}}]);