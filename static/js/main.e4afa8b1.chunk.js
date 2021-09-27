(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={list:"Contacts_list__2JYpv",item:"Contacts_item__2zU8h",button:"Contacts_button__2DYr3"}},43:function(t,e,n){},55:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=(n(34),n(15)),i=n.n(o),u=n(31),l=n(19),s=n(26),b=n(6),d=n(7),j=n(27),m=n.n(j),h=n(28),p=n.n(h),f=n(20),O=n(32),C=n(3),x={handleSubmit:Object(b.b)("contact/Submit"),deleteContact:Object(b.b)("contact/Delete"),inputChange:Object(b.b)("contact/inputChange")},v=Object(b.c)([],(a={},Object(f.a)(a,x.handleSubmit,(function(t,e){var n=e.payload;return[].concat(Object(O.a)(t),[n])})),Object(f.a)(a,x.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return!t.id.includes(n)}))})),a)),g=Object(b.c)("",Object(f.a)({},x.inputChange,(function(t,e){return e.payload}))),_=Object(C.b)({contact:v,inputValue:g}),N={key:"root",storage:m.a,blacklist:["inputValue"]},k=Object(b.a)({reducer:Object(d.g)(N,_),middleware:function(t){return t({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}}).concat(p.a)},devTools:!1}),y={store:k,persistor:Object(d.h)(k)},S=(n(43),n(23)),w=(n(44),n(29)),A=(n(45),n(25)),V=n(18),z=n.n(V),D=n(8),J=n.n(D),F=n(1);function L(t){var e=t.submit,n=Object(c.useState)(""),a=Object(A.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),u=Object(A.a)(i,2),l=u[0],s=u[1],b=function(){o(""),s("")},d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":s(a);break;default:return}};return Object(F.jsxs)("form",{onSubmit:function(t){var n=z.a.generate();t.preventDefault(),b(),e({name:r,number:l,id:n})},className:J.a.form,children:[Object(F.jsxs)("label",{className:J.a.label,children:["Name",Object(F.jsx)("input",{type:"text",name:"name",className:J.a.input,value:r,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(F.jsxs)("label",{className:J.a.label,children:["Phone",Object(F.jsx)("input",{type:"tel",name:"number",className:J.a.input,value:l,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(F.jsx)("button",{type:"submit",className:J.a.button,children:"Submit"})]})}function T(t){var e=t.filterInput,n=t.filterValue;return Object(F.jsx)("label",{children:Object(F.jsx)("input",{type:"text",name:"filter",value:n,onChange:e})})}var I=n(12),M=n.n(I);function Z(t){var e=t.contact,n=t.deleteContact;return Object(F.jsxs)("li",{className:M.a.item,children:[Object(F.jsxs)("p",{children:[e.name,": ",e.number]}),Object(F.jsx)("button",{type:"button",className:M.a.button,id:e.id,onClick:function(){return n(e.id)},children:"Delete"})]})}function q(t){var e=t.contacts,n=t.deleteContact;return Object(F.jsx)("ul",{className:M.a.list,children:e.map((function(t){var e=z.a.generate();return Object(F.jsx)(Z,{contact:t,deleteContact:n},e)}))})}n(55);var B=Object(l.b)((function(t){return{contacts:t.contact,inputValue:t.inputValue}}),(function(t){return{handleSubmit:function(e){return t(x.handleSubmit(e))},deleteContact:function(e){return t(x.deleteContact(e))},inputChange:function(e){return t(x.inputChange(e.currentTarget.value))}}}))((function(t){var e=t.contacts,n=t.inputValue,a=t.handleSubmit,c=t.deleteContact,r=t.inputChange;return Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(L,{submit:function(t){e.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?(S.defaultModules.set(w,{}),Object(S.alert)({text:"".concat(t.name," is olready in contacts")})):a(t)}}),Object(F.jsx)("h2",{children:"Contacts"}),0===e.length?null:Object(F.jsx)(T,{filterInput:r,filterValue:n}),0===e.length?Object(F.jsx)("p",{children:"No Contacts"}):Object(F.jsx)(q,{contacts:function(){var t=n.toLowerCase();return 0===e.length?void 0:e.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),deleteContact:c})]})}));i.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(l.a,{store:y.store,children:Object(F.jsx)(s.a,{loading:null,persistor:y.persistor,children:Object(F.jsx)(u.a,{children:Object(F.jsx)(B,{})})})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"Form_form__KD5TJ",label:"Form_label__28DrN",input:"Form_input__2Hi5C",button:"Form_button__2RvxH"}}},[[57,1,2]]]);
//# sourceMappingURL=main.e4afa8b1.chunk.js.map