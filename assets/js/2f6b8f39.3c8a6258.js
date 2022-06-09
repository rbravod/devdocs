"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[22054],{98121:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),l=a(13904),i=["components"],s={title:"Translation langconfig",sidebar_label:"Langconfig",sidebar_position:1,tags:["Processes","Translation","Language"]},d=void 0,p={unversionedId:"development/process/translation/langpack/langconfig",id:"development/process/translation/langpack/langconfig",title:"Translation langconfig",description:"Langconfig is an important file in a language pack, dealing with all the configuration parameters of that language. It is good practice to review this first when starting of a new language pack or when taking on responsibility of an existing language pack. You can edit it by going to lang.moodle.org and find it as the core_langconfig component for your language.",source:"@site/general/development/process/translation/langpack/langconfig.md",sourceDirName:"development/process/translation/langpack",slug:"/development/process/translation/langpack/langconfig",permalink:"/devdocs/general/development/process/translation/langpack/langconfig",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process/translation/langpack/langconfig.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Translation",permalink:"/devdocs/general/tags/translation"},{label:"Language",permalink:"/devdocs/general/tags/language"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654695996,formattedLastUpdatedAt:"08/06/2022",sidebarPosition:1,frontMatter:{title:"Translation langconfig",sidebar_label:"Langconfig",sidebar_position:1,tags:["Processes","Translation","Language"]},sidebar:"process",previous:{title:"Language pack",permalink:"/devdocs/general/development/process/translation/langpack/"},next:{title:"Priority",permalink:"/devdocs/general/development/process/translation/langpack/priority"}},c={},m=[{value:"Translations",id:"translations",level:2}],g={toc:m};function h(e){var t=e.components,d=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,(0,n.Z)({frontMatter:s},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Langconfig")," is an important file in a language pack, dealing with all the configuration parameters of that language. It is good practice to review this first when starting of a new language pack or when taking on responsibility of an existing language pack. You can edit it by going to lang.moodle.org and find it as the ",(0,r.kt)("inlineCode",{parentName:"p"},"core_langconfig")," component for your language."),(0,r.kt)("p",null,"On this page you find a little documentation for each setting to help you deciding what should go there for your language."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alphabet,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The alphabet in your language. Used e.g. for the list of letters on the participants page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backupnameformat,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The format for the backup name, which usually includes current date when it's created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"decsep,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How decimals are separated in your language. ",(0,r.kt)("a",{parentName:"td",href:"http://en.wikipedia.org/wiki/Decimal_separator"},"Usually a dot or a comma"),". Take note that some countries which seem to share the same language may have a different character to separate the integer part from the fractional part of a number written in decimal form. For example, Central American Spanish-speaking countries use the decimal point, while South American Spanish-speaking countries use the decimal comma.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Example:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"English: 36.5"),(0,r.kt)("li",null,"Dutch: 36,5")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"firstdayofweek,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the week in your language. Allowed values are 0,1,2,3,4,5,6, where 0 stands for Sunday.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iso6391,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The ISO 639.1 value for your language. You can find this value easily on ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"Wikipedia"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iso6392,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The ISO 639.2 value for your language. You can find this value easily on ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes"},"Wikipedia"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labelsep,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"How a label is separated from a form. Could be a colon, a space and a colon or something different, according to what's generally used in your language. This character is not read by screen readers for accessibility reasons.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"listsep,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The symbol usually used in your language, for separating items in a list. This is used, for example, when using formulas with multiple items in the gradebook. This must be a symbol different from the ",(0,r.kt)("inlineCode",{parentName:"td"},"decsep")," symbol.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"locale,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"Locale for ",(0,r.kt)("inlineCode",{parentName:"td"},"*nix")," servers.",(0,r.kt)("br",null),"If your Moodle calendar is not translated, then this string is wrong (or your server is not configured to support the language).",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"INFO"),": Locales, used in language packs should come only from the ",(0,r.kt)("a",{parentName:"td",href:"./locales"},"table of locales"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),"An unsupported locale in a Mac or Linux site will produce the following error when you try to update your language pack:",(0,r.kt)("img",{alt:"Unsupported locale error",src:a(40424).Z,width:"1042",height:"344"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"And, more important, it may produce an intermittent ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," error message:",(0,r.kt)("img",{alt:"Undefined error",src:a(28959).Z,width:"999",height:"416"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localecldr,core_lanconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"More information can be found in the ",(0,r.kt)("a",{parentName:"td",href:"http://cldr.unicode.org/index/cldr-spec/picking-the-right-language-code"},"Unicode Common Locale Data Repository")," page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localewin,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"Locale for Windows servers.",(0,r.kt)("br",null),"If your Moodle calendar is not translated, then this string is wrong (or your server is not configured to support the language). There are quite a few languages that are not supported by Windows servers and the ",(0,r.kt)("inlineCode",{parentName:"td"},"localewin")," server can not be set. In that case, you have to run your Moodle on a ",(0,r.kt)("inlineCode",{parentName:"td"},"*nix")," server to make the translation of your Moodle calendar work")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localewincharset,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The character set to use when Moodle is installed on a Windows server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"oldcharset,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"Necessary to upgrade from prior to 1.6. This string defines the charset used in 1.5 and earlier for this language pack. For language packs that start later then Moodle 1.5, this can be left empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parentlanguage,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The original Moodle default Australian language pack has this field empty (as the Australian English language IS the official Moodle language).",(0,r.kt)("br",null),"If your language pack relies on another one (it is a 'child' language of a 'parent' language), then this is the place to point out which language pack. ",(0,r.kt)("strong",{parentName:"td"},"For most language packs, this should be left empty"),", to default to English if strings are missing.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Example"),": Canadian French (",(0,r.kt)("inlineCode",{parentName:"td"},"fr_ca"),") is mostly the same as French (",(0,r.kt)("inlineCode",{parentName:"td"},"fr"),") apart from a few changes. Creating a language pack with as parent language French will shop French if a string does not exist in the language pack Canadian French. If a string doesn't exist in both language packs, English is shown.",(0,r.kt)("br",null),(0,r.kt)("br",null),"On the ",(0,r.kt)("a",{parentName:"td",href:"https://download.moodle.org/releases/latest/"},"download page for the language packs")," you can see how many strings are different from the parent language pack.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"NOTE"),": Using language customization for ",(0,r.kt)("inlineCode",{parentName:"td"},"parentlanguage")," inside ",(0,r.kt)("inlineCode",{parentName:"td"},"langconfig.php")," in an existing Moodle server, where you add a parent language (while the AMOS ",(0,r.kt)("inlineCode",{parentName:"td"},"parentlanguage")," string is actually empty) will ask for the installation of said parent language in the server, but will not substitute the missing translations in the child language with those of the parent language; English will be shown. Surgically editing (a dangerous, never recommended procedure) the ",(0,r.kt)("inlineCode",{parentName:"td"},"langconfig.php")," file of the server would work, until the next language pack update -manual or cron made-  erases the change.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimedate,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and date are displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimedatefullshort,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and date are displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimedateshort,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and date are displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimedatetime,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and date are displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimedatetimeshort,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and date are displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimedaydate,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and date are displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimedaydatetime,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and date are displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimedayshort,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and day are displayed in short in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimedaytime,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and day are displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimemonthyear,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How month and year are displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimerecent,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and date are displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimerecentfull,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time and date are displayed for recent activities in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strftimetime,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How time is displayed in Moodle. Usually it is fine to check the order of the English one and use the same symbols. If that doesn't serve your needs, the complete reference for what is possible can be found on ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3schools.com/php/func_date_strftime.asp"},"http://www.w3schools.com/php/func_date_strftime.asp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thisdirection,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"In which direction your language should be displayed on the screen. The only possible options are LTR (left to right) or RTL (right to left).",(0,r.kt)("strong",{parentName:"td"},"Do not attempt to translate these"),", or ",(0,r.kt)("a",{parentName:"td",href:"https://moodle.org/mod/forum/discuss.php?d=328567#p1323101"},"you will wreak havoc on many themes"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thisdirectionvertical,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How text that is printed vertical on the screen is oriented (like in a docked block).",(0,r.kt)("br",null),(0,r.kt)("br",null),"The only possible values can be BTT (bottom to top) or TTB (top to bottom). ",(0,r.kt)("strong",{parentName:"td"},"Do not attempt to translate these"),", or ",(0,r.kt)("a",{parentName:"td",href:"https://moodle.org/mod/forum/discuss.php?d=328567#p1323101"},"you will wreak havoc on many themes"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thislanguage,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your language in your own language")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thislanguageint,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your language in English")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thousandssep,core_langconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"How you separate thousands in your language.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"IMPORTANT"),": this can not be a space (more information ",(0,r.kt)("a",{parentName:"td",href:"http://lang.moodle.org/mod/forum/discuss.php?d=1450#p1730"},"in this discussion"),"). If you want a space, you can try with ",(0,r.kt)("inlineCode",{parentName:"td"},"&amp;nbsp;")," but that is not fully tested yet.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Example"),":",(0,r.kt)("ul",null,(0,r.kt)("li",null,"in Dutch 1.000.000 (with a dot)"),(0,r.kt)("li",null,"in English 1,000,000 (with a comma)")))))),(0,r.kt)("h2",{id:"translations"},"Translations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.moodle.org/es/Langconfig"},"es: Langconfig"))))}h.isMDXComponent=!0},28959:function(e,t,a){t.Z=a.p+"assets/images/undefined_error-a86fc4aec0e1b726e4485ee011d292e3.png"},40424:function(e,t,a){t.Z=a.p+"assets/images/unsupported_locale_mac-6e580eae32cb6187bf2166e9979cdcd6.png"}}]);