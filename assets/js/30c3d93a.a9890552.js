(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[12845],{88698:function(e,t,n){"use strict";var o=n(75963);t.Z=void 0;var r=o(n(64938)),i=n(85893),a=(0,r.default)((0,i.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");t.Z=a},85162:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(67294),r=n(86010),i="tabItem_Ymn6";function a(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,a),hidden:n},t)}},65488:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var o=n(83117),r=n(67294),i=n(86010),a=n(72389),s=n(67392),l=n(7094),u=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,a=e.lazy,p=e.block,m=e.defaultValue,h=e.values,v=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),E=w.tabGroupChoices,Z=w.setTabGroupChoices,M=(0,r.useState)(k),x=M[0],P=M[1],A=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var N=E[v];null!=N&&N!==x&&b.some((function(e){return e.value===N}))&&P(N)}var I=function(e){var t=e.currentTarget,n=A.indexOf(t),o=b[n].value;o!==x&&(T(t),P(o),null!=v&&Z(v,String(o)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,r=A.indexOf(e.currentTarget)+1;n=null!=(o=A[r])?o:A[0];break;case"ArrowLeft":var i,a=A.indexOf(e.currentTarget)-1;n=null!=(i=A[a])?i:A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return A.push(e)},onKeyDown:D,onFocus:I,onClick:I},a,{className:(0,i.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),a?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,a.Z)();return r.createElement(p,(0,o.Z)({key:String(t)},e))}},32798:function(e){e.exports={siteHome:"https://moodle.academy/",courses:{setup:{id:29,name:"Set up your Moodle Development Environment",summary:"Learn about the Moodle developer community and setting up a development environment",description:"This course is designed for PHP developers who want to start developing Moodle plugins. You will learn about the Moodle developer community and set up a Moodle development environment. This is the first course in the Developer Pathway. Subsequent courses in the the Developer Pathway will build on the knowledge gained in this course.",tags:["development","basics","setup"],archived:!1,series:[]},securityEssentials:{id:53,name:"Moodle Access and Security Essentials",summary:"A short course looking at access control and security aspects of plugins.",description:"In this course we look at access control and security aspects of a plugin. Through a set of tutorials, you will learn how to control access to your plugin using Moodle's Access API. You will learn how to define capabilities in your plugin and how to determine if the user has the permission to access a page. This course also covers common security threats that developers need to be aware of.\n\nThis is the fourth course in the Moodle Developer Basics program.",tags:["development","basic","essentials","security","api"],archived:!1,series:["basics"]},outputEssentials:{id:49,name:"Web Output Essentials",summary:"Learn how to use Moodle's Page and Output APIs to display content in a local plugin.",description:"This course builds on the knowledge gained in the Moodle development environment course. In this course, we learn how to use Moodle's Page and Output APIs to display content in a local plugin. An introduction to localisation using language strings is also covered in this course. This is the second course in the Moodle developer pathway.",tags:["development","basics","essentials","output","api"],archived:!1,series:["basics"]},architecture:{id:51,name:"Moodle's Modular Architecture and APIs",summary:"Take a deeper look at Moodle's architecture, exploring common APIs including Navigations, Forms, Database, Upgrade, Strings, and Output.",description:"In this course we take a deeper look at Moodle's modular architecture and explore the use of common Moodle APIs. Some of the APIs covered in this course include: Navigation, Forms, Database access, Upgrade, Strings and Output APIs. Learners get hands-on practise on using these APIs in the form of developing a local plugin.\n\nThis is the third course in the Moodle Developer Basics program.",tags:["development","api","architecture"],archived:!1,series:["basics"]},pluginBasics:{id:10,name:"Moodle Plugin Development Basics",summary:"Learn about the essential concepts in Moodle's moduel architecture.",description:"This course teaches you essential concepts related to Moodle's modular architecture, enabling you to develop a simple demo plugin.\n\nPlease note, this course is being migrated to form a new program of short courses on Moodle Academy (called 'Moodle Developer Basics'), which will all be available at the end of April 2022. For now you may still complete the course on Learn Moodle, or you might like to start the Moodle Academy developer short courses that are being released over the coming weeks and will form this new beginner level program.",tags:["development","basics","essentials","api","plugins","architecture"],archived:!1,series:["basics"]}}}},50793:function(e,t,n){"use strict";n.d(t,{dn:function(){return x.Z},vL:function(){return M},U6:function(){return w},E2:function(){return P.Z},mQ:function(){return A.Z},Zh:function(){return Z}});n(86134);var o=n(67294),r=n(87918),i=n(80102),a=n(83117),s=n(95408),l=n(98700),u=n(39707),c=n(59766),d=n(69348),p=n(54502),m=n(85893);const h=["component","direction","spacing","divider","children"];function v(e,t){const n=o.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,i)=>(e.push(r),i<n.length-1&&e.push(o.cloneElement(t,{key:`separator-${i}`})),e)),[])}const f=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,a.Z)({display:"flex"},(0,s.k9)({theme:t},(0,s.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,l.hB)(t),r=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),i=(0,s.P$)({values:e.direction,base:r}),a=(0,s.P$)({values:e.spacing,base:r}),u=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${r=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,l.NA)(o,t)}};var r};n=(0,c.Z)(n,(0,s.k9)({theme:t},a,u))}return n})),g=o.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiStack"}),o=(0,u.Z)(n),{component:r="div",direction:s="column",spacing:l=0,divider:c,children:d}=o,g=(0,i.Z)(o,h),b={direction:s,spacing:l};return(0,m.jsx)(f,(0,a.Z)({as:r,ownerState:b,ref:t},g,{children:c?v(d,c):d}))}));var b=g,y=n(39960);function k(e,t,n){var i=function(e){return"number"==typeof e&&Number.isInteger(e)?e.toFixed(1):e}(t),a=o.createElement("span",null,function(e){if("since"===e)return"Since";if("deprecated"===e)return"Deprecated";throw new Error("Unknown <Since> type: '"+e+"'")}(e)," ",i),s=o.createElement(r.Z,{key:"chip-"+e+i,label:a,clickable:!!n});return n?o.createElement(y.Z,{to:"https://tracker.moodle.org/browse/"+n,key:"link-"+e+i},s):s}function w(e){var t,n,r,i,a,s,l,u,c,d=(n=(t=e).issueNumber,r=void 0===n?null:n,i=t.type,a=void 0===i?"since":i,s=t.versions,l=void 0===s?[]:s,u=t.version,(c=void 0===u?null:u)?k(a,c,r):l.map((function(e){return k(a,e,r)})));return o.createElement(b,{direction:"row",justifyContent:"flex-end",spacing:2},d)}var E=n(86010);function Z(e){return o.createElement("div",{className:(0,E.Z)(" alert alert--success margin-bottom--lg ")},o.createElement("span",{className:(0,E.Z)(" badge badge--success ")},"An example of correct behaviour"),e.children)}function M(e){return o.createElement("div",{className:(0,E.Z)(" alert alert--danger margin-bottom--lg ")},o.createElement("span",{className:(0,E.Z)(" badge badge--danger ")},"An example of incorrect behaviour"),e.children)}n(80069);var x=n(46975),P=n(85162),A=n(65488)},86134:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(67294),r=n(69119),i=n(39960),a=n(88698),s=n(32798),l=n.n(s),u=n(80684);function c(e){var t=e.courseName;if(!l().courses[t])throw Error("Unknown course "+t);var n=l().courses[t];return o.createElement(r.Z,{type:"info",icon:o.createElement(a.Z,{fontSize:"inherit"}),title:"Learn more on Moodle Academy"},"You can learn more about"," ",o.createElement("strong",null,e.subject)," ","from the"," ",o.createElement(u.Z,{title:n.summary},o.createElement(i.Z,{to:l().siteHome+"course/view.php?id="+n.id},n.name))," ","on Moodle Academy.")}},80069:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(67294),r=n(87918),i=n(80684),a=n(86886),s=n(34673),l=n(3905),u=function(e,t,n){return void 0===n&&(n="info"),o.createElement(a.ZP,{item:!0,key:e},o.createElement(i.Z,{title:t},o.createElement(r.Z,{label:e,color:n})))};function c(e){var t=e.filepath,n=e.summary,r=function(e){var t=e.required,n=void 0!==t&&t,o=e.legacy,r=void 0!==o&&o,i=e.deprecated,a=void 0!==i&&i,s=e.refreshedDuringUpgrade,l=void 0!==s&&s,c=e.refreshedDuringPurge,d=void 0!==c&&c,p=[];return l&&p.push(u("Upgradable","Changes to this file or directory will be re-applied during a Moodle upgrade. If you make any changes to it, you can simply increment the version number and perform a Moodle upgrade.","info")),d&&p.push(u("Refreshed on cache purge","The contents of this file or directory are cached. To see your changes you can simply purge Moodle's caches and refresh the page.","info")),n&&p.push(u("Required","This file must be present","success")),r&&p.push(u("Legacy","Use of this file is being phased out. It is still supported for older installations but will be removed..","warning")),a&&p.push(u("Deprecated","Use of this file is deprecated and not recommended.It may still be provided for older versions of Moodle but is no longer used.","error")),p}(e),i=e.description?o.createElement(a.ZP,{item:!0,xs:12},e.description):null;return o.createElement(l.Zo,null,o.createElement(a.ZP,{container:!0,spacing:2},o.createElement(a.ZP,{item:!0,xs:6},o.createElement("h4",null,n)),o.createElement(a.ZP,{item:!0,xs:6},o.createElement(a.ZP,{container:!0,spacing:2,justifyContent:"flex-end"},r)),o.createElement(a.ZP,{item:!0,xs:12},o.createElement("h5",null,"File path:"," ",t)),i,function(e){var t=e.example,n=e.open,r=void 0!==n&&n;return t?o.createElement(a.ZP,{item:!0,xs:12},o.createElement(s.Z,{summary:o.createElement("summary",null,"View example"),open:r},t)):null}(e)))}},3347:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=n(13904),s=n(50793),l=["components"],u={title:"Question Bank plugins",tags:["Plugins","Question","qbank","Quiz"],description:"Question type plugins allow you to extend the functionality of the Moodle Question bank."},c=void 0,d={unversionedId:"apis/plugintypes/qbank/index",id:"apis/plugintypes/qbank/index",title:"Question Bank plugins",description:"Question type plugins allow you to extend the functionality of the Moodle Question bank.",source:"@site/docs/apis/plugintypes/qbank/index.mdx",sourceDirName:"apis/plugintypes/qbank",slug:"/apis/plugintypes/qbank/",permalink:"/devdocs/docs/apis/plugintypes/qbank/",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/plugintypes/qbank/index.mdx",tags:[{label:"Plugins",permalink:"/devdocs/docs/tags/plugins"},{label:"Question",permalink:"/devdocs/docs/tags/question"},{label:"qbank",permalink:"/devdocs/docs/tags/qbank"},{label:"Quiz",permalink:"/devdocs/docs/tags/quiz"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654695996,formattedLastUpdatedAt:"08/06/2022",frontMatter:{title:"Question Bank plugins",tags:["Plugins","Question","qbank","Quiz"],description:"Question type plugins allow you to extend the functionality of the Moodle Question bank."},sidebar:"docs",previous:{title:"Activity modules",permalink:"/devdocs/docs/apis/plugintypes/mod/"},next:{title:"Repository plugins",permalink:"/devdocs/docs/apis/plugintypes/repository/"}},p={},m=[{value:"Introduction",id:"introduction",level:2}],h={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,(0,o.Z)({frontMatter:u},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)(s.U6,{version:"4.0",issueNumber:"MDL-70329",mdxType:"Since"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Question type plugins allow you to extend the functionality of the Moodle Question bank, and support features including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Table columns"),(0,i.kt)("li",{parentName:"ul"},"Action menu items"),(0,i.kt)("li",{parentName:"ul"},"Bulk actions"),(0,i.kt)("li",{parentName:"ul"},"Navigation node (tabs)"),(0,i.kt)("li",{parentName:"ul"},"Question preview additions (via callback)")))}v.isMDXComponent=!0}}]);