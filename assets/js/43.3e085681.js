(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{346:function(t,e,n){"use strict";n(304);var i={name:"XwFunnel",mixins:[n(305).a],props:{name:{type:String,required:!0,default:function(){return"Funnel"}},seriesData:{type:Array,default:function(){return[]}},gap:{type:Number,default:2},sort:{type:String,default:"ascending"},tooltipShow:{type:Boolean,default:!0}}},a=n(40),o=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{width:this.width,height:this.height}})}),[],!1,null,null,null);e.a=o.exports},941:function(t,e,n){"use strict";n.r(e);var i={components:{XwFunnel:n(346).a},data:function(){return{name:"Funnel",seriesData:[{name:"访问",value:20},{name:"咨询",value:40},{value:60,name:"点击"}],options:{color:["#e83828","#31b4a7","#f8b62d","#c79f62","#c79f62","#c79f62","#c79f62","#c79f62"],tooltip:{formatter:"{b} : {c}%",trigger:"item"}},tooltipShow:!1}}},a=n(40),o=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",height:"300px"}},[e("xw-funnel",{attrs:{name:this.name,seriesData:this.seriesData,options:this.options,tooltipShow:this.tooltipShow}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);