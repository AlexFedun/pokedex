(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{53:function(e,t,a){e.exports=a(63)},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a(66),i=a(67),s=a(42),o=a(11),m=a(12),u=a(15),d=a(13),p=a(16),h=a(71),E=a(45),f=a(77),y=a(76),b=a(72),k=a(51),v=a(50),g=a(46),C=a(75),j=a(47),w=a(73),O=a(78),S=a(65),x=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e;switch(this.props.name){case"normal":e="#A8A878";break;case"fighting":e="#C03028";break;case"flying":e="#A890F0";break;case"poison":e="#A040A0";break;case"ground":e="#E0C068";break;case"rock":e="#B8A038";break;case"bug":e="#A8B820";break;case"ghost":e="#705898";break;case"steel":e="#B8B8D0";break;case"fire":e="#F08030";break;case"water":e="#6890F0";break;case"grass":e="#78C850";break;case"electric":e="#F8D030";break;case"psychic":e="#F85888";break;case"ice":e="#98D8D8";break;case"dragon":e="#7038F8";break;case"dark":e="#705848";break;case"fairy":e="#F0B6BC";break;case"shadow":e="#705898";break;case"unknown":e="#6AA596"}return l.a.createElement(S.a,{variant:"primary",style:{background:e},className:"mr-1"},this.props.name)}}]),t}(n.Component),A=a(74),F=a(68),T=a(69),_=a(70),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).capitalize=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item;return l.a.createElement(A.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(A.a.Header,{closeButton:!0},l.a.createElement(A.a.Title,{id:"contained-modal-title-vcenter"},this.capitalize(t.name)+" #"+t.id)),l.a.createElement(A.a.Body,null,l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(E.a,{xs:12,md:5},l.a.createElement(F.a,{src:t.sprites.front_default,thumbnail:!0,style:{imageRendering:"pixelated",width:"100%"}})),l.a.createElement(E.a,{xs:12,md:7},l.a.createElement(T.a,{responsive:!0},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Height"),l.a.createElement("td",null,t.height)),l.a.createElement("tr",null,l.a.createElement("td",null,"Weight"),l.a.createElement("td",null,t.weight)),l.a.createElement("tr",null,l.a.createElement("td",null,"Base experience"),l.a.createElement("td",null,t.base_experience)),l.a.createElement("tr",null,l.a.createElement("td",null,"Types"),l.a.createElement("td",null,t.types.map((function(e,t){return l.a.createElement(x,{name:e.type.name,key:t})})))),l.a.createElement("tr",null,l.a.createElement("td",null,"Abilities"),l.a.createElement("td",null,t.abilities.map((function(t,a){return l.a.createElement("div",{key:a},e.capitalize(t.ability.name))})))))))),l.a.createElement(i.a,null,l.a.createElement(E.a,{xs:12},l.a.createElement(T.a,{responsive:!0},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"150px"}},"HP"),l.a.createElement("td",null,l.a.createElement(_.a,{animated:!0,now:t.stats[5].base_stat,variant:"info",label:t.stats[5].base_stat,max:"200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Attack"),l.a.createElement("td",null,l.a.createElement(_.a,{animated:!0,now:t.stats[4].base_stat,variant:"info",label:t.stats[4].base_stat,max:"200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Defense"),l.a.createElement("td",null,l.a.createElement(_.a,{animated:!0,now:t.stats[3].base_stat,variant:"info",label:t.stats[3].base_stat,max:"200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Special Attack"),l.a.createElement("td",null,l.a.createElement(_.a,{animated:!0,now:t.stats[2].base_stat,variant:"info",label:t.stats[2].base_stat,max:"200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Special Defense"),l.a.createElement("td",null,l.a.createElement(_.a,{animated:!0,now:t.stats[1].base_stat,variant:"info",label:t.stats[1].base_stat,max:"200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Speed"),l.a.createElement("td",null,l.a.createElement(_.a,{animated:!0,now:t.stats[0].base_stat,variant:"info",label:t.stats[0].base_stat,max:"200"}))))))))),l.a.createElement(A.a.Footer,null,l.a.createElement(g.a,{onClick:this.props.onHide},"Close")))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={error:null,isLoaded:!1,items:[],modalShow:!1},a.capitalize=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.url).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,r=t.items;return a?l.a.createElement("div",null,"Error: ",a.message):n?l.a.createElement("div",null,l.a.createElement(O.a,{onClick:function(){return e.setState({modalShow:!0})}},l.a.createElement(O.a.Header,null,l.a.createElement("h5",null,this.capitalize(r.name),l.a.createElement("small",null," #",r.id))),l.a.createElement(O.a.Img,{variant:"top",src:r.sprites.front_default,style:{imageRendering:"pixelated"}}),l.a.createElement(O.a.Footer,null,r.types.map((function(e,t){return l.a.createElement(x,{name:e.type.name,key:t})})))),l.a.createElement(B,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})},item:r})):l.a.createElement("div",null,"Loading...")}}]),t}(n.Component),L=a(52),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={selected:null},a.formChange=function(e){var t=e.currentTarget.elements,n=[];Object(L.a)(t).forEach((function(e){e.checked&&n.push(e.id)})),a.setState({selected:n})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(A.a,Object.assign({show:this.props.show,onHide:this.props.onHide},{"aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(A.a.Header,{closeButton:!0},l.a.createElement(A.a.Title,{id:"contained-modal-title-vcenter"},"Selected types")),l.a.createElement(A.a.Body,null,l.a.createElement(c.a,null,l.a.createElement(C.a,{onChange:this.formChange},l.a.createElement(i.a,null,l.a.createElement(E.a,null,l.a.createElement(C.a.Check,{type:"radio",id:"normal",label:"Normal",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"fighting",label:"Fighting",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"flying",label:"Flying",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"poison",label:"Poison",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"ground",label:"Ground",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"rock",label:"Rock",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"bug",label:"Bug",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"ghost",label:"Ghost",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"steel",label:"Steel",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"fire",label:"Fire",name:"type"})),l.a.createElement(E.a,null,l.a.createElement(C.a.Check,{type:"radio",id:"water",label:"Water",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"grass",label:"Grass",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"electric",label:"Electric",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"psychic",label:"Psychic",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"ice",label:"Ice",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"dragon",label:"Dragon",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"dark",label:"Dark",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"fairy",label:"Fairy",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"shadow",label:"Shadow",name:"type"}),l.a.createElement(C.a.Check,{type:"radio",id:"unknown",label:"Unknown",name:"type"})))))),l.a.createElement(A.a.Footer,null,l.a.createElement(g.a,{onClick:function(){return e.props.setType(e.state.selected)}},"Close")))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={offset:0,limit:10,error:null,isLoaded:!1,items:[],search:"",typesModal:!1,slectedTypes:null},a.fetchData=function(){var e="https://pokeapi.co/api/v2/pokemon/?offset=&limit=1000",t=0;null!=a.state.slectedTypes&&(e="https://pokeapi.co/api/v2/type/"+a.state.slectedTypes[0],t=1),fetch(e).then((function(e){return e.json()})).then((function(e){a.setState({isLoaded:!0,items:0===t?e.results:e.pokemon})}),(function(e){a.setState({isLoaded:!0,error:e})}))},a.previousPage=function(){a.setState({offset:a.state.offset-a.state.limit})},a.nestPage=function(){a.setState({offset:a.state.offset+a.state.limit})},a.pageLimit=function(e){a.setState({offset:0,limit:e})},a.manageItems=function(e){var t=""===a.state.search?e:e.filter((function(e){var t;return null==a.state.slectedTypes?e.name.includes(a.state.search):null===(t=e.pokemon)||void 0===t?void 0:t.name.includes(a.state.search)})),n=t.slice(a.state.offset,a.state.offset+a.state.limit);return n.maxValue=t.length,n},a.handleChange=function(e){var t=e.target;a.setState(Object(s.a)({},t.name,t.value))},a.handleFormSubmit=function(e){e.preventDefault()},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,r=t.items;if(a)return l.a.createElement("div",null,"Error: ",a.message);if(n){var c=this.manageItems(r);return l.a.createElement(E.a,null,l.a.createElement(f.a,{bg:"dark",variant:"dark",fixed:"top",expand:"lg"},l.a.createElement(f.a.Brand,{href:"#"},"Pokedex"),l.a.createElement(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(f.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(y.a,{className:"mr-auto"},l.a.createElement(b.a,{type:"radio",onChange:function(t){return e.pageLimit(t)},name:"option",defaultValue:10},l.a.createElement(k.a,{value:10},"10"),l.a.createElement(k.a,{value:20},"20"),l.a.createElement(k.a,{value:50},"50")),l.a.createElement(v.a,{className:"ml-3"},l.a.createElement(g.a,{variant:"primary",disabled:!0}," Page: ",this.state.offset/this.state.limit+1," "),0!==this.state.offset?l.a.createElement(g.a,{variant:"primary",onClick:this.previousPage},"Previous page"):"",this.state.offset+this.state.limit<c.maxValue?l.a.createElement(g.a,{variant:"primary",onClick:this.nestPage},"Next page"):"")),l.a.createElement(C.a,{inline:!0,onSubmit:this.handleFormSubmit},l.a.createElement(g.a,{variant:"primary mr-2",onClick:function(){return e.setState({typesModal:!0})}}," Types "),l.a.createElement(j.a,{type:"text",placeholder:"Search",className:"mr-sm-2",name:"search",value:this.state.search,onChange:this.handleChange})))),l.a.createElement(H,{show:this.state.typesModal,onHide:function(){return e.setState({typesModal:!1})},setType:function(t){return e.setState({slectedTypes:t},(function(){return e.setState({typesModal:!1},e.fetchData)}))}}),l.a.createElement(w.a,{className:"mt-6"},c.map((function(t){var a,n;return l.a.createElement(D,{url:null==e.state.slectedTypes?t.url:null===(a=t.pokemon)||void 0===a?void 0:a.url,key:null==e.state.slectedTypes?t.name:null===(n=t.pokemon)||void 0===n?void 0:n.name})}))))}return l.a.createElement(h.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))}}]),t}(n.Component);var N=function(){return l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(P,null)))};a(61),a(62);Object(r.render)(l.a.createElement(N,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.7c6e5010.chunk.js.map