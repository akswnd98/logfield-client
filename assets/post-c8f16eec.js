var y=Object.defineProperty;var p=(t,e,s)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var n=(t,e,s)=>(p(t,typeof e!="symbol"?e+"":e,s),s);import{b as i,D as r,x as a,d as o,e as l,c as w,s as m,O as d,f as h}from"./katex.min-d9a66969.js";class b extends i{async manipulate(e){r(a`
        <div id='root'>
          <div id='title'></div>
          <div id='body'></div>
        </div>
      `,e.shadowRoot)}}const x="";class v extends o{constructor(){super({styles:x})}}class g extends l{constructor(e){super({manipulators:[new b,new v],idTreeNodes:e.idTreeNodes})}}class T extends i{constructor(s){super();n(this,"title");this.title=s.title}async manipulate(s){r(a`
        <div id='root'>
          <h1>${this.title}</h1>
        </div>
      `,s.shadowRoot)}}const R=`#root{width:100%;height:100%}
`;class S extends o{constructor(){super({styles:R})}}class N extends l{constructor(e){super({manipulators:[new T({title:e.title}),new S],idTreeNodes:[]})}}class B extends i{constructor(s){super();n(this,"body");this.body=s.body}async manipulate(s){r(a`
        <div id='root'></div>
      `,s.shadowRoot),s.shadowRoot.getElementById("root").innerHTML=(await w.process(this.body)).toString()}}const C=`#root{width:100%;height:100%}
`;class O extends o{constructor(){super({styles:C})}}class f extends o{constructor(){super({styles:m})}}class P extends l{constructor(e){super({manipulators:[new B({body:e.body}),new O,new f],idTreeNodes:[]})}}const $=document.getElementById("root"),I=new URLSearchParams(document.location.search),u=I.get("id");if(u===null)throw"no id in search params";const E=Number(u);(async()=>{const t=new d,e=new d,s=new d,c=await h(E);await new g({idTreeNodes:[{id:"title",component:e,manipulator:new N({title:c.title})},{id:"body",component:s,manipulator:new P({body:c.body})}]}).manipulate(t),$.appendChild(t)})();
