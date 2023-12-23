"use strict";(self.webpackChunkdropship_react=self.webpackChunkdropship_react||[]).push([[268],{1408:(e,s,l)=>{l.d(s,{CO:()=>a,ZZ:()=>r,g4:()=>n,gV:()=>c});l(2791);var i=l(184);function a(e){return(0,i.jsx)("li",{children:(0,i.jsxs)("button",{className:"".concat(e.currentCategory.id===e.category.id?"active":""),onClick:()=>e.handleCatClick(e.category.id),children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:e.category.icon,alt:"category"}),(0,i.jsx)("h4",{children:e.category.name})]}),(0,i.jsx)("svg",{viewBox:"0 0 32 32",children:(0,i.jsx)("path",{fill:"currentColor",d:"m12 8l10 8l-10 8z"})})]})})}function r(e){return(0,i.jsx)("li",{children:(0,i.jsxs)("button",{className:"".concat(e.currentCategory.id===e.category.id?"active":""),onClick:()=>e.handleCatClick(e.category.id),children:[(0,i.jsx)("img",{src:e.category.icon,alt:"category"}),(0,i.jsx)("h4",{children:e.category.name})]})})}function n(e){return(0,i.jsx)("li",{children:(0,i.jsxs)("button",{onClick:()=>e.handleSubCatClick(e.subcategory.id),children:[(0,i.jsx)("img",{src:e.subcategory.image,alt:"Sub Category"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:e.subcategory.name}),(0,i.jsx)("p",{children:e.subcategory.description})]})]})})}function c(e){return(0,i.jsx)("button",{className:"viewAllSubCats",onClick:()=>e.handleViewAllClick(e.category.id),children:(0,i.jsx)("h4",{children:"Browse All"})})}},268:(e,s,l)=>{l.r(s),l.d(s,{default:()=>b});var i=l(2791),a=l(9434),r=l(7689),n=l(1087),c=l(5710),t=l(3239),o=l(184);const d=function(e){let{item:s,handleClick:l}=e;const i=(0,a.v9)((e=>e.mobile.isMobile));return(0,o.jsx)("li",{children:(0,o.jsxs)("button",{onClick:()=>l(s.id),children:[(0,o.jsxs)("div",{className:"resultTitle",children:[(0,o.jsx)(t.Z,{url:s.image,alt:s.name,backupUrl:"/store/assets/imgs/404/category404.png",backupAlt:"Product",thirdBackupUrl:"/store/assets/imgs/404/product404.png"}),(0,o.jsx)("h3",{children:s.name})]}),(0,o.jsxs)("p",{children:[!i&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{children:s.category.name}),"|"]}),(0,o.jsx)("span",{children:s.subcategory.name})]})]})})};const h=function(e){return(0,o.jsx)("li",{className:"resultsViewAll",children:(0,o.jsx)("button",{onClick:e.handleClick,children:(0,o.jsxs)("p",{children:["View All ",(0,o.jsxs)("span",{children:["(",e.amount," more)"]})]})})})};var u=l(8189),C=l(1408),x=l(8526),v=l(9025),j=l(9739),m=l(4893),g=l(7909),p=l(3621);const f=function(){var e;const s=(0,r.s0)(),l=(0,p.LW)(),[c,t]=(0,i.useState)(""),[f,L]=(0,i.useState)(!1),[b,y]=(0,i.useState)(!1),[k,M]=(0,i.useState)(null),N=(0,a.I0)(),w=(0,i.useRef)(),Z=(0,i.useRef)(),V=(0,i.useRef)(),H=(0,i.useRef)(),z=(0,a.v9)((e=>e.mobile.isMobile)),B=(0,a.v9)((e=>e.catDropDown.showDropDown)),S=(0,a.v9)((e=>e.search.shouldFocus)),{data:A,error:D,isError:O,isPending:F,isSuccess:I}=(0,m.a)({queryKey:["searchQuery",c],queryFn:()=>(0,j.o)(c),enabled:!!c}),{data:P}=(0,m.a)({queryKey:["allCategories"],queryFn:()=>(0,g.CP)()});(0,i.useEffect)((()=>{P&&null===k&&M(P[0])}),[P,k]),(0,i.useEffect)((()=>{z&&S&&H.current&&(H.current.focus(),N((0,v.Fb)(!1))),(I&&A&&!F||(null===c||void 0===c?void 0:c.length)<1)&&L(!1)}),[S,N,O,D,I,z,F,A,c]);const U=e=>{const s=e.target.value;clearTimeout(U.timeoutId),L(!0),U.timeoutId=setTimeout((()=>{t(s)}),500)},q=e=>{M(P.find((s=>s.id===e)))},T=e=>{N((0,x.PD)()),s("store/subcategory/".concat(e))},E=e=>{s("store/productDetails/".concat(e)),l(e),y(!1)};return(0,i.useEffect)((()=>{const e=e=>{Z.current&&!Z.current.contains(e.target)&&y(!1)};return document.body.addEventListener("click",e),()=>{document.body.removeEventListener("click",e)}}),[N]),(0,o.jsxs)("div",{className:"search-form",ref:Z,children:[(0,o.jsxs)("div",{className:"search-bar-container",children:[(0,o.jsx)("form",{onSubmit:e=>{e.preventDefault()},children:(0,o.jsxs)("div",{className:"inputPDiv",children:[(0,o.jsx)("input",{className:"search-bar",name:"search-bar",type:"search",placeholder:"Search for products",onChange:e=>U(e),ref:H,onFocus:()=>{y(!0)}}),f&&(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("filter",{id:"svgSpinnersGooeyBalls20",children:[(0,o.jsx)("feGaussianBlur",{in:"SourceGraphic",result:"y",stdDeviation:"1"}),(0,o.jsx)("feColorMatrix",{in:"y",result:"z",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"}),(0,o.jsx)("feBlend",{in:"SourceGraphic",in2:"z"})]})}),(0,o.jsxs)("g",{filter:"url(#svgSpinnersGooeyBalls20)",children:[(0,o.jsx)("circle",{cx:"5",cy:"12",r:"4",fill:"var(--secAccent)",children:(0,o.jsx)("animate",{attributeName:"cx",calcMode:"spline",dur:"2s",keySplines:".36,.62,.43,.99;.79,0,.58,.57",repeatCount:"indefinite",values:"5;8;5"})}),(0,o.jsx)("circle",{cx:"19",cy:"12",r:"4",fill:"var(--accent)",children:(0,o.jsx)("animate",{attributeName:"cx",calcMode:"spline",dur:"2s",keySplines:".36,.62,.43,.99;.79,0,.58,.57",repeatCount:"indefinite",values:"19;16;19"})}),(0,o.jsx)("animateTransform",{attributeName:"transform",dur:"0.75s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})]})]})]})}),(0,o.jsx)("button",{className:"searchButtons",id:"clearButton",onClick:()=>{t(""),H&&(H.current.value="")},disabled:(null===c||void 0===c?void 0:c.length)<1,children:(0,o.jsx)("svg",{viewBox:"0 0 32 32",children:(0,o.jsx)("path",{fill:"currentColor",d:"M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586L17.414 16z"})})}),(0,o.jsx)("button",{className:"searchButtons",id:"searchButton",onClick:()=>{(null===A||void 0===A?void 0:A.length)>0&&(null===c||void 0===c?void 0:c.length)>0&&(s("store/search/".concat(c)),y(!1))},disabled:!A&&(null===c||void 0===c?void 0:c.length)<=0,children:(0,o.jsx)("svg",{viewBox:"0 0 32 32",children:(0,o.jsx)("path",{fill:"currentColor",d:"m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"})})}),(0,o.jsx)("div",{className:"divider"}),(0,o.jsx)("button",{disabled:!P,className:"categoriesButton",onClick:()=>{N((0,x.PD)())},children:(0,o.jsx)("svg",{viewBox:"0 0 32 32",children:(0,o.jsx)("path",{fill:"currentColor",d:"M12 4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8H6V6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8h-6V6h6zm-14 6H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8H6v-6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8h-6v-6h6z"})})})]}),!z&&(0,o.jsxs)("div",{className:"frequent-searches",children:[(0,o.jsx)("h3",{children:"Frequent Searches"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(n.OL,{to:"/search/iphone",children:"iphone"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.OL,{to:"/search/denim",children:"denim"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.OL,{to:"/search/samsung",children:"samsung"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.OL,{to:"/search/apple",children:"apple"})})]})]}),(0,o.jsx)(u.Z,{in:B&&!z,timeout:200,classNames:"categories-dp",unmountOnExit:!0,nodeRef:V,children:(0,o.jsxs)("div",{className:"categories-dp",ref:V,children:[(0,o.jsx)("ul",{className:"catsList",children:null===P||void 0===P?void 0:P.map((e=>(0,o.jsx)(C.CO,{category:e,currentCategory:k,handleCatClick:q},e.id)))}),(0,o.jsx)("div",{className:"divider"}),(0,o.jsxs)("div",{className:"subCatsList",children:[(0,o.jsx)("ul",{children:null===k||void 0===k||null===(e=k.subcategories)||void 0===e?void 0:e.slice(0,5).map((e=>(0,o.jsx)(C.g4,{subcategory:e,handleSubCatClick:T},e.id)))}),(0,o.jsx)(C.gV,{category:k,handleViewAllClick:e=>{N((0,x.PD)()),s("store/category/".concat(e))}})]})]})}),(0,o.jsx)(u.Z,{in:b&&(null===A||void 0===A?void 0:A.length)>0&&I,timeout:100,classNames:"suggestions",unmountOnExit:!0,nodeRef:w,children:(0,o.jsx)("div",{className:"suggestions",ref:w,children:(0,o.jsxs)("ul",{className:"suggestions-items",children:[null===A||void 0===A?void 0:A.slice(0,6).map((e=>(0,o.jsx)(d,{item:e,handleClick:E},e.id))),(null===A||void 0===A?void 0:A.length)>6&&(0,o.jsx)(h,{amount:(null===A||void 0===A?void 0:A.length)-6,handleClick:()=>{s("store/search/".concat(c)),y(!1)}},"viewAll")]})})})]})};var L=l(331);function b(){const e=(0,a.I0)(),s=(0,a.v9)((e=>e.navSettings.isSettingsOn)),l=(0,r.TH)(),i=["store/"].includes(l.pathname);return(0,o.jsxs)("header",{className:i?"":"smallHeader",children:[(0,o.jsx)(n.rU,{className:"logo",to:"store/",onClick:()=>{s&&e((0,L.i)(!1))},children:(0,o.jsxs)("svg",{viewBox:"0 0 717 241",children:[(0,o.jsx)("path",{d:"M242.468 78C248.599 78.1248 254.654 79.4703 260.314 81.9662L256.967 95.5162C252.733 93.9522 247.979 92.0505 242.574 92.0505C228.489 92.0505 222.67 102.573 222.67 118.925C222.67 135.278 228.702 144.912 242.468 144.912C247.921 144.859 253.274 143.353 258.032 140.533L261 154.295C255.039 157.41 248.477 159.02 241.829 159C219.288 159 207 143.098 207 119.025C207 94.7279 219.075 78 242.468 78Z",fill:"var(--secColor)"}),(0,o.jsx)("path",{d:"M287.779 147.167C288.836 147.172 289.89 147.058 290.924 146.827L292 159.107C289.506 159.634 286.973 159.933 284.429 160C271.971 160 267 151.558 267 138.045V77.9059L281.937 77V137.819C281.937 143.959 283.449 147.167 287.779 147.167Z",fill:"var(--secColor)"}),(0,o.jsx)("path",{d:"M307.56 75C312.896 75 316 78.5042 316 83.7162C316 88.9282 312.896 92.4324 307.56 92.4324C302.223 92.4324 299 88.9282 299 83.7162C299 78.5042 302.08 75 307.56 75ZM300.182 158V100.137H314.926V158H300.182Z",fill:"var(--secColor)"}),(0,o.jsx)("path",{d:"M360.168 112.805C356.476 111.036 352.509 110.067 348.484 109.953C340.105 109.953 335.551 116.448 335.551 127.171C335.551 138.913 340.313 145.001 349.212 145.001C353.18 144.878 357.085 143.869 360.688 142.033L363 154.693C358.315 156.986 353.228 158.113 348.102 157.991C330.928 157.991 321 146.249 321 127.668C321 109.086 330.824 97.0004 347.282 97.0004C352.643 96.9741 357.953 98.1393 362.896 100.426L360.168 112.805Z",fill:"var(--secColor)"}),(0,o.jsx)("path",{d:"M393.352 134.922C391.165 136.617 388.872 138.312 386.371 139.983V156.975H372V75.7971L386.382 75V124.952C396.168 118.043 400.962 110.11 402.673 99.1281H416.939C416.625 108.87 412.052 117.588 403.709 126.078L421 157H405.338L393.352 134.922Z",fill:"var(--secColor)"}),(0,o.jsx)("path",{d:"M482.663 156.647L476.761 150.497C470.467 155.473 462.851 158.105 455.058 157.997C439.026 157.997 429 149.385 429 134.848C429 124.848 435.41 118.061 443.473 114.036C439.13 107.786 437.79 103.061 437.79 97.2492C437.79 85.2747 445.956 77 458.673 77C471.39 77 479.244 84.4997 479.244 95.2368C479.244 105.974 473.249 112.461 463.328 117.273L476.333 131.135C478.492 126.352 479.89 121.21 480.468 115.923H493.694C492.91 124.891 490.028 133.494 485.32 140.922L500 156.697L482.663 156.647ZM467.971 141.21L454.11 126.661C452.875 125.323 451.627 124.086 450.645 122.911C445.887 125.598 443.715 129.06 443.715 134.098C443.715 140.81 448.878 144.722 455.6 144.722C459.948 144.841 464.237 143.623 467.971 141.21ZM451.431 97.5742C451.431 101.487 452.782 104.736 456.19 109.099C461.664 106.524 466.111 103.161 466.111 97.0117C466.111 92.6494 463.64 89.6245 458.569 89.6245C454.388 89.6245 451.431 92.3119 451.431 97.5742Z",fill:"var(--secColor)"}),(0,o.jsx)("path",{d:"M530.827 146.098C538.864 146.098 542.928 142.963 542.928 137.143C542.928 130.099 538.13 128.088 528.742 124.853C516.862 120.494 509.151 114.561 509.151 101.483C509.151 87.2821 518.213 79.0011 534.275 79.0011C541.011 78.9548 547.691 80.3254 553.935 83.0355L551.012 96.3375C546.016 94.1183 540.671 92.9439 535.265 92.8777C527.973 92.8777 524.328 95.5506 524.328 101.034C524.328 107.067 527.973 108.978 536.103 112.1C548.507 116.684 558 121.718 558 137.081C558 152.069 547.156 160 531.514 160C522.546 160 514.206 157.989 509 155.416L511.702 141.889C517.794 144.499 524.27 145.924 530.827 146.098Z",fill:"var(--secColor)"}),(0,o.jsx)("path",{d:"M565 78.7955L579.534 78V103.09C582.938 101.451 586.648 100.677 590.376 100.83C603.946 100.83 613 108.974 613 124V159.949H598.419V125.25C598.419 117.447 594.738 113.886 588 113.886C585.048 113.937 582.141 114.669 579.475 116.033V160H565V78.7955Z",fill:"var(--secColor)"}),(0,o.jsx)("path",{d:"M630.554 77C635.906 77 639 80.5042 639 85.7162C639 90.9282 635.906 94.4324 630.554 94.4324C625.202 94.4324 622 90.9282 622 85.7162C622 80.5042 625.094 77 630.554 77ZM623.171 160V102.137H637.889V160H623.171Z",fill:"var(--secColor)"}),(0,o.jsx)("path",{d:"M667.111 97C684.563 97 695 108.471 695 126.672C695 145.383 685.097 157.823 668.502 157.823C665.462 157.924 662.431 157.418 659.563 156.332V178H645V101.907C651.993 98.7122 659.51 97.044 667.111 97ZM659.563 111.492V143.446C661.69 144.526 664.02 145.071 666.374 145.039C675.73 145.039 680.093 138.883 680.093 127.131C680.093 116.858 676.051 110.014 666.374 110.014C664.039 110.024 661.729 110.527 659.574 111.492H659.563Z",fill:"var(--secColor)"}),(0,o.jsx)("path",{d:"M90.6371 123.892C92.5416 125.289 94.5206 126.686 96.4251 128.093C101.929 131.831 107.208 135.881 112.236 140.224C106.022 147.575 100.532 153.877 91.4989 155.127C85.796 155.935 76.7841 153.436 75.3052 143.259C74.2412 135.886 80.3165 130.32 90.6371 123.892ZM177 120.5C177 135.629 172.456 150.418 163.941 162.998C155.427 175.577 143.325 185.383 129.165 191.174C115.006 196.965 99.4249 198.482 84.3923 195.532C69.3596 192.583 55.5504 185.3 44.7105 174.605C33.8707 163.909 26.487 150.281 23.4931 135.444C20.4991 120.606 22.0293 105.226 27.8902 91.2465C33.7511 77.2674 43.6795 65.3176 56.4201 56.9079C69.1607 48.4982 84.1414 44.0062 99.4681 44C109.648 43.9959 119.729 45.9715 129.136 49.8142C138.542 53.6568 147.09 59.2911 154.29 66.3952C161.489 73.4993 167.201 81.934 171.098 91.2174C174.994 100.501 177 110.451 177 120.5ZM111.448 91.0301L110.619 103.013L146.081 86.3355L112.534 64.9734L112.395 78.8577C110.065 79.0783 106.767 78.217 104.362 77.5344C99.7583 76.0295 94.8629 75.6017 90.0626 76.2846C78.178 77.965 67.07 85.9784 68.783 98.0667C69.581 103.591 72.6878 108.737 78.7738 114.577C66.3253 122.422 55.5472 131.822 57.6858 146.515C60.5585 166.333 79.8165 173.033 91.9352 171.321C106.267 169.294 114.194 160.178 121.726 151.199C123.817 154.425 125.209 158.044 125.812 161.827L126.036 163.308L142.995 160.903L142.772 159.433C141.708 152.343 138.569 145.779 133.079 139.404C131.548 137.599 129.925 135.871 128.217 134.227C126.342 132.413 124.371 130.698 122.312 129.091C117.46 125.174 112.3 121.624 107.288 118.179C95.9676 110.386 86.1897 103.654 85.1151 96.2708C84.466 91.7967 88.158 89.2026 91.8607 88.6775C95.5633 88.1524 98.8936 88.9506 102.5 89.7278C105.426 90.4824 108.427 90.9191 111.448 91.0301Z",fill:"url(#headerLogoGradient)"}),(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"headerLogoGradient",x1:"60.7394",y1:"54.2399",x2:"136.75",y2:"187.615",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{offset:"0.27"}),(0,o.jsx)("stop",{offset:"1"})]})})]})}),(0,o.jsx)(c.Z,{}),(0,o.jsx)(f,{}),i&&(0,o.jsx)("svg",{className:"headerBackground",viewBox:"0 0 1440 900",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsxs)("g",{mask:"url(#mask0_214_2)",children:[(0,o.jsx)("path",{d:"M-40.8584 530.77C121.91 551.853 313.207 740.031 434.29 672.324C555.715 604.426 419.7 408.076 419.853 273.147C419.957 180.946 460.886 99.722 435.043 5.19926C408.015 -93.6541 353.264 -190.849 270.213 -274.16C182.648 -361.998 72.9904 -431.23 -46.6411 -477.984C-176.718 -528.82 -324.992 -586.432 -440.603 -551.956C-555.46 -517.704 -557.426 -383.252 -629.397 -304.2C-702.808 -223.566 -871.743 -196.513 -866.96 -83.6517C-862.159 29.6506 -680.148 107.802 -607.333 216.426C-532.007 328.795 -564.488 488.188 -435.737 559.633C-307.217 630.951 -181.337 512.573 -40.8584 530.77Z",fill:"var(--accent)",opacity:.75}),(0,o.jsx)("path",{d:"M1572.89 896.562C1469.37 888.37 1362.06 895.448 1270.76 857.325C1173.61 816.762 1086.53 755.079 1052.29 679.19C1018.72 604.807 1044.69 524.143 1089.43 455.475C1128.75 395.116 1216.61 364.513 1285.98 320.505C1350.85 279.35 1397.9 219.12 1483.7 205.351C1570.15 191.477 1655.2 231.224 1742.92 247.177C1845.81 265.889 1967.18 253.371 2043.77 307.207C2121.57 361.899 2126.85 447.809 2136.57 523.882C2146.26 599.737 2144.24 676.652 2099.58 744.009C2053.77 813.108 1982.82 877 1883.35 905.81C1787.16 933.673 1678.3 904.906 1572.89 896.562Z",fill:"var(--secAccent)",opacity:.7})]})})]})}},5710:(e,s,l)=>{l.d(s,{Z:()=>f});var i=l(2791),a=l(7689),r=l(1087),n=l(9434),c=l(4436),t=l(8526),o=l(2341),d=l(331),h=l(9025),u=l(1408),C=l(8189),x=l(3621),v=l(3405),j=l(4893),m=l(3239),g=l(7909),p=l(184);function f(){var e;const s=(0,a.s0)(),l=(0,n.I0)(),f=(0,x.aU)(),L=(0,n.v9)((e=>e.role.authTokens)),b=(0,n.v9)((e=>e.role.userid)),{data:y}=(0,j.a)({queryKey:["userQuery",b],queryFn:()=>(0,v.PR)(b,L),enabled:!!(null!==L&&void 0!==L&&L.accessToken&&null!==L&&void 0!==L&&L.refreshToken&&(null===b||void 0===b?void 0:b.length)>0)}),{data:k}=(0,j.a)({queryKey:["allCategories"],queryFn:()=>(0,g.CP)()}),[M,N]=(0,i.useState)(null);(0,i.useEffect)((()=>{k&&null===M&&N(k[0])}),[k,M]);const w=(0,n.v9)((e=>e.user.isLoggedIn)),Z=(0,n.v9)((e=>e.acDropDown.showAccDropDown)),V=(0,n.v9)((e=>e.theme.themeMode)),H=(0,n.v9)((e=>e.mobile.isMobile)),z=(0,n.v9)((e=>e.navSettings.isSettingsOn)),B=(0,n.v9)((e=>e.catDropDown.showDropDown)),S=(0,n.v9)((e=>e.role.role)),A=(0,i.useRef)(),D=(0,i.useRef)(),O=window.location.pathname,F=()=>{setTimeout((()=>{l((0,d.i)(!1))}),100)},I=()=>{H&&B&&l((0,t.PD)()),l((0,d.i)(!z))},P=()=>{H&&z&&l((0,d.i)(!1)),l((0,t.PD)())},U=e=>{N(k.find((s=>s.id===e)))},q=e=>{l((0,t.yV)()),setTimeout((()=>{s("store/subcategory/".concat(e))}),500)};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("nav",{className:"mainNav ".concat(H?"mobileNav":"normalNav"," ").concat("User"!==S&&w&&!H&&"dashboardNav"),children:["User"===S?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("ul",{className:w?"navigationLinks loggedIn":"navigationLinks",children:[H&&(0,p.jsx)("li",{children:(0,p.jsx)(r.OL,{className:"mobileLogo",to:"store/",exact:"true",disabled:"store/"===O,onClick:F,children:(0,p.jsxs)("svg",{viewBox:"0 0 220 220",children:[(0,p.jsx)("g",{clipPath:"url(#clip0_201_15)",children:(0,p.jsx)("path",{d:"M97.4204 114.878C100.124 116.886 102.932 118.895 105.636 120.918C113.448 126.292 120.941 132.116 128.077 138.361C119.257 148.932 111.465 157.993 98.6436 159.79C90.5492 160.953 77.7581 157.359 75.659 142.725C74.1489 132.124 82.7719 124.12 97.4204 114.878ZM220 110C220 131.754 213.55 153.02 201.465 171.108C189.38 189.196 172.203 203.295 152.106 211.622C132.008 219.949 109.893 222.13 88.5568 217.89C67.2201 213.649 47.6199 203.177 32.2343 187.798C16.8487 172.418 6.36869 152.823 2.1192 131.488C-2.13029 110.153 0.0416052 88.0369 8.3603 67.9362C16.679 47.8355 30.7709 30.6528 48.8544 18.5604C66.9378 6.46797 88.2007 0.00896897 109.955 9.33052e-06C124.404 -0.00594175 138.713 2.8349 152.064 8.36025C165.415 13.8856 177.547 21.9872 187.766 32.2022C197.985 42.4173 206.092 54.5456 211.622 67.8944C217.153 81.2431 220 95.5508 220 110ZM126.959 67.6249L125.781 84.8558L176.115 60.8745L128.499 30.1579L128.303 50.1222C124.996 50.4393 120.314 49.201 116.901 48.2194C110.367 46.0555 103.418 45.4403 96.6049 46.4223C79.7364 48.8385 63.9704 60.3611 66.4017 77.743C67.5344 85.6864 71.944 93.0862 80.5821 101.483C62.9133 112.764 47.6154 126.279 50.6508 147.407C54.7282 175.903 82.0621 185.538 99.2628 183.077C119.605 180.162 130.855 167.054 141.547 154.142C144.515 158.781 146.49 163.985 147.346 169.425L147.663 171.554L171.735 168.096L171.418 165.982C169.908 155.788 165.453 146.349 157.661 137.183C155.487 134.587 153.184 132.102 150.759 129.738C148.098 127.129 145.301 124.664 142.378 122.353C135.492 116.72 128.167 111.616 121.054 106.663C104.986 95.4572 91.1079 85.777 89.5827 75.1606C88.6615 68.7273 93.9017 64.9972 99.1571 64.2422C104.412 63.4871 109.139 64.6348 114.259 65.7523C118.411 66.8374 122.67 67.4654 126.959 67.6249Z",fill:"url(#headerLogoMobile)",strokeWidth:".3rem"})}),(0,p.jsxs)("defs",{children:[(0,p.jsxs)("linearGradient",{id:"headerLogoMobile",x1:"54.9849",y1:"14.7241",x2:"165",y2:"205.276",gradientUnits:"userSpaceOnUse",children:[(0,p.jsx)("stop",{offset:"0.27",stopColor:"#FF9F00"}),(0,p.jsx)("stop",{offset:"1",stopColor:"#FF7300"})]}),(0,p.jsx)("clipPath",{id:"clip0_201_15",children:(0,p.jsx)("rect",{width:"512",height:"512"})})]})]})})}),H&&(0,p.jsx)("li",{children:(0,p.jsx)("button",{onClick:()=>{l((0,h.Fb)(!0))},children:(0,p.jsx)("svg",{viewBox:"0 0 32 32",children:(0,p.jsx)("path",{fill:"currentColor",d:"m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"})})})}),(0,p.jsx)("li",{children:w?(0,p.jsx)("button",{className:"logInIcon ".concat(z?"active":""),onClick:I,children:(0,p.jsx)(m.Z,{url:null===y||void 0===y?void 0:y.image,alt:null===y||void 0===y?void 0:y.name,backupUrl:"/store/assets/imgs/404/user404.png",backupAlt:"User"})}):(0,p.jsxs)("button",{className:"logInButton ".concat(Z?"active":""),onClick:()=>{l((0,c.a)(!0))},disabled:Z,children:[!H&&(0,p.jsx)("p",{children:"Log In"}),(0,p.jsxs)("svg",{viewBox:"0 0 32 32",children:[(0,p.jsx)("path",{fill:"currentColor",d:"M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z"}),(0,p.jsx)("path",{fill:"currentColor",d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"})]})]})}),H&&(0,p.jsx)("li",{children:(0,p.jsx)("button",{className:"categoriesButton",onClick:P,children:(0,p.jsx)("svg",{viewBox:"0 0 32 32",children:(0,p.jsx)("path",{fill:"currentColor",d:"M12 4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8H6V6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8h-6V6h6zm-14 6H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8H6v-6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8h-6v-6h6z"})})})}),(0,p.jsx)("li",{children:(0,p.jsxs)(r.OL,{to:"/cart",disabled:"store/cart"===O,onClick:F,className:"cartLink",children:[!H&&w&&(null===y||void 0===y?void 0:y.username)&&(0,p.jsx)("p",{className:"cartP",children:y.username}),(0,p.jsxs)("svg",{viewBox:"0 0 32 32",children:[(0,p.jsx)("circle",{cx:"10",cy:"28",r:"2",fill:"currentColor"}),(0,p.jsx)("circle",{cx:"24",cy:"28",r:"2",fill:"currentColor"}),(0,p.jsx)("path",{fill:"currentColor",d:"M28 7H5.82L5 2.8A1 1 0 0 0 4 2H0v2h3.18L7 23.2a1 1 0 0 0 1 .8h18v-2H8.82L8 18h18a1 1 0 0 0 1-.78l2-9A1 1 0 0 0 28 7Zm-2.8 9H7.62l-1.4-7h20.53Z"})]})]})})]}),(0,p.jsx)(C.Z,{in:B&&H,timeout:200,classNames:"categories-dp-mobile",unmountOnExit:!0,nodeRef:D,children:(0,p.jsxs)("div",{className:"categories-dp-mobile",ref:D,children:[(0,p.jsxs)("div",{className:"categories-header",children:[(0,p.jsx)("h2",{children:"Categories"}),(0,p.jsx)("button",{onClick:P,children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:(0,p.jsx)("path",{fill:"currentColor",d:"M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586L17.414 16z"})})})]}),(0,p.jsx)("div",{className:"divider"}),(0,p.jsx)("ul",{className:"catsList",children:null===k||void 0===k?void 0:k.map((e=>(0,p.jsx)(u.ZZ,{category:e,currentCategory:M,handleCatClick:U},e.id)))}),(0,p.jsx)("div",{className:"divider"}),(0,p.jsxs)("div",{className:"subCatsList",children:[(0,p.jsx)("ul",{children:null===M||void 0===M||null===(e=M.subcategory)||void 0===e?void 0:e.slice(0,5).map((e=>(0,p.jsx)(u.g4,{subCategory:e,handleSubCatClick:q},e.id)))}),(0,p.jsx)(u.gV,{category:M,handleViewAllClick:e=>{l((0,t.yV)()),setTimeout((()=>{s("store/category/".concat(e))}),500)}})]})]})})]}):(0,p.jsxs)("ul",{className:w?"navigationLinks loggedIn":"navigationLinks",children:[(0,p.jsx)("li",{children:(0,p.jsx)("h3",{children:null===y||void 0===y?void 0:y.username})}),(0,p.jsx)("li",{children:(0,p.jsx)("button",{className:"logInIcon ".concat(z?"active":""),onClick:I,children:(0,p.jsx)(m.Z,{url:null===y||void 0===y?void 0:y.image,alt:null===y||void 0===y?void 0:y.name,backupUrl:"/store/assets/imgs/404/user404.png",backupAlt:"User"})})})]}),w&&(0,p.jsx)(C.Z,{in:z,timeout:500,classNames:"settingsContainer",unmountOnExit:!0,nodeRef:A,children:(0,p.jsxs)("div",{className:"settingsContainer ".concat(H?"mobileSettings":"normalSettings"),ref:A,children:[(0,p.jsxs)("ul",{className:"accountSettings",children:[(0,p.jsx)("li",{children:(0,p.jsxs)("h3",{children:["Account",(0,p.jsxs)("button",{onClick:()=>{f(),z&&l((0,d.i)(!1))},children:[(0,p.jsx)("span",{children:"Logout"}),(0,p.jsxs)("svg",{viewBox:"0 0 32 32",children:[(0,p.jsx)("path",{fill:"currentColor",d:"M6 30h12a2.002 2.002 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2.002 2.002 0 0 0-2-2H6a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2Z"}),(0,p.jsx)("path",{fill:"currentColor",d:"M20.586 20.586L24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6l-6 6l-1.414-1.414z"})]})]})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)(r.OL,{to:"/user",disabled:"store/user"===O,tabIndex:0,onClick:F,children:[(0,p.jsxs)("svg",{height:"32",viewBox:"0 0 32 32",children:[(0,p.jsx)("path",{fill:"currentColor",d:"M22 11h4a1 1 0 0 1 1 1v2h-6v-2a1 1 0 0 1 1-1Z"}),(0,p.jsx)("circle",{cx:"24",cy:"8",r:"2",fill:"currentColor"}),(0,p.jsx)("path",{fill:"currentColor",d:"M30 18H18a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h12a2.002 2.002 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2zM18 4v12h12.001L30 4zm-3 26h-2v-4a2.946 2.946 0 0 0-3-3H6a2.946 2.946 0 0 0-3 3v4H1v-4a4.951 4.951 0 0 1 5-5h4a4.951 4.951 0 0 1 5 5zM8 11a3 3 0 0 1 0 6a3 3 0 0 1 0-6m0-2a5 5 0 0 0 0 10A5 5 0 0 0 8 9z"})]}),(0,p.jsx)("p",{children:"Account Info"})]})}),!H&&(0,p.jsx)("li",{className:"divider"}),(0,p.jsx)("li",{children:(0,p.jsxs)(r.OL,{to:"/settings",disabled:"store/settings"===O,onClick:F,children:[(0,p.jsx)("svg",{viewBox:"0 0 32 32",children:(0,p.jsx)("path",{fill:"currentColor",d:"M30 10V8h-2.101a4.968 4.968 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A4.968 4.968 0 0 0 24 4.101V2h-2v2.101a4.968 4.968 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A4.968 4.968 0 0 0 18.101 8H16v2h2.101a4.968 4.968 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a4.968 4.968 0 0 0 1.753.732V16h2v-2.101a4.968 4.968 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A4.968 4.968 0 0 0 27.899 10zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3zm-7 18h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5z"})}),(0,p.jsx)("p",{children:"Account Settings"})]})})]}),(0,p.jsxs)("ul",{className:"themeSettings",children:[(0,p.jsx)("li",{children:(0,p.jsx)("h3",{children:"Theme"})}),(0,p.jsx)("li",{children:(0,p.jsxs)("button",{disabled:"system"===V,className:"".concat("system"===V?"active":""),onClick:()=>{l((0,o.q)("system"))},children:[(0,p.jsx)("svg",{viewBox:"0 0 32 32",fill:"currentColor",children:(0,p.jsx)("path",{d:"M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM18 28h-4v-4h4Zm10-6H4V6h24Z"})}),(0,p.jsx)("p",{children:"System Default"})]})}),!H&&(0,p.jsx)("li",{className:"divider"}),(0,p.jsx)("li",{children:(0,p.jsxs)("button",{disabled:"dark"===V,className:"".concat("dark"===V?"active":""),onClick:()=>{l((0,o.q)("dark"))},children:[(0,p.jsx)("svg",{viewBox:"0 0 32 32",fill:"currentColor",children:(0,p.jsx)("path",{d:"M30 19a4.974 4.974 0 0 0-3.206-4.658A6.971 6.971 0 0 0 13.758 12.9a13.142 13.142 0 0 1 .131-8.52A1.015 1.015 0 0 0 12.98 3a.983.983 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.041 13.041 0 0 0 10.29-5.038A4.99 4.99 0 0 0 30 19Zm-15.297 7.998a11.095 11.095 0 0 1-3.2-21.584a15.182 15.182 0 0 0 .844 9.367A4.988 4.988 0 0 0 15 24h7.677a11.1 11.1 0 0 1-7.556 2.998c-.138 0-.278.004-.418 0ZM25 22H15a2.994 2.994 0 0 1-.696-5.908l.658-.157l.099-.67a4.992 4.992 0 0 1 9.878 0l.099.67l.658.157A2.994 2.994 0 0 1 25 22Z"})}),(0,p.jsx)("p",{children:"Dark Mode"})]})}),!H&&(0,p.jsx)("li",{className:"divider"}),(0,p.jsx)("li",{children:(0,p.jsxs)("button",{disabled:"light"===V,className:"".concat("light"===V?"active":""),onClick:()=>{l((0,o.q)("light"))},children:[(0,p.jsx)("svg",{viewBox:"0 0 32 32",children:(0,p.jsx)("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"})}),(0,p.jsx)("p",{children:"Light Mode"})]})})]})]})})]})})}}}]);
//# sourceMappingURL=268.46fcc5da.chunk.js.map