"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[24056],{72308:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),i=r(13904),n=["components"],l={title:"Moodle 3.9.7",tags:["Release notes","Moodle 3.9"],sidebar_position:7,moodleVersion:"3.9.7"},p=void 0,d={unversionedId:"releases/3.9/3.9.7",id:"releases/3.9/3.9.7",title:"Moodle 3.9.7",description:"Release date: 10 May 2021",source:"@site/general/releases/3.9/3.9.7.md",sourceDirName:"releases/3.9",slug:"/releases/3.9/3.9.7",permalink:"/devdocs/general/releases/3.9/3.9.7",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.9/3.9.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.9",permalink:"/devdocs/general/tags/moodle-3-9"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654695996,formattedLastUpdatedAt:"08/06/2022",sidebarPosition:7,frontMatter:{title:"Moodle 3.9.7",tags:["Release notes","Moodle 3.9"],sidebar_position:7,moodleVersion:"3.9.7"},sidebar:"releaseNotes",previous:{title:"Moodle 3.9.6",permalink:"/devdocs/general/releases/3.9/3.9.6"},next:{title:"Moodle 3.9.8",permalink:"/devdocs/general/releases/3.9/3.9.8"}},m={},u=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,a.Z)({frontMatter:l},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 10 May 2021"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.9.7%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.9.7"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71156"},"MDL-71156")," - Upgrade step from ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67494"},"MDL-67494")," corrupts calendar events"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52724"},"MDL-52724")," - Atto does not generate UL tags when pasting LI tags"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69415"},"MDL-69415")," - H5P has namespace overlap with mod_hvp, causing unexpected behavior"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64336"},"MDL-64336")," - When an assignment is frozen students cannot see their submission"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69956"},"MDL-69956")," - Rubric and Marking Guide gray boxes and unclear error if configured incorrectly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70947"},"MDL-70947")," - File upload navigation warning not protecting all uploads and interacts with double-submit protection"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71274"},"MDL-71274"),' - "Students who have not accessed the course recently" insights should not be generated for hidden courses'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68716"},"MDL-68716")," - Error with forum_discussionlistsortorder during privacy process"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70909"},"MDL-70909")," - H5P ",(0,s.kt)("inlineCode",{parentName:"li"},"mod/h5pactivity:submit")," capability incorrectly used"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69304"},"MDL-69304")," - Import succeeds unintentionally if csv file contains id which has number and string mixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71460"},"MDL-71460")," - Change site registration notifications and newsletter subscriptions to opt-in checkbox"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62244"},"MDL-62244")," - Link to mod_label redirects to the course, not to the label"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71187"},"MDL-71187")," - Safe Exam Browser - deeper integration - The information you're about to submit is not secure"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71168"},"MDL-71168")," - Cannot send message to all users in participation report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71400"},"MDL-71400")," - The notification after uploading a grading worksheet is inaccurate"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71338"},"MDL-71338")," - Wrong content type when exporting user tours"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70616"},"MDL-70616")," - Filters not applied to rubric name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71200"},"MDL-71200")," - When copying a course, mod_folder settings are copied incorrectly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71416"},"MDL-71416")," - Course report log for user displays course name instead of users name in header"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71171"},"MDL-71171")," - Course custom field data remains as default values"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71170"},"MDL-71170")," - Incorrect error message on course custom field 'text' page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71481"},"MDL-71481")," - Flickr public repository not displaying file information"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71440"},"MDL-71440")," - Assignment submission status info should not be displayed for teachers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71003"},"MDL-71003")," - Autocomplete elements in course participant filters obscure text inputs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70980"},"MDL-70980")," - Fix review mode in the H5P activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71059"},"MDL-71059")," - Set the default returntype in repository_contentbank (Backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70429"},"MDL-70429"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71116"},"MDL-71116")," - Backpack API and URL should support more than 50 characters"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71107"},"MDL-71107")," - Content bank content's author is not restored when copying a course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70863"},"MDL-70863"),' - Q&A forums incorrectly display a "post cannot be viewed by you" error in some circumstances'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70786"},"MDL-70786")," - Some course report pages are displaying only the users's first name")),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71087"},"MDL-71087")," - File picker: Focus lost after 'Create folder'")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=422305"},"MSA-21-0012")," Forum CSV export could result in posts from all courses being exported"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=422307"},"MSA-21-0013")," Quiz unreleased grade disclosure via web service"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=422308"},"MSA-21-0014")," Blind SQL injection possible via MNet authentication"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=422309"},"MSA-21-0015")," Stored XSS in quiz grading report via user ID number"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=422310"},"MSA-21-0016")," Files API should mitigate denial-of-service risk when adding to the draft file area"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=422314"},"MSA-21-0018")," Reflected XSS and open redirect in LTI authorization endpoint"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=422315"},"MSA-21-0019")," Upgrade H5P PHP library to latest minor version (upstream)")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.9.7"},"Notes de mise \xe0 jour de Moodle 3.9.7")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.9.7"},"Notas de Moodle 3.9.7"))))}k.isMDXComponent=!0}}]);