"use strict";(self.webpackChunkdropship_react=self.webpackChunkdropship_react||[]).push([[518],{5518:(e,s,r)=>{r.r(s),r.d(s,{default:()=>x});var a=r(2791),t=r(7689),i=r(1087),c=r(184);const n=function(e){let{subcategory:s}=e;return(0,c.jsx)("li",{children:(0,c.jsxs)(i.OL,{to:"/store/subcategory/".concat(s.id),children:[(0,c.jsx)("img",{src:s.image,alt:"category"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:s.name}),(0,c.jsx)("p",{children:s.description})]})]})})};var l=r(9357),o=r(3330),u=r(4893),d=r(7909),g=r(3239),h=r(4316),m=r(6322),j=r(4511);const x=function(){const{catId:e}=(0,t.UO)(),[s,r]=(0,a.useState)([]),[x,p]=(0,a.useState)([]),{data:f,error:y,isError:b,isPending:k,isSuccess:v,refetch:L}=(0,u.a)({queryKey:["categoryQuery",e],queryFn:()=>(0,d.O5)(e)});return(0,a.useEffect)((()=>{f&&r((0,j.L_)(f))}),[f]),(0,a.useEffect)((()=>{s&&p((0,j.nP)(s))}),[s]),(0,c.jsx)(c.Fragment,{children:k?(0,c.jsx)(h.BigLoadingDiv,{link:"/store/",title:"loading category...",message:"you can click here to retry if it's taking too long",refetch:L}):v&&f?(0,c.jsxs)("main",{className:"categoriesListMain",children:[(0,c.jsxs)("div",{className:"popularCategories",children:[(0,c.jsx)("h1",{children:f.name}),(0,c.jsx)("ul",{children:f.subcategories.slice(0,3).map((e=>(0,c.jsx)(n,{subcategory:e},e.id)))})]}),(0,c.jsxs)("div",{className:"smallCategoriesList",children:[(0,c.jsx)("h1",{children:"More Categories"}),(0,c.jsx)("ul",{children:f.subcategories.slice(3).map((e=>(0,c.jsx)(l.N9,{subcategory:e},e.id)))})]}),(0,c.jsx)(o.Z,{products:s.slice(0,10),origin:"popular"}),(0,c.jsxs)("div",{className:"manufacturers",children:[(0,c.jsx)("h1",{children:"Manufacturers"}),(0,c.jsx)("ul",{className:"manufacturer-logos",children:x.map((e=>(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{"data-manufacturer":e.name,to:"/store/manufacturer/".concat(e.id),children:(0,c.jsx)(g.Z,{alt:e.name,url:e.image,backupUrl:"/store/assets/imgs/404/category404.png",backupAlt:e.name||"Manufacturer"})})},e.id)))})]})]}):b?(0,c.jsx)(m.default,{link:"/store/",title:"dont have that one",message:null===y||void 0===y?void 0:y.message}):(0,c.jsx)(c.Fragment,{})})}}}]);
//# sourceMappingURL=518.ff31517b.chunk.js.map