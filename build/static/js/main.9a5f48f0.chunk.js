(this["webpackJsonpe-vote"]=this["webpackJsonpe-vote"]||[]).push([[0],{16:function(e,t,a){},19:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(23),r=a.n(c),i=a(10),o=(a(30),a(2)),l=a(3),d=a(5),j=a(4),b=a(6),u=(a(15),a(31),a(13)),m=(a(19),a(0)),h=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"container-fluid fondobanner",children:Object(m.jsx)("div",{className:"display-4 paddingbanner nexa text-white py-3",children:"Votaciones Per\xfa"})})}}]),a}(n.Component),x=(a(33),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"bg-navegacion sticky-top nexa padding-horizontal",children:Object(m.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark py-2",children:[Object(m.jsx)(i.b,{className:"navbar-brand  font-weight-bold",to:"/",children:"UNI PERU"}),Object(m.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(m.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(m.jsx)("li",{className:"nav-item font-weight-bold",children:Object(m.jsx)(i.b,{to:"/login",className:"nav-link",children:"LOGIN"})}),Object(m.jsx)("li",{className:"nav-item font-weight-bold",children:Object(m.jsx)(i.b,{to:"/registrar",className:"nav-link",children:"REGISTRATE"})}),Object(m.jsx)("li",{className:"nav-item font-weight-bold",children:Object(m.jsx)(i.b,{to:"/resultados",className:"nav-link",children:"RESULTADOS"})}),Object(m.jsx)("li",{className:"nav-item font-weight-bold",children:Object(m.jsx)(i.b,{to:"/votolive",className:"nav-link",children:"VOTOS"})})]})})]})})}}]),a}(n.Component)),O=(a(16),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.value,s=t.name;n.setState(Object(u.a)({},s,a))},n.onSubmit=function(e){e.preventDefault(),fetch("/signin",{method:"POST",body:JSON.stringify(n.state),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status)throw new Error(e.error);n.props.history.push("/")})).catch((function(e){console.error(e),alert("Error logging in please try again")}))},n.state={dni:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{}),Object(m.jsx)(x,{}),Object(m.jsx)("div",{className:"fondo",children:Object(m.jsx)("section",{className:"container-fluid bgfuture",children:Object(m.jsx)("section",{className:"row justify-content-center",children:Object(m.jsx)("section",{className:"col-10 col-sm-8 col-md-6",children:Object(m.jsxs)("form",{className:"form-container col-md-12 mb-5",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{className:"text-center font-weight-bold textfone nexa",children:Object(m.jsx)("h3",{children:"Ingresar al sistema"})}),Object(m.jsxs)("div",{className:"form-group nexa",children:[Object(m.jsx)("label",{htmlFor:"dni",children:"DNI"}),Object(m.jsx)("input",{type:"text",name:"dni",className:"form-control",id:"dni",placeholder:"Escriba DNI",value:this.state.dni,onChange:this.handleInputChange,required:!0})]}),Object(m.jsxs)("div",{className:"form-group nexa",children:[Object(m.jsx)("label",{htmlFor:"contra",children:"Contrase\xf1a"}),Object(m.jsx)("input",{type:"password",name:"password",className:"form-control",id:"contra",placeholder:"Contrase\xf1a",value:this.state.password,onChange:this.handleInputChange,required:!0})]}),Object(m.jsx)("button",{type:"submit",value:"Submit",className:"btn-block btn fondoprincipal text-white nexa",children:"Ingresar"}),Object(m.jsx)("div",{className:"text-center nexa mt-3",children:Object(m.jsxs)("h6",{children:["\xbfA\xfan no tienes cuenta?",Object(m.jsx)("br",{}),Object(m.jsx)(i.b,{className:"textfone",to:"/registrar",children:"Haz click aqu\xed"})]})})]})})})})})]})}}]),a}(n.Component)),p=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.value,s=t.name;n.setState(Object(u.a)({},s,a))},n.onSubmit=function(e){e.preventDefault(),fetch("/api/register",{method:"POST",body:JSON.stringify(n.state),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status)throw new Error(e.error);n.props.history.push("/")})).catch((function(e){console.error(e),alert("Error logging in please try again")}))},n.state={apellidos:"",nombres:"",dni:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{}),Object(m.jsx)(x,{}),Object(m.jsx)("div",{className:"fondoregistro",children:Object(m.jsx)("section",{className:"container-fluid bgfuture",children:Object(m.jsx)("section",{className:"row justify-content-center",children:Object(m.jsx)("section",{className:"col-10 col-sm-10 col-md-8",children:Object(m.jsxs)("form",{className:"form-container col-md-12 mb-5",id:"form-registro",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{className:"text-center font-weight-bold textfone nexa mb-4",children:Object(m.jsx)("h3",{children:"Bienvenido al registro del sistema"})}),Object(m.jsxs)("div",{className:"form-row nexa",children:[Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsx)("label",{htmlFor:"apellido",children:"Apellidos Completos"}),Object(m.jsx)("input",{type:"text",name:"apellidos",className:"form-control",id:"apellido",placeholder:"Escriba Apellidos",value:this.state.apellidos,onChange:this.handleInputChange,required:!0})]}),Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsx)("label",{htmlFor:"nombre",children:"Nombres Completos"}),Object(m.jsx)("input",{type:"text",name:"nombres",className:"form-control",id:"nombre",placeholder:"Escriba Nombres",value:this.state.nombres,onChange:this.handleInputChange,required:!0})]})]}),Object(m.jsxs)("div",{className:"form-row nexa",children:[Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsx)("label",{htmlFor:"dni",children:"DNI"}),Object(m.jsx)("input",{type:"text",name:"dni",className:"form-control",id:"dni",placeholder:"Escriba DNI",value:this.state.dni,onChange:this.handleInputChange,required:!0})]}),Object(m.jsxs)("div",{className:"form-group col-md-6",children:[Object(m.jsx)("label",{htmlFor:"inputPassword4",children:"Contrase\xf1a"}),Object(m.jsx)("input",{type:"password",name:"password",className:"form-control",id:"inputPassword4",placeholder:"Contrase\xf1a",value:this.state.password,onChange:this.handleInputChange,required:!0})]})]}),Object(m.jsx)("button",{type:"submit",value:"Submit",className:"btn-block btn fondoprincipal text-white nexa",children:"Registrarse"})]})})})})})]})}}]),a}(n.Component),f=(a(39),a.p+"static/media/keiko.42624f8f.jpg"),v=a.p+"static/media/pedro castillo.e3e0a042.jpeg",g=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={date:new Date,conexiones:0},e.months=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],e.days=["Domingo","Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"],e.hora=e.state.date.getHours()%12?e.state.date.getHours()%12:"12",e.notation=e.state.date.getHours()>=12?"PM":"AM",e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({date:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{}),Object(m.jsx)(x,{}),Object(m.jsx)("div",{className:"fondoSolar",children:Object(m.jsx)("section",{className:"container-fluid",children:Object(m.jsxs)("section",{className:"row py-5",children:[Object(m.jsxs)("section",{className:"col-lg-6 text-center pb-5",children:[Object(m.jsx)("div",{className:"fotoPanel",children:Object(m.jsx)("img",{className:"cuadroPumiiUni",src:f,alt:"Imagen PUMII UNI"})}),Object(m.jsx)("button",{type:"submit",value:"Submit",className:"btn-block btn fondoprincipal text-white nexa",children:"Votar Keiko"})]}),Object(m.jsxs)("section",{className:"col-lg-6 text-center",children:[Object(m.jsx)("div",{className:"fotoPanel",children:Object(m.jsx)("img",{className:"cuadroPumiiUni",src:v,alt:"Imagen Logo UNI"})}),Object(m.jsx)("button",{type:"submit",value:"Submit",className:"btn-block btn fondoprincipal text-white nexa ",children:"Votar Pedro"})]})]})})})]})}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).onSubmit=function(e){e.preventDefault()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{}),Object(m.jsx)(x,{}),Object(m.jsx)("div",{className:"fondocontacto",children:Object(m.jsx)("section",{className:"container-fluid bgfuture",children:Object(m.jsx)("section",{className:"row justify-content-center",children:Object(m.jsx)("section",{className:"col-10 col-sm-8 col-md-6",children:Object(m.jsxs)("form",{className:"form-container col-md-12 mb-5",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{className:"text-center font-weight-bold textfone nexa",children:Object(m.jsx)("h3",{children:"Contactar a PUMII PER\xda"})}),Object(m.jsxs)("div",{className:"form-group nexa",children:[Object(m.jsx)("label",{htmlFor:"exampleInputCodigo1",children:"Nombre de usuario:"}),Object(m.jsx)("input",{type:"text",name:"username",className:"form-control",id:"usuario",placeholder:"Usuario"})]}),Object(m.jsxs)("div",{className:"form-group nexa",children:[Object(m.jsx)("label",{htmlFor:"contra",children:"Contrase\xf1a:"}),Object(m.jsx)("input",{type:"password",name:"password",className:"form-control",id:"contra",placeholder:"Contrase\xf1a"})]}),Object(m.jsxs)("div",{className:"form-group nexa",children:[Object(m.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Mensaje:"}),Object(m.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})]}),Object(m.jsx)("button",{type:"submit",className:"btn-block btn fondoprincipal text-white nexa",children:"Enviar"})]})})})})})]})}}]),a}(n.Component),y=a(25);function w(e){return function(t){Object(d.a)(n,t);var a=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=a.call(this)).state={loading:!0,redirect:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/checkToken").then((function(t){if(200!==t.status)throw new Error(t.error);e.setState({loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1,redirect:!0})}))}},{key:"render",value:function(){var t=this.state,a=t.loading,n=t.redirect;return a?null:n?Object(m.jsx)(b.a,{to:"/login"}):Object(m.jsx)(e,Object(y.a)({},this.props))}}]),n}(n.Component)}var C=a.p+"static/media/UNI.77eba41f.png",k=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"stylePhotoPumii",value:function(){return{height:"250px",width:"200px"}}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"container-fluid fotoCabeza rellenouno",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("p",{className:"h1 text-white nexa",children:"UNI PER\xda"}),Object(m.jsxs)("div",{className:"h5 text-white nexa",children:["Per\xfa, un modelo de investigaci\xf3n",Object(m.jsx)("br",{}),"e ingenier\xeda"]})]}),Object(m.jsx)("div",{className:"col-md-3"}),Object(m.jsx)("div",{className:"col-md-3 ml-auto rellenodos",children:Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:C,style:this.stylePhotoPumii(),alt:"Foto PUMII UNI"})})})]})})}}]),a}(n.Component),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"styleFooter",value:function(){return{marginBottom:"0"}}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"jumbotron text-center",style:this.styleFooter(),children:Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsxs)("div",{className:"col-md-8",children:[Object(m.jsx)("div",{className:"h3 text-asme nexa",children:"ENCUENTRANOS EN"}),Object(m.jsxs)("div",{className:"h3",children:[Object(m.jsxs)("a",{className:"text-decoration-none px-2",href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:[Object(m.jsx)("i",{className:"fa fa-instagram text-asme","aria-hidden":"true"})," "]}),Object(m.jsxs)("a",{className:"text-decoration-none px-2",href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:[Object(m.jsx)("i",{className:"fa fa-facebook text-asme","aria-hidden":"true"})," "]}),Object(m.jsxs)("a",{className:"text-decoration-none px-2",href:"https://linkedin.com",rel:"noopener noreferrer",target:"_blank",children:[Object(m.jsx)("i",{className:"fa fa-linkedin text-asme","aria-hidden":"true"})," "]}),Object(m.jsxs)("a",{className:"text-decoration-none px-2",href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",children:[Object(m.jsx)("i",{className:"fa fa-youtube text-asme","aria-hidden":"true"})," "]})]}),Object(m.jsx)("div",{className:"h3",children:Object(m.jsx)("a",{className:"text-decoration-none px-2 text-asme nexa lead",href:"https://github.com/GustavoDextre",target:"_blank",rel:"noopener noreferrer",children:"@GADZPeru"})}),Object(m.jsx)("div",{className:"font-futura text-asme",children:"Ubicaci\xf3n: Av. T\xfapac Amaru 210 - R\xedmac. Apartado 1301"}),Object(m.jsx)("div",{className:"font-futura text-secondary mt-2",children:"\xa9 GADZPeru - Todos los derechos reservados"})]})})})}}]),a}(n.Component),P=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"styleOne",value:function(){return{marginTop:"30px"}}},{key:"stylePhotoPumii",value:function(){return{height:"200px",width:"200px"}}},{key:"stylePhotoTeamPumii",value:function(){return{height:"20%",width:"100%"}}},{key:"stylePhotoERC",value:function(){return{width:"50%"}}},{key:"stylePhotoHistoria",value:function(){return{width:"100%"}}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"m-0 p-0",children:[Object(m.jsx)(x,{}),Object(m.jsx)(k,{}),Object(m.jsx)("div",{className:"container-fluid alineadoretos",style:this.styleOne(),children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"container-fluid col-lg-6 py-5 text-white texto-centrado",children:Object(m.jsx)("p",{className:"h5 font-futura nexa",children:"Keiko Sof\xeda Fujimori Higuchi naci\xf3 el 25 de mayo de 1975 en el distrito de Jes\xfas Mar\xeda de Lima, la capital del Per\xfa.5\u200b3\u200b Es la hija mayor de Alberto Fujimori y Susana Higuchi, ambos descendientes de inmigrantes japoneses.5\u200b1\u200b Adem\xe1s de ella, sus padres tuvieron otros tres hijos: Hiro Alberto (nacido en diciembre de 1976), Sachi Marcela (nacida en marzo de 1979) y Kenji Gerardo (nacido en mayo de 1980).6\u200b Keiko y sus hermanos estudiaron en el colegio Sagrados Corazones Recoleta, una instituci\xf3n educativa privada administrada por la Iglesia Cat\xf3lica. En esta escuela, asisti\xf3 a la educaci\xf3n primaria y secundaria."})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"container-fluid col-lg-6 py-5 imageERC text-center",children:Object(m.jsx)("img",{src:f,style:this.stylePhotoHistoria(),alt:"Foto Logo ERC"})}),Object(m.jsx)("br",{})]})}),Object(m.jsx)("div",{className:"container-fluid bg-white alineadoretos",style:this.styleOne(),children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-lg-6",children:Object(m.jsx)("p",{className:"h5 text-asme font-futura rellenotres",children:"Pedro Castillo naci\xf3 el 19 de octubre de 1969 en el poblado de Pu\xf1a, distrito de Tacabamba, provincia de Chota en la regi\xf3n Cajamarca,5\u200b es el tercero de nueve hermanos, hijos de Ire\xf1o Castillo N\xfa\xf1ez y Mavila Terrones Guevara. Curs\xf3 sus primeros estudios del 1\xb0 al 3\xb0 grado, en la Escuela Rural N\xb0 10465 de Pu\xf1a y concluy\xf3 sus estudios primarios en la escuela rural vecina n.\xb0 10475 del caser\xedo de Chugur en el distrito de Angu\xeda, en la misma provincia de Chota."})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"container col-lg-6 py-5 text-center",children:Object(m.jsx)("img",{src:v,style:this.stylePhotoHistoria(),alt:"Foto entrada"})}),Object(m.jsx)("br",{})]})}),Object(m.jsx)("div",{className:"container-fluid bg-light py-2 m-0 alineadoretos",children:Object(m.jsxs)("div",{className:"col-md-12 text-center",children:[Object(m.jsx)("div",{className:"h1 font-weight-bolder nexa mb-0 py-3",children:"PATROCINADORES"}),Object(m.jsx)("div",{className:"row justify-content-center px-2 py-3",children:Object(m.jsx)("div",{className:"col-md-4 py-3 ",children:Object(m.jsx)("img",{className:"logouni",src:C,alt:"Foto UNI"})})})]})}),Object(m.jsx)(I,{})]})}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"fondoprincipal",children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:"/",exact:!0,component:P}),Object(m.jsx)(b.b,{path:"/login",exact:!0,component:O}),Object(m.jsx)(b.b,{path:"/registrar",component:p}),Object(m.jsx)(b.b,{path:"/resultados",component:w(N)}),Object(m.jsx)(b.b,{path:"/votolive",component:w(g)})]})})}}]),a}(n.Component),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(S,{})})}),document.getElementById("root")),E()}},[[40,1,2]]]);
//# sourceMappingURL=main.9a5f48f0.chunk.js.map