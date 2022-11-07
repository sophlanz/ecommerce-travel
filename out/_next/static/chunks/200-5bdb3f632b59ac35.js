"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{5200:function(e,s,a){a.d(s,{Z:function(){return k}});var t=a(5893),c=a(7294),n=a(9473),i=a(7568),l=a(655),r=a(3969),o=a(5675),d=a.n(o),h=function(e){var s=e.id,a=e.total,c=e.title,i=(e.price,e.date),l=e.coverPhoto,o="",h=(0,n.v9)((function(e){return e.bag})).filter((function(e){return e.id===s}));console.log(h);var u=(0,n.I0)();switch(l){case"elephant.jpg":o="/images/elephant.jpg";break;case"temple.jpg":o="/images/temple.jpg";break;case"beach.jpg":o="/images/beach.jpg";break;case"food.jpg":o="/images/food.jpg";break;case"halong.jpg":o="/images/halong.jpg";break;case"hanoi.jpg":o="/images/hanoi.jpg";break;case"loop.jpg":o="/images/loop.jpg";break;case"market.jpg":o="/images/market.jpg";break;case"rajaampat.jpg":o="/images/rajaampat.jpg";break;case"kelimutu.jpg":o="/images/kelimutu.jpg";break;case"komodo.jpg":o="/images/komodo.jpg";break;case"kuta.jpg":o="/images/kuta.jpg";break;default:o="/images/cover.jpg"}return console.log(l),console.log(o),(0,t.jsxs)("div",{className:"cartItem",children:[(0,t.jsx)("div",{className:"cartImage",children:(0,t.jsx)(d(),{src:o,layout:"fill",objectFit:"cover"})}),(0,t.jsxs)("div",{className:"itemInfo",children:[(0,t.jsxs)("div",{className:"itemName",children:[(0,t.jsx)("h1",{children:c}),(0,t.jsx)("p",{children:i})]}),(0,t.jsxs)("div",{className:"changeQuantity",children:[(0,t.jsx)("button",{onClick:function(){u((0,r.a3)({title:c}))},className:"delete",children:"-"}),(0,t.jsx)("div",{className:"bagCount",children:h[0].counter}),(0,t.jsx)("button",{onClick:function(){u((0,r.Qd)({title:c}))},className:"add",children:"+"}),(0,t.jsx)("button",{className:"remove",onClick:function(){u((0,r.wz)({id:s}))},children:"REMOVE"})]})]}),(0,t.jsxs)("p",{className:"totalItem",children:["$",a]})]})},u=a(6104),j=a.n(u),m=a(5286),p=a(1664),x=a.n(p),g=function(){var e=(0,c.useState)(0),s=e[0],a=e[1],r=(0,n.v9)((function(e){return e.bag})),o=(0,n.I0)(),d=0,u=0,p=function(){var e=(0,i.Z)((function(e){return(0,l.__generator)(this,(function(t){return a(0),Promise.all(e.map((function(e){return d+=e.total,u+=e.counter}))).then((function(){a(d)})).then((function(){return o((0,m.KP)({total:s,count:u}))})),[2]}))}));return function(s){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){p(r)}),[r,s]),console.log((0,n.v9)((function(e){return e.count[0].count}))),(0,t.jsxs)("div",{id:"modal",className:"modal",children:[(0,t.jsxs)("div",{className:"cartList",style:{alignItems:0===s?"center":null,justifyContent:0===s?"center":null},children:[0===s?(0,t.jsxs)("div",{className:"emptyBag",children:[(0,t.jsx)("h1",{children:"Looks like your bag is empty!"}),(0,t.jsx)("p",{children:(0,t.jsx)(x(),{href:"/",children:"Get Shopping"})})]}):null,(0,t.jsx)("ul",{className:"shoppingCart",children:r.map((function(e){return(0,t.jsx)("li",{children:(0,t.jsx)(h,{total:e.total,coverPhoto:e.image,title:e.title,price:e.price,date:e.date,id:e.id})},j()())}))})]}),(0,t.jsxs)("div",{className:"checkOut",children:[(0,t.jsx)("p",{className:"taxes",children:"Taxes will be calculated at checkout."}),(0,t.jsxs)("div",{className:"total",children:[(0,t.jsx)("p",{children:"Total"}),(0,t.jsxs)("p",{children:["$",s]})]}),(0,t.jsxs)("div",{className:"coupon",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"checkbox",id:"coupon",name:"coupon"}),(0,t.jsx)("label",{htmlFor:"coupon",children:"Coupon Code"})]}),(0,t.jsx)("button",{children:"Checkout"})]})]})]})},v=a(3253),f=a.n(v),k=function(){var e=(0,n.v9)((function(e){return e.count[0].count}));console.log(e);var s=(0,c.useState)(0),a=s[0],i=s[1],l=(0,c.useState)(!1),r=l[0],o=l[1];return(0,c.useEffect)((function(){i(e),document.querySelector("body").style.overflow=r?"hidden":null}),[e,r]),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{id:"navBar",style:{zIndex:r?"0":"1"},children:[(0,t.jsxs)("div",{id:"leftNav",children:[(0,t.jsxs)("li",{children:[" ",(0,t.jsx)(x(),{href:"/",children:"Discover"})]}),(0,t.jsxs)("li",{children:[" ",(0,t.jsx)(x(),{href:"/about",children:"About"})]}),(0,t.jsxs)("li",{children:[" ",(0,t.jsx)(x(),{href:"/contact",children:"Contact"})]})]}),(0,t.jsx)("div",{id:"centerNav",children:(0,t.jsx)("li",{children:(0,t.jsx)(x(),{href:"/",children:"Excursion Escape"})})}),(0,t.jsxs)("div",{id:"rightNav",children:[(0,t.jsx)("li",{id:"bagContainer",className:"shoppingBag",onClick:function(){return o(!0)},children:a}),(0,t.jsx)("a",{href:"https://facebook.com",target:"_blank",children:(0,t.jsx)(d(),{src:"/images/facebook.svg",className:"facebook",alt:"facebook",height:30,width:30})}),(0,t.jsx)("a",{href:"https://twitter.com",target:"_blank",children:(0,t.jsx)(d(),{src:"/images/twitter.svg",className:"twitter",alt:"twitter",height:30,width:30})}),(0,t.jsx)("a",{href:"https://instagram.com",target:"_blank",children:(0,t.jsx)(d(),{src:"/images/instagram.svg",className:"instagram",alt:"instagram",height:30,width:30})})]})]}),(0,t.jsx)("div",{children:(0,t.jsxs)(f(),{ariaHideApp:!1,isOpen:r,className:"Modal",overlayClassName:"Overlay",children:[(0,t.jsxs)("div",{className:"cartTop",children:[(0,t.jsxs)("div",{className:"cartHeader",children:[(0,t.jsx)("h1",{children:"YOUR BAG"}),(0,t.jsxs)("p",{children:["(",a,")"]})]}),(0,t.jsx)("button",{className:"closeCart",onClick:function(){return o(!1)},children:"x"})]}),0===a?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"cartList",children:(0,t.jsxs)("div",{className:"emptyBag",children:[(0,t.jsx)("h1",{children:"Looks like your bag is empty!"}),(0,t.jsx)("button",{onClick:function(){return o(!1)},children:"Get Shopping Now!"})]})}),(0,t.jsxs)("div",{className:"checkOut",children:[(0,t.jsx)("p",{className:"taxes",children:"Taxes will be calculated at checkout."}),(0,t.jsxs)("div",{className:"total",children:[(0,t.jsx)("p",{children:"Total"}),(0,t.jsxs)("p",{children:["$",e]})]}),(0,t.jsxs)("div",{className:"coupon",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"checkbox",id:"coupon",name:"coupon"}),(0,t.jsx)("label",{htmlFor:"coupon",children:"Coupon Code"})]}),(0,t.jsx)("button",{children:"Checkout"})]})]})]}):(0,t.jsx)(g,{})]})})]})}}}]);