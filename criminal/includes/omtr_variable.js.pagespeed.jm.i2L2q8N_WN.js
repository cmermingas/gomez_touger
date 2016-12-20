function getMetaContents(mn){var m=document.getElementsByTagName('meta');for(var i in m){if(m[i].name==mn){return m[i].content;}}}
Date.prototype.getWeek=function(){var onejan=new Date(this.getFullYear(),0,1);return Math.ceil((((this-onejan)/86400000)+onejan.getDay()+1)/7);}
omtr.pageName=""
omtr.hier1=""
omtr.pageType=""
omtr.campaign=""
var fl_Date=new Date();omtr.channel=document.domain.toLowerCase();omtr.server='Firmsite';omtr.pageName=document.domain+':'+omtr.getPageName();omtr.pageName=omtr.pageName.toLowerCase();if(omtr.getPageName()==omtr.defaultPage){var flid;if(omtr.c_r('flid')){flid=omtr.c_r('flid');}else{flid=omtr.getAndPersistValue(fl_Date.getTime(),'flid',0);};omtr.events=omtr.apl(omtr.events,'event41:'+flid+'-'+sfl_logicalSite,",",0)};if(omtr.eVar7)
{omtr.eVar7=omtr.getValOnce(omtr.eVar7,'omtr_evar7',0);}
else
{omtr.eVar7=omtr.getQueryParam('flcmp');omtr.eVar7=omtr.getValOnce(omtr.eVar7,'omtr_evar7',0);if(omtr.eVar7){omtr.events=omtr.apl(omtr.events,"event42",",",0);}}
omtr.prop10=omtr.getQueryParam('stext');if(omtr.prop10)
{omtr.prop10=omtr.prop10.toLowerCase()
omtr.prop9='FS Onsite Search';omtr.events=omtr.apl(omtr.events,"event5",",",0);}
var sfl_path=location.pathname.toLowerCase()+location.search.toLowerCase();var sfl_thank=0;var sfl_contact=0;var tagName;if((sfl_path.indexOf('thank'))>0&&(sfl_path.indexOf('jonathank')<0))
{tagName=omtr.c_r('cform');if(!tagName){tagName='FirmSite Contact Form';}
omtr.prop15=tagName;omtr.events=omtr.apl(omtr.events,"event4",",",0);sfl_thank=1;omtr.prop41='contact us';omtr.eVar41="D=c41";}
if(sfl_thank==0&&((sfl_path.indexOf('contact')>0)||(sfl_path.indexOf('staticform')>0)||(sfl_path.indexOf('profileeoform')>0)||(sfl_path.indexOf('officedescriptions')>0)||(sfl_path.indexOf('intake')>0)))
{var formArray=document.getElementsByTagName('form');var tag;for(var i=0;i<formArray.length;i++){tag=formArray.item(i);if(tag.name){try{tagName=tag.name.toLowerCase();if(tagName.indexOf('short')>0){tagName='FirmSite Short Form';}else if(tagName.indexOf('practicecenterform')>0){tagName='Practice Center Form';}else if(tagName.indexOf('intakeform')>0){tagName='FirmSite Intake Form';}else{tagName='FirmSite Contact';}}catch(err){tagName='FirmSite Contact Form';};if(tagName)break;}};omtr.prop15=omtr.getAndPersistValue(tagName,'cform',0);omtr.events=omtr.apl(omtr.events,"event3",",",0);sfl_contact=1;omtr.prop41='contact us';omtr.eVar41="D=c41";}
var sfl_pageType=getMetaContents('FSWritertoolPageType');if(!sfl_pageType)sfl_pageType='Interior Page';omtr.hier4="Firmsite:";if(omtr.getPageName()==omtr.defaultPage)
{omtr.hier4+=omtr.defaultPage}
else if(sfl_thank==1)
{omtr.hier4+=sfl_pageType+':Thank You Page'}
else if(sfl_contact==1)
{omtr.hier4+=sfl_pageType+':Contact Page'}
else
{omtr.hier4+=sfl_pageType};omtr.prop28="D=h4";omtr.eVar28="D=h4";var siteSectionLength=omtr.pageName.split(':').length
var siteSection=omtr.pageName.split(':',siteSectionLength-1);if(siteSection[0])
{omtr.prop1=siteSection[0];}
else
{omtr.prop1=document.domain;}
if(siteSection[1])
{omtr.prop2=omtr.prop1+':'+siteSection[1];if(siteSection[2])
{omtr.prop3=omtr.prop2+':'+siteSection[2];if(siteSection[3])
{omtr.hier1=omtr.prop3+':'+siteSection[3];omtr.prop4="D=h1";omtr.eVar4="D=h1";}
else
{omtr.hier1="D=c3";}}
else
{omtr.prop3="D=c2";omtr.eVar3="D=c2";omtr.hier1="D=c2";}}
else
{omtr.prop2="D=c1";omtr.eVar2="D=c1";omtr.prop3="D=c1";omtr.eVar3="D=c1";omtr.hier1="D=c1";}
if(!omtr.prop4)
{omtr.prop4=omtr.hier1;omtr.eVar4=omtr.hier1;}
omtr.eVar18=omtr.prop18=sfl_logicalSite;omtr.prop19=sfl_logicalSite+'-'+fl_Date.getFullYear()+'m'+(fl_Date.getMonth()+1);omtr.eVar19="D=c19";omtr.prop20=sfl_subID;omtr.eVar20="D=c20";if(getMetaContents('generator')){if(getMetaContents('generator').indexOf('Movable Type')>=0){omtr.events=omtr.apl(omtr.events,"event8",",",0);omtr.prop34='FS Blog';var t=document.getElementsByTagName('link');for(var i in t){if(t[i].rel=='alternate'&&t[i].type=='application/rss+xml'){omtr.prop33=t[i].title.replace('RSS Feed','');}};a=omtr.split(omtr.pageName,':');omtr.prop35=omtr.split(a[a.length-1],'.')[0];if(omtr.prop35!=omtr.defaultPage){omtr.prop39=getMetaContents('FLBlogAuthor');}
if(document.title.search(/comment submitted/i)>-1||document.title.search(/comment pending/i)>-1){omtr.events=omtr.apl(omtr.events,"event18",",",0);}}}