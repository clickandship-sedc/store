"use strict";(self.webpackChunkdropship_react=self.webpackChunkdropship_react||[]).push([[278],{1278:(e,s,r)=>{r.r(s),r.d(s,{default:()=>t});r(2791);var l=r(4403),d=r(9434),i=r(4893),a=r(3405),n=r(8735),o=r(4316),c=r(184);const t=function(){var e,s,r,t,u;const h=(0,d.v9)((e=>e.role.authTokens)),v=(0,d.v9)((e=>e.role.userid)),{data:m,isSuccess:j}=(0,i.a)({queryKey:["userQuery",v],queryFn:()=>(0,a.PR)(v,h),enabled:!!(null!==h&&void 0!==h&&h.accessToken&&null!==h&&void 0!==h&&h.refreshToken&&(null===v||void 0===v?void 0:v.length)>0)}),{data:x,error:p,isError:N,isPending:O,isSuccess:g,refetch:f}=(0,i.a)({queryKey:["purchasedOrders"],queryFn:()=>(0,n.rT)(h)});return(0,c.jsxs)("main",{className:"courierMain",children:[(0,c.jsxs)("div",{className:"orderList all",children:[(0,c.jsx)("h1",{className:"title",children:"Available Orders"}),O||N?(0,c.jsx)(o.LoadingErrorDiv,{isError:N,classTitle:"pOrders",errorMessage:null===p||void 0===p?void 0:p.message,refetch:f,loadMessage:"Loading Available Orders..."}):g?(0,c.jsx)("ul",{className:"orderUl",children:(null===x||void 0===x?void 0:x.length)&&(null===x||void 0===x?void 0:x.map((e=>(0,c.jsx)(l.ZP,{order:e,userId:m.id},e.id))))}):(0,c.jsx)(c.Fragment,{})]}),j&&(null===m||void 0===m||null===(e=m.userOrders)||void 0===e?void 0:e.length)>0?(0,c.jsxs)(c.Fragment,{children:[null!==(s=m.userOrders)&&void 0!==s&&s.some((e=>"OnTheWay"===e.status))?(0,c.jsxs)("div",{className:"orderList pending",children:[(0,c.jsx)("h2",{className:"title",children:"Pending Orders"}),(0,c.jsx)("ul",{className:"orderUl",children:null===(r=m.userOrders)||void 0===r?void 0:r.filter((e=>"OnTheWay"===e.status)).map((e=>(0,c.jsx)(l.ZP,{order:e},e.id)))})]}):(0,c.jsx)("div",{className:"noDataDiv",children:(0,c.jsx)("h1",{className:"title",children:"No Pending Orders found"})}),null!==(t=m.userOrders)&&void 0!==t&&t.some((e=>"Delivered"===e.status))?(0,c.jsxs)("div",{className:"orderList completed",children:[(0,c.jsx)("h2",{className:"title",children:"Completed Orders"}),(0,c.jsx)("ul",{className:"orderUl",children:null===(u=m.userOrders)||void 0===u?void 0:u.filter((e=>"Delivered"===e.status)).map((e=>(0,c.jsx)(l.ZP,{order:e},e.id)))})]}):(0,c.jsx)("div",{className:"noDataDiv",children:(0,c.jsx)("h1",{className:"title",children:"No Competed Orders found"})})]}):(0,c.jsxs)("div",{className:"noDataDiv",children:[(0,c.jsx)("h1",{className:"title",children:"No orders found"}),(0,c.jsx)("p",{className:"subTitle",children:"Orders you've accepted or completed will show up here"})]})]})}}}]);
//# sourceMappingURL=278.4b8a99f6.chunk.js.map