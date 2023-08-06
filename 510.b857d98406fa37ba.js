"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[510],{6236:(k,p,o)=>{o.d(p,{J:()=>i}),o(8288);var w=o(4755),m=o(2223);let i=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=m.oAB({type:s}),s.\u0275inj=m.cJS({imports:[w.ez]}),s})()},3179:(k,p,o)=>{o.r(p),o.d(p,{AuthUnlockSessionModule:()=>N});var u=o(9223),g=o(7433),d=o(5741),h=o(430),v=o(6718),x=o(7961),C=o(6236),w=o(7775),m=o(4466),i=o(9401),s=o(8288),e=o(2223),l=o(8951),y=o(7495),Z=o(2494),U=o(4755);const A=["unlockSessionNgForm"];function S(t,r){if(1&t&&(e.TgZ(0,"fuse-alert",40),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),e.xp6(1),e.hij(" ",n.alert.message," ")}}function F(t,r){1&t&&e._UZ(0,"mat-icon",41),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function T(t,r){1&t&&e._UZ(0,"mat-icon",41),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function I(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," Unlock your session "),e.qZA())}function _(t,r){1&t&&e._UZ(0,"mat-progress-spinner",42),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const J=function(){return["/sign-out"]},j=[{path:"",component:(()=>{class t{constructor(n,a,c,b,f){this._activatedRoute=n,this._authService=a,this._formBuilder=c,this._router=b,this._userService=f,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this._userService.user$.subscribe(n=>{this.name=n.fullName}),this.unlockSessionForm=this._formBuilder.group({name:[{value:this.name,disabled:!0}],password:["",i.kI.required]})}unlock(){this.unlockSessionForm.invalid||(this.unlockSessionForm.disable(),this.showAlert=!1,this._authService.unlockSession({email:this._email??"",password:this.unlockSessionForm.get("password").value}).subscribe(()=>{const n=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(n)},n=>{this.unlockSessionForm.enable(),this.unlockSessionNgForm.resetForm({name:{value:this.name,disabled:!0}}),this.alert={type:"error",message:"Invalid password"},this.showAlert=!0}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.gz),e.Y36(l.e),e.Y36(i.QS),e.Y36(u.F0),e.Y36(y.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-unlock-session"]],viewQuery:function(n,a){if(1&n&&e.Gf(A,5),2&n){let c;e.iGM(c=e.CRH())&&(a.unlockSessionNgForm=c.first)}},decls:60,vars:13,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["unlockSessionNgForm","ngForm"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(n,a){if(1&n){const c=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Unlock your session"),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"Your session is locked due to inactivity"),e.qZA(),e.YNc(9,S,2,5,"fuse-alert",7),e.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),e._uU(14,"Full name"),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"mat-form-field",10)(17,"mat-label"),e._uU(18,"Password"),e.qZA(),e._UZ(19,"input",12,13),e.TgZ(21,"button",14),e.NdJ("click",function(){e.CHM(c);const f=e.MAs(20);return e.KtG(f.type="password"===f.type?"text":"password")}),e.YNc(22,F,1,1,"mat-icon",15),e.YNc(23,T,1,1,"mat-icon",15),e.qZA(),e.TgZ(24,"mat-error"),e._uU(25," Password is required "),e.qZA()(),e.TgZ(26,"button",16),e.NdJ("click",function(){return a.unlock()}),e.YNc(27,I,2,0,"span",17),e.YNc(28,_,1,2,"mat-progress-spinner",18),e.qZA(),e.TgZ(29,"div",19)(30,"span"),e._uU(31,"I'm not"),e.qZA(),e.TgZ(32,"a",20),e._uU(33),e.qZA()()()()(),e.TgZ(34,"div",21),e.O4$(),e.TgZ(35,"svg",22)(36,"g",23),e._UZ(37,"circle",24)(38,"circle",25),e.qZA()(),e.TgZ(39,"svg",26)(40,"defs")(41,"pattern",27),e._UZ(42,"rect",28),e.qZA()(),e._UZ(43,"rect",29),e.qZA(),e.kcU(),e.TgZ(44,"div",30)(45,"div",31)(46,"div"),e._uU(47,"Welcome to"),e.qZA(),e.TgZ(48,"div"),e._uU(49,"our community"),e.qZA()(),e.TgZ(50,"div",32),e._uU(51," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(52,"div",33)(53,"div",34),e._UZ(54,"img",35)(55,"img",36)(56,"img",37)(57,"img",38),e.qZA(),e.TgZ(58,"div",39),e._uU(59,"More than 17k people joined us, it's your turn"),e.qZA()()()()()}if(2&n){const c=e.MAs(20);e.xp6(9),e.Q6J("ngIf",a.showAlert),e.xp6(1),e.Q6J("formGroup",a.unlockSessionForm),e.xp6(5),e.Q6J("formControlName","name"),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===c.type),e.xp6(1),e.Q6J("ngIf","text"===c.type),e.xp6(3),e.Q6J("color","primary")("disabled",a.unlockSessionForm.disabled),e.xp6(1),e.Q6J("ngIf",!a.unlockSessionForm.disabled),e.xp6(1),e.Q6J("ngIf",a.unlockSessionForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(12,J)),e.xp6(1),e.Oqu(a.name)}},dependencies:[u.rH,g.eB,d.nI,d.v_,d.$V,d.nX,h.Hw,v.k0,x.sN,Z.W,U.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],encapsulation:2,data:{animation:s.L}}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(j),g.yu,d.wp,h.Ps,v.x4,x.UK,C.J,w.fC,m.m]}),t})()}}]);