(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{369:function(t,e,n){"use strict";var i={name:"XwLine",mixins:[n(305).a],props:{name:{type:String,required:!0,default:function(){return"AreaLine"}},xData:{type:Array,default:function(){return[]}},yData:{type:Array,default:function(){return[]}},points:{type:Array,default:function(){return[]}}}},a=n(40),o=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{width:this.width,height:this.height}})}),[],!1,null,null,null);e.a=o.exports},946:function(t,e,n){"use strict";n.r(e);var i={components:{XwLine:n(369).a},data:function(){return{name:"MultiLine",options:{xAxis:{axisLine:{show:!0,lineStyle:{type:"solid",color:"#59a7ff",width:2}},axisLabel:{show:!0,fontSize:13,color:"#59a7ff",rotate:30},splitLine:{show:!0}},yAxis:{axisLine:{show:!0,lineStyle:{type:"solid",color:"#59a7ff",width:2}},axisLabel:{show:!0,fontSize:13,color:"#59a7ff",rotate:12},splitLine:{show:!0}},legend:{right:"center",orient:"horizontal"},grid:{top:"20%",left:"3%",right:"3%",bottom:"15%",containLabel:!0},axisStyle:{color:"#59a7ff"},color:["#e83828","#31b4a7","#f8b62d","#c79f62","#c79f62","#c79f62","#c79f62","#c79f62"]},xData:["9-1","9-2","9-3","9-4","9-5","9-6","9-7","9-8","9-9"],yData:[[120,200,150,80,70,110,130,12,123],[20,20,50,10,70,10,30,12,123]],points:[[{name:"",type:"min"}],[{name:"",type:"max"}]],yLengend:["总量","省内"],unit:"人"}}},a=n(40),o=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",height:"400px","background-color":"#0b204f"}},[e("xw-line",{attrs:{name:this.name,options:this.options,xData:this.xData,yData:this.yData,unit:this.unit,points:this.points,yLengend:this.yLengend}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);