(self.webpackChunkstatus_app=self.webpackChunkstatus_app||[]).push([[552],{7552:(t,e,i)=>{"use strict";i.r(e),i.d(e,{LayoutModule:()=>Y});var o=i(1116),r=i(3337),s=i(5366),a=i(3425);let n=(()=>{class t{constructor(){this.logo=a.$.mainLogo}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-header"]],decls:4,vars:1,consts:[["role","navigation",1,"p-2","bg-slate-100"],[1,"flex","flex-row","mx-10"],["routerLink","/home"],["alt","grubhub logo",2,"width","8rem",3,"src"]],template:function(t,e){1&t&&(s.TgZ(0,"header",0),s.TgZ(1,"div",1),s.TgZ(2,"a",2),s._UZ(3,"img",3),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(3),s.Q6J("src",e.logo,s.LSH))},directives:[r.yS],styles:[""]}),t})(),u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-footer"]],decls:4,vars:0,consts:[[1,"bg-slate-500","p-2","mt-2","w-full"],[1,"flex","justify-center"],[1,"text-white"]],template:function(t,e){1&t&&(s.TgZ(0,"footer",0),s.TgZ(1,"div",1),s.TgZ(2,"span",2),s._uU(3,"Copyright@Devthecoder"),s.qZA(),s.qZA(),s.qZA())},styles:[""]}),t})(),c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-landing"]],decls:3,vars:0,template:function(t,e){1&t&&(s._UZ(0,"app-header"),s._UZ(1,"router-outlet"),s._UZ(2,"app-footer"))},directives:[n,r.lC,u],styles:[""]}),t})();var l=i(1041),g=i(518),p=i(3070),m=i(6174),h=i(7436),d=i(3841),f=i(7064);function Z(t,e){1&t&&(s.TgZ(0,"mat-error"),s._uU(1,"Ticket Link is required."),s.qZA())}function y(t,e){1&t&&(s.TgZ(0,"mat-error"),s._uU(1,"Ticket Title is required. "),s.qZA())}function A(t,e){if(1&t&&(s.ynx(0),s.TgZ(1,"mat-radio-button",20),s._uU(2),s.qZA(),s._uU(3,"\xa0\xa0 "),s.BQk()),2&t){const t=e.$implicit;s.xp6(1),s.Q6J("value",t.value),s.xp6(1),s.Oqu(t.viewValue)}}function b(t,e){if(1&t&&(s.ynx(0),s.TgZ(1,"mat-radio-button",20),s._uU(2),s.qZA(),s._uU(3,"\xa0\xa0 "),s.BQk()),2&t){const t=e.$implicit;s.xp6(1),s.Q6J("value",t.value),s.xp6(1),s.Oqu(t.viewValue)}}function T(t,e){if(1&t&&(s.TgZ(0,"mat-option",20),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.Q6J("value",t),s.xp6(1),s.hij(" ",t.viewValue," ")}}function x(t,e){if(1&t&&(s.ynx(0),s.TgZ(1,"mat-radio-button",20),s._uU(2),s.qZA(),s._uU(3,"\xa0 "),s.BQk()),2&t){const t=e.$implicit;s.xp6(1),s.Q6J("value",t.value),s.xp6(1),s.Oqu(t.viewValue)}}function v(t,e){if(1&t){const t=s.EpF();s.ynx(0),s.TgZ(1,"tr",24),s.TgZ(2,"td",25),s._uU(3),s.qZA(),s.TgZ(4,"td",26),s._uU(5),s.qZA(),s.TgZ(6,"td",26),s.TgZ(7,"button",27),s.NdJ("click",function(){return s.CHM(t),s.oxw(2).editItem()}),s._uU(8," Edit "),s.qZA(),s.qZA(),s.TgZ(9,"td",26),s.TgZ(10,"button",28),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw(2).DeleteItem(e)}),s._uU(11," Delete "),s.qZA(),s.qZA(),s.qZA(),s.BQk()}if(2&t){const t=e.$implicit,i=e.index;s.xp6(3),s.Oqu(i+1),s.xp6(2),s.hij(" ",t," ")}}function q(t,e){if(1&t&&(s.ynx(0),s.TgZ(1,"div",1),s.TgZ(2,"table",21),s.TgZ(3,"thead",22),s.TgZ(4,"tr"),s.TgZ(5,"th",23),s._uU(6," Sno "),s.qZA(),s.TgZ(7,"th",23),s._uU(8," Ticket Number "),s.qZA(),s.TgZ(9,"th",23),s._uU(10," Edit "),s.qZA(),s.TgZ(11,"th",23),s._uU(12," Delete "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(13,"tbody"),s.YNc(14,v,12,2,"ng-container",11),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&t){const t=s.oxw();s.xp6(14),s.Q6J("ngForOf",t.ticketNumberArray)}}let k=(()=>{class t{constructor(t,e,i){this.formBuilder=t,this.toastr=e,this.router=i,this.DataArray=[],this.ticketNumberArray=[],this.projects=a.$.projects,this.projectTypes=a.$.projectTypes,this.projectStatusArray=a.$.projectStatusArray,this.studios=a.$.studios,this.statusForm=this.formBuilder.group({ticket:["",l.kI.required],ticketTitle:["",l.kI.required],studio:["",l.kI.required],projectType:["",l.kI.required],project:["",l.kI.required],projectStatus:["",l.kI.required]}),this.itemOne="Paired up with team members on various issues.",this.itemTwo="Reviewed multiple PR's"}ngOnInit(){this.setDataArray()}onSubmit(){if(this.statusForm.invalid)return void this.toastr.error("Missing form fields");const t=this.statusForm.controls.ticket.value.split("/")[4];this.ticketNumberArray.includes(t)?this.toastr.error("We have the same ticket with ticket number "+t+" in the list."):(this.ticketNumber="*"+t+"*",this.ticketTitle=this.statusForm.controls.ticketTitle.value,this.studio=this.statusForm.controls.studio.value+"-",this.projectType="["+this.statusForm.controls.projectType.value+"-",this.project=this.statusForm.controls.project.value,this.projectStatus="*["+this.statusForm.controls.projectStatus.value+"]*",this.Data=this.ticketNumber+" "+this.studio+this.projectType+this.project.value+" "+this.ticketTitle+" "+this.projectStatus,this.DataArray.push(this.Data),this.setLocalStorage(),this.toastr.success("An item is added to the list"),this.setDataArray())}setLocalStorage(){localStorage.setItem("status",JSON.stringify(this.DataArray))}generateDailyStatus(){0!=this.DataArray.length?(this.DataArray.includes(this.itemTwo)&&this.DataArray.includes(this.itemTwo)||(this.DataArray.push(this.itemOne),this.DataArray.push(this.itemTwo),this.setLocalStorage()),this.router.navigate(["/home/dailyStatus"])):this.toastr.error("There are no items in the list to generate status")}setDataArray(){null!=JSON.parse(localStorage.getItem("status"))&&(this.DataArray=JSON.parse(localStorage.getItem("status"))),this.ticketNumberArray=[],this.DataArray.forEach(t=>{if(console.log("item is",t),t!=this.itemOne&&t!=this.itemTwo){const e=t.substr(1,8);console.log(e,"ticket number"),this.ticketNumberArray.push(e)}}),console.log(this.ticketNumberArray.length,"length is"),console.log(this.ticketNumberArray,"array")}DeleteItem(t){const e=this.DataArray;this.DataArray=[],this.ticketNumberArray=[],e.forEach(e=>{if(e!=this.itemOne&&e!=this.itemTwo){const i=e.substr(1,8);i!=t&&(this.DataArray.push(e),this.ticketNumberArray.push(i))}}),this.setLocalStorage(),this.toastr.success("Item with ticket number "+t+" is Deleted successfully.")}editItem(){this.toastr.warning("We are working on this functionality. Please check back later")}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(l.qu),s.Y36(g._W),s.Y36(r.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-status"]],decls:43,vars:9,consts:[[1,"grid","p-4",3,"ngClass"],[1,"flex","flex-col","pt-6"],[3,"formGroup","ngSubmit"],[1,"sm:flex"],["appearance","outline",1,"mb-2","sm:pr-4","w-full"],[1,"input-text"],["formControlName","ticket","matInput","","type","text",1,"input-text"],[4,"ngIf"],["formControlName","ticketTitle","matInput","","type","text",1,"input-text"],[1,"sm:flex","mb-2"],["formControlName","studio"],[4,"ngFor","ngForOf"],["formControlName","projectType"],[1,"sm:flex","mb-2","mt-2"],["formControlName","project"],[3,"value",4,"ngFor","ngForOf"],["formControlName","projectStatus"],[1,"text-center","mt-10"],["type","submit",1,"inline-block","px-6","py-2.5","bg-blue-600","text-white","font-medium","text-xs","leading-tight","uppercase","rounded","shadow-md","hover:bg-blue-700","hover:shadow-lg","focus:bg-blue-700","focus:shadow-lg","focus:outline-none","focus:ring-0","active:bg-blue-800","active:shadow-lg","transition","duration-150","ease-in-out"],["type","button",1,"inline-block","px-6","py-2.5","bg-green-600","text-white","font-medium","text-xs","leading-tight","uppercase","rounded","shadow-md","hover:bg-green-700","hover:shadow-lg","focus:bg-green-700","focus:shadow-lg","focus:outline-none","focus:ring-0","active:bg-green-800","active:shadow-lg","transition","duration-150","ease-in-out",3,"click"],[3,"value"],[1,"text-center"],[1,"border-b","bg-gray-800"],["scope","col",1,"text-sm","font-medium","text-white","px-2","py-5"],[1,"bg-white","border-b"],[1,"py-1","text-sm","font-medium","text-gray-900"],[1,"text-sm","text-gray-900","font-light","py-1"],["type","button",1,"inline-block","px-6","py-2.5","bg-blue-600","text-white","font-medium","text-xs","leading-tight","uppercase","rounded","shadow-md","hover:bg-blue-700","hover:shadow-lg","focus:bg-blue-700","focus:shadow-lg","focus:outline-none","focus:ring-0","active:bg-blue-800","active:shadow-lg","transition","duration-150","ease-in-out",3,"click"],["type","button",1,"inline-block","px-6","py-2.5","bg-red-600","text-white","font-medium","text-xs","leading-tight","uppercase","rounded","shadow-md","hover:bg-red-700","hover:shadow-lg","focus:bg-red-700","focus:shadow-lg","focus:outline-none","focus:ring-0","active:bg-red-800","active:shadow-lg","transition","duration-150","ease-in-out",3,"click"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"form",2),s.NdJ("ngSubmit",function(){return e.onSubmit()}),s.TgZ(3,"div",3),s.TgZ(4,"mat-form-field",4),s.TgZ(5,"mat-label",5),s._uU(6,"Ticket Link"),s.qZA(),s._UZ(7,"input",6),s.YNc(8,Z,2,0,"mat-error",7),s.qZA(),s.qZA(),s.TgZ(9,"div",3),s.TgZ(10,"mat-form-field",4),s.TgZ(11,"mat-label",5),s._uU(12,"Ticket Title"),s.qZA(),s._UZ(13,"input",8),s.YNc(14,y,2,0,"mat-error",7),s.qZA(),s.qZA(),s.TgZ(15,"div",9),s.TgZ(16,"mat-radio-group",10),s.TgZ(17,"mat-label",5),s._uU(18,"Studio :"),s.qZA(),s.YNc(19,A,4,2,"ng-container",11),s.qZA(),s.qZA(),s.TgZ(20,"div",9),s.TgZ(21,"mat-radio-group",12),s.TgZ(22,"mat-label",5),s._uU(23,"Project Type :"),s.qZA(),s.YNc(24,b,4,2,"ng-container",11),s.qZA(),s.qZA(),s.TgZ(25,"div",13),s.TgZ(26,"mat-form-field",4),s.TgZ(27,"mat-label",5),s._uU(28,"Project"),s.qZA(),s.TgZ(29,"mat-select",14),s.YNc(30,T,2,2,"mat-option",15),s.qZA(),s.qZA(),s.qZA(),s.TgZ(31,"div",9),s.TgZ(32,"mat-radio-group",16),s.TgZ(33,"mat-label",5),s._uU(34,"Status :"),s.qZA(),s.YNc(35,x,4,2,"ng-container",11),s.qZA(),s.qZA(),s.TgZ(36,"div",17),s.TgZ(37,"button",18),s._uU(38," Add to list "),s.qZA(),s._uU(39," \xa0 "),s.TgZ(40,"button",19),s.NdJ("click",function(){return e.generateDailyStatus()}),s._uU(41," Generate Status "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(42,q,15,1,"ng-container",7),s.qZA()),2&t&&(s.Q6J("ngClass",0==e.ticketNumberArray.length?"md:grid-cols-1 max-w-7xl mx-auto":"md:grid-cols-2"),s.xp6(2),s.Q6J("formGroup",e.statusForm),s.xp6(6),s.Q6J("ngIf",e.statusForm.controls.ticket.hasError("required")),s.xp6(6),s.Q6J("ngIf",e.statusForm.controls.ticketTitle.hasError("required")),s.xp6(5),s.Q6J("ngForOf",e.studios),s.xp6(5),s.Q6J("ngForOf",e.projectTypes),s.xp6(6),s.Q6J("ngForOf",e.projects),s.xp6(5),s.Q6J("ngForOf",e.projectStatusArray),s.xp6(7),s.Q6J("ngIf",0!=e.ticketNumberArray.length))},directives:[o.mk,l._Y,l.JL,l.sg,p.KE,p.hX,l.Fj,m.Nt,l.JJ,l.u,o.O5,h.VQ,o.sg,d.gD,p.TO,h.U0,f.ey],styles:[""]}),t})();var w=i(8844),_=i(7672),N=i(4670);const U=["status"];function I(t,e){1&t&&(s.ynx(0),s._UZ(1,"mat-spinner",7),s.BQk()),2&t&&(s.xp6(1),s.Q6J("diameter",20))}function S(t,e){1&t&&(s.ynx(0),s.TgZ(1,"mat-icon",10),s._uU(2,"check"),s.qZA(),s.BQk())}function j(t,e){1&t&&(s.TgZ(0,"mat-icon"),s._uU(1,"file_copy"),s.qZA())}function J(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",8),s.NdJ("click",function(){return s.CHM(t),s.oxw().copyToClipBoard()}),s.YNc(1,S,3,0,"ng-container",2),s.YNc(2,j,2,0,"ng-template",null,9,s.W1O),s.qZA()}if(2&t){const t=s.MAs(3),e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.showCheckIcon)("ngIfElse",t)}}function O(t,e){if(1&t&&(s.ynx(0),s._uU(1),s._UZ(2,"br"),s.BQk()),2&t){const t=e.$implicit,i=e.index;s.xp6(1),s.AsE(" ",i+1,". ",t," ")}}const Q=[{path:"home",component:c,children:[{path:"",component:k},{path:"dailyStatus",component:(()=>{class t{constructor(t,e){this.clipBoard=t,this.toastr=e,this.dataArray=[],this.showCheckIcon=!1,this.showLoader=!1}ngOnInit(){const t=localStorage.getItem("Date");null!=t&&(this.date="*"+t.substr(4,6)+","+t.substr(10)+"*"),this.dataArray=JSON.parse(localStorage.getItem("status"))}copyToClipBoard(){this.showLoader=!0,this.clipBoard.copy(this.dailyStatus),setTimeout(()=>{this.showCheckIcon=!0,this.showLoader=!1,this.toastr.success("Copied to Clipboard")},500)}ngAfterViewInit(){this.dailyStatus=this.template.nativeElement.innerText}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(w.Yv),s.Y36(g._W))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-data-view"]],viewQuery:function(t,e){if(1&t&&s.Gf(U,5),2&t){let t;s.iGM(t=s.CRH())&&(e.template=t.first)}},decls:11,vars:4,consts:[[1,"max-w-6xl","p-6","mt-6","mb-6","bg-gray-300","mx-auto","relative"],[1,"absolute","right-5"],[4,"ngIf","ngIfElse"],["showButton",""],["status",""],[1,"flex"],[4,"ngFor","ngForOf"],["mode","indeterminate",3,"diameter"],["type","button",3,"click"],["copyIcon",""],[1,"text-lime-600"]],template:function(t,e){if(1&t&&(s.TgZ(0,"section",0),s.TgZ(1,"div",1),s.YNc(2,I,2,1,"ng-container",2),s.YNc(3,J,4,2,"ng-template",null,3,s.W1O),s.qZA(),s.TgZ(5,"div",null,4),s._uU(7),s.TgZ(8,"div",5),s._uU(9,"=========================================================="),s.qZA(),s.YNc(10,O,3,2,"ng-container",6),s.qZA(),s.qZA()),2&t){const t=s.MAs(4);s.xp6(2),s.Q6J("ngIf",e.showLoader)("ngIfElse",t),s.xp6(5),s.hij(" ",e.date," "),s.xp6(3),s.Q6J("ngForOf",e.dataArray)}},directives:[o.O5,o.sg,_.$g,N.Hw],styles:[".mat-spinner[_ngcontent-%COMP%]     circle{stroke:green}"]}),t})()}]}];let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.Bz.forChild(Q)],r.Bz]}),t})();var F=i(5425),C=i(5639);let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,D,F.m,C.I]]}),t})()}}]);