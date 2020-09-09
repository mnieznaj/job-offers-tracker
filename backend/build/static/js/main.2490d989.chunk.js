(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,n){e.exports=n(31)},19:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),o=n.n(l),c=(n(19),n(1)),i=(n(26),n(27),n(10)),d=n(11),u=n(13),m=n(12),f=function(e){return{type:"ADD_OFFER",display:e}},s=function(e,t){return{type:"UPDATE_OFFER",display:e,id:t}},p=Object(c.b)((function(e){return{currentOfferId:e.currentOfferId}}),(function(e){return{setOfferId:function(t){return e(function(e){return{type:"CURRENT_OFFER_ID",id:e}}(t))},showUpdateOffer:function(t,n){return e(s(t,n))}}}))((function(e){var t=e.offer;return r.a.createElement("tr",{id:t._id},r.a.createElement("td",null,t.title),r.a.createElement("td",null,r.a.createElement("a",{href:t.link,rel:"noopener noreferrer",target:"_blank"},"Go to the offer")),r.a.createElement("td",null,t.company),r.a.createElement("td",null,t.country),r.a.createElement("td",null,t.city),r.a.createElement("td",null,t.field),r.a.createElement("td",null,t.paygrade),r.a.createElement("td",null,t.favorite?"true":"false"),r.a.createElement("td",null,t.applied?"true":"false"),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.stage1?"true":"false"),r.a.createElement("td",null,t.stage2?"true":"false"),r.a.createElement("td",null,t.gotTheJob?"true":"false"),r.a.createElement("td",{onClick:function(){var e=t._id;document.getElementById(e).remove(),fetch("/delete-offer/".concat(e),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t._id})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"x"),r.a.createElement("td",{onClick:function(){e.showUpdateOffer(!0,t._id),console.log("click id: "+t._id),e.setOfferId(t._id)}},"edit"))})),y=(n(28),function(e){return{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(e)}}),E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={offers:[]},a.fetchOffers=function(){var e=localStorage.getItem("token");fetch("/app/get-offer-list",{method:"GET",headers:y(e)}).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({offers:e})})).catch((function(e){return console.log(e)}))},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fetchOffers()}},{key:"render",value:function(){var e=this.state.offers.map((function(e){return r.a.createElement(p,{offer:e,key:e._id})}));return 0===e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.fetchOffers},"Pobierz oferty"),r.a.createElement("p",null,"No offers.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.fetchOffers},"Pobierz oferty"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Link"),r.a.createElement("th",null,"Company"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"City"),r.a.createElement("th",null,"Field"),r.a.createElement("th",null,"Paygrade"),r.a.createElement("th",null,"Favorite"),r.a.createElement("th",null,"Applied"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Stage 1"),r.a.createElement("th",null,"Stage 2"),r.a.createElement("th",null,"Got the job"))),r.a.createElement("tbody",null,e)))}}]),n}(a.Component),h=Object(c.b)((function(e){return{offersList:e.offersList}}),(function(e){return{setOffersList:function(t){return e(function(e){return{type:"SET_OFFERS_LIST",offers:e}}(t))}}}))(E),g=Object(c.b)((function(e){return{formType:e.formType,userId:e.userId,currentOfferId:e.currentOfferId,displayAddOffer:e.displayAddOffer,displayUpdateOffer:e.displayUpdateOffer,offersList:e.offersList}}),(function(e){return{displayAddOffer:function(t){return e(f(t))}}}))((function(e){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h2",null,"Dashboard"),r.a.createElement("button",{onClick:function(){return e.displayAddOffer(!0)}},"Add new offer"),r.a.createElement(h,null))})),b=(n(29),Object(c.b)((function(e){return{userId:e.userId}}),(function(e){return{displayAddOffer:function(t){return e(f(t))}}}))((function(e){return r.a.createElement("div",{className:"offer-form"},r.a.createElement("div",{className:"offer-form__background",onClick:function(){return e.displayAddOffer(!1)}}),r.a.createElement("form",{className:"offer-form__form",onSubmit:function(e){e.preventDefault();var t=function(){var e={};return e.title=document.getElementById("title").value,e.link=document.getElementById("link").value,e.company=document.getElementById("company").value,e.country=document.getElementById("country").value,e.city=document.getElementById("city").value,e.field=document.getElementById("field").value,e.paygrade=document.getElementById("paygrade").value,e.favorite=!!document.getElementById("favorite").checked,e.applied=!!document.getElementById("applied").checked,e.description=document.getElementById("description").value,e}();t.userId="5f4e08c7d2ef258e7d34b2de",console.log(t),fetch("/add-offer",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"cors"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}.bind(void 0)},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{type:"text",id:"title",name:"title",required:!0}),r.a.createElement("label",{htmlFor:"link"},"Link:"),r.a.createElement("input",{type:"text",id:"link",name:"link",required:!0}),r.a.createElement("label",{htmlFor:"company"},"Company:"),r.a.createElement("input",{type:"text",id:"company",name:"company"}),r.a.createElement("label",{htmlFor:"country"},"Country:"),r.a.createElement("input",{type:"text",id:"country",name:"country",required:!0}),r.a.createElement("label",{htmlFor:"city"},"City:"),r.a.createElement("input",{type:"text",id:"city",name:"city",required:!0}),r.a.createElement("label",{htmlFor:"field"},"Field:"),r.a.createElement("input",{type:"text",id:"field",name:"field"}),r.a.createElement("label",{htmlFor:"paygrade"},"Paygrade:"),r.a.createElement("input",{type:"text",id:"paygrade",name:"paygrade"}),r.a.createElement("label",{htmlFor:"favorite"},"Favorite:"),r.a.createElement("input",{type:"checkbox",id:"favorite",name:"favorite"}),r.a.createElement("label",{htmlFor:"applied"},"Applied:"),r.a.createElement("input",{type:"checkbox",id:"applied",name:"applied"}),r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("textarea",{id:"description",name:"description",rows:"10",cols:"30"}),r.a.createElement("button",{type:"submit"},"Add Offer")))}))),v=n(2),O=Object(c.b)((function(e){return{id:e.currentOfferId}}),(function(e){return{showUpdateOffer:function(t){return e(s(t))}}}))((function(e){var t=e.id;console.log("id from component input: "+t);return function(e){var t;console.log(e),fetch("/get-offer-list/".concat(e)).then((function(e){return e.json()})).then((function(e){console.log("data from get offer by id: "+e),t=Object(v.a)({},e)})).then((function(){document.getElementById("title").value=t.title,document.getElementById("link").value=t.link,document.getElementById("company").value=t.company,document.getElementById("country").value=t.country,document.getElementById("city").value=t.city,document.getElementById("field").value=t.field,document.getElementById("paygrade").value=t.paygrade,t.favorite?document.getElementById("favorite").checked=!0:document.getElementById("favorite").checked=!1,t.applied?document.getElementById("applied").checked=!0:document.getElementById("applied").checked=!1,document.getElementById("description").value=t.description})).catch((function(e){return console.log(e)}))}(t),r.a.createElement("div",{className:"offer-form"},r.a.createElement("div",{className:"offer-form__background",onClick:function(){return e.showUpdateOffer(!1)}}),r.a.createElement("form",{className:"offer-form__form",onSubmit:function(e){e.preventDefault();var n=function(){var e={};return e.title=document.getElementById("title").value,e.link=document.getElementById("link").value,e.company=document.getElementById("company").value,e.country=document.getElementById("country").value,e.city=document.getElementById("city").value,e.field=document.getElementById("field").value,e.paygrade=document.getElementById("paygrade").value,e.favorite=!!document.getElementById("favorite").checked,e.applied=!!document.getElementById("applied").checked,e.description=document.getElementById("description").value,e}();fetch("/edit-offer/".concat(t),{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(v.a)({},n))}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}.bind(void 0)},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{type:"text",id:"title",name:"title",required:!0}),r.a.createElement("label",{htmlFor:"link"},"Link:"),r.a.createElement("input",{type:"text",id:"link",name:"link",required:!0}),r.a.createElement("label",{htmlFor:"company"},"Company:"),r.a.createElement("input",{type:"text",id:"company",name:"company"}),r.a.createElement("label",{htmlFor:"country"},"Country:"),r.a.createElement("input",{type:"text",id:"country",name:"country",required:!0}),r.a.createElement("label",{htmlFor:"city"},"City:"),r.a.createElement("input",{type:"text",id:"city",name:"city",required:!0}),r.a.createElement("label",{htmlFor:"field"},"Field:"),r.a.createElement("input",{type:"text",id:"field",name:"field"}),r.a.createElement("label",{htmlFor:"paygrade"},"Paygrade:"),r.a.createElement("input",{type:"text",id:"paygrade",name:"paygrade"}),r.a.createElement("label",{htmlFor:"favorite"},"Favorite:"),r.a.createElement("input",{type:"checkbox",id:"favorite",name:"favorite"}),r.a.createElement("label",{htmlFor:"applied"},"Applied:"),r.a.createElement("input",{type:"checkbox",id:"applied",name:"applied"}),r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("textarea",{id:"description",name:"description",rows:"10",cols:"30"}),r.a.createElement("button",{type:"submit"},"Update Offer")))})),k=(n(30),Object(c.b)(null,(function(e){return{setToken:function(t){return e(function(e){return{type:"SET_USER_TOKEN",token:e}}(t))}}}))((function(e){return r.a.createElement("div",{className:"login"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{className:"login-form"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Enter Email"}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Enter Password"}),r.a.createElement("button",{type:"Submit",onClick:function(t){return function(t){t.preventDefault();var n={email:document.getElementById("email").value,password:document.getElementById("password").value};console.log(n),fetch("/users/login-user",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){return console.log(t.token),e.setToken(t.token),t})).then((function(e){return localStorage.getItem("token")&&void 0!==localStorage.getItem("token")||localStorage.setItem("token",e.token),e})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}(t)}},"Login")),r.a.createElement("p",null,"Don't have an acount? ",r.a.createElement("a",{href:"/#"},"Register Now!")))}))),I=Object(c.b)((function(e){return{displayAddOffer:e.displayAddOffer,displayUpdateOffer:e.displayUpdateOffer}}))((function(e){var t;return t=e.displayAddOffer?r.a.createElement(b,null):e.displayUpdateOffer?r.a.createElement(O,null):null,r.a.createElement("div",{className:"App"},t,r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(k,null)),r.a.createElement(g,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(4),j={offersList:[],displayAddOffer:!1,displayUpdateOffer:!1,userId:"5f4e08c7d2ef258e7d34b2de",userToken:localStorage.getItem("token")?localStorage.getItem("token"):null,currentOfferId:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_OFFERS_LIST":return Object(v.a)(Object(v.a)({},e),{},{offersList:t.offers});case"ADD_OFFER":return Object(v.a)(Object(v.a)({},e),{},{displayAddOffer:t.display});case"UPDATE_OFFER":return Object(v.a)(Object(v.a)({},e),{},{displayUpdateOffer:t.display,currentOfferId:t.id});case"CURRENT_OFFER_ID":return Object(v.a)(Object(v.a)({},e),{},{currentOfferId:t.id});case"SET_FORM_TYPE":return Object(v.a)(Object(v.a)({},e),{},{formType:t.formType});case"SET_USER_TOKEN":return Object(v.a)(Object(v.a)({},e),{},{userToken:t.token})}return e},T=Object(F.b)(B);T.subscribe((function(){console.log(T.getState())})),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:T},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.2490d989.chunk.js.map