(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(7),l=t.n(s),r=(t(13),t(1)),o=t(2),c=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},e.name))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{style:{height:"220px",width:"240px",objectFit:"cover"},className:"profile-pic",src:"images/profilepic.jpg",alt:""})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("h2",null,"About Me"),i.a.createElement("p",null,e.aboutme),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"columns contact-details"},i.a.createElement("h2",null,"Contact Details"),i.a.createElement("p",{className:"address"},i.a.createElement("span",null,e.name),i.a.createElement("br",null),i.a.createElement("span",null,e.address),i.a.createElement("br",null),i.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"resume"},i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Education"))),i.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.UniversityName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),i.a.createElement("p",{style:{textAlign:"justify"}},e.Achievements)))}))),i.a.createElement("div",{className:"row work"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Work"))),i.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.CompanyName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),i.a.createElement("p",{style:{textAlign:"justify"}},e.Achievements)))}))),i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Volunteer"))),i.a.createElement("div",{className:"nine columns main-col"},e.volunteer&&e.volunteer.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.CompanyName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfPassing)),i.a.createElement("p",{style:{textAlign:"justify"}},e.Achievements)))}))),i.a.createElement("div",{className:"row skill"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Skills"))),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("p",null,e.skillsDescription),i.a.createElement("div",null,i.a.createElement("ul",null,e.skills&&e.skills.map(function(e){return i.a.createElement("li",null,i.a.createElement("span",{className:"".concat(e.skillname.toLowerCase())}),i.a.createElement("em",{style:{fontSize:"20px"}},e.skillname))})))),i.a.createElement("hr",null)))}}]),a}(n.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{id:"portfolio-wrapper"},i.a.createElement("h1",null,"Project"),e.portfolio&&e.portfolio.map(function(e){return i.a.createElement("div",{className:"columns col-lg-12 md-6 portfolio-item"},i.a.createElement("div",{className:"item-wrap"},i.a.createElement("row",null,i.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:""}))))}))))}}]),a}(n.Component),f=(n.Component,function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component)),E={imagebaseurl:" ",name:"HASTA PRAYUNA LOLYTA",role:"",linkedinId:" Hasta Prayuna Lolyta",skypeid:"skypeid",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://id.linkedin.com/in/hasta-prayuna-lolyta-0b06b61a1/",className:"fa fa-linkedin"},{name:"skype",url:"https://twitter.com/home",className:"fa fa-twitter"}],aboutme:"Currently staying in Torun, Poland to pursue my Master's study in Business Administration. During my study in Indonesia, I actively joined several projects and volunteers activities. I also have working experiences in relevant professional career in accounting and marketing.",address:"lolytadesk@gmail.com",website:"+33769268776",education:[{UniversityName:"Nicolaus Copernicus University",specialization:"Masters Degree in Business Administration",MonthOfPassing:"2021 - Current",YearOfPassing:" ",Achievements:"Actively join in Student Activity in Campus and outside as Volunteer & selected to join Double Degree Program in Anger University, French."},{UniversityName:"Universite d\u2019Angers",specialization:"International Management",MonthOfPassing:"2021 - Current",YearOfPassing:"",Achievements:"Joining Adobe Analysis Competition 2022 and Digital Marketing Copetition 2022."},{UniversityName:"Asia University",specialization:"Certificate in Accounting and Information System",MonthOfPassing:"Feb 2019",YearOfPassing:"(GPA 4.00/4.00)",Achievements:"Joined Mobility Student Program for 6 months & all courses in The Accounting and Informational System Department received A's."}],work:[{CompanyName:"Universitas Muhammadiyah Yogyakarta",specialization:"Internal Audit Assistant",MonthOfLeaving:"Feb",YearOfLeaving:"2021",Achievements:"Obtained audit evidence in order to provide rational conclusions, reported the audit findings or problems found to auditor during audit process, & Successfully ensured and evaluated internal control of 21 units in one week."},{CompanyName:"Universitas Muhammadiyah Yogyakarta",specialization:"Research Assistant",MonthOfLeaving:"Jan",YearOfLeaving:"2020",Achievements:"Assist researcher to analyzed and interpreted data that needed during research, collected and proceed data using Ms. Excel and SPSS during research, successfully collecting data from listed company in BEI from 2015-2018 less than two weeks needed for the research. "}],volunteer:[{CompanyName:"Kawakari.on",specialization:" Owner",MonthOfLeaving:"Aug 2020 ",YearOfPassing:" - Present",Achievements:"Developed social media strategies, create effective content and campaigns to promote the brand and build good relationships with influencers both on social media. Provide recommendations and suggestions for social media marketing strategies."},{CompanyName:"Perkumpulan Pelajar Indonesia (PPI Polandia)",specialization:"External Events Coordinator",MonthOfLeaving:"Nov 2021 ",YearOfPassing:" - Present",Achievements:"Responsible to arrange and coordinate events with external parties & established relationships with external parties and become a liaison regarding the delivery of information."},{CompanyName:"Verda Foundation",specialization:"Volunteer",MonthOfLeaving:"Oct 2021 ",YearOfPassing:" - Present",Achievements:"Shared concerns for children, sustainable living, and also share things like a willingness to step outside their comfort zone, an openness to spending time on a community, a proclivity for engaging in team-oriented activities, and a desire to contribute to the well-being of others."},{CompanyName:"Ministry Republic of Indonesia",specialization:"Project Intern",MonthOfLeaving:"Nov 2019 ",YearOfPassing:" - Dec 2019",Achievements:"Assisted in State Property Service and Auction Office, attended, assisted auction process & classify and organize 80% of archives in Law and Information section."},{CompanyName:"Hoshizora Foundation",specialization:"Visitor Volunteer",MonthOfLeaving:"Jan 2019",YearOfPassing:"",Achievements:"Hoshizora provides the National Children's Dream Scholarship to Indonesian children who excel and have high motivation but have financial constraints, joined as visitor volunteer to do short Interview with parents and get deep information about awardee for the scholarship & visit 20 elementary students and collected 100% of data that needed for scholarship provided by Hoshizora Foundation."},{CompanyName:"Svalid.id",specialization:"Freelancer as Social Media Planner",MonthOfLeaving:"Mar 2018",YearOfPassing:" - Aug 2018",Achievements:"Developed a content plan in social media, create content that has value and organize programs with influencers & successfully gained 500 customers less than 1 months through instagram by online order and offline."}],skillsDescription:"",skills:[{skillname:"Adobe Ilustrator"},{skillname:"Adobe Premier"},{skillname:"Gimp"},{skillname:"Canva"},{skillname:"Inkscape"},{skillname:"iMovie"}],portfolio:[{name:"Kawakari",description:" ",imgurl:"images/kawakari.png"},{name:"project2",description:"mobileapp",imgurl:"images/deejah.png"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},g=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{resumeData:E}),i.a.createElement(p,{resumeData:E}),i.a.createElement(h,{resumeData:E}),i.a.createElement(v,{resumeData:E}),i.a.createElement(f,{resumeData:E}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.a045c90d.chunk.js.map