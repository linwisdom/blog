import{O as G,u as N}from"./app-b550307d.js";import{c as v,h as $,j as n,D as S,B as C,R as f}from"./framework-c4a2405b.js";var m=v({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(l){const p=$(()=>{const c={};return l.color&&(c.color=l.color),l.size&&(c["font-size"]=Number.isNaN(Number(l.size))?l.size:`${l.size}px`),Object.keys(c).length?c:null});return()=>l.icon?n("span",{class:["font-icon icon",`iconfont icon-${l.icon}`],style:p.value}):null}}),O=v({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},titleGetter:{type:Function,default:l=>l.title},iconGetter:{type:Function,default:l=>l.icon},orderGetter:{type:Function,default:l=>l.order||0},shouldIndex:{type:Function,default:l=>l.index!==!1}},setup(l){const p=G({"/zh/":{title:"目录"},"/":{title:"Catalog"}}),c=S(),b=C(),y=N(),k=()=>{const i=l.base||c.path.replace(/\/[^/]+$/,"/"),h=b.getRoutes(),d=[];return h.filter(({meta:t,path:e})=>{if(!e.startsWith(i)||e===i)return!1;if(i==="/"){const a=Object.keys(y.value.locales).filter(o=>o!=="/");if(e==="/404.html"||a.some(o=>e.startsWith(o)))return!1}return(e.endsWith(".html")&&!e.endsWith("/index.html")||e.endsWith("/"))&&l.shouldIndex(t)}).map(({path:t,meta:e})=>{const a=t.substring(i.length).split("/").length;return{title:l.titleGetter(e),icon:l.iconGetter(e),base:t.replace(/\/[^/]+\/?$/,"/"),order:l.orderGetter(e),level:t.endsWith("/")?a-1:a,path:t}}).filter(({title:t,level:e})=>e<=l.level||!t).sort((t,e)=>t.level-e.level||(t.path.endsWith("/index.html")?-1:e.path.endsWith("/index.html")?1:t.order===null?e.order===null?t.title.localeCompare(e.title):e.order:e.order===null?t.order:t.order>0?e.order>0?t.order-e.order:-1:e.order<0?t.order-e.order:1)).forEach(t=>{var e;const{base:a,level:o}=t;switch(o){case 1:d.push(t);break;case 2:{const s=d.find(r=>r.path===a);s&&(s.children??(s.children=[])).push(t);break}default:{const s=d.find(r=>r.path===a.replace(/\/[^/]+\/$/,"/"));if(s){const r=(e=s.children)==null?void 0:e.find(u=>u.path===a);r&&(r.children??(r.children=[])).push(t)}}}}),d},x=$(()=>k());return()=>n("div",{class:"catalog-wrapper"},[n("h2",{class:"main-title"},p.value.title),...x.value.map(({children:i=[],icon:h,path:d,title:t},e)=>[n("h3",{id:t,class:["child-title",{"has-children":i.length}]},[n("a",{href:`#${t}`,class:"header-anchor"},"#"),n(f,{class:"catalog-title",to:d},()=>[h?n(m,{icon:h}):null,`${e+1}. ${t||"Unknown"}`])]),i.length?n("ul",{class:"child-catalog-wrapper"},i.map(({children:a=[],icon:o,path:s,title:r},u)=>n("li",{class:"child-catalog-item"},[n("div",{class:["sub-title",{"has-children":a.length}]},[n("a",{href:`#${r}`,class:"header-anchor"},"#"),n(f,{class:"catalog-title",to:s},()=>[o?n(m,{icon:o}):null,`${e+1}.${u+1} ${r||"Unknown"}`])]),a.length?n("div",{class:"sub-catalog-wrapper"},a.map(({icon:g,path:W,title:w},z)=>n(f,{class:"sub-catalog-item",to:W},()=>[g?n(m,{icon:g}):null,`${e+1}.${u+1}.${z+1} ${w||"Unknown"}`]))):null]))):null])])}});export{O as default};
