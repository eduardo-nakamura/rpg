function _defineProperties(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function _createClass(i,e,t){return e&&_defineProperties(i.prototype,e),t&&_defineProperties(i,t),i}function _classCallCheck(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{WlZI:function(i,e,t){"use strict";t.r(e);var n=t("ofXK"),c=t("3Pt+"),s=t("+0xr"),b=t("wZkO"),o=t("tyNb"),l=t("fXoL");function a(i,e){if(1&i){var t=l.Ub();l.Tb(0,"div",27),l.Tb(1,"div",28),l.Tb(2,"div",29),l.Tb(3,"label",30),l.yc(4," Quantidade: "),l.Sb(),l.Tb(5,"input",31),l.bc("ngModelChange",(function(i){return l.rc(t),l.fc().addThis.quantity=i})),l.Sb(),l.Sb(),l.Tb(6,"div",29),l.Tb(7,"label",30),l.yc(8," Faces: "),l.Sb(),l.Tb(9,"input",31),l.bc("ngModelChange",(function(i){return l.rc(t),l.fc().addThis.side=i})),l.Sb(),l.Sb(),l.Tb(10,"div",29),l.Tb(11,"label",30),l.yc(12," Bonus: "),l.Sb(),l.Tb(13,"input",31),l.bc("ngModelChange",(function(i){return l.rc(t),l.fc().addThis.bonus=i})),l.Sb(),l.Sb(),l.Tb(14,"div",29),l.Tb(15,"button",32),l.bc("click",(function(i){l.rc(t);var e=l.fc();return e.addDice(e.addThis.side,e.addThis.quantity,e.addThis.bonus)})),l.yc(16," Adicionar Dado "),l.Ob(17,"i",33),l.Sb(),l.Sb(),l.Sb(),l.Sb()}if(2&i){var n=l.fc();l.Cb(5),l.kc("ngModel",n.addThis.quantity),l.Cb(4),l.kc("ngModel",n.addThis.side),l.Cb(4),l.kc("ngModel",n.addThis.bonus)}}function r(i,e){if(1&i){var t=l.Ub();l.Tb(0,"div",4),l.Tb(1,"div",34),l.Tb(2,"label",35),l.yc(3),l.Sb(),l.Sb(),l.Tb(4,"div",36),l.Tb(5,"label",37),l.yc(6,"Quantidade: "),l.Sb(),l.Tb(7,"input",38),l.bc("ngModelChange",(function(i){return l.rc(t),e.$implicit.quantity=i})),l.Sb(),l.Sb(),l.Tb(8,"div",36),l.Tb(9,"label",37),l.yc(10,"Faces: "),l.Sb(),l.Tb(11,"input",38),l.bc("ngModelChange",(function(i){return l.rc(t),e.$implicit.side=i})),l.Sb(),l.Sb(),l.Tb(12,"div",36),l.Tb(13,"label",37),l.yc(14,"Bonus: "),l.Sb(),l.Tb(15,"input",38),l.bc("ngModelChange",(function(i){return l.rc(t),e.$implicit.bonus=i})),l.Sb(),l.Sb(),l.Sb()}if(2&i){var n=e.$implicit,c=e.index;l.Cb(3),l.zc(c+1),l.Cb(4),l.kc("ngModel",n.quantity),l.Cb(4),l.kc("ngModel",n.side),l.Cb(4),l.kc("ngModel",n.bonus)}}function d(i,e){if(1&i&&(l.Tb(0,"div",39),l.yc(1),l.Sb()),2&i){var t=e.$implicit,n=e.index;l.lc("title","",t.results.join(" + ")," + ",t.bonus,""),l.Cb(1),l.Bc(" ",n+1,") ",t.quantity,"d",t.side,"",0!=t.bonus?" + "+t.bonus:"",": ",t.results.join(" + ")," + ",t.bonus," = ",t.sum," ")}}function u(i,e){if(1&i&&(l.Tb(0,"div",39),l.yc(1),l.Sb()),2&i){var t=e.$implicit,n=e.index;l.lc("title","",t.results," + ",t.bonus,""),l.Cb(1),l.Bc(" ",n+1,") ",t.quantity,"d",t.side,"",0!=t.bonus?" + "+t.bonus:"",": ",t.results," + ",t.bonus," = ",t.sum," ")}}var f,T,g=function i(){_classCallCheck(this,i)},v=function i(){_classCallCheck(this,i)},h=[{path:"",component:(f=function(){function i(){_classCallCheck(this,i),this.dicesToRoll=[],this.diceResult=[],this.diceHist=[],this.addThis=new g,this.customHide=!1}return _createClass(i,[{key:"ngOnInit",value:function(){}},{key:"rollDiceResults",value:function(){var i=this;this.dicesToRoll.length>0&&(this.diceResult=[],Object.keys(this.dicesToRoll).forEach((function(e){var t=new v;t.quantity=i.dicesToRoll[e].quantity,t.side=i.dicesToRoll[e].side,t.bonus=i.dicesToRoll[e].bonus;var n=new Array(parseInt(i.dicesToRoll[e].quantity)).fill(null);n=n.map((function(){return i.rollDice(i.dicesToRoll[e].side,1)})),t.results=n,console.log(t.results),t.sum=n.reduce((function(i,e){return i+e}),0)+t.bonus,i.diceResult.push(t),i.diceHist.unshift(t)})),this.dicesToRoll=[])}},{key:"resetForm",value:function(){}},{key:"resetHistory",value:function(){this.diceResult=[],this.diceHist=[]}},{key:"rollDice",value:function(i,e){return e=Math.ceil(e),i=Math.floor(i),Math.floor(Math.random()*(i-e+1))+e}},{key:"addDice",value:function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=new g;n.quantity=Number(e),n.side=Number(i),n.bonus=Number(t),n.quantity>0&&1!=isNaN(n.side)&&this.dicesToRoll.push(n);var c=this.removeDuplicates(this.dicesToRoll,"side");this.dicesToRoll=c,this.addThis=new g}},{key:"removeDuplicates",value:function(i,e){var t=new Set;return i.filter((function(i){return!t.has(i[e])&&t.add(i[e])}))}}]),i}(),f.\u0275fac=function(i){return new(i||f)},f.\u0275cmp=l.Hb({type:f,selectors:[["app-dice-roller"]],decls:57,vars:4,consts:[[1,"container"],[1,"row","bg-header","p-2","bg-warning"],[1,"row","p-2","mt-3"],[1,"col-12","col-sm","text-center"],[1,"row"],[1,"col-4","col-md",3,"click"],["src","assets/d4.svg","title","D4","alt","D4"],[1,"badge","badge-secondary"],["src","assets/d6.svg","title","D6","alt","D6"],["src","assets/d8.svg","title","D8","alt","D8"],["src","assets/d10.svg","title","D10","alt","D10"],["src","assets/d12.svg","title","D12","alt","D12"],["src","assets/d20.svg","title","D20","alt","D20"],["src","assets/d100.svg","title","D100","alt","D100"],["src","assets/dcustom.svg","title","Custom","alt","Custom"],["class"," col-12 col-sm-4 ",4,"ngIf"],[1,"w-100","text-light","p-2"],["class","row",4,"ngFor","ngForOf"],[1,"btn","col","col-sm-3","m-2","btn-danger",3,"click"],[1,"fas","fa-dice"],[1,"fas","fa-backspace"],[1,"bg-warning"],["tabGroup",""],["label","Resultado"],[1,"row","w-100","p-2"],["class","p-2 m-1 bg-danger ",3,"title",4,"ngFor","ngForOf"],["label","Hist\xf3rico"],[1,"col-12","col-sm-4"],[1,"row","bg-warning","pt-3","pb-3"],[1,"col-12","text-light"],[1,"col-4"],["type","number","min","0",1,"col-8",3,"ngModel","ngModelChange"],[1,"btn","w-100","btn-danger",3,"click"],[1,"fas","fa-plus"],[1,"col-1"],[1,"bg-warning","p-2","text-dark"],[1,"col"],["for","inputEmail4",1,"w-50"],["type","number","min","0",1,"w-50",3,"ngModel","ngModelChange"],[1,"p-2","m-1","bg-danger",3,"title"]],template:function(i,e){if(1&i){var t=l.Ub();l.Tb(0,"div",0),l.Tb(1,"div",1),l.Tb(2,"h2"),l.yc(3,"Dice Roller"),l.Sb(),l.Sb(),l.Tb(4,"div",2),l.Tb(5,"div",3),l.Tb(6,"div",4),l.Tb(7,"div",5),l.bc("click",(function(i){return e.addDice(4)})),l.Ob(8,"img",6),l.Tb(9,"span",7),l.yc(10,"D4"),l.Sb(),l.Sb(),l.Tb(11,"div",5),l.bc("click",(function(i){return e.addDice(6)})),l.Ob(12,"img",8),l.Tb(13,"span",7),l.yc(14,"D6"),l.Sb(),l.Sb(),l.Tb(15,"div",5),l.bc("click",(function(i){return e.addDice(8)})),l.Ob(16,"img",9),l.Tb(17,"span",7),l.yc(18,"D8"),l.Sb(),l.Sb(),l.Tb(19,"div",5),l.bc("click",(function(i){return e.addDice(10)})),l.Ob(20,"img",10),l.Tb(21,"span",7),l.yc(22,"D10"),l.Sb(),l.Sb(),l.Tb(23,"div",5),l.bc("click",(function(i){return e.addDice(12)})),l.Ob(24,"img",11),l.Tb(25,"span",7),l.yc(26,"D12"),l.Sb(),l.Sb(),l.Tb(27,"div",5),l.bc("click",(function(i){return e.addDice(20)})),l.Ob(28,"img",12),l.Tb(29,"span",7),l.yc(30,"D20"),l.Sb(),l.Sb(),l.Tb(31,"div",5),l.bc("click",(function(i){return e.addDice(100)})),l.Ob(32,"img",13),l.Tb(33,"span",7),l.yc(34,"D100"),l.Sb(),l.Sb(),l.Tb(35,"div",5),l.bc("click",(function(i){return e.customHide=!e.customHide})),l.Ob(36,"img",14),l.Tb(37,"span",7),l.yc(38,"Custom Dice"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.xc(39,a,18,3,"div",15),l.Sb(),l.Tb(40,"div",16),l.xc(41,r,16,4,"div",17),l.Sb(),l.Tb(42,"div",4),l.Tb(43,"button",18),l.bc("click",(function(i){l.rc(t);var n=l.pc(50);return e.rollDiceResults(),n.selectedIndex=0})),l.yc(44," Rolar Dados "),l.Ob(45,"i",19),l.Sb(),l.Tb(46,"button",18),l.bc("click",(function(i){return e.resetHistory()})),l.yc(47," Limpar Hist\xf3rico "),l.Ob(48,"i",20),l.Sb(),l.Sb(),l.Tb(49,"mat-tab-group",21,22),l.Tb(51,"mat-tab",23),l.Tb(52,"div",24),l.xc(53,d,2,9,"div",25),l.Sb(),l.Sb(),l.Tb(54,"mat-tab",26),l.Tb(55,"div",24),l.xc(56,u,2,9,"div",25),l.Sb(),l.Sb(),l.Sb(),l.Sb()}2&i&&(l.Cb(39),l.kc("ngIf",e.customHide),l.Cb(2),l.kc("ngForOf",e.dicesToRoll),l.Cb(12),l.kc("ngForOf",e.diceResult),l.Cb(3),l.kc("ngForOf",e.diceHist))},directives:[n.l,n.k,b.b,b.a,c.i,c.a,c.e,c.g],styles:[""]}),f)}],p=((T=function i(){_classCallCheck(this,i)}).\u0275mod=l.Lb({type:T}),T.\u0275inj=l.Kb({factory:function(i){return new(i||T)},imports:[[o.c.forChild(h)],o.c]}),T);t.d(e,"DiceRollerModule",(function(){return S}));var m,S=((m=function i(){_classCallCheck(this,i)}).\u0275mod=l.Lb({type:m}),m.\u0275inj=l.Kb({factory:function(i){return new(i||m)},imports:[[n.c,p,c.c,c.j,b.c,s.l]]}),m)}}]);