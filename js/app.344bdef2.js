(function(t){function e(e){for(var r,a,c=e[0],i=e[1],l=e[2],h=0,v=[];h<c.length;h++)a=c[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],r=!0,c=1;c<s.length;c++){var i=s[c];0!==o[i]&&(r=!1)}r&&(n.splice(e--,1),t=a(a.s=s[0]))}return t}var r={},o={app:0},n=[];function a(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=r,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(s,r,function(e){return t[e]}.bind(null,r));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-main",[s("Calculator",{attrs:{msg:"TEST"}})],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",{attrs:{"fill-height":"","fill-width":"",fluid:""}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"ma-4",attrs:{dense:"",fab:"",dark:""}},"v-btn",o,!1),r),[s("v-icon",[t._v("mdi-restart")])],1)]}}]),model:{value:t.newGame,callback:function(e){t.newGame=e},expression:"newGame"}},[s("v-card",[s("v-card-title",{attrs:{"primary-title":""}},[t._v(" NEW GAME ")]),s("v-container",{staticClass:"grey lighten-5"},[s("v-row",{attrs:{"no-gutters":""}},[t._l(t.gameModes,(function(e){return[s("v-col",{key:e},[s("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""},on:{click:function(s){return t.startNewGame(e)}}},[t._v(" "+t._s(e)+" ")])],1)]}))],2)],1)],1)],1)],1),s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"white--text",attrs:{width:"37.5%",rounded:"",color:"#1C2833"}},"v-btn",o,!1),r),[t._v(" "+t._s(t.scores.scoreA.name)+" ")])]}}]),model:{value:t.menuA,callback:function(e){t.menuA=e},expression:"menuA"}},[s("v-card",[s("v-list",[s("v-list-item",[s("v-list-item-content",[s("v-text-field",{attrs:{label:"Name",outlined:"",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveNames()}},model:{value:t.scores.scoreA.name,callback:function(e){t.$set(t.scores.scoreA,"name",e)},expression:"scores.scoreA.name"}})],1)],1)],1)],1)],1),s("v-card",{staticClass:"number-display",attrs:{elevation:"5",tile:"",color:"#f7ffe6",width:"25%"}},[s("h1",{staticClass:"text-right"},[t._v(t._s(t.total))])]),s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"white--text",attrs:{width:"37.5%",rounded:"",color:"#1C2833"}},"v-btn",o,!1),r),[t._v(" "+t._s(t.scores.scoreB.name)+" ")])]}}]),model:{value:t.menuB,callback:function(e){t.menuB=e},expression:"menuB"}},[s("v-card",[s("v-list",[s("v-list-item",[s("v-list-item-content",[s("v-text-field",{attrs:{label:"Name",outlined:"",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveNames()}},model:{value:t.scores.scoreB.name,callback:function(e){t.$set(t.scores.scoreB,"name",e)},expression:"scores.scoreB.name"}})],1)],1)],1)],1)],1)],1),s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-card",{staticClass:"score-display",attrs:{height:"300px",color:t.scores.scoreA.color,width:"37.5%"}},[s("v-container",{attrs:{"fill-height":"","align-content-center":"","justify-center":""}},[s("h3",{staticClass:"text-center"},[t._v(t._s(t.scores.scoreA.score))])])],1),s("v-card",{attrs:{height:"300px",width:"25%"}},[s("div",{staticClass:"vuertual-numeric-keyboard bg-light rounded border p-3"},[t._l(t.keys,(function(e){return s("v-btn",{key:e,staticClass:"white--text",attrs:{primary:"",height:"100%",color:"#1C2833",elevation:"2",ripple:!1},domProps:{textContent:t._s(e)},on:{click:function(s){return t.thisTotal(e)}}})})),s("v-btn",{staticClass:"white--text",attrs:{primary:"",height:"100%",color:"#1C2833",elevation:"2"},on:{dblclick:function(e){return t.undo()}}},[s("v-icon",{attrs:{dark:""}},[t._v(" mdi-undo-variant ")])],1),s("v-btn",{staticClass:"white--text",attrs:{primary:"",height:"100%",color:"#1C2833",elevation:"2",ripple:!1},on:{click:function(e){return t.thisTotal(0)}}},[t._v("0 ")]),s("v-btn",{staticClass:"white--text",attrs:{primary:"",height:"100%",color:"#1C2833",elevation:"2"},on:{click:function(e){return t.backspace()}}},[s("v-icon",{attrs:{dark:""}},[t._v(" mdi-backspace ")])],1)],2),s("v-btn",{staticClass:"white--text mt-1",attrs:{width:"100%",height:"55px",color:"#001a33"},on:{click:function(e){return t.enter()}}},[t._v("ENTER")])],1),s("v-card",{staticClass:"score-display",attrs:{height:"300px",color:t.scores.scoreB.color,width:"37.5%"}},[s("v-container",{attrs:{"fill-height":"","align-content-center":"","justify-center":""}},[s("h3",{staticClass:"text-center"},[t._v(t._s(t.scores.scoreB.score))])])],1)],1)],1),s("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},model:{value:t.winnerDialog,callback:function(e){t.winnerDialog=e},expression:"winnerDialog"}},[s("v-card",[s("v-toolbar",{attrs:{color:"success",dark:""}},[t._v("WE HAVE A WINNER")]),s("v-card-text",{attrs:{"align-center":""}},[s("div",{staticClass:"text-h2 pa-12"},[t._v(t._s(t.winner)+" WINS!")])]),s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{attrs:{text:""},on:{click:function(e){t.winnerDialog=!1}}},[t._v("Close")])],1)],1)],1)],1)},c=[],i=(s("b0c0"),s("a9e3"),s("4fad"),s("ac1f"),s("5319"),{name:"Calculator",data:function(){return{keys:[1,2,3,4,5,6,7,8,9],gameModes:[301,501,701,1001],total:0,winner:"Nobody",menuA:!1,menuB:!1,newGame:!1,winnerDialog:!1,scores:{scoreA:{name:"Player A",score:501,color:"#EDF96E",active:!0},scoreB:{name:"Player B",score:501,color:"white",active:!1}},lastScores:{}}},props:{msg:String},methods:{thisTotal:function(t){10*this.total+t<=180&&(this.total=10*this.total+t)},backspace:function(){this.total=(this.total-this.total%10)/10},switchTurn:function(){this.scores.scoreA.active=!this.scores.scoreA.active,this.scores.scoreB.active=!this.scores.scoreB.active},saveNames:function(){this.menuA=!1,this.menuB=!1,localStorage.setItem("playerA",this.scores.scoreA.name),localStorage.setItem("playerB",this.scores.scoreB.name)},enter:function(){this.lastScores=JSON.parse(JSON.stringify(this.scores)),this.scores.scoreA.active?this.scores.scoreA.score-this.total<0?this.total=0:(this.scores.scoreA.score=this.scores.scoreA.score-this.total,this.total=0,this.switchTurn(),this.scores.scoreA.color="white",this.scores.scoreB.color="#EDF96E"):this.scores.scoreB.score-this.total<0?this.total=0:(this.scores.scoreB.score=this.scores.scoreB.score-this.total,this.total=0,this.switchTurn(),this.scores.scoreB.color="white",this.scores.scoreA.color="#EDF96E"),0==this.scores.scoreB.score&&(this.winner=this.scores.scoreB.name,this.winnerDialog=!0),0==this.scores.scoreA.score&&(this.winner=this.scores.scoreA.name,this.winnerDialog=!0)},undo:function(){if(0!==Object.entries(this.lastScores).length){var t=this.scores,e=this.lastScores;this.scores=e,this.lastScores=t,this.total=0}},startNewGame:function(t){this.scores.scoreA.score=t,this.scores.scoreB.score=t,this.total=0,this.newGame=!1}},created:function(){var t=this;console.log("test 999"),null!==localStorage.getItem("playerA")&&(this.scores.scoreA.name=localStorage.getItem("playerA")),null!==localStorage.getItem("playerB")&&(this.scores.scoreB.name=localStorage.getItem("playerB")),window.addEventListener("keyup",(function(e){if("Enter"==e.key)t.enter();else{var s=e.key.replace(/[^0-9]/g,"");s&&t.thisTotal(Number(s))}}))}}),l=i,u=(s("9041"),s("2877")),h=s("6544"),v=s.n(h),d=s("8336"),f=s("b0af"),p=s("99d9"),m=s("62ad"),g=s("a523"),y=s("169a"),b=s("132d"),w=s("8860"),k=s("da13"),_=s("5d23"),x=s("e449"),C=s("0fd9"),A=s("8654"),B=s("71d9"),S=Object(u["a"])(l,a,c,!1,null,null,null),E=S.exports;v()(S,{VBtn:d["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:m["a"],VContainer:g["a"],VDialog:y["a"],VIcon:b["a"],VList:w["a"],VListItem:k["a"],VListItemContent:_["a"],VMenu:x["a"],VRow:C["a"],VTextField:A["a"],VToolbar:B["a"]});var V={name:"App",components:{Calculator:E},data:function(){return{}}},j=V,O=s("7496"),T=s("f6c4"),N=Object(u["a"])(j,o,n,!1,null,null,null),D=N.exports;v()(N,{VApp:O["a"],VMain:T["a"]});var I=s("f309");r["a"].use(I["a"]);var P=new I["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:P,render:function(t){return t(D)}}).$mount("#app")},"8a9c":function(t,e,s){},9041:function(t,e,s){"use strict";s("8a9c")}});
//# sourceMappingURL=app.344bdef2.js.map