"use strict";(self.webpackChunkdropship_react=self.webpackChunkdropship_react||[]).push([[143],{7143:(e,a,s)=>{s.r(a),s.d(a,{default:()=>x});var t=s(2791),r=s(9357),n=s(4893),i=s(7909),l=s(4316),c=s(3239),o=s(1087),u=s(4511),m=s(3621),g=s(184);const d=e=>{let{category:a,updateCategory:s}=e;const[r,n]=(0,t.useState)({name:"",image:null,icon:null}),i=e=>{let{name:a,value:s}=e;n({...r,[a]:s})};return(0,g.jsxs)("form",{className:"editCategory",onSubmit:e=>{e.preventDefault(),r.name===a.name||!r.name&&null===r.image&&null===r.icon||s(r)},children:[(0,g.jsxs)("div",{className:"images",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:"Category Image"}),(0,g.jsx)(u.tX,{image:r.image,setImage:i,imageName:"image"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:"Category Icon"}),(0,g.jsx)(u.tX,{image:r.icon,setImage:i,imageName:"icon"})]})]}),(0,g.jsxs)("div",{className:"info",children:[(0,g.jsx)("h3",{children:"Category Name"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("input",{type:"text",maxLength:"15",minLength:"3",pattern:"^[a-zA-Z\\\\s ]*$",name:"name",value:r.name,onChange:e=>i({name:e.target.name,value:e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)}),placeholder:""}),(0,g.jsx)("label",{htmlFor:"name",children:"Category Name"})]}),(0,g.jsx)("button",{disabled:r.name&&r.name===a.name||!r.name&&null===r.image&&null===r.icon,type:"submit",children:"SAVE"})]})]})},h=e=>{let{categories:a}=e;const s=(0,m.HL)(),[r,n]=(0,t.useState)({name:"",image:null,icon:null,manufacturers:[],subCategories:[]}),[i,l]=(0,t.useState)({name:"",image:null,description:""}),[o,d]=(0,t.useState)({name:"",image:null}),[h,x]=(0,t.useState)(!1),[j,v]=(0,t.useState)(!1),[p,b]=(0,t.useState)(!1),[y,C]=(0,t.useState)(!0),[f,w]=(0,t.useState)(!0),L=e=>{let{name:a,value:s}=e;n("subCategories"===a||"manufacturers"===a?{...r,[a]:[...r[a],s]}:{...r,[a]:s})},N=e=>{let{name:a,value:s}=e;l({...i,[a]:s})},k=e=>{let{name:a,value:s}=e;d({...o,[a]:s})};(0,t.useEffect)((()=>{const e=r.subCategories.some((e=>e.name===i.name)),a=null!==i.image&&i.name.length>=3&&i.description.length>=10;x(!e&&a)}),[i,r.subCategories]),(0,t.useEffect)((()=>{const e=r.manufacturers.some((e=>e.name===o.name)),a=null!==o.image&&o.name.length>=3;v(!e&&a)}),[o,r.manufacturers]),(0,t.useEffect)((()=>{const e=!a.some((e=>e.name===r.name)),s=null!==r.image&&null!==r.icon,t=r.manufacturers.length>=3&&5===r.manufacturers.length&&e&&s;b(t)}),[r,a]),(0,t.useEffect)((()=>{0===r.subCategories.length&&C(!0)}),[r.subCategories]),(0,t.useEffect)((()=>{0===r.manufacturers.length&&w(!0)}),[r.manufacturers]);return(0,g.jsxs)("form",{className:"createCategory",onSubmit:e=>{if(p){e.preventDefault();const a=e=>({name:e.name||"",image:"",icon:"",subcategories:e.subCategories.map((e=>({name:e.name||"",image:"image",description:e.description||"",categoryId:""}))),manufacturers:e.manufacturers.map((e=>({name:e.name||"",image:"image"})))}),t=a(r),n={name:r.name||"Kids and Toys",icon:"/imgs/categories/kids-and-toys-icon.jpg",image:"/imgs/categories/kids-and-toys.jpg",subcategories:[{image:"/imgs/subCategories/educational-kids-toys.jpg",description:r.subCategories[0].description||"",name:r.subCategories[0].name||"",categoryId:""},{image:"/imgs/subCategories/outdoor-kids-toys.jpg",description:r.subCategories[1].description||"",name:r.subCategories[1].name||"",categoryId:""},{image:"/imgs/subCategories/action-figures-kids-toys.jpg",description:r.subCategories[2].description||"",name:r.subCategories[2].name||"",categoryId:""}],manufacturers:t.manufacturers};console.log(n),s(n)}},children:[(0,g.jsxs)("div",{className:"crCatInfo",children:[(0,g.jsxs)("div",{className:"bigImg",children:[(0,g.jsx)("h3",{children:"Category Image"}),(0,g.jsx)(u.tX,{image:r.image,setImage:L,imageName:"image"})]}),(0,g.jsxs)("div",{className:"crInfoB",children:[(0,g.jsxs)("div",{className:"smallImage",children:[(0,g.jsx)("h3",{children:"Category Icon"}),(0,g.jsx)(u.tX,{image:r.icon,setImage:L,imageName:"icon"})]}),(0,g.jsxs)("div",{className:"info",children:[(0,g.jsx)("input",{type:"text",maxLength:"15",minLength:"3",pattern:"^[a-zA-Z\\\\s ]*$",name:"name",value:r.name,onChange:e=>L({name:e.target.name,value:e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)}),placeholder:"",required:!0}),(0,g.jsx)("label",{htmlFor:"name",children:"Category Name"})]}),(0,g.jsxs)("section",{className:"buttonSection",children:[(0,g.jsx)("button",{onClick:()=>{n({name:"",image:null,icon:null,manufacturers:[],subCategories:[]}),l({name:"",image:null,description:""}),d({name:"",image:null}),C(!1),w(!1)},type:"button",children:"RESET"}),(0,g.jsx)("button",{disabled:!p,type:"submit",children:"CREATE"})]})]})]}),(0,g.jsxs)("div",{className:"subList",children:[(0,g.jsxs)("div",{className:"crDiv createSUB",children:[(0,g.jsxs)("h3",{className:"subTitle",children:["Sub-Categories"," ",(0,g.jsx)("button",{type:"button",onClick:()=>{C(!y)},children:y?(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,g.jsx)("path",{fill:"currentColor",d:"M30 21.4L28.6 20L25 23.6L21.4 20L20 21.4l3.6 3.6l-3.6 3.6l1.4 1.4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6z"}),(0,g.jsx)("path",{fill:"currentColor",d:"M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"})]}):(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,g.jsx)("path",{fill:"currentColor",d:"M30 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"}),(0,g.jsx)("path",{fill:"currentColor",d:"M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"})]})})]}),y?(0,g.jsxs)("div",{className:"subCatsDiv",children:[(0,g.jsx)("textarea",{className:"review-textArea",name:"description",type:"text",value:i.description,onChange:e=>N({name:e.target.name,value:e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)}),placeholder:"Write a description for this sub-category"}),(0,g.jsx)(u.tX,{image:i.image,setImage:N,imageName:"image"}),(0,g.jsxs)("section",{className:"titleSubmit",children:[(0,g.jsxs)("div",{className:"inputDiv",children:[(0,g.jsx)("input",{type:"text",maxLength:"15",minLength:"3",pattern:"^[a-zA-Z\\\\s ]*$",name:"name",value:i.name,onChange:e=>N({name:e.target.name,value:e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)}),placeholder:"",required:!0}),(0,g.jsx)("label",{htmlFor:"name",children:"Category Name"})]}),(0,g.jsx)("button",{disabled:!h,onClick:()=>{L({name:"subCategories",value:i}),l({name:"",image:null,description:""}),C(!1)},type:"button",children:"ADD"})]})]}):(0,g.jsx)("ul",{children:r.subCategories.map((e=>{var a,s;return(0,g.jsxs)("li",{children:[(0,g.jsx)(c.Z,{url:URL.createObjectURL((0,u.v9)("data:image/png;base64,"+(null===(a=e.image)||void 0===a?void 0:a.base64),null===(s=e.image)||void 0===s?void 0:s.name)),alt:e.name,backupUrl:"/store/assets/imgs/404/category404.png",backupAlt:e.name||"SubCategory"}),(0,g.jsx)("p",{children:e.name}),(0,g.jsx)("button",{onClick:()=>(e=>{n({...r,subCategories:r.subCategories.filter((a=>a.name!==e))})})(e.name),type:"button",children:(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,g.jsx)("path",{fill:"currentColor",d:"M12 12h2v12h-2zm6 0h2v12h-2z"}),(0,g.jsx)("path",{fill:"currentColor",d:"M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"})]})})]},e.name)}))})]}),(0,g.jsxs)("div",{className:"crDiv createMAN",children:[(0,g.jsxs)("h3",{className:"subTitle",children:["Manufacturers",(0,g.jsx)("button",{type:"button",onClick:()=>{w(!f)},children:f?(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,g.jsx)("path",{fill:"currentColor",d:"M30 21.4L28.6 20L25 23.6L21.4 20L20 21.4l3.6 3.6l-3.6 3.6l1.4 1.4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6z"}),(0,g.jsx)("path",{fill:"currentColor",d:"M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"})]}):(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,g.jsx)("path",{fill:"currentColor",d:"M30 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"}),(0,g.jsx)("path",{fill:"currentColor",d:"M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"})]})})]}),f?(0,g.jsxs)("div",{className:"manDiv",children:[(0,g.jsx)(u.tX,{image:o.image,setImage:k,imageName:"image"}),(0,g.jsxs)("section",{className:"titleSubmit",children:[(0,g.jsxs)("div",{className:"inputDiv",children:[(0,g.jsx)("input",{type:"text",maxLength:"15",minLength:"3",pattern:"^[a-zA-Z\\\\s ]*$",name:"name",value:o.name,onChange:e=>k({name:e.target.name,value:e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)}),placeholder:"",required:!0}),(0,g.jsx)("label",{htmlFor:"name",children:"Category Name"})]}),(0,g.jsx)("button",{disabled:!j,onClick:()=>{L({name:"manufacturers",value:o}),d({name:"",image:null}),w(!1)},type:"button",children:"ADD"})]})]}):(0,g.jsx)("ul",{children:r.manufacturers.map((e=>(0,g.jsxs)("li",{children:[(0,g.jsx)(c.Z,{url:e.image,alt:e.name,backupUrl:"/store/assets/imgs/404/category404.png",backupAlt:e.name||"Manufacturer"}),(0,g.jsx)("p",{children:e.name}),(0,g.jsx)("button",{onClick:()=>(e=>{n({...r,manufacturers:r.manufacturers.filter((a=>a.name!==e))})})(e.name),type:"button",children:(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,g.jsx)("path",{fill:"currentColor",d:"M12 12h2v12h-2zm6 0h2v12h-2z"}),(0,g.jsx)("path",{fill:"currentColor",d:"M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"})]})})]},e.name)))})]})]})]})},x=function(){const[e,a]=(0,t.useState)(""),[s,x]=(0,t.useState)(""),[j,v]=(0,t.useState)(!1),[p,b]=(0,t.useState)(!1),[y,C]=(0,t.useState)(!1),[f,w]=(0,t.useState)([]),[L,N]=(0,t.useState)([]),k=(0,m.Ny)(),S=(0,m.P9)(),{data:A,error:z,isError:M,isPending:E,isSuccess:V,refetch:I}=(0,n.a)({queryKey:["categoriesQuery"],queryFn:i.CP}),{data:D,error:U,isError:Z,isPending:T,isSuccess:F,refetch:B}=(0,n.a)({queryKey:["categoryQuery",e],queryFn:()=>(0,i.O5)(e)});(0,t.useEffect)((()=>{D&&w((0,u.L_)(D))}),[D]),(0,t.useEffect)((()=>{f&&N((0,u.nP)(f))}),[f]),(0,t.useEffect)((()=>{let e;return p&&(e=setTimeout((()=>{b(!1)}),5e3)),()=>{clearTimeout(e)}}),[p]),(0,t.useEffect)((()=>{A&&a(A[0].id)}),[A]);const O=e=>{a(e)};return(0,g.jsxs)("div",{className:"swag categories",children:[(0,g.jsxs)("div",{className:"title",children:[(0,g.jsxs)("div",{className:"infos",children:[(0,g.jsx)("h1",{children:"Categories"}),(0,g.jsx)("p",{children:"Click on a category to view/edit info"})]}),(0,g.jsx)("button",{onClick:()=>{C(!y)},children:y?(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,g.jsx)("path",{fill:"currentColor",d:"M30 21.4L28.6 20L25 23.6L21.4 20L20 21.4l3.6 3.6l-3.6 3.6l1.4 1.4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6z"}),(0,g.jsx)("path",{fill:"currentColor",d:"M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"})]}):(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,g.jsx)("path",{fill:"currentColor",d:"M30 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"}),(0,g.jsx)("path",{fill:"currentColor",d:"M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"})]})})]}),E||M?(0,g.jsx)(l.LoadingErrorDiv,{isError:M,classTitle:"pOrders",errorMessage:null===z||void 0===z?void 0:z.message,refetch:I,loadMessage:"Loading Available Orders..."}):V?(0,g.jsx)(g.Fragment,{children:y?(0,g.jsx)(h,{categories:A}):(0,g.jsx)("ul",{className:"swagList",children:A.map((e=>(0,g.jsx)(r.G$,{category:e,selectCategory:O},e.id)))})}):(0,g.jsx)(g.Fragment,{}),(0,g.jsxs)("div",{className:"title",children:[(0,g.jsxs)("div",{className:"infos",children:[(0,g.jsx)("h1",{children:"Category Info"}),(0,g.jsx)("p",{children:"Click on or search a category by its ID"})]}),(0,g.jsxs)("div",{className:"buttons",children:[(0,g.jsx)("input",{onChange:e=>x(e.target.value),type:"text",placeholder:"Enter ID"}),(0,g.jsx)("button",{disabled:!s,onClick:()=>{a(s)},children:"find"})]})]}),A&&(0,g.jsx)(g.Fragment,{children:T||Z?(0,g.jsx)(l.LoadingErrorDiv,{isError:Z,classTitle:"pOrders",errorMessage:null===U||void 0===U?void 0:U.message,refetch:B,loadMessage:"Loading Available Orders..."}):F?(0,g.jsxs)("div",{className:"singleCat",children:[(0,g.jsxs)("div",{className:"catInfo",children:[(0,g.jsxs)("div",{className:"imageDiv",children:[(0,g.jsx)(c.Z,{url:D.image,alt:D.name,backupUrl:"/store/assets/imgs/404/category404.png",backupAlt:D.name||"Category"}),(0,g.jsxs)("div",{children:[(0,g.jsx)(c.Z,{url:D.icon,alt:D.name,backupUrl:"/store/assets/imgs/404/category404.png",backupAlt:D.name||"Category"}),(0,g.jsxs)("section",{children:[(0,g.jsx)("h2",{children:D.name}),(0,g.jsxs)("p",{children:["ID: ",D.id]})]}),(0,g.jsxs)("section",{className:"buttonSection",children:[(0,g.jsx)("button",{onClick:()=>{p&&b(!1),v(!j)},children:"EDIT"}),(0,g.jsx)("button",{className:"delete ".concat(p&&"active"),onClick:()=>{p?(b(!1),S(D.id)):b(!0)},children:"DELETE"})]})]})]}),(0,g.jsxs)("div",{className:"subList",children:[(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{className:"subTitle",children:(0,g.jsx)("h3",{children:"Manufacturers"})}),null===L||void 0===L?void 0:L.map((e=>(0,g.jsx)("li",{children:(0,g.jsxs)(o.OL,{children:[(0,g.jsx)(c.Z,{url:e.image,alt:e.name,backupUrl:"/store/assets/imgs/404/category404.png",backupAlt:e.name||"Manufacturer"}),(0,g.jsx)("p",{children:e.name})]})},e.id)))]}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{className:"subTitle",children:(0,g.jsx)("h3",{children:"Sub-Categories"})}),D.subcategories.map((e=>(0,g.jsx)("li",{children:(0,g.jsxs)(o.OL,{to:"store/sub/".concat(e.id),children:[(0,g.jsx)(c.Z,{url:e.image,alt:e.name,backupUrl:"/store/assets/imgs/404/category404.png",backupAlt:e.name||"Manufacturer"}),(0,g.jsx)("p",{children:e.name})]})},e.id)))]})]})]}),j&&(0,g.jsx)(d,{category:D,updateCategory:k})]}):(0,g.jsx)(g.Fragment,{})})]})}},9357:(e,a,s)=>{s.d(a,{FJ:()=>l,G$:()=>o,N9:()=>i,l4:()=>c});s(2791);var t=s(1087),r=s(3239),n=s(184);function i(e){var a;return(0,n.jsx)("li",{children:(0,n.jsxs)(t.OL,{to:"store/subcategory/".concat(e.subcategory.id),children:[(0,n.jsx)(r.Z,{url:e.subcategory.image,alt:e.subcategory.name,backupUrl:"store/assets/imgs/404/category404.png",backupAlt:e.subcategory.name||"Sub-Category"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:e.subcategory.name}),(0,n.jsxs)("p",{children:["(",null===(a=e.subcategory.products)||void 0===a?void 0:a.length," Products)"]})]})]})})}function l(e){return(0,n.jsx)("li",{children:(0,n.jsxs)(t.OL,{to:"store/category/".concat(e.category.id),children:[(0,n.jsx)(r.Z,{url:e.category.image,alt:e.category.name,backupUrl:"store/assets/imgs/404/category404.png",backupAlt:e.category.name||"Sub-Category"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:e.category.name}),(0,n.jsxs)("p",{children:["(",e.category.subcategories.length," Categories)"]})]})]})})}function c(e){return(0,n.jsx)("li",{children:(0,n.jsxs)("button",{onClick:e.handleClick,children:[(0,n.jsx)(r.Z,{url:e.subcategory.image,alt:e.subcategory.name,backupUrl:"store/assets/imgs/404/category404.png",backupAlt:e.subcategory.name||"Sub-Category"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:e.subcategory.name}),(0,n.jsxs)("p",{children:["(",e.subcategory.products.length," Products)"]})]})]})})}function o(e){var a,s;return(0,n.jsx)("li",{children:(0,n.jsxs)("button",{onClick:()=>e.selectCategory(e.category.id),children:[(0,n.jsx)(r.Z,{url:e.category.image,alt:e.category.name,backupUrl:"store/assets/imgs/404/category404.png",backupAlt:e.category.name||"Sub-Category"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:e.category.name}),(0,n.jsxs)("p",{children:["(",(null===e||void 0===e||null===(a=e.category)||void 0===a||null===(s=a.subcategories)||void 0===s?void 0:s.length)||0," Categories)"]})]})]})})}}}]);
//# sourceMappingURL=143.e47f68f6.chunk.js.map