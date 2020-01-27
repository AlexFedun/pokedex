(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{53:function(e,t,a){e.exports=a(63)},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a(70),i=a(68),s=a(42),o=a(7),m=a(8),u=a(10),d=a(9),p=a(11),h=a(71),E=a(44),f=a(77),b=a(76),y=a(72),v=a(51),k=a(50),g=a(46),C=a(75),j=a(47),w=a(73),O=a(78),S=a(65),x=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e;switch(this.props.name){case"normal":e="#A8A878";break;case"fighting":e="#C03028";break;case"flying":e="#A890F0";break;case"poison":e="#A040A0";break;case"ground":e="#E0C068";break;case"rock":e="#B8A038";break;case"bug":e="#A8B820";break;case"ghost":e="#705898";break;case"steel":e="#B8B8D0";break;case"fire":e="#F08030";break;case"water":e="#6890F0";break;case"grass":e="#78C850";break;case"electric":e="#F8D030";break;case"psychic":e="#F85888";break;case"ice":e="#98D8D8";break;case"dragon":e="#7038F8";break;case"dark":e="#705848";break;case"fairy":e="#F0B6BC";break;case"shadow":e="#705898";break;case"unknown":e="#6AA596"}return r.a.createElement(S.a,{variant:"primary",style:{background:e},className:"mr-1"},this.props.name)}}]),t}(n.Component),L=a(74),A=a(67),_=a(66),D=a(69),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,isLoaded:!1,items:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.url).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;if(t)return r.a.createElement("div",null,"Error: ",t.message);if(a){for(var l=[],c=n.chain;c;)l.push(c.species.url.slice(42)),c=c.evolves_to[0];return r.a.createElement(E.a,null,r.a.createElement(_.a,{responsive:!0},r.a.createElement("caption",{style:{captionSide:"top"}},"Pokemon evolution"),r.a.createElement("tbody",null,r.a.createElement("tr",null,l.map((function(e){return r.a.createElement("td",null,r.a.createElement(A.a,{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+e.substring(0,e.length-1)+".png",thumbnail:!0,style:{imageRendering:"pixelated",width:"100%"}}))}))))))}return r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,isLoaded:!1,items:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.species).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.props.stats,t=this.state,a=t.error,n=t.isLoaded,l=t.items;return a?r.a.createElement("div",null,"Error: ",a.message):n?r.a.createElement(i.a,null,r.a.createElement(E.a,{xs:12,md:6},r.a.createElement(_.a,{responsive:!0},r.a.createElement("tbody",null,r.a.createElement("caption",null,"Stats"),r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"150px"}},"HP"),r.a.createElement("td",null,r.a.createElement(D.a,{animated:!0,now:e[5].base_stat,variant:"info",label:e[5].base_stat,max:"200"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Attack"),r.a.createElement("td",null,r.a.createElement(D.a,{animated:!0,now:e[4].base_stat,variant:"info",label:e[4].base_stat,max:"200"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Defense"),r.a.createElement("td",null,r.a.createElement(D.a,{animated:!0,now:e[3].base_stat,variant:"info",label:e[3].base_stat,max:"200"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Special Attack"),r.a.createElement("td",null,r.a.createElement(D.a,{animated:!0,now:e[2].base_stat,variant:"info",label:e[2].base_stat,max:"200"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Special Defense"),r.a.createElement("td",null,r.a.createElement(D.a,{animated:!0,now:e[1].base_stat,variant:"info",label:e[1].base_stat,max:"200"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Speed"),r.a.createElement("td",null,r.a.createElement(D.a,{animated:!0,now:e[0].base_stat,variant:"info",label:e[0].base_stat,max:"200"})))))),r.a.createElement(E.a,{xs:12,md:6},r.a.createElement(_.a,{responsive:!0},r.a.createElement("tbody",null,r.a.createElement("caption",null,"Species"),r.a.createElement("tr",null,r.a.createElement("td",null,"Base Happiness:"),r.a.createElement("td",null,l.base_happiness)),r.a.createElement("tr",null,r.a.createElement("td",null,"Capture rate:"),r.a.createElement("td",null,l.capture_rate)),r.a.createElement("tr",null,r.a.createElement("td",null,"Hatch counter:"),r.a.createElement("td",null,l.hatch_counter)),r.a.createElement("tr",null,r.a.createElement("td",null,"Growth rate:"),r.a.createElement("td",null,l.growth_rate.name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Generation:"),r.a.createElement("td",null,l.generation.name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Shape:"),r.a.createElement("td",null,l.shape.name))))),r.a.createElement(F,{url:l.evolution_chain.url})):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).capitalize=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item;return r.a.createElement(L.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement(L.a.Title,{id:"contained-modal-title-vcenter"},this.capitalize(t.name)+" #"+t.id)),r.a.createElement(L.a.Body,null,r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(E.a,{xs:12,md:5},r.a.createElement(A.a,{src:t.sprites.front_default,thumbnail:!0,style:{imageRendering:"pixelated",width:"100%"}})),r.a.createElement(E.a,{xs:12,md:7},r.a.createElement(_.a,{responsive:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Height"),r.a.createElement("td",null,t.height)),r.a.createElement("tr",null,r.a.createElement("td",null,"Weight"),r.a.createElement("td",null,t.weight)),r.a.createElement("tr",null,r.a.createElement("td",null,"Base experience"),r.a.createElement("td",null,t.base_experience)),r.a.createElement("tr",null,r.a.createElement("td",null,"Types"),r.a.createElement("td",null,t.types.map((function(e,t){return r.a.createElement(x,{name:e.type.name,key:t})})))),r.a.createElement("tr",null,r.a.createElement("td",null,"Abilities"),r.a.createElement("td",null,t.abilities.map((function(t,a){return r.a.createElement("div",{key:a},e.capitalize(t.ability.name))})))))))),r.a.createElement(B,{stats:t.stats,species:t.species.url}))),r.a.createElement(L.a.Footer,null,r.a.createElement(g.a,{onClick:this.props.onHide},"Close")))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,isLoaded:!1,items:[],modalShow:!1},a.capitalize=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.url).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,l=t.items;return a?r.a.createElement("div",null,"Error: ",a.message):n?r.a.createElement("div",null,r.a.createElement(O.a,{onClick:function(){return e.setState({modalShow:!0})}},r.a.createElement(O.a.Header,null,r.a.createElement("h5",null,this.capitalize(l.name),r.a.createElement("small",null," #",l.id))),r.a.createElement(O.a.Img,{variant:"top",src:l.sprites.front_default,style:{imageRendering:"pixelated"}}),r.a.createElement(O.a.Footer,null,l.types.map((function(e,t){return r.a.createElement(x,{name:e.type.name,key:t})})))),r.a.createElement(T,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})},item:l})):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),H=a(52),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selected:null},a.formChange=function(e){var t=e.currentTarget.elements,n=[];Object(H.a)(t).forEach((function(e){e.checked&&n.push(e.id)})),a.setState({selected:n})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"render",value:function(){var e=this;return this.setState({selected:null}),r.a.createElement(L.a,Object.assign({show:this.props.show,onHide:this.props.onHide},{"aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement(L.a.Title,{id:"contained-modal-title-vcenter"},"Selected types")),r.a.createElement(L.a.Body,null,r.a.createElement(c.a,null,r.a.createElement(C.a,{onChange:this.formChange},r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(C.a.Check,{type:"radio",id:"normal",label:"Normal",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"fighting",label:"Fighting",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"flying",label:"Flying",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"poison",label:"Poison",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"ground",label:"Ground",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"rock",label:"Rock",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"bug",label:"Bug",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"ghost",label:"Ghost",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"steel",label:"Steel",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"fire",label:"Fire",name:"type"})),r.a.createElement(E.a,null,r.a.createElement(C.a.Check,{type:"radio",id:"water",label:"Water",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"grass",label:"Grass",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"electric",label:"Electric",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"psychic",label:"Psychic",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"ice",label:"Ice",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"dragon",label:"Dragon",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"dark",label:"Dark",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"fairy",label:"Fairy",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"shadow",label:"Shadow",name:"type"}),r.a.createElement(C.a.Check,{type:"radio",id:"unknown",label:"Unknown",name:"type"})))))),r.a.createElement(L.a.Footer,null,r.a.createElement(g.a,{onClick:function(){return e.props.setType(e.state.selected)}},"Save")))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={offset:0,limit:10,error:null,isLoaded:!1,items:[],search:"",typesModal:!1,slectedTypes:null},a.fetchData=function(){var e="https://pokeapi.co/api/v2/pokemon/?offset=&limit=1000",t=0;null!=a.state.slectedTypes&&(e="https://pokeapi.co/api/v2/type/"+a.state.slectedTypes[0],t=1),fetch(e).then((function(e){return e.json()})).then((function(e){a.setState({isLoaded:!0,items:0===t?e.results:e.pokemon})}),(function(e){a.setState({isLoaded:!0,error:e})}))},a.previousPage=function(){a.setState({offset:a.state.offset-a.state.limit})},a.nestPage=function(){a.setState({offset:a.state.offset+a.state.limit})},a.pageLimit=function(e){a.setState({offset:0,limit:e})},a.manageItems=function(e){var t=""===a.state.search?e:e.filter((function(e){var t;return null==a.state.slectedTypes?e.name.includes(a.state.search):null===(t=e.pokemon)||void 0===t?void 0:t.name.includes(a.state.search)})),n=t.slice(a.state.offset,a.state.offset+a.state.limit);return n.maxValue=t.length,n},a.handleChange=function(e){var t=e.target;a.setState(Object(s.a)({},t.name,t.value))},a.handleFormSubmit=function(e){e.preventDefault()},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,l=t.items;if(a)return r.a.createElement("div",null,"Error: ",a.message);if(n){var c=this.manageItems(l);return r.a.createElement(E.a,null,r.a.createElement(f.a,{bg:"dark",variant:"dark",fixed:"top",expand:"lg"},r.a.createElement(f.a.Brand,{href:"#"},"Pokedex"),r.a.createElement(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(y.a,{type:"radio",onChange:function(t){return e.pageLimit(t)},name:"option",defaultValue:10},r.a.createElement(v.a,{value:10},"10"),r.a.createElement(v.a,{value:20},"20"),r.a.createElement(v.a,{value:50},"50")),r.a.createElement(k.a,{className:"ml-3"},r.a.createElement(g.a,{variant:"primary",disabled:!0}," Page: ",this.state.offset/this.state.limit+1," "),0!==this.state.offset?r.a.createElement(g.a,{variant:"primary",onClick:this.previousPage},"Previous page"):"",this.state.offset+this.state.limit<c.maxValue?r.a.createElement(g.a,{variant:"primary",onClick:this.nestPage},"Next page"):"")),r.a.createElement(C.a,{inline:!0,onSubmit:this.handleFormSubmit},r.a.createElement(g.a,{variant:"primary mr-2",onClick:function(){return e.setState({typesModal:!0})}}," Types "),r.a.createElement(j.a,{type:"text",placeholder:"Search",className:"mr-sm-2",name:"search",value:this.state.search,onChange:this.handleChange})))),r.a.createElement(M,{show:this.state.typesModal,onHide:function(){return e.setState({typesModal:!1})},setType:function(t){return e.setState({slectedTypes:t},(function(){return e.setState({typesModal:!1},e.fetchData)}))}}),r.a.createElement(w.a,{className:"mt-6"},c.map((function(t){var a,n;return r.a.createElement(P,{url:null==e.state.slectedTypes?t.url:null===(a=t.pokemon)||void 0===a?void 0:a.url,key:null==e.state.slectedTypes?t.name:null===(n=t.pokemon)||void 0===n?void 0:n.name})}))))}return r.a.createElement(h.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}}]),t}(n.Component);var z=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(N,null)))};a(61),a(62);Object(l.render)(r.a.createElement(z,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.f2e1b0a8.chunk.js.map