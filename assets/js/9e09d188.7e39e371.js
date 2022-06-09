"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[82412],{6542:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return p}});var r=o(83117),s=o(80102),a=(o(67294),o(3905)),i=o(13904),l=["components"],n={title:"Moodle 3.5.7",tags:["Release notes","Moodle 3.5"],sidebar_position:7,moodleVersion:"3.5.7"},d=void 0,u={unversionedId:"releases/3.5/3.5.7",id:"releases/3.5/3.5.7",title:"Moodle 3.5.7",description:"Release date: 8 July 2019",source:"@site/general/releases/3.5/3.5.7.md",sourceDirName:"releases/3.5",slug:"/releases/3.5/3.5.7",permalink:"/devdocs/general/releases/3.5/3.5.7",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.5/3.5.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.5",permalink:"/devdocs/general/tags/moodle-3-5"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654695996,formattedLastUpdatedAt:"08/06/2022",sidebarPosition:7,frontMatter:{title:"Moodle 3.5.7",tags:["Release notes","Moodle 3.5"],sidebar_position:7,moodleVersion:"3.5.7"},sidebar:"releaseNotes",previous:{title:"Moodle 3.5.6",permalink:"/devdocs/general/releases/3.5/3.5.6"},next:{title:"Moodle 3.5.8",permalink:"/devdocs/general/releases/3.5/3.5.8"}},m={},p=[{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security fixes and improvements",id:"security-fixes-and-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:3},{value:"Security improvements",id:"security-improvements",level:3},{value:"Translations",id:"translations",level:2}],c={toc:p};function g(e){var t=e.components,o=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,(0,r.Z)({frontMatter:n},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("p",null,"Release date: 8 July 2019"),(0,a.kt)("p",null,"Here is ",(0,a.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.5.7%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.5.7"),"."),(0,a.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58315"},"MDL-58315")," - Boost theme no longer ignores HTML block custom classes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65581"},"MDL-65581")," - Hidden blocks can once again be unhidden"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65249"},"MDL-65249")," - Redis cache store correctly displays exception after failed connections")),(0,a.kt)("h2",{id:"security-fixes-and-improvements"},"Security fixes and improvements"),(0,a.kt)("h3",{id:"security-fixes"},"Security fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=388567"},"MSA-19-0013")," Missing sesskey (CSRF) token in loading/unloading XML files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=388568"},"MSA-19-0014")," Ability to delete glossary entries that belong to another glossary"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=388569"},"MSA-19-0015")," Quiz group overrides did not observe groups membership or accessallgroups"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=388570"},"MSA-19-0016")," Assignment group overrides did not observe separate groups mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=388571"},"MSA-19-0017")," Upgrade TCPDF library for PHP 7.3 and bug fixes (upstream)")),(0,a.kt)("h3",{id:"security-improvements"},"Security improvements"),(0,a.kt)("p",null,"The following bug fixes or improvements were made, which contribute to improving security or privacy best practices:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60347"},"MDL-60347")," - SMTP debugging now also requires developer level debugging messages to be enabled before being displayed. Although SMTP debugging is not intended for production site use, this provides an additional fallback measure to prevent verbose debugging from being unintentionally being visible to users.")),(0,a.kt)("h2",{id:"translations"},"Translations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.5.7"},"Notes de mise \xe0 jour de Moodle 3.5.7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.5.7"},"Notas de Moodle 3.5.7"))))}g.isMDXComponent=!0}}]);