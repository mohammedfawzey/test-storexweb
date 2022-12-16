"use strict";(self["webpackChunkstorexweb"]=self["webpackChunkstorexweb"]||[]).push([[529],{5528:function(t,i,s){s.r(i),s.d(i,{default:function(){return m}});var e=s(9582),r=s(5495),a=s(5200),n=function(){var t=this,i=t._self._c;return i(e.Z,{staticClass:"pa-2"},[i("div",{staticClass:"text-body-1"},[t._v("movie id :"+t._s(t.item.id))]),i(r.Z,{staticStyle:{cursor:"pointer"},attrs:{src:t.C_imageLink,height:"180"},on:{click:t.redirectToMovie}}),i(a.V9,{staticClass:"text-body-2",staticStyle:{cursor:"pointer"},on:{click:t.redirectToMovie}},[t._v(" "+t._s(t.item.name)+" ")]),i("div",{staticClass:"text-caption"},[t._v(t._s(t.item.description))])],1)},o=[],c=(s(7658),{data:()=>({url:"https://test-api.storexweb.com/"}),computed:{C_imageLink(){return`${this.url}/${this.item.image}`}},props:["item"],methods:{redirectToMovie(){this.$router.push({path:`/movies/${this.item.id}`})}}}),h=c,l=s(1001),d=(0,l.Z)(h,n,o,!1,null,"556e1c55",null),m=d.exports},5495:function(t,i,s){s.d(i,{Z:function(){return g}});s(7658);var e=s(6750),r=s(8846),a=s(7678),n=s(5352),o=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,n.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,h=s(6669),l=s(1767),d=s(4101);const m="undefined"!==typeof window&&"IntersectionObserver"in window;var g=(0,a.Z)(c,h.Z).extend({name:"v-img",directives:{intersect:e.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),i&&t.push(`url("${i}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,i,s){if(!m||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,i=100){const s=()=>{const{naturalHeight:e,naturalWidth:r}=t;e||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/e):t.complete||!this.isLoading||this.hasError||null==i||setTimeout(s,i)};s()},genContent(){const t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,n.z9)(this,"placeholder");if(t){const i=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},i):i[0]}}},render(t){const i=c.options.render.call(this,t),s=(0,l.ZP)(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:m?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,s,i.children)}})}}]);
//# sourceMappingURL=529.5044669c.js.map