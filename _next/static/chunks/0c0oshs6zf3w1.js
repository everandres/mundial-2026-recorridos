(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,35277,e=>{"use strict";let t,i,r,n,s,o,a,l;var c,u,h,d,p,f,g,m,v=e.i(43476),_=e.i(71645);let y=_.createContext(null);function b(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!b(e[i],t[i]))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){let i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(let r of i)if(!t.hasOwnProperty(r)||!b(e[r],t[r]))return!1;return!0}return!1}function w(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function x(e,t){let i=t.viewState||t,r={};return"longitude"in i&&"latitude"in i&&(i.longitude!==e.center.lng||i.latitude!==e.center.lat)&&(r.center=new e.center.constructor(i.longitude,i.latitude)),"zoom"in i&&i.zoom!==e.zoom&&(r.zoom=i.zoom),"bearing"in i&&i.bearing!==e.bearing&&(r.bearing=i.bearing),"pitch"in i&&i.pitch!==e.pitch&&(r.pitch=i.pitch),i.padding&&e.padding&&!b(i.padding,e.padding)&&(r.padding=i.padding),r}let P=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function C(e){if(!e)return null;if("string"==typeof e||("toJS"in e&&(e=e.toJS()),!e.layers))return e;let t={};for(let i of e.layers)t[i.id]=i;let i=e.layers.map(e=>{let i=null;"interactive"in e&&(i=Object.assign({},e),delete i.interactive);let r=t[e.ref];if(r)for(let t of(i=i||Object.assign({},e),delete i.ref,P))t in r&&(i[t]=r[t]);return i||e});return{...e,layers:i}}let M={version:8,sources:{},layers:[]},E={minZoom:0,maxZoom:22,minPitch:0,maxPitch:85,maxBounds:[-180,-85.051129,180,85.051129],projection:"mercator",renderWorldCopies:!0},S={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},L={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},A={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},T=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],R=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class O{constructor(e,t,i){this._map=null,this._internalUpdate=!1,this._hoveredFeatures=null,this._propsedCameraUpdate=null,this._styleComponents={},this._onEvent=e=>{let t=this.props[A[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onCameraEvent=e=>{if(this._internalUpdate)return;e.viewState=this._propsedCameraUpdate||w(this._map.transform);let t=this.props[L[e.type]];t&&t(e)},this._onCameraUpdate=e=>this._internalUpdate?e:(this._propsedCameraUpdate=w(e),x(e,this.props)),this._onPointerEvent=e=>{("mousemove"===e.type||"mouseout"===e.type)&&this._updateHover(e);let t=this.props[S[e.type]];t&&(this.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=this._hoveredFeatures||this._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._MapClass=e,this.props=t,this._initialize(i)}get map(){return this._map}setProps(e){let t=this.props;this.props=e;let i=this._updateSettings(e,t),r=this._updateSize(e),n=this._updateViewState(e);this._updateStyle(e,t),this._updateStyleComponents(e),this._updateHandlers(e,t),(i||r||n&&!this._map.isMoving())&&this.redraw()}static reuse(e,t){let i=O.savedMaps.pop();if(!i)return null;let r=i.map,n=r.getContainer();for(t.className=n.className;n.childNodes.length>0;)t.appendChild(n.childNodes[0]);r._container=t;let s=r._resizeObserver;s&&(s.disconnect(),s.observe(t)),i.setProps({...e,styleDiffing:!1}),r.resize();let{initialViewState:o}=e;return o&&(o.bounds?r.fitBounds(o.bounds,{...o.fitBoundsOptions,duration:0}):i._updateViewState(o)),r.isStyleLoaded()?r.fire("load"):r.once("style.load",()=>r.fire("load")),r._update(),i}_initialize(e){let{props:t}=this,{mapStyle:i=M}=t,r={...t,...t.initialViewState,container:e,style:C(i)},n=r.initialViewState||r.viewState||r;if(Object.assign(r,{center:[n.longitude||0,n.latitude||0],zoom:n.zoom||0,pitch:n.pitch||0,bearing:n.bearing||0}),t.gl){let e=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=e,t.gl)}let s=new this._MapClass(r);for(let e in n.padding&&s.setPadding(n.padding),t.cursor&&(s.getCanvas().style.cursor=t.cursor),s.transformCameraUpdate=this._onCameraUpdate,s.on("style.load",()=>{this._styleComponents={light:s.getLight(),sky:s.getSky(),projection:s.getProjection?.(),terrain:s.getTerrain()},this._updateStyleComponents(this.props)}),s.on("sourcedata",()=>{this._updateStyleComponents(this.props)}),S)s.on(e,this._onPointerEvent);for(let e in L)s.on(e,this._onCameraEvent);for(let e in A)s.on(e,this._onEvent);this._map=s}recycle(){let e=this.map.getContainer().querySelector("[mapboxgl-children]");e?.remove(),O.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){let e=this._map;e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_updateSize(e){let{viewState:t}=e;if(t){let e=this._map;if(t.width!==e.transform.width||t.height!==e.transform.height)return e.resize(),!0}return!1}_updateViewState(e){let t=this._map,i=t.transform;if(!t.isMoving()){let r=x(i,e);if(Object.keys(r).length>0)return this._internalUpdate=!0,t.jumpTo(r),this._internalUpdate=!1,!0}return!1}_updateSettings(e,t){let i=this._map,r=!1;for(let n of T)if((n in e||n in t)&&!b(e[n],t[n])){r=!0;let t=n in e?e[n]:E[n],s=i[`set${n[0].toUpperCase()}${n.slice(1)}`];s?.call(i,t)}return r}_updateStyle(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==t.mapStyle){let{mapStyle:t=M,styleDiffing:i=!0}=e,r={diff:i};"localIdeographFontFamily"in e&&(r.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(C(t),r)}}_updateStyleComponents({light:e,projection:t,sky:i,terrain:r}){let n=this._map,s=this._styleComponents;n.style?._loaded&&(e&&!b(e,s.light)&&(s.light=e,n.setLight(e)),t&&!b(t,s.projection)&&t!==s.projection?.type&&(s.projection="string"==typeof t?{type:t}:t,n.setProjection?.(s.projection)),i&&!b(i,s.sky)&&(s.sky=i,n.setSky(i)),void 0!==r&&!b(r,s.terrain)&&(!r||n.getSource(r.source))&&(s.terrain=r,n.setTerrain(r)))}_updateHandlers(e,t){let i=this._map;for(let r of R){let n=e[r]??!0;b(n,t[r]??!0)||(n?i[r].enable(n):i[r].disable())}}_queryRenderedFeatures(e){let t=this._map,{interactiveLayerIds:i=[]}=this.props;try{return t.queryRenderedFeatures(e,{layers:i.filter(t.getLayer.bind(t))})}catch{return[]}}_updateHover(e){let{props:t}=this;if(t.interactiveLayerIds&&(t.onMouseMove||t.onMouseEnter||t.onMouseLeave)){let t=e.type,i=this._hoveredFeatures?.length>0,r=this._queryRenderedFeatures(e.point),n=r.length>0;!n&&i&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=r,n&&!i&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=t}else this._hoveredFeatures=null}}O.savedMaps=[];let k=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"],I="u">typeof document?_.useLayoutEffect:_.useEffect,z=_.createContext(null),j=_.forwardRef(function(t,i){let r=(0,_.useContext)(y),[n,s]=(0,_.useState)(null),o=(0,_.useRef)(),{current:a}=(0,_.useRef)({mapLib:null,map:null});(0,_.useEffect)(()=>{let i,n=t.mapLib,l=!0;return Promise.resolve(n||e.A(53102)).then(e=>{if(!l)return;if(!e)throw Error("Invalid mapLib");let n="Map"in e?e:e.default;if(!n.Map)throw Error("Invalid mapLib");!function(e,t){let{RTLTextPlugin:i,maxParallelImageRequests:r,workerCount:n,workerUrl:s}=t;if(i&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()){let{pluginUrl:t,lazy:r=!0}="string"==typeof i?{pluginUrl:i}:i;e.setRTLTextPlugin(t,e=>{e&&console.error(e)},r)}void 0!==r&&e.setMaxParallelImageRequests(r),void 0!==n&&e.setWorkerCount(n),void 0!==s&&e.setWorkerUrl(s)}(n,t),t.reuseMaps&&(i=O.reuse(t,o.current)),i||(i=new O(n.Map,t,o.current)),a.map=function(e){if(!e)return null;let t=e.map,i={getMap:()=>t};for(let e of function(e){let t=new Set,i=e;for(;i;){for(let r of Object.getOwnPropertyNames(i))"_"!==r[0]&&"function"==typeof e[r]&&"fire"!==r&&"setEventedParent"!==r&&t.add(r);i=Object.getPrototypeOf(i)}return Array.from(t)}(t))e in i||k.includes(e)||(i[e]=t[e].bind(t));return i}(i),a.mapLib=n,s(i),r?.onMapMount(a.map,t.id)}).catch(e=>{let{onError:i}=t;i?i({type:"error",target:null,originalEvent:null,error:e}):console.error(e)}),()=>{l=!1,i&&(r?.onMapUnmount(t.id),t.reuseMaps?i.recycle():i.destroy())}},[]),I(()=>{n&&n.setProps(t)}),(0,_.useImperativeHandle)(i,()=>a.map,[n]);let l=(0,_.useMemo)(()=>({position:"relative",width:"100%",height:"100%",...t.style}),[t.style]);return _.createElement("div",{id:t.id,ref:o,style:l},n&&_.createElement(z.Provider,{value:a},_.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},t.children)))});var D=e.i(74080);let F=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function N(e,t){if(!e||!t)return;let i=e.style;for(let e in t){let r=t[e];Number.isFinite(r)&&!F.test(e)?i[e]=`${r}px`:i[e]=r}}function U(e,t){if(e===t)return null;let i=B(e),r=B(t),n=[];for(let e of r)i.has(e)||n.push(e);for(let e of i)r.has(e)||n.push(e);return 0===n.length?null:n}function B(e){return new Set(e?e.trim().split(/\s+/):[])}function $(e,t,i,r){let n=(0,_.useContext)(z),s=(0,_.useMemo)(()=>e(n),[]);return(0,_.useEffect)(()=>{let e="function"==typeof t&&"function"==typeof i?t:null,o="function"==typeof i?i:"function"==typeof t?t:null,{map:a}=n;return!a.hasControl(s)&&(a.addControl(s,(r||i||t)?.position),e&&e(n)),()=>{o&&o(n),a.hasControl(s)&&a.removeControl(s)}},[]),s}(0,_.memo)((0,_.forwardRef)((e,t)=>{var i;let r,n,s,o,{map:a,mapLib:l}=(0,_.useContext)(z),c=(0,_.useRef)({props:e}),u=(0,_.useMemo)(()=>{let t=!1;_.Children.forEach(e.children,e=>{e&&(t=!0)});let i={...e,element:t?document.createElement("div"):void 0},r=new l.Marker(i);return r.setLngLat([e.longitude,e.latitude]),r.getElement().addEventListener("click",e=>{c.current.props.onClick?.({type:"click",target:r,originalEvent:e})}),r.on("dragstart",e=>{e.lngLat=u.getLngLat(),c.current.props.onDragStart?.(e)}),r.on("drag",e=>{e.lngLat=u.getLngLat(),c.current.props.onDrag?.(e)}),r.on("dragend",e=>{e.lngLat=u.getLngLat(),c.current.props.onDragEnd?.(e)}),r},[]);(0,_.useEffect)(()=>(u.addTo(a.getMap()),()=>{u.remove()}),[]);let{longitude:h,latitude:d,offset:p,style:f,draggable:g=!1,popup:m=null,rotation:v=0,rotationAlignment:y="auto",pitchAlignment:b="auto"}=e;(0,_.useEffect)(()=>{N(u.getElement(),f)},[f]),(0,_.useImperativeHandle)(t,()=>u,[]);let w=c.current.props;(u.getLngLat().lng!==h||u.getLngLat().lat!==d)&&u.setLngLat([h,d]),p&&(i=u.getOffset(),r=Array.isArray(i)?i[0]:i?i.x:0,n=Array.isArray(i)?i[1]:i?i.y:0,s=Array.isArray(p)?p[0]:p?p.x:0,o=Array.isArray(p)?p[1]:p?p.y:0,r!==s||n!==o)&&u.setOffset(p),u.isDraggable()!==g&&u.setDraggable(g),u.getRotation()!==v&&u.setRotation(v),u.getRotationAlignment()!==y&&u.setRotationAlignment(y),u.getPitchAlignment()!==b&&u.setPitchAlignment(b),u.getPopup()!==m&&u.setPopup(m);let x=U(w.className,e.className);if(x)for(let e of x)u.toggleClassName(e);return c.current.props=e,(0,D.createPortal)(e.children,u.getElement())})),(0,_.memo)((0,_.forwardRef)((e,t)=>{let{map:i,mapLib:r}=(0,_.useContext)(z),n=(0,_.useMemo)(()=>document.createElement("div"),[]),s=(0,_.useRef)({props:e}),o=(0,_.useMemo)(()=>{let t={...e},i=new r.Popup(t);return i.setLngLat([e.longitude,e.latitude]),i.once("open",e=>{s.current.props.onOpen?.(e)}),i},[]);if((0,_.useEffect)(()=>{let e=e=>{s.current.props.onClose?.(e)};return o.on("close",e),o.setDOMContent(n).addTo(i.getMap()),()=>{o.off("close",e),o.isOpen()&&o.remove()}},[]),(0,_.useEffect)(()=>{N(o.getElement(),e.style)},[e.style]),(0,_.useImperativeHandle)(t,()=>o,[]),o.isOpen()){let t=s.current.props;(o.getLngLat().lng!==e.longitude||o.getLngLat().lat!==e.latitude)&&o.setLngLat([e.longitude,e.latitude]),e.offset&&!b(t.offset,e.offset)&&o.setOffset(e.offset),(t.anchor!==e.anchor||t.maxWidth!==e.maxWidth)&&(o.options.anchor=e.anchor,o.setMaxWidth(e.maxWidth));let i=U(t.className,e.className);if(i)for(let e of i)o.toggleClassName(e);s.current.props=e}return(0,D.createPortal)(e.children,n)})),(0,_.memo)(function(e){let t=$(({mapLib:t})=>new t.AttributionControl(e),{position:e.position});return(0,_.useEffect)(()=>{N(t._container,e.style)},[e.style]),null}),(0,_.memo)(function(e){let t=$(({mapLib:t})=>new t.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)}),{position:e.position});return(0,_.useEffect)(()=>{N(t._controlContainer,e.style)},[e.style]),null}),(0,_.memo)((0,_.forwardRef)(function(e,t){let i=(0,_.useRef)({props:e}),r=$(({mapLib:t})=>{let r=new t.GeolocateControl(e),n=r._setupUI;return r._setupUI=()=>{r._container.hasChildNodes()||n()},r.on("geolocate",e=>{i.current.props.onGeolocate?.(e)}),r.on("error",e=>{i.current.props.onError?.(e)}),r.on("outofmaxbounds",e=>{i.current.props.onOutOfMaxBounds?.(e)}),r.on("trackuserlocationstart",e=>{i.current.props.onTrackUserLocationStart?.(e)}),r.on("trackuserlocationend",e=>{i.current.props.onTrackUserLocationEnd?.(e)}),r},{position:e.position});return i.current.props=e,(0,_.useImperativeHandle)(t,()=>r,[]),(0,_.useEffect)(()=>{N(r._container,e.style)},[e.style]),null})),(0,_.memo)(function(e){let t=$(({mapLib:t})=>new t.NavigationControl(e),{position:e.position});return(0,_.useEffect)(()=>{N(t._container,e.style)},[e.style]),null}),(0,_.memo)(function(e){let t=$(({mapLib:t})=>new t.ScaleControl(e),{position:e.position}),i=(0,_.useRef)(e),r=i.current;i.current=e;let{style:n}=e;return void 0!==e.maxWidth&&e.maxWidth!==r.maxWidth&&(t.options.maxWidth=e.maxWidth),void 0!==e.unit&&e.unit!==r.unit&&t.setUnit(e.unit),(0,_.useEffect)(()=>{N(t._container,n)},[n]),null}),(0,_.memo)(function(e){let t=$(({mapLib:t})=>new t.TerrainControl(e),{position:e.position});return(0,_.useEffect)(()=>{N(t._container,e.style)},[e.style]),null}),(0,_.memo)(function(e){let t=$(({mapLib:t})=>new t.LogoControl(e),{position:e.position});return(0,_.useEffect)(()=>{N(t._container,e.style)},[e.style]),null});let V=1,W=1;class G{time=0;channels=new Map;animations=new Map;playing=!1;lastEngineTime=-1;addChannel(e){let{delay:t=0,duration:i=1/0,rate:r=1,repeat:n=1}=e,s=V++,o={time:0,delay:t,duration:i,rate:r,repeat:n};return this._setChannelTime(o,this.time),this.channels.set(s,o),s}removeChannel(e){for(let[t,i]of(this.channels.delete(e),this.animations))i.channel===e&&this.detachAnimation(t)}isFinished(e){let t=this.channels.get(e);return void 0!==t&&this.time>=t.delay+t.duration*t.repeat}getTime(e){if(void 0===e)return this.time;let t=this.channels.get(e);return void 0===t?-1:t.time}setTime(e){for(let t of(this.time=Math.max(0,e),this.channels.values()))this._setChannelTime(t,this.time);for(let e of this.animations.values()){let{animation:t,channel:i}=e;t.setTime(this.getTime(i))}}play(){this.playing=!0}pause(){this.playing=!1,this.lastEngineTime=-1}reset(){this.setTime(0)}attachAnimation(e,t){let i=W++;return this.animations.set(i,{animation:e,channel:t}),e.setTime(this.getTime(t)),i}detachAnimation(e){this.animations.delete(e)}update(e){this.playing&&(-1===this.lastEngineTime&&(this.lastEngineTime=e),this.setTime(this.time+(e-this.lastEngineTime)),this.lastEngineTime=e)}_setChannelTime(e,t){let i=t-e.delay;i>=e.duration*e.repeat?e.time=e.duration*e.rate:(e.time=Math.max(0,i)%e.duration,e.time*=e.rate)}}let H={number:{type:"number",validate:(e,t)=>Number.isFinite(e)&&"object"==typeof t&&(void 0===t.max||e<=t.max)&&(void 0===t.min||e>=t.min)},array:{type:"array",validate:(e,t)=>Array.isArray(e)||ArrayBuffer.isView(e)}};function q(e){return Array.isArray(e)||ArrayBuffer.isView(e)?"array":typeof e}let Z={vertex:`\
#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,fragment:`\
#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`},Y=/void\s+main\s*\([^)]*\)\s*\{\n?/,K=/}\n?[^{}]*$/,X=[],J="__LUMA_INJECT_DECLARATIONS__";function Q(e,t,i,r=!1){let n="vertex"===t;for(let t in i){let r=i[t];r.sort((e,t)=>e.order-t.order),X.length=r.length;for(let e=0,t=r.length;e<t;++e)X[e]=r[e].injection;let s=`${X.join("\n")}
`;switch(t){case"vs:#decl":n&&(e=e.replace(J,s));break;case"vs:#main-start":n&&(e=e.replace(Y,e=>e+s));break;case"vs:#main-end":n&&(e=e.replace(K,e=>s+e));break;case"fs:#decl":n||(e=e.replace(J,s));break;case"fs:#main-start":n||(e=e.replace(Y,e=>e+s));break;case"fs:#main-end":n||(e=e.replace(K,e=>s+e));break;default:e=e.replace(t,e=>e+s)}}return e=e.replace(J,""),r&&(e=e.replace(/\}\s*$/,e=>e+Z[t])),e}function ee(e){e.map(e=>(function(e){var t;if(e.instance)return;ee(e.dependencies||[]);let{propTypes:i={},deprecations:r=[],inject:n={}}=e,s={normalizedInjections:function(e){let t={vertex:{},fragment:{}};for(let i in e){let r=e[i];"string"==typeof r&&(r={order:0,injection:r}),t[function(e){let t=e.slice(0,2);switch(t){case"vs":return"vertex";case"fs":return"fragment";default:throw Error(t)}}(i)][i]=r}return t}(n),parsedDeprecations:((t=r).forEach(e=>{"function"===e.type?e.regex=RegExp(`\\b${e.old}\\(`):e.regex=RegExp(`${e.type} ${e.old};`)}),t)};i&&(s.propValidators=function(e){let t={};for(let[i,r]of Object.entries(e))t[i]=function(e){let t=q(e);if("object"!==t)return{value:e,...H[t],type:t};if("object"==typeof e)return e?void 0!==e.type?{...e,...H[e.type],type:e.type}:void 0===e.value?{type:"object",value:e}:(t=q(e.value),{...e,...H[t],type:t}):{type:"object",value:null};throw Error("props")}(r);return t}(i)),e.instance=s;let o={};i&&(o=Object.entries(i).reduce((e,[t,i])=>{let r=i?.value;return r&&(e[t]=r),e},{})),e.defaultUniforms={...e.defaultUniforms,...o}})(e))}function et(e,t,i){e.deprecations?.forEach(e=>{e.regex?.test(t)&&(e.deprecated?i.deprecated(e.old,e.new)():i.removed(e.old,e.new)())})}function ei(e){ee(e);let t={},i={};!function e(t){let{modules:i,level:r,moduleMap:n,moduleDepth:s}=t;if(r>=5)throw Error("Possible loop in shader dependency graph");for(let e of i)n[e.name]=e,(void 0===s[e.name]||s[e.name]<r)&&(s[e.name]=r);for(let t of i)t.dependencies&&e({modules:t.dependencies,level:r+1,moduleMap:n,moduleDepth:s})}({modules:e,level:0,moduleMap:t,moduleDepth:i});let r=Object.keys(i).sort((e,t)=>i[t]-i[e]).map(e=>t[e]);return ee(r),r}let er=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,"#version 300 es\n"],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,"textureLod("],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,"texture("]],en=[...er,[ea("attribute"),"in $1"],[ea("varying"),"out $1"]],es=[...er,[ea("varying"),"in $1"]];function eo(e,t){for(let[i,r]of t)e=e.replace(i,r);return e}function ea(e){return RegExp(`\\b${e}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,"g")}function el(e,t){if(!e){let e=Error(t||"shadertools: assertion failed.");throw Error.captureStackTrace?.(e,el),e}}let ec=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,eu=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;function eh(e){return`${e.name}Uniforms`}function ed(e){let t=[];for(let i of e.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*$/gm,"").matchAll(eu)){let e=i[1]?.trim()||null;t.push({blockName:i[2],body:i[3],instanceName:i[4]||null,layoutQualifier:e,hasLayoutQualifier:!!e,isStd140:!!(e&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(e))})}return t}function ep(e,t=8){if(e.length<=t)return e.join(", ");let i=e.length-t;return`${e.slice(0,t).join(", ")}, ... (${i} more)`}function ef(e,t){let i="";for(let r in e){let n=e[r];if(i+=`void ${n.signature} {
`,n.header&&(i+=`  ${n.header}`),t[r]){let e=t[r];for(let t of(e.sort((e,t)=>e.order-t.order),e))i+=`  ${t.injection}
`}n.footer&&(i+=`  ${n.footer}`),i+="}\n"}return i}function eg(e){let t={vertex:{},fragment:{}};for(let i of e){let e,r;"string"!=typeof i?r=(e=i).hook:(e={},r=i);let[n,s]=(r=r.trim()).split(":"),o=r.replace(/\(.+/,""),a=Object.assign(e,{signature:s});switch(n){case"vs":t.vertex[o]=a;break;case"fs":t.fragment[o]=a;break;default:throw Error(n)}}return t}let em="(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)",ev=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${em}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*${em}`,"g")],e_=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${em}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*${em}`,"g")],ey=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${em}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${em}`,"g")],eb=[RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${em}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${em}`,"g"),RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${em}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${em}`,"g")];function ew(e){let t=e.split(""),i=0,r=0,n=!1,s=!1,o=!1;for(;i<e.length;){let a=e[i],l=e[i+1];if(s){o?o=!1:"\\"===a?o=!0:'"'===a&&(s=!1),i++;continue}if(n){"\n"===a||"\r"===a?n=!1:t[i]=" ",i++;continue}if(r>0){if("/"===a&&"*"===l){t[i]=" ",t[i+1]=" ",r++,i+=2;continue}if("*"===a&&"/"===l){t[i]=" ",t[i+1]=" ",r--,i+=2;continue}"\n"!==a&&"\r"!==a&&(t[i]=" "),i++;continue}if('"'===a){s=!0,i++;continue}if("/"===a&&"/"===l){t[i]=" ",t[i+1]=" ",n=!0,i+=2;continue}if("/"===a&&"*"===l){t[i]=" ",t[i+1]=" ",r=1,i+=2;continue}i++}return t.join("")}function ex(e,t){let i=ew(e),r=[];for(let n of t){let s;for(n.lastIndex=0,s=n.exec(i);s;){let o=n===t[0],a=s.index,l=s[0].length;r.push({match:e.slice(a,a+l),index:a,length:l,bindingToken:s[o?1:2],groupToken:s[o?2:1],accessDeclaration:s[3]?.trim(),name:s[4]}),s=n.exec(i)}}return r.sort((e,t)=>e.index-t.index)}function eP(e,t,i){let r=ex(e,t);if(!r.length)return e;let n="",s=0;for(let t of r)n+=e.slice(s,t.index),n+=i(t),s=t.index+t.length;return n+e.slice(s)}function eC(e){return/@binding\(\s*auto\s*\)/.test(ew(e))}let eM=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${em}\\s*:\\s*([^;]+);`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${em}\\s*:\\s*([^;]+);`,"g")];function eE(e,t=[]){let i=ew(e),r=new Map;for(let e of t)r.set(eS(e.name,e.group,e.location),e.moduleName);let n=[];for(let e of eM){let t;for(e.lastIndex=0,t=e.exec(i);t;){let s=e===eM[0],o=Number(t[s?1:2]),a=Number(t[s?2:1]),l=t[3]?.trim(),c=t[4],u=t[5].trim(),h=r.get(eS(c,a,o));n.push(function(e){var t;let i={name:e.name,group:e.group,binding:e.binding,owner:e.owner,kind:"unknown",moduleName:e.moduleName,resourceType:e.resourceType};if(e.accessDeclaration){let t=e.accessDeclaration.split(",").map(e=>e.trim());if("uniform"===t[0])return{...i,kind:"uniform",access:"uniform"};if("storage"===t[0]){let e=t[1]||"read_write";return{...i,kind:"read"===e?"read-only-storage":"storage",access:e}}}return"sampler"===e.resourceType||"sampler_comparison"===e.resourceType?{...i,kind:"sampler",samplerKind:"sampler_comparison"===e.resourceType?"comparison":"filtering"}:e.resourceType.startsWith("texture_storage_")?{...i,kind:"storage-texture",access:function(e){let t=/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(e);return t?.[1]}(e.resourceType),viewDimension:eL(e.resourceType)}:e.resourceType.startsWith("texture_")?{...i,kind:"texture",viewDimension:eL(e.resourceType),sampleType:(t=e.resourceType).startsWith("texture_depth_")?"depth":t.includes("<i32>")?"sint":t.includes("<u32>")?"uint":t.includes("<f32>")?"float":void 0,multisampled:e.resourceType.startsWith("texture_multisampled_")}:i}({name:c,group:a,binding:o,owner:h?"module":"application",moduleName:h,accessDeclaration:l,resourceType:u})),t=e.exec(i)}}return n.sort((e,t)=>e.group!==t.group?e.group-t.group:e.binding!==t.binding?e.binding-t.binding:e.name.localeCompare(t.name))}function eS(e,t,i){return`${t}:${i}:${e}`}function eL(e){return e.includes("cube_array")?"cube-array":e.includes("2d_array")?"2d-array":e.includes("cube")?"cube":e.includes("3d")?"3d":e.includes("2d")?"2d":e.includes("1d")?"1d":void 0}let eA=`

${J}
`,eT=`\
precision highp float;
`;function eR(e,t){let{source:i,stage:r,language:n="glsl",modules:s,defines:o={},hookFunctions:a=[],inject:l={},prologue:c=!0,log:u}=t;el("string"==typeof i,"shader source must be a string");let h="glsl"===n?({name:function(e,t="unnamed"){let i=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(e);return i?i[1]:t}(i,void 0),language:"glsl",version:function(e){let t=100,i=e.match(/[^\s]+/g);if(i&&i.length>=2&&"#version"===i[0]){let e=parseInt(i[1],10);Number.isFinite(e)&&(t=e)}if(100!==t&&300!==t)throw Error(`Invalid GLSL version ${t}`);return t}(i)}).version:-1,d=e.shaderLanguageVersion,p=100===h?"#version 100":"#version 300 es",f=i.split("\n").slice(1).join("\n"),g={};s.forEach(e=>{Object.assign(g,e.defines)}),Object.assign(g,o);let m="";switch(n){case"wgsl":break;case"glsl":m=c?`\
${p}

// ----- PROLOGUE -------------------------
#define SHADER_TYPE_${r.toUpperCase()}

${function(e){switch(e?.gpu.toLowerCase()){case"apple":return`\
#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"nvidia":return`\
#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case"intel":return`\
#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"amd":return`\
#define AMD_GPU
`;default:return`\
#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}(e)}
${"fragment"===r?eT:""}

// ----- APPLICATION DEFINES -------------------------

${function(e={}){let t="";for(let i in e){let r=e[i];(r||Number.isFinite(r))&&(t+=`#define ${i.toUpperCase()} ${e[i]}
`)}return t}(g)}

`:`${p}
`}let v=eg(a),_={},y={},b={};for(let e in l){let t="string"==typeof l[e]?{injection:l[e],order:0}:l[e],i=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(i){let r=i[2],n=i[3];r?"decl"===n?y[e]=[t]:b[e]=[t]:_[e]=[t]}else b[e]=[t]}for(let e of s){u&&et(e,f,u),m+=ek(e,r,u);let t=e.instance?.normalizedInjections[r]||{};for(let e in t){let i=/^(v|f)s:#([\w-]+)$/.exec(e);if(i){let r="decl"===i[2]?y:b;r[e]=r[e]||[],r[e].push(t[e])}else _[e]=_[e]||[],_[e].push(t[e])}}return m+="// ----- MAIN SHADER SOURCE -------------------------",m+=eA,m=Q(m,r,y)+ef(v[r],_)+f,m=Q(m,r,b),"glsl"===n&&h!==d&&(m=function(e,t){if(300!==Number(e.match(/^#version[ \t]+(\d+)/m)?.[1]||100))throw Error("luma.gl v9 only supports GLSL 3.00 shader sources");switch(t){case"vertex":return eo(e,en);case"fragment":return eo(e,es);default:throw Error(t)}}(m,r)),"glsl"===n&&function(e,t,i){let r=ed(e).filter(e=>!e.isStd140),n=new Set;for(let e of r){if(n.has(e.blockName))continue;n.add(e.blockName);let r=e.hasLayoutQualifier?`declares ${e.layoutQualifier.replace(/\s+/g," ").trim()} instead of layout(std140)`:"does not declare layout(std140)",s=`${t} shader uniform block ${e.blockName} ${r}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;i?.warn?.(s,e)()}}(m,r,u),m.trim()}function eO(e){return function(t){let i={};for(let r of e){let e=r.getUniforms?.(t,i);Object.assign(i,e)}return i}}function ek(e,t,i){let r;switch(t){case"vertex":r=e.vs||"";break;case"fragment":r=e.fs||"";break;case"wgsl":r=e.source||"";break;default:el(!1)}if(!e.name)throw Error("Shader module must have a name");!function(e,t,i={}){let r=function(e,t){let i,r=Object.keys(e.uniformTypes||{});if(!r.length)return null;let n=(i="wgsl"===t?e.source:"vertex"===t?e.vs:e.fs)?function(e,t,i){var r,n;let s,o="wgsl"===t?function(e,t){let i=RegExp(`\\bstruct\\s+${t}\\b`,"m").exec(e);if(!i)return null;let r=e.indexOf("{",i.index);if(r<0)return null;let n=0;for(let t=r;t<e.length;t++){let i=e[t];if("{"===i){n++;continue}if("}"===i&&0==--n)return e.slice(r+1,t)}return null}(e,i):(r=e,n=i,s=ed(r).find(e=>e.blockName===n),s?.body||null);if(!o)return null;let a=[];for(let e of o.split("\n")){let i=e.replace(/\/\/.*$/,"").trim();if(!i||i.startsWith("#"))continue;let r="wgsl"===t?i.match(/^([A-Za-z0-9_]+)\s*:/):i.match(ec);r&&a.push(r[1])}return a}(i,"wgsl"===t?"wgsl":"glsl",eh(e)):null;return n?{moduleName:e.name,uniformBlockName:eh(e),stage:t,expectedUniformNames:r,actualUniformNames:n,matches:function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(r,n)}:null}(e,t);if(!r||r.matches)return;let n=function(e){let{expectedUniformNames:t,actualUniformNames:i}=e,r=t.filter(e=>!i.includes(e)),n=i.filter(e=>!t.includes(e)),s=[`Expected ${t.length} fields, found ${i.length}.`],o=function(e,t){let i=Math.min(e.length,t.length);for(let r=0;r<i;r++)if(e[r]!==t[r])return`First mismatch at field ${r+1}: expected ${e[r]}, found ${t[r]}.`;return e.length>t.length?`Shader block ends after field ${t.length}; expected next field ${e[t.length]}.`:t.length>e.length?`Shader block has extra field ${t.length}: ${t[e.length]}.`:null}(t,i);return o&&s.push(o),r.length&&s.push(`Missing from shader block (${r.length}): ${ep(r)}.`),n.length&&s.push(`Unexpected in shader block (${n.length}): ${ep(n)}.`),t.length<=12&&i.length<=12&&(r.length||n.length)&&(s.push(`Expected: ${t.join(", ")}.`),s.push(`Actual: ${i.join(", ")}.`)),`${e.moduleName}: ${e.stage} shader uniform block ${e.uniformBlockName} does not match module.uniformTypes. ${s.join(" ")}`}(r);i.log?.error?.(n,r)(),!1!==i.throwOnError&&el(!1,n)}(e,t,{log:i});let n=e.name.toUpperCase().replace(/[^0-9a-z]/gi,"_"),s=`\
// ----- MODULE ${e.name} ---------------

`;return"wgsl"!==t&&(s+=`#define MODULE_${n}
`),s+=`${r}
`}function eI(e,t,i){if(0===e&&t>=100)throw Error(`Application binding "${i}" in group 0 uses reserved binding ${t}. Application-owned explicit group-0 bindings must stay below 100.`)}function ez(e,t,i,r){if(0===t&&i<100)throw Error(`Module "${e}" binding "${r}" in group 0 uses reserved application binding ${i}. Module-owned explicit group-0 bindings must be 100 or higher.`)}function ej(e,t,i,r){let n=e.get(t)||new Set;if(n.has(i))throw Error(`Duplicate WGSL binding assignment for ${r}: group ${t}, binding ${i}.`);n.add(i),e.set(t,n)}function eD(e,t,i){let r=t.get(e)||new Set,n=i??(0===e?100:r.size>0?Math.max(...r)+1:0);for(;r.has(n);)n++;return n}function eF(e,t,i){return`${e}:${t}:${i}`}let eN="([a-zA-Z_][a-zA-Z0-9_]*)",eU=RegExp(`^\\s*\\#\\s*ifdef\\s*${eN}\\s*$`),eB=RegExp(`^\\s*\\#\\s*ifndef\\s*${eN}\\s*(?:\\/\\/.*)?$`),e$=/^\s*\#\s*else\s*(?:\/\/.*)?$/,eV=/^\s*\#\s*endif\s*$/,eW=RegExp(`^\\s*\\#\\s*ifdef\\s*${eN}\\s*(?:\\/\\/.*)?$`),eG=/^\s*\#\s*endif\s*(?:\/\/.*)?$/;class eH{static defaultShaderAssembler;_hookFunctions=[];_defaultModules=[];_wgslBindingRegistry=new Map;static getDefaultShaderAssembler(){return eH.defaultShaderAssembler=eH.defaultShaderAssembler||new eH,eH.defaultShaderAssembler}addDefaultModule(e){this._defaultModules.find(t=>t.name===("string"==typeof e?e:e.name))||this._defaultModules.push(e)}removeDefaultModule(e){let t="string"==typeof e?e:e.name;this._defaultModules=this._defaultModules.filter(e=>e.name!==t)}addShaderHook(e,t){t&&(e=Object.assign(t,{hook:e})),this._hookFunctions.push(e)}assembleWGSLShader(e){let t=this._getModuleList(e.modules),i=this._hookFunctions,{source:r,getUniforms:n,bindingAssignments:s}=function(e){let t=ei(e.modules||[]),{source:i,bindingAssignments:r}=function(e,t){let{source:i,stage:r,modules:n,hookFunctions:s=[],inject:o={},log:a}=t;el("string"==typeof i,"shader source must be a string");let l="",c=eg(s),u={},h={},d={};for(let e in o){let t="string"==typeof o[e]?{injection:o[e],order:0}:o[e],i=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(i){let r=i[2],n=i[3];r?"decl"===n?h[e]=[t]:d[e]=[t]:u[e]=[t]}else d[e]=[t]}let p=function(e){let t=ex(e,e_),i=new Map;for(let e of t){if("auto"===e.bindingToken)continue;let t=Number(e.bindingToken),r=Number(e.groupToken);eI(r,t,e.name),ej(i,r,t,`application binding "${e.name}"`)}let r={sawSupportedBindingDeclaration:t.length>0},n=eP(e,e_,e=>(function(e,t,i){let{match:r,bindingToken:n,groupToken:s,name:o}=e,a=Number(s);if("auto"===n){let e=function(e,t){let i=t.get(e)||new Set,r=0;for(;i.has(r);)r++;return r}(a,t);return eI(a,e,o),ej(t,a,e,`application binding "${o}"`),r.replace(/@binding\(\s*auto\s*\)/,`@binding(${e})`)}return i.sawSupportedBindingDeclaration=!0,r})(e,i,r));if(eC(e)&&!r.sawSupportedBindingDeclaration)throw Error('Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.');return{source:n}}(i),f=function(e){let t=new Map;for(let i of ex(e,ey)){let e=Number(i.bindingToken),r=Number(i.groupToken);eI(r,e,i.name),ej(t,r,e,`application binding "${i.name}"`)}return t}(p.source),g=function(e,t,i){let r=new Map;if(!t)return r;for(let n of e)for(let e of function(e){let t=[];for(let i of ex(e.source||"",ev))t.push({name:i.name,group:Number(i.groupToken)});return t}(n)){let s=eF(e.group,n.name,e.name),o=t.get(s);if(void 0!==o){let t=r.get(e.group)||new Map,n=t.get(o);if(n&&n!==s)throw Error(`Duplicate WGSL binding reservation for modules "${n}" and "${s}": group ${e.group}, binding ${o}.`);ej(i,e.group,o,`registered module binding "${s}"`),t.set(o,s),r.set(e.group,t)}}return r}(n,t._bindingRegistry,f),m=[];for(let e of n){a&&et(e,i,a);let n=function(e,t,i){let r=[],n={sawSupportedBindingDeclaration:ex(e,ev).length>0,nextHintedBindingLocation:"number"==typeof t.firstBindingSlot?t.firstBindingSlot:null},s=eP(e,ev,e=>(function(e,t){let{module:i,context:r,bindingAssignments:n,relocationState:s}=t,{match:o,bindingToken:a,groupToken:l,name:c}=e,u=Number(l);if("auto"===a){let e=eF(u,i.name,c),t=r.bindingRegistry?.get(e),a=void 0!==t?t:null===s.nextHintedBindingLocation?eD(u,r.usedBindingsByGroup):eD(u,r.usedBindingsByGroup,s.nextHintedBindingLocation);return(ez(i.name,u,a,c),void 0!==t&&function(e,t,i,r){let n=e.get(t);if(!n)return!1;let s=n.get(i);if(!s)return!1;if(s!==r)throw Error(`Registered module binding "${r}" collided with "${s}": group ${t}, binding ${i}.`);return!0}(r.reservedBindingKeysByGroup,u,a,e))?n.push({moduleName:i.name,name:c,group:u,location:a}):(ej(r.usedBindingsByGroup,u,a,`module "${i.name}" binding "${c}"`),r.bindingRegistry?.set(e,a),n.push({moduleName:i.name,name:c,group:u,location:a}),null!==s.nextHintedBindingLocation&&void 0===t&&(s.nextHintedBindingLocation=a+1)),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${a})`)}let h=Number(a);return ez(i.name,u,h,c),ej(r.usedBindingsByGroup,u,h,`module "${i.name}" binding "${c}"`),n.push({moduleName:i.name,name:c,group:u,location:h}),o})(e,{module:t,context:i,bindingAssignments:r,relocationState:n}));if(eC(e)&&!n.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in module "${t.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:s,bindingAssignments:r}}(ek(e,"wgsl",a),e,{usedBindingsByGroup:f,bindingRegistry:t._bindingRegistry,reservedBindingKeysByGroup:g});m.push(...n.bindingAssignments),l+=n.source;let s=e.injections?.[r]||{};for(let e in s){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let i="decl"===t[2]?h:d;i[e]=i[e]||[],i[e].push(s[e])}else u[e]=u[e]||[],u[e].push(s[e])}}return l+=eA,l=Q(l,r,h)+ef(c[r],u)+function(e){if(0===e.length)return"";let t="// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------\n";for(let i of e)t+=`// ${i.moduleName}.${i.name} -> @group(${i.group}) @binding(${i.location})
`;return t+"\n"}(m)+p.source,function(e){var t,i;let r,n=ex(e,ev==ev||ev===e_?eb:ev).find(e=>"auto"===e.bindingToken);if(!n)return;let s=function(e,t){let i,r,n=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm;for(r=n.exec(e);r&&r.index<=t;)i=r[1],r=n.exec(e);return i}(e,n.index);if(s)throw Error(`Unresolved @binding(auto) for module "${s}" binding "${n.name}" remained in assembled WGSL source.`);if(t=e,i=n.index,!((r=t.indexOf(eA))>=0)||i>r)throw Error(`Unresolved @binding(auto) for application binding "${n.name}" remained in assembled WGSL source.`);throw Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${n.match.replace(/\s+/g," ").trim()}".`)}(l=Q(l,r,d)),{source:l,bindingAssignments:m}}(e.platformInfo,{...e,source:e.source,stage:"vertex",modules:t});return{source:i,getUniforms:eO(t),bindingAssignments:r,bindingTable:eE(i,r)}}({...e,source:e.source,_bindingRegistry:this._wgslBindingRegistry,modules:t,hookFunctions:i}),o={...t.reduce((e,t)=>(Object.assign(e,t.defines),e),{}),...e.defines},a="wgsl"===e.platformInfo.shaderLanguage?function(e,t){let i=e.split("\n"),r=[],n=[],s=!0;for(let e of i){let i=e.match(eW)||e.match(eU),o=e.match(eB),a=e.match(e$),l=e.match(eG)||e.match(eV);if(i||o){let e=(i||o)?.[1],r=!!t?.defines?.[e],a=i?r:!r,l=s&&a;n.push({parentActive:s,branchTaken:a,active:l}),s=l}else if(a){let e=n[n.length-1];if(!e)throw Error("Encountered #else without matching #ifdef or #ifndef");e.active=e.parentActive&&!e.branchTaken,e.branchTaken=!0,s=e.active}else l?(n.pop(),s=!n.length||n[n.length-1].active):s&&r.push(e)}if(n.length>0)throw Error("Unterminated conditional block in shader source");return r.join("\n")}(r,{defines:o}):r;return{source:a,getUniforms:n,modules:t,bindingAssignments:s,bindingTable:eE(a,s)}}assembleGLSLShaderPair(e){let t=this._getModuleList(e.modules),i=this._hookFunctions;return{...function(e){let{vs:t,fs:i}=e,r=ei(e.modules||[]);return{vs:eR(e.platformInfo,{...e,source:t,stage:"vertex",modules:r}),fs:eR(e.platformInfo,{...e,source:i,stage:"fragment",modules:r}),getUniforms:eO(r)}}({...e,vs:e.vs,fs:e.fs,modules:t,hookFunctions:i}),modules:t}}_getModuleList(e=[]){let t=Array(this._defaultModules.length+e.length),i={},r=0;for(let e=0,n=this._defaultModules.length;e<n;++e){let n=this._defaultModules[e],s=n.name;t[r++]=n,i[s]=!0}for(let n=0,s=e.length;n<s;++n){let s=e[n],o=s.name;i[o]||(t[r++]=s,i[o]=!0)}return t.length=r,ee(t),t}}let eq=`\
layout(std140) uniform floatColorsUniforms {
  float useByteColors;
} floatColors;

vec3 floatColors_normalize(vec3 inputColor) {
  return floatColors.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 floatColors_normalize(vec4 inputColor) {
  return floatColors.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 floatColors_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 floatColors_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 floatColors_premultiply_alpha(vec4 inputColor) {
  return floatColors_premultiplyAlpha(inputColor);
}

vec4 floatColors_unpremultiply_alpha(vec4 inputColor) {
  return floatColors_unpremultiplyAlpha(inputColor);
}
`,eZ={name:"floatColors",props:{},uniforms:{},vs:eq,fs:eq,source:`\
struct floatColorsUniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> floatColors : floatColorsUniforms;

fn floatColors_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, floatColors.useByteColors > 0.5);
}

fn floatColors_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, floatColors.useByteColors > 0.5);
}

fn floatColors_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn floatColors_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn floatColors_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return floatColors_premultiplyAlpha(inputColor);
}

fn floatColors_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return floatColors_unpremultiplyAlpha(inputColor);
}
`,uniformTypes:{useByteColors:"f32"},defaultUniforms:{useByteColors:!0}};var eY=e.i(12828);let eK=`\
precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`,eX=`\
// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`;function eJ(e,t=!0){return e??t}function eQ(e=[0,0,0],t=!0){return t?e.map(e=>e/255):[...e]}let e0={props:{},uniforms:{},name:"lighting",defines:{},uniformTypes:{enabled:"i32",directionalLightCount:"i32",pointLightCount:"i32",spotLightCount:"i32",ambientColor:"vec3<f32>",lights:[{color:"vec3<f32>",position:"vec3<f32>",direction:"vec3<f32>",attenuation:"vec3<f32>",coneCos:"vec2<f32>"},5]},defaultUniforms:e2(),bindingLayout:[{name:"lighting",group:2}],firstBindingSlot:0,source:eX,vs:eK,fs:eK,getUniforms:function(e,t={}){if(!(e=e?{...e}:e))return e2();e.lights&&(e={...e,...function(e){let t={pointLights:[],spotLights:[],directionalLights:[]};for(let i of e||[])switch(i.type){case"ambient":t.ambientLight=i;break;case"directional":t.directionalLights?.push(i);break;case"point":t.pointLights?.push(i);break;case"spot":t.spotLights?.push(i)}return t}(e.lights),lights:void 0});let{useByteColors:i,ambientLight:r,pointLights:n,spotLights:s,directionalLights:o}=e||{};if(!(r||n&&n.length>0||s&&s.length>0||o&&o.length>0))return{...e2(),enabled:0};let a={...e2(),...function({useByteColors:e,ambientLight:t,pointLights:i=[],spotLights:r=[],directionalLights:n=[]}){let s=e3(),o=0,a=0,l=0,c=0;for(let t of i){if(o>=5)break;s[o]={...s[o],color:e1(t,e),position:t.position,attenuation:t.attenuation||[1,0,0]},o++,a++}for(let t of r){var u;if(o>=5)break;s[o]={...s[o],color:e1(t,e),position:t.position,direction:t.direction,attenuation:t.attenuation||[1,0,0],coneCos:[Math.cos((u=t).innerConeAngle??0),Math.cos(u.outerConeAngle??Math.PI/4)]},o++,l++}for(let t of n){if(o>=5)break;s[o]={...s[o],color:e1(t,e),direction:t.direction},o++,c++}return i.length+r.length+n.length>5&&eY.log.warn("MAX_LIGHTS exceeded, truncating to 5")(),{ambientColor:e1(t,e),directionalLightCount:c,pointLightCount:a,spotLightCount:l,lights:s}}({useByteColors:i,ambientLight:r,pointLights:n,spotLights:s,directionalLights:o})};return void 0!==e.enabled&&(a.enabled=+!!e.enabled),a}};function e1(e={},t){let{color:i=[0,0,0],intensity:r=1}=e;return eQ(i,eJ(t,!0)).map(e=>e*r)}function e2(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:e3()}}function e3(){return Array.from({length:5},()=>({color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}))}let e4=`\
layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,e6=`\
layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`,e5=`\
struct phongMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * phongMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(phongMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (phongMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,e8={props:{},name:"gouraudMaterial",bindingLayout:[{name:"gouraudMaterial",group:3}],vs:e6.replace("phongMaterial","gouraudMaterial"),fs:e4.replace("phongMaterial","gouraudMaterial"),source:e5.replaceAll("phongMaterial","gouraudMaterial"),defines:{LIGHTING_VERTEX:!0},dependencies:[e0,eZ],uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms:e=>({...e8.defaultUniforms,...e})},e9={name:"phongMaterial",firstBindingSlot:0,bindingLayout:[{name:"phongMaterial",group:3}],dependencies:[e0,eZ],source:e5,vs:e4,fs:e6,defines:{LIGHTING_FRAGMENT:!0},uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms:e=>({...e9.defaultUniforms,...e})},e7=`\
layout(std140) uniform layerUniforms {
  uniform float opacity;
} layer;
`,te={name:"layer",source:`\
struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(auto)
var<uniform> layer: LayerUniforms;
`,vs:e7,fs:e7,getUniforms:e=>({opacity:Math.pow(e.opacity,1/2.2)}),uniformTypes:{opacity:"f32"}},tt={name:"color",dependencies:[],source:`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,getUniforms:e=>({})},ti="#define SMOOTH_EDGE_RADIUS 0.5",tr={name:"geometry",source:`\
const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,vs:`\
${ti}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,fs:`\
${ti}

struct FragmentGeometry {
  vec2 uv;
} geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`},tn=`\
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND

// All these functions are for substituting tan() function from Intel GPU only
const float TWO_PI = 6.2831854820251465;
const float PI_2 = 1.5707963705062866;
const float PI_16 = 0.1963495463132858;

const float SIN_TABLE_0 = 0.19509032368659973;
const float SIN_TABLE_1 = 0.3826834261417389;
const float SIN_TABLE_2 = 0.5555702447891235;
const float SIN_TABLE_3 = 0.7071067690849304;

const float COS_TABLE_0 = 0.9807852506637573;
const float COS_TABLE_1 = 0.9238795042037964;
const float COS_TABLE_2 = 0.8314695954322815;
const float COS_TABLE_3 = 0.7071067690849304;

const float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!
const float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!
const float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!
const float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!

float sin_taylor_fp32(float a) {
  float r, s, t, x;

  if (a == 0.0) {
    return 0.0;
  }

  x = -a * a;
  s = a;
  r = a;

  r = r * x;
  t = r * INVERSE_FACTORIAL_3;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_5;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_7;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_9;
  s = s + t;

  return s;
}

void sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {
  if (a == 0.0) {
    sin_t = 0.0;
    cos_t = 1.0;
  }
  sin_t = sin_taylor_fp32(a);
  cos_t = sqrt(1.0 - sin_t * sin_t);
}

float tan_taylor_fp32(float a) {
    float sin_a;
    float cos_a;

    if (a == 0.0) {
        return 0.0;
    }

    // 2pi range reduction
    float z = floor(a / TWO_PI);
    float r = a - TWO_PI * z;

    float t;
    float q = floor(r / PI_2 + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return 1.0 / 0.0;
    }

    t = r - PI_2 * q;

    q = floor(t / PI_16 + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return 1.0 / 0.0;
    } else {
        t = t - PI_16 * q;
    }

    float u = 0.0;
    float v = 0.0;

    float sin_t, cos_t;
    float s, c;
    sincos_taylor_fp32(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0;
            v = SIN_TABLE_0;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1;
            v = SIN_TABLE_1;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2;
            v = SIN_TABLE_2;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3;
            v = SIN_TABLE_3;
        }
        if (k > 0) {
            s = u * sin_t + v * cos_t;
            c = u * cos_t - v * sin_t;
        } else {
            s = u * sin_t - v * cos_t;
            c = u * cos_t + v * sin_t;
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return sin_a / cos_a;
}
#endif

float tan_fp32(float a) {
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
  return tan_taylor_fp32(a);
#else
  return tan(a);
#endif
}
`,ts="u">typeof Float32Array?Float32Array:Array,to=Math.random;function ta(e){return e>=0?Math.round(e):e%.5==0?Math.floor(e):Math.round(e)}function tl(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function tc(e,t){if(e===t){let i=t[1],r=t[2],n=t[3],s=t[6],o=t[7],a=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=i,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=s,e[11]=t[14],e[12]=n,e[13]=o,e[14]=a}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function tu(e,t){let i=t[0],r=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],f=t[12],g=t[13],m=t[14],v=t[15],_=i*a-r*o,y=i*l-n*o,b=i*c-s*o,w=r*l-n*a,x=r*c-s*a,P=n*c-s*l,C=u*g-h*f,M=u*m-d*f,E=u*v-p*f,S=h*m-d*g,L=h*v-p*g,A=d*v-p*m,T=_*A-y*L+b*S+w*E-x*M+P*C;return T?(T=1/T,e[0]=(a*A-l*L+c*S)*T,e[1]=(n*L-r*A-s*S)*T,e[2]=(g*P-m*x+v*w)*T,e[3]=(d*x-h*P-p*w)*T,e[4]=(l*E-o*A-c*M)*T,e[5]=(i*A-n*E+s*M)*T,e[6]=(m*b-f*P-v*y)*T,e[7]=(u*P-d*b+p*y)*T,e[8]=(o*L-a*E+c*C)*T,e[9]=(r*E-i*L-s*C)*T,e[10]=(f*x-g*b+v*_)*T,e[11]=(h*b-u*x-p*_)*T,e[12]=(a*M-o*S-l*C)*T,e[13]=(i*S-r*M+n*C)*T,e[14]=(g*y-f*w-m*_)*T,e[15]=(u*w-h*y+d*_)*T,e):null}function th(e){let t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=e[9],h=e[10],d=e[11],p=e[12],f=e[13],g=e[14],m=e[15],v=t*o-i*s,_=t*a-r*s,y=i*a-r*o,b=c*f-u*p,w=c*g-h*p,x=u*g-h*f;return l*(t*x-i*w+r*b)-n*(s*x-o*w+a*b)+m*(c*y-u*_+h*v)-d*(p*y-f*_+g*v)}function td(e,t,i){let r=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],m=t[13],v=t[14],_=t[15],y=i[0],b=i[1],w=i[2],x=i[3];return e[0]=y*r+b*a+w*h+x*g,e[1]=y*n+b*l+w*d+x*m,e[2]=y*s+b*c+w*p+x*v,e[3]=y*o+b*u+w*f+x*_,y=i[4],b=i[5],w=i[6],x=i[7],e[4]=y*r+b*a+w*h+x*g,e[5]=y*n+b*l+w*d+x*m,e[6]=y*s+b*c+w*p+x*v,e[7]=y*o+b*u+w*f+x*_,y=i[8],b=i[9],w=i[10],x=i[11],e[8]=y*r+b*a+w*h+x*g,e[9]=y*n+b*l+w*d+x*m,e[10]=y*s+b*c+w*p+x*v,e[11]=y*o+b*u+w*f+x*_,y=i[12],b=i[13],w=i[14],x=i[15],e[12]=y*r+b*a+w*h+x*g,e[13]=y*n+b*l+w*d+x*m,e[14]=y*s+b*c+w*p+x*v,e[15]=y*o+b*u+w*f+x*_,e}function tp(e,t,i){let r,n,s,o,a,l,c,u,h,d,p,f,g=i[0],m=i[1],v=i[2];return t===e?(e[12]=t[0]*g+t[4]*m+t[8]*v+t[12],e[13]=t[1]*g+t[5]*m+t[9]*v+t[13],e[14]=t[2]*g+t[6]*m+t[10]*v+t[14],e[15]=t[3]*g+t[7]*m+t[11]*v+t[15]):(r=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=t[9],p=t[10],f=t[11],e[0]=r,e[1]=n,e[2]=s,e[3]=o,e[4]=a,e[5]=l,e[6]=c,e[7]=u,e[8]=h,e[9]=d,e[10]=p,e[11]=f,e[12]=r*g+a*m+h*v+t[12],e[13]=n*g+l*m+d*v+t[13],e[14]=s*g+c*m+p*v+t[14],e[15]=o*g+u*m+f*v+t[15]),e}function tf(e,t,i){let r=i[0],n=i[1],s=i[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function tg(e,t,i,r){let n,s,o,a,l,c,u,h,d,p,f,g,m,v,_,y,b,w,x,P,C,M,E,S,L=r[0],A=r[1],T=r[2],R=Math.sqrt(L*L+A*A+T*T);return R<1e-6?null:(L*=R=1/R,A*=R,T*=R,s=Math.sin(i),o=1-(n=Math.cos(i)),a=t[0],l=t[1],c=t[2],u=t[3],h=t[4],d=t[5],p=t[6],f=t[7],g=t[8],m=t[9],v=t[10],_=t[11],y=L*L*o+n,b=A*L*o+T*s,w=T*L*o-A*s,x=L*A*o-T*s,P=A*A*o+n,C=T*A*o+L*s,M=L*T*o+A*s,E=A*T*o-L*s,S=T*T*o+n,e[0]=a*y+h*b+g*w,e[1]=l*y+d*b+m*w,e[2]=c*y+p*b+v*w,e[3]=u*y+f*b+_*w,e[4]=a*x+h*P+g*C,e[5]=l*x+d*P+m*C,e[6]=c*x+p*P+v*C,e[7]=u*x+f*P+_*C,e[8]=a*M+h*E+g*S,e[9]=l*M+d*E+m*S,e[10]=c*M+p*E+v*S,e[11]=u*M+f*E+_*S,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function tm(e,t,i){let r=Math.sin(i),n=Math.cos(i),s=t[4],o=t[5],a=t[6],l=t[7],c=t[8],u=t[9],h=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*n+c*r,e[5]=o*n+u*r,e[6]=a*n+h*r,e[7]=l*n+d*r,e[8]=c*n-s*r,e[9]=u*n-o*r,e[10]=h*n-a*r,e[11]=d*n-l*r,e}function tv(e,t,i){let r=Math.sin(i),n=Math.cos(i),s=t[0],o=t[1],a=t[2],l=t[3],c=t[8],u=t[9],h=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*n-c*r,e[1]=o*n-u*r,e[2]=a*n-h*r,e[3]=l*n-d*r,e[8]=s*r+c*n,e[9]=o*r+u*n,e[10]=a*r+h*n,e[11]=l*r+d*n,e}function t_(e,t,i){let r=Math.sin(i),n=Math.cos(i),s=t[0],o=t[1],a=t[2],l=t[3],c=t[4],u=t[5],h=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*n+c*r,e[1]=o*n+u*r,e[2]=a*n+h*r,e[3]=l*n+d*r,e[4]=c*n-s*r,e[5]=u*n-o*r,e[6]=h*n-a*r,e[7]=d*n-l*r,e}function ty(e,t,i){let r=t[0],n=t[1],s=t[2],o=t[3],a=r+r,l=n+n,c=s+s,u=r*a,h=r*l,d=r*c,p=n*l,f=n*c,g=s*c,m=o*a,v=o*l,_=o*c;return e[0]=1-(p+g),e[1]=h+_,e[2]=d-v,e[3]=0,e[4]=h-_,e[5]=1-(u+g),e[6]=f+m,e[7]=0,e[8]=d+v,e[9]=f-m,e[10]=1-(u+p),e[11]=0,e[12]=i[0],e[13]=i[1],e[14]=i[2],e[15]=1,e}function tb(e,t){let i=t[0],r=t[1],n=t[2],s=t[4],o=t[5],a=t[6],l=t[8],c=t[9],u=t[10];return e[0]=Math.sqrt(i*i+r*r+n*n),e[1]=Math.sqrt(s*s+o*o+a*a),e[2]=Math.sqrt(l*l+c*c+u*u),e}function tw(e,t){let i=t[0],r=t[1],n=t[2],s=t[3],o=i+i,a=r+r,l=n+n,c=i*o,u=r*o,h=r*a,d=n*o,p=n*a,f=n*l,g=s*o,m=s*a,v=s*l;return e[0]=1-h-f,e[1]=u+v,e[2]=d-m,e[3]=0,e[4]=u-v,e[5]=1-c-f,e[6]=p+g,e[7]=0,e[8]=d+m,e[9]=p-g,e[10]=1-c-h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function tx(e,t,i,r,n,s,o){let a=1/(i-t),l=1/(n-r),c=1/(s-o);return e[0]=2*s*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*s*l,e[6]=0,e[7]=0,e[8]=(i+t)*a,e[9]=(n+r)*l,e[10]=(o+s)*c,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*s*2*c,e[15]=0,e}function tP(e,t,i,r,n){let s=1/Math.tan(t/2);if(e[0]=s/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=n&&n!==1/0){let t=1/(r-n);e[10]=(n+r)*t,e[14]=2*n*r*t}else e[10]=-1,e[14]=-2*r;return e}function tC(e,t,i,r,n,s,o){let a=1/(t-i),l=1/(r-n),c=1/(s-o);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*c,e[11]=0,e[12]=(t+i)*a,e[13]=(n+r)*l,e[14]=(o+s)*c,e[15]=1,e}function tM(e,t,i,r){let n,s,o,a,l,c,u,h,d,p,f=t[0],g=t[1],m=t[2],v=r[0],_=r[1],y=r[2],b=i[0],w=i[1],x=i[2];return 1e-6>Math.abs(f-b)&&1e-6>Math.abs(g-w)&&1e-6>Math.abs(m-x)?tl(e):(n=1/Math.sqrt((h=f-b)*h+(d=g-w)*d+(p=m-x)*p),h*=n,d*=n,p*=n,(n=Math.sqrt((s=_*p-y*d)*s+(o=y*h-v*p)*o+(a=v*d-_*h)*a))?(s*=n=1/n,o*=n,a*=n):(s=0,o=0,a=0),(n=Math.sqrt((l=d*a-p*o)*l+(c=p*s-h*a)*c+(u=h*o-d*s)*u))?(l*=n=1/n,c*=n,u*=n):(l=0,c=0,u=0),e[0]=s,e[1]=l,e[2]=h,e[3]=0,e[4]=o,e[5]=c,e[6]=d,e[7]=0,e[8]=a,e[9]=u,e[10]=p,e[11]=0,e[12]=-(s*f+o*g+a*m),e[13]=-(l*f+c*g+u*m),e[14]=-(h*f+d*g+p*m),e[15]=1,e)}function tE(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e[3]=t[3]-i[3],e[4]=t[4]-i[4],e[5]=t[5]-i[5],e[6]=t[6]-i[6],e[7]=t[7]-i[7],e[8]=t[8]-i[8],e[9]=t[9]-i[9],e[10]=t[10]-i[10],e[11]=t[11]-i[11],e[12]=t[12]-i[12],e[13]=t[13]-i[13],e[14]=t[14]-i[14],e[15]=t[15]-i[15],e}e.s(["add",0,function(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e[3]=t[3]+i[3],e[4]=t[4]+i[4],e[5]=t[5]+i[5],e[6]=t[6]+i[6],e[7]=t[7]+i[7],e[8]=t[8]+i[8],e[9]=t[9]+i[9],e[10]=t[10]+i[10],e[11]=t[11]+i[11],e[12]=t[12]+i[12],e[13]=t[13]+i[13],e[14]=t[14]+i[14],e[15]=t[15]+i[15],e},"adjoint",0,function(e,t){let i=t[0],r=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],f=t[12],g=t[13],m=t[14],v=t[15],_=i*a-r*o,y=i*l-n*o,b=i*c-s*o,w=r*l-n*a,x=r*c-s*a,P=n*c-s*l,C=u*g-h*f,M=u*m-d*f,E=u*v-p*f,S=h*m-d*g,L=h*v-p*g,A=d*v-p*m;return e[0]=a*A-l*L+c*S,e[1]=n*L-r*A-s*S,e[2]=g*P-m*x+v*w,e[3]=d*x-h*P-p*w,e[4]=l*E-o*A-c*M,e[5]=i*A-n*E+s*M,e[6]=m*b-f*P-v*y,e[7]=u*P-d*b+p*y,e[8]=o*L-a*E+c*C,e[9]=r*E-i*L-s*C,e[10]=f*x-g*b+v*_,e[11]=h*b-u*x-p*_,e[12]=a*M-o*S-l*C,e[13]=i*S-r*M+n*C,e[14]=g*y-f*w-m*_,e[15]=u*w-h*y+d*_,e},"clone",0,function(e){let t=new ts(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},"copy",0,function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},"create",0,function(){let e=new ts(16);return ts!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e},"decompose",0,function(e,t,i,r){t[0]=r[12],t[1]=r[13],t[2]=r[14];let n=r[0],s=r[1],o=r[2],a=r[4],l=r[5],c=r[6],u=r[8],h=r[9],d=r[10];i[0]=Math.sqrt(n*n+s*s+o*o),i[1]=Math.sqrt(a*a+l*l+c*c),i[2]=Math.sqrt(u*u+h*h+d*d);let p=1/i[0],f=1/i[1],g=1/i[2],m=n*p,v=s*f,_=o*g,y=a*p,b=l*f,w=c*g,x=u*p,P=h*f,C=d*g,M=m+b+C,E=0;return M>0?(E=2*Math.sqrt(M+1),e[3]=.25*E,e[0]=(w-P)/E,e[1]=(x-_)/E,e[2]=(v-y)/E):m>b&&m>C?(E=2*Math.sqrt(1+m-b-C),e[3]=(w-P)/E,e[0]=.25*E,e[1]=(v+y)/E,e[2]=(x+_)/E):b>C?(E=2*Math.sqrt(1+b-m-C),e[3]=(x-_)/E,e[0]=(v+y)/E,e[1]=.25*E,e[2]=(w+P)/E):(E=2*Math.sqrt(1+C-m-b),e[3]=(v-y)/E,e[0]=(x+_)/E,e[1]=(w+P)/E,e[2]=.25*E),e},"determinant",0,th,"equals",0,function(e,t){let i=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],v=e[15],_=t[0],y=t[1],b=t[2],w=t[3],x=t[4],P=t[5],C=t[6],M=t[7],E=t[8],S=t[9],L=t[10],A=t[11],T=t[12],R=t[13],O=t[14],k=t[15];return Math.abs(i-_)<=1e-6*Math.max(1,Math.abs(i),Math.abs(_))&&Math.abs(r-y)<=1e-6*Math.max(1,Math.abs(r),Math.abs(y))&&Math.abs(n-b)<=1e-6*Math.max(1,Math.abs(n),Math.abs(b))&&Math.abs(s-w)<=1e-6*Math.max(1,Math.abs(s),Math.abs(w))&&Math.abs(o-x)<=1e-6*Math.max(1,Math.abs(o),Math.abs(x))&&Math.abs(a-P)<=1e-6*Math.max(1,Math.abs(a),Math.abs(P))&&Math.abs(l-C)<=1e-6*Math.max(1,Math.abs(l),Math.abs(C))&&Math.abs(c-M)<=1e-6*Math.max(1,Math.abs(c),Math.abs(M))&&Math.abs(u-E)<=1e-6*Math.max(1,Math.abs(u),Math.abs(E))&&Math.abs(h-S)<=1e-6*Math.max(1,Math.abs(h),Math.abs(S))&&Math.abs(d-L)<=1e-6*Math.max(1,Math.abs(d),Math.abs(L))&&Math.abs(p-A)<=1e-6*Math.max(1,Math.abs(p),Math.abs(A))&&Math.abs(f-T)<=1e-6*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(g-R)<=1e-6*Math.max(1,Math.abs(g),Math.abs(R))&&Math.abs(m-O)<=1e-6*Math.max(1,Math.abs(m),Math.abs(O))&&Math.abs(v-k)<=1e-6*Math.max(1,Math.abs(v),Math.abs(k))},"exactEquals",0,function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]},"frob",0,function(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]+e[4]*e[4]+e[5]*e[5]+e[6]*e[6]+e[7]*e[7]+e[8]*e[8]+e[9]*e[9]+e[10]*e[10]+e[11]*e[11]+e[12]*e[12]+e[13]*e[13]+e[14]*e[14]+e[15]*e[15])},"fromQuat",0,tw,"fromQuat2",0,function(e,t){let i=new ts(3),r=-t[0],n=-t[1],s=-t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=r*r+n*n+s*s+o*o;return h>0?(i[0]=(a*o+u*r+l*s-c*n)*2/h,i[1]=(l*o+u*n+c*r-a*s)*2/h,i[2]=(c*o+u*s+a*n-l*r)*2/h):(i[0]=(a*o+u*r+l*s-c*n)*2,i[1]=(l*o+u*n+c*r-a*s)*2,i[2]=(c*o+u*s+a*n-l*r)*2),ty(e,t,i),e},"fromRotation",0,function(e,t,i){let r,n,s,o=i[0],a=i[1],l=i[2],c=Math.sqrt(o*o+a*a+l*l);return c<1e-6?null:(o*=c=1/c,a*=c,l*=c,n=Math.sin(t),s=1-(r=Math.cos(t)),e[0]=o*o*s+r,e[1]=a*o*s+l*n,e[2]=l*o*s-a*n,e[3]=0,e[4]=o*a*s-l*n,e[5]=a*a*s+r,e[6]=l*a*s+o*n,e[7]=0,e[8]=o*l*s+a*n,e[9]=a*l*s-o*n,e[10]=l*l*s+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)},"fromRotationTranslation",0,ty,"fromRotationTranslationScale",0,function(e,t,i,r){let n=t[0],s=t[1],o=t[2],a=t[3],l=n+n,c=s+s,u=o+o,h=n*l,d=n*c,p=n*u,f=s*c,g=s*u,m=o*u,v=a*l,_=a*c,y=a*u,b=r[0],w=r[1],x=r[2];return e[0]=(1-(f+m))*b,e[1]=(d+y)*b,e[2]=(p-_)*b,e[3]=0,e[4]=(d-y)*w,e[5]=(1-(h+m))*w,e[6]=(g+v)*w,e[7]=0,e[8]=(p+_)*x,e[9]=(g-v)*x,e[10]=(1-(h+f))*x,e[11]=0,e[12]=i[0],e[13]=i[1],e[14]=i[2],e[15]=1,e},"fromRotationTranslationScaleOrigin",0,function(e,t,i,r,n){let s=t[0],o=t[1],a=t[2],l=t[3],c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,f=s*h,g=o*u,m=o*h,v=a*h,_=l*c,y=l*u,b=l*h,w=r[0],x=r[1],P=r[2],C=n[0],M=n[1],E=n[2],S=(1-(g+v))*w,L=(p+b)*w,A=(f-y)*w,T=(p-b)*x,R=(1-(d+v))*x,O=(m+_)*x,k=(f+y)*P,I=(m-_)*P,z=(1-(d+g))*P;return e[0]=S,e[1]=L,e[2]=A,e[3]=0,e[4]=T,e[5]=R,e[6]=O,e[7]=0,e[8]=k,e[9]=I,e[10]=z,e[11]=0,e[12]=i[0]+C-(S*C+T*M+k*E),e[13]=i[1]+M-(L*C+R*M+I*E),e[14]=i[2]+E-(A*C+O*M+z*E),e[15]=1,e},"fromScaling",0,function(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},"fromTranslation",0,function(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e},"fromValues",0,function(e,t,i,r,n,s,o,a,l,c,u,h,d,p,f,g){let m=new ts(16);return m[0]=e,m[1]=t,m[2]=i,m[3]=r,m[4]=n,m[5]=s,m[6]=o,m[7]=a,m[8]=l,m[9]=c,m[10]=u,m[11]=h,m[12]=d,m[13]=p,m[14]=f,m[15]=g,m},"fromXRotation",0,function(e,t){let i=Math.sin(t),r=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=i,e[7]=0,e[8]=0,e[9]=-i,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},"fromYRotation",0,function(e,t){let i=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=0,e[2]=-i,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=i,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},"fromZRotation",0,function(e,t){let i=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=i,e[2]=0,e[3]=0,e[4]=-i,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},"frustum",0,tx,"getRotation",0,function(e,t){let i=new ts(3);tb(i,t);let r=1/i[0],n=1/i[1],s=1/i[2],o=t[0]*r,a=t[1]*n,l=t[2]*s,c=t[4]*r,u=t[5]*n,h=t[6]*s,d=t[8]*r,p=t[9]*n,f=t[10]*s,g=o+u+f,m=0;return g>0?(m=2*Math.sqrt(g+1),e[3]=.25*m,e[0]=(h-p)/m,e[1]=(d-l)/m,e[2]=(a-c)/m):o>u&&o>f?(m=2*Math.sqrt(1+o-u-f),e[3]=(h-p)/m,e[0]=.25*m,e[1]=(a+c)/m,e[2]=(d+l)/m):u>f?(m=2*Math.sqrt(1+u-o-f),e[3]=(d-l)/m,e[0]=(a+c)/m,e[1]=.25*m,e[2]=(h+p)/m):(m=2*Math.sqrt(1+f-o-u),e[3]=(a-c)/m,e[0]=(d+l)/m,e[1]=(h+p)/m,e[2]=.25*m),e},"getScaling",0,tb,"getTranslation",0,function(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e},"identity",0,tl,"invert",0,tu,"lookAt",0,tM,"mul",0,td,"multiply",0,td,"multiplyScalar",0,function(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*i,e[9]=t[9]*i,e[10]=t[10]*i,e[11]=t[11]*i,e[12]=t[12]*i,e[13]=t[13]*i,e[14]=t[14]*i,e[15]=t[15]*i,e},"multiplyScalarAndAdd",0,function(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r,e[3]=t[3]+i[3]*r,e[4]=t[4]+i[4]*r,e[5]=t[5]+i[5]*r,e[6]=t[6]+i[6]*r,e[7]=t[7]+i[7]*r,e[8]=t[8]+i[8]*r,e[9]=t[9]+i[9]*r,e[10]=t[10]+i[10]*r,e[11]=t[11]+i[11]*r,e[12]=t[12]+i[12]*r,e[13]=t[13]+i[13]*r,e[14]=t[14]+i[14]*r,e[15]=t[15]+i[15]*r,e},"ortho",0,tC,"orthoNO",0,tC,"orthoZO",0,function(e,t,i,r,n,s,o){let a=1/(t-i),l=1/(r-n),c=1/(s-o);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=c,e[11]=0,e[12]=(t+i)*a,e[13]=(n+r)*l,e[14]=s*c,e[15]=1,e},"perspective",0,tP,"perspectiveFromFieldOfView",0,function(e,t,i,r){let n=Math.tan(t.upDegrees*Math.PI/180),s=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),a=Math.tan(t.rightDegrees*Math.PI/180),l=2/(o+a),c=2/(n+s);return e[0]=l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=c,e[6]=0,e[7]=0,e[8]=-((o-a)*l*.5),e[9]=(n-s)*c*.5,e[10]=r/(i-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*i/(i-r),e[15]=0,e},"perspectiveNO",0,tP,"perspectiveZO",0,function(e,t,i,r,n){let s=1/Math.tan(t/2);if(e[0]=s/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=n&&n!==1/0){let t=1/(r-n);e[10]=n*t,e[14]=n*r*t}else e[10]=-1,e[14]=-r;return e},"rotate",0,tg,"rotateX",0,tm,"rotateY",0,tv,"rotateZ",0,t_,"scale",0,tf,"set",0,function(e,t,i,r,n,s,o,a,l,c,u,h,d,p,f,g,m){return e[0]=t,e[1]=i,e[2]=r,e[3]=n,e[4]=s,e[5]=o,e[6]=a,e[7]=l,e[8]=c,e[9]=u,e[10]=h,e[11]=d,e[12]=p,e[13]=f,e[14]=g,e[15]=m,e},"str",0,function(e){return`mat4(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}, ${e[4]}, ${e[5]}, ${e[6]}, ${e[7]}, ${e[8]}, ${e[9]}, ${e[10]}, ${e[11]}, ${e[12]}, ${e[13]}, ${e[14]}, ${e[15]})`},"sub",0,tE,"subtract",0,tE,"targetTo",0,function(e,t,i,r){let n=t[0],s=t[1],o=t[2],a=r[0],l=r[1],c=r[2],u=n-i[0],h=s-i[1],d=o-i[2],p=u*u+h*h+d*d;p>0&&(u*=p=1/Math.sqrt(p),h*=p,d*=p);let f=l*d-c*h,g=c*u-a*d,m=a*h-l*u;return(p=f*f+g*g+m*m)>0&&(f*=p=1/Math.sqrt(p),g*=p,m*=p),e[0]=f,e[1]=g,e[2]=m,e[3]=0,e[4]=h*m-d*g,e[5]=d*f-u*m,e[6]=u*g-h*f,e[7]=0,e[8]=u,e[9]=h,e[10]=d,e[11]=0,e[12]=n,e[13]=s,e[14]=o,e[15]=1,e},"translate",0,tp,"transpose",0,tc],32664);var tS=e.i(32664),tS=tS;function tL(){let e=new ts(4);return ts!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function tA(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e[3]=t[3]-i[3],e}function tT(e,t,i){return e[0]=t[0]*i[0],e[1]=t[1]*i[1],e[2]=t[2]*i[2],e[3]=t[3]*i[3],e}function tR(e,t,i){return e[0]=t[0]/i[0],e[1]=t[1]/i[1],e[2]=t[2]/i[2],e[3]=t[3]/i[3],e}function tO(e,t){let i=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2],s=t[3]-e[3];return Math.sqrt(i*i+r*r+n*n+s*s)}function tk(e,t){let i=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2],s=t[3]-e[3];return i*i+r*r+n*n+s*s}function tI(e){let t=e[0],i=e[1],r=e[2],n=e[3];return Math.sqrt(t*t+i*i+r*r+n*n)}function tz(e){let t=e[0],i=e[1],r=e[2],n=e[3];return t*t+i*i+r*r+n*n}function tj(e,t,i){let r=t[0],n=t[1],s=t[2],o=t[3];return e[0]=i[0]*r+i[4]*n+i[8]*s+i[12]*o,e[1]=i[1]*r+i[5]*n+i[9]*s+i[13]*o,e[2]=i[2]*r+i[6]*n+i[10]*s+i[14]*o,e[3]=i[3]*r+i[7]*n+i[11]*s+i[15]*o,e}let tD=(s=tL(),function(e,t,i,r,n,o){let a,l;for(t||(t=4),i||(i=0),l=r?Math.min(r*t+i,e.length):e.length,a=i;a<l;a+=t)s[0]=e[a],s[1]=e[a+1],s[2]=e[a+2],s[3]=e[a+3],n(s,s,o),e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3];return e});e.s(["add",0,function(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e[3]=t[3]+i[3],e},"ceil",0,function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},"clone",0,function(e){let t=new ts(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},"copy",0,function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},"create",0,tL,"cross",0,function(e,t,i,r){let n=i[0]*r[1]-i[1]*r[0],s=i[0]*r[2]-i[2]*r[0],o=i[0]*r[3]-i[3]*r[0],a=i[1]*r[2]-i[2]*r[1],l=i[1]*r[3]-i[3]*r[1],c=i[2]*r[3]-i[3]*r[2],u=t[0],h=t[1],d=t[2],p=t[3];return e[0]=h*c-d*l+p*a,e[1]=-(u*c)+d*o-p*s,e[2]=u*l-h*o+p*n,e[3]=-(u*a)+h*s-d*n,e},"dist",0,tO,"distance",0,tO,"div",0,tR,"divide",0,tR,"dot",0,function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]},"equals",0,function(e,t){let i=e[0],r=e[1],n=e[2],s=e[3],o=t[0],a=t[1],l=t[2],c=t[3];return Math.abs(i-o)<=1e-6*Math.max(1,Math.abs(i),Math.abs(o))&&Math.abs(r-a)<=1e-6*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-l)<=1e-6*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(s-c)<=1e-6*Math.max(1,Math.abs(s),Math.abs(c))},"exactEquals",0,function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]},"floor",0,function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},"forEach",0,tD,"fromValues",0,function(e,t,i,r){let n=new ts(4);return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n},"inverse",0,function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},"len",0,tI,"length",0,tI,"lerp",0,function(e,t,i,r){let n=t[0],s=t[1],o=t[2],a=t[3];return e[0]=n+r*(i[0]-n),e[1]=s+r*(i[1]-s),e[2]=o+r*(i[2]-o),e[3]=a+r*(i[3]-a),e},"max",0,function(e,t,i){return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e[2]=Math.max(t[2],i[2]),e[3]=Math.max(t[3],i[3]),e},"min",0,function(e,t,i){return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e[2]=Math.min(t[2],i[2]),e[3]=Math.min(t[3],i[3]),e},"mul",0,tT,"multiply",0,tT,"negate",0,function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},"normalize",0,function(e,t){let i=t[0],r=t[1],n=t[2],s=t[3],o=i*i+r*r+n*n+s*s;return o>0&&(o=1/Math.sqrt(o)),e[0]=i*o,e[1]=r*o,e[2]=n*o,e[3]=s*o,e},"random",0,function(e,t){let i,r,n,s,o,a;t=void 0===t?1:t;do o=(i=2*to()-1)*i+(r=2*to()-1)*r;while(o>=1)do a=(n=2*to()-1)*n+(s=2*to()-1)*s;while(a>=1)let l=Math.sqrt((1-o)/a);return e[0]=t*i,e[1]=t*r,e[2]=t*n*l,e[3]=t*s*l,e},"round",0,function(e,t){return e[0]=ta(t[0]),e[1]=ta(t[1]),e[2]=ta(t[2]),e[3]=ta(t[3]),e},"scale",0,function(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e},"scaleAndAdd",0,function(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r,e[3]=t[3]+i[3]*r,e},"set",0,function(e,t,i,r,n){return e[0]=t,e[1]=i,e[2]=r,e[3]=n,e},"sqrDist",0,tk,"sqrLen",0,tz,"squaredDistance",0,tk,"squaredLength",0,tz,"str",0,function(e){return`vec4(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`},"sub",0,tA,"subtract",0,tA,"transformMat4",0,tj,"transformQuat",0,function(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[0],a=i[1],l=i[2],c=i[3],u=c*r+a*s-l*n,h=c*n+l*r-o*s,d=c*s+o*n-a*r,p=-o*r-a*n-l*s;return e[0]=u*c+-(p*o)+-(h*l)- -(d*a),e[1]=h*c+-(p*a)+-(d*o)- -(u*l),e[2]=d*c+-(p*l)+-(u*a)- -(h*o),e[3]=t[3],e},"zero",0,function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}],22642);var tF=e.i(22642),tF=tF,tN=e.i(25350);let tU=new tN.Log({id:"deck"});(c=p||(p={}))[c.Start=1]="Start",c[c.Move=2]="Move",c[c.End=4]="End",c[c.Cancel=8]="Cancel",(u=f||(f={}))[u.None=0]="None",u[u.Left=1]="Left",u[u.Right=2]="Right",u[u.Up=4]="Up",u[u.Down=8]="Down",u[u.Horizontal=3]="Horizontal",u[u.Vertical=12]="Vertical",u[u.All=15]="All",(h=g||(g={}))[h.Possible=1]="Possible",h[h.Began=2]="Began",h[h.Changed=4]="Changed",h[h.Ended=8]="Ended",h[h.Recognized=8]="Recognized",h[h.Cancelled=16]="Cancelled",h[h.Failed=32]="Failed";let tB="manipulation",t$="none",tV="pan-x",tW="pan-y";class tG{constructor(e,t){this.actions="",this.manager=e,this.set(t)}set(e){"compute"===e&&(e=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=e,this.actions=e)}update(){this.set(this.manager.options.touchAction)}compute(){let e=[];for(let t of this.manager.recognizers)t.options.enable&&(e=e.concat(t.getTouchAction()));var t=e.join(" ");if(t.includes(t$))return t$;let i=t.includes(tV),r=t.includes(tW);return i&&r?t$:i||r?i?tV:tW:t.includes(tB)?tB:"auto"}}function tH(e){return e.trim().split(/\s+/g)}function tq(e,t,i){if(e)for(let r of tH(t))e.addEventListener(r,i,!1)}function tZ(e,t,i){if(e)for(let r of tH(t))e.removeEventListener(r,i,!1)}function tY(e){return(e.ownerDocument||e).defaultView}function tK(e){let t=e.length;if(1===t)return{x:Math.round(e[0].clientX),y:Math.round(e[0].clientY)};let i=0,r=0,n=0;for(;n<t;)i+=e[n].clientX,r+=e[n].clientY,n++;return{x:Math.round(i/t),y:Math.round(r/t)}}function tX(e){let t=[],i=0;for(;i<e.pointers.length;)t[i]={clientX:Math.round(e.pointers[i].clientX),clientY:Math.round(e.pointers[i].clientY)},i++;return{timeStamp:Date.now(),pointers:t,center:tK(t),deltaX:e.deltaX,deltaY:e.deltaY}}function tJ(e,t){let i=t.x-e.x,r=t.y-e.y;return Math.sqrt(i*i+r*r)}function tQ(e,t){let i=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.sqrt(i*i+r*r)}function t0(e,t){let i=t.clientX-e.clientX;return 180*Math.atan2(t.clientY-e.clientY,i)/Math.PI}function t1(e,t){return e===t?f.None:Math.abs(e)>=Math.abs(t)?e<0?f.Left:f.Right:t<0?f.Up:f.Down}function t2(e,t,i){return{x:t/e||0,y:i/e||0}}class t3{constructor(e){this.evEl="",this.evWin="",this.evTarget="",this.domHandler=e=>{this.manager.options.enable&&this.handler(e)},this.manager=e,this.element=e.element,this.target=e.options.inputTarget||e.element}callback(e,t){var i;let r,n,s,o,a;i=this.manager,r=t.pointers.length,n=t.changedPointers.length,s=e&p.Start&&r-n==0,o=e&(p.End|p.Cancel)&&r-n==0,t.isFirst=!!s,t.isFinal=!!o,s&&(i.session={}),t.eventType=e,a=function(e,t){var i,r;let n,s,o,a,l,{session:c}=e,{pointers:u}=t,{length:h}=u;c.firstInput||(c.firstInput=tX(t)),h>1&&!c.firstMultiple?c.firstMultiple=tX(t):1===h&&(c.firstMultiple=!1);let{firstInput:d,firstMultiple:f}=c,g=f?f.center:d.center,m=t.center=tK(u);t.timeStamp=Date.now(),t.deltaTime=t.timeStamp-d.timeStamp,n=m.x-g.x,t.angle=180*Math.atan2(m.y-g.y,n)/Math.PI,t.distance=tJ(g,m);let{deltaX:v,deltaY:_}=(s=t.center,o=c.offsetDelta,a=c.prevDelta,l=c.prevInput,(t.eventType===p.Start||l?.eventType===p.End)&&(a=c.prevDelta={x:l?.deltaX||0,y:l?.deltaY||0},o=c.offsetDelta={x:s.x,y:s.y}),{deltaX:a.x+(s.x-o.x),deltaY:a.y+(s.y-o.y)});t.deltaX=v,t.deltaY=_,t.offsetDirection=t1(t.deltaX,t.deltaY);let y=t2(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=y.x,t.overallVelocityY=y.y,t.overallVelocity=Math.abs(y.x)>Math.abs(y.y)?y.x:y.y,t.scale=f?(i=f.pointers,tQ(u[0],u[1])/tQ(i[0],i[1])):1,t.rotation=f?(r=f.pointers,t0(u[1],u[0])-t0(r[1],r[0])):0,t.maxPointers=c.prevInput?t.pointers.length>c.prevInput.maxPointers?t.pointers.length:c.prevInput.maxPointers:t.pointers.length;let b=e.element;return function(e,t){let i=e;for(;i;){if(i===t)return!0;i=i.parentNode}return!1}(t.srcEvent.target,b)&&(b=t.srcEvent.target),t.target=b,!function(e,t){let i,r,n,s,o=e.lastInterval||t,a=t.timeStamp-o.timeStamp;if(t.eventType!==p.Cancel&&(a>25||void 0===o.velocity)){let l=t.deltaX-o.deltaX,c=t.deltaY-o.deltaY,u=t2(a,l,c);r=u.x,n=u.y,i=Math.abs(u.x)>Math.abs(u.y)?u.x:u.y,s=t1(l,c),e.lastInterval=t}else i=o.velocity,r=o.velocityX,n=o.velocityY,s=o.direction;t.velocity=i,t.velocityX=r,t.velocityY=n,t.direction=s}(c,t),t}(i,t),i.emit("hammer.input",a),i.recognize(a),i.session.prevInput=a}init(){tq(this.element,this.evEl,this.domHandler),tq(this.target,this.evTarget,this.domHandler),tq(tY(this.element),this.evWin,this.domHandler)}destroy(){tZ(this.element,this.evEl,this.domHandler),tZ(this.target,this.evTarget,this.domHandler),tZ(tY(this.element),this.evWin,this.domHandler)}}let t4={pointerdown:p.Start,pointermove:p.Move,pointerup:p.End,pointercancel:p.Cancel,pointerout:p.Cancel};class t6 extends t3{constructor(e){super(e),this.evEl="pointerdown",this.evWin="pointermove pointerup pointercancel",this.store=this.manager.session.pointerEvents=[],this.init()}handler(e){let{store:t}=this,i=!1,r=t4[e.type],n=e.pointerType,s="touch"===n,o=t.findIndex(t=>t.pointerId===e.pointerId);r&p.Start&&(e.buttons||s)?o<0&&(t.push(e),o=t.length-1):r&(p.End|p.Cancel)&&(i=!0),!(o<0)&&(t[o]=e,this.callback(r,{pointers:t,changedPointers:[e],eventType:r,pointerType:n,srcEvent:e}),i&&t.splice(o,1))}}let t5=["","webkit","Moz","MS","ms","o"],t8={touchAction:"compute",enable:!0,inputTarget:null,cssProps:{userSelect:"none",userDrag:"none",touchCallout:"none",tapHighlightColor:"rgba(0,0,0,0)"}};class t9{constructor(e,t){this.options={...t8,...t,cssProps:{...t8.cssProps,...t.cssProps},inputTarget:t.inputTarget||e},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new t6(this),this.touchAction=new tG(this,this.options.touchAction),this.toggleCssProps(!0)}set(e){return Object.assign(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this}stop(e){this.session.stopped=e?2:1}recognize(e){let t,{session:i}=this;if(i.stopped)return;this.session.prevented&&e.srcEvent.preventDefault();let{recognizers:r}=this,{curRecognizer:n}=i;(!n||n&&n.state&g.Recognized)&&(n=i.curRecognizer=null);let s=0;for(;s<r.length;)t=r[s],2!==i.stopped&&(!n||t===n||t.canRecognizeWith(n))?t.recognize(e):t.reset(),!n&&t.state&(g.Began|g.Changed|g.Ended)&&(n=i.curRecognizer=t),s++}get(e){let{recognizers:t}=this;for(let i=0;i<t.length;i++)if(t[i].options.event===e)return t[i];return null}add(e){if(Array.isArray(e)){for(let t of e)this.add(t);return this}let t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e}remove(e){if(Array.isArray(e)){for(let t of e)this.remove(t);return this}let t="string"==typeof e?this.get(e):e;if(t){let{recognizers:e}=this,i=e.indexOf(t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this}on(e,t){if(!e||!t)return;let{handlers:i}=this;for(let r of tH(e))i[r]=i[r]||[],i[r].push(t)}off(e,t){if(!e)return;let{handlers:i}=this;for(let r of tH(e))t?i[r]&&i[r].splice(i[r].indexOf(t),1):delete i[r]}emit(e,t){let i=this.handlers[e]&&this.handlers[e].slice();if(!i||!i.length)return;t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};let r=0;for(;r<i.length;)i[r](t),r++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(e){let{element:t}=this;if(t){for(let[i,r]of Object.entries(this.options.cssProps)){let n=function(e,t){let i=t[0].toUpperCase()+t.slice(1);for(let r of t5){let n=r?r+i:t;if(n in e)return n}}(t.style,i);e?(this.oldCssProps[n]=t.style[n],t.style[n]=r):t.style[n]=this.oldCssProps[n]||""}e||(this.oldCssProps={})}}}let t7=1;function ie(e){return e&g.Cancelled?"cancel":e&g.Ended?"end":e&g.Changed?"move":e&g.Began?"start":""}class it{constructor(e){this.options=e,this.id=t7++,this.state=g.Possible,this.simultaneous={},this.requireFail=[]}set(e){return Object.assign(this.options,e),this.manager.touchAction.update(),this}recognizeWith(e){let t;if(Array.isArray(e)){for(let t of e)this.recognizeWith(t);return this}if("string"==typeof e){if(!(t=this.manager.get(e)))throw Error(`Cannot find recognizer ${e}`)}else t=e;let{simultaneous:i}=this;return i[t.id]||(i[t.id]=t,t.recognizeWith(this)),this}dropRecognizeWith(e){let t;if(Array.isArray(e)){for(let t of e)this.dropRecognizeWith(t);return this}return(t="string"==typeof e?this.manager.get(e):e)&&delete this.simultaneous[t.id],this}requireFailure(e){let t;if(Array.isArray(e)){for(let t of e)this.requireFailure(t);return this}if("string"==typeof e){if(!(t=this.manager.get(e)))throw Error(`Cannot find recognizer ${e}`)}else t=e;let{requireFail:i}=this;return -1===i.indexOf(t)&&(i.push(t),t.requireFailure(this)),this}dropRequireFailure(e){let t;if(Array.isArray(e)){for(let t of e)this.dropRequireFailure(t);return this}if(t="string"==typeof e?this.manager.get(e):e){let e=this.requireFail.indexOf(t);e>-1&&this.requireFail.splice(e,1)}return this}hasRequireFailures(){return!!this.requireFail.find(e=>e.options.enable)}canRecognizeWith(e){return!!this.simultaneous[e.id]}emit(e){if(!e)return;let{state:t}=this;t<g.Ended&&this.manager.emit(this.options.event+ie(t),e),this.manager.emit(this.options.event,e),e.additionalEvent&&this.manager.emit(e.additionalEvent,e),t>=g.Ended&&this.manager.emit(this.options.event+ie(t),e)}tryEmit(e){this.canEmit()?this.emit(e):this.state=g.Failed}canEmit(){let e=0;for(;e<this.requireFail.length;){if(!(this.requireFail[e].state&(g.Failed|g.Possible)))return!1;e++}return!0}recognize(e){let t={...e};if(!this.options.enable){this.reset(),this.state=g.Failed;return}this.state&(g.Recognized|g.Cancelled|g.Failed)&&(this.state=g.Possible),this.state=this.process(t),this.state&(g.Began|g.Changed|g.Ended|g.Cancelled)&&this.tryEmit(t)}getEventNames(){return[this.options.event]}reset(){}}class ii extends it{attrTest(e){let t=this.options.pointers;return 0===t||e.pointers.length===t}process(e){let{state:t}=this,{eventType:i}=e,r=t&(g.Began|g.Changed),n=this.attrTest(e);return r&&(i&p.Cancel||!n)?t|g.Cancelled:r||n?i&p.End?t|g.Ended:t&g.Began?t|g.Changed:g.Began:g.Failed}}class ir extends it{constructor(e={}){super({enable:!0,event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...e}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[tB]}process(e){let{options:t}=this,i=e.pointers.length===t.pointers,r=e.distance<t.threshold,n=e.deltaTime<t.time;if(this.reset(),e.eventType&p.Start&&0===this.count)return this.failTimeout();if(r&&n&&i){if(e.eventType!==p.End)return this.failTimeout();let i=!this.pTime||e.timeStamp-this.pTime<t.interval,r=!this.pCenter||tJ(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,r&&i?this.count+=1:this.count=1,this._input=e,0==this.count%t.taps)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=g.Recognized,this.tryEmit(this._input)},t.interval),g.Began):g.Recognized}return g.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=g.Failed},this.options.interval),g.Failed}reset(){clearTimeout(this._timer)}emit(e){this.state===g.Recognized&&(e.tapCount=this.count,this.manager.emit(this.options.event,e))}}let is=["","start","move","end","cancel","up","down","left","right"];class io extends ii{constructor(e={}){super({enable:!0,pointers:1,event:"pan",threshold:10,direction:f.All,...e}),this.pX=null,this.pY=null}getTouchAction(){let{options:{direction:e}}=this,t=[];return e&f.Horizontal&&t.push(tW),e&f.Vertical&&t.push(tV),t}getEventNames(){return is.map(e=>this.options.event+e)}directionTest(e){let{options:t}=this,i=!0,{distance:r}=e,{direction:n}=e,s=e.deltaX,o=e.deltaY;return n&t.direction||(t.direction&f.Horizontal?(n=0===s?f.None:s<0?f.Left:f.Right,i=s!==this.pX,r=Math.abs(e.deltaX)):(n=0===o?f.None:o<0?f.Up:f.Down,i=o!==this.pY,r=Math.abs(e.deltaY))),e.direction=n,i&&r>t.threshold&&!!(n&t.direction)}attrTest(e){return super.attrTest(e)&&(!!(this.state&g.Began)||!(this.state&g.Began)&&this.directionTest(e))}emit(e){this.pX=e.deltaX,this.pY=e.deltaY;let t=f[e.direction].toLowerCase();t&&(e.additionalEvent=this.options.event+t),super.emit(e)}}let ia=["","start","move","end","cancel","in","out"];class il{constructor(e,t,i){this.element=e,this.callback=t,this.options=i}}let ic="u">typeof navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"";"u">typeof window?window:e.g,e.g;let iu=-1!==ic.indexOf("firefox");class ih extends il{constructor(e,t,i){super(e,t,{enable:!0,...i}),this.handleEvent=e=>{if(!this.options.enable)return;let t=e.deltaY;globalThis.WheelEvent&&(iu&&e.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(t/=globalThis.devicePixelRatio),e.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(t*=40)),0!==t&&t%4.000244140625==0&&(t=Math.floor(t/4.000244140625)),e.shiftKey&&t&&(t*=.25),this.callback({type:"wheel",center:{x:e.clientX,y:e.clientY},delta:-t,srcEvent:e,pointerType:"mouse",target:e.target})},e.addEventListener("wheel",this.handleEvent,{passive:!1})}destroy(){this.element.removeEventListener("wheel",this.handleEvent)}enableEventType(e,t){"wheel"===e&&(this.options.enable=t)}}let id=["mousedown","mousemove","mouseup","mouseover","mouseout","mouseleave"];class ip extends il{constructor(e,t,i){super(e,t,{enable:!0,...i}),this.handleEvent=e=>{this.handleOverEvent(e),this.handleOutEvent(e),this.handleEnterEvent(e),this.handleLeaveEvent(e),this.handleMoveEvent(e)},this.pressed=!1;const{enable:r}=this.options;this.enableMoveEvent=r,this.enableLeaveEvent=r,this.enableEnterEvent=r,this.enableOutEvent=r,this.enableOverEvent=r,id.forEach(t=>e.addEventListener(t,this.handleEvent))}destroy(){id.forEach(e=>this.element.removeEventListener(e,this.handleEvent))}enableEventType(e,t){switch(e){case"pointermove":this.enableMoveEvent=t;break;case"pointerover":this.enableOverEvent=t;break;case"pointerout":this.enableOutEvent=t;break;case"pointerenter":this.enableEnterEvent=t;break;case"pointerleave":this.enableLeaveEvent=t}}handleOverEvent(e){this.enableOverEvent&&"mouseover"===e.type&&this._emit("pointerover",e)}handleOutEvent(e){this.enableOutEvent&&"mouseout"===e.type&&this._emit("pointerout",e)}handleEnterEvent(e){this.enableEnterEvent&&"mouseenter"===e.type&&this._emit("pointerenter",e)}handleLeaveEvent(e){this.enableLeaveEvent&&"mouseleave"===e.type&&this._emit("pointerleave",e)}handleMoveEvent(e){if(this.enableMoveEvent)switch(e.type){case"mousedown":e.button>=0&&(this.pressed=!0);break;case"mousemove":0===e.buttons&&(this.pressed=!1),this.pressed||this._emit("pointermove",e);break;case"mouseup":this.pressed=!1}}_emit(e,t){this.callback({type:e,center:{x:t.clientX,y:t.clientY},srcEvent:t,pointerType:"mouse",target:t.target})}}let ig=["keydown","keyup"];class im extends il{constructor(e,t,i){super(e,t,{enable:!0,tabIndex:0,...i}),this.handleEvent=e=>{let t=e.target||e.srcElement;("INPUT"!==t.tagName||"text"!==t.type)&&"TEXTAREA"!==t.tagName&&(this.enableDownEvent&&"keydown"===e.type&&this.callback({type:"keydown",srcEvent:e,key:e.key,target:e.target}),this.enableUpEvent&&"keyup"===e.type&&this.callback({type:"keyup",srcEvent:e,key:e.key,target:e.target}))},this.enableDownEvent=this.options.enable,this.enableUpEvent=this.options.enable,e.tabIndex=this.options.tabIndex,e.style.outline="none",ig.forEach(t=>e.addEventListener(t,this.handleEvent))}destroy(){ig.forEach(e=>this.element.removeEventListener(e,this.handleEvent))}enableEventType(e,t){"keydown"===e&&(this.enableDownEvent=t),"keyup"===e&&(this.enableUpEvent=t)}}class iv extends il{constructor(e,t,i){super(e,t,i),this.handleEvent=e=>{this.options.enable&&this.callback({type:"contextmenu",center:{x:e.clientX,y:e.clientY},srcEvent:e,pointerType:"mouse",target:e.target})},e.addEventListener("contextmenu",this.handleEvent)}destroy(){this.element.removeEventListener("contextmenu",this.handleEvent)}enableEventType(e,t){"contextmenu"===e&&(this.options.enable=t)}}let i_={pointerdown:1,pointermove:2,pointerup:4,mousedown:1,mousemove:2,mouseup:4},iy={srcElement:"root",priority:0};class ib{constructor(e,t){this.handleEvent=e=>{if(this.isEmpty())return;let t=this._normalizeEvent(e),i=e.srcEvent.target;for(;i&&i!==t.rootElement;){if(this._emit(t,i),t.handled)return;i=i.parentNode}this._emit(t,"root")},this.eventManager=e,this.recognizerName=t,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(e,t,i,r=!1,n=!1){let{handlers:s,handlersByElement:o}=this,a={...iy,...i},l=o.get(a.srcElement);l||(l=[],o.set(a.srcElement,l));let c={type:e,handler:t,srcElement:a.srcElement,priority:a.priority};r&&(c.once=!0),n&&(c.passive=!0),s.push(c),this._active=this._active||!c.passive;let u=l.length-1;for(;u>=0&&!(l[u].priority>=c.priority);)u--;l.splice(u+1,0,c)}remove(e,t){let{handlers:i,handlersByElement:r}=this;for(let n=i.length-1;n>=0;n--){let s=i[n];if(s.type===e&&s.handler===t){i.splice(n,1);let e=r.get(s.srcElement);e.splice(e.indexOf(s),1),0===e.length&&r.delete(s.srcElement)}}this._active=i.some(e=>!e.passive)}_emit(e,t){let i=this.handlersByElement.get(t);if(i){let t=!1,r=()=>{e.handled=!0},n=()=>{e.handled=!0,t=!0},s=[];for(let o=0;o<i.length;o++){let{type:a,handler:l,once:c}=i[o];if(l({...e,type:a,stopPropagation:r,stopImmediatePropagation:n}),c&&s.push(i[o]),t)break}for(let e=0;e<s.length;e++){let{type:t,handler:i}=s[e];this.remove(t,i)}}}_normalizeEvent(e){let t=this.eventManager.getElement();return{...e,...function(e){let t=i_[e.srcEvent.type];if(!t)return null;let{buttons:i,button:r}=e.srcEvent,n=!1,s=!1,o=!1;return 2===t?(n=!!(1&i),s=!!(4&i),o=!!(2&i)):(n=0===r,s=1===r,o=2===r),{leftButton:n,middleButton:s,rightButton:o}}(e),...function(e,t){let i=e.center;if(!i)return null;let r=t.getBoundingClientRect(),n=r.width/t.offsetWidth||1,s=r.height/t.offsetHeight||1,o={x:(i.x-r.left-t.clientLeft)/n,y:(i.y-r.top-t.clientTop)/s};return{center:i,offsetCenter:o}}(e,t),preventDefault:()=>{e.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:t}}}class iw{constructor(e=null,t={}){if(this._onBasicInput=e=>{this.manager.emit(e.srcEvent.type,e)},this._onOtherEvent=e=>{this.manager.emit(e.type,e)},this.options={recognizers:[],events:{},touchAction:"compute",tabIndex:0,cssProps:{},...t},this.events=new Map,this.element=e,!e)return;for(const t of(this.manager=new t9(e,this.options),this.options.recognizers)){const{recognizer:e,recognizeWith:i,requireFailure:r}=function(e){let t;if("recognizer"in e)return e;let i=Array.isArray(e)?[...e]:[e];return{recognizer:t="function"==typeof i[0]?new(i.shift())(i.shift()||{}):i.shift(),recognizeWith:"string"==typeof i[0]?[i[0]]:i[0],requireFailure:"string"==typeof i[1]?[i[1]]:i[1]}}(t);this.manager.add(e),i&&e.recognizeWith(i),r&&e.requireFailure(r)}this.manager.on("hammer.input",this._onBasicInput),this.wheelInput=new ih(e,this._onOtherEvent,{enable:!1}),this.moveInput=new ip(e,this._onOtherEvent,{enable:!1}),this.keyInput=new im(e,this._onOtherEvent,{enable:!1,tabIndex:t.tabIndex}),this.contextmenuInput=new iv(e,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}getElement(){return this.element}destroy(){this.element&&(this.wheelInput.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy())}on(e,t,i){this._addEventHandler(e,t,i,!1)}once(e,t,i){this._addEventHandler(e,t,i,!0)}watch(e,t,i){this._addEventHandler(e,t,i,!1,!0)}off(e,t){this._removeEventHandler(e,t)}_toggleRecognizer(e,t){let{manager:i}=this;if(!i)return;let r=i.get(e);r&&(r.set({enable:t}),i.touchAction.update()),this.wheelInput?.enableEventType(e,t),this.moveInput?.enableEventType(e,t),this.keyInput?.enableEventType(e,t),this.contextmenuInput?.enableEventType(e,t)}_addEventHandler(e,t,i,r,n){if("string"!=typeof e){for(let[s,o]of(i=t,Object.entries(e)))this._addEventHandler(s,o,i,r,n);return}let{manager:s,events:o}=this;if(!s)return;let a=o.get(e);!a&&(a=new ib(this,this._getRecognizerName(e)||e),o.set(e,a),s&&s.on(e,a.handleEvent)),a.add(e,t,i,r,n),a.isEmpty()||this._toggleRecognizer(a.recognizerName,!0)}_removeEventHandler(e,t){if("string"!=typeof e){for(let[t,i]of Object.entries(e))this._removeEventHandler(t,i);return}let{events:i}=this,r=i.get(e);if(r&&(r.remove(e,t),r.isEmpty())){let{recognizerName:e}=r,t=!1;for(let r of i.values())if(r.recognizerName===e&&!r.isEmpty()){t=!0;break}t||this._toggleRecognizer(e,!1)}}_getRecognizerName(e){return this.manager.recognizers.find(t=>t.getEventNames().includes(e))?.options.event}}let ix={DEFAULT:"default",LNGLAT:"lnglat",METER_OFFSETS:"meter-offsets",LNGLAT_OFFSETS:"lnglat-offsets",CARTESIAN:"cartesian"};Object.defineProperty(ix,"IDENTITY",{get:()=>(tU.deprecated("COORDINATE_SYSTEM.IDENTITY","COORDINATE_SYSTEM.CARTESIAN")(),ix.CARTESIAN)});let iP={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},iC={common:0,meters:1,pixels:2},iM={click:"onClick",dblclick:"onClick",panstart:"onDragStart",panmove:"onDrag",panend:"onDragEnd"},iE={multipan:[io,{threshold:10,direction:f.Vertical,pointers:2}],pinch:[class extends ii{constructor(e={}){super({enable:!0,event:"pinch",threshold:0,pointers:2,...e})}getTouchAction(){return[t$]}getEventNames(){return ia.map(e=>this.options.event+e)}attrTest(e){return super.attrTest(e)&&(Math.abs(e.scale-1)>this.options.threshold||!!(this.state&g.Began))}emit(e){if(1!==e.scale){let t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t}super.emit(e)}},{},null,["multipan"]],pan:[io,{threshold:1},["pinch"],["multipan"]],dblclick:[ir,{event:"dblclick",taps:2}],click:[ir,{event:"click"},null,["dblclick"]]};function iS(e){let t,i={};return r=>{for(let n in r)if(!function(e,t){if(e===t)return!0;if(Array.isArray(e)){let i=e.length;if(!t||t.length!==i)return!1;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}return!1}(r[n],i[n])){t=e(r),i=r;break}return t}}let iL=[0,0,0,0],iA=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],iT=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],iR=[0,0,0],iO=[0,0,0],ik={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function iI(e){let t=ik[e];if(void 0===t)throw Error(`Invalid coordinateSystem: ${e}`);return t}let iz=iS(function({viewport:e,devicePixelRatio:t,coordinateSystem:i,coordinateOrigin:r}){let{projectionCenter:n,viewProjectionMatrix:s,originCommon:o,cameraPosCommon:a,shaderCoordinateOrigin:l,geospatialOrigin:c}=function(e,t,i){let{viewMatrixUncentered:r,projectionMatrix:n}=e,{viewMatrix:s,viewProjectionMatrix:o}=e,a=iL,l=iL,c=e.cameraPosition,{geospatialOrigin:u,shaderCoordinateOrigin:h,offsetMode:d}=ij(e,t,i);return d&&(l=e.projectPosition(u||h),c=[c[0]-l[0],c[1]-l[1],c[2]-l[2]],l[3]=1,a=tF.transformMat4([],l,o),s=r||s,o=tS.multiply([],n,s),o=tS.multiply([],o,iA)),{viewMatrix:s,viewProjectionMatrix:o,projectionCenter:a,originCommon:l,cameraPosCommon:c,shaderCoordinateOrigin:h,geospatialOrigin:u}}(e,i,r),u=e.getDistanceScales(),h=[e.width*t,e.height*t],d=tF.transformMat4([],[0,0,-e.focalDistance,1],e.projectionMatrix)[3]||1,p={coordinateSystem:iI(i),projectionMode:e.projectionMode,coordinateOrigin:l,commonOrigin:o.slice(0,3),center:n,pseudoMeters:!!e._pseudoMeters,viewportSize:h,devicePixelRatio:t,focalDistance:d,commonUnitsPerMeter:u.unitsPerMeter,commonUnitsPerWorldUnit:u.unitsPerMeter,commonUnitsPerWorldUnit2:iR,scale:e.scale,wrapLongitude:!1,viewProjectionMatrix:s,modelMatrix:iT,cameraPosition:a};if(c){let t=e.getDistanceScales(c);switch(i){case"meter-offsets":p.commonUnitsPerWorldUnit=t.unitsPerMeter,p.commonUnitsPerWorldUnit2=t.unitsPerMeter2;break;case"lnglat":case"lnglat-offsets":e._pseudoMeters||(p.commonUnitsPerMeter=t.unitsPerMeter),p.commonUnitsPerWorldUnit=t.unitsPerDegree,p.commonUnitsPerWorldUnit2=t.unitsPerDegree2;break;case"cartesian":p.commonUnitsPerWorldUnit=[1,1,t.unitsPerMeter[2]],p.commonUnitsPerWorldUnit2=[0,0,t.unitsPerMeter2[2]]}}return p});function ij(e,t,i=iO){let r;i.length<3&&(i=[i[0],i[1],0]);let n=i,s=!0;switch(r="lnglat-offsets"===t||"meter-offsets"===t?i:e.isGeospatial?[Math.fround(e.longitude),Math.fround(e.latitude),0]:null,e.projectionMode){case iP.WEB_MERCATOR:("lnglat"===t||"cartesian"===t)&&(r=[0,0,0],s=!1);break;case iP.WEB_MERCATOR_AUTO_OFFSET:"lnglat"===t?n=r:"cartesian"===t&&(n=[Math.fround(e.center[0]),Math.fround(e.center[1]),0],r=e.unprojectPosition(n),n[0]-=i[0],n[1]-=i[1],n[2]-=i[2]);break;case iP.IDENTITY:(n=e.position.map(Math.fround))[2]=n[2]||0;break;case iP.GLOBE:s=!1,r=null;break;default:s=!1}return{geospatialOrigin:r,shaderCoordinateOrigin:n,offsetMode:s}}let iD=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"].map(e=>`const COORDINATE_SYSTEM_${e.toUpperCase().replaceAll("-","_")}: i32 = ${iI(e)};`).join(""),iF=Object.keys(iP).map(e=>`const PROJECTION_MODE_${e}: i32 = ${iP[e]};`).join(""),iN=Object.keys(iC).map(e=>`const UNIT_${e.toUpperCase()}: i32 = ${iC[e]};`).join(""),iU=`\
${iD}
${iF}
${iN}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`,iB=`\
${iU}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  return viewProjectionMatrix * position + center;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`,i$=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"].map(e=>`const int COORDINATE_SYSTEM_${e.toUpperCase().replaceAll("-","_")} = ${iI(e)};`).join(""),iV=Object.keys(iP).map(e=>`const int PROJECTION_MODE_${e} = ${iP[e]};`).join(""),iW=Object.keys(iC).map(e=>`const int UNIT_${e.toUpperCase()} = ${iC[e]};`).join(""),iG={},iH={name:"project",dependencies:[{name:"fp32",vs:tn},tr],source:iB,vs:`\
${i$}
${iV}
${iW}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`,getUniforms:function(e=iG){return"viewport"in e?function({viewport:e,devicePixelRatio:t=1,modelMatrix:i=null,coordinateSystem:r="default",coordinateOrigin:n=iO,autoWrapLongitude:s=!1}){"default"===r&&(r=e.isGeospatial?"lnglat":"cartesian");let o=iz({viewport:e,devicePixelRatio:t,coordinateSystem:r,coordinateOrigin:n});return o.wrapLongitude=s,o.modelMatrix=i||iT,o}(e):{}},uniformTypes:{wrapLongitude:"f32",coordinateSystem:"i32",commonUnitsPerMeter:"vec3<f32>",projectionMode:"i32",scale:"f32",commonUnitsPerWorldUnit:"vec3<f32>",commonUnitsPerWorldUnit2:"vec3<f32>",center:"vec4<f32>",modelMatrix:"mat4x4<f32>",viewProjectionMatrix:"mat4x4<f32>",viewportSize:"vec2<f32>",devicePixelRatio:"f32",focalDistance:"f32",cameraPosition:"vec3<f32>",coordinateOrigin:"vec3<f32>",commonOrigin:"vec3<f32>",pseudoMeters:"f32"}},iq={name:"project32",dependencies:[iH],source:`\
// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,vs:`\
vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`};globalThis.mathgl=globalThis.mathgl||{config:{EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1}};let iZ=globalThis.mathgl.config;function iY(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}function iK(e,t,i){return function(e,t,i){if(iY(e)){i=i||(e.clone?e.clone():Array(e.length));for(let r=0;r<i.length&&r<e.length;++r){let n="number"==typeof e?e:e[r];i[r]=t(n,r,i)}return i}return t(e)}(e,e=>Math.max(t,Math.min(i,e)))}function iX(e,t,i){return iY(e)?e.map((e,r)=>iX(e,t[r],i)):i*t+(1-i)*e}function iJ(e,t,i){let r=iZ.EPSILON;i&&(iZ.EPSILON=i);try{if(e===t)return!0;if(iY(e)&&iY(t)){if(e.length!==t.length)return!1;for(let i=0;i<e.length;++i)if(!iJ(e[i],t[i]))return!1;return!0}if(e&&e.equals)return e.equals(t);if(t&&t.equals)return t.equals(e);if("number"==typeof e&&"number"==typeof t)return Math.abs(e-t)<=iZ.EPSILON*Math.max(1,Math.abs(e),Math.abs(t));return!1}finally{iZ.EPSILON=r}}class iQ extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,t=0){for(let i=0;i<this.ELEMENTS;++i)this[i]=e[i+t];return this.check()}toArray(e=[],t=0){for(let i=0;i<this.ELEMENTS;++i)e[t+i]=this[i];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:iY(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(iZ)}formatString(e){let t="";for(let i=0;i<this.ELEMENTS;++i)t+=(i>0?", ":"")+function(e,{precision:t=iZ.precision}={}){return e=Math.round(e/iZ.EPSILON)*iZ.EPSILON,`${parseFloat(e.toPrecision(t))}`}(this[i],e);return`${e.printTypes?this.constructor.name:""}[${t}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(!iJ(this[t],e[t]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(this[t]!==e[t])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,t,i){if(void 0===i)return this.lerp(this,e,t);for(let r=0;r<this.ELEMENTS;++r){let n=e[r],s="number"==typeof t?t:t[r];this[r]=n+i*(s-n)}return this.check()}min(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.min(e[t],this[t]);return this.check()}max(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.max(e[t],this[t]);return this.check()}clamp(e,t){for(let i=0;i<this.ELEMENTS;++i)this[i]=Math.min(Math.max(this[i],e[i]),t[i]);return this.check()}add(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]+=t[e];return this.check()}subtract(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]-=t[e];return this.check()}scale(e){if("number"==typeof e)for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;else for(let t=0;t<this.ELEMENTS&&t<e.length;++t)this[t]*=e[t];return this.check()}multiplyByScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}check(){if(iZ.debug&&!this.validate())throw Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let t=0;t<this.ELEMENTS;++t)e=e&&Number.isFinite(this[t]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=e;return this.check()}addScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,t){for(let i=0;i<this.ELEMENTS;++i)this[i]=Math.min(Math.max(this[i],e),t);return this.check()}get elements(){return this}}function i0(e){if(!Number.isFinite(e))throw Error(`Invalid number ${JSON.stringify(e)}`);return e}function i1(e,t,i=""){if(iZ.debug&&!function(e,t){if(e.length!==t)return!1;for(let t=0;t<e.length;++t)if(!Number.isFinite(e[t]))return!1;return!0}(e,t))throw Error(`math.gl: ${i} some fields set to invalid numbers'`);return e}function i2(e,t){if(!e)throw Error(`math.gl assertion ${t}`)}class i3 extends iQ{get x(){return this[0]}set x(e){this[0]=i0(e)}get y(){return this[1]}set y(e){this[1]=i0(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let t=0;t<this.ELEMENTS;++t)e+=this[t]*this[t];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let t=0;for(let i=0;i<this.ELEMENTS;++i){let r=this[i]-e[i];t+=r*r}return i0(t)}dot(e){let t=0;for(let i=0;i<this.ELEMENTS;++i)t+=this[i]*e[i];return i0(t)}normalize(){let e=this.magnitude();if(0!==e)for(let t=0;t<this.ELEMENTS;++t)this[t]/=e;return this.check()}multiply(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]*=t[e];return this.check()}divide(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]/=t[e];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return i2(e>=0&&e<this.ELEMENTS,"index is out of range"),i0(this[e])}setComponent(e,t){return i2(e>=0&&e<this.ELEMENTS,"index is out of range"),this[e]=t,this.check()}addVectors(e,t){return this.copy(e).add(t)}subVectors(e,t){return this.copy(e).subtract(t)}multiplyVectors(e,t){return this.copy(e).multiply(t)}addScaledVector(e,t){return this.add(new this.constructor(e).multiplyScalar(t))}}function i4(){let e=new ts(3);return ts!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function i6(e){let t=e[0],i=e[1],r=e[2];return Math.sqrt(t*t+i*i+r*r)}function i5(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e}function i8(e,t,i){return e[0]=t[0]*i[0],e[1]=t[1]*i[1],e[2]=t[2]*i[2],e}function i9(e,t,i){return e[0]=t[0]/i[0],e[1]=t[1]/i[1],e[2]=t[2]/i[2],e}function i7(e,t){let i=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(i*i+r*r+n*n)}function re(e,t){let i=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2];return i*i+r*r+n*n}function rt(e){let t=e[0],i=e[1],r=e[2];return t*t+i*i+r*r}function ri(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function rr(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[0],a=i[1],l=i[2];return e[0]=n*l-s*a,e[1]=s*o-r*l,e[2]=r*a-n*o,e}function rn(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[3]*r+i[7]*n+i[11]*s+i[15];return o=o||1,e[0]=(i[0]*r+i[4]*n+i[8]*s+i[12])/o,e[1]=(i[1]*r+i[5]*n+i[9]*s+i[13])/o,e[2]=(i[2]*r+i[6]*n+i[10]*s+i[14])/o,e}function rs(e,t,i){let r=t[0],n=t[1],s=t[2];return e[0]=r*i[0]+n*i[3]+s*i[6],e[1]=r*i[1]+n*i[4]+s*i[7],e[2]=r*i[2]+n*i[5]+s*i[8],e}function ro(e,t,i){let r=i[0],n=i[1],s=i[2],o=i[3],a=t[0],l=t[1],c=t[2],u=n*c-s*l,h=s*a-r*c,d=r*l-n*a,p=n*d-s*h,f=s*u-r*d,g=r*h-n*u,m=2*o;return u*=m,h*=m,d*=m,p*=2,f*=2,g*=2,e[0]=a+u+p,e[1]=l+h+f,e[2]=c+d+g,e}function ra(e,t,i,r){let n=[],s=[];return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],s[0]=n[0],s[1]=n[1]*Math.cos(r)-n[2]*Math.sin(r),s[2]=n[1]*Math.sin(r)+n[2]*Math.cos(r),e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function rl(e,t,i,r){let n=[],s=[];return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],s[0]=n[2]*Math.sin(r)+n[0]*Math.cos(r),s[1]=n[1],s[2]=n[2]*Math.cos(r)-n[0]*Math.sin(r),e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function rc(e,t,i,r){let n=[],s=[];return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],s[0]=n[0]*Math.cos(r)-n[1]*Math.sin(r),s[1]=n[0]*Math.sin(r)+n[1]*Math.cos(r),s[2]=n[2],e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function ru(e,t){let i=e[0],r=e[1],n=e[2],s=t[0],o=t[1],a=t[2],l=Math.sqrt((i*i+r*r+n*n)*(s*s+o*o+a*a));return Math.acos(Math.min(Math.max(l&&ri(e,t)/l,-1),1))}let rh=(o=i4(),function(e,t,i,r,n,s){let a,l;for(t||(t=3),i||(i=0),l=r?Math.min(r*t+i,e.length):e.length,a=i;a<l;a+=t)o[0]=e[a],o[1]=e[a+1],o[2]=e[a+2],n(o,o,s),e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2];return e});function rd(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[3]*r+i[7]*n+i[11]*s||1;return e[0]=(i[0]*r+i[4]*n+i[8]*s)/o,e[1]=(i[1]*r+i[5]*n+i[9]*s)/o,e[2]=(i[2]*r+i[6]*n+i[10]*s)/o,e}e.s(["add",0,function(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e},"angle",0,ru,"bezier",0,function(e,t,i,r,n,s){let o=1-s,a=o*o,l=s*s,c=a*o,u=3*s*a,h=3*l*o,d=l*s;return e[0]=t[0]*c+i[0]*u+r[0]*h+n[0]*d,e[1]=t[1]*c+i[1]*u+r[1]*h+n[1]*d,e[2]=t[2]*c+i[2]*u+r[2]*h+n[2]*d,e},"ceil",0,function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},"clone",0,function(e){let t=new ts(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},"copy",0,function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},"create",0,i4,"cross",0,rr,"dist",0,i7,"distance",0,i7,"div",0,i9,"divide",0,i9,"dot",0,ri,"equals",0,function(e,t){let i=e[0],r=e[1],n=e[2],s=t[0],o=t[1],a=t[2];return Math.abs(i-s)<=1e-6*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(r-o)<=1e-6*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(n-a)<=1e-6*Math.max(1,Math.abs(n),Math.abs(a))},"exactEquals",0,function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]},"floor",0,function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e},"forEach",0,rh,"fromValues",0,function(e,t,i){let r=new ts(3);return r[0]=e,r[1]=t,r[2]=i,r},"hermite",0,function(e,t,i,r,n,s){let o=s*s,a=o*(2*s-3)+1,l=o*(s-2)+s,c=o*(s-1),u=o*(3-2*s);return e[0]=t[0]*a+i[0]*l+r[0]*c+n[0]*u,e[1]=t[1]*a+i[1]*l+r[1]*c+n[1]*u,e[2]=t[2]*a+i[2]*l+r[2]*c+n[2]*u,e},"inverse",0,function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},"len",0,i6,"length",0,i6,"lerp",0,function(e,t,i,r){let n=t[0],s=t[1],o=t[2];return e[0]=n+r*(i[0]-n),e[1]=s+r*(i[1]-s),e[2]=o+r*(i[2]-o),e},"max",0,function(e,t,i){return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e[2]=Math.max(t[2],i[2]),e},"min",0,function(e,t,i){return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e[2]=Math.min(t[2],i[2]),e},"mul",0,i8,"multiply",0,i8,"negate",0,function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e},"normalize",0,function(e,t){let i=t[0],r=t[1],n=t[2],s=i*i+r*r+n*n;return s>0&&(s=1/Math.sqrt(s)),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e},"random",0,function(e,t){t=void 0===t?1:t;let i=2*to()*Math.PI,r=2*to()-1,n=Math.sqrt(1-r*r)*t;return e[0]=Math.cos(i)*n,e[1]=Math.sin(i)*n,e[2]=r*t,e},"rotateX",0,ra,"rotateY",0,rl,"rotateZ",0,rc,"round",0,function(e,t){return e[0]=ta(t[0]),e[1]=ta(t[1]),e[2]=ta(t[2]),e},"scale",0,function(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e},"scaleAndAdd",0,function(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r,e},"set",0,function(e,t,i,r){return e[0]=t,e[1]=i,e[2]=r,e},"slerp",0,function(e,t,i,r){let n=Math.acos(Math.min(Math.max(ri(t,i),-1),1)),s=Math.sin(n),o=Math.sin((1-r)*n)/s,a=Math.sin(r*n)/s;return e[0]=o*t[0]+a*i[0],e[1]=o*t[1]+a*i[1],e[2]=o*t[2]+a*i[2],e},"sqrDist",0,re,"sqrLen",0,rt,"squaredDistance",0,re,"squaredLength",0,rt,"str",0,function(e){return`vec3(${e[0]}, ${e[1]}, ${e[2]})`},"sub",0,i5,"subtract",0,i5,"transformMat3",0,rs,"transformMat4",0,rn,"transformQuat",0,ro,"zero",0,function(e){return e[0]=0,e[1]=0,e[2]=0,e}],93311);let rp=[0,0,0];class rf extends i3{static get ZERO(){return t||Object.freeze(t=new rf(0,0,0)),t}constructor(e=0,t=0,i=0){super(-0,-0,-0),1==arguments.length&&iY(e)?this.copy(e):(iZ.debug&&(i0(e),i0(t),i0(i)),this[0]=e,this[1]=t,this[2]=i)}set(e,t,i){return this[0]=e,this[1]=t,this[2]=i,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return iZ.debug&&(i0(e.x),i0(e.y),i0(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=i0(e)}angle(e){return ru(this,e)}cross(e){return rr(this,this,e),this.check()}rotateX({radians:e,origin:t=rp}){return ra(this,this,t,e),this.check()}rotateY({radians:e,origin:t=rp}){return rl(this,this,t,e),this.check()}rotateZ({radians:e,origin:t=rp}){return rc(this,this,t,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return rn(this,this,e),this.check()}transformAsVector(e){return rd(this,this,e),this.check()}transformByMatrix3(e){return rs(this,this,e),this.check()}transformByMatrix2(e){let t,i;return t=this[0],i=this[1],this[0]=e[0]*t+e[2]*i,this[1]=e[1]*t+e[3]*i,this[2]=this[2],this.check()}transformByQuaternion(e){return ro(this,this,e),this.check()}}class rg extends iQ{toString(){let e="[";if(iZ.printRowMajor){e+="row-major:";for(let t=0;t<this.RANK;++t)for(let i=0;i<this.RANK;++i)e+=` ${this[i*this.RANK+t]}`}else{e+="column-major:";for(let t=0;t<this.ELEMENTS;++t)e+=` ${this[t]}`}return e+"]"}getElementIndex(e,t){return t*this.RANK+e}getElement(e,t){return this[t*this.RANK+e]}setElement(e,t,i){return this[t*this.RANK+e]=i0(i),this}getColumn(e,t=Array(this.RANK).fill(-0)){let i=e*this.RANK;for(let e=0;e<this.RANK;++e)t[e]=this[i+e];return t}setColumn(e,t){let i=e*this.RANK;for(let e=0;e<this.RANK;++e)this[i+e]=t[e];return this}}function rm(){let e=new ts(2);return ts!=Float32Array&&(e[0]=0,e[1]=0),e}function rv(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e}function r_(e,t,i){return e[0]=t[0]*i[0],e[1]=t[1]*i[1],e}function ry(e,t,i){return e[0]=t[0]/i[0],e[1]=t[1]/i[1],e}function rb(e,t){let i=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(i*i+r*r)}function rw(e,t){let i=t[0]-e[0],r=t[1]-e[1];return i*i+r*r}function rx(e){let t=e[0],i=e[1];return Math.sqrt(t*t+i*i)}function rP(e){let t=e[0],i=e[1];return t*t+i*i}function rC(e,t,i){let r=t[0],n=t[1];return e[0]=i[0]*r+i[4]*n+i[12],e[1]=i[1]*r+i[5]*n+i[13],e}let rM=(a=rm(),function(e,t,i,r,n,s){let o,l;for(t||(t=2),i||(i=0),l=r?Math.min(r*t+i,e.length):e.length,o=i;o<l;o+=t)a[0]=e[o],a[1]=e[o+1],n(a,a,s),e[o]=a[0],e[o+1]=a[1];return e});e.s(["add",0,function(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e},"angle",0,function(e,t){let i=e[0],r=e[1],n=t[0],s=t[1],o=Math.sqrt((i*i+r*r)*(n*n+s*s));return Math.acos(Math.min(Math.max(o&&(i*n+r*s)/o,-1),1))},"ceil",0,function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},"clone",0,function(e){let t=new ts(2);return t[0]=e[0],t[1]=e[1],t},"copy",0,function(e,t){return e[0]=t[0],e[1]=t[1],e},"create",0,rm,"cross",0,function(e,t,i){let r=t[0]*i[1]-t[1]*i[0];return e[0]=e[1]=0,e[2]=r,e},"dist",0,rb,"distance",0,rb,"div",0,ry,"divide",0,ry,"dot",0,function(e,t){return e[0]*t[0]+e[1]*t[1]},"equals",0,function(e,t){let i=e[0],r=e[1],n=t[0],s=t[1];return Math.abs(i-n)<=1e-6*Math.max(1,Math.abs(i),Math.abs(n))&&Math.abs(r-s)<=1e-6*Math.max(1,Math.abs(r),Math.abs(s))},"exactEquals",0,function(e,t){return e[0]===t[0]&&e[1]===t[1]},"floor",0,function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},"forEach",0,rM,"fromValues",0,function(e,t){let i=new ts(2);return i[0]=e,i[1]=t,i},"inverse",0,function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},"len",0,rx,"length",0,rx,"lerp",0,function(e,t,i,r){let n=t[0],s=t[1];return e[0]=n+r*(i[0]-n),e[1]=s+r*(i[1]-s),e},"max",0,function(e,t,i){return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e},"min",0,function(e,t,i){return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e},"mul",0,r_,"multiply",0,r_,"negate",0,function(e,t){return e[0]=-t[0],e[1]=-t[1],e},"normalize",0,function(e,t){let i=t[0],r=t[1],n=i*i+r*r;return n>0&&(n=1/Math.sqrt(n)),e[0]=t[0]*n,e[1]=t[1]*n,e},"random",0,function(e,t){t=void 0===t?1:t;let i=2*to()*Math.PI;return e[0]=Math.cos(i)*t,e[1]=Math.sin(i)*t,e},"rotate",0,function(e,t,i,r){let n=t[0]-i[0],s=t[1]-i[1],o=Math.sin(r),a=Math.cos(r);return e[0]=n*a-s*o+i[0],e[1]=n*o+s*a+i[1],e},"round",0,function(e,t){return e[0]=ta(t[0]),e[1]=ta(t[1]),e},"scale",0,function(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e},"scaleAndAdd",0,function(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e},"set",0,function(e,t,i){return e[0]=t,e[1]=i,e},"sqrDist",0,rw,"sqrLen",0,rP,"squaredDistance",0,rw,"squaredLength",0,rP,"str",0,function(e){return`vec2(${e[0]}, ${e[1]})`},"sub",0,rv,"subtract",0,rv,"transformMat2",0,function(e,t,i){let r=t[0],n=t[1];return e[0]=i[0]*r+i[2]*n,e[1]=i[1]*r+i[3]*n,e},"transformMat2d",0,function(e,t,i){let r=t[0],n=t[1];return e[0]=i[0]*r+i[2]*n+i[4],e[1]=i[1]*r+i[3]*n+i[5],e},"transformMat3",0,function(e,t,i){let r=t[0],n=t[1];return e[0]=i[0]*r+i[3]*n+i[6],e[1]=i[1]*r+i[4]*n+i[7],e},"transformMat4",0,rC,"zero",0,function(e){return e[0]=0,e[1]=0,e}],60113),(d=m||(m={}))[d.COL0ROW0=0]="COL0ROW0",d[d.COL0ROW1=1]="COL0ROW1",d[d.COL0ROW2=2]="COL0ROW2",d[d.COL0ROW3=3]="COL0ROW3",d[d.COL1ROW0=4]="COL1ROW0",d[d.COL1ROW1=5]="COL1ROW1",d[d.COL1ROW2=6]="COL1ROW2",d[d.COL1ROW3=7]="COL1ROW3",d[d.COL2ROW0=8]="COL2ROW0",d[d.COL2ROW1=9]="COL2ROW1",d[d.COL2ROW2=10]="COL2ROW2",d[d.COL2ROW3=11]="COL2ROW3",d[d.COL3ROW0=12]="COL3ROW0",d[d.COL3ROW1=13]="COL3ROW1",d[d.COL3ROW2=14]="COL3ROW2",d[d.COL3ROW3=15]="COL3ROW3";let rE=45*Math.PI/180,rS=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);class rL extends rg{static get IDENTITY(){return r||Object.freeze(r=new rL),r}static get ZERO(){return i||Object.freeze(i=new rL([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),i}get ELEMENTS(){return 16}get RANK(){return 4}get INDICES(){return m}constructor(e){super(-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0),1==arguments.length&&Array.isArray(e)?this.copy(e):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this[9]=e[9],this[10]=e[10],this[11]=e[11],this[12]=e[12],this[13]=e[13],this[14]=e[14],this[15]=e[15],this.check()}set(e,t,i,r,n,s,o,a,l,c,u,h,d,p,f,g){return this[0]=e,this[1]=t,this[2]=i,this[3]=r,this[4]=n,this[5]=s,this[6]=o,this[7]=a,this[8]=l,this[9]=c,this[10]=u,this[11]=h,this[12]=d,this[13]=p,this[14]=f,this[15]=g,this.check()}setRowMajor(e,t,i,r,n,s,o,a,l,c,u,h,d,p,f,g){return this[0]=e,this[1]=n,this[2]=l,this[3]=d,this[4]=t,this[5]=s,this[6]=c,this[7]=p,this[8]=i,this[9]=o,this[10]=u,this[11]=f,this[12]=r,this[13]=a,this[14]=h,this[15]=g,this.check()}toRowMajor(e){return e[0]=this[0],e[1]=this[4],e[2]=this[8],e[3]=this[12],e[4]=this[1],e[5]=this[5],e[6]=this[9],e[7]=this[13],e[8]=this[2],e[9]=this[6],e[10]=this[10],e[11]=this[14],e[12]=this[3],e[13]=this[7],e[14]=this[11],e[15]=this[15],e}identity(){return this.copy(rS)}fromObject(e){return this.check()}fromQuaternion(e){return tw(this,e),this.check()}frustum(e){var t,i,r,n,s,o;let{left:a,right:l,bottom:c,top:u,near:h=.1,far:d=500}=e;return d===1/0?(t=this,i=a,r=l,n=c,s=u,o=h,t[0]=2*o/(r-i),t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o/(s-n),t[6]=0,t[7]=0,t[8]=(r+i)/(r-i),t[9]=(s+n)/(s-n),t[10]=-1,t[11]=-1,t[12]=0,t[13]=0,t[14]=-2*o,t[15]=0):tx(this,a,l,c,u,h,d),this.check()}lookAt(e){let{eye:t,center:i=[0,0,0],up:r=[0,1,0]}=e;return tM(this,t,i,r),this.check()}ortho(e){let{left:t,right:i,bottom:r,top:n,near:s=.1,far:o=500}=e;return tC(this,t,i,r,n,s,o),this.check()}orthographic(e){let{fovy:t=rE,aspect:i=1,focalDistance:r=1,near:n=.1,far:s=500}=e;rA(t);let o=r*Math.tan(t/2),a=o*i;return this.ortho({left:-a,right:a,bottom:-o,top:o,near:n,far:s})}perspective(e){let{fovy:t=45*Math.PI/180,aspect:i=1,near:r=.1,far:n=500}=e;return rA(t),tP(this,t,i,r,n),this.check()}determinant(){return th(this)}getScale(e=[-0,-0,-0]){return e[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),e[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),e[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),e}getTranslation(e=[-0,-0,-0]){return e[0]=this[12],e[1]=this[13],e[2]=this[14],e}getRotation(e,t){e=e||[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],t=t||[-0,-0,-0];let i=this.getScale(t),r=1/i[0],n=1/i[1],s=1/i[2];return e[0]=this[0]*r,e[1]=this[1]*n,e[2]=this[2]*s,e[3]=0,e[4]=this[4]*r,e[5]=this[5]*n,e[6]=this[6]*s,e[7]=0,e[8]=this[8]*r,e[9]=this[9]*n,e[10]=this[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}getRotationMatrix3(e,t){e=e||[-0,-0,-0,-0,-0,-0,-0,-0,-0],t=t||[-0,-0,-0];let i=this.getScale(t),r=1/i[0],n=1/i[1],s=1/i[2];return e[0]=this[0]*r,e[1]=this[1]*n,e[2]=this[2]*s,e[3]=this[4]*r,e[4]=this[5]*n,e[5]=this[6]*s,e[6]=this[8]*r,e[7]=this[9]*n,e[8]=this[10]*s,e}transpose(){return tc(this,this),this.check()}invert(){return tu(this,this),this.check()}multiplyLeft(e){return td(this,e,this),this.check()}multiplyRight(e){return td(this,this,e),this.check()}rotateX(e){return tm(this,this,e),this.check()}rotateY(e){return tv(this,this,e),this.check()}rotateZ(e){return t_(this,this,e),this.check()}rotateXYZ(e){return this.rotateX(e[0]).rotateY(e[1]).rotateZ(e[2])}rotateAxis(e,t){return tg(this,this,e,t),this.check()}scale(e){return tf(this,this,Array.isArray(e)?e:[e,e,e]),this.check()}translate(e){return tp(this,this,e),this.check()}transform(e,t){return 4===e.length?(i1(t=tj(t||[-0,-0,-0,-0],e,this),4),t):this.transformAsPoint(e,t)}transformAsPoint(e,t){let i,{length:r}=e;switch(r){case 2:i=rC(t||[-0,-0],e,this);break;case 3:i=rn(t||[-0,-0,-0],e,this);break;default:throw Error("Illegal vector")}return i1(i,e.length),i}transformAsVector(e,t){let i;switch(e.length){case 2:var r;let n,s,o;r=t||[-0,-0],n=e[0],s=e[1],o=this[3]*n+this[7]*s||1,r[0]=(this[0]*n+this[4]*s)/o,r[1]=(this[1]*n+this[5]*s)/o,i=r;break;case 3:i=rd(t||[-0,-0,-0],e,this);break;default:throw Error("Illegal vector")}return i1(i,e.length),i}transformPoint(e,t){return this.transformAsPoint(e,t)}transformVector(e,t){return this.transformAsPoint(e,t)}transformDirection(e,t){return this.transformAsVector(e,t)}makeRotationX(e){return this.identity().rotateX(e)}makeTranslation(e,t,i){return this.identity().translate([e,t,i])}}function rA(e){if(e>2*Math.PI)throw Error("expected radians")}var tF=tF;function rT(e,t){let i=tF.transformMat4([],t,e);return tF.scale(i,i,1/i[3]),i}function rR(e,t,i){return e<t?t:e>i?i:e}let rO=Math.log2||function(e){return Math.log(e)*Math.LOG2E};var tS=tS,rk=e.i(60113),rk=rk,rI=e.i(93311),rI=rI;function rz(e,t){if(!e)throw Error(t||"@math.gl/web-mercator: assertion failed.")}let rj=Math.PI,rD=rj/4,rF=rj/180,rN=180/rj;function rU(e){let[t,i]=e;rz(Number.isFinite(t)),rz(Number.isFinite(i)&&i>=-90&&i<=90,"invalid latitude");let r=512*(rj+Math.log(Math.tan(rD+i*rF*.5)))/(2*rj);return[512*(t*rF+rj)/(2*rj),r]}function rB(e){let[t,i]=e,r=2*(Math.atan(Math.exp(i/512*(2*rj)-rj))-rD);return[(t/512*(2*rj)-rj)*rN,r*rN]}function r$(e){return 512/4003e4/Math.cos(e*rF)}function rV(e){let{latitude:t,longitude:i,highPrecision:r=!1}=e;rz(Number.isFinite(t)&&Number.isFinite(i));let n=Math.cos(t*rF),s=512/360/n,o=512/4003e4/n,a={unitsPerMeter:[o,o,o],metersPerUnit:[1/o,1/o,1/o],unitsPerDegree:[512/360,s,o],degreesPerUnit:[1/(512/360),1/s,1/o]};if(r){let e=rF*Math.tan(t*rF)/n,i=512/4003e4*e,r=i/s*o;a.unitsPerDegree2=[0,512/360*e/2,i],a.unitsPerMeter2=[r,0,r]}return a}function rW(e,t){let[i,r,n]=e,[s,o,a]=t,{unitsPerMeter:l,unitsPerMeter2:c}=rV({longitude:i,latitude:r,highPrecision:!0}),u=rU(e);u[0]+=s*(l[0]+c[0]*o),u[1]+=o*(l[1]+c[1]*o);let h=rB(u);return Number.isFinite(n)||Number.isFinite(a)?[h[0],h[1],(n||0)+(a||0)]:h}function rG(e){return 2*Math.atan(.5/e)*rN}function rH(e){return .5/Math.tan(.5*e*rF)}function rq(e,t){let[i,r,n=0]=e;return rz(Number.isFinite(i)&&Number.isFinite(r)&&Number.isFinite(n)),rT(t,[i,r,n,1])}function rZ(e,t,i=0){let[r,n,s]=e;if(rz(Number.isFinite(r)&&Number.isFinite(n),"invalid pixel coordinate"),Number.isFinite(s))return rT(t,[r,n,s,1]);let o=rT(t,[r,n,0,1]),a=rT(t,[r,n,1,1]),l=o[2],c=a[2];return rk.lerp([],o,a,l===c?0:((i||0)-l)/(c-l))}let rY=`
layout(std140) uniform shadowUniforms {
  bool drawShadowMap;
  bool useShadowMap;
  vec4 color;
  highp int lightId;
  float lightCount;
  mat4 viewProjectionMatrix0;
  mat4 viewProjectionMatrix1;
  vec4 projectCenter0;
  vec4 projectCenter1;
} shadow;
`,rK=`
const int max_lights = 2;

out vec3 shadow_vPosition[max_lights];

vec4 shadow_setVertexPosition(vec4 position_commonspace) {
  mat4 viewProjectionMatrices[max_lights];
  viewProjectionMatrices[0] = shadow.viewProjectionMatrix0;
  viewProjectionMatrices[1] = shadow.viewProjectionMatrix1;
  vec4 projectCenters[max_lights];
  projectCenters[0] = shadow.projectCenter0;
  projectCenters[1] = shadow.projectCenter1;

  if (shadow.drawShadowMap) {
    return project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[shadow.lightId], projectCenters[shadow.lightId]);
  }
  if (shadow.useShadowMap) {
    for (int i = 0; i < max_lights; i++) {
      if(i < int(shadow.lightCount)) {
        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[i], projectCenters[i]);
        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;
      }
    }
  }
  return gl_Position;
}
`,rX=`
${rY}
${rK}
`,rJ=`
const int max_lights = 2;
uniform sampler2D shadow_uShadowMap0;
uniform sampler2D shadow_uShadowMap1;

in vec3 shadow_vPosition[max_lights];

const vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);
const vec4 bitUnpackShift = 1.0 / bitPackShift;
const vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);

float shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {
  vec4 rgbaDepth = texture(shadowMap, position.xy);

  float z = dot(rgbaDepth, bitUnpackShift);
  return smoothstep(0.001, 0.01, position.z - z);
}

vec4 shadow_filterShadowColor(vec4 color) {
  if (shadow.drawShadowMap) {
    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);
    rgbaDepth -= rgbaDepth.gbaa * bitMask;
    return rgbaDepth;
  }
  if (shadow.useShadowMap) {
    float shadowAlpha = 0.0;
    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);
    if(shadow.lightCount > 1.0) {
      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);
    }
    shadowAlpha *= shadow.color.a / shadow.lightCount;
    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);

    return vec4(
      mix(color.rgb, shadow.color.rgb, shadowAlpha / blendedAlpha),
      blendedAlpha
    );
  }
  return color;
}
`,rQ=`
${rY}
${rJ}
`,r0=iS(function({viewport:e,center:t}){return new rL(e.viewProjectionMatrix).invert().transform(t)}),r1=iS(function({viewport:e,shadowMatrices:t}){let i=[],r=e.pixelUnprojectionMatrix,n=e.isGeospatial?void 0:1,s=[[0,0,n],[e.width,0,n],[0,e.height,n],[e.width,e.height,n],[0,0,-1],[e.width,0,-1],[0,e.height,-1],[e.width,e.height,-1]].map(e=>(function(e,t){let[i,r,n]=e,s=rZ([i,r,n],t);return Number.isFinite(n)?s:[s[0],s[1],0]})(e,r));for(let r of t){let t=r.clone().translate(new rf(e.center).negate()),n=s.map(e=>t.transform(e)),o=new rL().ortho({left:Math.min(...n.map(e=>e[0])),right:Math.max(...n.map(e=>e[0])),bottom:Math.min(...n.map(e=>e[1])),top:Math.max(...n.map(e=>e[1])),near:Math.min(...n.map(e=>-e[2])),far:Math.max(...n.map(e=>-e[2]))});i.push(o.multiplyRight(r))}return i}),r2=[0,0,0,1],r3=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],r4={name:"shadow",dependencies:[iH],vs:rX,fs:rQ,inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    position = shadow_setVertexPosition(geometry.position);
    `,"fs:DECKGL_FILTER_COLOR":`
    color = shadow_filterShadowColor(color);
    `},getUniforms:function(e){let{shadowEnabled:t=!0,project:i}=e;if(!t||!i||!e.shadowMatrices||!e.shadowMatrices.length)return{drawShadowMap:!1,useShadowMap:!1,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};let r=iH.getUniforms(i),n=r0({viewport:i.viewport,center:r.center}),s=[],o=r1({shadowMatrices:e.shadowMatrices,viewport:i.viewport}).slice();for(let t=0;t<e.shadowMatrices.length;t++){let e=o[t],a=e.clone().translate(new rf(i.viewport.center).negate());r.coordinateSystem===iI("lnglat")&&r.projectionMode===iP.WEB_MERCATOR?(o[t]=a,s[t]=n):(o[t]=e.clone().multiplyRight(r3),s[t]=a.transform(n))}let a={drawShadowMap:!!e.drawToShadowMap,useShadowMap:!!e.shadowMaps&&e.shadowMaps.length>0,color:e.shadowColor||r2,lightId:e.shadowLightId||0,lightCount:e.shadowMatrices.length,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};for(let e=0;e<o.length;e++)a[`viewProjectionMatrix${e}`]=o[e],a[`projectCenter${e}`]=s[e];for(let t=0;t<2;t++)a[`shadow_uShadowMap${t}`]=e.shadowMaps&&e.shadowMaps[t]||e.dummyShadowMap;return a},uniformTypes:{drawShadowMap:"f32",useShadowMap:"f32",color:"vec4<f32>",lightId:"i32",lightCount:"f32",viewProjectionMatrix0:"mat4x4<f32>",viewProjectionMatrix1:"mat4x4<f32>",projectCenter0:"vec4<f32>",projectCenter1:"vec4<f32>"}},r6={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useByteColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useByteColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`\
layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:`\
layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,getUniforms:function(e={},t){let i={},r=eJ(e.useByteColors,!0);return void 0===e.highlightedObjectColor||(null===e.highlightedObjectColor?i.isHighlightActive=!1:(i.isHighlightActive=!0,i.highlightedObjectColor=e.highlightedObjectColor.slice(0,3))),e.highlightColor&&(i.highlightColor=function(e,t=!0){let i=eQ(e.slice(0,3),t),r=Number.isFinite(e[3]),n=r?e[3]:1;return[i[0],i[1],i[2],t&&r?n/255:n]}(e.highlightColor,r)),void 0!==e.isActive&&(i.isActive=!!e.isActive,i.isAttribute=!!e.isAttribute),void 0!==e.useByteColors&&(i.useByteColors=!!e.useByteColors),i}},r5=`\
struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}
`,r8={...r6,source:r5,defaultUniforms:{...r6.defaultUniforms,useByteColors:!0},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}},r9=[tr],r7=["vs:DECKGL_FILTER_SIZE(inout vec3 size, VertexGeometry geometry)","vs:DECKGL_FILTER_GL_POSITION(inout vec4 position, VertexGeometry geometry)","vs:DECKGL_FILTER_COLOR(inout vec4 color, VertexGeometry geometry)","fs:DECKGL_FILTER_COLOR(inout vec4 color, FragmentGeometry geometry)"],ne=[],nt=Symbol.for("component"),ni=Symbol.for("propTypes"),nr=Symbol.for("deprecatedProps"),nn=Symbol.for("asyncPropDefaults"),ns=Symbol.for("asyncPropOriginal"),no=Symbol.for("asyncPropResolved");var na=e.i(47167);let nl={};function nc(e){nl=e}function nu(e,t,i,r){tU.level>0&&nl[e]&&nl[e].call(null,t,i,r)}function nh(e,t=()=>!0){return Array.isArray(e)?function e(t,i,r){let n=-1;for(;++n<t.length;){let s=t[n];Array.isArray(s)?e(s,i,r):i(s)&&r.push(s)}return r}(e,t,[]):t(e)?[e]:[]}var nd=e.i(9685);let np=e=>null!==e&&"object"==typeof e,nf=e=>np(e)&&e.constructor===({}).constructor,ng=e=>"u">typeof SharedArrayBuffer&&e instanceof SharedArrayBuffer,nm=e=>np(e)&&"number"==typeof e.byteLength&&"function"==typeof e.slice,nv=e=>"u">typeof Response&&e instanceof Response||np(e)&&"function"==typeof e.arrayBuffer&&"function"==typeof e.text&&"function"==typeof e.json,n_=e=>"u">typeof Blob&&e instanceof Blob,ny=e=>{let t,i;return t=e,"u">typeof ReadableStream&&t instanceof ReadableStream||np(t)&&"function"==typeof t.tee&&"function"==typeof t.cancel&&"function"==typeof t.getReader||np(i=e)&&"function"==typeof i.read&&"function"==typeof i.pipe&&"boolean"==typeof i.readable};function nb(e,t){if(!e)throw Error(t||"loader assertion failed.")}function nw(e){return!!e&&(Array.isArray(e)&&(e=e[0]),Array.isArray(e?.extensions))}function nx(e){let t;return nb(e,"null loader"),nb(nw(e),"invalid loader"),Array.isArray(e)&&(t=e[1],e={...e=e[0],options:{...e.options,...t}}),(e?.parseTextSync||e?.parseText)&&(e.text=!0),e.text||(e.binary=!0),e}let nP={};class nC extends Error{constructor(e,t){super(e),this.reason=t.reason,this.url=t.url,this.response=t.response}reason;url;response}let nM=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,nE=/^([-\w.]+\/[-\w.+]+)/;function nS(e,t){return e.toLowerCase()===t.toLowerCase()}function nL(e){let t=nM.exec(e);return t?t[1]:""}let nA=/\?.*/;function nT(e){return e.replace(nA,"")}function nR(e){return nv(e)?e.url:n_(e)?("name"in e?e.name:"")||"":"string"==typeof e?e:""}function nO(e){if(nv(e)){let t,i=e.headers.get("content-type")||"",r=nT(e.url);return((t=nE.exec(i))?t[1]:i)||nL(r)}return n_(e)?e.type||"":"string"==typeof e?nL(e):""}async function nk(e){var t;if(nv(e))return e;let i={},r=nv(t=e)?t.headers["content-length"]||-1:n_(t)?t.size:"string"==typeof t?t.length:t instanceof ArrayBuffer||ArrayBuffer.isView(t)?t.byteLength:-1;r>=0&&(i["content-length"]=String(r));let n=nR(e),s=nO(e);s&&(i["content-type"]=s);let o=await nj(e);o&&(i["x-first-bytes"]=o),"string"==typeof e&&(e=new TextEncoder().encode(e));let a=new Response(e,{headers:i});return Object.defineProperty(a,"url",{value:n}),a}async function nI(e){if(!e.ok)throw await nz(e)}async function nz(e){let t=function(e){if(e.length<50)return e;let t=e.slice(e.length-15),i=e.substr(0,32);return`${i}...${t}`}(e.url),i=`Failed to fetch resource (${e.status}) ${e.statusText}: ${t}`;i=i.length>100?`${i.slice(0,100)}...`:i;let r={reason:e.statusText,url:e.url,response:e};try{let t=e.headers.get("Content-Type");r.reason=!e.bodyUsed&&t?.includes("application/json")?await e.json():await e.text()}catch(e){}return new nC(i,r)}async function nj(e){if("string"==typeof e)return`data:,${e.slice(0,5)}`;if(e instanceof Blob){let t=e.slice(0,5);return await new Promise(e=>{let i=new FileReader;i.onload=t=>e(t?.target?.result),i.readAsDataURL(t)})}if(e instanceof ArrayBuffer){let t=function(e){let t="",i=new Uint8Array(e);for(let e=0;e<i.byteLength;e++)t+=String.fromCharCode(i[e]);return btoa(t)}(e.slice(0,5));return`data:base64,${t}`}return null}async function nD(e,t){if("string"==typeof e){var i;let r=function(e){for(let t in nP)if(e.startsWith(t)){let i=nP[t];e=e.replace(t,i)}return e.startsWith("http://")||e.startsWith("https://")||(e=`${e}`),e}(e);return!((i=r).startsWith("http:")||i.startsWith("https:"))&&!r.startsWith("data:")&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(r,t):await fetch(r,t)}return await nk(e)}e.s(["dirname",0,function(e){let t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(0,t):""},"filename",0,function(e){let t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(t+1):e},"join",0,function(...e){return(e=e.map((t,i)=>(i&&(t=t.replace(RegExp("^/"),"")),i!==e.length-1&&(t=t.replace(RegExp("/$"),"")),t))).join("/")},"resolve",0,function(...e){let t,i=[];for(let t=0;t<e.length;t++)i[t]=e[t];let r="",n=!1;for(let e=i.length-1;e>=-1&&!n;e--){let s;e>=0?s=i[e]:(void 0===t&&(t=function(){if(void 0!==na.default&&void 0!==na.default.cwd)return na.default.cwd();let e=window.location?.pathname;return e?.slice(0,e.lastIndexOf("/")+1)||""}()),s=t),0!==s.length&&(r=`${s}/${r}`,n=47===s.charCodeAt(0))}return(r=function(e,t){let i,r="",n=-1,s=0,o=!1;for(let a=0;a<=e.length;++a){if(a<e.length)i=e.charCodeAt(a);else if(47===i)break;else i=47;if(47===i){if(n===a-1||1===s);else if(n!==a-1&&2===s){if(r.length<2||!o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){let e=r.length-1,t=e;for(;t>=0&&47!==r.charCodeAt(t);--t);if(t!==e){r=-1===t?"":r.slice(0,t),n=a,s=0,o=!1;continue}}else if(2===r.length||1===r.length){r="",n=a,s=0,o=!1;continue}}t&&(r.length>0?r+="/..":r="..",o=!0)}else{let t=e.slice(n+1,a);r.length>0?r+=`/${t}`:r=t,o=!1}n=a,s=0}else 46===i&&-1!==s?++s:s=-1}return r}(r,!n),n)?`/${r}`:r.length>0?r:"."}],73276);var nF=e.i(73276),nF=nF;let nN=new tN.Log({id:"loaders.gl"});class nU{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}}let nB={self:"u">typeof self&&self,window:"u">typeof window&&window,global:e.g,document:"u">typeof document&&document};nB.self||nB.window||nB.global,nB.window||nB.self||nB.global,nB.global||nB.self||nB.window,nB.document;let n$=("object"!=typeof na.default||"[object process]"!==String(na.default),!0),nV=void 0!==na.default&&na.default.version&&/v([0-9]*)/.exec(na.default.version);nV&&parseFloat(nV[1]);let nW={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new class{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}},useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:n$,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]}},nG={baseUri:"core.baseUrl",fetch:"core.fetch",mimeType:"core.mimeType",fallbackMimeType:"core.fallbackMimeType",ignoreRegisteredLoaders:"core.ignoreRegisteredLoaders",nothrow:"core.nothrow",log:"core.log",useLocalLibraries:"core.useLocalLibraries",CDN:"core.CDN",worker:"core.worker",maxConcurrency:"core.maxConcurrency",maxMobileConcurrency:"core.maxMobileConcurrency",reuseWorkers:"core.reuseWorkers",_nodeWorkers:"core.nodeWorkers",_workerType:"core._workerType",_worker:"core._workerType",limit:"core.limit",_limitMB:"core._limitMB",batchSize:"core.batchSize",batchDebounceMs:"core.batchDebounceMs",metadata:"core.metadata",transforms:"core.transforms",throws:"nothrow",dataType:"(no longer used)",uri:"core.baseUrl",method:"core.fetch.method",headers:"core.fetch.headers",body:"core.fetch.body",mode:"core.fetch.mode",credentials:"core.fetch.credentials",cache:"core.fetch.cache",redirect:"core.fetch.redirect",referrer:"core.fetch.referrer",referrerPolicy:"core.fetch.referrerPolicy",integrity:"core.fetch.integrity",keepalive:"core.fetch.keepalive",signal:"core.fetch.signal"},nH=["baseUrl","fetch","mimeType","fallbackMimeType","ignoreRegisteredLoaders","nothrow","log","useLocalLibraries","CDN","worker","maxConcurrency","maxMobileConcurrency","reuseWorkers","_nodeWorkers","_workerType","limit","_limitMB","batchSize","batchDebounceMs","metadata","transforms"];function nq(){globalThis.loaders=globalThis.loaders||{};let{loaders:e}=globalThis;return e._state||(e._state={}),e._state}function nZ(){let e=nq();return e.globalOptions=e.globalOptions||{...nW,core:{...nW.core}},nY(e.globalOptions)}function nY(e){var t;let i,r=(i={...t=e},t.core&&(i.core={...t.core}),i);for(let e of(nJ(r),nH))r.core&&void 0!==r.core[e]&&delete r[e];return r.core&&void 0!==r.core._workerType&&delete r._worker,r}function nK(e,t,i,r,n){let s=t||"Top level",o=t?`${t}.`:"";for(let a in e){let l=!t&&np(e[a]),c="baseUri"===a&&!t,u="workerUrl"===a&&t;if(!(a in i)&&!c&&!u){if(a in r)nN.level>0&&nN.warn(`${s} loader option '${o}${a}' no longer supported, use '${r[a]}'`)();else if(!l&&nN.level>0){let e=function(e,t){let i=e.toLowerCase(),r="";for(let n of t)for(let t in n.options){if(e===t)return`Did you mean '${n.id}.${t}'?`;let s=t.toLowerCase();(i.startsWith(s)||s.startsWith(i))&&(r=r||`Did you mean '${n.id}.${t}'?`)}return r}(a,n);nN.warn(`${s} loader option '${o}${a}' not recognized. ${e}`)()}}}}function nX(e,t){for(let i in t)i in t&&(nf(t[i])&&nf(e[i])?e[i]={...e[i],...t[i]}:e[i]=t[i])}function nJ(e){for(let t of(void 0!==e.baseUri&&(e.core||={},void 0===e.core.baseUrl&&(e.core.baseUrl=e.baseUri)),nH))if(void 0!==e[t]){let i=e.core=e.core||{};void 0===i[t]&&(i[t]=e[t])}let t=e._worker;void 0!==t&&(e.core||={},void 0===e.core._workerType&&(e.core._workerType=t))}function nQ(e,t){let i=nZ(),r=e||i,n=r.fetch??r.core?.fetch;return"function"==typeof n?n:np(n)?e=>nD(e,n):t?.fetch?t?.fetch:nD}let n0={self:"u">typeof self&&self,window:"u">typeof window&&window,global:e.g,document:"u">typeof document&&document};n0.self||n0.window||n0.global,n0.window||n0.self||n0.global,n0.global||n0.self||n0.window,n0.document;let n1="object"!=typeof na.default||"[object process]"!==String(na.default)||!0,n2="u">typeof window&&void 0!==window.orientation,n3=void 0!==na.default&&na.default.version&&/v([0-9]*)/.exec(na.default.version);n3&&parseFloat(n3[1]);class n4{terminate(){}}function n6(e,t){if(!e)throw Error(t||"loaders.gl assertion failed.")}let n5=new Map;function n8(e){let t=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(t)}function n9(e){return!!e&&!!(e instanceof ArrayBuffer||"u">typeof MessagePort&&e instanceof MessagePort||"u">typeof ImageBitmap&&e instanceof ImageBitmap||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas)}let n7=()=>{};class se{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL="";static isSupported(){return"u">typeof Worker&&n1||!n1}constructor(e){const{name:t,source:i,url:r}=e;n6(i||r),this.name=t,this.source=i,this.url=r,this.onMessage=n7,this.onError=e=>console.log(e),this.worker=n1?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=n7,this.onError=n7,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,t){t=t||function e(t,i=!0,r){let n=r||new Set;if(t){if(n9(t))n.add(t);else if(n9(t.buffer))n.add(t.buffer);else if(ArrayBuffer.isView(t));else if(i&&"object"==typeof t)for(let r in t)e(t[r],i,n)}return void 0===r?Array.from(n):[]}(e),this.worker.postMessage(e,t)}_getErrorFromErrorEvent(e){let t="Failed to load ";return t+=`worker ${this.name} from ${this.url}. `,e.message&&(t+=`${e.message} in `),e.lineno&&(t+=`:${e.lineno}:${e.colno}`),Error(t)}_createBrowserWorker(){var e,t,i;let r;this._loadableURL=(n6((e={source:this.source,url:this.url}).source&&!e.url||!e.source&&e.url),(r=n5.get(e.source||e.url))||(e.url&&(r=(t=e.url).startsWith("http")?n8((i=t,`\
try {
  importScripts('${i}');
} catch (error) {
  console.error(error);
  throw error;
}`)):t,n5.set(e.url,r)),e.source&&(r=n8(e.source),n5.set(e.source,r))),n6(r),r);let n=new Worker(this._loadableURL,{name:this.name});return n.onmessage=e=>{e.data?this.onMessage(e.data):this.onError(Error("No data received"))},n.onerror=e=>{this.onError(this._getErrorFromErrorEvent(e)),this.terminated=!0},n.onmessageerror=e=>console.error(e),n}_createNodeWorker(){let e;if(this.url)e=new n4(this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`,{eval:!1,type:this.url.endsWith(".ts")||this.url.endsWith(".mjs")?"module":"commonjs"});else if(this.source)e=new n4(this.source,{eval:!0});else throw Error("no worker");return e.on("message",e=>{this.onMessage(e)}),e.on("error",e=>{this.onError(e)}),e.on("exit",e=>{}),e}}class st{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,t){this.name=e,this.workerThread=t,this.result=new Promise((e,t)=>{this._resolve=e,this._reject=t})}postMessage(e,t){this.workerThread.postMessage({source:"loaders.gl",type:e,payload:t})}done(e){n6(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){n6(this.isRunning),this.isRunning=!1,this._reject(e)}}class si{name="unnamed";source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return se.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},void 0!==e.name&&(this.name=e.name),void 0!==e.maxConcurrency&&(this.maxConcurrency=e.maxConcurrency),void 0!==e.maxMobileConcurrency&&(this.maxMobileConcurrency=e.maxMobileConcurrency),void 0!==e.reuseWorkers&&(this.reuseWorkers=e.reuseWorkers),void 0!==e.onDebug&&(this.onDebug=e.onDebug)}async startJob(e,t=(e,t,i)=>e.done(i),i=(e,t)=>e.error(t)){let r=new Promise(r=>(this.jobQueue.push({name:e,onMessage:t,onError:i,onStart:r}),this));return this._startQueuedJob(),await r}async _startQueuedJob(){if(!this.jobQueue.length)return;let e=this._getAvailableWorker();if(!e)return;let t=this.jobQueue.shift();if(t){this.onDebug({message:"Starting job",name:t.name,workerThread:e,backlog:this.jobQueue.length});let i=new st(t.name,e);e.onMessage=e=>t.onMessage(i,e.type,e.payload),e.onError=e=>t.onError(i,e),t.onStart(i);try{await i.result}catch(e){console.error(`Worker exception: ${e}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!n1||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){return this.idleQueue.length>0?this.idleQueue.shift()||null:this.count<this._getMaxConcurrency()?(this.count++,new se({name:`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`,source:this.source,url:this.url})):null}_getMaxConcurrency(){return n2?this.maxMobileConcurrency:this.maxConcurrency}}let sr={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}};class sn{props;workerPools=new Map;static _workerFarm;static isSupported(){return se.isSupported()}static getWorkerFarm(e={}){return sn._workerFarm=sn._workerFarm||new sn({}),sn._workerFarm.setProps(e),sn._workerFarm}constructor(e){this.props={...sr},this.setProps(e),this.workerPools=new Map}destroy(){for(let e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){for(let t of(this.props={...this.props,...e},this.workerPools.values()))t.setProps(this._getWorkerPoolProps())}getWorkerPool(e){let{name:t,source:i,url:r}=e,n=this.workerPools.get(t);return n||((n=new si({name:t,source:i,url:r})).setProps(this._getWorkerPoolProps()),this.workerPools.set(t,n)),n}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}}async function ss(e,t,i,r,n){let s=e.id,o=function(e,t={}){let i=t[e.id]||{},r=n1?`${e.id}-worker.js`:`${e.id}-worker-node.js`,n=i.workerUrl;if(n||"compression"!==e.id||(n=t.workerUrl),"test"===(t._workerType||t?.core?._workerType)&&(n=n1?`modules/${e.module}/dist/${r}`:`modules/${e.module}/src/workers/${e.id}-worker-node.ts`),!n){let t=e.version;"latest"===t&&(t="latest");let i=t?`@${t}`:"";n=`https://unpkg.com/@loaders.gl/${e.module}${i}/dist/${r}`}return n6(n),n}(e,i),a=sn.getWorkerFarm(i?.core).getWorkerPool({name:s,url:o});i=JSON.parse(JSON.stringify(i)),r=JSON.parse(JSON.stringify(r||{}));let l=await a.startJob("process-on-worker",so.bind(null,n));l.postMessage("process",{input:t,options:i,context:r});let c=await l.result;return await c.result}async function so(e,t,i,r){switch(i){case"done":t.done(r);break;case"error":t.error(Error(r.error));break;case"process":let{id:n,input:s,options:o}=r;try{let i=await e(s,o);t.postMessage("done",{id:n,result:i})}catch(i){let e=i instanceof Error?i.message:"unknown error";t.postMessage("error",{id:n,error:e})}break;default:console.warn(`parse-with-worker unknown message ${i}`)}}let sa=(globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.4.3"),globalThis._loadersgl_.version);async function sl(e){let t=[];for await(let i of e)t.push(function(e){if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e)){let{buffer:t,byteOffset:i,byteLength:r}=e;return sc(t,i,r)}return sc(e)}(i));return function(...e){var t=e;let i=t.map(e=>e instanceof ArrayBuffer?new Uint8Array(e):e),r=new Uint8Array(i.reduce((e,t)=>e+t.byteLength,0)),n=0;for(let e of i)r.set(e,n),n+=e.byteLength;return r.buffer}(...t)}function sc(e,t=0,i=e.byteLength-t){let r=new Uint8Array(e,t,i),n=new Uint8Array(r.length);return n.set(r),n.buffer}function su(e){return e&&"object"==typeof e&&e.isBuffer}function sh(e){if(su(e)||e instanceof ArrayBuffer)return e;if(ng(e))return sp(e);if(ArrayBuffer.isView(e)){let t=e.buffer;return 0===e.byteOffset&&e.byteLength===e.buffer.byteLength?t:t.slice(e.byteOffset,e.byteOffset+e.byteLength)}if("string"==typeof e)return new TextEncoder().encode(e).buffer;if(e&&"object"==typeof e&&e._toArrayBuffer)return e._toArrayBuffer();throw Error("toArrayBuffer")}function sd(e){if(e instanceof ArrayBuffer)return e;if(ng(e))return sp(e);let{buffer:t,byteOffset:i,byteLength:r}=e;return t instanceof ArrayBuffer&&0===i&&r===t.byteLength?t:sp(t,i,r)}function sp(e,t=0,i=e.byteLength-t){let r=new Uint8Array(e,t,i),n=new Uint8Array(r.length);return n.set(r),n.buffer}async function*sf(e,t){let i=t?.chunkSize||1048576,r=0;for(;r<e.size;){let t=r+i,n=await e.slice(r,t).arrayBuffer();r=t,yield n}}function sg(e,t){return n$?sm(e,t):sv(e,t)}async function*sm(e,t){let i,r=e.getReader();try{for(;;){let e=i||r.read();t?._streamReadAhead&&(i=r.read());let{done:n,value:s}=await e;if(n)return;yield sh(s)}}catch(e){r.releaseLock()}}async function*sv(e,t){for await(let t of e)yield sh(t)}let s_="Cannot convert supplied data type";async function sy(e,t,i){let r,n;if("string"==typeof e||nm(e)){var s,o=e;if(t.text&&"string"==typeof o)return o;if(su(o)&&(o=o.buffer),nm(o)){let e=ArrayBuffer.isView(s=o)?s:new Uint8Array(s);return t.text&&!t.binary?new TextDecoder("utf8").decode(e):sh(e)}throw Error(s_)}if(n_(e)&&(e=await nk(e)),nv(e))return await nI(e),t.binary?await e.arrayBuffer():await e.text();if(ny(e)&&(e=function(e,t){if("string"==typeof e)return function*(e,t){let i=t?.chunkSize||262144,r=0,n=new TextEncoder;for(;r<e.length;){let t=Math.min(e.length-r,i),s=e.slice(r,r+t);r+=t,yield sd(n.encode(s))}}(e,t);if(e instanceof ArrayBuffer)return function*(e,t={}){let{chunkSize:i=262144}=t,r=0;for(;r<e.byteLength;){let t=Math.min(e.byteLength-r,i),n=new ArrayBuffer(t),s=new Uint8Array(e,r,t);new Uint8Array(n).set(s),r+=t,yield n}}(e,t);if(n_(e))return sf(e,t);if(ny(e))return sg(e,t);if(nv(e)){let i=e.body;if(!i)throw Error("Readable stream not available on Response");return sg(i,t)}throw Error("makeIterator")}(e,i)),(r=e)&&"function"==typeof r[Symbol.iterator]||(n=e)&&"function"==typeof n[Symbol.asyncIterator])return sl(e);throw Error(s_)}var nF=nF,nF=nF;let sb="4.4.3",sw=sb[0]>="0"&&sb[0]<="9"?`v${sb}`:"",sx=(l=new tN.Log({id:"loaders.gl"}),globalThis.loaders||={},globalThis.loaders.log=l,globalThis.loaders.version=sw,globalThis.probe||={},globalThis.probe.loaders=l,l),sP=()=>{let e=nq();return e.loaderRegistry=e.loaderRegistry||[],e.loaderRegistry},sC=/\.([^.]+)$/;async function sM(e,t=[],i,r){if(!sL(e))return null;let n=nY(i||{});if(n.core||={},e instanceof Response&&sE(e)){let i=sS(await e.clone().text(),t,{...n,core:{...n.core,nothrow:!0}},r);if(i)return i}let s=sS(e,t,{...n,core:{...n.core,nothrow:!0}},r);if(s)return s;if(n_(e)&&(s=sS(e=await e.slice(0,10).arrayBuffer(),t,n,r)),!s&&e instanceof Response&&sE(e)&&(s=sS(await e.clone().text(),t,n,r)),!s&&!n.core.nothrow)throw Error(sA(e));return s}function sE(e){let t=nO(e);return!!(t&&(t.startsWith("text/")||"application/json"===t||t.endsWith("+json")))}function sS(e,t=[],i,r){var n,s,o,a,l,c;let u,h,d,p,f,g,m;if(!sL(e))return null;let v=nY(i||{});if(v.core||={},t&&!Array.isArray(t))return nx(t);let _=[];t&&(_=_.concat(t)),v.core.ignoreRegisteredLoaders||_.push(...sP()),function(e){for(let t of e)nx(t)}(_);let y=(n=e,s=_,o=v,a=r,u=nR(n),h=nO(n),d=nT(u)||a?.url,p=null,f="",o?.core?.mimeType&&(p=sT(s,o?.core?.mimeType),f=`match forced by supplied MIME type ${o?.core?.mimeType}`),p=p||(l=s,(m=(g=(c=d)&&sC.exec(c))&&g[1])?function(e,t){for(let i of(t=t.toLowerCase(),e))for(let e of i.extensions)if(e.toLowerCase()===t)return i;return null}(l,m):null),f=f||(p?`matched url ${d}`:""),p=p||sT(s,h),f=f||(p?`matched MIME type ${h}`:""),p=p||function(e,t){if(!t)return null;for(let i of e)if("string"==typeof t){if(function(e,t){return t.testText?t.testText(e):(Array.isArray(t.tests)?t.tests:[t.tests]).some(t=>e.startsWith(t))}(t,i))return i}else if(ArrayBuffer.isView(t)){if(sR(t.buffer,t.byteOffset,i))return i}else if(t instanceof ArrayBuffer&&sR(t,0,i))return i;return null}(s,n),f=f||(p?`matched initial data ${sO(n)}`:""),o?.core?.fallbackMimeType&&(p=p||sT(s,o?.core?.fallbackMimeType),f=f||(p?`matched fallback MIME type ${h}`:"")),f&&sx.log(1,`selectLoader selected ${p?.name}: ${f}.`),p);if(!y&&!v.core.nothrow)throw Error(sA(e));return y}function sL(e){return!(e instanceof Response)||204!==e.status}function sA(e){let t=nR(e),i=nO(e),r="No valid loader found (";r+=(t?`${nF.filename(t)}, `:"no url provided, ")+`MIME type: ${i?`"${i}"`:"not provided"}, `;let n=e?sO(e):"";return r+((n?` first bytes: "${n}"`:"first bytes: not available")+")")}function sT(e,t){for(let i of e)if(i.mimeTypes?.some(e=>nS(t,e))||nS(t,`application/x.${i.id}`))return i;return null}function sR(e,t,i){return(Array.isArray(i.tests)?i.tests:[i.tests]).some(i=>(function(e,t,i){if(nm(i))return function(e,t,i){if(i=i||e.byteLength,e.byteLength<i||t.byteLength<i)return!1;let r=new Uint8Array(e),n=new Uint8Array(t);for(let e=0;e<r.length;++e)if(r[e]!==n[e])return!1;return!0}(i,e,i.byteLength);switch(typeof i){case"function":return i(sd(e));case"string":let r=sk(e,t,i.length);return i===r;default:return!1}})(e,t,i))}function sO(e,t=5){return"string"==typeof e?e.slice(0,t):ArrayBuffer.isView(e)?sk(e.buffer,e.byteOffset,t):e instanceof ArrayBuffer?sk(e,0,t):""}function sk(e,t,i){if(e.byteLength<t+i)return"";let r=new DataView(e),n="";for(let e=0;e<i;e++)n+=String.fromCharCode(r.getUint8(t+e));return n}async function sI(e,t,i,r){var n,s,o,a,l,c,u;let h,d;!t||Array.isArray(t)||nw(t)||(r=void 0,i=t,t=void 0),e=await e,i=i||{};let p=nR(e),f=function(e,t){let i;if(e&&!Array.isArray(e))return e;if(e&&(i=Array.isArray(e)?e:[e]),t&&t.loaders){let e=Array.isArray(t.loaders)?t.loaders:[t.loaders];i=i?[...i,...e]:e}return i&&i.length?i:void 0}(t,r),g=await sM(e,f,i);if(!g)return null;let m=(function(e,t){for(let i of(nK(e,null,nW,nG,t),t)){let r=e&&e[i.id]||{},n=i.options&&i.options[i.id]||{},s=i.deprecatedOptions&&i.deprecatedOptions[i.id]||{};nK(r,i.id,n,s,t)}}(n=i,s=Array.isArray(s=(s=f)||[])?s:[s]),nY((o=g,a=n,l=p,d={...h=o.options||{}},h.core&&(d.core={...h.core}),nJ(d),d.core?.log===null&&(d.core={...d.core,log:new nU}),nX(d,nY(nZ())),nX(d,nY(a)),c=d,(u=l)&&c.core?.baseUrl===void 0&&(c.core||={},c.core.baseUrl=nF.dirname(nT(u))),function(e){let t=e.core;if(t)for(let i of nH)void 0!==t[i]&&(e[i]=t[i])}(d),d)));return r=function(e,t,i){if(i)return i;let r={fetch:nQ(t,e),...e};if(r.url){let e,t=nT(r.url);r.baseUrl=t,e=r.url.match(nA),r.queryString=e&&e[0],r.filename=nF.filename(t),r.baseUrl=nF.dirname(t)}return Array.isArray(r.loaders)||(r.loaders=null),r}({url:p,_parse:sI,loaders:f},m,r||null),await sz(g,e,m,r)}async function sz(e,t,i,r){if(!function(e,t=sa){n6(e,"no worker provided");e.version}(e),i=function e(t,i,r=0){if(r>3)return i;let n={...t};for(let[t,s]of Object.entries(i))s&&"object"==typeof s&&!Array.isArray(s)?n[t]=e(n[t]||{},i[t],r+1):n[t]=i[t];return n}(e.options||{},i),nv(t)){let{ok:e,redirected:i,status:n,statusText:s,type:o,url:a}=t;r.response={headers:Object.fromEntries(t.headers.entries()),ok:e,redirected:i,status:n,statusText:s,type:o,url:a}}if(t=await sy(t,e,i),e.parseTextSync&&"string"==typeof t)return e.parseTextSync(t,i,r);if(function(e,t){if(!sn.isSupported())return!1;let i=t?._nodeWorkers??t?.core?._nodeWorkers;if(!n1&&!i)return!1;let r=t?.worker??t?.core?.worker;return!!(e.worker&&r)}(e,i))return await ss(e,t,i,r,sI);if(e.parseText&&"string"==typeof t)return await e.parseText(t,i,r);if(e.parse)return await e.parse(t,i,r);throw n6(!e.parseSync),Error(`${e.id} loader - no parser found and worker is disabled`)}async function sj(e,t,i,r){let n,s;Array.isArray(t)||nw(t)?(n=t,s=i):(n=[],s=t);let o=nQ(s),a=e;if("string"==typeof e&&(a=await o(e)),n_(e)&&(a=await o(e)),"string"==typeof e){let t=nY(s||{});t.core?.baseUrl||(s={...s,core:{...s?.core,baseUrl:e}})}return Array.isArray(n),await sI(a,n,s)}class sD{constructor(e,t,i){this._loadCount=0,this._subscribers=new Set,this.id=e,this.context=i,this.setData(t)}subscribe(e){this._subscribers.add(e)}unsubscribe(e){this._subscribers.delete(e)}inUse(){return this._subscribers.size>0}delete(){}getData(){return this.isLoaded?this._error?Promise.reject(this._error):this._content:this._loader.then(()=>this.getData())}setData(e,t){if(e===this._data&&!t)return;this._data=e;let i=++this._loadCount,r=e;for(let t of("string"==typeof e&&(r=sj(e)),r instanceof Promise?(this.isLoaded=!1,this._loader=r.then(e=>{this._loadCount===i&&(this.isLoaded=!0,this._error=void 0,this._content=e)}).catch(e=>{this._loadCount===i&&(this.isLoaded=!0,this._error=e||!0)})):(this.isLoaded=!0,this._error=void 0,this._content=e),this._subscribers))t.onChange(this.getData())}}class sF{constructor(e){this.protocol=e.protocol||"resource://",this._context={device:e.device,gl:e.device?.gl,resourceManager:this},this._resources={},this._consumers={},this._pruneRequest=null}contains(e){return!!e.startsWith(this.protocol)||e in this._resources}add({resourceId:e,data:t,forceUpdate:i=!1,persistent:r=!0}){let n=this._resources[e];n?n.setData(t,i):(n=new sD(e,t,this._context),this._resources[e]=n),n.persistent=r}remove(e){let t=this._resources[e];t&&(t.delete(),delete this._resources[e])}unsubscribe({consumerId:e}){let t=this._consumers[e];if(t){for(let e in t){let i=t[e],r=this._resources[i.resourceId];r&&r.unsubscribe(i)}delete this._consumers[e],this.prune()}}subscribe({resourceId:e,onChange:t,consumerId:i,requestId:r="default"}){let{_resources:n,protocol:s}=this;e.startsWith(s)&&(n[e=e.replace(s,"")]||this.add({resourceId:e,data:null,persistent:!1}));let o=n[e];if(this._track(i,r,o,t),o)return o.getData()}prune(){this._pruneRequest||(this._pruneRequest=setTimeout(()=>this._prune(),0))}finalize(){for(let e in this._resources)this._resources[e].delete()}_track(e,t,i,r){let n=this._consumers,s=n[e]=n[e]||{},o=s[t],a=o&&o.resourceId&&this._resources[o.resourceId];a&&(a.unsubscribe(o),this.prune()),i&&(o?(o.onChange=r,o.resourceId=i.id):o={onChange:r,resourceId:i.id},s[t]=o,i.subscribe(o))}_prune(){for(let e of(this._pruneRequest=null,Object.keys(this._resources))){let t=this._resources[e];t.persistent||t.inUse()||(t.delete(),delete this._resources[e])}}}let sN=new class{constructor(e={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(e)}setOptions(e){Object.assign(this.opts,e)}allocate(e,t,{size:i=1,type:r,padding:n=0,copy:s=!1,initialize:o=!1,maxCount:a}){let l=r||e&&e.constructor||Float32Array,c=t*i+n;if(ArrayBuffer.isView(e)){if(c<=e.length)return e;if(c*e.BYTES_PER_ELEMENT<=e.buffer.byteLength)return new l(e.buffer,0,c)}let u=1/0;a&&(u=a*i+n);let h=this._allocate(l,c,o,u);return e&&s?h.set(e):o||h.fill(0,0,4),this._release(e),h}release(e){this._release(e)}_allocate(e,t,i,r){let n=Math.max(Math.ceil(t*this.opts.overAlloc),1);n>r&&(n=r);let s=this._pool,o=e.BYTES_PER_ELEMENT*n,a=s.findIndex(e=>e.byteLength>=o);if(a>=0){let t=new e(s.splice(a,1)[0],0,n);return i&&t.fill(0),t}return new e(n)}_release(e){if(!ArrayBuffer.isView(e))return;let t=this._pool,{buffer:i}=e,{byteLength:r}=i,n=t.findIndex(e=>e.byteLength>=r);n<0?t.push(i):(n>0||t.length<this.opts.poolSize)&&t.splice(n,0,i),t.length>this.opts.poolSize&&t.shift()}};function sU(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function sB(e,t){let i=e%t;return i<0?t+i:i}let s$=new rf;function sV(e,t,i,r){s$.set(e,t,i);let n=s$.len();return{distance:r/n,normal:new rf(-e/n,-t/n,-i/n)}}function sW(e,t){let{size:i=1,startIndex:r=0}=t,s=void 0!==t.endIndex?t.endIndex:e.length,o=(s-r)/i;n=sN.allocate(n,o,{type:Float32Array,size:2*i});let a=r,l=0;for(;a<s;){for(let t=0;t<i;t++){let r=e[a++];n[l+t]=r,n[l+t+i]=r-Math.fround(r)}l+=2*i}return n.subarray(0,o*i*2)}function sG(e){let t=null,i=!1;for(let r of e)r&&(t?(i||(t=[[t[0][0],t[0][1]],[t[1][0],t[1][1]]],i=!0),t[0][0]=Math.min(t[0][0],r[0][0]),t[0][1]=Math.min(t[0][1],r[0][1]),t[1][0]=Math.max(t[1][0],r[1][0]),t[1][1]=Math.max(t[1][1],r[1][1])):t=r);return t}var tS=tS;let sH=Math.PI/180,sq=sU(),sZ=[0,0,0],sY={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]};class sK{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||"viewport",this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||sY,this.focalDistance=e.focalDistance||1,this.position=e.position||sZ,this.modelMatrix=e.modelMatrix||null;const{longitude:t,latitude:i}=e;this.isGeospatial=Number.isFinite(i)&&Number.isFinite(t),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?iP.WEB_MERCATOR:iP.WEB_MERCATOR_AUTO_OFFSET:iP.IDENTITY}equals(e){return e instanceof sK&&(this===e||e.width===this.width&&e.height===this.height&&e.scale===this.scale&&iJ(e.projectionMatrix,this.projectionMatrix)&&iJ(e.viewMatrix,this.viewMatrix))}project(e,{topLeft:t=!0}={}){let i=rq(this.projectPosition(e),this.pixelProjectionMatrix),[r,n]=i,s=t?n:this.height-n;return 2===e.length?[r,s]:[r,s,i[2]]}unproject(e,{topLeft:t=!0,targetZ:i}={}){let[r,n,s]=e,o=t?n:this.height-n,a=i&&i*this.distanceScales.unitsPerMeter[2],l=rZ([r,o,s],this.pixelUnprojectionMatrix,a),[c,u,h]=this.unprojectPosition(l);return Number.isFinite(s)?[c,u,h]:Number.isFinite(i)?[c,u,i]:[c,u]}projectPosition(e){let[t,i]=this.projectFlat(e);return[t,i,(e[2]||0)*this.distanceScales.unitsPerMeter[2]]}unprojectPosition(e){let[t,i]=this.unprojectFlat(e);return[t,i,(e[2]||0)*this.distanceScales.metersPerUnit[2]]}projectFlat(e){if(this.isGeospatial){let t=rU(e);return t[1]=iK(t[1],-318,830),t}return e}unprojectFlat(e){return this.isGeospatial?rB(e):e}getBounds(e={}){let t={targetZ:e.z||0},i=this.unproject([0,0],t),r=this.unproject([this.width,0],t),n=this.unproject([0,this.height],t),s=this.unproject([this.width,this.height],t);return[Math.min(i[0],r[0],n[0],s[0]),Math.min(i[1],r[1],n[1],s[1]),Math.max(i[0],r[0],n[0],s[0]),Math.max(i[1],r[1],n[1],s[1])]}getDistanceScales(e){return e&&this.isGeospatial?rV({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:t,width:i=1,height:r=1}){return e<this.x+this.width&&this.x<e+i&&t<this.y+this.height&&this.y<t+r}getFrustumPlanes(){var e;return this._frustumPlanes.near?this._frustumPlanes:(Object.assign(this._frustumPlanes,{left:sV((e=this.viewProjectionMatrix)[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),right:sV(e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),bottom:sV(e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),top:sV(e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),near:sV(e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]),far:sV(e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14])}),this._frustumPlanes)}panByPosition(e,t,i){return null}_initProps(e){let t=e.longitude,i=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=function(e){let{latitude:t}=e;return rz(Number.isFinite(t)),rO(4003e4*Math.cos(t*rF))-9}({latitude:i})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||rV({latitude:i,longitude:t}));let r=Math.pow(2,this.zoom);this.scale=r;let{position:n,modelMatrix:s}=e,o=sZ;if(n&&(o=s?new rL(s).transformAsVector(n,[]):n),this.isGeospatial){let e=this.projectPosition([t,i,0]);this.center=new rf(o).scale(this.distanceScales.unitsPerMeter).add(e)}else this.center=this.projectPosition(o)}_initMatrices(e){var t;let{viewMatrix:i=sq,projectionMatrix:r=null,orthographic:n=!1,fovyRadians:s,fovy:o=75,near:a=.1,far:l=1e3,padding:c=null,focalDistance:u=1}=e;this.viewMatrixUncentered=i,this.viewMatrix=new rL().multiplyRight(i).translate(new rf(this.center).negate()),this.projectionMatrix=r||function({width:e,height:t,orthographic:i,fovyRadians:r,focalDistance:n,padding:s,near:o,far:a}){let l=e/t,c=i?new rL().orthographic({fovy:r,aspect:l,focalDistance:n,near:o,far:a}):new rL().perspective({fovy:r,aspect:l,near:o,far:a});if(s){let{left:i=0,right:r=0,top:n=0,bottom:o=0}=s,a=iK((i+e-r)/2,0,e)-e/2,l=iK((n+t-o)/2,0,t)-t/2;c[8]-=2*a/e,c[9]+=2*l/t}return c}({width:this.width,height:this.height,orthographic:n,fovyRadians:s||o*sH,focalDistance:u,padding:c,near:a,far:l});let h=sU();tS.multiply(h,h,this.projectionMatrix),tS.multiply(h,h,this.viewMatrix),this.viewProjectionMatrix=h,this.viewMatrixInverse=tS.invert([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=[(t=this.viewMatrixInverse)[12],t[13],t[14]];let d=sU(),p=sU();tS.scale(d,d,[this.width/2,-this.height/2,1]),tS.translate(d,d,[1,-1,0]),tS.multiply(p,d,this.viewProjectionMatrix),this.pixelProjectionMatrix=p,this.pixelUnprojectionMatrix=tS.invert(sU(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||tU.warn("Pixel project matrix not invertible")()}}sK.displayName="Viewport";let sX=sK;class sJ{constructor(e,t){this._lastRenderedLayers=[],this._needsRedraw=!1,this._needsUpdate=!1,this._nextLayers=null,this._debug=!1,this._defaultShaderModulesChanged=!1,this.activateViewport=e=>{nu("layerManager.activateViewport",this,e),e&&(this.context.viewport=e)};const{deck:i,stats:r,viewport:n,timeline:s}=t||{};this.layers=[],this.resourceManager=new sF({device:e,protocol:"deck://"}),this.context={mousePosition:null,userData:{},layerManager:this,device:e,gl:e?.gl,deck:i,shaderAssembler:function(e){let t=eH.getDefaultShaderAssembler();for(let e of r9)t.addDefaultModule(e);for(let i of(t._hookFunctions.length=0,"glsl"===e?r7:ne))t.addShaderHook(i);return t}(e?.info?.shadingLanguage||"glsl"),defaultShaderModules:[te],renderPass:void 0,stats:r||new nd.Stats({id:"deck.gl"}),viewport:n||new sX({id:"DEFAULT-INITIAL-VIEWPORT"}),timeline:s||new G,resourceManager:this.resourceManager,onError:void 0},Object.seal(this)}finalize(){for(let e of(this.resourceManager.finalize(),this.layers))this._finalizeLayer(e)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;for(let i of(e.clearRedrawFlags&&(this._needsRedraw=!1),this.layers)){let r=i.getNeedsRedraw(e);t=t||r}return t}needsUpdate(){return this._nextLayers&&this._nextLayers!==this._lastRenderedLayers?"layers changed":this._defaultShaderModulesChanged?"shader modules changed":this._needsUpdate}setNeedsRedraw(e){this._needsRedraw=this._needsRedraw||e}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e}getLayers({layerIds:e}={}){return e?this.layers.filter(t=>e.find(e=>0===t.id.indexOf(e))):this.layers}setProps(e){"debug"in e&&(this._debug=e.debug),"userData"in e&&(this.context.userData=e.userData),"layers"in e&&(this._nextLayers=e.layers),"onError"in e&&(this.context.onError=e.onError)}setLayers(e,t){nu("layerManager.setLayers",this,t,e),this._lastRenderedLayers=e;let i=nh(e,Boolean);for(let e of i)e.context=this.context;this._updateLayers(this.layers,i)}updateLayers(){let e=this.needsUpdate();e&&(this.setNeedsRedraw(`updating layers: ${e}`),this.setLayers(this._nextLayers||this._lastRenderedLayers,e)),this._nextLayers=null}addDefaultShaderModule(e){let{defaultShaderModules:t}=this.context;t.find(t=>t.name===e.name)||(t.push(e),this._defaultShaderModulesChanged=!0)}removeDefaultShaderModule(e){let{defaultShaderModules:t}=this.context,i=t.findIndex(t=>t.name===e.name);i>=0&&(t.splice(i,1),this._defaultShaderModulesChanged=!0)}_handleError(e,t,i){i.raiseError(t,`${e} of ${i}`)}_updateLayers(e,t){let i={};for(let t of e)i[t.id]?tU.warn(`Multiple old layers with same id ${t.id}`)():i[t.id]=t;if(this._defaultShaderModulesChanged){for(let t of e)t.setNeedsUpdate(),t.setChangeFlags({extensionsChanged:!0});this._defaultShaderModulesChanged=!1}let r=[];this._updateSublayersRecursively(t,i,r),this._finalizeOldLayers(i);let n=!1;for(let e of r)if(e.hasUniformTransition()){n=`Uniform transition in ${e}`;break}this._needsUpdate=n,this.layers=r}_updateSublayersRecursively(e,t,i){for(let r of e){r.context=this.context;let e=t[r.id];null===e&&tU.warn(`Multiple new layers with same id ${r.id}`)(),t[r.id]=null;let n=null;try{this._debug&&e!==r&&r.validateProps(),e?(this._transferLayerState(e,r),this._updateLayer(r)):this._initializeLayer(r),i.push(r),n=r.isComposite?r.getSubLayers():null}catch(e){this._handleError("matching",e,r)}n&&this._updateSublayersRecursively(n,t,i)}}_finalizeOldLayers(e){for(let t in e){let i=e[t];i&&this._finalizeLayer(i)}}_initializeLayer(e){try{e._initialize(),e.lifecycle="Initialized"}catch(t){this._handleError("initialization",t,e)}}_transferLayerState(e,t){t._transferState(e),t.lifecycle="Matched. State transferred from previous layer",t!==e&&(e.lifecycle="Discarded. Awaiting garbage collection")}_updateLayer(e){try{e._update()}catch(t){this._handleError("update",t,e)}}_finalizeLayer(e){this._needsRedraw=this._needsRedraw||`finalized ${e}`,e.lifecycle="No longer matched. Awaiting garbage collection";try{e._finalize(),e.lifecycle="Finalized! Awaiting garbage collection"}catch(t){this._handleError("finalization",t,e)}}}function sQ(e,t,i){if(e===t)return!0;if(!i||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!sQ(e[r],t[r],i-1))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let n of r)if(!t.hasOwnProperty(n)||!sQ(e[n],t[n],i-1))return!1;return!0}return!1}class s0{constructor(e){this.views=[],this.width=100,this.height=100,this.viewState={},this.controllers={},this.timeline=e.timeline,this._viewports=[],this._viewportMap={},this._isUpdating=!1,this._needsRedraw="First render",this._needsUpdate="Initialize",this._eventManager=e.eventManager,this._eventCallbacks={onViewStateChange:e.onViewStateChange,onInteractionStateChange:e.onInteractionStateChange},this._pickPosition=e.pickPosition,Object.seal(this),this.setProps(e)}finalize(){for(let e in this.controllers){let t=this.controllers[e];t&&t.finalize()}this.controllers={}}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e,this._needsRedraw=this._needsRedraw||e}updateViewStates(){for(let e in this.controllers){let t=this.controllers[e];t&&t.updateTransition()}}getViewports(e){return e?this._viewports.filter(t=>t.containsPixel(e)):this._viewports}getViews(){let e={};return this.views.forEach(t=>{e[t.id]=t}),e}getView(e){return this.views.find(t=>t.id===e)}getViewState(e){let t="string"==typeof e?this.getView(e):e,i=t&&this.viewState[t.getViewStateId()]||this.viewState;return t?t.filterViewState(i):i}getViewport(e){return this._viewportMap[e]}unproject(e,t){let i=this.getViewports(),r={x:e[0],y:e[1]};for(let n=i.length-1;n>=0;--n){let s=i[n];if(s.containsPixel(r)){let i=e.slice();return i[0]-=s.x,i[1]-=s.y,s.unproject(i,t)}}return null}setProps(e){e.views&&this._setViews(e.views),e.viewState&&this._setViewState(e.viewState),("width"in e||"height"in e)&&this._setSize(e.width,e.height),"pickPosition"in e&&(this._pickPosition=e.pickPosition),this._isUpdating||this._update()}_update(){this._isUpdating=!0,this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._isUpdating=!1}_setSize(e,t){(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.setNeedsUpdate("Size changed"))}_setViews(e){e=nh(e,Boolean),this._diffViews(e,this.views)&&this.setNeedsUpdate("views changed"),this.views=e}_setViewState(e){e?(sQ(e,this.viewState,3)||this.setNeedsUpdate("viewState changed"),this.viewState=e):tU.warn("missing `viewState` or `initialViewState`")()}_createController(e,t){return new t.type({timeline:this.timeline,eventManager:this._eventManager,onViewStateChange:this._eventCallbacks.onViewStateChange,onStateChange:this._eventCallbacks.onInteractionStateChange,makeViewport:t=>this.getView(e.id)?.makeViewport({viewState:t,width:this.width,height:this.height}),pickPosition:this._pickPosition})}_updateController(e,t,i,r){let n=e.controller;if(n&&i){let s={...t,...n,id:e.id,x:i.x,y:i.y,width:i.width,height:i.height};return r&&r.constructor===n.type||(r=this._createController(e,s)),r&&r.setProps(s),r}return null}_rebuildViewports(){let{views:e}=this,t=this.controllers;this._viewports=[],this.controllers={};let i=!1;for(let r=e.length;r--;){let n=e[r],s=this.getViewState(n),o=n.makeViewport({viewState:s,width:this.width,height:this.height}),a=t[n.id],l=!!n.controller;l&&!a&&(i=!0),(i||!l)&&a&&(a.finalize(),a=null),this.controllers[n.id]=this._updateController(n,s,o,a),o&&this._viewports.unshift(o)}for(let e in t){let i=t[e];i&&!this.controllers[e]&&i.finalize()}this._buildViewportMap()}_buildViewportMap(){this._viewportMap={},this._viewports.forEach(e=>{e.id&&(this._viewportMap[e.id]=this._viewportMap[e.id]||e)})}_diffViews(e,t){return e.length!==t.length||e.some((i,r)=>!e[r].equals(t[r]))}}let s1=/^(?:\d+\.?\d*|\.\d+)$/;function s2(e){switch(typeof e){case"number":if(!Number.isFinite(e))throw Error(`Could not parse position string ${e}`);return{type:"literal",value:e};case"string":try{let t=function(e){let t=[],i=0;for(;i<e.length;){let r=e[i];if(/\s/.test(r)){i++;continue}if("+"===r||"-"===r||"("===r||")"===r||"%"===r){t.push({type:"symbol",value:r}),i++;continue}if(s6(r)||"."===r){let n=i,s="."===r;for(i++;i<e.length;){let t=e[i];if(s6(t)){i++;continue}if("."===t&&!s){s=!0,i++;continue}break}let o=e.slice(n,i);if(!s1.test(o))throw Error("Invalid number token");t.push({type:"number",value:parseFloat(o)});continue}if(s5(r)){let r=i;for(;i<e.length&&s5(e[i]);)i++;let n=e.slice(r,i).toLowerCase();t.push({type:"word",value:n});continue}throw Error("Invalid token in position string")}return t}(e);return new s4(t).parseExpression()}catch(i){let t=i instanceof Error?i.message:String(i);throw Error(`Could not parse position string ${e}: ${t}`)}default:throw Error(`Could not parse position string ${e}`)}}function s3(e,t){return function e(t,i){switch(t.type){case"literal":return t.value;case"percentage":return Math.round(t.value*i);case"binary":let r=e(t.left,i),n=e(t.right,i);return"+"===t.operator?r+n:r-n;default:throw Error("Unknown layout expression type")}}(e,t)}class s4{constructor(e){this.index=0,this.tokens=e}parseExpression(){let e=this.parseBinaryExpression();if(this.index<this.tokens.length)throw Error("Unexpected token at end of expression");return e}parseBinaryExpression(){var e;let t=this.parseFactor(),i=this.peek();for(;(e=i)&&"symbol"===e.type&&("+"===e.value||"-"===e.value);){this.index++;let e=this.parseFactor();t={type:"binary",operator:i.value,left:t,right:e},i=this.peek()}return t}parseFactor(){let e=this.peek();if(!e)throw Error("Unexpected end of expression");if("symbol"===e.type&&"+"===e.value)return this.index++,this.parseFactor();if("symbol"===e.type&&"-"===e.value)return this.index++,{type:"binary",operator:"-",left:{type:"literal",value:0},right:this.parseFactor()};if("symbol"===e.type&&"("===e.value){this.index++;let e=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw Error("Missing closing parenthesis");return e}if("word"===e.type&&"calc"===e.value){if(this.index++,!this.consumeSymbol("("))throw Error("Missing opening parenthesis after calc");let e=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw Error("Missing closing parenthesis");return e}if("number"===e.type){this.index++;let t=e.value,i=this.peek();return i&&"symbol"===i.type&&"%"===i.value?(this.index++,{type:"percentage",value:t/100}):(i&&"word"===i.type&&"px"===i.value&&this.index++,{type:"literal",value:t})}throw Error("Unexpected token in expression")}consumeSymbol(e){let t=this.peek();return!!t&&"symbol"===t.type&&t.value===e&&(this.index++,!0)}peek(){return this.tokens[this.index]||null}}function s6(e){return e>="0"&&e<="9"}function s5(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"}class s8{constructor(e){const{id:t,x:i=0,y:r=0,width:n="100%",height:s="100%",padding:o=null}=e;this.id=t||this.constructor.displayName||"view",this.props={...e,id:this.id},this._x=s2(i),this._y=s2(r),this._width=s2(n),this._height=s2(s),this._padding=o&&{left:s2(o.left||0),right:s2(o.right||0),top:s2(o.top||0),bottom:s2(o.bottom||0)},this.equals=this.equals.bind(this),Object.seal(this)}equals(e){return this===e||this.constructor===e.constructor&&sQ(this.props,e.props,2)}clone(e){return new this.constructor({...this.props,...e})}makeViewport({width:e,height:t,viewState:i}){i=this.filterViewState(i);let r=this.getDimensions({width:e,height:t});return r.height&&r.width?new(this.getViewportType(i))({...i,...this.props,...r}):null}getViewStateId(){let{viewState:e}=this.props;return"string"==typeof e?e:e?.id||this.id}filterViewState(e){if(this.props.viewState&&"object"==typeof this.props.viewState){if(!this.props.viewState.id)return this.props.viewState;var t=this.props.viewState;let i={...e};for(let e in t)"id"!==e&&(Array.isArray(i[e])&&Array.isArray(t[e])?i[e]=function(e,t){e=e.slice();for(let i=0;i<t.length;i++){let r=t[i];Number.isFinite(r)&&(e[i]=r)}return e}(i[e],t[e]):i[e]=t[e]);return i}return e}getDimensions({width:e,height:t}){let i={x:s3(this._x,e),y:s3(this._y,t),width:s3(this._width,e),height:s3(this._height,t)};return this._padding&&(i.padding={left:s3(this._padding.left,e),top:s3(this._padding.top,t),right:s3(this._padding.right,e),bottom:s3(this._padding.bottom,t)}),i}get controller(){let e=this.props.controller;return e?!0===e?{type:this.ControllerType}:"function"==typeof e?{type:e}:{type:this.ControllerType,...e}:null}}var rk=rk;let s9=Math.PI/180;function s7(e,t,i){let{pixelUnprojectionMatrix:r}=e,n=rT(r,[t,0,1,1]),s=rT(r,[t,e.height,1,1]),o=(i*e.distanceScales.unitsPerMeter[2]-n[2])/(s[2]-n[2]),a=rB(rk.lerp([],n,s,o));return a.push(i),a}var rk=rk;class oe extends sX{constructor(e={}){let t;const{latitude:i=0,longitude:r=0,zoom:n=0,pitch:s=0,bearing:o=0,nearZMultiplier:a=.1,farZMultiplier:l=1.01,nearZ:c,farZ:u,orthographic:h=!1,projectionMatrix:d,repeat:p=!1,worldOffset:f=0,position:g,padding:m,legacyMeterSizes:v=!1}=e;let{width:_,height:y,altitude:b=1.5}=e;const w=Math.pow(2,n);_=_||1,y=y||1;let x=null;if(d)t=rG(b=d[5]/2);else{let r;if(e.fovy?b=rH(t=e.fovy):t=rG(b),m){const{top:e=0,bottom:t=0}=m;r=[0,iK((e+y-t)/2,0,y)-y/2]}x=function(e){let{width:t,height:i,altitude:r,pitch:n=0,offset:s,center:o,scale:a,nearZMultiplier:l=1,farZMultiplier:c=1}=e,{fovy:u=rG(1.5)}=e;void 0!==r&&(u=rG(r));let h=u*rF,d=n*rF,p=rH(u),f=p;o&&(f+=o[2]*a/Math.cos(d)/i);let g=h*(.5+(s?s[1]:0)/i),m=Math.sin(g)*f/Math.sin(rR(Math.PI/2-d-g,.01,Math.PI-.01));return{fov:h,aspect:t/i,focalDistance:p,near:l,far:Math.min((Math.sin(d)*m+f)*c,10*f)}}({width:_,height:y,scale:w,center:g&&[0,0,g[2]*r$(i)],offset:r,pitch:s,fovy:t,nearZMultiplier:a,farZMultiplier:l}),Number.isFinite(c)&&(x.near=c),Number.isFinite(u)&&(x.far=u)}let P=function(e){let{height:t,pitch:i,bearing:r,altitude:n,scale:s,center:o}=e,a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];tS.translate(a,a,[0,0,-n]),tS.rotateX(a,a,-i*rF),tS.rotateZ(a,a,r*rF);let l=s/t;return tS.scale(a,a,[l,l,l]),o&&tS.translate(a,a,rI.negate([],o)),a}({height:y,pitch:s,bearing:o,scale:w,altitude:b});f&&(P=new rL().translate([512*f,0,0]).multiplyLeft(P)),super({...e,width:_,height:y,viewMatrix:P,longitude:r,latitude:i,zoom:n,...x,fovy:t,focalDistance:b}),this.latitude=i,this.longitude=r,this.zoom=n,this.pitch=s,this.bearing=o,this.altitude=b,this.fovy=t,this.orthographic=h,this._subViewports=p?[]:null,this._pseudoMeters=v,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){let e=this.getBounds(),t=Math.floor((e[0]+180)/360),i=Math.ceil((e[2]-180)/360);for(let e=t;e<=i;e++){let t=e?new oe({...this,worldOffset:e}):this;this._subViewports.push(t)}}return this._subViewports}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);let[t,i]=this.projectFlat(e);return[t,i,(e[2]||0)*r$(e[1])]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);let[t,i]=this.unprojectFlat(e),r=(e[2]||0)/r$(i);return[t,i,r]}addMetersToLngLat(e,t){return rW(e,t)}panByPosition(e,t,i){let r=rZ(t,this.pixelUnprojectionMatrix),n=this.projectFlat(e),s=rk.add([],n,rk.negate([],r)),o=rk.add([],this.center,s),[a,l]=this.unprojectFlat(o);return{longitude:a,latitude:l}}panByPosition3D(e,t){let i=e[2]||0,r=rk.sub([],e,this.unproject(t,{targetZ:i}));return{longitude:this.longitude+r[0],latitude:this.latitude+r[1]}}getBounds(e={}){let t=function(e,t=0){let i,r,{width:n,height:s,unproject:o}=e,a={targetZ:t},l=o([0,s],a),c=o([n,s],a);return(e.fovy?.5*e.fovy*s9:Math.atan(.5/e.altitude))>(90-e.pitch)*s9-.01?(i=s7(e,0,t),r=s7(e,n,t)):(i=o([0,0],a),r=o([n,0],a)),[l,c,r,i]}(this,e.z||0);return[Math.min(t[0][0],t[1][0],t[2][0],t[3][0]),Math.min(t[0][1],t[1][1],t[2][1],t[3][1]),Math.max(t[0][0],t[1][0],t[2][0],t[3][0]),Math.max(t[0][1],t[1][1],t[2][1],t[3][1])]}fitBounds(e,t={}){let{width:i,height:r}=this,{longitude:n,latitude:s,zoom:o}=function(e){let{width:t,height:i,bounds:r,minExtent:n=0,maxZoom:s=24,offset:o=[0,0]}=e,[[a,l],[c,u]]=r,h=function(e=0){return"number"==typeof e?{top:e,bottom:e,left:e,right:e}:(rz(Number.isFinite(e.top)&&Number.isFinite(e.bottom)&&Number.isFinite(e.left)&&Number.isFinite(e.right)),e)}(e.padding),d=rU([a,rR(u,-85.051129,85.051129)]),p=rU([c,rR(l,-85.051129,85.051129)]),f=[Math.max(Math.abs(p[0]-d[0]),n),Math.max(Math.abs(p[1]-d[1]),n)],g=[t-h.left-h.right-2*Math.abs(o[0]),i-h.top-h.bottom-2*Math.abs(o[1])];rz(g[0]>0&&g[1]>0);let m=g[0]/f[0],v=g[1]/f[1],_=(h.right-h.left)/2/m,y=(h.top-h.bottom)/2/v,b=rB([(p[0]+d[0])/2+_,(p[1]+d[1])/2+y]),w=Math.min(s,rO(Math.abs(Math.min(m,v))));return rz(Number.isFinite(w)),{longitude:b[0],latitude:b[1],zoom:w}}({width:i,height:r,bounds:e,...t});return new oe({width:i,height:r,longitude:n,latitude:s,zoom:o})}}oe.displayName="WebMercatorViewport";class ot{constructor(e){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=e}get inProgress(){return this._inProgress}start(e){this.cancel(),this.settings=e,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1)}update(){if(!this._inProgress)return!1;if(null===this._handle){let{_timeline:e,settings:t}=this;this._handle=e.addChannel({delay:e.getTime(),duration:t.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}}let oi=()=>{},or=e=>e;class on{constructor(e){this._onTransitionUpdate=e=>{let{time:t,settings:{interpolator:i,startProps:r,endProps:n,duration:s,easing:o}}=e,a=o(t/s),l=i.interpolateProps(r,n,a);this.propsInTransition=this.getControllerState({...this.props,...l}).getViewportProps(),this.onViewStateChange({viewState:this.propsInTransition,oldViewState:this.props})},this.getControllerState=e.getControllerState,this.propsInTransition=null,this.transition=new ot(e.timeline),this.onViewStateChange=e.onViewStateChange||oi,this.onStateChange=e.onStateChange||oi}finalize(){this.transition.cancel()}getViewportInTransition(){return this.propsInTransition}processViewStateChange(e){let t=!1,i=this.props;if(this.props=e,!i||this._shouldIgnoreViewportChange(i,e))return!1;if(this._isTransitionEnabled(e)){let r=i;if(this.transition.inProgress){let{interruption:e,endProps:t}=this.transition.settings;r={...i,...2===e?t:this.propsInTransition||i}}this._triggerTransition(r,e),t=!0}else this.transition.cancel();return t}updateTransition(){this.transition.update()}_isTransitionEnabled(e){let{transitionDuration:t,transitionInterpolator:i}=e;return(t>0||"auto"===t)&&!!i}_isUpdateDueToCurrentTransition(e){return!!this.transition.inProgress&&!!this.propsInTransition&&this.transition.settings.interpolator.arePropsEqual(e,this.propsInTransition)}_shouldIgnoreViewportChange(e,t){return this.transition.inProgress?3===this.transition.settings.interruption||this._isUpdateDueToCurrentTransition(t):!this._isTransitionEnabled(t)||t.transitionInterpolator.arePropsEqual(e,t)}_triggerTransition(e,t){let i=this.getControllerState(e),r=this.getControllerState(t).shortestPathFrom(i),n=t.transitionInterpolator,s=n.getDuration?n.getDuration(e,t):t.transitionDuration;if(0===s)return;let o=n.initializeProps(e,r);this.propsInTransition={};let a={duration:s,easing:t.transitionEasing||or,interpolator:n,interruption:t.transitionInterruption||1,startProps:o.start,endProps:o.end,onStart:t.onTransitionStart,onUpdate:this._onTransitionUpdate,onInterrupt:this._onTransitionEnd(t.onTransitionInterrupt),onEnd:this._onTransitionEnd(t.onTransitionEnd)};this.transition.start(a),this.onStateChange({inTransition:!0}),this.updateTransition()}_onTransitionEnd(e){return t=>{this.propsInTransition=null,this.onStateChange({inTransition:!1,isZooming:!1,isPanning:!1,isRotating:!1}),e?.(t)}}}function os(e,t){if(!e)throw Error(t||"deck.gl: assertion failed.")}class oo{constructor(e){const{compare:t,extract:i,required:r}=e;this._propsToCompare=t,this._propsToExtract=i||t,this._requiredProps=r}arePropsEqual(e,t){for(let i of this._propsToCompare)if(!(i in e)||!(i in t)||!iJ(e[i],t[i]))return!1;return!0}initializeProps(e,t){let i={},r={};for(let n of this._propsToExtract)(n in e||n in t)&&(i[n]=e[n],r[n]=t[n]);return this._checkRequiredProps(i),this._checkRequiredProps(r),{start:i,end:r}}getDuration(e,t){return t.transitionDuration}_checkRequiredProps(e){this._requiredProps&&this._requiredProps.forEach(t=>{let i=e[t];os(Number.isFinite(i)||Array.isArray(i),`${t} is required for transition`)})}}var rI=rI,tF=tF;let oa=Math.PI/180,ol=180/Math.PI;class oc extends sX{constructor(e={}){const{longitude:t=0,zoom:i=0,nearZMultiplier:r=.5,farZMultiplier:n=1,resolution:s=10}=e;let{latitude:o=0,height:a,altitude:l=1.5,fovy:c}=e;o=Math.max(Math.min(o,85.051129),-85.051129),a=a||1,c?l=rH(c):c=rG(l);const u=Math.pow(2,i-ou(o)),h=e.nearZ??r,d=e.farZ??(l+512*u/a)*n,p=new rL().lookAt({eye:[0,-l,0],up:[0,0,1]});p.rotateX(o*oa),p.rotateZ(-t*oa),p.scale(u/a),super({...e,height:a,viewMatrix:p,longitude:t,latitude:o,zoom:i,distanceScales:function(){let e=Math.PI/180*256;return{unitsPerMeter:[4018225162502676e-20,4018225162502676e-20,4018225162502676e-20],unitsPerMeter2:[0,0,0],metersPerUnit:[24886.609375,24886.609375,24886.609375],unitsPerDegree:[e,e,4018225162502676e-20],unitsPerDegree2:[0,0,0],degreesPerUnit:[1/e,1/e,24886.609375]}}(),fovy:c,focalDistance:l,near:h,far:d}),this.scale=u,this.latitude=o,this.longitude=t,this.fovy=c,this.resolution=s}get projectionMode(){return iP.GLOBE}getDistanceScales(){return this.distanceScales}getBounds(e={}){let t={targetZ:e.z||0},i=this.unproject([0,this.height/2],t),r=this.unproject([this.width/2,0],t),n=this.unproject([this.width,this.height/2],t),s=this.unproject([this.width/2,this.height],t);return n[0]<this.longitude&&(n[0]+=360),i[0]>this.longitude&&(i[0]-=360),[Math.min(i[0],n[0],r[0],s[0]),Math.min(i[1],n[1],r[1],s[1]),Math.max(i[0],n[0],r[0],s[0]),Math.max(i[1],n[1],r[1],s[1])]}unproject(e,{topLeft:t=!0,targetZ:i}={}){let r,[n,s,o]=e,a=t?s:this.height-s,{pixelUnprojectionMatrix:l}=this;if(Number.isFinite(o))r=oh(l,[n,a,o,1]);else{let e=oh(l,[n,a,-1,1]),t=oh(l,[n,a,1,1]),s=((i||0)/6370972+1)*256,o=rI.sqrLen(rI.sub([],e,t)),c=rI.sqrLen(e),u=rI.sqrLen(t),h=(4*c*u-(o-c-u)**2)/16*4/o,d=(Math.sqrt(c-h)-Math.sqrt(Math.max(0,s*s-h)))/Math.sqrt(o);r=rI.lerp([],e,t,d)}let[c,u,h]=this.unprojectPosition(r);return Number.isFinite(o)?[c,u,h]:Number.isFinite(i)?[c,u,i]:[c,u]}projectPosition(e){let[t,i,r=0]=e,n=t*oa,s=i*oa,o=Math.cos(s),a=(r/6370972+1)*256;return[Math.sin(n)*o*a,-Math.cos(n)*o*a,Math.sin(s)*a]}unprojectPosition(e){let[t,i,r]=e,n=rI.len(e);return[Math.atan2(t,-i)*ol,Math.asin(r/n)*ol,(n/256-1)*6370972]}projectFlat(e){return e}unprojectFlat(e){return e}panByPosition([e,t,i],r,n){let s=.25/Math.pow(2,this.zoom-ou(this.latitude)),o=e+s*(n[0]-r[0]),a=t-s*(n[1]-r[1]),l={longitude:o,latitude:a=Math.max(Math.min(a,85.051129),-85.051129),zoom:i-ou(t)};return l.zoom+=ou(l.latitude),l}}function ou(e){return Math.log2(Math.PI*Math.cos(e*Math.PI/180))}function oh(e,t){let i=tF.transformMat4([],t,e);return tF.scale(i,i,1/i[3]),i}oc.displayName="GlobeViewport";let od=["longitude","latitude","zoom","bearing","pitch"],op=["longitude","latitude","zoom"];class of extends oo{constructor(e={}){const t=Array.isArray(e)?e:e.transitionProps,i=Array.isArray(e)?{}:e;i.transitionProps=Array.isArray(t)?{compare:t,required:t}:t||{compare:od,required:op},super(i.transitionProps),this.opts=i}initializeProps(e,t){let i=super.initializeProps(e,t),{makeViewport:r,around:n}=this.opts;if(r&&n)if(r(e)instanceof oc)tU.warn("around not supported in GlobeView")();else{let s=r(e),o=r(t),a=s.unproject(n);i.start.around=n,Object.assign(i.end,{around:o.project(a),aroundPosition:a,width:t.width,height:t.height})}return i}interpolateProps(e,t,i){let r={};for(let n of this._propsToExtract)r[n]=iX(e[n]||0,t[n]||0,i);if(t.aroundPosition&&this.opts.makeViewport){let n=this.opts.makeViewport({...t,...r});Object.assign(r,n.panByPosition(t.aroundPosition,iX(e.around,t.around,i)))}return r}}let og={transitionDuration:0},om=e=>1-(1-e)*(1-e),ov=["wheel"],o_=["panstart","panmove","panend"],oy=["pinchstart","pinchmove","pinchend"],ob=["multipanstart","multipanmove","multipanend"],ow=["dblclick"],ox=["keydown"],oP={};class oC{constructor(e){this.state={},this._events={},this._interactionState={isDragging:!1},this._customEvents=[],this._eventStartBlocked=null,this._panMove=!1,this.invertPan=!1,this.dragMode="rotate",this.inertia=0,this.scrollZoom=!0,this.dragPan=!0,this.dragRotate=!0,this.doubleClickZoom=!0,this.touchZoom=!0,this.touchRotate=!1,this.keyboard=!0,this.transitionManager=new on({...e,getControllerState:e=>new this.ControllerState(e),onViewStateChange:this._onTransition.bind(this),onStateChange:this._setInteractionState.bind(this)}),this.handleEvent=this.handleEvent.bind(this),this.eventManager=e.eventManager,this.onViewStateChange=e.onViewStateChange||(()=>{}),this.onStateChange=e.onStateChange||(()=>{}),this.makeViewport=e.makeViewport,this.pickPosition=e.pickPosition}set events(e){this.toggleEvents(this._customEvents,!1),this.toggleEvents(e,!0),this._customEvents=e,this.props&&this.setProps(this.props)}finalize(){for(let e in this._events)this._events[e]&&this.eventManager?.off(e,this.handleEvent);this.transitionManager.finalize()}handleEvent(e){this._controllerState=void 0;let t=this._eventStartBlocked;switch(e.type){case"panstart":return!t&&this._onPanStart(e);case"panmove":return this._onPan(e);case"panend":return this._onPanEnd(e);case"pinchstart":return!t&&this._onPinchStart(e);case"pinchmove":return this._onPinch(e);case"pinchend":return this._onPinchEnd(e);case"multipanstart":return!t&&this._onMultiPanStart(e);case"multipanmove":return this._onMultiPan(e);case"multipanend":return this._onMultiPanEnd(e);case"dblclick":return this._onDoubleClick(e);case"wheel":return this._onWheel(e);case"keydown":return this._onKeyDown(e);default:return!1}}get controllerState(){return this._controllerState=this._controllerState||new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),this._controllerState}getCenter(e){let{x:t,y:i}=this.props,{offsetCenter:r}=e;return[r.x-t,r.y-i]}isPointInBounds(e,t){let{width:i,height:r}=this.props;if(t&&t.handled)return!1;let n=e[0]>=0&&e[0]<=i&&e[1]>=0&&e[1]<=r;return n&&t&&t.stopPropagation(),n}isFunctionKeyPressed(e){let{srcEvent:t}=e;return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}isDragging(){return this._interactionState.isDragging||!1}blockEvents(e){let t=setTimeout(()=>{this._eventStartBlocked===t&&(this._eventStartBlocked=null)},e);this._eventStartBlocked=t}setProps(e){e.dragMode&&(this.dragMode=e.dragMode);let t=this.props;this.props=e,"transitionInterpolator"in e||(e.transitionInterpolator=this._getTransitionProps().transitionInterpolator),this.transitionManager.processViewStateChange(e);let{inertia:i}=e;this.inertia=Number.isFinite(i)?i:300*(!0===i);let{scrollZoom:r=!0,dragPan:n=!0,dragRotate:s=!0,doubleClickZoom:o=!0,touchZoom:a=!0,touchRotate:l=!1,keyboard:c=!0}=e,u=!!this.onViewStateChange;if(this.toggleEvents(ov,u&&r),this.toggleEvents(o_,u),this.toggleEvents(oy,u&&(a||l)),this.toggleEvents(ob,u&&l),this.toggleEvents(ow,u&&o),this.toggleEvents(ox,u&&c),this.scrollZoom=r,this.dragPan=n,this.dragRotate=s,this.doubleClickZoom=o,this.touchZoom=a,this.touchRotate=l,this.keyboard=c,(!t||t.height!==e.height||t.width!==e.width||t.maxBounds!==e.maxBounds)&&e.maxBounds){let t=new this.ControllerState({...e,makeViewport:this.makeViewport}),i=t.getViewportProps();Object.keys(i).some(t=>!sQ(i[t],e[t],1))&&this.updateViewport(t)}}updateTransition(){this.transitionManager.updateTransition()}toggleEvents(e,t){this.eventManager&&e.forEach(e=>{this._events[e]!==t&&(this._events[e]=t,t?this.eventManager.on(e,this.handleEvent):this.eventManager.off(e,this.handleEvent))})}updateViewport(e,t=null,i={}){let r={...e.getViewportProps(),...t},n=this.controllerState!==e;if(this.state=e.getState(),this._setInteractionState(i),n){let e=this.controllerState&&this.controllerState.getViewportProps();this.onViewStateChange&&this.onViewStateChange({viewState:r,interactionState:this._interactionState,oldViewState:e,viewId:this.props.id})}}_onTransition(e){this.onViewStateChange({...e,interactionState:this._interactionState,viewId:this.props.id})}_setInteractionState(e){Object.assign(this._interactionState,e),this.onStateChange(this._interactionState)}_onPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.isFunctionKeyPressed(e)||e.rightButton||!1;(this.invertPan||"pan"===this.dragMode)&&(i=!i);let r=this.controllerState[i?"panStart":"rotateStart"]({pos:t});return this._panMove=i,this.updateViewport(r,og,{isDragging:!0}),!0}_onPan(e){return!!this.isDragging()&&(this._panMove?this._onPanMove(e):this._onPanRotate(e))}_onPanEnd(e){return!!this.isDragging()&&(this._panMove?this._onPanMoveEnd(e):this._onPanRotateEnd(e))}_onPanMove(e){if(!this.dragPan)return!1;let t=this.getCenter(e),i=this.controllerState.pan({pos:t});return this.updateViewport(i,og,{isDragging:!0,isPanning:!0}),!0}_onPanMoveEnd(e){let{inertia:t}=this;if(this.dragPan&&t&&e.velocity){let i=this.getCenter(e),r=[i[0]+e.velocityX*t/2,i[1]+e.velocityY*t/2],n=this.controllerState.pan({pos:r}).panEnd();this.updateViewport(n,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:om},{isDragging:!1,isPanning:!0})}else{let e=this.controllerState.panEnd();this.updateViewport(e,null,{isDragging:!1,isPanning:!1})}return!0}_onPanRotate(e){if(!this.dragRotate)return!1;let t=this.getCenter(e),i=this.controllerState.rotate({pos:t});return this.updateViewport(i,og,{isDragging:!0,isRotating:!0}),!0}_onPanRotateEnd(e){let{inertia:t}=this;if(this.dragRotate&&t&&e.velocity){let i=this.getCenter(e),r=[i[0]+e.velocityX*t/2,i[1]+e.velocityY*t/2],n=this.controllerState.rotate({pos:r}).rotateEnd();this.updateViewport(n,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:om},{isDragging:!1,isRotating:!0})}else{let e=this.controllerState.rotateEnd();this.updateViewport(e,null,{isDragging:!1,isRotating:!1})}return!0}_onWheel(e){if(!this.scrollZoom)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;e.srcEvent.preventDefault();let{speed:i=.01,smooth:r=!1}=!0===this.scrollZoom?{}:this.scrollZoom,{delta:n}=e,s=2/(1+Math.exp(-Math.abs(n*i)));n<0&&0!==s&&(s=1/s);let o=r?{...this._getTransitionProps({around:t}),transitionDuration:250}:og,a=this.controllerState.zoom({pos:t,scale:s});return this.updateViewport(a,o,{isZooming:!0,isPanning:!0}),r||this._setInteractionState({isZooming:!1,isPanning:!1}),!0}_onMultiPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.controllerState.rotateStart({pos:t});return this.updateViewport(i,og,{isDragging:!0}),!0}_onMultiPan(e){if(!this.touchRotate||!this.isDragging())return!1;let t=this.getCenter(e);t[0]-=e.deltaX;let i=this.controllerState.rotate({pos:t});return this.updateViewport(i,og,{isDragging:!0,isRotating:!0}),!0}_onMultiPanEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this;if(this.touchRotate&&t&&e.velocityY){let i=this.getCenter(e),r=[i[0],i[1]+=e.velocityY*t/2],n=this.controllerState.rotate({pos:r});this.updateViewport(n,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:om},{isDragging:!1,isRotating:!0}),this.blockEvents(t)}else{let e=this.controllerState.rotateEnd();this.updateViewport(e,null,{isDragging:!1,isRotating:!1})}return!0}_onPinchStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.controllerState.zoomStart({pos:t}).rotateStart({pos:t});return oP._startPinchRotation=e.rotation,oP._lastPinchEvent=e,this.updateViewport(i,og,{isDragging:!0}),!0}_onPinch(e){if(!this.touchZoom&&!this.touchRotate||!this.isDragging())return!1;let t=this.controllerState;if(this.touchZoom){let{scale:i}=e,r=this.getCenter(e);t=t.zoom({pos:r,scale:i})}if(this.touchRotate){let{rotation:i}=e;t=t.rotate({deltaAngleX:oP._startPinchRotation-i})}return this.updateViewport(t,og,{isDragging:!0,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:this.touchRotate}),oP._lastPinchEvent=e,!0}_onPinchEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this,{_lastPinchEvent:i}=oP;if(this.touchZoom&&t&&i&&e.scale!==i.scale){let r=this.getCenter(e),n=this.controllerState.rotateEnd(),s=Math.log2(e.scale),o=(s-Math.log2(i.scale))/(e.deltaTime-i.deltaTime),a=Math.pow(2,s+o*t/2);n=n.zoom({pos:r,scale:a}).zoomEnd(),this.updateViewport(n,{...this._getTransitionProps({around:r}),transitionDuration:t,transitionEasing:om},{isDragging:!1,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:!1}),this.blockEvents(t)}else{let e=this.controllerState.zoomEnd().rotateEnd();this.updateViewport(e,null,{isDragging:!1,isPanning:!1,isZooming:!1,isRotating:!1})}return oP._startPinchRotation=null,oP._lastPinchEvent=null,!0}_onDoubleClick(e){if(!this.doubleClickZoom)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.isFunctionKeyPressed(e),r=this.controllerState.zoom({pos:t,scale:i?.5:2});return this.updateViewport(r,this._getTransitionProps({around:t}),{isZooming:!0,isPanning:!0}),this.blockEvents(100),!0}_onKeyDown(e){let t;if(!this.keyboard)return!1;let i=this.isFunctionKeyPressed(e),{zoomSpeed:r,moveSpeed:n,rotateSpeedX:s,rotateSpeedY:o}=!0===this.keyboard?{}:this.keyboard,{controllerState:a}=this,l={};switch(e.srcEvent.code){case"Minus":t=i?a.zoomOut(r).zoomOut(r):a.zoomOut(r),l.isZooming=!0;break;case"Equal":t=i?a.zoomIn(r).zoomIn(r):a.zoomIn(r),l.isZooming=!0;break;case"ArrowLeft":i?(t=a.rotateLeft(s),l.isRotating=!0):(t=a.moveLeft(n),l.isPanning=!0);break;case"ArrowRight":i?(t=a.rotateRight(s),l.isRotating=!0):(t=a.moveRight(n),l.isPanning=!0);break;case"ArrowUp":i?(t=a.rotateUp(o),l.isRotating=!0):(t=a.moveUp(n),l.isPanning=!0);break;case"ArrowDown":i?(t=a.rotateDown(o),l.isRotating=!0):(t=a.moveDown(n),l.isPanning=!0);break;default:return!1}return this.updateViewport(t,this._getTransitionProps(),l),!0}_getTransitionProps(e){let{transition:t}=this;return t&&t.transitionInterpolator?e?{...t,transitionInterpolator:new of({...e,...t.transitionInterpolator.opts,makeViewport:this.controllerState.makeViewport})}:t:og}}class oM{constructor(e,t,i){this.makeViewport=i,this._viewportProps=this.applyConstraints(e),this._state=t}getViewportProps(){return this._viewportProps}getState(){return this._state}}let oE=[[-1/0,-90],[1/0,90]];function oS([e,t]){if(Math.abs(t)>90&&(t=90*Math.sign(t)),Number.isFinite(e)){let[i,r]=rU([e,t]);return[i,iK(r,0,512)]}let[,i]=rU([0,t]);return[e,iK(i,0,512)]}class oL extends oM{constructor(e){const{width:t,height:i,latitude:r,longitude:n,zoom:s,bearing:o=0,pitch:a=0,altitude:l=1.5,position:c=[0,0,0],maxZoom:u=20,minZoom:h=0,maxPitch:d=60,minPitch:p=0,startPanLngLat:f,startZoomLngLat:g,startRotatePos:m,startRotateLngLat:v,startBearing:_,startPitch:y,startZoom:b,normalize:w=!0}=e;os(Number.isFinite(n)),os(Number.isFinite(r)),os(Number.isFinite(s));const x=e.maxBounds||(w?oE:null);super({width:t,height:i,latitude:r,longitude:n,zoom:s,bearing:o,pitch:a,altitude:l,maxZoom:u,minZoom:h,maxPitch:d,minPitch:p,normalize:w,position:c,maxBounds:x},{startPanLngLat:f,startZoomLngLat:g,startRotatePos:m,startRotateLngLat:v,startBearing:_,startPitch:y,startZoom:b},e.makeViewport),this.getAltitude=e.getAltitude}panStart({pos:e}){return this._getUpdatedState({startPanLngLat:this._unproject(e)})}pan({pos:e,startPos:t}){let i=this.getState().startPanLngLat||this._unproject(t);if(!i)return this;let r=this.makeViewport(this.getViewportProps()).panByPosition(i,e);return this._getUpdatedState(r)}panEnd(){return this._getUpdatedState({startPanLngLat:null})}rotateStart({pos:e}){let t=this.getAltitude?.(e);return this._getUpdatedState({startRotatePos:e,startRotateLngLat:void 0!==t?this._unproject3D(e,t):void 0,startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:e,deltaAngleX:t=0,deltaAngleY:i=0}){let r,{startRotatePos:n,startRotateLngLat:s,startBearing:o,startPitch:a}=this.getState();if(!n||void 0===o||void 0===a)return this;if(r=e?this._getNewRotation(e,n,a,o):{bearing:o+t,pitch:a+i},s){let e=this.makeViewport({...this.getViewportProps(),...r}),t="panByPosition3D"in e?"panByPosition3D":"panByPosition";return this._getUpdatedState({...r,...e[t](s,n)})}return this._getUpdatedState(r)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startRotateLngLat:null,startBearing:null,startPitch:null})}zoomStart({pos:e}){return this._getUpdatedState({startZoomLngLat:this._unproject(e),startZoom:this.getViewportProps().zoom})}zoom({pos:e,startPos:t,scale:i}){let{startZoom:r,startZoomLngLat:n}=this.getState();if(n||(r=this.getViewportProps().zoom,n=this._unproject(t)||this._unproject(e)),!n)return this;let s=this._constrainZoom(r+Math.log2(i)),o=this.makeViewport({...this.getViewportProps(),zoom:s});return this._getUpdatedState({zoom:s,...o.panByPosition(n,e)})}zoomEnd(){return this._getUpdatedState({startZoomLngLat:null,startZoom:null})}zoomIn(e=2){return this._zoomFromCenter(e)}zoomOut(e=2){return this._zoomFromCenter(1/e)}moveLeft(e=100){return this._panFromCenter([e,0])}moveRight(e=100){return this._panFromCenter([-e,0])}moveUp(e=100){return this._panFromCenter([0,e])}moveDown(e=100){return this._panFromCenter([0,-e])}rotateLeft(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-e})}rotateRight(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+e})}rotateUp(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+e})}rotateDown(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-e})}shortestPathFrom(e){let t=e.getViewportProps(),i={...this.getViewportProps()},{bearing:r,longitude:n}=i;return Math.abs(r-t.bearing)>180&&(i.bearing=r<0?r+360:r-360),Math.abs(n-t.longitude)>180&&(i.longitude=n<0?n+360:n-360),i}applyConstraints(e){let{maxPitch:t,minPitch:i,pitch:r,longitude:n,bearing:s,normalize:o,maxBounds:a}=e;if(o&&((n<-180||n>180)&&(e.longitude=sB(n+180,360)-180),(s<-180||s>180)&&(e.bearing=sB(s+180,360)-180)),e.pitch=iK(r,i,t),e.zoom=this._constrainZoom(e.zoom,e),a){let t=oS(a[0]),i=oS(a[1]),r=2**e.zoom,n=e.width/2/r,s=e.height/2/r,[o,l]=rB([t[0]+n,t[1]+s]),[c,u]=rB([i[0]-n,i[1]-s]);e.longitude=iK(e.longitude,o,c),e.latitude=iK(e.latitude,l,u)}return e}_constrainZoom(e,t){t||(t=this.getViewportProps());let{maxZoom:i,maxBounds:r}=t,n=null!==r&&t.width>0&&t.height>0,{minZoom:s}=t;if(n){let e=oS(r[0]),n=oS(r[1]),o=n[0]-e[0],a=n[1]-e[1];Number.isFinite(o)&&o>0&&(s=Math.max(s,Math.log2(t.width/o))),Number.isFinite(a)&&a>0&&(s=Math.max(s,Math.log2(t.height/a))),s>i&&(s=i)}return iK(e,s,i)}_zoomFromCenter(e){let{width:t,height:i}=this.getViewportProps();return this.zoom({pos:[t/2,i/2],scale:e})}_panFromCenter(e){let{width:t,height:i}=this.getViewportProps();return this.pan({startPos:[t/2,i/2],pos:[t/2+e[0],i/2+e[1]]})}_getUpdatedState(e){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e})}_unproject(e){let t=this.makeViewport(this.getViewportProps());return e&&t.unproject(e)}_unproject3D(e,t){return this.makeViewport(this.getViewportProps()).unproject(e,{targetZ:t})}_getNewRotation(e,t,i,r){let n=e[0]-t[0],s=e[1]-t[1],o=e[1],a=t[1],{width:l,height:c}=this.getViewportProps(),u=0;s>0?Math.abs(c-a)>5&&(u=s/(a-c)*1.2):s<0&&a>5&&(u=1-o/a),u=iK(u,-1,1);let{minPitch:h,maxPitch:d}=this.getViewportProps(),p=i;return u>0?p=i+u*(d-i):u<0&&(p=i-u*(h-i)),{pitch:p,bearing:r+n/l*180}}}class oA extends oC{constructor(){super(...arguments),this.ControllerState=oL,this.transition={transitionDuration:300,transitionInterpolator:new of({transitionProps:{compare:["longitude","latitude","zoom","bearing","pitch","position"],required:["longitude","latitude","zoom"]}})},this.dragMode="pan",this.rotationPivot="center",this._getAltitude=e=>{if("2d"===this.rotationPivot)return 0;if("3d"===this.rotationPivot&&this.pickPosition){let{x:t,y:i}=this.props,r=this.pickPosition(t+e[0],i+e[1]);if(r&&r.coordinate&&r.coordinate.length>=3)return r.coordinate[2]}}}setProps(e){"rotationPivot"in e&&(this.rotationPivot=e.rotationPivot||"center"),e.getAltitude=this._getAltitude,e.position=e.position||[0,0,0],e.maxBounds=e.maxBounds||(!1===e.normalize?null:oE),super.setProps(e)}updateViewport(e,t=null,i={}){let r=e.getState();i.isDragging&&r.startRotateLngLat?i={...i,rotationPivotPosition:r.startRotateLngLat}:!1===i.isDragging&&(i={...i,rotationPivotPosition:void 0}),super.updateViewport(e,t,i)}}class oT extends s8{constructor(e={}){super(e)}getViewportType(){return oe}get ControllerType(){return oA}}oT.displayName="MapView";let oR=[255,255,255],oO=0;class ok{constructor(e={}){this.type="ambient";const{color:t=oR}=e,{intensity:i=1}=e;this.id=e.id||`ambient-${oO++}`,this.color=t,this.intensity=i}}let oI=[255,255,255],oz=[0,0,-1],oj=0;class oD{constructor(e={}){this.type="directional";const{color:t=oI}=e,{intensity:i=1}=e,{direction:r=oz}=e,{_shadow:n=!1}=e;this.id=e.id||`directional-${oj++}`,this.color=t,this.intensity=i,this.type="directional",this.direction=new rf(r).normalize().toArray(),this.shadow=n}getProjectedLight(e){return this}}class oF{constructor(e,t={id:"pass"}){const{id:i}=t;this.id=i,this.device=e,this.props={...t}}setProps(e){Object.assign(this.props,e)}render(e){}cleanup(){}}let oN={depthWriteEnabled:!0,depthCompare:"less-equal",blendColorOperation:"add",blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one-minus-dst-alpha",blendAlphaDstFactor:"one"};class oU extends oF{constructor(){super(...arguments),this._lastRenderIndex=-1}render(e){this._render(e)}_render(e){let t=this.device.canvasContext,i=e.target??t.getCurrentFramebuffer(),[r,n]=t.getDrawingBufferSize(),s=e.clearCanvas??!0,o=e.clearColor??(!!s&&[0,0,0,0]),a=e.colorMask??15,l={viewport:[0,0,r,n]};e.colorMask&&(l.colorMask=a),e.scissorRect&&(l.scissorRect=e.scissorRect);let c=this.device.beginRenderPass({framebuffer:i,parameters:l,clearColor:o,clearDepth:!!s&&1,clearStencil:!!s&&0});try{return this._drawLayers(c,e)}finally{c.end(),this.device.submit()}}_drawLayers(e,t){let{target:i,shaderModuleProps:r,viewports:n,views:s,onViewportActive:o,clearStack:a=!0}=t;t.pass=t.pass||"unknown",a&&(this._lastRenderIndex=-1);let l=[];for(let a of n){let n=s&&s[a.id];o?.(a);let c=this._getDrawLayerParams(a,t);for(let s of a.subViewports||[a]){let o=this._drawLayersInViewport(e,{target:i,shaderModuleProps:r,viewport:s,view:n,pass:t.pass,layers:t.layers},c);l.push(o)}}return l}_getDrawLayerParams(e,{layers:t,pass:i,isPicking:r=!1,layerFilter:n,cullRect:s,views:o,effects:a,shaderModuleProps:l},c=!1){let u=[],h=function e(t=0,i={}){let r={},n=(s,o)=>{let a,l=s.props._offset,c=s.id,u=s.parent&&s.parent.id;if(!u||u in i||n(s.parent,!1),u in r){let t=r[u]=r[u]||e(i[u],i);a=t(s,o),r[c]=t}else Number.isFinite(l)?(a=l+(i[u]||0),r[c]=null):a=t;return o&&a>=t&&(t=a+1),i[c]=a,a};return n}(this._lastRenderIndex+1),d={layer:t[0],viewport:e,isPicking:r,renderPass:i,cullRect:s},p={};for(let r=0;r<t.length;r++){let s=t[r],f=this._shouldDrawLayer(s,d,n,p),g={shouldDrawLayer:f};f&&!c&&(g.shouldDrawLayer=!0,g.layerRenderIndex=h(s,f),g.shaderModuleProps=this._getShaderModuleProps(s,a,i,l),g.layerParameters={..."webgpu"===s.context.device.type?oN:null,...s.context.deck?.props.parameters,...o?.[e.id]?.props.parameters,...this.getLayerParameters(s,r,e)}),u[r]=g}return u}_drawLayersInViewport(e,{layers:t,shaderModuleProps:i,pass:r,target:n,viewport:s,view:o},a){let l=function(e,{shaderModuleProps:t,target:i,viewport:r}){let n=t?.project?.devicePixelRatio??e.canvasContext.cssToDeviceRatio(),[,s]=e.canvasContext.getDrawingBufferSize(),o=i?i.height:s;return[r.x*n,o-(r.y+r.height)*n,r.width*n,r.height*n]}(this.device,{shaderModuleProps:i,target:n,viewport:s});if(o){let{clear:e,clearColor:t,clearDepth:i,clearStencil:r}=o.props;if(e){let e=[0,0,0,0],s=1,o=0;Array.isArray(t)?e=[...t.slice(0,3),t[3]||255].map(e=>e/255):!1===t&&(e=!1),void 0!==i&&(s=i),void 0!==r&&(o=r),this.device.beginRenderPass({framebuffer:n,parameters:{viewport:l,scissorRect:l},clearColor:e,clearDepth:s,clearStencil:o}).end()}}let c={totalCount:t.length,visibleCount:0,compositeCount:0,pickableCount:0};e.setParameters({viewport:l});for(let i=0;i<t.length;i++){let n=t[i],o=a[i],{shouldDrawLayer:l}=o;if(l&&n.props.pickable&&c.pickableCount++,n.isComposite&&c.compositeCount++,n.isDrawable&&o.shouldDrawLayer){let{layerRenderIndex:t,shaderModuleProps:i,layerParameters:a}=o;c.visibleCount++,this._lastRenderIndex=Math.max(this._lastRenderIndex,t),i.project&&(i.project.viewport=s),n.context.renderPass=e;try{n._drawLayer({renderPass:e,shaderModuleProps:i,uniforms:{layerIndex:t},parameters:a})}catch(e){n.raiseError(e,`drawing ${n} to ${r}`)}}}return c}shouldDrawLayer(e){return!0}getShaderModuleProps(e,t,i){return null}getLayerParameters(e,t,i){return e.props.parameters}_shouldDrawLayer(e,t,i,r){if(!(e.props.visible&&this.shouldDrawLayer(e)))return!1;t.layer=e;let n=e.parent;for(;n;){if(!n.props.visible||!n.filterSubLayer(t))return!1;t.layer=n,n=n.parent}if(i){let e=t.layer.id;if(e in r||(r[e]=i(t)),!r[e])return!1}return e.activateViewport(t.viewport),!0}_getShaderModuleProps(e,t,i,r){let n=this.device.canvasContext.cssToDeviceRatio(),s=e.internalState?.propsInTransition||e.props,o={layer:s,picking:{isActive:!1},project:{viewport:e.context.viewport,devicePixelRatio:n,modelMatrix:s.modelMatrix,coordinateSystem:s.coordinateSystem,coordinateOrigin:s.coordinateOrigin,autoWrapLongitude:e.wrapLongitude}};if(t)for(let i of t)oB(o,i.getShaderModuleProps?.(e,o));for(let t of e.context.defaultShaderModules)t.name in o||(o[t.name]={});return oB(o,this.getShaderModuleProps(e,t,o),r)}}function oB(e,...t){for(let i of t)if(i)for(let t in i)e[t]?Object.assign(e[t],i[t]):e[t]=i[t];return e}class o$ extends oU{constructor(e,t){super(e,t);const i=e.createTexture({format:"rgba8unorm",width:1,height:1,sampler:{minFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}}),r=e.createTexture({format:"depth16unorm",width:1,height:1});this.fbo=e.createFramebuffer({id:"shadowmap",width:1,height:1,colorAttachments:[i],depthStencilAttachment:r})}delete(){this.fbo&&(this.fbo.destroy(),this.fbo=null)}getShadowMap(){return this.fbo.colorAttachments[0].texture}render(e){let t=this.fbo,i=this.device.canvasContext.cssToDeviceRatio(),r=e.viewports[0],n=r.width*i,s=r.height*i;(n!==t.width||s!==t.height)&&t.resize({width:n,height:s}),super.render({...e,clearColor:[1,1,1,1],target:t,pass:"shadow"})}getLayerParameters(e,t,i){return{...e.props.parameters,blend:!1,depthWriteEnabled:!0,depthCompare:"less-equal"}}shouldDrawLayer(e){return!1!==e.props.shadowEnabled}getShaderModuleProps(e,t,i){return{shadow:{project:i.project,drawToShadowMap:!0}}}}let oV={color:[255,255,255],intensity:1},oW=[{color:[255,255,255],intensity:1,direction:[-1,3,-1]},{color:[255,255,255],intensity:.9,direction:[1,-8,-2.5]}],oG=[0,0,0,200/255];class oH{constructor(e={}){this.id="lighting-effect",this.shadowColor=oG,this.shadow=!1,this.directionalLights=[],this.pointLights=[],this.shadowPasses=[],this.dummyShadowMap=null,this.setProps(e)}setup(e){this.context=e;let{device:t,deck:i}=e;this.shadow&&!this.dummyShadowMap&&(this._createShadowPasses(t),i._addDefaultShaderModule(r4),this.dummyShadowMap=t.createTexture({width:1,height:1}))}setProps(e){for(let t in this.ambientLight=void 0,this.directionalLights=[],this.pointLights=[],e){let i=e[t];switch(i.type){case"ambient":this.ambientLight=i;break;case"directional":this.directionalLights.push(i);break;case"point":this.pointLights.push(i)}}this._applyDefaultLights(),this.shadow=this.directionalLights.some(e=>e.shadow),this.context&&this.setup(this.context),this.props=e}preRender({layers:e,layerFilter:t,viewports:i,onViewportActive:r,views:n}){if(this.shadow){this.shadowMatrices=this._calculateMatrices();for(let s=0;s<this.shadowPasses.length;s++)this.shadowPasses[s].render({layers:e,layerFilter:t,viewports:i,onViewportActive:r,views:n,shaderModuleProps:{shadow:{shadowLightId:s,dummyShadowMap:this.dummyShadowMap,shadowMatrices:this.shadowMatrices}}})}}getShaderModuleProps(e,t){let i=this.shadow?{project:t.project,shadowMaps:this.shadowPasses.map(e=>e.getShadowMap()),dummyShadowMap:this.dummyShadowMap,shadowColor:this.shadowColor,shadowMatrices:this.shadowMatrices}:{},r={enabled:!0,lights:this._getLights(e)},n=e.props.material;return{shadow:i,lighting:r,phongMaterial:n,gouraudMaterial:n}}cleanup(e){for(let e of this.shadowPasses)e.delete();this.shadowPasses.length=0,this.dummyShadowMap&&(this.dummyShadowMap.destroy(),this.dummyShadowMap=null,e.deck._removeDefaultShaderModule(r4))}_calculateMatrices(){let e=[];for(let t of this.directionalLights){let i=new rL().lookAt({eye:new rf(t.direction).negate()});e.push(i)}return e}_createShadowPasses(e){for(let t=0;t<this.directionalLights.length;t++){let i=new o$(e);this.shadowPasses[t]=i}}_applyDefaultLights(){let{ambientLight:e,pointLights:t,directionalLights:i}=this;e||0!==t.length||0!==i.length||(this.ambientLight=new ok(oV),this.directionalLights.push(new oD(oW[0]),new oD(oW[1])))}_getLights(e){let t=[];for(let i of(this.ambientLight&&t.push(this.ambientLight),this.pointLights))t.push(i.getProjectedLight({layer:e}));for(let i of this.directionalLights)t.push(i.getProjectedLight({layer:e}));return t}}let oq=new oH;class oZ{constructor(e){this._resolvedEffects=[],this._defaultEffects=[],this.effects=[],this._context=e,this._needsRedraw="Initial render",this._setEffects([])}addDefaultEffect(e){let t=this._defaultEffects;if(!t.find(t=>t.id===e.id)){let i=t.findIndex(t=>(t.order??1/0)-(e.order??1/0)>0);i<0?t.push(e):t.splice(i,0,e),e.setup(this._context),this._setEffects(this.effects)}}setProps(e){"effects"in e&&!sQ(e.effects,this.effects,1)&&this._setEffects(e.effects)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}getEffects(){return this._resolvedEffects}_setEffects(e){let t={};for(let e of this.effects)t[e.id]=e;let i=[];for(let r of e){let e=t[r.id],n=r;e&&e!==r?e.setProps?(e.setProps(r.props),n=e):e.cleanup(this._context):e||r.setup(this._context),i.push(n),delete t[r.id]}for(let e in t)t[e].cleanup(this._context);this.effects=i,this._resolvedEffects=i.concat(this._defaultEffects),e.some(e=>e instanceof oH)||this._resolvedEffects.push(oq),this._needsRedraw="effects changed"}finalize(){for(let e of this._resolvedEffects)e.cleanup(this._context);this.effects.length=0,this._resolvedEffects.length=0,this._defaultEffects.length=0}}class oY extends oU{shouldDrawLayer(e){let{operation:t}=e.props;return t.includes("draw")||t.includes("terrain")}render(e){return this._render(e)}}let oK={blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"zero",blendAlphaOperation:"add",blendAlphaSrcFactor:"constant",blendAlphaDstFactor:"zero"};class oX extends oU{constructor(){super(...arguments),this._colorEncoderState=null}render(e){return"pickingFBO"in e?this._drawPickingBuffer(e):{decodePickingColor:null,stats:super._render(e)}}_drawPickingBuffer({layers:e,layerFilter:t,views:i,viewports:r,onViewportActive:n,pickingFBO:s,deviceRect:{x:o,y:a,width:l,height:c},cullRect:u,effects:h,pass:d="picking",pickZ:p,shaderModuleProps:f,clearColor:g}){this.pickZ=p;let m=this._resetColorEncoder(p),v=super._render({target:s,layers:e,layerFilter:t,views:i,viewports:r,onViewportActive:n,cullRect:u,effects:h?.filter(e=>e.useInPicking),pass:d,isPicking:!0,shaderModuleProps:f,clearColor:g??[0,0,0,0],colorMask:15,scissorRect:[o,a,l,c]});return this._colorEncoderState=null,{decodePickingColor:m&&oQ.bind(null,m),stats:v}}shouldDrawLayer(e){let{pickable:t,operation:i}=e.props;return t&&i.includes("draw")||i.includes("terrain")||i.includes("mask")}getShaderModuleProps(e,t,i){return{picking:{isActive:1,isAttribute:this.pickZ},lighting:{enabled:!1}}}getLayerParameters(e,t,i){let r={...e.props.parameters},{pickable:n,operation:s}=e.props;return this._colorEncoderState?n&&s.includes("draw")?(Object.assign(r,oK),r.blend=!0,"webgpu"===this.device.type?r.blendConstant=oJ(this._colorEncoderState,e,i):r.blendColor=oJ(this._colorEncoderState,e,i),s.includes("terrain")&&e.state?._hasPickingCover&&(r.blendAlphaSrcFactor="one")):s.includes("terrain")&&(r.blend=!1):r.blend=!1,r}_resetColorEncoder(e){return this._colorEncoderState=e?null:{byLayer:new Map,byAlpha:[]},this._colorEncoderState}}function oJ(e,t,i){let r,{byLayer:n,byAlpha:s}=e,o=n.get(t);return o?(o.viewports.push(i),r=o.a):(r=n.size+1)<=255?(o={a:r,layer:t,viewports:[i]},n.set(t,o),s[r]=o):(tU.warn("Too many pickable layers, only picking the first 255")(),r=0),[0,0,0,r/255]}function oQ(e,t){let i=e.byAlpha[t[3]];return i&&{pickedLayer:i.layer,pickedViewports:i.viewports,pickedObjectIndex:i.layer.decodePickingColor(t)}}class o0{constructor(e,t={}){this.device=e,this.stats=t.stats,this.layerFilter=null,this.drawPickingColors=!1,this.drawLayersPass=new oY(e),this.pickLayersPass=new oX(e),this.renderCount=0,this._needsRedraw="Initial render",this.renderBuffers=[],this.lastPostProcessEffect=null}setProps(e){this.layerFilter!==e.layerFilter&&(this.layerFilter=e.layerFilter,this._needsRedraw="layerFilter changed"),this.drawPickingColors!==e.drawPickingColors&&(this.drawPickingColors=e.drawPickingColors,this._needsRedraw="drawPickingColors changed")}renderLayers(e){if(!e.viewports.length)return;let t=this.drawPickingColors?this.pickLayersPass:this.drawLayersPass,i={layerFilter:this.layerFilter,isPicking:this.drawPickingColors,...e};i.effects&&this._preRender(i.effects,i);let r=this.lastPostProcessEffect?this.renderBuffers[0]:i.target;this.lastPostProcessEffect&&(i.clearColor=[0,0,0,0],i.clearCanvas=!0);let n=t.render({...i,target:r}),s="stats"in n?n.stats:n;i.effects&&(this.lastPostProcessEffect&&(i.clearCanvas=void 0===e.clearCanvas||e.clearCanvas),this._postRender(i.effects,i)),this.renderCount++,nu("deckRenderer.renderLayers",this,s,e),this._updateStats(s)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}finalize(){let{renderBuffers:e}=this;for(let t of e)t.delete();e.length=0}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:i}of e)t+=i;this.stats.get("Layers rendered").addCount(t)}_preRender(e,t){for(let i of(this.lastPostProcessEffect=null,t.preRenderStats=t.preRenderStats||{},e))t.preRenderStats[i.id]=i.preRender(t),i.postRender&&(this.lastPostProcessEffect=i.id);this.lastPostProcessEffect&&this._resizeRenderBuffers()}_resizeRenderBuffers(){let{renderBuffers:e}=this,t=this.device.canvasContext.getDrawingBufferSize(),[i,r]=t;for(let n of(0===e.length&&[0,1].map(t=>{let n=this.device.createTexture({sampler:{minFilter:"linear",magFilter:"linear"},width:i,height:r});e.push(this.device.createFramebuffer({id:`deck-renderbuffer-${t}`,colorAttachments:[n]}))}),e))n.resize(t)}_postRender(e,t){let{renderBuffers:i}=this,r={...t,inputBuffer:i[0],swapBuffer:i[1]};for(let n of e)if(n.postRender){r.target=n.id===this.lastPostProcessEffect?t.target:void 0;let e=n.postRender(r);r.inputBuffer=e,r.swapBuffer=e===i[0]?i[1]:i[0]}}}var o1=e.i(6145),o2=e.i(25458);let o3={pickedColor:null,pickedObjectIndex:-1};function o4({pickedColors:e,decodePickingColor:t,deviceX:i,deviceY:r,deviceRadius:n,deviceRect:s}){let{x:o,y:a,width:l,height:c}=s,u=n*n,h=-1,d=0;for(let t=0;t<c;t++){let n=t+a-r,s=n*n;if(s>u)d+=4*l;else for(let t=0;t<l;t++){if(e[d+3]-1>=0){let e=t+o-i,r=e*e+s;r<=u&&(u=r,h=d)}d+=4}}if(h>=0){let i=e.slice(h,h+4),r=t(i);if(r){let e=Math.floor(h/4/l),t=h/4-e*l;return{...r,pickedColor:i,pickedX:o+t,pickedY:a+e}}tU.error("Picked non-existent layer. Is picking buffer corrupt?")()}return o3}function o6({pickedColors:e,decodePickingColor:t}){let i=new Map;if(e){for(let r=0;r<e.length;r+=4)if(e[r+3]-1>=0){let n=e.slice(r,r+4),s=n.join(",");if(!i.has(s)){let e=t(n);e?i.set(s,{...e,color:n}):tU.error("Picked non-existent layer. Is picking buffer corrupt?")()}}}return Array.from(i.values())}function o5({pickInfo:e,viewports:t,pixelRatio:i,x:r,y:n,z:s}){let o,a=t[0];if(t.length>1&&(a=function(e,t){for(let i=e.length-1;i>=0;i--){let r=e[i];if(r.containsPixel(t))return r}return e[0]}(e?.pickedViewports||t,{x:r,y:n})),a){let e=[r-a.x,n-a.y];void 0!==s&&(e[2]=s),o=a.unproject(e)}return{color:null,layer:null,viewport:a,index:-1,picked:!1,x:r,y:n,pixel:[r,n],coordinate:o,devicePixel:e&&"pickedX"in e?[e.pickedX,e.pickedY]:void 0,pixelRatio:i}}function o8(e){let{pickInfo:t,lastPickedInfo:i,mode:r,layers:n}=e,{pickedColor:s,pickedLayer:o,pickedObjectIndex:a}=t,l=o?[o]:[];if("hover"===r){let e=i.index,t=i.layerId,r=o?o.props.id:null;if(r!==t||a!==e){if(r!==t){let e=n.find(e=>e.props.id===t);e&&l.unshift(e)}i.layerId=r,i.index=a,i.info=null}}let c=o5(e),u=new Map;return u.set(null,c),l.forEach(e=>{let t={...c};e===o&&(t.color=s,t.index=a,t.picked=!0);let n=(t=o9({layer:e,info:t,mode:r})).layer;e===o&&"hover"===r&&(i.info=t),u.set(n.id,t),"hover"===r&&n.updateAutoHighlight(t)}),u}function o9({layer:e,info:t,mode:i}){for(;e&&t;){let r=t.layer||null;t.sourceLayer=r,t.layer=e,t=e.getPickingInfo({info:t,mode:i,sourceLayer:r}),e=e.parent}return t}class o7{constructor(e,t={}){this._pickable=!0,this.device=e,this.stats=t.stats,this.pickLayersPass=new oX(e),this.lastPickedInfo={index:-1,layerId:null,info:null}}setProps(e){"layerFilter"in e&&(this.layerFilter=e.layerFilter),"_pickable"in e&&(this._pickable=e._pickable)}finalize(){this.pickingFBO&&this.pickingFBO.destroy(),this.depthFBO&&this.depthFBO.destroy()}pickObjectAsync(e){return this._pickClosestObjectAsync(e)}pickObjectsAsync(e){return this._pickVisibleObjectsAsync(e)}pickObject(e){return this._pickClosestObject(e)}pickObjects(e){return this._pickVisibleObjects(e)}getLastPickedObject({x:e,y:t,layers:i,viewports:r},n=this.lastPickedInfo.info){let s=n&&n.layer&&n.layer.id,o=n&&n.viewport&&n.viewport.id,a=s?i.find(e=>e.id===s):null,l=o&&r.find(e=>e.id===o)||r[0],c=l&&l.unproject([e-l.x,t-l.y]);return{...n,x:e,y:t,viewport:l,coordinate:c,layer:a}}_resizeBuffer(e=this.device.getDefaultCanvasContext()){if(!this.pickingFBO){let e=this.device.createTexture({format:"rgba8unorm",width:1,height:1,usage:o2.Texture.RENDER_ATTACHMENT|o2.Texture.COPY_SRC});if(this.pickingFBO=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:"depth16unorm"}),this.device.isTextureFormatRenderable("rgba32float")){let e=this.device.createTexture({format:"rgba32float",width:1,height:1,usage:o2.Texture.RENDER_ATTACHMENT|o2.Texture.COPY_SRC}),t=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:"depth16unorm"});this.depthFBO=t}}let[t,i]=e.getDrawingBufferSize();this.pickingFBO?.resize({width:t,height:i}),this.depthFBO?.resize({width:t,height:i})}_getPickable(e){if(!1===this._pickable)return null;let t=e.filter(e=>this.pickLayersPass.shouldDrawLayer(e)&&!e.isComposite);return t.length?t:null}async _pickClosestObjectAsync({layers:e,views:t,viewports:i,x:r,y:n,radius:s=0,depth:o=1,mode:a="query",unproject3D:l,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d,p=c.cssToDeviceRatio(),f=this._getPickable(e);if(!f||0===i.length)return{result:[],emptyInfo:o5({viewports:i,x:r,y:n,pixelRatio:p})};this._resizeBuffer(c);let g=c.cssToDevicePixels([r,n],!0),m=[g.x+Math.floor(g.width/2),g.y+Math.floor(g.height/2)],v=Math.round(s*p),{width:_,height:y}=this.pickingFBO,b=this._getPickingRect({deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceWidth:_,deviceHeight:y}),w={x:r-s,y:n-s,width:2*s+1,height:2*s+1},x=[],P=new Set;for(let e=0;e<o;e++){let s,c;s=b?o4({...await this._drawAndSampleAsync({layers:f,views:t,viewports:i,onViewportActive:u,deviceRect:b,cullRect:w,effects:h,pass:`picking:${a}`}),deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceRect:b}):{pickedColor:null,pickedObjectIndex:-1};let g=this._getDepthLayers(s,f,l);if(g.length>0){let{pickedColors:e}=await this._drawAndSampleAsync({layers:g,views:t,viewports:i,onViewportActive:u,deviceRect:{x:s.pickedX??m[0],y:s.pickedY??m[1],width:1,height:1},cullRect:w,effects:h,pass:`picking:${a}:z`},!0);e[3]&&(c=e[0])}for(let t of(s.pickedLayer&&e+1<o&&(P.add(s.pickedLayer),s.pickedLayer.disablePickingIndex(s.pickedObjectIndex)),(d=o8({pickInfo:s,lastPickedInfo:this.lastPickedInfo,mode:a,layers:f,viewports:i,x:r,y:n,z:c,pixelRatio:p})).values()))t.layer&&x.push(t);if(!s.pickedColor)break}for(let e of P)e.restorePickingColors();return{result:x,emptyInfo:d.get(null)}}_pickClosestObject({layers:e,views:t,viewports:i,x:r,y:n,radius:s=0,depth:o=1,mode:a="query",unproject3D:l,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d,p=c.cssToDeviceRatio(),f=this._getPickable(e);if(!f||0===i.length)return{result:[],emptyInfo:o5({viewports:i,x:r,y:n,pixelRatio:p})};this._resizeBuffer(c);let g=c.cssToDevicePixels([r,n],!0),m=[g.x+Math.floor(g.width/2),g.y+Math.floor(g.height/2)],v=Math.round(s*p),{width:_,height:y}=this.pickingFBO,b=this._getPickingRect({deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceWidth:_,deviceHeight:y}),w={x:r-s,y:n-s,width:2*s+1,height:2*s+1},x=[],P=new Set;for(let e=0;e<o;e++){let s,c;s=b?o4({...this._drawAndSample({layers:f,views:t,viewports:i,onViewportActive:u,deviceRect:b,cullRect:w,effects:h,pass:`picking:${a}`}),deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceRect:b}):{pickedColor:null,pickedObjectIndex:-1};let g=this._getDepthLayers(s,f,l);if(g.length>0){let{pickedColors:e}=this._drawAndSample({layers:g,views:t,viewports:i,onViewportActive:u,deviceRect:{x:s.pickedX??m[0],y:s.pickedY??m[1],width:1,height:1},cullRect:w,effects:h,pass:`picking:${a}:z`},!0);e[3]&&(c=e[0])}for(let t of(s.pickedLayer&&e+1<o&&(P.add(s.pickedLayer),s.pickedLayer.disablePickingIndex(s.pickedObjectIndex)),(d=o8({pickInfo:s,lastPickedInfo:this.lastPickedInfo,mode:a,layers:f,viewports:i,x:r,y:n,z:c,pixelRatio:p})).values()))t.layer&&x.push(t);if(!s.pickedColor)break}for(let e of P)e.restorePickingColors();return{result:x,emptyInfo:d.get(null)}}async _pickVisibleObjectsAsync({layers:e,views:t,viewports:i,x:r,y:n,width:s=1,height:o=1,mode:a="query",maxObjects:l=null,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d=this._getPickable(e);if(!d||0===i.length)return[];this._resizeBuffer(c);let p=c.cssToDeviceRatio(),f=c.cssToDevicePixels([r,n],!0),g=f.x,m=f.y+f.height,v=c.cssToDevicePixels([r+s,n+o],!0),_=v.x+v.width,y=v.y,b=await this._drawAndSampleAsync({layers:d,views:t,viewports:i,onViewportActive:u,deviceRect:{x:g,y:y,width:_-g,height:m-y},cullRect:{x:r,y:n,width:s,height:o},effects:h,pass:`picking:${a}`}),w=o6(b),x=new Map,P=[],C=Number.isFinite(l);for(let e=0;e<w.length&&(!C||!(P.length>=l));e++){let t=w[e],i={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:n,pixelRatio:p},s=(i=o9({layer:t.pickedLayer,info:i,mode:a})).layer.id;x.has(s)||x.set(s,new Set);let o=x.get(s),l=i.object??i.index;o.has(l)||(o.add(l),P.push(i))}return P}_pickVisibleObjects({layers:e,views:t,viewports:i,x:r,y:n,width:s=1,height:o=1,mode:a="query",maxObjects:l=null,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d=this._getPickable(e);if(!d||0===i.length)return[];this._resizeBuffer(c);let p=c.cssToDeviceRatio(),f=c.cssToDevicePixels([r,n],!0),g=f.x,m=f.y+f.height,v=c.cssToDevicePixels([r+s,n+o],!0),_=v.x+v.width,y=v.y,b=this._drawAndSample({layers:d,views:t,viewports:i,onViewportActive:u,deviceRect:{x:g,y:y,width:_-g,height:m-y},cullRect:{x:r,y:n,width:s,height:o},effects:h,pass:`picking:${a}`}),w=o6(b),x=new Map,P=[],C=Number.isFinite(l);for(let e=0;e<w.length&&(!C||!(P.length>=l));e++){let t=w[e],i={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:n,pixelRatio:p},s=(i=o9({layer:t.pickedLayer,info:i,mode:a})).layer.id;x.has(s)||x.set(s,new Set);let o=x.get(s),l=i.object??i.index;o.has(l)||(o.add(l),P.push(i))}return P}async _drawAndSampleAsync({layers:e,views:t,viewports:i,onViewportActive:r,deviceRect:n,cullRect:s,effects:o,pass:a},l=!1){let c=l?this.depthFBO:this.pickingFBO,u={layers:e,layerFilter:this.layerFilter,views:t,viewports:i,onViewportActive:r,pickingFBO:c,deviceRect:n,cullRect:s,effects:o,pass:a,pickZ:l,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(u.preRenderStats[e.id]=e.preRender(u));let{decodePickingColor:h,stats:d}=this.pickLayersPass.render(u);this._updateStats(d);let{x:p,y:f,width:g,height:m}=n,v=c.colorAttachments[0]?.texture;if(!v)throw Error("Picking framebuffer color attachment is missing");let _=await this._readTextureDataAsync(v,{x:p,y:f,width:g,height:m},l?Float32Array:Uint8Array);if(!l){let e=!1;for(let t=3;t<_.length;t+=4)if(0!==_[t]){e=!0;break}!e&&_.length>0&&tU.warn("Async pick readback returned only zero alpha values",{deviceRect:n,bytes:Array.from(_.subarray(0,Math.min(_.length,16)))})()}return{pickedColors:_,decodePickingColor:h}}async _readTextureDataAsync(e,t,i){let{width:r,height:n}=t,s=e.computeMemoryLayout(t),o=this.device.createBuffer({byteLength:s.byteLength,usage:o1.Buffer.COPY_DST|o1.Buffer.MAP_READ});try{e.readBuffer(t,o);let a=await o.readAsync(0,s.byteLength),l=i.BYTES_PER_ELEMENT;if(s.bytesPerRow%l!=0)throw Error(`Texture readback row stride ${s.bytesPerRow} is not aligned to ${l}-byte elements.`);let c=new i(a.buffer,a.byteOffset,s.byteLength/l),u=4*r,h=s.bytesPerRow/l;if(h<u)throw Error(`Texture readback row stride ${h} is smaller than packed row length ${u}.`);let d=new i(r*n*4);for(let e=0;e<n;e++){let t=e*h;d.set(c.subarray(t,t+u),e*u)}return d}finally{o.destroy()}}_drawAndSample({layers:e,views:t,viewports:i,onViewportActive:r,deviceRect:n,cullRect:s,effects:o,pass:a},l=!1){let c=l?this.depthFBO:this.pickingFBO,u={layers:e,layerFilter:this.layerFilter,views:t,viewports:i,onViewportActive:r,pickingFBO:c,deviceRect:n,cullRect:s,effects:o,pass:a,pickZ:l,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(u.preRenderStats[e.id]=e.preRender(u));let{decodePickingColor:h,stats:d}=this.pickLayersPass.render(u);this._updateStats(d);let{x:p,y:f,width:g,height:m}=n,v=new(l?Float32Array:Uint8Array)(g*m*4);return this.device.readPixelsToArrayWebGL(c,{sourceX:p,sourceY:f,sourceWidth:g,sourceHeight:m,target:v}),{pickedColors:v,decodePickingColor:h}}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:i}of e)t+=i;this.stats.get("Layers picked").addCount(t)}_getDepthLayers(e,t,i){if(!i||!this.depthFBO)return[];let{pickedLayer:r}=e,n=r?.state?.terrainDrawMode==="drape";return r&&!n?[r]:t.filter(e=>e.props.operation.includes("terrain"))}_getPickingRect({deviceX:e,deviceY:t,deviceRadius:i,deviceWidth:r,deviceHeight:n}){let s=Math.max(0,e-i),o=Math.max(0,t-i),a=Math.min(r,e+i+1)-s,l=Math.min(n,t+i+1)-o;return a<=0||l<=0?null:{x:s,y:o,width:a,height:l}}}let ae={"top-left":{top:0,left:0},"top-right":{top:0,right:0},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},fill:{top:0,left:0,bottom:0,right:0}},at="root";class ai{constructor({deck:e,parentElement:t}){this.defaultWidgets=[],this.widgets=[],this.resolvedWidgets=[],this.containers={},this.lastViewports={},this.deck=e,t?.classList.add("deck-widget-container"),this.parentElement=t}getWidgets(){return this.resolvedWidgets}setProps(e){if(e.widgets&&!sQ(e.widgets,this.widgets,1)){let t=e.widgets.filter(Boolean);this._setWidgets(t)}}finalize(){for(let e of this.getWidgets())this._removeWidget(e);for(let e in this.defaultWidgets.length=0,this.resolvedWidgets.length=0,this.containers)this.containers[e].remove()}addDefault(e){this.defaultWidgets.find(t=>t.id===e.id)||(this._addWidget(e),this.defaultWidgets.push(e),this._setWidgets(this.widgets))}onRedraw({viewports:e,layers:t}){let i=e.reduce((e,t)=>(e[t.id]=t,e),{});for(let r of this.getWidgets()){let{viewId:n}=r;if(n){let e=i[n];e&&(r.onViewportChange&&r.onViewportChange(e),r.onRedraw?.({viewports:[e],layers:t}))}else{if(r.onViewportChange)for(let t of e)r.onViewportChange(t);r.onRedraw?.({viewports:e,layers:t})}}this.lastViewports=i,this._updateContainers()}onHover(e,t){for(let i of this.getWidgets()){let{viewId:r}=i;r&&r!==e.viewport?.id||i.onHover?.(e,t)}}onEvent(e,t){let i=iM[t.type];if(i)for(let r of this.getWidgets()){let{viewId:n}=r;n&&n!==e.viewport?.id||r[i]?.(e,t)}}_setWidgets(e){let t={};for(let e of this.resolvedWidgets)t[e.id]=e;for(let e of(this.resolvedWidgets.length=0,this.defaultWidgets))t[e.id]=null,this.resolvedWidgets.push(e);for(let i of e){let e=t[i.id];e?e.viewId!==i.viewId||e.placement!==i.placement?(this._removeWidget(e),this._addWidget(i)):i!==e&&(e.setProps(i.props),i=e):this._addWidget(i),t[i.id]=null,this.resolvedWidgets.push(i)}for(let e in t){let i=t[e];i&&this._removeWidget(i)}this.widgets=e}_addWidget(e){let{viewId:t=null,placement:i="top-left"}=e,r=e.props._container??t;e.widgetManager=this,e.deck=this.deck,e.rootElement=e._onAdd({deck:this.deck,viewId:t}),e.rootElement&&this._getContainer(r,i).append(e.rootElement),e.updateHTML()}_removeWidget(e){e.onRemove?.(),e.rootElement&&e.rootElement.remove(),e.rootElement=void 0,e.deck=void 0,e.widgetManager=void 0}_getContainer(e,t){if(e&&"string"!=typeof e)return e;let i=e||at,r=this.containers[i];r||((r=document.createElement("div")).style.pointerEvents="none",r.style.position="absolute",r.style.overflow="hidden",this.parentElement?.append(r),this.containers[i]=r);let n=r.querySelector(`.${t}`);return n||((n=globalThis.document.createElement("div")).className=t,n.style.position="absolute",n.style.zIndex="2",Object.assign(n.style,ae[t]),r.append(n)),n}_updateContainers(){let e=this.deck.width,t=this.deck.height;for(let i in this.containers){let r=this.lastViewports[i]||null,n=i===at||r,s=this.containers[i];n?(s.style.display="block",s.style.left=`${r?r.x:0}px`,s.style.top=`${r?r.y:0}px`,s.style.width=`${r?r.width:e}px`,s.style.height=`${r?r.height:t}px`):s.style.display="none"}}}function ar(e,t){t&&Object.entries(t).map(([t,i])=>{t.startsWith("--")?e.style.setProperty(t,i):e.style[t]=i})}class an{constructor(e){this.viewId=null,this.props={...this.constructor.defaultProps,...e},this.id=this.props.id}setProps(e){let t=this.props,i=this.rootElement;if(i&&t.className!==e.className&&(t.className&&i.classList.remove(t.className),e.className&&i.classList.add(e.className)),i&&!sQ(t.style,e.style,1)){var r;(r=t.style)&&Object.keys(r).map(e=>{e.startsWith("--")?i.style.removeProperty(e):i.style[e]=""}),ar(i,e.style)}Object.assign(this.props,e),this.updateHTML()}updateHTML(){this.rootElement&&this.onRenderHTML(this.rootElement)}get viewIds(){return this.viewId?[this.viewId]:this.deck?.getViews().map(e=>e.id)??[]}getViewState(e){return this.deck?.viewManager?.getViewState(e)||{}}setViewState(e,t){this.deck?._onViewStateChange({viewId:e,viewState:t,interactionState:{}})}onCreateRootElement(){let e=["deck-widget",this.className,this.props.className],t=document.createElement("div");return e.filter(e=>"string"==typeof e&&e.length>0).forEach(e=>t.classList.add(e)),ar(t,this.props.style),t}_onAdd(e){return this.onAdd(e)??this.onCreateRootElement()}onAdd(e){}onRemove(){}onViewportChange(e){}onRedraw(e){}onHover(e,t){}onClick(e,t){}onDrag(e,t){}onDragStart(e,t){}onDragEnd(e,t){}}an.defaultProps={id:"widget",style:{},_container:null,className:""};let as={zIndex:"1",position:"absolute",pointerEvents:"none",color:"#a0a7b4",backgroundColor:"#29323c",padding:"10px",top:"0",left:"0",display:"none"};class ao extends an{constructor(e={}){super(e),this.id="default-tooltip",this.placement="fill",this.className="deck-tooltip",this.isVisible=!1,this.setProps(e)}onCreateRootElement(){let e=document.createElement("div");return e.className=this.className,Object.assign(e.style,as),e}onRenderHTML(e){}onViewportChange(e){this.isVisible&&e.id===this.lastViewport?.id&&!e.equals(this.lastViewport)&&this.setTooltip(null),this.lastViewport=e}onHover(e){let{deck:t}=this,i=t&&t.props.getTooltip;if(!i)return;let r=i(e);this.setTooltip(r,e.x,e.y)}setTooltip(e,t,i){let r=this.rootElement;if(r){if("string"==typeof e)r.innerText=e;else if(e)e.text&&(r.innerText=e.text),e.html&&(r.innerHTML=e.html),e.className&&(r.className=e.className);else{this.isVisible=!1,r.style.display="none";return}this.isVisible=!0,r.style.display="block",r.style.transform=`translate(${t}px, ${i}px)`,e&&"object"==typeof e&&"style"in e&&Object.assign(r.style,e.style)}}}ao.defaultProps={...an.defaultProps};let aa=globalThis.loaders?.parseImageNode,al="u">typeof Image,ac="u">typeof ImageBitmap,au=!!n$||!!aa,ah=/^data:image\/svg\+xml/,ad=/\.svg((\?|#).*)?$/;function ap(e){return e&&(ah.test(e)||ad.test(e))}function af(e,t){if(ap(t))throw Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(e)])}async function ag(e,t,i){let r=function(e,t){if(ap(t)){let t=new TextDecoder().decode(e);try{"function"==typeof unescape&&"function"==typeof encodeURIComponent&&(t=unescape(encodeURIComponent(t)))}catch(e){throw Error(e.message)}return`data:image/svg+xml;base64,${btoa(t)}`}return af(e,t)}(e,i),n=self.URL||self.webkitURL,s="string"!=typeof r&&n.createObjectURL(r);try{return await am(s||r,t)}finally{s&&n.revokeObjectURL(s)}}async function am(e,t){let i=new Image;return(i.src=e,t.image&&t.image.decode&&i.decode)?(await i.decode(),i):await new Promise((e,t)=>{try{i.onload=()=>e(i),i.onerror=e=>{let i=e instanceof Error?e.message:"error";t(Error(i))}}catch(e){t(e)}})}let av=!0;async function a_(e,t,i){let r;r=ap(i)?await ag(e,t,i):af(e,i);let n=t&&t.imagebitmap;return await ay(r,n)}async function ay(e,t=null){if((function(e){if(!e)return!0;for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t)||!av)&&(t=null),t)try{return await createImageBitmap(e,t)}catch(e){console.warn(e),av=!1}return await createImageBitmap(e)}function ab(e){var t,i;let r,n,s,o,a=aw(e);return((r=aw(a)).byteLength>=24&&0x89504e47===r.getUint32(0,!1)?{mimeType:"image/png",width:r.getUint32(16,!1),height:r.getUint32(20,!1)}:null)||function(e){let t=aw(e);if(!(t.byteLength>=3&&65496===t.getUint16(0,!1)&&255===t.getUint8(2)))return null;let{tableMarkers:i,sofMarkers:r}=function(){let e=new Set([65499,65476,65484,65501,65534]);for(let t=65504;t<65520;++t)e.add(t);return{tableMarkers:e,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}(),n=2;for(;n+9<t.byteLength;){let e=t.getUint16(n,!1);if(r.has(e))return{mimeType:"image/jpeg",height:t.getUint16(n+5,!1),width:t.getUint16(n+7,!1)};if(!i.has(e))break;n+=2,n+=t.getUint16(n,!1)}return null}(a)||((n=aw(a)).byteLength>=10&&0x47494638===n.getUint32(0,!1)?{mimeType:"image/gif",width:n.getUint16(6,!0),height:n.getUint16(8,!0)}:null)||((s=aw(a)).byteLength>=14&&16973===s.getUint16(0,!1)&&s.getUint32(2,!0)===s.byteLength?{mimeType:"image/bmp",width:s.getUint32(18,!0),height:s.getUint32(22,!0)}:null)||((o=!function(e,t,i=0){let r=[...t].map(e=>e.charCodeAt(0));for(let t=0;t<r.length;++t)if(r[t]!==e[t+i])return!1;return!0}(i=new Uint8Array((t=a)instanceof DataView?t.buffer:t),"ftyp",4)||(96&i[8])==0?null:function(e){switch(String.fromCharCode(...e.slice(8,12)).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}}(i))?{mimeType:o.mimeType,width:0,height:0}:null)}function aw(e){if(e instanceof DataView)return e;if(ArrayBuffer.isView(e))return new DataView(e.buffer);if(e instanceof ArrayBuffer)return new DataView(e);throw Error("toDataView")}async function ax(e,t){let{mimeType:i}=ab(e)||{},r=globalThis.loaders?.parseImageNode;return nb(r),await r(e,i)}let aP={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:"4.4.3",mimeTypes:["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],extensions:["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],parse:async function e(e,t,i){let r,n=((t=t||{}).image||{}).type||"auto",{url:s}=i||{};switch(function(e){switch(e){case"auto":case"data":if(ac)return"imagebitmap";if(al)return"image";if(au)return"data";throw Error("Install '@loaders.gl/polyfills' to parse images under Node.js");default:return!function(e){switch(e){case"auto":return ac;case"imagebitmap":case"image":case"data":return;default:throw Error(`@loaders.gl/images: image ${e} not supported in this environment`)}}(e),e}}(n)){case"imagebitmap":r=await a_(e,t,s);break;case"image":r=await ag(e,t,s);break;case"data":r=await ax(e,t);break;default:nb(!1)}return"data"===n&&(r=function(e){switch(function(e){var t;let i=(t=e,"u">typeof ImageBitmap&&t instanceof ImageBitmap?"imagebitmap":"u">typeof Image&&t instanceof Image?"image":t&&"object"==typeof t&&t.data&&t.width&&t.height?"data":null);if(!i)throw Error("Not an image");return i}(e)){case"data":return e;case"image":case"imagebitmap":let t=document.createElement("canvas"),i=t.getContext("2d");if(!i)throw Error("getImageData");return t.width=e.width,t.height=e.height,i.drawImage(e,0,0),i.getImageData(0,0,e.width,e.height);default:throw Error("getImageData")}}(r)),r},tests:[e=>!!ab(new DataView(e))],options:{image:{type:"auto",decode:!0}}},aC={dataType:null,batchType:null,id:"JSON",name:"JSON",module:"",version:"",options:{},extensions:["json","geojson"],mimeTypes:["application/json","application/geo+json"],testText:function(e){let t=e[0],i=e[e.length-1];return"{"===t&&"}"===i||"["===t&&"]"===i},parseTextSync:JSON.parse},aM=function(){let e="9.3.6",t=globalThis.deck&&globalThis.deck.VERSION;if(t&&t!==e)throw Error(`deck.gl - multiple versions detected: ${t} vs ${e}`);if(!t){tU.log(1,`deck.gl ${e}`)(),globalThis.deck={...globalThis.deck,VERSION:e,version:e,log:tU,_registerLoggers:nc};var i=[aC,[aP,{imagebitmap:{premultiplyAlpha:"none"}}]];let t=sP();for(let e of i=Array.isArray(i)?i:[i]){let i=nx(e);t.find(e=>i===e)||t.unshift(i)}}return e}();var aE=e.i(9900),aS=e.i(4819);let aL="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.";class aA{static defaultProps={...aE.Device.defaultProps,type:"best-available",adapters:void 0,waitForPageLoad:!0};stats=aS.lumaStats;log=eY.log;VERSION="9.3.6";spector;preregisteredAdapters=new Map;constructor(){if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw eY.log.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),eY.log.error("'yarn why @luma.gl/core' can help identify the source of the conflict")(),Error("luma.gl - multiple versions detected: see console log");eY.log.error("This version of luma.gl has already been initialized")()}eY.log.log(1,`${this.VERSION} - set luma.log.level=1 (or higher) to trace rendering`)(),globalThis.luma=this}async createDevice(e={}){let t={...aA.defaultProps,...e},i=this.selectAdapter(t.type,t.adapters);if(!i)throw Error(aL);return t.waitForPageLoad&&await i.pageLoaded,await i.create(t)}async attachDevice(e,t){let i=this._getTypeFromHandle(e,t.adapters),r=i&&this.selectAdapter(i,t.adapters);if(!r)throw Error(aL);return await r?.attach?.(e,t)}registerAdapters(e){for(let t of e)this.preregisteredAdapters.set(t.type,t)}getSupportedAdapters(e=[]){return Array.from(this._getAdapterMap(e)).map(([,e])=>e).filter(e=>e.isSupported?.()).map(e=>e.type)}getBestAvailableAdapterType(e=[]){let t=this._getAdapterMap(e);for(let e of["webgpu","webgl","null"])if(t.get(e)?.isSupported?.())return e;return null}selectAdapter(e,t=[]){let i=e;"best-available"===e&&(i=this.getBestAvailableAdapterType(t));let r=this._getAdapterMap(t);return i&&r.get(i)||null}enforceWebGL2(e=!0,t=[]){let i=this._getAdapterMap(t).get("webgl");i||eY.log.warn("enforceWebGL2: webgl adapter not found")(),i?.enforceWebGL2?.(e)}setDefaultDeviceProps(e){Object.assign(aA.defaultProps,e)}_getAdapterMap(e=[]){let t=new Map(this.preregisteredAdapters);for(let i of e)t.set(i.type,i);return t}_getTypeFromHandle(e,t=[]){return e instanceof WebGL2RenderingContext?"webgl":"u">typeof GPUDevice&&e instanceof GPUDevice||e?.queue?"webgpu":null===e?"null":(e instanceof WebGLRenderingContext?eY.log.warn("WebGL1 is not supported",e)():eY.log.warn("Unknown handle type",e)(),null)}}let aT=new aA;var aR=e.i(40021);class aO{get pageLoaded(){return aI||(aI=ak&&"complete"===document.readyState||"u"<typeof window?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e()))),aI}}let ak=(0,aR.isBrowser)()&&"u">typeof document,aI=null,az={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}};var aj=e.i(31934),aD=e.i(7784);let aF=new class extends aO{type="webgl";constructor(){super(),aE.Device.defaultProps={...aE.Device.defaultProps,...aj.DEFAULT_SPECTOR_PROPS}}enforceWebGL2(e){!function(e=!0){let t=HTMLCanvasElement.prototype;if(!e&&t.originalGetContext){t.getContext=t.originalGetContext,t.originalGetContext=void 0;return}t.originalGetContext=t.getContext,t.getContext=function(e,t){if("webgl"===e||"experimental-webgl"===e){let e=this.originalGetContext("webgl2",t);return e instanceof HTMLElement&&function(e){e.getExtension("EXT_color_buffer_float");let t={...az,WEBGL_disjoint_timer_query:e.getExtension("EXT_disjoint_timer_query_webgl2"),WEBGL_draw_buffers:{drawBuffersWEBGL:t=>e.drawBuffers(t),COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067},OES_vertex_array_object:{VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES:()=>e.createVertexArray(),deleteVertexArrayOES:t=>e.deleteVertexArray(t),isVertexArrayOES:t=>e.isVertexArray(t),bindVertexArrayOES:t=>e.bindVertexArray(t)},ANGLE_instanced_arrays:{VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE:(...t)=>e.drawArraysInstanced(...t),drawElementsInstancedANGLE:(...t)=>e.drawElementsInstanced(...t),vertexAttribDivisorANGLE:(...t)=>e.vertexAttribDivisor(...t)}},i=e.getExtension;e.getExtension=function(r){let n=i.call(e,r);return n||(r in t?t[r]:null)};let r=e.getSupportedExtensions;e.getSupportedExtensions=function(){let i=r.apply(e)||[];return i?.concat(Object.keys(t))}}(e),e}return this.originalGetContext(e,t)}}(e)}isSupported(){return"u">typeof WebGL2RenderingContext}isDeviceHandle(e){return!!("u">typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext)||("u">typeof WebGLRenderingContext&&e instanceof WebGLRenderingContext&&eY.log.warn("WebGL1 is not supported",e)(),!1)}async attach(t,i={}){var r;let{WebGLDevice:n}=await e.A(76084);if(t instanceof n)return t;let s=n.getDeviceFromContext(t);if(s)return s;if(r=t,!("u">typeof WebGL2RenderingContext&&r instanceof WebGL2RenderingContext)&&(!r||"function"!=typeof r.createVertexArray))throw Error("Invalid WebGL2RenderingContext");let o=!0===i.createCanvasContext?{}:i.createCanvasContext;return new n({...i,_handle:t,createCanvasContext:{canvas:t.canvas,autoResize:!1,...o}})}async create(t={}){let{WebGLDevice:i}=await e.A(76084),r=[];for(let e of((t.debugWebGL||t.debug)&&r.push((0,aD.loadWebGLDeveloperTools)()),t.debugSpectorJS&&r.push((0,aj.loadSpectorJS)(t)),await Promise.allSettled(r)))"rejected"===e.status&&eY.log.error(`Failed to initialize debug libraries ${e.reason}`)();try{let e=new i(t);eY.log.groupCollapsed(1,`WebGLDevice ${e.id} created`)();let r=`\
${e._reused?"Reusing":"Created"} device with WebGL2 ${e.props.debug?"debug ":""}context: \
${e.info.vendor}, ${e.info.renderer} for canvas: ${e.canvasContext.id}`;return eY.log.probe(1,r)(),eY.log.table(1,e.info)(),e}finally{eY.log.groupEnd(1)(),eY.log.info(1,"%cWebGL call tracing: luma.log.set('debug-webgl') ","color: white; background: blue; padding: 2px 6px; border-radius: 3px;")()}}},aN=0;class aU{static defaultAnimationLoopProps={device:null,onAddHTML:()=>"",onInitialize:async()=>null,onRender:()=>{},onFinalize:()=>{},onError:e=>console.error(e),stats:void 0,autoResizeViewport:!1};device=null;canvas=null;props;animationProps=null;timeline=null;stats;sharedStats;cpuTime;gpuTime;frameRate;display;_needsRedraw="initialized";_initialized=!1;_running=!1;_animationFrameId=null;_nextFramePromise=null;_resolveNextFrame=null;_cpuStartTime=0;_error=null;_lastFrameTime=0;constructor(e){if(this.props={...aU.defaultAnimationLoopProps,...e},!(e=this.props).device)throw Error("No device provided");this.stats=e.stats||new nd.Stats({id:`animation-loop-${aN++}`}),this.sharedStats=aT.stats.get("Animation Loop"),this.frameRate=this.stats.get("Frame Rate"),this.frameRate.setSampleSize(1),this.cpuTime=this.stats.get("CPU Time"),this.gpuTime=this.stats.get("GPU Time"),this.setProps({autoResizeViewport:e.autoResizeViewport}),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onMouseleave=this._onMouseleave.bind(this)}destroy(){this.stop(),this._setDisplay(null),this.device?._disableDebugGPUTime()}delete(){this.destroy()}reportError(e){this.props.onError(e),this._error=e}setNeedsRedraw(e){return this._needsRedraw=this._needsRedraw||e,this}needsRedraw(){let e=this._needsRedraw;return this._needsRedraw=!1,e}setProps(e){return"autoResizeViewport"in e&&(this.props.autoResizeViewport=e.autoResizeViewport||!1),this}async start(){if(this._running)return this;this._running=!0;try{let e;if(!this._initialized){if(this._initialized=!0,await this._initDevice(),this._initialize(),!this._running)return null;await this.props.onInitialize(this._getAnimationProps())}if(!this._running)return null;return!1!==e&&(this._cancelAnimationFrame(),this._requestAnimationFrame()),this}catch(t){let e=t instanceof Error?t:Error("Unknown error");throw this.props.onError(e),e}}stop(){return this._running&&(this.animationProps&&!this._error&&this.props.onFinalize(this.animationProps),this._cancelAnimationFrame(),this._nextFramePromise=null,this._resolveNextFrame=null,this._running=!1,this._lastFrameTime=0),this}redraw(e){return this.device?.isLost||this._error||(this._beginFrameTimers(e),this._setupFrame(),this._updateAnimationProps(),this._renderFrame(this._getAnimationProps()),this._clearNeedsRedraw(),this._resolveNextFrame&&(this._resolveNextFrame(this),this._nextFramePromise=null,this._resolveNextFrame=null),this._endFrameTimers()),this}attachTimeline(e){return this.timeline=e,this.timeline}detachTimeline(){this.timeline=null}waitForRender(){return this.setNeedsRedraw("waitForRender"),this._nextFramePromise||(this._nextFramePromise=new Promise(e=>{this._resolveNextFrame=e})),this._nextFramePromise}async toDataURL(){if(this.setNeedsRedraw("toDataURL"),await this.waitForRender(),this.canvas instanceof HTMLCanvasElement)return this.canvas.toDataURL();throw Error("OffscreenCanvas")}_initialize(){this._startEventHandling(),this._initializeAnimationProps(),this._updateAnimationProps(),this._resizeViewport(),this.device?._enableDebugGPUTime()}_setDisplay(e){this.display&&(this.display.destroy(),this.display.animationLoop=null),e&&(e.animationLoop=this),this.display=e}_requestAnimationFrame(){if(this._running){var e;let t;this._animationFrameId=(e=this._animationFrame.bind(this),(t="u">typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:null)?t.call(window,e):setTimeout(()=>e("u">typeof performance?performance.now():Date.now()),1e3/60))}}_cancelAnimationFrame(){if(null!==this._animationFrameId){var e;let t;e=this._animationFrameId,(t="u">typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame:null)?t.call(window,e):clearTimeout(e),this._animationFrameId=null}}_animationFrame(e){this._running&&(this.redraw(e),this._requestAnimationFrame())}_renderFrame(e){this.display?this.display._renderFrame(e):(this.props.onRender(this._getAnimationProps()),this.device?.submit())}_clearNeedsRedraw(){this._needsRedraw=!1}_setupFrame(){this._resizeViewport()}_initializeAnimationProps(){let e=this.device?.getDefaultCanvasContext();if(!this.device||!e)throw Error("loop");let t=e?.canvas,i=e.props.useDevicePixels;this.animationProps={animationLoop:this,device:this.device,canvasContext:e,canvas:t,useDevicePixels:i,timeline:this.timeline,needsRedraw:!1,width:1,height:1,aspect:1,time:0,startTime:Date.now(),engineTime:0,tick:0,tock:0,_mousePosition:null}}_getAnimationProps(){if(!this.animationProps)throw Error("animationProps");return this.animationProps}_updateAnimationProps(){if(!this.animationProps)return;let{width:e,height:t,aspect:i}=this._getSizeAndAspect();(e!==this.animationProps.width||t!==this.animationProps.height)&&this.setNeedsRedraw("drawing buffer resized"),i!==this.animationProps.aspect&&this.setNeedsRedraw("drawing buffer aspect changed"),this.animationProps.width=e,this.animationProps.height=t,this.animationProps.aspect=i,this.animationProps.needsRedraw=this._needsRedraw,this.animationProps.engineTime=Date.now()-this.animationProps.startTime,this.timeline&&this.timeline.update(this.animationProps.engineTime),this.animationProps.tick=Math.floor(this.animationProps.time/1e3*60),this.animationProps.tock++,this.animationProps.time=this.timeline?this.timeline.getTime():this.animationProps.engineTime}async _initDevice(){if(this.device=await this.props.device,!this.device)throw Error("No device provided");this.canvas=this.device.getDefaultCanvasContext().canvas||null}_createInfoDiv(){if(this.canvas&&this.props.onAddHTML){let e=document.createElement("div");document.body.appendChild(e),e.style.position="relative";let t=document.createElement("div");t.style.position="absolute",t.style.left="10px",t.style.bottom="10px",t.style.width="300px",t.style.background="white",this.canvas instanceof HTMLCanvasElement&&e.appendChild(this.canvas),e.appendChild(t);let i=this.props.onAddHTML(t);i&&(t.innerHTML=i)}}_getSizeAndAspect(){if(!this.device)return{width:1,height:1,aspect:1};let[e,t]=this.device.getDefaultCanvasContext().getDrawingBufferSize();return{width:e,height:t,aspect:e>0&&t>0?e/t:1}}_resizeViewport(){this.props.autoResizeViewport&&this.device.gl&&this.device.gl.viewport(0,0,this.device.gl.drawingBufferWidth,this.device.gl.drawingBufferHeight)}_beginFrameTimers(e){let t=e??("u">typeof performance?performance.now():Date.now());if(this._lastFrameTime){let e=t-this._lastFrameTime;e>0&&this.frameRate.addTime(e)}this._lastFrameTime=t,this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeStart()}_endFrameTimers(){this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeEnd(),this._updateSharedStats()}_consumeEncodedGpuTime(){if(!this.device)return;let e=this.device.commandEncoder._gpuTimeMs;void 0!==e&&(this.gpuTime.addTime(e),this.device.commandEncoder._gpuTimeMs=void 0)}_updateSharedStats(){if(this.stats!==this.sharedStats){for(let e of Object.keys(this.sharedStats.stats))this.stats.stats[e]||delete this.sharedStats.stats[e];this.stats.forEach(e=>{let t=this.sharedStats.get(e.name,e.type);t.sampleSize=e.sampleSize,t.time=e.time,t.count=e.count,t.samples=e.samples,t.lastTiming=e.lastTiming,t.lastSampleTime=e.lastSampleTime,t.lastSampleCount=e.lastSampleCount,t._count=e._count,t._time=e._time,t._samples=e._samples,t._startTime=e._startTime,t._timerPending=e._timerPending})}}_startEventHandling(){this.canvas&&(this.canvas.addEventListener("mousemove",this._onMousemove.bind(this)),this.canvas.addEventListener("mouseleave",this._onMouseleave.bind(this)))}_onMousemove(e){e instanceof MouseEvent&&(this._getAnimationProps()._mousePosition=[e.offsetX,e.offsetY])}_onMouseleave(e){this._getAnimationProps()._mousePosition=null}}function aB(){}let a$={id:"",width:"100%",height:"100%",style:null,viewState:null,initialViewState:null,pickingRadius:0,pickAsync:"auto",layerFilter:null,parameters:{},parent:null,device:null,deviceProps:{},gl:null,canvas:null,layers:[],effects:[],views:null,controller:null,useDevicePixels:!0,touchAction:"none",eventRecognizerOptions:{},_framebuffer:null,_animate:!1,_pickable:!0,_typedArrayManagerProps:{},_customRender:null,widgets:[],onDeviceInitialized:aB,onWebGLInitialized:aB,onResize:aB,onViewStateChange:aB,onInteractionStateChange:aB,onBeforeRender:aB,onAfterRender:aB,onLoad:aB,onError:e=>tU.error(e.message,e.cause)(),onHover:null,onClick:null,onDragStart:null,onDrag:null,onDragEnd:null,_onMetrics:null,getCursor:({isDragging:e})=>e?"grabbing":"grab",getTooltip:null,debug:!1,drawPickingColors:!1};class aV{constructor(e){this.width=0,this.height=0,this.userData={},this.device=null,this.canvas=null,this.viewManager=null,this.layerManager=null,this.effectManager=null,this.deckRenderer=null,this.deckPicker=null,this.eventManager=null,this.widgetManager=null,this.tooltip=null,this.animationLoop=null,this._canvasContext=null,this._deviceResizeHandler=null,this.cursorState={isHovering:!1,isDragging:!1},this.stats=new nd.Stats({id:"deck.gl"}),this.metrics={fps:0,setPropsTime:0,layersCount:0,drawLayersCount:0,updateLayersCount:0,updateAttributesCount:0,updateAttributesTime:0,framesRedrawn:0,pickTime:0,pickCount:0,pickLayersCount:0,gpuTime:0,gpuTimePerFrame:0,cpuTime:0,cpuTimePerFrame:0,bufferMemory:0,textureMemory:0,renderbufferMemory:0,gpuMemory:0},this._metricsCounter=0,this._hoverPickSequence=0,this._pointerDownPickSequence=0,this._needsRedraw="Initial render",this._pickRequest={mode:"hover",x:-1,y:-1,radius:0,event:null,unproject3D:!1},this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this._onPointerMove=e=>{let{_pickRequest:t}=this;if("pointerleave"===e.type)t.x=-1,t.y=-1,t.radius=0;else{if(e.leftButton||e.rightButton)return;let i=e.offsetCenter;if(!i)return;t.x=i.x,t.y=i.y,t.radius=this.props.pickingRadius}this.layerManager&&(this.layerManager.context.mousePosition={x:t.x,y:t.y}),t.event=e},this._onEvent=e=>{let t=iM[e.type],i=e.offsetCenter;if(!t||!i||!this.layerManager)return;let r=this.layerManager.getLayers(),n=this._getInternalPickingMode();if(n){if("sync"===n){let t="click"===e.type&&this._shouldUnproject3D(r)?this._getFirstPickedInfo(this._pickPointSync(this._getPointPickOptions(i.x,i.y,{unproject3D:!0},r))):this._getLastPointerDownPickingInfo(i.x,i.y,r);this._dispatchPickingEvent(t,e);return}(this._lastPointerDownInfoPromise||Promise.resolve(this._getLastPointerDownPickingInfo(i.x,i.y,r))).then(t=>{this._dispatchPickingEvent(t,e)}).catch(e=>this.props.onError?.(e))}},this._onPointerDown=e=>{let t=e.offsetCenter;if(!t)return;let i=this._getInternalPickingMode();if(!i)return;let r=this.layerManager?.getLayers()||[],n=++this._pointerDownPickSequence;if("sync"===i){let e=this._pickPointSync({x:t.x,y:t.y,radius:this.props.pickingRadius}),i=this._getFirstPickedInfo(e);this._lastPointerDownInfo=i,this._lastPointerDownInfoPromise=Promise.resolve(i);return}let s=this._pickPointAsync(this._getPointPickOptions(t.x,t.y,{},r)).then(e=>this._getFirstPickedInfo(e)).then(e=>(n===this._pointerDownPickSequence&&(this._lastPointerDownInfo=e),e)).catch(e=>{this.props.onError?.(e);let i=this.deckPicker&&this.viewManager?this._getLastPointerDownPickingInfo(t.x,t.y,r):{};return n===this._pointerDownPickSequence&&(this._lastPointerDownInfo=i),i});this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=s};const t=e;this.props={...a$,...e},(e=this.props).viewState&&e.initialViewState&&tU.warn("View state tracking is disabled. Use either `initialViewState` for auto update or `viewState` for manual update.")(),this.viewState=this.props.initialViewState,e.device&&(this.device=e.device,this._setDeviceCanvasContext(e.device));let i=this.device;!i&&e.gl&&(e.gl instanceof WebGLRenderingContext&&tU.error("WebGL1 context not supported.")(),i=aF.attach(e.gl,{_cacheShaders:!0,_cachePipelines:!0,...this.props.deviceProps})),i||(i=this._createDevice(e)),this.animationLoop=this._createAnimationLoop(i,e),this.setProps(t),e._typedArrayManagerProps&&sN.setOptions(e._typedArrayManagerProps),this.animationLoop.start()}finalize(){this._restoreDeviceResizeHandler(),this.animationLoop?.stop(),this.animationLoop?.destroy(),this.animationLoop=null,this._hoverPickSequence++,this._pointerDownPickSequence++,this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this.layerManager?.finalize(),this.layerManager=null,this.viewManager?.finalize(),this.viewManager=null,this.effectManager?.finalize(),this.effectManager=null,this.deckRenderer?.finalize(),this.deckRenderer=null,this.deckPicker?.finalize(),this.deckPicker=null,this.eventManager?.destroy(),this.eventManager=null,this.widgetManager?.finalize(),this.widgetManager=null,this.props.canvas||this.props.device||this.props.gl||!this.canvas||(this.canvas.parentElement?.removeChild(this.canvas),this.canvas=null),this._canvasContext=null}setProps(e){this.stats.get("setProps Time").timeStart(),"onLayerHover"in e&&tU.removed("onLayerHover","onHover")(),"onLayerClick"in e&&tU.removed("onLayerClick","onClick")(),e.initialViewState&&!sQ(this.props.initialViewState,e.initialViewState,3)&&(this.viewState=e.initialViewState),Object.assign(this.props,e),this._validateInternalPickingMode(),this._setCanvasSize(this.props);let t=Object.create(this.props);if(Object.assign(t,{views:this._getViews(),width:this.width,height:this.height,viewState:this._getViewState()}),e.device&&e.device.id!==this.device?.id){let t=e.device.getDefaultCanvasContext();this.animationLoop?.stop(),this.canvas!==t.canvas&&(this.canvas?.remove(),this.eventManager?.destroy(),this.canvas=null),this._setDeviceCanvasContext(e.device),tU.log(`recreating animation loop for new device! id=${e.device.id}`)(),this.animationLoop=this._createAnimationLoop(e.device,e),this.animationLoop.start()}this.animationLoop?.setProps(t),void 0!==e.useDevicePixels&&this._canvasContext?.setProps&&this._canvasContext.setProps({useDevicePixels:e.useDevicePixels}),this.layerManager&&(this.viewManager.setProps(t),this.layerManager.activateViewport(this.getViewports()[0]),this.layerManager.setProps(t),this.effectManager.setProps(t),this.deckRenderer.setProps(t),this.deckPicker.setProps(t),this.widgetManager.setProps(t)),this.stats.get("setProps Time").timeEnd()}needsRedraw(e={clearRedrawFlags:!1}){if(!this.layerManager)return!1;if(this.props._animate)return"Deck._animate";let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);let i=this.viewManager.needsRedraw(e),r=this.layerManager.needsRedraw(e),n=this.effectManager.needsRedraw(e),s=this.deckRenderer.needsRedraw(e);return t||i||r||n||s}redraw(e){if(!this.layerManager)return;let t=this.needsRedraw({clearRedrawFlags:!0});(t=e||t)&&(this.stats.get("Redraw Count").incrementCount(),this.props._customRender?this.props._customRender(t):this._drawLayers(t))}get isInitialized(){return null!==this.viewManager}getViews(){return os(this.viewManager),this.viewManager.views}getView(e){return os(this.viewManager),this.viewManager.getView(e)}getViewports(e){return os(this.viewManager),this.viewManager.getViewports(e)}getCanvas(){return this.canvas}async pickObjectAsync(e){let t=(await this._pickAsync("pickObjectAsync","pickObject Time",e)).result;return t.length?t[0]:null}async pickObjectsAsync(e){return await this._pickAsync("pickObjectsAsync","pickObjects Time",e)}pickObject(e){let t=this._pick("pickObject","pickObject Time",e).result;return t.length?t[0]:null}pickMultipleObjects(e){return e.depth=e.depth||10,this._pick("pickObject","pickMultipleObjects Time",e).result}pickObjects(e){return this._pick("pickObjects","pickObjects Time",e)}_pickPositionForController(e,t){return"sync"!==this._getInternalPickingMode()?null:this.pickObject({x:e,y:t,radius:0,unproject3D:!0})}_addResources(e,t=!1){for(let i in e)this.layerManager.resourceManager.add({resourceId:i,data:e[i],forceUpdate:t})}_removeResources(e){for(let t of e)this.layerManager.resourceManager.remove(t)}_addDefaultEffect(e){this.effectManager.addDefaultEffect(e)}_addDefaultShaderModule(e){this.layerManager.addDefaultShaderModule(e)}_removeDefaultShaderModule(e){this.layerManager?.removeDefaultShaderModule(e)}_resolveInternalPickingMode(){let{pickAsync:e}=this.props,t=this.device?.type||this.props.deviceProps?.type;if("auto"===e)return"webgpu"===t?"async":"sync";if("sync"===e&&"webgpu"===t)throw Error('`pickAsync: "sync"` is not supported when Deck is using a WebGPU device.');return e}_getInternalPickingMode(){try{return this._resolveInternalPickingMode()}catch(e){return this.props.onError?.(e),null}}_validateInternalPickingMode(){this._getInternalPickingMode()}_getFirstPickedInfo({result:e,emptyInfo:t}){return e[0]||t}_shouldUnproject3D(e=this.layerManager?.getLayers()||[]){return e.some(e=>"3d"===e.props.pickable)}_getPointPickOptions(e,t,i={},r=this.layerManager?.getLayers()||[]){return{x:e,y:t,radius:this.props.pickingRadius,unproject3D:this._shouldUnproject3D(r),...i}}_pickPointSync(e){return this._pick("pickObject","pickObject Time",e)}_pickPointAsync(e){return this._pickAsync("pickObjectAsync","pickObject Time",e)}_getLastPointerDownPickingInfo(e,t,i=this.layerManager?.getLayers()||[]){return this.deckPicker.getLastPickedObject({x:e,y:t,layers:i,viewports:this.getViewports({x:e,y:t})},this._lastPointerDownInfo)}_applyHoverCallbacks({result:e,emptyInfo:t},i){if(!this.widgetManager)return;this.cursorState.isHovering=e.length>0;let r=t,n=!1;for(let t of e)r=t,n=t.layer?.onHover(t,i)||n;n||(this.props.onHover?.(r,i),this.widgetManager.onHover(r,i))}_dispatchPickingEvent(e,t){if(!this.layerManager||!this.widgetManager)return;let i=iM[t.type];if(!i)return;let{layer:r}=e,n=r&&(r[i]||r.props[i]),s=this.props[i],o=!1;n&&(o=n.call(r,e,t)),o||(s?.(e,t),this.widgetManager.onEvent(e,t))}_pickAsync(e,t,i){os(this.deckPicker);let{stats:r}=this;r.get("Pick Count").incrementCount(),r.get(t).timeStart();let n=this.deckPicker[e]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports(i),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i,canvasContext:this._canvasContext||void 0});return r.get(t).timeEnd(),n}_pick(e,t,i){os(this.deckPicker);let{stats:r}=this;r.get("Pick Count").incrementCount(),r.get(t).timeStart();let n=this.deckPicker[e]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports(i),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i,canvasContext:this._canvasContext||void 0});return r.get(t).timeEnd(),n}_createCanvas(e){let t=e.canvas;return"string"==typeof t&&os(t=document.getElementById(t)),t||((t=document.createElement("canvas")).id=e.id||"deckgl-overlay",e.width&&"number"==typeof e.width&&(t.width=e.width),e.height&&"number"==typeof e.height&&(t.height=e.height),(e.parent||document.body).appendChild(t)),Object.assign(t.style,e.style),t}_setCanvasContext(e){this._canvasContext=e,"style"in e.canvas&&(this.canvas=e.canvas)}_setDeviceCanvasContext(e,t={}){let i=e.getDefaultCanvasContext();this._setCanvasContext(i),this._setDeviceResizeHandler(e,t)}_setDeviceResizeHandler(e,t={}){let i=!!t.syncDrawingBuffer;if(this._deviceResizeHandler?.device===e){this._deviceResizeHandler.syncDrawingBuffer=i;return}this._restoreDeviceResizeHandler();let r=e=>{e===this._canvasContext&&this._canvasContext&&this._onCanvasContextResize(this._canvasContext,{syncDrawingBuffer:this._deviceResizeHandler?.syncDrawingBuffer})};e.props.onResize=r,this._deviceResizeHandler={device:e,onResize:r,syncDrawingBuffer:i}}_restoreDeviceResizeHandler(){let e=this._deviceResizeHandler;e&&e.device.props?.onResize===e.onResize&&(e.device.props.onResize=aB),this._deviceResizeHandler=null}_setCanvasSize(e){if(!this.canvas)return;let{width:t,height:i}=e;if(t||0===t){let e=Number.isFinite(t)?`${t}px`:t;this.canvas.style.width=e}if(i||0===i){let t=Number.isFinite(i)?`${i}px`:i;this.canvas.style.position=e.style?.position||"absolute",this.canvas.style.height=t}}_updateCanvasSize(e=this._canvasContext){let{canvas:t}=this,[i,r]=e?e.getCSSSize():[t?.clientWidth??t?.width??0,t?.clientHeight??t?.height??0];(i!==this.width||r!==this.height)&&(this.width=i,this.height=r,this.viewManager?.setProps({width:i,height:r}),this.layerManager?.activateViewport(this.getViewports()[0]),this.props.onResize({width:i,height:r},e||void 0))}_onCanvasContextResize(e,t={}){if(t.syncDrawingBuffer){let{width:t,height:i}=e.canvas;e.setDrawingBufferSize(t,i)}this._needsRedraw="Canvas resized",this._updateCanvasSize(e)}_createAnimationLoop(e,t){let{gl:i,onError:r}=t;return new aU({device:e,autoResizeDrawingBuffer:!i,autoResizeViewport:!1,onInitialize:e=>this._setDevice(e.device),onRender:this._onRenderFrame.bind(this),onError:r})}_createDevice(e){let t=this.props.deviceProps?.createCanvasContext,i={adapters:[],_cacheShaders:!0,_cachePipelines:!0,...e.deviceProps};i.adapters.includes(aF)||i.adapters.push(aF);let r={alphaMode:this.props.deviceProps?.type==="webgpu"?"premultiplied":void 0};return aT.createDevice({_reuseDevices:!0,type:"webgl",...i,createCanvasContext:{...r,..."object"==typeof t?t:void 0,canvas:this._createCanvas(e),useDevicePixels:this.props.useDevicePixels,autoResize:!0}})}_getViewState(){return this.props.viewState||this.viewState}_getViews(){let{views:e}=this.props,t=Array.isArray(e)?e:e?[e]:[new oT({id:"default-view"})];return t.length&&this.props.controller&&(t[0].props.controller=this.props.controller),t}_onContextLost(){let{onError:e}=this.props;this.animationLoop&&e&&e(Error("WebGL context is lost"))}_pickAndCallback(){let{_pickRequest:e}=this;if(e.event){let t=e.event,i=this.layerManager?.getLayers()||[],r=this._getPointPickOptions(e.x,e.y,{radius:e.radius,mode:e.mode},i),n=this._getInternalPickingMode(),s=++this._hoverPickSequence;if(e.event=null,!n)return;if("sync"===n)return void this._applyHoverCallbacks(this._pickPointSync(r),t);this._pickPointAsync(r).then(({result:e,emptyInfo:i})=>{s===this._hoverPickSequence&&this._applyHoverCallbacks({result:e,emptyInfo:i},t)}).catch(e=>this.props.onError?.(e))}}_updateCursor(){let e=this.props.parent||this.canvas;e&&(e.style.cursor=this.props.getCursor(this.cursorState))}_setDevice(e){if(this.device=e,this._validateInternalPickingMode(),!this.animationLoop)return;this._setDeviceCanvasContext(e,{syncDrawingBuffer:!!(this.props.gl&&this.props.device!==e)}),this.canvas&&!this.canvas.isConnected&&this.props.parent&&this.props.parent.insertBefore(this.canvas,this.props.parent.firstChild),"webgl"===this.device.type&&this.device.setParametersWebGL({blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthTest:!0,depthFunc:515}),this.props.onDeviceInitialized(this.device),"webgl"===this.device.type&&this.props.onWebGLInitialized(this.device.gl);let t=new G;t.play(),this.animationLoop.attachTimeline(t);let i=this.props.parent?.querySelector(".deck-events-root")||this.canvas;for(let e in this.eventManager=new iw(i,{touchAction:this.props.touchAction,recognizers:Object.keys(iE).map(e=>{let[t,i,r,n]=iE[e],s=this.props.eventRecognizerOptions?.[e];return{recognizer:new t({...i,...s,event:e}),recognizeWith:r,requireFailure:n}}),events:{pointerdown:this._onPointerDown,pointermove:this._onPointerMove,pointerleave:this._onPointerMove}}),iM)this.eventManager.on(e,this._onEvent);this.viewManager=new s0({timeline:t,eventManager:this.eventManager,onViewStateChange:this._onViewStateChange.bind(this),onInteractionStateChange:this._onInteractionStateChange.bind(this),pickPosition:this._pickPositionForController.bind(this),views:this._getViews(),viewState:this._getViewState(),width:this.width,height:this.height});let r=this.viewManager.getViewports()[0];this.layerManager=new sJ(this.device,{deck:this,stats:this.stats,viewport:r,timeline:t}),this.effectManager=new oZ({deck:this,device:this.device}),this.deckRenderer=new o0(this.device,{stats:this.stats}),this.deckPicker=new o7(this.device,{stats:this.stats});let n=this.props.parent?.querySelector(".deck-widgets-root")||this.canvas?.parentElement;this.widgetManager=new ai({deck:this,parentElement:n}),this.widgetManager.addDefault(new ao),this.setProps({}),this._updateCanvasSize(this._canvasContext),this.props.onLoad()}_drawLayers(e,t){let{device:i,gl:r}=this.layerManager.context;this.props.onBeforeRender({device:i,gl:r});let n={target:this.props._framebuffer,layers:this.layerManager.getLayers(),viewports:this.viewManager.getViewports(),onViewportActive:this.layerManager.activateViewport,views:this.viewManager.getViews(),pass:"screen",effects:this.effectManager.getEffects(),...t};this.deckRenderer?.renderLayers(n),"screen"===n.pass&&this.widgetManager.onRedraw({viewports:n.viewports,layers:n.layers}),this.props.onAfterRender({device:i,gl:r})}_onRenderFrame(){this._getFrameStats(),this._metricsCounter++%60==0&&(this._getMetrics(),this.stats.reset(),tU.table(4,this.metrics)(),this.props._onMetrics&&this.props._onMetrics(this.metrics)),this._updateCursor(),this.layerManager.updateLayers(),this._pickAndCallback(),this.redraw(),this.viewManager&&this.viewManager.updateViewStates()}_onViewStateChange(e){let t=this.props.onViewStateChange(e)||e.viewState;this.viewState&&(this.viewState={...this.viewState,[e.viewId]:t},!this.props.viewState&&this.viewManager&&this.viewManager.setProps({viewState:this.viewState}))}_onInteractionStateChange(e){this.cursorState.isDragging=e.isDragging||!1,this.props.onInteractionStateChange(e)}_getFrameStats(){let{stats:e}=this;e.get("frameRate").timeEnd(),e.get("frameRate").timeStart();let t=this.animationLoop.stats;e.get("GPU Time").addTime(t.get("GPU Time").lastTiming),e.get("CPU Time").addTime(t.get("CPU Time").lastTiming)}_getMetrics(){let{metrics:e,stats:t}=this;e.fps=t.get("frameRate").getHz(),e.setPropsTime=t.get("setProps Time").time,e.updateAttributesTime=t.get("Update Attributes").time,e.framesRedrawn=t.get("Redraw Count").count,e.pickTime=t.get("pickObject Time").time+t.get("pickMultipleObjects Time").time+t.get("pickObjects Time").time,e.pickCount=t.get("Pick Count").count,e.layersCount=this.layerManager?.layers.length??0,e.drawLayersCount=t.get("Layers rendered").lastSampleCount,e.pickLayersCount=t.get("Layers picked").lastSampleCount,e.updateAttributesCount=t.get("Layers updated").count,e.updateAttributesCount=t.get("Attributes updated").count,e.gpuTime=t.get("GPU Time").time,e.cpuTime=t.get("CPU Time").time,e.gpuTimePerFrame=t.get("GPU Time").getAverageTime(),e.cpuTimePerFrame=t.get("CPU Time").getAverageTime();let i=aT.stats.get("GPU Time and Memory");e.bufferMemory=i.get("Buffer Memory").count,e.textureMemory=i.get("Texture Memory").count,e.renderbufferMemory=i.get("Renderbuffer Memory").count,e.gpuMemory=i.get("GPU Memory").count}}aV.defaultProps=a$,aV.VERSION=aM;let aW=Math.PI/180,aG=180/Math.PI;function aH(e,t=0){return 512*Math.sin(Math.min(180,e)*aW/2)*Math.pow(2,t)}function aq(e,t=0){return 2*Math.asin(Math.min(1,e/Math.pow(2,t)/256/2))*aG}class aZ extends oL{constructor(e){const{startPanPos:t,...i}=e;i.normalize=!1,super(i),void 0!==t&&(this._state.startPanPos=t)}panStart({pos:e}){let{latitude:t,longitude:i,zoom:r}=this.getViewportProps();return this._getUpdatedState({startPanLngLat:[i,t],startPanPos:e,startZoom:r})}pan({pos:e,startPos:t}){let i=this.getState(),r=i.startPanLngLat||this._unproject(t);if(!r)return this;let n=i.startZoom??this.getViewportProps().zoom,s=i.startPanPos||t,o=[r[0],r[1],n],a=this.makeViewport(this.getViewportProps()).panByPosition(o,e,s);return this._getUpdatedState(a)}panEnd(){return this._getUpdatedState({startPanLngLat:null,startPanPos:null,startZoom:null})}zoom({scale:e}){let t=(this.getState().startZoom||this.getViewportProps().zoom)+Math.log2(e);return this._getUpdatedState({zoom:t})}applyConstraints(e){let{longitude:t,latitude:i,maxBounds:r}=e;if(e.zoom=this._constrainZoom(e.zoom,e),(t<-180||t>180)&&(e.longitude=sB(t+180,360)-180),e.latitude=iK(i,-85.051129,85.051129),r&&(e.longitude=iK(e.longitude,r[0][0],r[1][0]),e.latitude=iK(e.latitude,r[0][1],r[1][1])),r){let t=e.zoom-ou(i),n=r[1][0]-r[0][0],s=r[1][1]-r[0][1];if(s>0&&s<170.102258){let i=Math.min(aq(e.height,t),s)/2;e.latitude=iK(e.latitude,r[0][1]+i,r[1][1]-i)}if(n>0&&n<360){let i=Math.min(aq(e.width/Math.cos(e.latitude*aW),t),n)/2;e.longitude=iK(e.longitude,r[0][0]+i,r[1][0]-i)}}return e.latitude!==i&&(e.zoom+=ou(e.latitude)-ou(i)),e}_constrainZoom(e,t){t||(t=this.getViewportProps());let{latitude:i,maxZoom:r,maxBounds:n}=t,{minZoom:s}=t,o=ou(0),a=ou(i)-o;if(null!==n&&t.width>0&&t.height>0){let e=n[0][1],i=n[1][1],a=Math.sign(e)===Math.sign(i)?Math.min(Math.abs(e),Math.abs(i)):0,l=aH(n[1][0]-n[0][0])*Math.cos(a*aW),c=aH(n[1][1]-n[0][1]);l>0&&(s=Math.max(s,Math.log2(t.width/l)+o)),c>0&&(s=Math.max(s,Math.log2(t.height/c)+o)),s>r&&(s=r)}return iK(e,s+a,r+a)}}class aY extends oC{constructor(){super(...arguments),this.ControllerState=aZ,this.transition={transitionDuration:300,transitionInterpolator:new of(["longitude","latitude","zoom"])},this.dragMode="pan"}setProps(e){super.setProps(e),this.dragRotate=!1,this.touchRotate=!1}}let aK={cullMode:"back"};class aX extends s8{constructor(e={}){super({...e,parameters:{...aK,...e.parameters}})}getViewportType(e){return e.zoom>12?oe:oc}get ControllerType(){return aY}}aX.displayName="GlobeView";class aJ{constructor(e){os(e.id,"id is required"),this.id=e.id,this.type="custom",this.renderingMode=e.renderingMode||"3d",this.slot=e.slot,this.beforeId=e.beforeId,this.map=null}onAdd(e,t){this.map=e}render(e,t){this.map&&function(e,t,i,r){if(!e.isInitialized)return;let{currentViewport:n}=e.userData,s=!1;n||(n=a9(e,t,r),e.userData.currentViewport=n,s=!0),n&&e._drawLayers("mapbox-repaint",{viewports:[n],layerFilter:t=>{if(e.props.layerFilter&&!e.props.layerFilter(t))return!1;let r=t.layer;return r.props.beforeId===i.beforeId&&r.props.slot===i.slot},clearStack:s,clearCanvas:!1})}(this.map.__deck,this.map,this,t)}}let aQ="__UNDEFINED__";function a0(e){return e.props.beforeId?`deck-layer-group-before:${e.props.beforeId}`:e.props.slot?`deck-layer-group-slot:${e.props.slot}`:"deck-layer-group-last"}let a1="mapbox",a2=Math.PI/180;function a3(e,t){let i=()=>{var r,n;e.isInitialized?(r=e,n=t,r.setProps({viewState:a8(n)}),r.needsRedraw({clearRedrawFlags:!0})):t.off("move",i)};t.on("move",i)}function a4(e,t){return t?{depthWriteEnabled:!0,depthCompare:"less-equal",depthBias:0,blend:!0,blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one-minus-src-alpha",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha",blendColorOperation:"add",blendAlphaOperation:"add"}:{}}function a6(e){let t=e.getProjection?.(),i=t?.type||t?.name;if("globe"===i)return"globe";if(i&&"mercator"!==i)throw Error("Unsupported projection");return"mercator"}function a5(e){return"globe"===a6(e)?new aX({id:a1}):new oT({id:a1})}function a8(e){let{lng:t,lat:i}=e.getCenter(),r={longitude:(t+540)%360-180,latitude:i,zoom:e.getZoom(),bearing:e.getBearing(),pitch:e.getPitch(),padding:e.getPadding(),repeat:e.getRenderWorldCopies()};return e.getTerrain?.()&&function(e,t){if(e.getFreeCameraOptions){let{position:i}=e.getFreeCameraOptions();if(!i||void 0===i.z)return;let r=e.transform.height,{longitude:n,latitude:s,pitch:o}=t,a=512*i.x,l=(1-i.y)*512,c=512*i.z,u=rU([n,s]),h=a-u[0],d=l-u[1],p=Math.sqrt(h*h+d*d),f=o*a2,g=1.5*r,m=f<.001?g*Math.cos(f)/c:g*Math.sin(f)/p;t.zoom=Math.log2(m),t.position=[0,0,(c-g*Math.cos(f)/m)/r$(s)]}else"number"==typeof e.transform.elevation&&(t.position=[0,0,e.transform.elevation])}(e,r),r}function a9(e,t,i){let r=a8(t),n=e.getView(a1)||a5(t);i&&(n.props.nearZMultiplier=.2);let s=i?.nearZ??t.transform._nearZ,o=i?.farZ??t.transform._farZ;return Number.isFinite(s)&&(r.nearZ=s/t.transform.height,r.farZ=o/t.transform.height),n.makeViewport({width:e.width,height:e.height,viewState:r})}class a7{constructor(e){this._handleStyleChange=()=>{this._resolveLayers(this._map,this._deck,this._props.layers,this._props.layers),!this._map||a6(this._map)&&this._deck?.setProps({views:this._getViews(this._map)})},this._updateContainerSize=()=>{if(this._map&&this._container){let{clientWidth:e,clientHeight:t}=this._map.getContainer();Object.assign(this._container.style,{width:`${e}px`,height:`${t}px`})}},this._updateViewState=()=>{let e=this._deck,t=this._map;e&&t&&(e.setProps({views:this._getViews(t),viewState:a8(t)}),e.isInitialized&&e.redraw())},this._handleMouseEvent=e=>{let t=this._deck;if(!t||!t.isInitialized)return;let i={type:e.type,offsetCenter:e.point,srcEvent:e},r=this._lastMouseDownPoint;switch(!e.point&&r&&(i.deltaX=e.originalEvent.clientX-r.clientX,i.deltaY=e.originalEvent.clientY-r.clientY,i.offsetCenter={x:r.x+i.deltaX,y:r.y+i.deltaY}),i.type){case"mousedown":t._onPointerDown(i),this._lastMouseDownPoint={...e.point,clientX:e.originalEvent.clientX,clientY:e.originalEvent.clientY};break;case"dragstart":i.type="panstart",t._onEvent(i);break;case"drag":i.type="panmove",t._onEvent(i);break;case"dragend":i.type="panend",t._onEvent(i);break;case"click":i.tapCount=1,t._onEvent(i);break;case"dblclick":i.type="click",i.tapCount=2,t._onEvent(i);break;case"mousemove":i.type="pointermove",t._onPointerMove(i);break;case"mouseout":i.type="pointerleave",t._onPointerMove(i);break;default:return}};const{interleaved:t=!1}=e;this._interleaved=t,this._props=this.filterProps(e)}filterProps(e){let{interleaved:t=!1,useDevicePixels:i,...r}=e;return t||void 0===i||(r.useDevicePixels=i),r}setProps(e){this._interleaved&&e.layers&&this._resolveLayers(this._map,this._deck,this._props.layers,e.layers),Object.assign(this._props,this.filterProps(e)),this._deck&&this._map&&this._deck.setProps({...this._props,views:this._getViews(this._map),parameters:{...a4(this._map,this._interleaved),...this._props.parameters}})}onAdd(e){return this._map=e,this._interleaved?this._onAddInterleaved(e):this._onAddOverlaid(e)}_onAddOverlaid(e){let t=document.createElement("div");return Object.assign(t.style,{position:"absolute",left:0,top:0,textAlign:"initial",pointerEvents:"none"}),this._container=t,this._deck=new aV({...this._props,parent:t,parameters:{...a4(e,!1),...this._props.parameters},views:this._getViews(e),viewState:a8(e)}),e.on("resize",this._updateContainerSize),e.on("render",this._updateViewState),e.on("mousedown",this._handleMouseEvent),e.on("dragstart",this._handleMouseEvent),e.on("drag",this._handleMouseEvent),e.on("dragend",this._handleMouseEvent),e.on("mousemove",this._handleMouseEvent),e.on("mouseout",this._handleMouseEvent),e.on("click",this._handleMouseEvent),e.on("dblclick",this._handleMouseEvent),this._updateContainerSize(),t}_onAddInterleaved(e){let t=e.painter.context.gl;return t instanceof WebGLRenderingContext&&tU.warn("Incompatible basemap library. See: https://deck.gl/docs/api-reference/mapbox/overview#compatibility")(),this._deck=function({map:e,deck:t}){if(e.__deck)return e.__deck;let i=t.props._customRender,r=t.props.onLoad,n={...t.props,_customRender:()=>{e.triggerRepaint(),i?.("")}};return n.views||(n.views=a5(e)),Object.assign(n,{width:null,height:null,touchAction:"unset",viewState:a8(e)}),t.isInitialized?a3(t,e):n.onLoad=()=>{r?.(),a3(t,e)},t.setProps(n),e.__deck=t,e.on("render",()=>{t.isInitialized&&function(e,t){let i=nh(e.props.layers,Boolean).some(e=>e&&!t.getLayer(a0(e))),r=e.getViewports(),n=r.findIndex(e=>e.id===a1),s=r.length>1||n<0;if(i||s){if(n>=0){r=r.slice();let i=a9(e,t);i?r[n]=i:r.splice(n,1)}e._drawLayers("mapbox-repaint",{viewports:r,layerFilter:i=>(!e.props.layerFilter||e.props.layerFilter(i))&&(i.viewport.id!==a1||!t.getLayer(a0(i.layer))),clearCanvas:!1})}else{let t=e.device,i=t?.gl;e.props.onBeforeRender?.({device:t,gl:i}),e.props.onAfterRender?.({device:t,gl:i})}e.userData.currentViewport=null}(t,e)}),t}({map:e,deck:new aV({...this._props,views:this._getViews(e),gl:t,parameters:{...a4(e,!0),...this._props.parameters}})}),e.on("styledata",this._handleStyleChange),this._resolveLayers(e,this._deck,[],this._props.layers),document.createElement("div")}_resolveLayers(e,t,i,r){!function(e,t,i){if(!e||!e.style||!e.style._loaded)return;let r=nh(i,Boolean);if(t!==i){let i=new Set(nh(t,Boolean).map(e=>a0(e))),n=new Set(r.map(e=>a0(e)));for(let t of i)!n.has(t)&&e.getLayer(t)&&e.removeLayer(t)}let n={};for(let t of r){let i=a0(t),r=e.getLayer(i);if(r){let e=r.implementation||r;n[i]=e}else{let r=new aJ({id:i,slot:t.props.slot,beforeId:t.props.beforeId});n[i]=r,e.addLayer(r,t.props.beforeId)}}let s=e.style._order;for(let[t,i]of Object.entries(n)){let r=i.beforeId||aQ,n=r===aQ?s.length:s.indexOf(r);if(s.indexOf(t)!==n-1){let i=r===aQ?void 0:r;e.moveLayer(t,i)}}}(e,i,r)}onRemove(){let e=this._map;e&&(this._interleaved?this._onRemoveInterleaved(e):this._onRemoveOverlaid(e)),this._deck=void 0,this._map=void 0,this._container=void 0}_onRemoveOverlaid(e){e.off("resize",this._updateContainerSize),e.off("render",this._updateViewState),e.off("mousedown",this._handleMouseEvent),e.off("dragstart",this._handleMouseEvent),e.off("drag",this._handleMouseEvent),e.off("dragend",this._handleMouseEvent),e.off("mousemove",this._handleMouseEvent),e.off("mouseout",this._handleMouseEvent),e.off("click",this._handleMouseEvent),e.off("dblclick",this._handleMouseEvent),this._deck?.finalize()}_onRemoveInterleaved(e){e.off("styledata",this._handleStyleChange),this._resolveLayers(e,this._deck,this._props.layers,[]),e.__deck?.finalize(),e.__deck=null}getDefaultPosition(){return"top-left"}pickObject(e){return os(this._deck),this._deck.pickObject(e)}pickMultipleObjects(e){return os(this._deck),this._deck.pickMultipleObjects(e)}pickObjects(e){return os(this._deck),this._deck.pickObjects(e)}finalize(){this._map&&this._map.removeControl(this)}getCanvas(){return this._map?this._interleaved?this._map.getCanvas():this._deck.getCanvas():null}_getViews(e){if(!this._props.views)return a5(e);let t=Array.isArray(this._props.views)?this._props.views:[this._props.views];return t.some(e=>e.id===a1)?this._props.views:[a5(e),...t]}}var le=e.i(95002),lt=e.i(69004),li=e.i(44135);let lr=lt.dataTypeDecoder.getDataType.bind(lt.dataTypeDecoder);function ln(e,t,i){if(t.size>4)return null;let r="webgpu"===i&&"uint8"===t.type?"unorm8":t.type;return{attribute:e,format:t.size>1?`${r}x${t.size}`:t.type,byteOffset:t.offset||0}}function ls(e){return e.stride||e.size*e.bytesPerElement}function lo(e,t){t.offset&&tU.removed("shaderAttribute.offset","vertexOffset, elementOffset")();let i=ls(e),r=(void 0!==t.vertexOffset?t.vertexOffset:e.vertexOffset||0)*i+(t.elementOffset||0)*e.bytesPerElement+(e.offset||0);return{...t,offset:r,stride:i}}class la{constructor(e,t,i){let r;this._buffer=null,this.device=e,this.id=t.id||"",this.size=t.size||1;const n=t.logicalType||t.type,s="float64"===n;let{defaultValue:o}=t;o=Number.isFinite(o)?[o]:o||Array(this.size).fill(0),r=s?"float32":!n&&t.isIndexed?"uint32":n||"float32";let a=function(e){switch(e){case"float64":return Float64Array;case"uint8":case"unorm8":return Uint8ClampedArray;default:return(0,li.getTypedArrayConstructor)(e)}}(n||r);this.doublePrecision=s,s&&!1===t.fp64&&(a=Float32Array),this.value=null,this.settings={...t,defaultType:a,defaultValue:o,logicalType:n,type:r,normalized:r.includes("norm"),size:this.size,bytesPerElement:a.BYTES_PER_ELEMENT},this.state={...i,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){let e=this.getAccessor();return e.vertexOffset?e.vertexOffset*ls(e):0}get numInstances(){return this.state.numInstances}set numInstances(e){this.state.numInstances=e}delete(){this._buffer&&(this._buffer.delete(),this._buffer=null),sN.release(this.state.allocatedValue)}getBuffer(){return this.state.constant?null:this.state.externalBuffer||this._buffer}getValue(e=this.id,t=null){let i={};if(this.state.constant){let r=this.value;if(t){let n=lo(this.getAccessor(),t),s=n.offset/r.BYTES_PER_ELEMENT,o=n.size||this.size;i[e]=r.subarray(s,s+o)}else i[e]=r}else i[e]=this.getBuffer();return this.doublePrecision&&(this.value instanceof Float64Array?i[`${e}64Low`]=i[e]:i[`${e}64Low`]=new Float32Array(this.size)),i}_getBufferLayout(e=this.id,t=null){let i=this.getAccessor(),r=[],n={name:this.id,byteStride:ls(i)};if(this.doublePrecision){let n,s={high:n=lo(i,t||{}),low:{...n,offset:n.offset+4*i.size}};r.push(ln(e,{...i,...s.high},this.device.type),ln(`${e}64Low`,{...i,...s.low},this.device.type))}else if(t){let n=lo(i,t);r.push(ln(e,{...i,...n},this.device.type))}else r.push(ln(e,i,this.device.type));return n.attributes=r.filter(Boolean),n}setAccessor(e){this.state.bufferAccessor=e}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let e=null;if(this.state.constant&&this.value){let t=Array.from(this.value);e=[t,t]}else{let{value:t,numInstances:i,size:r}=this,n=i*r;if(t&&n&&t.length>=n){let i=Array(r).fill(1/0),s=Array(r).fill(-1/0);for(let e=0;e<n;)for(let n=0;n<r;n++){let r=t[e++];r<i[n]&&(i[n]=r),r>s[n]&&(s[n]=r)}e=[i,s]}}return this.state.bounds=e,e}setData(e){let t,{state:i}=this;t=ArrayBuffer.isView(e)?{value:e}:e instanceof o1.Buffer?{buffer:e}:e;let r={...this.settings,...t};if(ArrayBuffer.isView(t.value)){if(!t.type)if(this.doublePrecision&&t.value instanceof Float64Array)r.type="float32";else{let e=lr(t.value);r.type=r.normalized?e.replace("int","norm"):e}r.bytesPerElement=t.value.BYTES_PER_ELEMENT,r.stride=ls(r)}if(i.bounds=null,t.constant){let e=t.value;if(e=this._normalizeValue(e,[],0),this.settings.normalized&&(e=this.normalizeConstant(e)),!(!i.constant||!this._areValuesEqual(e,this.value)))return!1;i.externalBuffer=null,i.constant=!0,this.value=ArrayBuffer.isView(e)?e:new Float32Array(e)}else if(t.buffer)i.externalBuffer=t.buffer,i.constant=!1,this.value=t.value||null;else if(t.value){this._checkExternalBuffer(t);let e=t.value;i.externalBuffer=null,i.constant=!1,this.value=e;let{buffer:n}=this,s=ls(r),o=(r.vertexOffset||0)*s;if(this.doublePrecision&&e instanceof Float64Array&&(e=sW(e,r)),this.settings.isIndexed){let t=this.settings.defaultType;e.constructor!==t&&(e=new t(e))}let a=e.byteLength+o+2*s;(!n||n.byteLength<a)&&(n=this._createBuffer(a)),n.write(e,o)}return this.setAccessor(r),!0}updateSubBuffer(e={}){this.state.bounds=null;let t=this.value,{startOffset:i=0,endOffset:r}=e;this.buffer.write(this.doublePrecision&&t instanceof Float64Array?sW(t,{size:this.size,startIndex:i,endIndex:r}):t.subarray(i,r),i*t.BYTES_PER_ELEMENT+this.byteOffset)}allocate(e,t=!1){let{state:i}=this,r=i.allocatedValue,n=sN.allocate(r,e+1,{size:this.size,type:this.settings.defaultType,copy:t});this.value=n;let{byteOffset:s}=this,{buffer:o}=this;return(!o||o.byteLength<n.byteLength+s)&&(o=this._createBuffer(n.byteLength+s),t&&r&&o.write(r instanceof Float64Array?sW(r,this):r,s)),i.allocatedValue=n,i.constant=!1,i.externalBuffer=null,this.setAccessor(this.settings),!0}_checkExternalBuffer(e){let{value:t}=e;if(!ArrayBuffer.isView(t))throw Error(`Attribute ${this.id} value is not TypedArray`);let i=this.settings.defaultType,r=!1;if(this.doublePrecision&&(r=t.BYTES_PER_ELEMENT<4),r)throw Error(`Attribute ${this.id} does not support ${t.constructor.name}`);t instanceof i||!this.settings.normalized||"normalized"in e||tU.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(e){switch(this.settings.type){case"snorm8":return new Float32Array(e).map(e=>(e+128)/255*2-1);case"snorm16":return new Float32Array(e).map(e=>(e+32768)/65535*2-1);case"unorm8":return new Float32Array(e).map(e=>e/255);case"unorm16":return new Float32Array(e).map(e=>e/65535);default:return e}}_normalizeValue(e,t,i){let{defaultValue:r,size:n}=this.settings;if(Number.isFinite(e))return t[i]=e,t;if(!e){let e=n;for(;--e>=0;)t[i+e]=r[e];return t}switch(n){case 4:t[i+3]=Number.isFinite(e[3])?e[3]:r[3];case 3:t[i+2]=Number.isFinite(e[2])?e[2]:r[2];case 2:t[i+1]=Number.isFinite(e[1])?e[1]:r[1];case 1:t[i+0]=Number.isFinite(e[0])?e[0]:r[0];break;default:let s=n;for(;--s>=0;)t[i+s]=Number.isFinite(e[s])?e[s]:r[s]}return t}_areValuesEqual(e,t){if(!e||!t)return!1;let{size:i}=this;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}_createBuffer(e){this._buffer&&this._buffer.destroy();let{isIndexed:t,type:i}=this.settings;return this._buffer=this.device.createBuffer({...this._buffer?.props,id:this.id,usage:(t?o1.Buffer.INDEX:o1.Buffer.VERTEX)|o1.Buffer.COPY_DST,indexType:t?i:void 0,byteLength:e}),this._buffer}}let ll=[],lc=[];function lu(e,t=0,i=1/0){let r=ll,n={index:-1,data:e,target:[]};return e?"function"==typeof e[Symbol.iterator]?r=e:e.length>0&&(lc.length=e.length,r=lc):r=ll,(t>0||Number.isFinite(i))&&(r=(Array.isArray(r)?r:Array.from(r)).slice(t,i),n.index=t-1),{iterable:r,objectInfo:n}}function lh(e){return e&&e[Symbol.asyncIterator]}let ld=[],lp=[[0,1/0]],lf={interpolation:{duration:0,easing:e=>e},spring:{stiffness:.05,damping:.5}};function lg(e,t){if(!e)return null;Number.isFinite(e)&&(e={type:"interpolation",duration:e});let i=e.type||"interpolation";return{...lf[i],...t,...e,type:i}}class lm extends la{constructor(e,t){super(e,t,{startIndices:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:lp}),this.constant=!1,this.settings.update=t.update||(t.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(e){this.state.startIndices=e}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:e=!1}={}){let t=this.state.needsRedraw;return this.state.needsRedraw=t&&!e,t}layoutChanged(){return this.state.layoutChanged}setAccessor(e){var t,i;(t=this.state).layoutChanged||(i=this.getAccessor(),t.layoutChanged=e.type!==i.type||e.size!==i.size||ls(e)!==ls(i)||(e.offset||0)!==(i.offset||0)),super.setAccessor(e)}getUpdateTriggers(){let{accessor:e}=this.settings;return[this.id].concat("function"!=typeof e&&e||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(e){if(!e||!this.supportsTransition())return null;let{accessor:t}=this.settings,i=this.settings.transition;return lg(Array.isArray(t)?e[t.find(t=>e[t])]:e[t],i)}setNeedsUpdate(e=this.id,t){if(this.state.needsUpdate=this.state.needsUpdate||e,this.setNeedsRedraw(e),t){let{startRow:e=0,endRow:i=1/0}=t;this.state.updateRanges=function(e,t){if(e===lp||(t[0]<0&&(t[0]=0),t[0]>=t[1]))return e;let i=[],r=e.length,n=0;for(let s=0;s<r;s++){let r=e[s];r[1]<t[0]?(i.push(r),n=s+1):r[0]>t[1]?i.push(r):t=[Math.min(r[0],t[0]),Math.max(r[1],t[1])]}return i.splice(n,0,t),i}(this.state.updateRanges,[e,i])}else this.state.updateRanges=lp}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=ld}setNeedsRedraw(e=this.id){this.state.needsRedraw=this.state.needsRedraw||e}allocate(e){let{state:t,settings:i}=this;return!i.noAlloc&&!!i.update&&(super.allocate(e,t.updateRanges!==lp),!0)}updateBuffer({numInstances:e,data:t,props:i,context:r}){if(!this.needsUpdate())return!1;let{state:{updateRanges:n},settings:{update:s,noAlloc:o}}=this,a=!0;if(s){for(let[o,a]of n)s.call(r,this,{data:t,startRow:o,endRow:a,props:i,numInstances:e});if(this.value)if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset)this.constant?this.setConstantValue(r,this.value):this.setData({value:this.value,constant:this.constant}),this.constant=!1;else for(let[t,i]of n){let r=Number.isFinite(t)?this.getVertexOffset(t):0,n=Number.isFinite(i)?this.getVertexOffset(i):o||!Number.isFinite(e)?this.value.length:e*this.size;super.updateSubBuffer({startOffset:r,endOffset:n})}this._checkAttributeArray()}else a=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),a}setConstantValue(e,t){if(void 0===t||"function"==typeof t)return!1;let i=this.settings.transform&&e?this.settings.transform.call(e,t):t;return"webgpu"===this.device.type?this.setConstantBufferValue(i,this.numInstances):(this.setData({constant:!0,value:i})&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0)}setConstantBufferValue(e,t){let i=this.settings.defaultType,r=this._normalizeValue(e,new i(this.size),0);if(this._hasConstantBufferValue(r,t))return this.constant=!1,this.clearNeedsUpdate(),!1;let n=new i(Math.max(t,1)*this.size);for(let e=0;e<n.length;e+=this.size)n.set(r,e);let s=this.setData({value:n});return this.constant=!1,this.clearNeedsUpdate(),s&&this.setNeedsRedraw(),s}_hasConstantBufferValue(e,t){let i=this.value,r=Math.max(t,1)*this.size;if(!ArrayBuffer.isView(i)||i.length!==r||i.length%this.size!=0)return!1;for(let t=0;t<i.length;t+=this.size)for(let r=0;r<this.size;r++)if(i[t+r]!==e[r])return!1;return!0}setExternalBuffer(e){let{state:t}=this;return e?(this.clearNeedsUpdate(),t.lastExternalBuffer===e||(t.lastExternalBuffer=e,this.setNeedsRedraw(),this.setData(e),!0)):(t.lastExternalBuffer=null,!1)}setBinaryValue(e,t=null){let{state:i,settings:r}=this;if(!e)return i.binaryValue=null,i.binaryAccessor=null,!1;if(r.noAlloc)return!1;if(i.binaryValue===e)return this.clearNeedsUpdate(),!0;if(i.binaryValue=e,this.setNeedsRedraw(),r.transform||t!==this.startIndices){ArrayBuffer.isView(e)&&(e={value:e});let n=e;os(ArrayBuffer.isView(n.value),`invalid ${r.accessor}`);let s=!!n.size&&n.size!==this.size;return i.binaryAccessor=function(e,t){let{size:i,stride:r,offset:n,startIndices:s,nested:o}=t,a=e.BYTES_PER_ELEMENT,l=r?r/a:i,c=n?n/a:0,u=Math.floor((e.length-c)/l);return(t,{index:r,target:n})=>{let a;if(!s){let t=r*l+c;for(let r=0;r<i;r++)n[r]=e[t+r];return n}let h=s[r],d=s[r+1]||u;if(o){a=Array(d-h);for(let t=h;t<d;t++){let r=t*l+c;n=Array(i);for(let t=0;t<i;t++)n[t]=e[r+t];a[t-h]=n}}else if(l===i)a=e.subarray(h*i+c,d*i+c);else{a=new e.constructor((d-h)*i);let t=0;for(let r=h;r<d;r++){let n=r*l+c;for(let r=0;r<i;r++)a[t++]=e[n+r]}}return a}}(n.value,{size:n.size||this.size,stride:n.stride,offset:n.offset,startIndices:t,nested:s}),!1}return this.clearNeedsUpdate(),this.setData(e),!0}getVertexOffset(e){let{startIndices:t}=this;return(t?e<t.length?t[e]:this.numInstances:e)*this.size}getValue(){let e=this.settings.shaderAttributes,t=super.getValue();if(!e)return t;for(let i in e)Object.assign(t,super.getValue(i,e[i]));return t}getBufferLayout(e){this.state.layoutChanged=!1;let t=this.settings.shaderAttributes,i=super._getBufferLayout(),{stepMode:r}=this.settings;if("dynamic"===r?i.stepMode=e?e.isInstanced?"instance":"vertex":"instance":i.stepMode=r??"vertex",!t)return i;for(let e in t){let r=super._getBufferLayout(e,t[e]);i.attributes.push(...r.attributes)}return i}_autoUpdater(e,{data:t,startRow:i,endRow:r,props:n,numInstances:s}){let{settings:o,state:a,value:l,size:c,startIndices:u}=e,{accessor:h,transform:d}=o,p=a.binaryAccessor||("function"==typeof h?h:n[h]);os("function"==typeof p,`accessor "${h}" is not a function`);let f=e.getVertexOffset(i),{iterable:g,objectInfo:m}=lu(t,i,r);for(let t of g){m.index++;let i=p(t,m);if(d&&(i=d.call(this,i)),u){let t=(m.index<u.length-1?u[m.index+1]:s)-u[m.index];if(i&&Array.isArray(i[0])){let t=f;for(let r of i)e._normalizeValue(r,l,t),t+=c}else i&&i.length>c?l.set(i,f):(e._normalizeValue(i,m.target,0),function({target:e,source:t,start:i=0,count:r=1}){let n=t.length,s=r*n,o=0;for(let r=i;o<n;o++)e[r++]=t[o];for(;o<s;)o<s-o?(e.copyWithin(i+o,i,i+o),o*=2):(e.copyWithin(i+o,i,i+s-o),o=s)}({target:l,source:m.target,start:f,count:t}));f+=t*c}else e._normalizeValue(i,l,f),f+=c}}_validateAttributeUpdaters(){let{settings:e}=this;if(!(e.noAlloc||"function"==typeof e.update))throw Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){let{value:e}=this,t=Math.min(4,this.size);if(e&&e.length>=t){let i=!0;switch(t){case 4:i=i&&Number.isFinite(e[3]);case 3:i=i&&Number.isFinite(e[2]);case 2:i=i&&Number.isFinite(e[1]);case 1:i=i&&Number.isFinite(e[0]);break;default:i=!1}if(!i)throw Error(`Illegal attribute generated for ${this.id}`)}}}let lv=`\
out vec4 transform_output;
void main() {
  transform_output = vec4(0);
}`,l_=`#version 300 es
${lv}`;var ly=e.i(96204),lb=e.i(88396),lw=e.i(49494),lx=e.i(81905);class lP extends lx.Resource{get[Symbol.toStringTag](){return"ComputePipeline"}hash="";shaderLayout;constructor(e,t){super(e,t,lP.defaultProps),this.shaderLayout=t.shaderLayout}static defaultProps={...lx.Resource.defaultProps,shader:void 0,entryPoint:void 0,constants:{},shaderLayout:void 0}}var lC=e.i(74366);class lM{static defaultProps={...lw.RenderPipeline.defaultProps};static getDefaultPipelineFactory(e){let t=e.getModuleData("@luma.gl/core");return t.defaultPipelineFactory||=new lM(e),t.defaultPipelineFactory}device;_hashCounter=0;_hashes={};_renderPipelineCache={};_computePipelineCache={};_sharedRenderPipelineCache={};get[Symbol.toStringTag](){return"PipelineFactory"}toString(){return`PipelineFactory(${this.device.id})`}constructor(e){this.device=e}createRenderPipeline(e){if(!this.device.props._cachePipelines)return this.device.createRenderPipeline(e);let t={...lw.RenderPipeline.defaultProps,...e},i=this._renderPipelineCache,r=this._hashRenderPipeline(t),n=i[r]?.resource;if(n)i[r].useCount++,this.device.props.debugFactories&&eY.log.log(3,`${this}: ${i[r].resource} reused, count=${i[r].useCount}, (id=${e.id})`)();else{let e="webgl"===this.device.type&&this.device.props._sharePipelines?this.createSharedRenderPipeline(t):void 0;(n=this.device.createRenderPipeline({...t,id:t.id?`${t.id}-cached`:(0,lC.uid)("unnamed-cached"),_sharedRenderPipeline:e})).hash=r,i[r]={resource:n,useCount:1},this.device.props.debugFactories&&eY.log.log(3,`${this}: ${n} created, count=${i[r].useCount}`)()}return n}createComputePipeline(e){if(!this.device.props._cachePipelines)return this.device.createComputePipeline(e);let t={...lP.defaultProps,...e},i=this._computePipelineCache,r=this._hashComputePipeline(t),n=i[r]?.resource;return n?(i[r].useCount++,this.device.props.debugFactories&&eY.log.log(3,`${this}: ${i[r].resource} reused, count=${i[r].useCount}, (id=${e.id})`)()):((n=this.device.createComputePipeline({...t,id:t.id?`${t.id}-cached`:void 0})).hash=r,i[r]={resource:n,useCount:1},this.device.props.debugFactories&&eY.log.log(3,`${this}: ${n} created, count=${i[r].useCount}`)()),n}release(e){if(!this.device.props._cachePipelines)return void e.destroy();let t=this._getCache(e),i=e.hash;t[i].useCount--,0===t[i].useCount?(this._destroyPipeline(e),this.device.props.debugFactories&&eY.log.log(3,`${this}: ${e} released and destroyed`)()):t[i].useCount<0?(eY.log.error(`${this}: ${e} released, useCount < 0, resetting`)(),t[i].useCount=0):this.device.props.debugFactories&&eY.log.log(3,`${this}: ${e} released, count=${t[i].useCount}`)()}createSharedRenderPipeline(e){let t=this._hashSharedRenderPipeline(e),i=this._sharedRenderPipelineCache[t];return i||(i={resource:this.device._createSharedRenderPipelineWebGL(e),useCount:0},this._sharedRenderPipelineCache[t]=i),i.useCount++,i.resource}releaseSharedRenderPipeline(e){if(!e.sharedRenderPipeline)return;let t=this._hashSharedRenderPipeline(e.sharedRenderPipeline.props),i=this._sharedRenderPipelineCache[t];i&&(i.useCount--,0===i.useCount&&(i.resource.destroy(),delete this._sharedRenderPipelineCache[t]))}_destroyPipeline(e){let t=this._getCache(e);return!!this.device.props._destroyPipelines&&(delete t[e.hash],e.destroy(),e instanceof lw.RenderPipeline&&this.releaseSharedRenderPipeline(e),!0)}_getCache(e){let t;if(e instanceof lP&&(t=this._computePipelineCache),e instanceof lw.RenderPipeline&&(t=this._renderPipelineCache),!t)throw Error(`${this}`);if(!t[e.hash])throw Error(`${this}: ${e} matched incorrect entry`);return t}_hashComputePipeline(e){let{type:t}=this.device,i=this._getHash(e.shader.source),r=this._getHash(JSON.stringify(e.shaderLayout));return`${t}/C/${i}SL${r}`}_hashRenderPipeline(e){let t=e.vs?this._getHash(e.vs.source):0,i=e.fs?this._getHash(e.fs.source):0,r=this._getWebGLVaryingHash(e),n=this._getHash(JSON.stringify(e.shaderLayout)),s=this._getHash(JSON.stringify(e.bufferLayout)),{type:o}=this.device;if("webgl"===o){let a=this._getHash(JSON.stringify(e.parameters));return`${o}/R/${t}/${i}V${r}T${e.topology}P${a}SL${n}BL${s}`}{let a=this._getHash(JSON.stringify({vertexEntryPoint:e.vertexEntryPoint,fragmentEntryPoint:e.fragmentEntryPoint})),l=this._getHash(JSON.stringify(e.parameters)),c=this._getWebGPUAttachmentHash(e);return`${o}/R/${t}/${i}V${r}T${e.topology}EP${a}P${l}SL${n}BL${s}A${c}`}}_hashSharedRenderPipeline(e){let t=e.vs?this._getHash(e.vs.source):0,i=e.fs?this._getHash(e.fs.source):0,r=this._getWebGLVaryingHash(e);return`webgl/S/${t}/${i}V${r}`}_getHash(e){return void 0===this._hashes[e]&&(this._hashes[e]=this._hashCounter++),this._hashes[e]}_getWebGLVaryingHash(e){let{varyings:t=[],bufferMode:i=null}=e;return this._getHash(JSON.stringify({varyings:t,bufferMode:i}))}_getWebGPUAttachmentHash(e){let t=e.colorAttachmentFormats??[this.device.preferredColorFormat],i=e.parameters?.depthWriteEnabled?e.depthStencilAttachmentFormat||this.device.preferredDepthFormat:null;return this._getHash(JSON.stringify({colorAttachmentFormats:t,depthStencilAttachmentFormat:i}))}}var lE=e.i(45453);class lS{static defaultProps={...lE.Shader.defaultProps};static getDefaultShaderFactory(e){let t=e.getModuleData("@luma.gl/core");return t.defaultShaderFactory||=new lS(e),t.defaultShaderFactory}device;_cache={};get[Symbol.toStringTag](){return"ShaderFactory"}toString(){return`${this[Symbol.toStringTag]}(${this.device.id})`}constructor(e){this.device=e}createShader(e){if(!this.device.props._cacheShaders)return this.device.createShader(e);let t=this._hashShader(e),i=this._cache[t];if(i)i.useCount++,this.device.props.debugFactories&&eY.log.log(3,`${this}: Reusing shader ${i.resource.id} count=${i.useCount}`)();else{let r=this.device.createShader({...e,id:e.id?`${e.id}-cached`:void 0});this._cache[t]=i={resource:r,useCount:1},this.device.props.debugFactories&&eY.log.log(3,`${this}: Created new shader ${r.id}`)()}return i.resource}release(e){if(!this.device.props._cacheShaders)return void e.destroy();let t=this._hashShader(e),i=this._cache[t];if(i)if(i.useCount--,0===i.useCount)this.device.props._destroyShaders&&(delete this._cache[t],i.resource.destroy(),this.device.props.debugFactories&&eY.log.log(3,`${this}: Releasing shader ${e.id}, destroyed`)());else if(i.useCount<0)throw Error(`ShaderFactory: Shader ${e.id} released too many times`);else this.device.props.debugFactories&&eY.log.log(3,`${this}: Releasing shader ${e.id} count=${i.useCount}`)()}_hashShader(e){return`${e.stage}:${e.source}`}}var lL=e.i(85251);function lA(e,t){let i=(0,lL.resolveVariableShaderTypeAlias)(e),r=(0,lL.getVariableShaderTypeInfo)(i),n=/^mat(\d)x(\d)<.+>$/.exec(i);if(n){var s,o;let e=Number(n[1]),a=Number(n[2]),l=lO(a,i,r.type,t),c=(s=l.size,o=l.alignment,"std140"===t?4:(0,li.alignTo)(s,o));return{alignment:l.alignment,size:e*c,components:e*a,columns:e,rows:a,columnStride:c,shaderType:i,type:r.type}}let a=/^vec(\d)<.+>$/.exec(i);return a?lO(Number(a[1]),i,r.type,t):{alignment:1,size:1,components:1,columns:1,rows:1,columnStride:1,shaderType:i,type:r.type}}function lT(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function lR(e,t){var i;if("string"==typeof e)return lA(e,t).alignment;if(Array.isArray(e)){let i=lR(e[0],t);return lk(t)?Math.max(i,4):i}let r=1;for(let i of Object.values(e))r=Math.max(r,lR(i,t));return"std140"===(i=t)||"wgsl-uniform"===i?Math.max(r,4):r}function lO(e,t,i,r){return{alignment:2===e?2:4,size:3===e?3:e,components:e,columns:1,rows:e,columnStride:3===e?3:e,shaderType:t,type:i}}function lk(e){return"std140"===e||"wgsl-uniform"===e}function lI(e){return Array.isArray(e)?0===e.length||"number"==typeof e[0]:ArrayBuffer.isView(e)&&!(e instanceof DataView)}class lz{name;uniforms={};modifiedUniforms={};modified=!0;bindingLayout={};needsRedraw="initialized";constructor(e){if(this.name=e?.name||"unnamed",e?.name&&e?.shaderLayout){const t=e?.shaderLayout.bindings?.find(t=>"uniform"===t.type&&t.name===e?.name);if(!t)throw Error(e?.name);for(const e of t.uniforms||[])this.bindingLayout[e.name]=e}}setUniforms(e){for(let[t,i]of Object.entries(e))this._setUniform(t,i),this.needsRedraw||this.setNeedsRedraw(`${this.name}.${t}=${i}`)}setNeedsRedraw(e){this.needsRedraw=this.needsRedraw||e}getAllUniforms(){return this.modifiedUniforms={},this.needsRedraw=!1,this.uniforms||{}}_setUniform(e,t){!function(e,t,i=16){if(e===t)return!0;if(!lI(e)||!lI(t)||e.length!==t.length)return!1;let r=Math.min(i,128);if(e.length>r)return!1;for(let i=0;i<e.length;++i)if(t[i]!==e[i])return!1;return!0}(this.uniforms[e],t)&&(this.uniforms[e]=lI(t)?t.slice():t,this.modifiedUniforms[e]=!0,this.modified=!0)}}var lj=e.i(53746);class lD{layout;constructor(e){this.layout=e}has(e){return!!this.layout.fields[e]}get(e){let t=this.layout.fields[e];return t?{offset:t.offset,size:t.size}:void 0}getFlatUniformValues(e){let t={};for(let[i,r]of Object.entries(e)){let e=this.layout.uniformTypes[i];e?this._flattenCompositeValue(t,i,e,r):this.layout.fields[i]&&(t[i]=r)}return t}getData(e){let t=(0,lj.getScratchArrayBuffer)(this.layout.byteLength);new Uint8Array(t,0,this.layout.byteLength).fill(0);let i={i32:new Int32Array(t),u32:new Uint32Array(t),f32:new Float32Array(t),f16:new Uint16Array(t)};for(let[t,r]of Object.entries(this.getFlatUniformValues(e)))this._writeLeafValue(i,t,r);return new Uint8Array(t,0,this.layout.byteLength)}_flattenCompositeValue(e,t,i,r){if(void 0!==r){var n;if("string"==typeof i||this.layout.fields[t]){e[t]=r;return}if(Array.isArray(i)){let n=i[0],s=i[1];if(Array.isArray(n))throw Error(`Nested arrays are not supported for ${t}`);if("string"==typeof n&&lI(r))return void this._flattenPackedArray(e,t,n,s,r);if(!Array.isArray(r))return void eY.log.warn(`Unsupported uniform array value for ${t}:`,r)();for(let i=0;i<Math.min(r.length,s);i++){let s=r[i];void 0!==s&&this._flattenCompositeValue(e,`${t}[${i}]`,n,s)}return}if(lT(i)&&(n=r)&&"object"==typeof n&&!Array.isArray(n)&&!ArrayBuffer.isView(n)){for(let[n,s]of Object.entries(r)){if(void 0===s)continue;let r=`${t}.${n}`;this._flattenCompositeValue(e,r,i[n],s)}return}eY.log.warn(`Unsupported uniform value for ${t}:`,r)()}}_flattenPackedArray(e,t,i,r,n){let s=lA(i,this.layout.layout).components;for(let i=0;i<r;i++){var o,a,l;let r=i*s;if(r>=n.length)break;1===s?e[`${t}[${i}]`]=Number(n[r]):e[`${t}[${i}]`]=(o=n,a=r,l=r+s,Array.prototype.slice.call(o,a,l))}}_writeLeafValue(e,t,i){let r=this.layout.fields[t];if(!r)return void eY.log.warn(`Uniform ${t} not found in layout`)();let{type:n,components:s,columns:o,rows:a,offset:l,columnStride:c}=r,u=e[n];if(1===s){u[l]=Number(i);return}if(1===o){for(let e=0;e<s;e++)u[l+e]=Number(i[e]??0);return}let h=0;for(let e=0;e<o;e++){let t=l+e*c;for(let e=0;e<a;e++)u[t+e]=Number(i[h++]??0)}}}class lF{device;uniformBlocks=new Map;shaderBlockLayouts=new Map;shaderBlockWriters=new Map;uniformBuffers=new Map;constructor(e,t){for(const[i,r]of(this.device=e,Object.entries(t))){const t=function(e,t={}){let i={...e},r=t.layout??"std140",n={},s=0;for(let[e,t]of Object.entries(i))s=function e(t,i,r,n,s){if("string"==typeof r){let e=lA(r,s),o=(0,li.alignTo)(n,e.alignment);return t[i]={offset:o,...e},o+e.size}if(Array.isArray(r)){if(Array.isArray(r[0]))throw Error(`Nested arrays are not supported for ${i}`);let o=r[0],a=r[1],l=function e(t,i){var r,n,s;return r=function t(i,r){if("string"==typeof i)return lA(i,r).size;if(Array.isArray(i)){let t=i[0],n=i[1];if(Array.isArray(t))throw Error("Nested arrays are not supported");return e(t,r)*n}let n=0;for(let e of Object.values(i))n=(0,li.alignTo)(n,lR(e,r))+t(e,r);return(0,li.alignTo)(n,lR(i,r))}(t,i),n=lR(t,i),s=i,(0,li.alignTo)(r,lk(s)?4:n)}(o,s),c=(0,li.alignTo)(n,lR(r,s));for(let r=0;r<a;r++)e(t,`${i}[${r}]`,o,c+r*l,s);return c+l*a}if(lT(r)){let o=lR(r,s),a=(0,li.alignTo)(n,o);for(let[n,o]of Object.entries(r))a=e(t,`${i}.${n}`,o,a,s);return(0,li.alignTo)(a,o)}throw Error(`Unsupported CompositeShaderType for ${i}`)}(n,e,t,s,r);return s=(0,li.alignTo)(s,lR(i,r)),{layout:r,byteLength:4*s,uniformTypes:i,fields:n}}(r.uniformTypes??{},{layout:r.layout??function(e){return"webgpu"===e.type?"wgsl-uniform":"std140"}(e)}),n=new lD(t);this.shaderBlockLayouts.set(i,t),this.shaderBlockWriters.set(i,n);const s=new lz({name:i});s.setUniforms(n.getFlatUniformValues(r.defaultUniforms||{})),this.uniformBlocks.set(i,s)}}destroy(){for(let e of this.uniformBuffers.values())e.destroy()}setUniforms(e){for(let[t,i]of Object.entries(e)){let e=this.shaderBlockWriters.get(t),r=e?.getFlatUniformValues(i||{});this.uniformBlocks.get(t)?.setUniforms(r||{})}this.updateUniformBuffers()}getUniformBufferByteLength(e){return Math.max(this.shaderBlockLayouts.get(e)?.byteLength||0,1024)}getUniformBufferData(e){let t=this.uniformBlocks.get(e)?.getAllUniforms()||{},i=this.shaderBlockWriters.get(e);return i?.getData(t)||new Uint8Array(0)}createUniformBuffer(e,t){t&&this.setUniforms(t);let i=this.getUniformBufferByteLength(e),r=this.device.createBuffer({usage:o1.Buffer.UNIFORM|o1.Buffer.COPY_DST,byteLength:i}),n=this.getUniformBufferData(e);return r.write(n),r}getManagedUniformBuffer(e){if(!this.uniformBuffers.get(e)){let t=this.getUniformBufferByteLength(e),i=this.device.createBuffer({usage:o1.Buffer.UNIFORM|o1.Buffer.COPY_DST,byteLength:t});this.uniformBuffers.set(e,i)}return this.uniformBuffers.get(e)}updateUniformBuffers(){let e=!1;for(let t of this.uniformBlocks.keys()){let i=this.updateUniformBuffer(t);e||=i}return e&&eY.log.log(3,`UniformStore.updateUniformBuffers(): ${e}`)(),e}updateUniformBuffer(e){let t=this.uniformBlocks.get(e),i=this.uniformBuffers.get(e),r=!1;if(i&&t?.needsRedraw){r||=t.needsRedraw;let n=this.getUniformBufferData(e);i=this.uniformBuffers.get(e),i?.write(n);let s=this.uniformBlocks.get(e)?.getAllUniforms();eY.log.log(4,`Writing to uniform buffer ${String(e)}`,n,s)()}return r}}var lN=e.i(65880),lU=e.i(66234),lB=e.i(3311);let l$={};function lV(e="id"){l$[e]=l$[e]||1;let t=l$[e]++;return`${e}-${t}`}class lW{id;userData={};topology;bufferLayout=[];vertexCount;indices;attributes;constructor(e){if(this.id=e.id||lV("geometry"),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&o1.Buffer.INDEX))throw Error("Index buffer must have INDEX usage")}destroy(){for(let e of(this.indices?.destroy(),Object.values(this.attributes)))e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}}let lG="__debugFramebufferState";function lH(e,t){if(!e)return t;let i=Number.parseInt(e,10);return Number.isFinite(i)?i:t}class lq{bufferLayouts;constructor(e){this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(t=>t.name===e)||null}getAttributeNamesForBuffer(e){return e.attributes?e.attributes?.map(e=>e.attribute):[e.name]}mergeBufferLayouts(e,t){let i=[...e];for(let e of t){let t=i.findIndex(t=>t.name===e.name);t<0?i.push(e):i[t]=e}return i}getBufferIndex(e){let t=this.bufferLayouts.findIndex(t=>t.name===e);return -1===t&&eY.log.warn(`BufferLayout: Missing buffer for "${e}".`)(),t}}function lZ(e,t){let i=1/0;for(let r of e){let e=t[r];void 0!==e&&(i=Math.min(i,e))}return i}function lY(e,t){if(!e||!t.some(e=>e.bindingLayout?.length))return e;let i={...e,bindings:e.bindings.map(e=>({...e}))};for(let r of("attributes"in(e||{})&&(i.attributes=e?.attributes||[]),t))for(let e of r.bindingLayout||[])for(let t of function(e){let t=new Set([e,`${e}Uniforms`]);return e.endsWith("Uniforms")||t.add(`${e}Sampler`),[...t]}(e.name)){let r=i.bindings.find(e=>e.name===t);r?.group===0&&(r.group=e.group)}return i}class lK{options={disableWarnings:!1};modules;moduleUniforms;moduleBindings;constructor(e,t){for(const i of(Object.assign(this.options,t),ei(Object.values(e).filter(l1))))e[i.name]=i;for(const[t,i]of(eY.log.log(1,"Creating ShaderInputs with modules",Object.keys(e))(),this.modules=e,this.moduleUniforms={},this.moduleBindings={},Object.entries(e)))i&&(this._addModule(i),i.name&&t!==i.name&&!this.options.disableWarnings&&eY.log.warn(`Module name: ${t} vs ${i.name}`)())}destroy(){}setProps(e){for(let t of Object.keys(e)){let i=e[t]||{},r=this.modules[t];if(r){let e=this.moduleUniforms[t],n=this.moduleBindings[t],{uniforms:s,bindings:o}=function(e,t={}){let i={bindings:{},uniforms:{}};return Object.keys(e).forEach(r=>{var n,s,o;let a=e[r];Object.prototype.hasOwnProperty.call(t,r)||ArrayBuffer.isView(o=s=n=a)&&!(o instanceof DataView)||Array.isArray(s)&&(0===s.length||"number"==typeof s[0])||"number"==typeof n||"boolean"==typeof n?i.uniforms[r]=a:i.bindings[r]=a}),i}(r.getUniforms?.(i,e)||i,r.uniformTypes);this.moduleUniforms[t]=lX(e,s,r.uniformTypes),this.moduleBindings[t]={...n,...o}}else this.options.disableWarnings||eY.log.warn(`Module ${t} not found`)()}}getModules(){return Object.values(this.modules)}getUniformValues(){return this.moduleUniforms}getBindingValues(){let e={};for(let t of Object.values(this.moduleBindings))Object.assign(e,t);return e}getDebugTable(){let e={};for(let[t,i]of Object.entries(this.moduleUniforms))for(let[r,n]of Object.entries(i))e[`${t}.${r}`]={type:this.modules[t].uniformTypes?.[r],value:String(n)};return e}_addModule(e){let t=e.name;this.moduleUniforms[t]=lX({},e.defaultUniforms||{},e.uniformTypes),this.moduleBindings[t]={}}}function lX(e={},t={},i={}){let r={...e};for(let[n,s]of Object.entries(t))void 0!==s&&(r[n]=function e(t,i,r){if(!r||"string"==typeof r)return lJ(i);if(Array.isArray(r)){if(lQ(i)||!Array.isArray(i))return lJ(i);let n=Array.isArray(t)&&!lQ(t)?[...t]:[],s=n.slice();for(let t=0;t<i.length;t++){let o=i[t];void 0!==o&&(s[t]=e(n[t],o,r[0]))}return s}if(!l0(i))return lJ(i);let n=l0(t)?t:{},s={...n};for(let[t,o]of Object.entries(i))void 0!==o&&(s[t]=e(n[t],o,r[t]));return s}(e[n],s,i[n]));return r}function lJ(e){return ArrayBuffer.isView(e)?Array.prototype.slice.call(e):Array.isArray(e)?lQ(e)?e.slice():e.map(e=>void 0===e?void 0:lJ(e)):l0(e)?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,void 0===t?void 0:lJ(t)])):e}function lQ(e){return ArrayBuffer.isView(e)||Array.isArray(e)&&(0===e.length||"number"==typeof e[0])}function l0(e){return!!e&&"object"==typeof e&&!Array.isArray(e)&&!ArrayBuffer.isView(e)}function l1(e){return!!e?.dependencies}var l2=e.i(60457);let l3={"+X":0,"-X":1,"+Y":2,"-Y":3,"+Z":4,"-Z":5};function l4(e){return e?Array.isArray(e)?e[0]??null:e:null}function l6(e){if((0,l2.isExternalImage)(e))return(0,l2.getExternalImageSize)(e);if("object"==typeof e&&"width"in e&&"height"in e)return{width:e.width,height:e.height};throw Error("Unsupported mip-level data")}function l5(e){let{textureFormat:t,format:i}=e;if(t&&i&&t!==i)throw Error(`Conflicting texture formats "${t}" and "${i}" provided for the same mip level`);return t??i}function l8(e){let t=l3[e];if(void 0===t)throw Error(`Invalid cube face: ${e}`);return t}function l9(e){throw Error("setTexture1DData not supported in WebGL.")}function l7(e,t,i,r){let n=Array.isArray(t)?t:[t],s=[];for(let t=0;t<n.length;t++){let o=n[t];if((0,l2.isExternalImage)(o))s.push({type:"external-image",image:o,z:e,mipLevel:t});else if("object"==typeof o&&null!==o&&"data"in o&&"width"in o&&"height"in o)s.push({type:"texture-data",data:o,textureFormat:l5(o),z:e,mipLevel:t});else if(ArrayBuffer.isView(o)&&i)s.push({type:"texture-data",data:{data:o,width:Math.max(1,i.width>>t),height:Math.max(1,i.height>>t),...r?{format:r}:{}},textureFormat:r,z:e,mipLevel:t});else throw Error("Unsupported 2D mip-level payload")}return s}function ce(e){let t=[];for(let i=0;i<e.length;i++)t.push(...l7(i,e[i]));return t}function ct(e){let t=[];for(let i=0;i<e.length;i++)t.push(...l7(i,e[i]));return t}function ci(e){let t=[];for(let[i,r]of Object.entries(e)){let e=l8(i);t.push(...l7(e,r))}return t}function cr(e){let t=[];return e.forEach((e,i)=>{for(let[r,n]of Object.entries(e)){let e=6*i+l8(r);t.push(...l7(e,n))}}),t}class cn{device;id;props;_texture=null;_sampler=null;_view=null;ready;isReady=!1;destroyed=!1;resolveReady=()=>{};rejectReady=()=>{};get texture(){if(!this._texture)throw Error("Texture not initialized yet");return this._texture}get sampler(){if(!this._sampler)throw Error("Sampler not initialized yet");return this._sampler}get view(){if(!this._view)throw Error("View not initialized yet");return this._view}get[Symbol.toStringTag](){return"DynamicTexture"}toString(){let e=this._texture?.width??this.props.width??"?",t=this._texture?.height??this.props.height??"?";return`DynamicTexture:"${this.id}":${e}x${t}px:(${this.isReady?"ready":"loading..."})`}constructor(e,t){this.device=e;const i=lV("dynamic-texture");this.props={...cn.defaultProps,id:i,...t,data:null},this.id=this.props.id,this.ready=new Promise((e,t)=>{this.resolveReady=e,this.rejectReady=t}),this.initAsync(t)}async initAsync(e){try{let t=await this._loadAllData(e);this._checkNotDestroyed();let i=t.data?function(e){if(!e.data)return[];let t=e.width&&e.height?{width:e.width,height:e.height}:void 0,i="format"in e?e.format:void 0;switch(e.dimension){case"1d":return l9(e.data);case"2d":return l7(0,e.data,t,i);case"3d":return ce(e.data);case"2d-array":return ct(e.data);case"cube":return ci(e.data);case"cube-array":return cr(e.data);default:throw Error(`Unhandled dimension ${e.dimension}`)}}({...t,width:e.width,height:e.height,format:e.format}):[],r="format"in e&&void 0!==e.format,n="usage"in e&&void 0!==e.usage,s=(()=>{if(this.props.width&&this.props.height)return{width:this.props.width,height:this.props.height};let e=function(e){let{dimension:t,data:i}=e;if(!i)return null;switch(t){case"1d":{let e=l4(i);if(!e)return null;let{width:t}=l6(e);return{width:t,height:1}}case"2d":{let e=l4(i);return e?l6(e):null}case"3d":case"2d-array":{if(!Array.isArray(i)||0===i.length)return null;let e=l4(i[0]);return e?l6(e):null}case"cube":{let e=Object.keys(i)[0]??null;if(!e)return null;let t=l4(i[e]);return t?l6(t):null}case"cube-array":{if(!Array.isArray(i)||0===i.length)return null;let e=i[0],t=Object.keys(e)[0]??null;if(!t)return null;let r=l4(e[t]);return r?l6(r):null}default:return null}}(t);return e||{width:this.props.width||1,height:this.props.height||1}})();if(!s||s.width<=0||s.height<=0)throw Error(`${this} size could not be determined or was zero`);let o=function(e,t,i,r){if(0===t.length)return{subresources:t,mipLevels:1,format:r.format,hasExplicitMipChain:!1};let n=new Map;for(let e of t){let t=n.get(e.z)??[];t.push(e),n.set(e.z,t)}let s=t.some(e=>e.mipLevel>0),o=r.format,a=1/0,l=[];for(let[t,r]of n){let n=[...r].sort((e,t)=>e.mipLevel-t.mipLevel),s=n[0];if(!s||0!==s.mipLevel)throw Error(`DynamicTexture: slice ${t} is missing mip level 0`);let c=co(e,s);if(c.width!==i.width||c.height!==i.height)throw Error(`DynamicTexture: slice ${t} base level dimensions ${c.width}x${c.height} do not match expected ${i.width}x${i.height}`);let u=cs(s);if(u){if(o&&o!==u)throw Error(`DynamicTexture: slice ${t} base level format "${u}" does not match texture format "${o}"`);o=u}let h=o&&e.isTextureFormatCompressed(o)?function(e,t,i,r){let{blockWidth:n=1,blockHeight:s=1}=e.getTextureFormatInfo(r),o=1;for(let e=1;;e++){let r=Math.max(1,t>>e),a=Math.max(1,i>>e);if(r<n||a<s)break;o++}return o}(e,c.width,c.height,o):e.getMipLevelCount(c.width,c.height),d=0;for(let t=0;t<n.length;t++){let i=n[t];if(!i||i.mipLevel!==t||t>=h)break;let r=co(e,i),s=Math.max(1,c.width>>t),a=Math.max(1,c.height>>t);if(r.width!==s||r.height!==a)break;let u=cs(i);if(u&&(o||(o=u),u!==o))break;d++,l.push(i)}a=Math.min(a,d)}let c=Number.isFinite(a)?Math.max(1,a):1;return{subresources:l.filter(e=>e.mipLevel<c),mipLevels:c,format:o,hasExplicitMipChain:s}}(this.device,i,s,{format:r?e.format:void 0}),a=o.format??this.props.format,l={...this.props,...s,format:a,mipLevels:1,data:void 0};this.device.isTextureFormatCompressed(a)&&!n&&(l.usage=o2.Texture.SAMPLE|o2.Texture.COPY_DST);let c=this.props.mipmaps&&!o.hasExplicitMipChain&&!this.device.isTextureFormatCompressed(a);if("webgpu"===this.device.type&&c){let e="3d"===this.props.dimension?o2.Texture.SAMPLE|o2.Texture.STORAGE|o2.Texture.COPY_DST|o2.Texture.COPY_SRC:o2.Texture.SAMPLE|o2.Texture.RENDER|o2.Texture.COPY_DST|o2.Texture.COPY_SRC;l.usage|=e}let u=this.device.getMipLevelCount(l.width,l.height),h=o.hasExplicitMipChain?o.mipLevels:"auto"===this.props.mipLevels?u:Math.max(1,Math.min(u,this.props.mipLevels??1)),d={...l,mipLevels:h};this._texture=this.device.createTexture(d),this._sampler=this.texture.sampler,this._view=this.texture.view,o.subresources.length&&this._setTextureSubresources(o.subresources),!this.props.mipmaps||o.hasExplicitMipChain||c||eY.log.warn(`${this} skipping auto-generated mipmaps for compressed texture format`)(),c&&this.generateMipmaps(),this.isReady=!0,this.resolveReady(this.texture),eY.log.info(0,`${this} created`)()}catch(t){let e=t instanceof Error?t:Error(String(t));this.rejectReady(e)}}destroy(){this._texture&&(this._texture.destroy(),this._texture=null,this._sampler=null,this._view=null),this.destroyed=!0}generateMipmaps(){"webgl"===this.device.type?this.texture.generateMipmapsWebGL():"webgpu"===this.device.type?this.device.generateMipmapsWebGPU(this.texture):eY.log.warn(`${this} mipmaps not supported on ${this.device.type}`)}setSampler(e={}){this._checkReady();let t=e instanceof lb.Sampler?e:this.device.createSampler(e);this.texture.setSampler(t),this._sampler=t}async readBuffer(e={}){this.isReady||await this.ready;let t=e.width??this.texture.width,i=e.height??this.texture.height,r=e.depthOrArrayLayers??this.texture.depth,n=this.texture.computeMemoryLayout({width:t,height:i,depthOrArrayLayers:r}),s=this.device.createBuffer({byteLength:n.byteLength,usage:o1.Buffer.COPY_DST|o1.Buffer.MAP_READ});this.texture.readBuffer({...e,width:t,height:i,depthOrArrayLayers:r},s);let o=this.device.createFence();return await o.signaled,o.destroy(),s}async readAsync(e={}){this.isReady||await this.ready;let t=e.width??this.texture.width,i=e.height??this.texture.height,r=e.depthOrArrayLayers??this.texture.depth,n=this.texture.computeMemoryLayout({width:t,height:i,depthOrArrayLayers:r}),s=await this.readBuffer(e),o=await s.readAsync(0,n.byteLength);return s.destroy(),o.buffer}resize(e){if(this._checkReady(),e.width===this.texture.width&&e.height===this.texture.height)return!1;let t=this.texture;return this._texture=t.clone(e),this._sampler=this.texture.sampler,this._view=this.texture.view,t.destroy(),eY.log.info(`${this} resized`),!0}getCubeFaceIndex(e){let t=l3[e];if(void 0===t)throw Error(`Invalid cube face: ${e}`);return t}getCubeArrayFaceIndex(e,t){return 6*e+this.getCubeFaceIndex(t)}setTexture1DData(e){if(this._checkReady(),"1d"!==this.texture.props.dimension)throw Error(`${this} is not 1d`);let t=l9(e);this._setTextureSubresources(t)}setTexture2DData(e,t=0){if(this._checkReady(),"2d"!==this.texture.props.dimension)throw Error(`${this} is not 2d`);let i=l7(t,e);this._setTextureSubresources(i)}setTexture3DData(e){if("3d"!==this.texture.props.dimension)throw Error(`${this} is not 3d`);let t=ce(e);this._setTextureSubresources(t)}setTextureArrayData(e){if("2d-array"!==this.texture.props.dimension)throw Error(`${this} is not 2d-array`);let t=ct(e);this._setTextureSubresources(t)}setTextureCubeData(e){if("cube"!==this.texture.props.dimension)throw Error(`${this} is not cube`);let t=ci(e);this._setTextureSubresources(t)}setTextureCubeArrayData(e){if("cube-array"!==this.texture.props.dimension)throw Error(`${this} is not cube-array`);let t=cr(e);this._setTextureSubresources(t)}_setTextureSubresources(e){for(let t of e){let{z:e,mipLevel:i}=t;switch(t.type){case"external-image":let{image:r,flipY:n}=t;this.texture.copyExternalImage({image:r,z:e,mipLevel:i,flipY:n});break;case"texture-data":let{data:s,textureFormat:o}=t;if(o&&o!==this.texture.format)throw Error(`${this} mip level ${i} uses format "${o}" but texture format is "${this.texture.format}"`);this.texture.writeData(s.data,{x:0,y:0,z:e,width:s.width,height:s.height,depthOrArrayLayers:1,mipLevel:i});break;default:throw Error("Unsupported 2D mip-level payload")}}}async _loadAllData(e){let t=await ca(e.data);return{dimension:e.dimension??"2d",data:t??null}}_checkNotDestroyed(){this.destroyed&&eY.log.warn(`${this} already destroyed`)}_checkReady(){this.isReady||eY.log.warn(`${this} Cannot perform this operation before ready`)}static defaultProps={...o2.Texture.defaultProps,dimension:"2d",data:null,mipmaps:!1}}function cs(e){if("texture-data"===e.type)return e.textureFormat??l5(e.data)}function co(e,t){switch(t.type){case"external-image":return e.getExternalImageSize(t.image);case"texture-data":return{width:t.data.width,height:t.data.height};default:throw Error("Unsupported texture subresource")}}async function ca(e){if(Array.isArray(e=await e))return await Promise.all(e.map(ca));if(e&&"object"==typeof e&&e.constructor===Object){let t=e,i=await Promise.all(Object.values(t).map(ca)),r=Object.keys(t),n={};for(let e=0;e<r.length;e++)n[r[e]]=i[e];return n}return e}let cl="render pipeline initialization failed";class cc{static defaultProps={...lw.RenderPipeline.defaultProps,source:void 0,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:eH.getDefaultShaderAssembler(),debugShaders:void 0,disableWarnings:void 0};device;id;source;vs;fs;pipelineFactory;shaderFactory;userData={};parameters;topology;bufferLayout;isInstanced=void 0;instanceCount=0;vertexCount;indexBuffer=null;bufferAttributes={};constantAttributes={};bindings={};vertexArray;transformFeedback=null;pipeline;shaderInputs;material=null;_uniformStore;_attributeInfos={};_gpuGeometry=null;props;_pipelineNeedsUpdate="newly created";_needsRedraw="initializing";_destroyed=!1;_lastDrawTimestamp=-1;_bindingTable=[];get[Symbol.toStringTag](){return"Model"}toString(){return`Model(${this.id})`}constructor(e,t){this.props={...cc.defaultProps,...t},t=this.props,this.id=t.id||lV("model"),this.device=e,Object.assign(this.userData,t.userData),this.material=t.material||null;const i=Object.fromEntries(this.props.modules?.map(e=>[e.name,e])||[]),r=t.shaderInputs||new lK(i,{disableWarnings:this.props.disableWarnings});this.setShaderInputs(r);const n=function(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,features:e.features}}(e),s=(this.props.modules?.length>0?this.props.modules:this.shaderInputs?.getModules())||[];if(this.props.shaderLayout=lY(this.props.shaderLayout,s)||null,"webgpu"===this.device.type&&this.props.source){const{source:t,getUniforms:i,bindingTable:r}=this.props.shaderAssembler.assembleWGSLShader({platformInfo:n,...this.props,modules:s});this.source=t,this._getModuleUniforms=i,this._bindingTable=r;const o=e.getShaderLayout?.(this.source);this.props.shaderLayout=lY(this.props.shaderLayout||o||null,s)||null}else{const{vs:e,fs:t,getUniforms:i}=this.props.shaderAssembler.assembleGLSLShaderPair({platformInfo:n,...this.props,modules:s});this.vs=e,this.fs=t,this._getModuleUniforms=i,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,t.geometry&&this.setGeometry(t.geometry),this.pipelineFactory=t.pipelineFactory||lM.getDefaultPipelineFactory(this.device),this.shaderFactory=t.shaderFactory||lS.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=e.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),"isInstanced"in t&&(this.isInstanced=t.isInstanced),t.instanceCount&&this.setInstanceCount(t.instanceCount),t.vertexCount&&this.setVertexCount(t.vertexCount),t.indexBuffer&&this.setIndexBuffer(t.indexBuffer),t.attributes&&this.setAttributes(t.attributes),t.constantAttributes&&this.setConstantAttributes(t.constantAttributes),t.bindings&&this.setBindings(t.bindings),t.transformFeedback&&(this.transformFeedback=t.transformFeedback)}destroy(){this._destroyed||(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),this._destroyed=!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw("contents of bound textures or buffers updated");let e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||=e}getBindingDebugTable(){return this._bindingTable}predraw(){this.updateShaderInputs(),this.pipeline=this._updatePipeline()}draw(e){let t,i=this._areBindingsLoading();if(i)return eY.log.info(2,`>>> DRAWING ABORTED ${this.id}: ${i} not loaded`)(),!1;try{e.pushDebugGroup(`${this}.predraw(${e})`),this.predraw()}finally{e.popDebugGroup()}let r=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),r=this.pipeline.isErrored)eY.log.info(2,`>>> DRAWING ABORTED ${this.id}: ${cl}`)(),t=!1;else{let i=this._getBindings(),r=this._getBindGroups(),{indexBuffer:n}=this.vertexArray,s=n?n.byteLength/("uint32"===n.indexType?4:2):void 0;t=this.pipeline.draw({renderPass:e,vertexArray:this.vertexArray,isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.instanceCount,indexCount:s,transformFeedback:this.transformFeedback||void 0,bindings:i,bindGroups:r,_bindGroupCacheKeys:this._getBindGroupCacheKeys(),uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),t?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):r?this._needsRedraw=cl:this._needsRedraw="waiting for resource initialization",t}setGeometry(e){this._gpuGeometry?.destroy();let t=e&&function(e,t){if(t instanceof lW)return t;let i=function(e,t){if(!t.indices)return;let i=t.indices.value;return e.createBuffer({usage:o1.Buffer.INDEX,data:i})}(e,t),{attributes:r,bufferLayout:n}=function(e,t){let i=[],r={};for(let[n,s]of Object.entries(t.attributes)){let t=n;switch(n){case"POSITION":t="positions";break;case"NORMAL":t="normals";break;case"TEXCOORD_0":t="texCoords";break;case"TEXCOORD_1":t="texCoords1";break;case"COLOR_0":t="colors"}if(s){r[t]=e.createBuffer({data:s.value,id:`${n}-buffer`});let{value:o,size:a,normalized:l}=s;if(void 0===a)throw Error(`Attribute ${n} is missing a size`);i.push({name:t,format:lB.vertexFormatDecoder.getVertexFormatFromAttribute(o,a,l)})}}return{attributes:r,bufferLayout:i,vertexCount:t._calculateVertexCount(t.attributes,t.indices)}}(e,t);return new lW({topology:t.topology||"triangle-list",bufferLayout:n,vertexCount:t.vertexCount,indices:i,attributes:r})}(this.device,e);if(t){this.setTopology(t.topology||"triangle-list");let e=new lq(this.bufferLayout);this.bufferLayout=e.mergeBufferLayouts(t.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t)}this._gpuGeometry=t}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(e){let t=new lq(this.bufferLayout);this.bufferLayout=this._gpuGeometry?t.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(e){!function e(t,i,r){if(t===i)return!0;if(!r||!t||!i)return!1;if(Array.isArray(t)){if(!Array.isArray(i)||t.length!==i.length)return!1;for(let n=0;n<t.length;n++)if(!e(t[n],i[n],r-1))return!1;return!0}if(Array.isArray(i))return!1;if("object"==typeof t&&"object"==typeof i){let n=Object.keys(t),s=Object.keys(i);if(n.length!==s.length)return!1;for(let s of n)if(!i.hasOwnProperty(s)||!e(t[s],i[s],r-1))return!1;return!0}return!1}(e,this.parameters,2)&&(this.parameters=e,this._setPipelineNeedsUpdate("parameters"))}setInstanceCount(e){this.instanceCount=e,void 0===this.isInstanced&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw("instanceCount")}setVertexCount(e){this.vertexCount=e,this.setNeedsRedraw("vertexCount")}setShaderInputs(e){for(let[t,i]of(this.shaderInputs=e,this._uniformStore=new lF(this.device,this.shaderInputs.modules),Object.entries(this.shaderInputs.modules)))if(i.uniformTypes&&!function(e){for(let t in e)return!1;return!0}(i.uniformTypes)&&!this.material?.ownsModule(t)){let e=this._uniformStore.getManagedUniformBuffer(t);this.bindings[`${t}Uniforms`]=e}this.setNeedsRedraw("shaderInputs")}setMaterial(e){this.material=e,this.setNeedsRedraw("material")}updateShaderInputs(){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues()),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw("shaderInputs")}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw("bindings")}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw("transformFeedback")}setIndexBuffer(e){this.vertexArray.setIndexBuffer(e),this.setNeedsRedraw("indexBuffer")}setAttributes(e,t){var i,r;let n,s,o=t?.disableWarnings??this.props.disableWarnings;e.indices&&eY.log.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=(i=this.pipeline.shaderLayout,r=this.bufferLayout,n=Object.fromEntries(i.attributes.map(e=>[e.name,e.location])),(s=r.slice()).sort((e,t)=>{let i=e.attributes?e.attributes.map(e=>e.attribute):[e.name],r=t.attributes?t.attributes.map(e=>e.attribute):[t.name];return lZ(i,n)-lZ(r,n)}),s);let a=new lq(this.bufferLayout);for(let[t,i]of Object.entries(e)){let e=a.getBufferLayout(t);if(!e){o||eY.log.warn(`Model(${this.id}): Missing layout for buffer "${t}".`)();continue}let r=a.getAttributeNamesForBuffer(e),n=!1;for(let e of r){let t=this._attributeInfos[e];if(t){let e="webgpu"===this.device.type?a.getBufferIndex(t.bufferName):t.location;this.vertexArray.setBuffer(e,i),n=!0}}n||o||eY.log.warn(`Model(${this.id}): Ignoring buffer "${i.id}" for unknown attribute "${t}"`)()}this.setNeedsRedraw("attributes")}setConstantAttributes(e,t){for(let[i,r]of Object.entries(e)){let e=this._attributeInfos[i];e?this.vertexArray.setConstantWebGL(e.location,r):(t?.disableWarnings??this.props.disableWarnings)||eY.log.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${i}"`)()}this.setNeedsRedraw("constants")}_areBindingsLoading(){for(let e of Object.values(this.bindings))if(e instanceof cn&&!e.isReady)return e.id;for(let e of Object.values(this.material?.bindings||{}))if(e instanceof cn&&!e.isReady)return e.id;return!1}_getBindings(){let e={};for(let[t,i]of Object.entries(this.bindings))i instanceof cn?i.isReady&&(e[t]=i.texture):e[t]=i;return e}_getBindGroups(){let e=this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]},t=e.bindings.length?(0,lU.normalizeBindingsByGroup)(e,this._getBindings()):{0:this._getBindings()};if(!this.material)return t;for(let[e,i]of Object.entries(this.material.getBindingsByGroup())){let r=Number(e);t[r]={...t[r]||{},...i}}return t}_getBindGroupCacheKeys(){let e=this.material?.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){let e=0;for(let t of Object.values(this.bindings))t instanceof ly.TextureView?e=Math.max(e,t.texture.updateTimestamp):t instanceof o1.Buffer||t instanceof o2.Texture?e=Math.max(e,t.updateTimestamp):t instanceof cn?e=t.texture?Math.max(e,t.texture.updateTimestamp):1/0:t instanceof lb.Sampler||(e=Math.max(e,t.buffer.updateTimestamp));return Math.max(e,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(e){let t={...e.attributes};for(let[e]of Object.entries(t))this.pipeline.shaderLayout.attributes.find(t=>t.name===e)||"positions"===e||delete t[e];this.vertexCount=e.vertexCount,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(t,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw("geometry attributes")}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||=e,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,t=null;this.pipeline&&(eY.log.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,t=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let i=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:"vertex",source:this.source||this.vs,debugShaders:this.props.debugShaders}),r=null;this.source?r=i:this.fs&&(r=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:"fragment",source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,bindGroups:this._getBindGroups(),vs:i,fs:r}),this._attributeInfos=(0,lN.getAttributeInfosFromLayouts)(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),t&&t!==e&&this.shaderFactory.release(t)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=eY.log.level>3?0:1e4;eY.log.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,eY.log.group(2,`>>> DRAWING MODEL ${this.id}`,{collapsed:eY.log.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=function(e,t){let i={},r="Values";if(0===e.attributes.length&&!e.varyings?.length)return{"No attributes or varyings":{[r]:"N/A"}};for(let t of e.attributes)if(t){let e=`${t.location} ${t.name}: ${t.type}`;i[`in ${e}`]={[r]:t.stepMode||"vertex"}}for(let t of e.varyings||[]){let e=`${t.location} ${t.name}`;i[`out ${e}`]={[r]:JSON.stringify(t)}}return i}(this.pipeline.shaderLayout,this.id);eY.log.table(2,e)();let t=this.shaderInputs.getDebugTable();eY.log.table(2,t)();let i=this._getAttributeDebugTable();eY.log.table(2,this._attributeInfos)(),eY.log.table(2,i)(),eY.log.groupEnd(2)(),this._logOpen=!1}}_drawCount=0;_logFramebuffer(e){let t=this.device.props.debugFramebuffers;if(this._drawCount++,!t)return;let i=e.props.framebuffer;!function(e,t,i){var r;if("webgl"!==e.device.type)return;let n=(r=e.device,r.userData[lG]||={flushing:!1,queuedFramebuffers:[]},r.userData[lG]);if(!n.flushing){let r;if(!(r=e.props.framebuffer)||null===r.handle)return function(e,t,i){if(0===i.queuedFramebuffers.length)return;let{gl:r}=e.device,n=r.getParameter(36010),s=r.getParameter(36006),[o,a]=e.device.getDefaultCanvasContext().getDrawingBufferSize(),l=lH(t.top,8),c=lH(t.left,8);i.flushing=!0;try{for(let e of i.queuedFramebuffers){let[i,n,s,u,h]=function(e){let{framebuffer:t,targetWidth:i,targetHeight:r,topPx:n,leftPx:s,minimap:o}=e,a=o?Math.max(Math.floor(i/4),1):i,l=o?Math.max(Math.floor(r/4),1):r,c=Math.min(a/t.width,l/t.height),u=Math.max(Math.floor(t.width*c),1),h=Math.max(Math.floor(t.height*c),1),d=Math.max(r-n-h,0);return[s,d,s+u,d+h,h]}({framebuffer:e,targetWidth:o,targetHeight:a,topPx:l,leftPx:c,minimap:t.minimap});r.bindFramebuffer(36008,e.handle),r.bindFramebuffer(36009,null),r.blitFramebuffer(0,0,e.width,e.height,i,n,s,u,16384,9728),l+=h+8}}finally{r.bindFramebuffer(36008,n),r.bindFramebuffer(36009,s),i.flushing=!1}}(e,i,n);t&&"colorAttachments"in t&&null!==t.handle&&!n.queuedFramebuffers.includes(t)&&n.queuedFramebuffers.push(t)}}(e,i,{id:i?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let e={};for(let[t,i]of Object.entries(this._attributeInfos)){let r=this.vertexArray.attributes[i.location];e[i.location]={name:t,type:i.shaderType,values:r?this._getBufferOrConstantValues(r,i.bufferDataType):"null"}}if(this.vertexArray.indexBuffer){let{indexBuffer:t}=this.vertexArray,i="uint32"===t.indexType?new Uint32Array(t.debugData):new Uint16Array(t.debugData);e.indices={name:"indices",type:t.indexType,values:i.toString()}}return e}_getBufferOrConstantValues(e,t){let i=lt.dataTypeDecoder.getTypedArrayConstructor(t);return(e instanceof o1.Buffer?new i(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;let t={};for(let[i,r]of Object.entries(e))this.material.ownsBinding(i)||(t[i]=r);return t}}class cu{device;model;transformFeedback;static defaultProps={...cc.defaultProps,outputs:void 0,feedbackBuffers:void 0};static isSupported(e){return e?.info?.type==="webgl"}constructor(e,t=cu.defaultProps){if(!cu.isSupported(e))throw Error("BufferTransform not yet implemented on WebGPU");this.device=e,this.model=new cc(this.device,{id:t.id||"buffer-transform-model",fs:t.fs||function(){let{input:e,inputChannels:t,output:i}={};if(!e)return l_;if(!t)throw Error("inputChannels");let r=function(e){switch(e){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw Error(`invalid channels: ${e}`)}}(t),n=function(e,t){switch(t){case 1:return`vec4(${e}, 0.0, 0.0, 1.0)`;case 2:return`vec4(${e}, 0.0, 1.0)`;case 3:return`vec4(${e}, 1.0)`;case 4:return e;default:throw Error(`invalid channels: ${t}`)}}(e,t);return`\
#version 300 es
in ${r} ${e};
out vec4 ${i};
void main() {
  ${i} = ${n};
}`}(),topology:t.topology||"point-list",varyings:t.outputs||t.varyings,...t}),this.transformFeedback=this.device.createTransformFeedback({layout:this.model.pipeline.shaderLayout,buffers:t.feedbackBuffers}),this.model.setTransformFeedback(this.transformFeedback),Object.seal(this)}destroy(){this.model&&this.model.destroy()}delete(){this.destroy()}run(e){e?.inputBuffers&&this.model.setAttributes(e.inputBuffers),e?.outputBuffers&&this.transformFeedback.setBuffers(e.outputBuffers);let t=this.device.beginRenderPass(e);this.model.draw(t),t.end()}getBuffer(e){return this.transformFeedback.getBuffer(e)}readAsync(e){let t=this.getBuffer(e);if(!t)throw Error("BufferTransform#getBuffer");if(t instanceof o1.Buffer)return t.readAsync();let{buffer:i,byteOffset:r=0,byteLength:n=i.byteLength}=t;return i.readAsync(r,n)}}function ch(e,t=[],i=0){let r=Math.fround(e),n=e-r;return t[i]=r,t[i+1]=n,t}let cd=`\

layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`,cp={name:"fp64arithmetic",source:`\
struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}

fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}

fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
`,fs:cd,vs:cd,defaultUniforms:{ONE:1,SPLIT:4097},uniformTypes:{ONE:"f32",SPLIT:"f32"},fp64ify:ch,fp64LowPart:function(e){return e-Math.fround(e)},fp64ifyMatrix4:function(e){let t=new Float32Array(32);for(let i=0;i<4;++i)for(let r=0;r<4;++r){let n=4*i+r;ch(e[4*r+i],t,2*n)}return t}};function cf(e){let{source:t,target:i,start:r=0,size:n,getData:s}=e,o=e.end||i.length,a=t.length,l=o-r;if(a>l)return void i.set(t.subarray(0,l),r);if(i.set(t,r),!s)return;let c=a;for(;c<l;){let e=s(c,t);for(let t=0;t<n;t++)i[r+c]=e[t]||0,c++}}function cg(e){switch(e){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw Error(`No defined attribute type for size "${e}"`)}}function cm(e){switch(e){case 1:return"float32";case 2:return"float32x2";case 3:return"float32x3";case 4:return"float32x4";default:throw Error("invalid type size")}}function cv(e){e.push(e.shift())}function c_({device:e,source:t,target:i}){return(!i||i.byteLength<t.byteLength)&&(i?.destroy(),i=e.createBuffer({byteLength:t.byteLength,usage:t.usage})),i}function cy({device:e,buffer:t,attribute:i,fromLength:r,toLength:n,fromStartIndices:s,getData:o=e=>e}){let a=i.doublePrecision&&i.value instanceof Float64Array?2:1,l=i.size*a,c=i.byteOffset,u=i.settings.bytesPerElement<4?c/i.settings.bytesPerElement*4:c,h=i.startIndices,d=s&&h,p=i.isConstant;if(!d&&t&&r>=n)return t;let f=i.value instanceof Float64Array?Float32Array:i.value.constructor,g=p?i.value:new f(i.getBuffer().readSyncWebGL(c,n*f.BYTES_PER_ELEMENT).buffer);if(i.settings.normalized&&!p){let e=o;o=(t,r)=>i.normalizeConstant(e(t,r))}let m=p?(e,t)=>o(g,t):(e,t)=>o(g.subarray(e+c,e+c+l),t),v=new Float32Array(t?t.readSyncWebGL(u,4*r).buffer:0),_=new Float32Array(n);return!function({source:e,target:t,size:i,getData:r,sourceStartIndices:n,targetStartIndices:s}){if(!n||!s)return cf({source:e,target:t,size:i,getData:r});let o=0,a=0,l=r&&((e,t)=>r(e+a,t)),c=Math.min(n.length,s.length);for(let r=1;r<c;r++){let c=n[r]*i,u=s[r]*i;cf({source:e.subarray(o,c),target:t,start:a,end:u,size:i,getData:l}),o=c,a=u}a<t.length&&cf({source:[],target:t,start:a,size:i,getData:l})}({source:v,target:_,sourceStartIndices:s,targetStartIndices:h,size:l,getData:m}),(!t||t.byteLength<_.byteLength+u)&&(t?.destroy(),t=e.createBuffer({byteLength:_.byteLength+u,usage:35050})),t.write(_,u),t}class cb{constructor({device:e,attribute:t,timeline:i}){this.buffers=[],this.currentLength=0,this.device=e,this.transition=new ot(i),this.attribute=t,this.attributeInTransition=function(e){let{device:t,settings:i,value:r}=e,n=new lm(t,i);return n.setData({value:r instanceof Float64Array?new Float64Array(0):new Float32Array(0),normalized:i.normalized}),n}(t),this.currentStartIndices=t.startIndices}get inProgress(){return this.transition.inProgress}start(e,t,i=1/0){this.settings=e,this.currentStartIndices=this.attribute.startIndices,this.currentLength=function(e,t){let{doublePrecision:i,settings:r,value:n,size:s}=e,o=i&&n instanceof Float64Array?2:1,a=0,{shaderAttributes:l}=e.settings;if(l)for(let e of Object.values(l))a=Math.max(a,e.vertexOffset??0);return(r.noAlloc?n.length:(t+a)*s)*o}(this.attribute,t),this.transition.start({...e,duration:i})}update(){let e=this.transition.update();return e&&this.onUpdate(),e}setBuffer(e){this.attributeInTransition.setData({buffer:e,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value})}cancel(){this.transition.cancel()}delete(){for(let e of(this.cancel(),this.buffers))e.destroy();this.buffers.length=0}}let cw={name:"interpolation",vs:`\
layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,uniformTypes:{time:"f32"}},cx=`\
#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,cP=`\
#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`;function cC(e){return e.doublePrecision&&e.value instanceof Float64Array}let cM={name:"spring",vs:`\
layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,uniformTypes:{damping:"f32",stiffness:"f32"}},cE=`\
#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,cS=`\
#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`,cL={interpolation:class extends cb{constructor({device:e,attribute:t,timeline:i}){super({device:e,attribute:t,timeline:i}),this.type="interpolation",this.transform=function(e,t){let i=t.size,r=cg(i),n=cm(i),s=t.getBufferLayout();return cC(t)?new cu(e,{vs:cP,bufferLayout:[{name:"aFrom",byteStride:8*i,attributes:[{attribute:"aFrom",format:n,byteOffset:0},{attribute:"aFrom64Low",format:n,byteOffset:4*i}]},{name:"aTo",byteStride:8*i,attributes:[{attribute:"aTo",format:n,byteOffset:0},{attribute:"aTo64Low",format:n,byteOffset:4*i}]}],modules:[cp,cw],defines:{ATTRIBUTE_TYPE:r,ATTRIBUTE_SIZE:i},moduleSettings:{},varyings:["vCurrent","vCurrent64Low"],bufferMode:35980,disableWarnings:!0}):new cu(e,{vs:cx,bufferLayout:[{name:"aFrom",format:n},{name:"aTo",format:s.attributes[0].format}],modules:[cw],defines:{ATTRIBUTE_TYPE:r},varyings:["vCurrent"],disableWarnings:!0})}(e,t)}start(e,t){let i=this.currentLength,r=this.currentStartIndices;if(super.start(e,t,e.duration),e.duration<=0)return void this.transition.cancel();let{buffers:n,attribute:s}=this;cv(n),n[0]=cy({device:this.device,buffer:n[0],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:r,getData:e.enter}),n[1]=c_({device:this.device,source:n[0],target:n[1]}),this.setBuffer(n[1]);let{transform:o}=this,a=o.model,l=Math.floor(this.currentLength/s.size);cC(s)&&(l/=2),a.setVertexCount(l),s.isConstant?(a.setAttributes({aFrom:n[0]}),a.setConstantAttributes({aTo:s.value})):a.setAttributes({aFrom:n[0],aTo:s.getBuffer()}),o.transformFeedback.setBuffers({vCurrent:n[1]})}onUpdate(){let{duration:e,easing:t}=this.settings,{time:i}=this.transition,r=i/e;t&&(r=t(r));let{model:n}=this.transform,s={time:r};n.shaderInputs.setProps({interpolation:s}),this.transform.run({discard:!0})}delete(){super.delete(),this.transform.destroy()}},spring:class extends cb{constructor({device:e,attribute:t,timeline:i}){super({device:e,attribute:t,timeline:i}),this.type="spring",this.texture=function(e){return e.createTexture({data:new Uint8Array(4),format:"rgba8unorm",width:1,height:1})}(e),this.framebuffer=function(e,t){return e.createFramebuffer({id:"spring-transition-is-transitioning-framebuffer",width:1,height:1,colorAttachments:[t]})}(e,this.texture),this.transform=function(e,t){let i=cg(t.size),r=cm(t.size);return new cu(e,{vs:cE,fs:cS,bufferLayout:[{name:"aPrev",format:r},{name:"aCur",format:r},{name:"aTo",format:t.getBufferLayout().attributes[0].format}],varyings:["vNext"],modules:[cM],defines:{ATTRIBUTE_TYPE:i},parameters:{depthCompare:"always",blendColorOperation:"max",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one"}})}(e,t)}start(e,t){let i=this.currentLength,r=this.currentStartIndices;super.start(e,t);let{buffers:n,attribute:s}=this;for(let t=0;t<2;t++)n[t]=cy({device:this.device,buffer:n[t],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:r,getData:e.enter});n[2]=c_({device:this.device,source:n[0],target:n[2]}),this.setBuffer(n[1]);let{model:o}=this.transform;o.setVertexCount(Math.floor(this.currentLength/s.size)),s.isConstant?o.setConstantAttributes({aTo:s.value}):o.setAttributes({aTo:s.getBuffer()})}onUpdate(){let{buffers:e,transform:t,framebuffer:i,transition:r}=this,n=this.settings;t.model.setAttributes({aPrev:e[0],aCur:e[1]}),t.transformFeedback.setBuffers({vNext:e[2]});let s={stiffness:n.stiffness,damping:n.damping};t.model.shaderInputs.setProps({spring:s}),t.run({framebuffer:i,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),cv(e),this.setBuffer(e[1]),this.device.readPixelsToArrayWebGL(i)[0]>0||r.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}}};class cA{constructor(e,{id:t,timeline:i}){if(!e)throw Error("AttributeTransitionManager is constructed without device");this.id=t,this.device=e,this.timeline=i,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(let e in this.transitions)this._removeTransition(e)}update({attributes:e,transitions:t,numInstances:i}){for(let r in this.numInstances=i||1,e){let i=e[r],n=i.getTransitionSetting(t);n&&this._updateAttribute(r,i,n)}for(let i in this.transitions){let r=e[i];r&&r.getTransitionSetting(t)||this._removeTransition(i)}}hasAttribute(e){let t=this.transitions[e];return t&&t.inProgress}getAttributes(){let e={};for(let t in this.transitions){let i=this.transitions[t];i.inProgress&&(e[t]=i.attributeInTransition)}return e}run(){if(0===this.numInstances)return!1;for(let e in this.transitions)this.transitions[e].update()&&(this.needsRedraw=!0);let e=this.needsRedraw;return this.needsRedraw=!1,e}_removeTransition(e){this.transitions[e].delete(),delete this.transitions[e]}_updateAttribute(e,t,i){let r=this.transitions[e],n=!r||r.type!==i.type;if(n){r&&this._removeTransition(e);let s=cL[i.type];s?this.transitions[e]=new s({attribute:t,timeline:this.timeline,device:this.device}):(tU.error(`unsupported transition type '${i.type}'`)(),n=!1)}(n||t.needsRedraw())&&(this.needsRedraw=!0,this.transitions[e].start(i,this.numInstances))}}let cT="attributeManager.invalidate";class cR{constructor(e,{id:t="attribute-manager",stats:i,timeline:r}={}){this.mergeBoundsMemoized=iS(sG),this.id=t,this.device=e,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=i,this.attributeTransitionManager=new cA(e,{id:`${t}-transitions`,timeline:r}),Object.seal(this)}finalize(){for(let e in this.attributes)this.attributes[e].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(e={clearRedrawFlags:!1}){let t=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!e.clearRedrawFlags,t&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(e){this._add(e)}addInstanced(e){this._add(e,{stepMode:"instance"})}remove(e){for(let t of e)void 0!==this.attributes[t]&&(this.attributes[t].delete(),delete this.attributes[t])}invalidate(e,t){let i=this._invalidateTrigger(e,t);nu(cT,this,e,i)}invalidateAll(e){for(let t in this.attributes)this.attributes[t].setNeedsUpdate(t,e);nu(cT,this,"all")}update({data:e,numInstances:t,startIndices:i=null,transitions:r,props:n={},buffers:s={},context:o={}}){let a=!1;for(let r in nu("attributeManager.updateStart",this),this.stats&&this.stats.get("Update Attributes").timeStart(),this.attributes){let l=this.attributes[r],c=l.settings.accessor;l.startIndices=i,l.numInstances=t,n[r]&&tU.removed(`props.${r}`,`data.attributes.${r}`)(),l.setExternalBuffer(s[r])||l.setBinaryValue("string"==typeof c?s[c]:void 0,e.startIndices)||"string"==typeof c&&!s[c]&&l.setConstantValue(o,n[c])||l.needsUpdate()&&(a=!0,this._updateAttribute({attribute:l,numInstances:t,data:e,props:n,context:o})),this.needsRedraw=this.needsRedraw||l.needsRedraw()}a&&nu("attributeManager.updateEnd",this,t),this.stats&&(this.stats.get("Update Attributes").timeEnd(),a&&this.stats.get("Attributes updated").incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:t,transitions:r})}updateTransition(){let{attributeTransitionManager:e}=this,t=e.run();return this.needsRedraw=this.needsRedraw||t,t}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(e){let t=e.map(e=>this.attributes[e]?.getBounds());return this.mergeBoundsMemoized(t)}getChangedAttributes(e={clearChangedFlags:!1}){let{attributes:t,attributeTransitionManager:i}=this,r={...i.getAttributes()};for(let n in t){let s=t[n];s.needsRedraw(e)&&!i.hasAttribute(n)&&(r[n]=s)}return r}getBufferLayouts(e){return Object.values(this.getAttributes()).map(t=>t.getBufferLayout(e))}_add(e,t){for(let i in e){let r=e[i],n={...r,id:i,size:r.isIndexed&&1||r.size||1,...t};this.attributes[i]=new lm(this.device,n)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){let e={};for(let t in this.attributes)this.attributes[t].getUpdateTriggers().forEach(i=>{e[i]||(e[i]=[]),e[i].push(t)});this.updateTriggers=e}_invalidateTrigger(e,t){let{attributes:i,updateTriggers:r}=this,n=r[e];return n&&n.forEach(e=>{let r=i[e];r&&r.setNeedsUpdate(r.id,t)}),n}_updateAttribute(e){let{attribute:t,numInstances:i}=e;(nu("attribute.updateStart",t),t.constant)?t.setConstantValue(e.context,t.value):(t.allocate(i)&&nu("attribute.allocate",t,i),t.updateBuffer(e)&&(this.needsRedraw=!0,nu("attribute.updateEnd",t,i)))}}function cO(e,t,i,r,n){let s=t-e;return(i-t)*n+-s*r+s+t}function ck(e,t){if(Array.isArray(e)){let i=0;for(let r=0;r<e.length;r++){let n=e[r]-t[r];i+=n*n}return Math.sqrt(i)}return Math.abs(e-t)}let cI={interpolation:class extends ot{get value(){return this._value}_onUpdate(){let{time:e,settings:{fromValue:t,toValue:i,duration:r,easing:n}}=this,s=n(e/r);this._value=iX(t,i,s)}},spring:class extends ot{get value(){return this._currValue}_onUpdate(){let{fromValue:e,toValue:t,damping:i,stiffness:r}=this.settings,{_prevValue:n=e,_currValue:s=e}=this,o=function(e,t,i,r,n){if(Array.isArray(i)){let s=[];for(let o=0;o<i.length;o++)s[o]=cO(e[o],t[o],i[o],r,n);return s}return cO(e,t,i,r,n)}(n,s,t,i,r),a=ck(o,t),l=ck(o,s);a<1e-5&&l<1e-5&&(o=t,this.end()),this._prevValue=s,this._currValue=o}}};class cz{constructor(e){this.transitions=new Map,this.timeline=e}get active(){return this.transitions.size>0}add(e,t,i,r){let{transitions:n}=this;if(n.has(e)){let i=n.get(e),{value:r=i.settings.fromValue}=i;t=r,this.remove(e)}if(!(r=lg(r)))return;let s=cI[r.type];if(!s)return void tU.error(`unsupported transition type '${r.type}'`)();let o=new s(this.timeline);o.start({...r,fromValue:t,toValue:i}),n.set(e,o)}remove(e){let{transitions:t}=this;t.has(e)&&(t.get(e).cancel(),t.delete(e))}update(){let e={};for(let[t,i]of this.transitions)i.update(),e[t]=i.value,i.inProgress||this.remove(t);return e}clear(){for(let e of this.transitions.keys())this.remove(e)}}function cj({newProps:e,oldProps:t,ignoreProps:i={},propTypes:r={},triggerName:n="props"}){if(t===e)return!1;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return`${n} changed shallowly`;for(let s of Object.keys(e))if(!(s in i)){if(!(s in t))return`${n}.${s} added`;let i=cD(e[s],t[s],r[s]);if(i)return`${n}.${s} ${i}`}for(let s of Object.keys(t))if(!(s in i)){if(!(s in e))return`${n}.${s} dropped`;if(!Object.hasOwnProperty.call(e,s)){let i=cD(e[s],t[s],r[s]);if(i)return`${n}.${s} ${i}`}}return!1}function cD(e,t,i){let r=i&&i.equal;return r&&!r(e,t,i)||!r&&(r=e&&t&&e.equals)&&!r.call(e,t)?"changed deeply":r||t===e?null:"changed shallowly"}function cF(e,t,i){let r=e.updateTriggers[i];r=null==r?{}:r;let n=t.updateTriggers[i];return cj({oldProps:n=null==n?{}:n,newProps:r,triggerName:i})}function cN(e,t){if(!t)return e;let i={...e,...t};if("defines"in t&&(i.defines={...e.defines,...t.defines}),"modules"in t&&(i.modules=(e.modules||[]).concat(t.modules),t.modules.some(e=>"project64"===e.name))){let e=i.modules.findIndex(e=>"project32"===e.name);e>=0&&i.modules.splice(e,1)}if("inject"in t)if(e.inject){let r={...e.inject};for(let e in t.inject)r[e]=(r[e]||"")+t.inject[e];i.inject=r}else i.inject=t.inject;return i}var rI=rI,tF=tF;let cU=[0,0,0];function cB(e,t,i=!1){let r=t.projectPosition(e);if(i&&t instanceof oe){let[i,n,s=0]=e,o=t.getDistanceScales([i,n]);r[2]=s*o.unitsPerMeter[2]}return r}function c$(e,{viewport:t,modelMatrix:i,coordinateSystem:r,coordinateOrigin:n,offsetMode:s}){let[o,a,l=0]=e;switch(i&&([o,a,l]=tF.transformMat4([],[o,a,l,1],i)),r){case"default":return c$(e,{viewport:t,modelMatrix:i,coordinateSystem:t.isGeospatial?"lnglat":"cartesian",coordinateOrigin:n,offsetMode:s});case"lnglat":return cB([o,a,l],t,s);case"lnglat-offsets":return cB([o+n[0],a+n[1],l+(n[2]||0)],t,s);case"meter-offsets":return cB(rW(n,[o,a,l]),t,s);case"cartesian":return t.isGeospatial?[o+n[0],a+n[1],l+n[2]]:t.projectPosition([o,a,l]);default:throw Error(`Invalid coordinateSystem: ${r}`)}}let cV={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},cW={},cG={boolean:{validate:(e,t)=>!0,equal:(e,t,i)=>!!e==!!t},number:{validate:(e,t)=>Number.isFinite(e)&&(!("max"in t)||e<=t.max)&&(!("min"in t)||e>=t.min)},color:{validate:(e,t)=>t.optional&&!e||cq(e)&&(3===e.length||4===e.length),equal:(e,t,i)=>sQ(e,t,1)},accessor:{validate(e,t){let i=cZ(e);return"function"===i||i===cZ(t.value)},equal:(e,t,i)=>"function"==typeof t||sQ(e,t,1)},array:{validate:(e,t)=>t.optional&&!e||cq(e),equal(e,t,i){let{compare:r}=i,n=Number.isInteger(r)?r:+!!r;return r?sQ(e,t,n):e===t}},object:{equal(e,t,i){if(i.ignore)return!0;let{compare:r}=i,n=Number.isInteger(r)?r:+!!r;return r?sQ(e,t,n):e===t}},function:{validate:(e,t)=>t.optional&&!e||"function"==typeof e,equal:(e,t,i)=>!i.compare&&!1!==i.ignore||e===t},data:{transform:(e,t,i)=>{if(!e)return e;let{dataTransform:r}=i.props;return r?r(e):"string"==typeof e.shape&&e.shape.endsWith("-table")&&Array.isArray(e.data)?e.data:e}},image:{transform:(e,t,i)=>{let r=i.context;return r&&r.device?function(e,t,i,r){if(i instanceof o2.Texture)return i;i.constructor&&"Object"!==i.constructor.name&&(i={data:i});let n=null;i.compressed&&(n={minFilter:"linear",mipmapFilter:i.data.length>1?"nearest":"linear"});let{width:s,height:o}=i.data,a=t.createTexture({...i,sampler:{...cV,...n,...r},mipLevels:t.getMipLevelCount(s,o)});return"webgl"===t.type?a.generateMipmapsWebGL():"webgpu"===t.type&&t.generateMipmapsWebGPU(a),cW[a.id]=e,a}(i.id,r.device,e,{...t.parameters,...i.props.textureParameters}):null},release:(e,t,i)=>{var r;r=i.id,e&&e instanceof o2.Texture&&cW[e.id]===r&&(e.delete(),delete cW[e.id])}}};function cH(e,t){return"type"in t?{name:e,...cG[t.type],...t}:"value"in t?{name:e,type:cZ(t.value),...t}:{name:e,type:"object",value:t}}function cq(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function cZ(e){return cq(e)?"array":null===e?"null":typeof e}function cY(e,t){return Object.prototype.hasOwnProperty.call(e,t)}let cK=0;class cX{constructor(...e){this.props=function(e,t){let i;for(let e=t.length-1;e>=0;e--){let r=t[e];"extensions"in r&&(i=r.extensions)}let r=Object.create(function e(t,i){var r,n;if(!(t instanceof cJ.constructor))return{};let s="_mergedDefaultProps";if(i)for(let e of i){let t=e.constructor;t&&(s+=`:${t.extensionName||t.name}`)}let o=cY(r=t,n=s)&&r[n];return o||(t[s]=function(t,i){var r;let n;if(!t.prototype)return null;let s=e(Object.getPrototypeOf(t)),o=function(e){let t={},i={},r={};for(let[n,s]of Object.entries(e)){let e=s?.deprecatedFor;if(e)r[n]=Array.isArray(e)?e:[e];else{let e=function(e,t){switch(cZ(t)){case"object":return cH(e,t);case"array":return cH(e,{type:"array",value:t,compare:!1});case"boolean":return cH(e,{type:"boolean",value:t});case"number":return cH(e,{type:"number",value:t});case"function":return cH(e,{type:"function",value:t,compare:!0});default:return{name:e,type:"unknown",value:t}}}(n,s);t[n]=e,i[n]=e.value}}return{propTypes:t,defaultProps:i,deprecatedProps:r}}(function(e,t){return cY(e,t)&&e[t]}(t,"defaultProps")||{}),a=Object.assign(Object.create(null),s,o.defaultProps),l=Object.assign(Object.create(null),s?.[ni],o.propTypes),c=Object.assign(Object.create(null),s?.[nr],o.deprecatedProps);for(let t of i){let i=e(t.constructor);i&&(Object.assign(a,i),Object.assign(l,i[ni]),Object.assign(c,i[nr]))}return Object.defineProperties(a,{id:{writable:!0,value:((n=(r=t).componentName)||tU.warn(`${r.name}.componentName not specified`)(),n||r.name)}}),function(e,t){let i={},r={};for(let e in t){let n=t[e],{name:s,value:o}=n;n.async&&(i[s]=o,r[s]=function(e){return{enumerable:!0,set(t){"string"==typeof t||t instanceof Promise||lh(t)?this[ns][e]=t:this[no][e]=t},get(){if(this[no]){if(e in this[no])return this[no][e]||this[nn][e];if(e in this[ns]){let t=this[nt]&&this[nt].internalState;if(t&&t.hasAsyncProp(e))return t.getAsyncProp(e)||this[nn][e]}}return this[nn][e]}}}(s))}e[nn]=i,e[ns]={},Object.defineProperties(e,r)}(a,l),function(e,t){for(let i in t)Object.defineProperty(e,i,{enumerable:!1,set(e){let r=`${this.id}: ${i}`;for(let r of t[i])cY(this,r)||(this[r]=e);tU.deprecated(r,t[i].join("/"))()}})}(a,c),a[ni]=l,a[nr]=c,0!==i.length||cY(t,"_propTypes")||(t._propTypes=l),a}(t,i||[]))}(e.constructor,i));r[nt]=e,r[ns]={},r[no]={};for(let e=0;e<t.length;++e){let i=t[e];for(let e in i)r[e]=i[e]}return Object.freeze(r),r}(this,e),this.id=this.props.id,this.count=cK++}clone(e){let{props:t}=this,i={};for(let e in t[nn])e in t[no]?i[e]=t[no][e]:e in t[ns]&&(i[e]=t[ns][e]);return new this.constructor({...t,...i,...e})}}cX.componentName="Component",cX.defaultProps={};let cJ=cX,cQ=Object.freeze({});class c0{constructor(e){this.component=e,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(let e in this.asyncProps){let t=this.asyncProps[e];t&&t.type&&t.type.release&&t.type.release(t.resolvedValue,t.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||cQ}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(e){return e in this.asyncProps}getAsyncProp(e){let t=this.asyncProps[e];return t&&t.resolvedValue}isAsyncPropLoading(e){if(e){let t=this.asyncProps[e];return!!(t&&t.pendingLoadCount>0&&t.pendingLoadCount!==t.resolvedLoadCount)}for(let e in this.asyncProps)if(this.isAsyncPropLoading(e))return!0;return!1}reloadAsyncProp(e,t){this._watchPromise(e,Promise.resolve(t))}setAsyncProps(e){this.component=e[nt]||this.component;let t=e[no]||{},i=e[ns]||e,r=e[nn]||{};for(let e in t){let i=t[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,i),t[e]=this.getAsyncProp(e)}for(let e in i){let t=i[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,t)}}_fetch(e,t){return null}_onResolve(e,t){}_onError(e,t){}_updateAsyncProp(e,t){if(this._didAsyncInputValueChange(e,t)){if("string"==typeof t&&(t=this._fetch(e,t)),t instanceof Promise)return void this._watchPromise(e,t);if(lh(t))return void this._resolveAsyncIterable(e,t);this._setPropValue(e,t)}}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps)for(let e in this.oldAsyncProps=Object.create(this.oldProps),this.asyncProps)Object.defineProperty(this.oldAsyncProps,e,{enumerable:!0,value:this.oldProps[e]})}_didAsyncInputValueChange(e,t){let i=this.asyncProps[e];return t!==i.resolvedValue&&t!==i.lastValue&&(i.lastValue=t,!0)}_setPropValue(e,t){this._freezeAsyncOldProps();let i=this.asyncProps[e];i&&(t=this._postProcessValue(i,t),i.resolvedValue=t,i.pendingLoadCount++,i.resolvedLoadCount=i.pendingLoadCount)}_setAsyncPropValue(e,t,i){let r=this.asyncProps[e];r&&i>=r.resolvedLoadCount&&void 0!==t&&(this._freezeAsyncOldProps(),r.resolvedValue=t,r.resolvedLoadCount=i,this.onAsyncPropUpdated(e,t))}_watchPromise(e,t){let i=this.asyncProps[e];if(i){i.pendingLoadCount++;let r=i.pendingLoadCount;t.then(t=>{this.component&&(t=this._postProcessValue(i,t),this._setAsyncPropValue(e,t,r),this._onResolve(e,t))}).catch(t=>{this._onError(e,t)})}}async _resolveAsyncIterable(e,t){if("data"!==e)return void this._setPropValue(e,t);let i=this.asyncProps[e];if(!i)return;i.pendingLoadCount++;let r=i.pendingLoadCount,n=[],s=0;for await(let i of t){if(!this.component)return;let{dataTransform:t}=this.component.props;Object.defineProperty(n=t?t(i,n):n.concat(i),"__diff",{enumerable:!1,value:[{startRow:s,endRow:n.length}]}),s=n.length,this._setAsyncPropValue(e,n,r)}this._onResolve(e,n)}_postProcessValue(e,t){let i=e.type;return i&&this.component&&(i.release&&i.release(e.resolvedValue,i,this.component),i.transform)?i.transform(t,i,this.component):t}_createAsyncPropData(e,t){if(!this.asyncProps[e]){let i=this.component&&this.component.props[ni];this.asyncProps[e]={type:i&&i[e],lastValue:null,resolvedValue:t,pendingLoadCount:0,resolvedLoadCount:0}}}}class c1 extends c0{constructor({attributeManager:e,layer:t}){super(t),this.attributeManager=e,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1}get layer(){return this.component}_fetch(e,t){let i=this.layer,r=i?.props.fetch;return r?r(t,{propName:e,layer:i}):super._fetch(e,t)}_onResolve(e,t){let i=this.layer;if(i){let r=i.props.onDataLoad;"data"===e&&r&&r(t,{propName:e,layer:i})}}_onError(e,t){let i=this.layer;i&&i.raiseError(t,`loading ${e} of ${this.layer}`)}}let c2=Object.freeze([]),c3=iS(({oldViewport:e,viewport:t})=>e.equals(t)),c4=new Uint8ClampedArray(0),c6={data:{type:"data",value:c2,async:!0},dataComparator:{type:"function",value:null,optional:!0},_dataDiff:{type:"function",value:e=>e&&e.__diff,optional:!0},dataTransform:{type:"function",value:null,optional:!0},onDataLoad:{type:"function",value:null,optional:!0},onError:{type:"function",value:null,optional:!0},fetch:{type:"function",value:(e,{propName:t,layer:i,loaders:r,loadOptions:n,signal:s})=>{let{resourceManager:o}=i.context;n=n||i.getLoadOptions(),r=r||i.props.loaders,s&&(n={...n,core:{...n?.core,fetch:{...n?.core?.fetch,signal:s}}});let a=o.contains(e);return(a||n||(o.add({resourceId:e,data:sj(e,r),persistent:!1}),a=!0),a)?o.subscribe({resourceId:e,onChange:e=>i.internalState?.reloadAsyncProp(t,e),consumerId:i.id,requestId:t}):sj(e,r,n)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:"number",min:0,max:1,value:1},operation:"draw",onHover:{type:"function",value:null,optional:!0},onClick:{type:"function",value:null,optional:!0},onDragStart:{type:"function",value:null,optional:!0},onDrag:{type:"function",value:null,optional:!0},onDragEnd:{type:"function",value:null,optional:!0},coordinateSystem:"default",coordinateOrigin:{type:"array",value:[0,0,0],compare:!0},modelMatrix:{type:"array",value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:"XYZ",colorFormat:"RGBA",parameters:{type:"object",value:{},optional:!0,compare:2},loadOptions:{type:"object",value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:"array",value:[],optional:!0,ignore:!0},getPolygonOffset:{type:"function",value:({layerIndex:e})=>[0,-(100*e)]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:"accessor",value:[0,0,128,128]}};class c5 extends cJ{constructor(){super(...arguments),this.internalState=null,this.lifecycle="Awaiting state",this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,"layerName")?this.layerName:""}get root(){let e=this;for(;e.parent;)e=e.parent;return e}toString(){let e=this.constructor.layerName||this.constructor.name;return`${e}({id: '${this.props.id}'})`}project(e){os(this.internalState);let t=this.internalState.viewport||this.context.viewport,[i,r,n]=rq(c$(e,{viewport:t,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),t.pixelProjectionMatrix);return 2===e.length?[i,r]:[i,r,n]}unproject(e){return os(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(e)}projectPosition(e,t){return os(this.internalState),function(e,t){let{viewport:i,coordinateSystem:r,coordinateOrigin:n,modelMatrix:s,fromCoordinateSystem:o,fromCoordinateOrigin:a}=function(e){let{viewport:t,modelMatrix:i,coordinateOrigin:r}=e,{coordinateSystem:n,fromCoordinateSystem:s,fromCoordinateOrigin:o}=e;return"default"===n&&(n=t.isGeospatial?"lnglat":"cartesian"),void 0===s?s=n:"default"===s&&(s=t.isGeospatial?"lnglat":"cartesian"),void 0===o&&(o=r),{viewport:t,coordinateSystem:n,coordinateOrigin:r,modelMatrix:i,fromCoordinateSystem:s,fromCoordinateOrigin:o}}(t),{autoOffset:l=!0}=t,{geospatialOrigin:c=cU,shaderCoordinateOrigin:u=cU,offsetMode:h=!1}=l?ij(i,r,n):{},d=c$(e,{viewport:i,modelMatrix:s,coordinateSystem:o,coordinateOrigin:a,offsetMode:h});if(h){let e=i.projectPosition(c||u);rI.sub(d,d,e)}return d}(e,{viewport:this.internalState.viewport||this.context.viewport,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...t})}get isComposite(){return!1}get isDrawable(){return!0}setState(e){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,e),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return!!this.internalState&&!this.internalState.isAsyncPropLoading()}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){let e=this.state;return e&&(e.models||e.model&&[e.model])||[]}setShaderModuleProps(...e){for(let t of this.getModels())t.shaderInputs.setProps(...e)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){let{coordinateSystem:e}=this.props;return"default"===e||"lnglat"===e||"cartesian"===e}onHover(e,t){return!!this.props.onHover&&(this.props.onHover(e,t)||!1)}onClick(e,t){return!!this.props.onClick&&(this.props.onClick(e,t)||!1)}nullPickingColor(){return[0,0,0]}encodePickingColor(e,t=[]){return t[0]=e+1&255,t[1]=e+1>>8&255,t[2]=e+1>>8>>8&255,t}decodePickingColor(e){os(e instanceof Uint8Array);let[t,i,r]=e;return t+256*i+65536*r-1}getNumInstances(){if(Number.isFinite(this.props.numInstances))return this.props.numInstances;if(this.state&&void 0!==this.state.numInstances)return this.state.numInstances;var e,t,i=this.props.data;if(null===(e=i)||"object"!=typeof e)throw Error("count(): argument not an object");if("function"==typeof i.count)return i.count();if(Number.isFinite(i.size))return i.size;if(Number.isFinite(i.length))return i.length;if(null!==(t=i)&&"object"==typeof t&&t.constructor===Object)return Object.keys(i).length;throw Error("count(): argument not a container")}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){return this.getAttributeManager()?.getBounds(["positions","instancePositions"])}getShaders(e){for(let t of(e=cN(e,{disableWarnings:!0,modules:this.context.defaultShaderModules}),this.props.extensions))e=cN(e,t.getShaders.call(this,t));return e}shouldUpdateState(e){return e.changeFlags.propsOrDataChanged}updateState(e){let t=this.getAttributeManager(),{dataChanged:i}=e.changeFlags;if(i&&t)if(Array.isArray(i))for(let e of i)t.invalidateAll(e);else t.invalidateAll();if(t){let{props:i}=e,r=this.internalState.hasPickingBuffer,n=Number.isInteger(i.highlightedObjectIndex)||!!i.pickable||i.extensions.some(e=>e.getNeedsPickingBuffer.call(this,e));if(r!==n){this.internalState.hasPickingBuffer=n;let{pickingColors:e,instancePickingColors:i}=t.attributes,r=e||i;r&&(n&&r.constant&&(r.constant=!1,t.invalidate(r.id)),r.value||n||(r.constant=!0,r.value=[0,0,0]))}}}finalizeState(e){for(let e of this.getModels())e.destroy();let t=this.getAttributeManager();t&&t.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(e){for(let t of this.getModels())t.draw(e.renderPass)}getPickingInfo({info:e,mode:t,sourceLayer:i}){let{index:r}=e;return r>=0&&Array.isArray(this.props.data)&&(e.object=this.props.data[r]),e}raiseError(e,t){t&&(e=Error(`${t}: ${e.message}`,{cause:e})),this.props.onError?.(e)||this.context?.onError?.(e,this)}getNeedsRedraw(e={clearRedrawFlags:!1}){return this._getNeedsRedraw(e)}needsUpdate(){return!!this.internalState&&(this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()))}hasUniformTransition(){return this.internalState?.uniformTransitions.active||!1}activateViewport(e){if(!this.internalState)return;let t=this.internalState.viewport;this.internalState.viewport=e,t&&c3({oldViewport:t,viewport:e})||(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(e="all"){let t=this.getAttributeManager();t&&("all"===e?t.invalidateAll():t.invalidate(e))}updateAttributes(e){let t=!1;for(let i in e)e[i].layoutChanged()&&(t=!0);for(let i of this.getModels())this._setModelAttributes(i,e,t)}_updateAttributes(){let e=this.getAttributeManager();if(!e)return;let t=this.props,i=this.getNumInstances(),r=this.getStartIndices();e.update({data:t.data,numInstances:i,startIndices:r,props:t,transitions:t.transitions,buffers:t.data.attributes,context:this});let n=e.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(n)}_updateAttributeTransition(){let e=this.getAttributeManager();e&&e.updateTransition()}_updateUniformTransition(){let{uniformTransitions:e}=this.internalState;if(e.active){let t=e.update(),i=Object.create(this.props);for(let e in t)Object.defineProperty(i,e,{value:t[e]});return i}return this.props}calculateInstancePickingColors(e,{numInstances:t}){if(e.constant)return;let i=Math.floor(c4.length/4);this.internalState.usesPickingColorCache=!0;let r=t>0&&0===c4[0];if(i<t||r){t>0xffffff&&tU.warn("Layer has too many data objects. Picking might not be able to distinguish all objects.")();let e=Math.floor((c4=sN.allocate(c4,t,{size:4,copy:!0,maxCount:Math.max(t,0xffffff)})).length/4),n=[0,0,0],s=r?0:i;for(let t=s;t<e;t++)this.encodePickingColor(t,n),c4[4*t+0]=n[0],c4[4*t+1]=n[1],c4[4*t+2]=n[2],c4[4*t+3]=0}e.value=c4.subarray(0,4*t)}_setModelAttributes(e,t,i=!1){if(!Object.keys(t).length)return;if(i){let i=this.getAttributeManager();e.setBufferLayout(i.getBufferLayouts(e)),t=i.getAttributes()}let r=e.userData?.excludeAttributes||{},n={},s={};for(let i in t){if(r[i])continue;let o=t[i].getValue();for(let r in o){let a=o[r];a instanceof o1.Buffer?t[i].settings.isIndexed?e.setIndexBuffer(a):n[r]=a:a&&(s[r]=a)}}e.setAttributes(n),e.setConstantAttributes(s)}disablePickingIndex(e){let t=this.props.data;if(!("attributes"in t))return void this._disablePickingIndex(e);let{pickingColors:i,instancePickingColors:r}=this.getAttributeManager().attributes,n=i||r,s=n&&t.attributes&&t.attributes[n.id];if(s&&s.value){let i=s.value,r=this.encodePickingColor(e);for(let e=0;e<t.length;e++){let t=n.getVertexOffset(e);i[t]===r[0]&&i[t+1]===r[1]&&i[t+2]===r[2]&&this._disablePickingIndex(e)}}else this._disablePickingIndex(e)}_disablePickingIndex(e){let{pickingColors:t,instancePickingColors:i}=this.getAttributeManager().attributes,r=t||i;if(!r)return;let n=r.getVertexOffset(e),s=r.getVertexOffset(e+1);r.buffer.write(new Uint8Array(s-n),n)}restorePickingColors(){let{pickingColors:e,instancePickingColors:t}=this.getAttributeManager().attributes,i=e||t;i&&(this.internalState.usesPickingColorCache&&i.value.buffer!==c4.buffer&&(i.value=c4.subarray(0,i.value.length)),i.updateSubBuffer({startOffset:0}))}_initialize(){os(!this.internalState),nu("layer.initialize",this);let e=this._getAttributeManager();for(let t of(e&&e.addInstanced({instancePickingColors:{type:"uint8",size:4,noAlloc:!0,update:this.calculateInstancePickingColors}}),this.internalState=new c1({attributeManager:e,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,"attributeManager",{get:()=>(tU.deprecated("layer.state.attributeManager","layer.getAttributeManager()")(),e)}),this.internalState.uniformTransitions=new cz(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context),this.props.extensions))t.initializeState.call(this,this.context,t);this.setChangeFlags({dataChanged:"init",propsChanged:"init",viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(e){nu("layer.matched",this,this===e);let{state:t,internalState:i}=e;this!==e&&(this.internalState=i,this.state=t,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){let e=this.needsUpdate();if(nu("layer.update",this,e),!e)return;this.context.stats.get("Layer updates").incrementCount();let t=this.props,i=this.context,r=this.internalState,n=i.viewport,s=this._updateUniformTransition();r.propsInTransition=s,i.viewport=r.viewport||n,this.props=s;try{let e=this._getUpdateParams(),t=this.getModels();if(i.device)this.updateState(e);else try{this.updateState(e)}catch(e){}for(let t of this.props.extensions)t.updateState.call(this,e,t);this.setNeedsRedraw(),this._updateAttributes();let r=this.getModels()[0]!==t[0];this._postUpdate(e,r)}finally{i.viewport=n,this.props=t,this._clearChangeFlags(),r.needsUpdate=!1,r.resetOldProps()}}_finalize(){for(let e of(nu("layer.finalize",this),this.finalizeState(this.context),this.props.extensions))e.finalizeState.call(this,this.context,e)}_drawLayer({renderPass:e,shaderModuleProps:t=null,uniforms:i={},parameters:r={}}){this._updateAttributeTransition();let n=this.props,s=this.context;this.props=this.internalState.propsInTransition||n;try{t&&this.setShaderModuleProps(t);let{getPolygonOffset:n}=this.props,o=n&&n(i)||[0,0];s.device instanceof le.WebGLDevice&&s.device.setParametersWebGL({polygonOffset:o});let a=s.device instanceof le.WebGLDevice?null:function(e){let{blendConstant:t,...i}=e;return t?{pipelineParameters:i,renderPassParameters:{blendConstant:t}}:{pipelineParameters:i}}(r);if(function(e,t,i,r){for(let n of e)"webgpu"===n.device.type?(function(e,t){let i=t.props.framebuffer||(t.framebuffer??null);if(!i)return;let r=i.colorAttachments.map(e=>e?.texture?.format??null),n=i.depthStencilAttachment?.texture?.format;(!function(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(e.props.colorAttachmentFormats,r)||e.props.depthStencilAttachmentFormat!==n)&&(e.props.colorAttachmentFormats=r,e.props.depthStencilAttachmentFormat=n,e._setPipelineNeedsUpdate("attachment formats"))}(n,t),n.setParameters({...n.parameters,...r?.pipelineParameters})):n.setParameters(i)}(this.getModels(),e,r,a),s.device instanceof le.WebGLDevice)s.device.withParametersWebGL(r,()=>{let n={renderPass:e,shaderModuleProps:t,uniforms:i,parameters:r,context:s};for(let e of this.props.extensions)e.draw.call(this,n,e);this.draw(n)});else{a?.renderPassParameters&&e.setParameters(a.renderPassParameters);let n={renderPass:e,shaderModuleProps:t,uniforms:i,parameters:r,context:s};for(let e of this.props.extensions)e.draw.call(this,n,e);this.draw(n)}}finally{this.props=n}}getChangeFlags(){return this.internalState?.changeFlags}setChangeFlags(e){if(!this.internalState)return;let{changeFlags:t}=this.internalState;for(let i in e)if(e[i]){let r=!1;if("dataChanged"===i){let n=e[i],s=t[i];n&&Array.isArray(s)&&(t.dataChanged=Array.isArray(n)?s.concat(n):n,r=!0)}t[i]||(t[i]=e[i],r=!0),r&&nu("layer.changeFlag",this,i,e)}let i=!!(t.dataChanged||t.updateTriggersChanged||t.propsChanged||t.extensionsChanged);t.propsOrDataChanged=i,t.somethingChanged=i||t.viewportChanged||t.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(e,t){let i,r,n,s=(i=cj({newProps:e,oldProps:t,propTypes:e[ni],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),r=function(e,t){if(null===t)return"oldProps is null, initial diff";let i=!1,{dataComparator:r,_dataDiff:n}=e;return r?r(e.data,t.data)||(i="Data comparator detected a change"):e.data!==t.data&&(i="A new data container was supplied"),i&&n&&(i=n(e.data,t.data)||i),i}(e,t),n=!1,r||(n=function(e,t){if(null===t||"all"in e.updateTriggers&&cF(e,t,"all"))return{all:!0};let i={},r=!1;for(let n in e.updateTriggers)"all"!==n&&cF(e,t,n)&&(i[n]=!0,r=!0);return!!r&&i}(e,t)),{dataChanged:r,propsChanged:i,updateTriggersChanged:n,extensionsChanged:function(e,t){if(null===t)return!0;let i=t.extensions,{extensions:r}=e;if(r===i)return!1;if(!i||!r||r.length!==i.length)return!0;for(let e=0;e<r.length;e++)if(!r[e].equals(i[e]))return!0;return!1}(e,t),transitionsChanged:function(e,t){if(!e.transitions)return!1;let i={},r=e[ni],n=!1;for(let s in e.transitions){let o=r[s],a=o&&o.type;("number"===a||"color"===a||"array"===a)&&cD(e[s],t[s],o)&&(i[s]=!0,n=!0)}return!!n&&i}(e,t)});if(s.updateTriggersChanged)for(let e in s.updateTriggersChanged)s.updateTriggersChanged[e]&&this.invalidateAttribute(e);if(s.transitionsChanged)for(let i in s.transitionsChanged)this.internalState.uniformTransitions.add(i,t[i],e[i],e.transitions?.[i]);return this.setChangeFlags(s)}validateProps(){!function(e){let t=e[ni];for(let i in t){let r=t[i],{validate:n}=r;if(n&&!n(e[i],r))throw Error(`Invalid prop ${i}: ${e[i]}`)}}(this.props)}updateAutoHighlight(e){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(e)}_updateAutoHighlight(e){let t={highlightedObjectColor:e.picked?e.color:null},{highlightColor:i}=this.props;e.picked&&"function"==typeof i&&(t.highlightColor=i(e)),this.setShaderModuleProps({picking:t}),this.setNeedsRedraw()}_getAttributeManager(){let e=this.context;return new cR(e.device,{id:this.props.id,stats:e.stats,timeline:e.timeline})}_postUpdate(e,t){let{props:i,oldProps:r}=e,n=this.state.model;n?.isInstanced&&n.setInstanceCount(this.getNumInstances());let{autoHighlight:s,highlightedObjectIndex:o,highlightColor:a}=i;if(t||r.autoHighlight!==s||r.highlightedObjectIndex!==o||r.highlightColor!==a){let e={};Array.isArray(a)&&(e.highlightColor=a),(t||r.autoHighlight!==s||o!==r.highlightedObjectIndex)&&(e.highlightedObjectColor=Number.isFinite(o)&&o>=0?this.encodePickingColor(o):null),this.setShaderModuleProps({picking:e})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(e){if(!this.internalState)return!1;let t=!1;t=this.internalState.needsRedraw&&this.id;let i=this.getAttributeManager(),r=!!i&&i.getNeedsRedraw(e);if(t=t||r)for(let e of this.props.extensions)e.onNeedsRedraw.call(this,e);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!e.clearRedrawFlags,t}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}}c5.defaultProps=c6,c5.layerName="Layer";let c8=c5,c9=`\
layout(std140) uniform arcUniforms {
  bool greatCircle;
  bool useShortestPath;
  float numSegments;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int widthUnits;
} arc;
`,c7={name:"arc",vs:c9,fs:c9,uniformTypes:{greatCircle:"f32",useShortestPath:"f32",numSegments:"f32",widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",widthUnits:"i32"}},ue=`\
#version 300 es
#define SHADER_NAME arc-layer-vertex-shader
in vec4 instanceSourceColors;
in vec4 instanceTargetColors;
in vec3 instanceSourcePositions;
in vec3 instanceSourcePositions64Low;
in vec3 instanceTargetPositions;
in vec3 instanceTargetPositions64Low;
in vec3 instancePickingColors;
in float instanceWidths;
in float instanceHeights;
in float instanceTilts;
out vec4 vColor;
out vec2 uv;
out float isValid;
float paraboloid(float distance, float sourceZ, float targetZ, float ratio) {
float deltaZ = targetZ - sourceZ;
float dh = distance * instanceHeights;
if (dh == 0.0) {
return sourceZ + deltaZ * ratio;
}
float unitZ = deltaZ / dh;
float p2 = unitZ * unitZ + 1.0;
float dir = step(deltaZ, 0.0);
float z0 = mix(sourceZ, targetZ, dir);
float r = mix(ratio, 1.0 - ratio, dir);
return sqrt(r * (p2 - r)) * dh + z0;
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
vec2 dir_screenspace = normalize(line_clipspace * project.viewportSize);
dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
return dir_screenspace * offset_direction * width / 2.0;
}
float getSegmentRatio(float index) {
return smoothstep(0.0, 1.0, index / (arc.numSegments - 1.0));
}
vec3 interpolateFlat(vec3 source, vec3 target, float segmentRatio) {
float distance = length(source.xy - target.xy);
float z = paraboloid(distance, source.z, target.z, segmentRatio);
float tiltAngle = radians(instanceTilts);
vec2 tiltDirection = normalize(target.xy - source.xy);
vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);
return vec3(
mix(source.xy, target.xy, segmentRatio) + tilt,
z * cos(tiltAngle)
);
}
float getAngularDist (vec2 source, vec2 target) {
vec2 sourceRadians = radians(source);
vec2 targetRadians = radians(target);
vec2 sin_half_delta = sin((sourceRadians - targetRadians) / 2.0);
vec2 shd_sq = sin_half_delta * sin_half_delta;
float a = shd_sq.y + cos(sourceRadians.y) * cos(targetRadians.y) * shd_sq.x;
return 2.0 * asin(sqrt(a));
}
vec3 interpolateGreatCircle(vec3 source, vec3 target, vec3 source3D, vec3 target3D, float angularDist, float t) {
vec2 lngLat;
if(abs(angularDist - PI) < 0.001) {
lngLat = (1.0 - t) * source.xy + t * target.xy;
} else {
float a = sin((1.0 - t) * angularDist);
float b = sin(t * angularDist);
vec3 p = source3D.yxz * a + target3D.yxz * b;
lngLat = degrees(vec2(atan(p.y, -p.x), atan(p.z, length(p.xy))));
}
float z = paraboloid(angularDist * EARTH_RADIUS, source.z, target.z, t);
return vec3(lngLat, z);
}
void main(void) {
geometry.worldPosition = instanceSourcePositions;
geometry.worldPositionAlt = instanceTargetPositions;
float segmentIndex = float(gl_VertexID / 2);
float segmentSide = mod(float(gl_VertexID), 2.) == 0. ? -1. : 1.;
float segmentRatio = getSegmentRatio(segmentIndex);
float prevSegmentRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));
float nextSegmentRatio = getSegmentRatio(min(arc.numSegments - 1.0, segmentIndex + 1.0));
float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
isValid = 1.0;
uv = vec2(segmentRatio, segmentSide);
geometry.uv = uv;
geometry.pickingColor = instancePickingColors;
vec4 curr;
vec4 next;
vec3 source;
vec3 target;
if ((arc.greatCircle || project.projectionMode == PROJECTION_MODE_GLOBE) && project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
source = project_globe_(vec3(instanceSourcePositions.xy, 0.0));
target = project_globe_(vec3(instanceTargetPositions.xy, 0.0));
float angularDist = getAngularDist(instanceSourcePositions.xy, instanceTargetPositions.xy);
vec3 prevPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, prevSegmentRatio);
vec3 currPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, segmentRatio);
vec3 nextPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, nextSegmentRatio);
if (abs(currPos.x - prevPos.x) > 180.0) {
indexDir = -1.0;
isValid = 0.0;
} else if (abs(currPos.x - nextPos.x) > 180.0) {
indexDir = 1.0;
isValid = 0.0;
}
nextPos = indexDir < 0.0 ? prevPos : nextPos;
nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
if (isValid == 0.0) {
nextPos.x += nextPos.x > 0.0 ? -360.0 : 360.0;
float t = ((currPos.x > 0.0 ? 180.0 : -180.0) - currPos.x) / (nextPos.x - currPos.x);
currPos = mix(currPos, nextPos, t);
segmentRatio = mix(segmentRatio, nextSegmentRatio, t);
}
vec3 currPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, segmentRatio);
vec3 nextPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, nextSegmentRatio);
curr = project_position_to_clipspace(currPos, currPos64Low, vec3(0.0), geometry.position);
next = project_position_to_clipspace(nextPos, nextPos64Low, vec3(0.0));
} else {
vec3 source_world = instanceSourcePositions;
vec3 target_world = instanceTargetPositions;
if (arc.useShortestPath) {
source_world.x = mod(source_world.x + 180., 360.0) - 180.;
target_world.x = mod(target_world.x + 180., 360.0) - 180.;
float deltaLng = target_world.x - source_world.x;
if (deltaLng > 180.) target_world.x -= 360.;
if (deltaLng < -180.) source_world.x -= 360.;
}
source = project_position(source_world, instanceSourcePositions64Low);
target = project_position(target_world, instanceTargetPositions64Low);
float antiMeridianX = 0.0;
if (arc.useShortestPath) {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
antiMeridianX = -(project.coordinateOrigin.x + 180.) / 360. * TILE_SIZE;
}
float thresholdRatio = (antiMeridianX - source.x) / (target.x - source.x);
if (prevSegmentRatio <= thresholdRatio && nextSegmentRatio > thresholdRatio) {
isValid = 0.0;
indexDir = sign(segmentRatio - thresholdRatio);
segmentRatio = thresholdRatio;
}
}
nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
vec3 currPos = interpolateFlat(source, target, segmentRatio);
vec3 nextPos = interpolateFlat(source, target, nextSegmentRatio);
if (arc.useShortestPath) {
if (nextPos.x < antiMeridianX) {
currPos.x += TILE_SIZE;
nextPos.x += TILE_SIZE;
}
}
curr = project_common_position_to_clipspace(vec4(currPos, 1.0));
next = project_common_position_to_clipspace(vec4(nextPos, 1.0));
geometry.position = vec4(currPos, 1.0);
}
float widthPixels = clamp(
project_size_to_pixel(instanceWidths * arc.widthScale, arc.widthUnits),
arc.widthMinPixels, arc.widthMaxPixels
);
vec3 offset = vec3(
getExtrusionOffset((next.xy - curr.xy) * indexDir, segmentSide, widthPixels),
0.0);
DECKGL_FILTER_SIZE(offset, geometry);
DECKGL_FILTER_GL_POSITION(curr, geometry);
gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);
vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);
vColor = vec4(color.rgb, color.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,ut=`\
#version 300 es
#define SHADER_NAME arc-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 uv;
in float isValid;
out vec4 fragColor;
void main(void) {
if (isValid == 0.0) {
discard;
}
fragColor = vColor;
geometry.uv = uv;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,ui=[0,0,0,255],ur={getSourcePosition:{type:"accessor",value:e=>e.sourcePosition},getTargetPosition:{type:"accessor",value:e=>e.targetPosition},getSourceColor:{type:"accessor",value:ui},getTargetColor:{type:"accessor",value:ui},getWidth:{type:"accessor",value:1},getHeight:{type:"accessor",value:1},getTilt:{type:"accessor",value:0},greatCircle:!1,numSegments:{type:"number",value:50,min:1},widthUnits:"pixels",widthScale:{type:"number",value:1,min:0},widthMinPixels:{type:"number",value:0,min:0},widthMaxPixels:{type:"number",value:Number.MAX_SAFE_INTEGER,min:0}};class un extends c8{getBounds(){return this.getAttributeManager()?.getBounds(["instanceSourcePositions","instanceTargetPositions"])}getShaders(){return super.getShaders({vs:ue,fs:ut,modules:[iq,r8,c7]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getSourcePosition"},instanceTargetPositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getTargetPosition"},instanceSourceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getSourceColor",defaultValue:ui},instanceTargetColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getTargetColor",defaultValue:ui},instanceWidths:{size:1,transition:!0,accessor:"getWidth",defaultValue:1},instanceHeights:{size:1,transition:!0,accessor:"getHeight",defaultValue:1},instanceTilts:{size:1,transition:!0,accessor:"getTilt",defaultValue:0}})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{widthUnits:t,widthScale:i,widthMinPixels:r,widthMaxPixels:n,greatCircle:s,wrapLongitude:o,numSegments:a}=this.props,l={numSegments:a,widthUnits:iC[t],widthScale:i,widthMinPixels:r,widthMaxPixels:n,greatCircle:s,useShortestPath:o},c=this.state.model;c.shaderInputs.setProps({arc:l}),c.setVertexCount(2*a),c.draw(this.context.renderPass)}_getModel(){return new cc(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),topology:"triangle-strip",isInstanced:!0})}}un.layerName="ArcLayer",un.defaultProps=ur;class us{id;topology;vertexCount;indices;attributes;userData={};constructor(e){const{attributes:t={},indices:i=null,vertexCount:r=null}=e;for(const[r,n]of(this.id=e.id||lV("geometry"),this.topology=e.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={},Object.entries(t))){const e=ArrayBuffer.isView(n)?{value:n}:n;if(!ArrayBuffer.isView(e.value))throw Error(`${this._print(r)}: must be typed array or object with value as typed array`);if("POSITION"!==r&&"positions"!==r||e.size||(e.size=3),"indices"===r){if(this.indices)throw Error("Multiple indices detected");this.indices=e}else this.attributes[r]=e}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(e){return`Geometry ${this.id} attribute ${e}`}_setAttributes(e,t){return this}_calculateVertexCount(e,t){if(t)return t.value.length;let i=1/0;for(let t of Object.values(e)){let{value:e,size:r,constant:n}=t;!n&&e&&void 0!==r&&r>=1&&(i=Math.min(i,e.length/r))}return i}}let uo=`\
layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,ua={name:"icon",vs:uo,fs:uo,uniformTypes:{sizeScale:"f32",iconsTextureDim:"vec2<f32>",sizeBasis:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",billboard:"f32",sizeUnits:"i32",alphaCutoff:"f32"}},ul=`\
#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,uc=`\
#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,uu=`\
struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instancePickingColors: vec3<f32>,
  @location(7) instanceIconFrames: vec4<f32>,
  @location(8) instanceColorModes: f32,
  @location(9) instanceOffsets: vec2<f32>,
  @location(10) instancePixelOffset: vec2<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = inp.instancePickingColors;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = inp.instancePickingColors;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`,uh=()=>{},ud={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},up={x:0,y:0,width:0,height:0};function uf(e){return e&&(e.id||e.url)}function ug(e){let{device:t}=e;"webgl"===t.type?e.generateMipmapsWebGL():"webgpu"===t.type&&t.generateMipmapsWebGPU(e)}function um(e,t,i){for(let r=0;r<t.length;r++){let{icon:n,xOffset:s}=t[r];e[uf(n)]={...n,x:s,y:i}}}class uv{constructor(e,{onUpdate:t=uh,onError:i=uh}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=4,this._canvasWidth=1024,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=i}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let t=this._autoPacking?uf(e):e;return this._mapping[t]||up}setProps({loadOptions:e,autoPacking:t,iconAtlas:i,iconMapping:r,textureParameters:n}){e&&(this._loadOptions=e),void 0!==t&&(this._autoPacking=t),r&&(this._mapping=r),i&&(this._texture?.delete(),this._texture=null,this._externalTexture=i),n&&(this._samplerParameters=n)}get isLoaded(){return 0===this._pendingCount}packIcons(e,t){if(!this._autoPacking||"u"<typeof document)return;let i=Object.values(function(e,t,i){if(!e||!t)return null;i=i||{};let r={},{iterable:n,objectInfo:s}=lu(e);for(let e of n){s.index++;let n=t(e,s),o=uf(n);if(!n)throw Error("Icon is missing.");if(!n.url)throw Error("Icon url is missing.");r[o]||i[o]&&n.url===i[o].url||(r[o]={...n,source:e,sourceIndex:s.index})}return r}(e,t,this._mapping)||{});if(i.length>0){let{mapping:e,xOffset:t,yOffset:r,rowHeight:n,canvasHeight:s}=function({icons:e,buffer:t,mapping:i={},xOffset:r=0,yOffset:n=0,rowHeight:s=0,canvasWidth:o}){let a=[];for(let l=0;l<e.length;l++){let c=e[l];if(!i[uf(c)]){let{height:e,width:l}=c;r+l+t>o&&(um(i,a,n),r=0,n=s+n+t,s=0,a=[]),a.push({icon:c,xOffset:r}),r=r+l+t,s=Math.max(s,e)}}return a.length>0&&um(i,a,n),{mapping:i,rowHeight:s,xOffset:r,yOffset:n,canvasWidth:o,canvasHeight:Math.pow(2,Math.ceil(Math.log2(s+n+t)))}}({icons:i,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=n,this._mapping=e,this._xOffset=t,this._yOffset=r,this._canvasHeight=s,this._texture||(this._texture=this.device.createTexture({format:"rgba8unorm",data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||ud,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)})),this._texture.height!==this._canvasHeight&&(this._texture=function(e,t,i,r){let{width:n,height:s,device:o}=e,a=o.createTexture({format:"rgba8unorm",width:t,height:i,sampler:r,mipLevels:o.getMipLevelCount(t,i)}),l=o.createCommandEncoder();l.copyTextureToTexture({sourceTexture:e,destinationTexture:a,width:n,height:s});let c=l.finish();return o.submit(c),ug(a),e.destroy(),a}(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||ud)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement("canvas"),this._loadIcons(i)}}_loadIcons(e){let t=this._canvas.getContext("2d",{willReadFrequently:!0});for(let i of e)this._pendingCount++,sj(i.url,this._loadOptions).then(e=>{let r=uf(i),n=this._mapping[r],{x:s,y:o,width:a,height:l}=n,{image:c,width:u,height:h}=function(e,t,i,r){let n=Math.min(i/t.width,r/t.height),s=Math.floor(t.width*n),o=Math.floor(t.height*n);return 1===n?{image:t,width:s,height:o}:(e.canvas.height=o,e.canvas.width=s,e.clearRect(0,0,s,o),e.drawImage(t,0,0,t.width,t.height,0,0,s,o),{image:e.canvas,width:s,height:o})}(t,e,a,l),d=s+(a-u)/2,p=o+(l-h)/2;this._texture?.copyExternalImage({image:c,x:d,y:p,width:u,height:h}),n.x=d,n.y=p,n.width=u,n.height=h,this._texture&&ug(this._texture),this.onUpdate(u!==a||h!==l)}).catch(e=>{this.onError({url:i.url,source:i.source,sourceIndex:i.sourceIndex,loadOptions:this._loadOptions,error:e})}).finally(()=>{this._pendingCount--})}}let u_=[0,0,0,255],uy={iconAtlas:{type:"image",value:null,async:!0},iconMapping:{type:"object",value:{},async:!0},sizeScale:{type:"number",value:1,min:0},billboard:!0,sizeUnits:"pixels",sizeBasis:"height",sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},alphaCutoff:{type:"number",value:.05,min:0,max:1},getPosition:{type:"accessor",value:e=>e.position},getIcon:{type:"accessor",value:e=>e.icon},getColor:{type:"accessor",value:u_},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},onIconError:{type:"function",value:null,optional:!0},textureParameters:{type:"object",ignore:!0,value:null}};class ub extends c8{getShaders(){return super.getShaders({vs:ul,fs:uc,source:uu,modules:[iq,tt,r8,ua]})}initializeState(){this.state={iconManager:new uv(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:1},instanceIconDefs:{size:7,accessor:"getIcon",transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getColor",defaultValue:u_},instanceAngles:{size:1,transition:!0,accessor:"getAngle"},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset"}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:r}=e,n=this.getAttributeManager(),{iconAtlas:s,iconMapping:o,data:a,getIcon:l,textureParameters:c}=t,{iconManager:u}=this.state;if("string"==typeof s)return;let h=s||this.internalState.isAsyncPropLoading("iconAtlas");u.setProps({loadOptions:t.loadOptions,autoPacking:!h,iconAtlas:s,iconMapping:h?o:null,textureParameters:c}),h?i.iconMapping!==t.iconMapping&&n.invalidate("getIcon"):(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getIcon))&&u.packIcons(a,l),r.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),n.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){let{sizeScale:t,sizeBasis:i,sizeMinPixels:r,sizeMaxPixels:n,sizeUnits:s,billboard:o,alphaCutoff:a}=this.props,{iconManager:l}=this.state,c=l.getTexture();if(c){let e=this.state.model,l={iconsTexture:c,iconsTextureDim:[c.width,c.height],sizeUnits:iC[s],sizeScale:t,sizeBasis:+("height"===i),sizeMinPixels:r,sizeMaxPixels:n,billboard:o,alphaCutoff:a};e.shaderInputs.setProps({icon:l}),e.draw(this.context.renderPass)}}_getModel(){return new cc(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new us({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([-1,-1,1,-1,-1,1,1,1])}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate("getIcon"),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let t=this.getCurrentLayer()?.props.onIconError;t?t(e):tU.error(e.error.message)()}getInstanceIconDef(e){let{x:t,y:i,width:r,height:n,mask:s,anchorX:o=r/2,anchorY:a=n/2}=this.state.iconManager.getIconMapping(e);return[r/2-o,n/2-a,t,i,r,n,+!!s]}}ub.defaultProps=uy,ub.layerName="IconLayer";let uw=ub,ux=`\
layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,uP={name:"scatterplot",vs:ux,fs:ux,source:"",uniformTypes:{radiusScale:"f32",radiusMinPixels:"f32",radiusMaxPixels:"f32",lineWidthScale:"f32",lineWidthMinPixels:"f32",lineWidthMaxPixels:"f32",stroked:"f32",filled:"f32",antialiasing:"f32",billboard:"f32",radiusUnits:"i32",lineWidthUnits:"i32"}},uC=`\
#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
geometry.pickingColor = instancePickingColors;
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,uM=`\
#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,uE=`\
// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

struct ConstantAttributeUniforms {
 instancePositions: vec3<f32>,
 instancePositions64Low: vec3<f32>,
 instanceRadius: f32,
 instanceLineWidths: f32,
 instanceFillColors: vec4<f32>,
 instanceLineColors: vec4<f32>,
 instancePickingColors: vec3<f32>,
 instancePixelOffset: vec2<f32>,

 instancePositionsConstant: i32,
 instancePositions64LowConstant: i32,
 instanceRadiusConstant: i32,
 instanceLineWidthsConstant: i32,
 instanceFillColorsConstant: i32,
 instanceLineColorsConstant: i32,
 instancePickingColorsConstant: i32,
 instancePixelOffsetConstant: i32
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct ConstantAttributes {
  instancePositions: vec3<f32>,
  instancePositions64Low: vec3<f32>,
  instanceRadius: f32,
  instanceLineWidths: f32,
  instanceFillColors: vec4<f32>,
  instanceLineColors: vec4<f32>,
  instancePickingColors: vec3<f32>,
  instancePixelOffset: vec2<f32>
};

const constants = ConstantAttributes(
  vec3<f32>(0.0),
  vec3<f32>(0.0),
  0.0,
  0.0,
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec3<f32>(0.0),
  vec2<f32>(0.0)
);

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePickingColors: vec3<f32>,
  @location(8) instancePixelOffset: vec2<f32>
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  let edgePadding = select(
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    1.0,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = attributes.instancePickingColors;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, vec3<f32>(0.0)); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, offset); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = attributes.instancePickingColors;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    step(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`,uS=[0,0,0,255],uL={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:e=>e.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:uS},getLineColor:{type:"accessor",value:uS},getLineWidth:{type:"accessor",value:1},getPixelOffset:{type:"accessor",value:[0,0]},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class uA extends c8{getShaders(){return super.getShaders({vs:uC,fs:uM,source:uE,modules:[iq,tt,r8,uP]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset"}})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:t,radiusScale:i,radiusMinPixels:r,radiusMaxPixels:n,stroked:s,filled:o,billboard:a,antialiasing:l,lineWidthUnits:c,lineWidthScale:u,lineWidthMinPixels:h,lineWidthMaxPixels:d}=this.props,p={stroked:s,filled:o,billboard:a,antialiasing:l,radiusUnits:iC[t],radiusScale:i,radiusMinPixels:r,radiusMaxPixels:n,lineWidthUnits:iC[c],lineWidthScale:u,lineWidthMinPixels:h,lineWidthMaxPixels:d},f=this.state.model;f.shaderInputs.setProps({scatterplot:p}),f.draw(this.context.renderPass)}_getModel(){return new cc(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new us({topology:"triangle-strip",attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0])}}}),isInstanced:!0})}}uA.defaultProps=uL,uA.layerName="ScatterplotLayer";class uT extends c8{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(e.object=t.__source.object,e.index=t.__source.index),e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){let{_subLayerProps:i}=this.props;return i&&i[e]&&i[e].type||t}getSubLayerRow(e,t,i){return e.__source={parent:this,object:t,index:i},e}getSubLayerAccessor(e){if("function"==typeof e){let t={index:-1,data:this.props.data,target:[]};return(i,r)=>i&&i.__source?(t.index=i.__source.index,e(i.__source.object,t)):e(i,r)}return e}getSubLayerProps(e={}){let{opacity:t,pickable:i,visible:r,parameters:n,getPolygonOffset:s,highlightedObjectIndex:o,autoHighlight:a,highlightColor:l,coordinateSystem:c,coordinateOrigin:u,wrapLongitude:h,positionFormat:d,modelMatrix:p,extensions:f,fetch:g,operation:m,_subLayerProps:v}=this.props,_={id:"",updateTriggers:{},opacity:t,pickable:i,visible:r,parameters:n,getPolygonOffset:s,highlightedObjectIndex:o,autoHighlight:a,highlightColor:l,coordinateSystem:c,coordinateOrigin:u,wrapLongitude:h,positionFormat:d,modelMatrix:p,extensions:f,fetch:g,operation:m},y=v&&e.id&&v[e.id],b=y&&y.updateTriggers,w=e.id||"sublayer";if(y){let t=this.props[ni],i=e.type?e.type._propTypes:{};for(let e in y){let r=i[e]||t[e];r&&"accessor"===r.type&&(y[e]=this.getSubLayerAccessor(y[e]))}}for(let t of(Object.assign(_,e,y),_.id=`${this.props.id}-${w}`,_.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,...b},f)){let e=t.getSubLayerProps.call(this,t);e&&Object.assign(_,e,{updateTriggers:Object.assign(_.updateTriggers,e.updateTriggers)})}return _}_updateAutoHighlight(e){for(let t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let i=this.internalState.subLayers,r=!i||this.needsUpdate();for(let e of(r&&(i=nh(this.renderLayers(),Boolean),this.internalState.subLayers=i),nu("compositeLayer.renderLayers",this,r,i),i))e.parent=this}}uT.layerName="CompositeLayer";let uR=uT,uO=`\
layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,uk={name:"sdf",vs:uO,fs:uO,uniformTypes:{gamma:"f32",enabled:"f32",buffer:"f32",outlineBuffer:"f32",outlineColor:"vec4<f32>"}},uI={none:0,start:1,center:2,end:3},uz={name:"text",vs:`\
layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${uI.start}
#define ALIGN_MODE_CENTER ${uI.center}
#define ALIGN_MODE_END ${uI.end}
`,getUniforms:({contentCutoffPixels:e=[0,0],contentAlignHorizontal:t="none",contentAlignVertical:i="none",fontSize:r,viewport:n})=>({cutoffPixels:e,align:[uI[t],uI[i]],fontSize:r,flipY:n?.flipY??!1}),uniformTypes:{cutoffPixels:"vec2<f32>",align:"vec2<i32>",fontSize:"f32",flipY:"f32"}},uj=`\
#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,uD=`\
#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;class uF extends uw{getShaders(){let e=super.getShaders();return{...e,modules:[...e.modules,uz,uk],vs:uj,fs:uD}}initializeState(){super.initializeState();let e=this.getAttributeManager();e.attributes.instanceIconDefs.settings.update=this.calculateInstanceIconDefs,e.addInstanced({instancePickingColors:{type:"uint8",size:4,accessor:(e,{index:t,target:i})=>this.encodePickingColor(t,i)},instanceClipRect:{size:4,accessor:"getContentBox",defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:r}=e,{outlineColor:n}=t;if(r.updateTriggersChanged&&(r.updateTriggersChanged.getIcon||r.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate("instanceIconDefs"),n!==i.outlineColor){let e=[n[0]/255,n[1]/255,n[2]/255,(n[3]??255)/255];this.setState({outlineColor:e})}!t.sdf&&t.outlineWidth&&tU.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){let{sdf:t,smoothing:i,fontSize:r,outlineWidth:n,contentCutoffPixels:s,contentAlignHorizontal:o,contentAlignVertical:a}=this.props,{outlineColor:l}=this.state,c=n?Math.max(i,.75*(1-n)):-1,u=this.state.model,h={buffer:.75,outlineBuffer:c,gamma:i,enabled:!!t,outlineColor:l},d={contentCutoffPixels:s,contentAlignHorizontal:o,contentAlignVertical:a,fontSize:r,viewport:this.context.viewport};if(u.shaderInputs.setProps({sdf:h,text:d}),super.draw(e),t&&n){let{iconManager:e}=this.state;e.getTexture()&&(u.shaderInputs.setProps({sdf:{...h,outlineBuffer:.75}}),u.draw(this.context.renderPass))}}calculateInstanceIconDefs(e,{startRow:t,endRow:i}){let{data:r,getIcon:n,getIconOffsets:s}=this.props,o=e.getVertexOffset(t),a=e.value,{iterable:l,objectInfo:c}=lu(r,t,i);for(let t of l){c.index++;let i=n(t,c),r=s(t,c);if(i){let t=0;for(let n of Array.from(i)){let i=super.getInstanceIconDef(n);i[0]=r[2*t],i[1]+=r[2*t+1],i[6]=1,a.set(i,o),o+=e.size,t++}}}}}uF.defaultProps={getIconOffsets:{type:"accessor",value:e=>e.offsets},getContentBox:{type:"accessor",value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:"color",value:[0,0,0,255]},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none"},uF.layerName="MultiIconLayer";let uN=new Float64Array(256);for(let e=0;e<256;e++){let t=.5-Math.pow(e/255,1/2.2);uN[e]=t*Math.abs(t)}uN[255]=-1e20;class uU{constructor({fontSize:e=24,buffer:t=3,radius:i=8,cutoff:r=.25,fontFamily:n="sans-serif",fontWeight:s="normal",fontStyle:o="normal",lang:a=null}={}){this.buffer=t,this.radius=i,this.cutoff=r,this.lang=a;const l=this.size=e+4*t,c=this._createCanvas(l),u=this.ctx=c.getContext("2d",{willReadFrequently:!0});u.font=`${o} ${s} ${e}px ${n}`,u.textBaseline="alphabetic",u.textAlign="left",u.fillStyle="black",this.gridOuter=new Float64Array(l*l),this.gridInner=new Float64Array(l*l),this.f=new Float64Array(l),this.z=new Float64Array(l+1),this.v=new Uint16Array(l)}_createCanvas(e){if("u">typeof OffscreenCanvas)return new OffscreenCanvas(e,e);let t=document.createElement("canvas");return t.width=t.height=e,t}draw(e){let{width:t,actualBoundingBoxAscent:i,actualBoundingBoxDescent:r,actualBoundingBoxLeft:n,actualBoundingBoxRight:s}=this.ctx.measureText(e),o=Math.ceil(i),a=Math.floor(-n),l=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(s)-a)),c=Math.max(0,Math.min(this.size-this.buffer,o+Math.ceil(r))),u=l+2*this.buffer,h=c+2*this.buffer,d=Math.max(u*h,0),p=new Uint8ClampedArray(d),f={data:p,width:u,height:h,glyphWidth:l,glyphHeight:c,glyphTop:o,glyphLeft:a,glyphAdvance:t};if(0===l||0===c)return f;let{ctx:g,buffer:m,gridInner:v,gridOuter:_}=this;this.lang&&(g.lang=this.lang),g.clearRect(m,m,l,c),g.fillText(e,m-a,m+o);let y=g.getImageData(m,m,l,c);_.fill(1e20,0,d),v.fill(0,0,d);let b=3;for(let e=0;e<c;e++){let t=(e+m)*u+m;for(let e=0;e<l;e++,b+=4,t++){let e=y.data[b];if(0===e)continue;let i=uN[e];_[t]=Math.max(0,i),v[t]=Math.max(0,-i)}}uB(_,0,0,u,h,u,this.f,this.v,this.z);let w=Math.min(m,1);uB(v,m-w,m-w,l+2*w,c+2*w,u,this.f,this.v,this.z);let x=255/this.radius,P=255*(1-this.cutoff);for(let e=0;e<d;e++){let t=Math.sqrt(_[e])-Math.sqrt(v[e]);p[e]=Math.round(P-x*t)}return f}}function uB(e,t,i,r,n,s,o,a,l){for(let c=t;c<t+r;c++)u$(e,i*s+c,s,n,o,a,l);for(let c=i;c<i+n;c++)u$(e,c*s+t,1,r,o,a,l)}function u$(e,t,i,r,n,s,o){s[0]=0,o[0]=-1e20,o[1]=1e20,n[0]=e[t];for(let a=1,l=0,c=0;a<r;a++){n[a]=e[t+a*i];let r=a*a;do{let e=s[l];c=(n[a]-n[e]+r-e*e)/(a-e)/2}while(c<=o[l]&&--l>-1)s[++l]=a,o[l]=c,o[l+1]=1e20}for(let a=0,l=0;a<r;a++){for(;o[l+1]<a;)l++;let r=s[l],c=a-r;e[t+a*i]=n[r]+c*c}}let uV=[];function uW(e,t,i,r){let n=0;for(let s=t;s<i;s++){let t=e[s];n+=r[t]?.advance||0}return n}function uG(e,t,i,r,n,s){let o=t,a=0;for(let l=t;l<i;l++){let t=uW(e,l,l+1,n);a+t>r&&(o<l&&s.push(l),o=l,a=0),a+=t}return a}class uH{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){let t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?this.delete(e):Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e)}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){let t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}}let uq={fontFamily:"Monaco, monospace",fontWeight:"normal",characterSet:function(){let e=[];for(let t=32;t<128;t++)e.push(String.fromCharCode(t));return e}(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},uZ=new uH(3);function uY(e,t,i,r){e.font=`${r} ${i}px ${t}`,e.fillStyle="#000",e.textBaseline="alphabetic",e.textAlign="left"}class uK{constructor(){this.props={...uq}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();let t=function(e,t){let i;i=new Set("string"==typeof t?Array.from(t):t);let r=uZ.get(e);if(!r)return i;for(let e in r.mapping)i.has(e)&&i.delete(e);return i}(this._key,this.props.characterSet),i=uZ.get(this._key);if(i&&0===t.size){this._atlas!==i&&(this._atlas=i);return}let r=this._generateFontAtlas(t,i);this._atlas=r,uZ.set(this._key,r)}_generateFontAtlas(e,t){let i,{fontFamily:r,fontWeight:n,fontSize:s,buffer:o,sdf:a,radius:l,cutoff:c}=this.props,u=t&&t.data;u||((u=document.createElement("canvas")).width=1024);let h=u.getContext("2d",{willReadFrequently:!0});uY(h,r,s,n);let d=e=>(function(e,t,i){if(void 0===i){let i=e.measureText("A");return i.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(i.fontBoundingBoxAscent),descent:Math.ceil(i.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:.9*t,descent:.3*t}}let r=e.measureText(i);return r.actualBoundingBoxAscent?{advance:r.width,width:Math.ceil(r.actualBoundingBoxRight-r.actualBoundingBoxLeft),ascent:Math.ceil(r.actualBoundingBoxAscent),descent:Math.ceil(r.actualBoundingBoxDescent)}:{advance:r.width,width:r.width,ascent:.9*t,descent:.3*t}})(h,s,e);this._getFontRenderer?i=this._getFontRenderer(this.props):a&&(i={measure:d,draw:function({fontSize:e,buffer:t,radius:i,cutoff:r,fontFamily:n,fontWeight:s}){let o=new uU({fontSize:e,buffer:t,radius:i,cutoff:r,fontFamily:n,fontWeight:`${s}`});return e=>{let{data:i,width:r,height:n}=o.draw(e),s=new ImageData(r,n);for(let e=0;e<i.length;e++)s.data[4*e+3]=i[e];return{data:s,left:t,top:t}}}(this.props)});let{mapping:p,canvasHeight:f,xOffset:g,yOffsetMin:m,yOffsetMax:v}=function({characterSet:e,measureText:t,buffer:i,maxCanvasWidth:r,mapping:n={},xOffset:s=0,yOffsetMin:o=0,yOffsetMax:a=0}){let l=s,c=o,u=a;for(let s of e)if(!n[s]){let{advance:e,width:o,ascent:a,descent:h}=t(s),d=a+h;l+o+2*i>r&&(l=0,c=u),n[s]={x:l+i,y:c+i,width:o,height:d,advance:e,anchorX:o/2,anchorY:a},l+=o+2*i,u=Math.max(u,c+d+2*i)}return{mapping:n,xOffset:l,yOffsetMin:c,yOffsetMax:u,canvasHeight:Math.pow(2,Math.ceil(Math.log2(u)))}}({measureText:e=>i?i.measure(e):d(e),buffer:o,characterSet:e,maxCanvasWidth:1024,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(u.height!==f){let e=u.height>0?h.getImageData(0,0,u.width,u.height):null;u.height=f,e&&h.putImageData(e,0,0)}if(uY(h,r,s,n),i)for(let t of e){let e=p[t],{data:r,left:n=0,top:s=0}=i.draw(t),o=e.x-n,a=e.y-s,l=Math.max(0,Math.round(o)),c=Math.max(0,Math.round(a)),d=Math.min(r.width,u.width-l),f=Math.min(r.height,u.height-c);h.putImageData(r,l,c,0,0,d,f),e.x+=l-o,e.y+=c-a}else for(let t of e){let e=p[t];h.fillText(t,e.x,e.y+e.anchorY)}let _=i?i.measure():d();return{baselineOffset:(_.ascent-_.descent)/2,xOffset:g,yOffsetMin:m,yOffsetMax:v,mapping:p,data:u,width:u.width,height:u.height}}_getKey(){let{fontFamily:e,fontWeight:t,fontSize:i,buffer:r,sdf:n,radius:s,cutoff:o}=this.props;return n?`${e} ${t} ${i} ${r} ${s} ${o}`:`${e} ${t} ${i} ${r}`}}let uX=`\
layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,uJ={name:"textBackground",vs:uX,fs:uX,uniformTypes:{billboard:"f32",sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",borderRadius:"vec4<f32>",padding:"vec4<f32>",sizeUnits:"i32",stroked:"f32"}},uQ=`\
#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,u0=`\
#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,u1={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,fontSize:1,borderRadius:{type:"object",value:0},padding:{type:"array",value:[0,0,0,0]},getPosition:{type:"accessor",value:e=>e.position},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},getBoundingRect:{type:"accessor",value:[0,0,0,0]},getClipRect:{type:"accessor",value:[0,0,-1,-1]},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:[0,0,0,255]},getLineWidth:{type:"accessor",value:1}};class u2 extends c8{getShaders(){return super.getShaders({vs:uQ,fs:u0,modules:[iq,r8,uJ,uz]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:1},instanceAngles:{size:1,transition:!0,accessor:"getAngle"},instanceRects:{size:4,accessor:"getBoundingRect"},instanceClipRect:{size:4,accessor:"getClipRect",defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,accessor:"getPixelOffset"},instanceFillColors:{size:4,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}updateState(e){super.updateState(e);let{changeFlags:t}=e;t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{billboard:t,sizeScale:i,sizeUnits:r,sizeMinPixels:n,sizeMaxPixels:s,getLineWidth:o,fontSize:a}=this.props,{padding:l,borderRadius:c}=this.props;l.length<4&&(l=[l[0],l[1],l[0],l[1]]),Array.isArray(c)||(c=[c,c,c,c]);let u=this.state.model,h={billboard:t,stroked:!!o,borderRadius:c,padding:l,sizeUnits:iC[r],sizeScale:i,sizeMinPixels:n,sizeMaxPixels:s},d={fontSize:a,viewport:this.context.viewport};u.shaderInputs.setProps({textBackground:h,text:d}),u.draw(this.context.renderPass)}_getModel(){return new cc(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new us({topology:"triangle-strip",vertexCount:4,attributes:{positions:{size:2,value:new Float32Array([0,0,1,0,0,1,1,1])}}}),isInstanced:!0})}}u2.defaultProps=u1,u2.layerName="TextBackgroundLayer";let u3={start:1,middle:0,end:-1},u4={top:1,center:0,bottom:-1},u6=[0,0,0,255],u5={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,background:!1,getBackgroundColor:{type:"accessor",value:[255,255,255,255]},getBorderColor:{type:"accessor",value:u6},getBorderWidth:{type:"accessor",value:0},backgroundBorderRadius:{type:"object",value:0},backgroundPadding:{type:"array",value:[0,0,0,0]},characterSet:{type:"object",value:uq.characterSet},fontFamily:uq.fontFamily,fontWeight:uq.fontWeight,lineHeight:1,outlineWidth:{type:"number",value:0,min:0},outlineColor:{type:"color",value:u6},fontSettings:{type:"object",value:{},compare:1},wordBreak:"break-word",maxWidth:{type:"number",value:-1},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none",getText:{type:"accessor",value:e=>e.text},getPosition:{type:"accessor",value:e=>e.position},getColor:{type:"accessor",value:u6},getSize:{type:"accessor",value:32},getAngle:{type:"accessor",value:0},getTextAnchor:{type:"accessor",value:"middle"},getAlignmentBaseline:{type:"accessor",value:"center"},getPixelOffset:{type:"accessor",value:[0,0]},getContentBox:{type:"accessor",value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:["background","getBackgroundColor"]}};class u8 extends uR{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{let{size:[i,r]}=this.transformParagraph(e,t),{getTextAnchor:n,getAlignmentBaseline:s}=this.props;return[(u3["function"==typeof n?n(e,t):n]-1)*i/2,(u4["function"==typeof s?s(e,t):s]-1)*r/2,i,r]},this.getIconOffsets=(e,t)=>{let{getTextAnchor:i,getAlignmentBaseline:r}=this.props,{x:n,y:s,rowWidth:o,size:[,a]}=this.transformParagraph(e,t),l=u3["function"==typeof i?i(e,t):i],c=u4["function"==typeof r?r(e,t):r],u=n.length,h=Array(2*u),d=0;for(let e=0;e<u;e++)h[d++]=(l-1)*o[e]/2+n[e],h[d++]=(c-1)*a/2+s[e];return h}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new uK},this.props.maxWidth>0&&tU.once(1,"v8.9 breaking change: TextLayer maxWidth is now relative to text size")()}updateState(e){let{props:t,oldProps:i,changeFlags:r}=e;(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==i.lineHeight||t.wordBreak!==i.wordBreak||t.maxWidth!==i.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){let{fontSettings:e,fontFamily:t,fontWeight:i,_getFontRenderer:r}=this.props,{fontAtlasManager:n,characterSet:s}=this.state,o={...e,characterSet:s,fontFamily:t,fontWeight:i,_getFontRenderer:r};if(!n.mapping)return n.setProps(o),!0;for(let e in o)if(o[e]!==n.props[e])return n.setProps(o),!0;return!1}_updateText(){let e,{data:t,characterSet:i}=this.props,r=t.attributes?.getText,{getText:n}=this.props,s=t.startIndices,o="auto"===i&&new Set;if(r&&s){let{texts:i,characterCount:a}=function({value:e,length:t,stride:i,offset:r,startIndices:n,characterSet:s}){let o=e.BYTES_PER_ELEMENT,a=i?i/o:1,l=r?r/o:0,c=n[t]||Math.ceil((e.length-l)/a),u=s&&new Set,h=Array(t),d=e;if(a>1||l>0){d=new e.constructor(c);for(let t=0;t<c;t++)d[t]=e[t*a+l]}for(let e=0;e<t;e++){let t=n[e],i=n[e+1]||c,r=d.subarray(t,i);h[e]=String.fromCodePoint.apply(null,r),u&&r.forEach(u.add,u)}if(u)for(let e of u)s.add(String.fromCodePoint(e));return{texts:h,characterCount:c}}({...ArrayBuffer.isView(r)?{value:r}:r,length:t.length,startIndices:s,characterSet:o});e=a,n=(e,{index:t})=>i[t]}else{let{iterable:i,objectInfo:r}=lu(t);for(let t of(s=[0],e=0,i)){r.index++;let i=Array.from(n(t,r)||"");o&&i.forEach(o.add,o),e+=i.length,s.push(e)}}this.setState({getText:n,startIndices:s,numInstances:e,characterSet:o||i})}transformParagraph(e,t){let{fontAtlasManager:i}=this.state,r=i.mapping,{baselineOffset:n}=i.atlas,{fontSize:s}=i.props,o=this.state.getText,{wordBreak:a,lineHeight:l,maxWidth:c}=this.props;return function(e,t,i,r,n,s){let o=Array.from(e),a=o.length,l=Array(a),c=Array(a),u=Array(a),h=("break-word"===r||"break-all"===r)&&isFinite(n)&&n>0,d=[0,0],p=[0,0],f=0,g=t+i/2,m=0,v=0;for(let e=0;e<=a;e++){let t=o[e];if(("\n"===t||e===a)&&(v=e),v>m){let e=h?function(e,t,i,r,n=0,s){void 0===s&&(s=e.length);let o=[];return"break-all"===t?uG(e,n,s,i,r,o):!function(e,t,i,r,n,s){let o=t,a=t,l=t,c=0;for(let u=t;u<i;u++)if(" "===e[u]?l=u+1:(" "===e[u+1]||u+1===i)&&(l=u+1),l>a){let t=uW(e,a,l,n);c+t>r&&(o<a&&(s.push(a),o=a,c=0),t>r&&(t=uG(e,a,l,r,n,s),o=s[s.length-1])),a=l,c+=t}}(e,n,s,i,r,o),o}(o,r,n,s,m,v):uV;for(let t=0;t<=e.length;t++){let r=0===t?m:e[t-1],n=t<e.length?e[t]:v;!function(e,t,i,r,n,s){let o=0,a=0;for(let n=t;n<i;n++){let t=r[e[n]];t&&(a=Math.max(a,t.height))}for(let s=t;s<i;s++){let t=e[s],i=r[t];i?(n[s]=o+i.anchorX,o+=i.advance):(tU.warn(`Missing character: ${t} (${t.codePointAt(0)})`)(),n[s]=o,o+=32)}s[0]=o,s[1]=a}(o,r,n,s,l,p);for(let e=r;e<n;e++)c[e]=g,u[e]=p[0];f++,g+=i,d[0]=Math.max(d[0],p[0])}m=v}"\n"===t&&(l[m]=0,c[m]=0,u[m]=0,m++)}return d[1]=f*i,{x:l,y:c,rowWidth:u,size:d}}(o(e,t)||"",n,l*s,a,c*s,r)}renderLayers(){let{startIndices:e,numInstances:t,getText:i,fontAtlasManager:{atlas:r,mapping:n},styleVersion:s}=this.state,{data:o,_dataDiff:a,getPosition:l,getColor:c,getSize:u,getAngle:h,getPixelOffset:d,getBackgroundColor:p,getBorderColor:f,getBorderWidth:g,getContentBox:m,backgroundBorderRadius:v,backgroundPadding:_,background:y,billboard:b,fontSettings:w,outlineWidth:x,outlineColor:P,sizeScale:C,sizeUnits:M,sizeMinPixels:E,sizeMaxPixels:S,contentCutoffPixels:L,contentAlignHorizontal:A,contentAlignVertical:T,transitions:R,updateTriggers:O}=this.props,k=this.getSubLayerClass("characters",uF),I=this.getSubLayerClass("background",u2),{fontSize:z}=this.state.fontAtlasManager.props;return[y&&new I({getFillColor:p,getLineColor:f,getLineWidth:g,borderRadius:v,padding:_,getPosition:l,getSize:u,getAngle:h,getPixelOffset:d,getClipRect:m,billboard:b,sizeScale:C,sizeUnits:M,sizeMinPixels:E,sizeMaxPixels:S,fontSize:z,transitions:R&&{getPosition:R.getPosition,getAngle:R.getAngle,getSize:R.getSize,getFillColor:R.getBackgroundColor,getLineColor:R.getBorderColor,getLineWidth:R.getBorderWidth,getPixelOffset:R.getPixelOffset}},this.getSubLayerProps({id:"background",updateTriggers:{getPosition:O.getPosition,getAngle:O.getAngle,getSize:O.getSize,getFillColor:O.getBackgroundColor,getLineColor:O.getBorderColor,getLineWidth:O.getBorderWidth,getPixelOffset:O.getPixelOffset,getBoundingRect:{getText:O.getText,getTextAnchor:O.getTextAnchor,getAlignmentBaseline:O.getAlignmentBaseline,styleVersion:s}}}),{data:o.attributes&&o.attributes.background?{length:o.length,attributes:o.attributes.background}:o,_dataDiff:a,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new k({sdf:w.sdf,smoothing:Number.isFinite(w.smoothing)?w.smoothing:uq.smoothing,outlineWidth:x/(w.radius||uq.radius),outlineColor:P,iconAtlas:r,iconMapping:n,getPosition:l,getColor:c,getSize:u,getAngle:h,getPixelOffset:d,getContentBox:m,billboard:b,sizeScale:C,sizeUnits:M,sizeMinPixels:E,sizeMaxPixels:S,fontSize:z,contentCutoffPixels:L,contentAlignHorizontal:A,contentAlignVertical:T,transitions:R&&{getPosition:R.getPosition,getAngle:R.getAngle,getColor:R.getColor,getSize:R.getSize,getPixelOffset:R.getPixelOffset,getContentBox:R.getContentBox}},this.getSubLayerProps({id:"characters",updateTriggers:{all:O.getText,getPosition:O.getPosition,getAngle:O.getAngle,getColor:O.getColor,getSize:O.getSize,getPixelOffset:O.getPixelOffset,getContentBox:O.getContentBox,getIconOffsets:{getTextAnchor:O.getTextAnchor,getAlignmentBaseline:O.getAlignmentBaseline,styleVersion:s}}}),{data:o,_dataDiff:a,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:i})]}static set fontAtlasCacheLimit(e){tU.assert(Number.isFinite(e)&&e>=3,"Invalid cache limit"),uZ=new uH(e)}}function u9(e,t=.78){let i,[r,n,s]=[parseInt((i=e.replace("#","")).slice(0,2),16),parseInt(i.slice(2,4),16),parseInt(i.slice(4,6),16)];return[Math.round(r*t),Math.round(n*t),Math.round(s*t)]}u8.defaultProps=u5,u8.layerName="TextLayer";var u7=e.i(55527),he=e.i(9537);let ht=[[-129,13],[-64,55]],hi={top:90,bottom:100,left:30,right:30},hr="data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path d="M20 60h24V30a12 12 0 0 0-24 0z" fill="#6b7280"/><path d="M20 60h24V30a12 12 0 0 0-24 0z" fill="none" stroke="#2f3542" stroke-width="2"/><rect x="27" y="34" width="10" height="3" fill="#fff"/><rect x="30.5" y="30" width="3" height="14" fill="#fff"/></svg>');function hn(e,t,i,r,n){let s="";for(let o=0;o<2*i;o++){let a=o%2==0?r:n,l=Math.PI*o/i-Math.PI/2;s+=(0===o?"M":"L")+(e+Math.cos(l)*a).toFixed(1)+" "+(t+Math.sin(l)*a).toFixed(1)}return s+"Z"}let hs="data:image/svg+xml;base64,"+btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="${hn(50,50,12,48,26)}" fill="#F2994A"/><path d="${hn(50,50,12,34,15)}" fill="#F5C451"/><circle cx="50" cy="50" r="11" fill="#fff"/></svg>`),ho={version:8,sources:{na:{type:"geojson",data:(0,u7.asset)("/geo/na.geojson")}},layers:[{id:"bg",type:"background",paint:{"background-color":"#FFFFFF"}},{id:"na-fill",type:"fill",source:"na",paint:{"fill-color":["match",["get","code"],"USA","#E4EBFA","CAN","#FBE1E6","MEX","#E0F2E6","#EFEFEF"],"fill-opacity":.9}},{id:"na-line",type:"line",source:"na",paint:{"line-color":["match",["get","code"],"USA","#0A3EA1","CAN","#E4002B","MEX","#00843D","#B9BDC7"],"line-width":1.6}}]};function ha(e){return $(()=>new a7({interleaved:!1})).setProps({layers:e.layers,getTooltip:e.getTooltip}),null}e.s(["default",0,function({tl:e,t,focus:i,onSelect:r}){let[n,s]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let e=()=>s(window.innerWidth<600);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let o=(0,_.useMemo)(()=>{let s=(0,he.teamMarkers)(e,t),o=i?e.flights.filter(e=>e.code===i):(0,he.trailFlights)(e,t),a=(0,he.activeClashes)(e,t).filter(e=>!i||e.a.code===i||e.b.code===i),l=(0,he.graves)(e,t),c=(0,he.explosions)(e,t),u=new Map,h=new Map;for(let e of s){let t=`${e.pos[0].toFixed(2)},${e.pos[1].toFixed(2)}`;(h.get(t)??h.set(t,[]).get(t)).push(e)}for(let e of h.values()){let t=e.length;if(1===t){u.set(e[0].code,[0,0]);continue}let i=Math.max(14.399999999999999,20*t/(2*Math.PI));e.forEach((e,r)=>{let n=r/t*Math.PI*2-Math.PI/2;u.set(e.code,[Math.cos(n)*i,Math.sin(n)*i])})}let d=s.filter(e=>!e.flying&&!e.eliminated&&(!i||e.code===i)),p=(n?9.5:12)+ +Math.sin(5*t);return[new uA({id:"stadiums",data:e.stadiums,getPosition:e=>e.coords,getRadius:5,radiusUnits:"pixels",getFillColor:[20,23,31,35],getLineColor:[20,23,31,190],stroked:!0,lineWidthMinPixels:1.5}),new u8({id:"stadium-labels",data:e.stadiums,getPosition:e=>e.coords,getText:e=>e.city,getSize:11,getColor:[20,23,31,210],getPixelOffset:[0,-13],fontFamily:"Oswald, sans-serif",fontWeight:600,characterSet:"auto",outlineColor:[255,255,255,255],outlineWidth:2,fontSettings:{sdf:!0}}),new un({id:"trails",data:o,pickable:!0,greatCircle:!0,getHeight:he.ARC_HEIGHT,getSourcePosition:e=>e.from,getTargetPosition:e=>e.to,getSourceColor:e=>{let[t,r,n]=u9(e.color);return i?[t,r,n,e.isReturn?130:255]:[t,r,n,e.isReturn?55:e.isKnockout?220:140]},getTargetColor:e=>{let[t,r,n]=u9(e.color);return i?[t,r,n,e.isReturn?130:255]:[t,r,n,e.isReturn?55:e.isKnockout?220:140]},getWidth:e=>i?e.isKnockout?4:e.isReturn?1.6:3:e.isKnockout?2.5:e.isReturn?.8:1.4,widthUnits:"pixels",updateTriggers:{getSourceColor:i,getTargetColor:i,getWidth:i}}),new uA({id:"clash-pulse",data:a,getPosition:e=>e.coords,getRadius:e=>8+(t-e.tMatch)*260,radiusUnits:"pixels",stroked:!0,filled:!1,getLineColor:e=>{let i=Math.max(0,230-(t-e.tMatch)*700);return e.isKnockout?[228,0,43,i]:[10,62,161,.8*i]},lineWidthMinPixels:2,updateTriggers:{getRadius:t,getLineColor:t}}),new uw({id:"flags",data:s,pickable:!0,onClick:e=>{e.object&&r(e.object.code)},getPosition:e=>[e.pos[0],e.pos[1],e.alt],getIcon:e=>({id:e.eliminated?`${e.iso}_g`:e.iso,url:(0,u7.asset)(`/flags/${e.iso}${e.eliminated?"_gray":""}.png`),width:128,height:128,mask:!1}),getSize:e=>{let t=e.flying?28:20;return i&&e.code===i?1.3*t:t},getColor:e=>i&&e.code!==i?[255,255,255,70]:[255,255,255,255],getPixelOffset:e=>u.get(e.code)??[0,0],sizeUnits:"pixels",billboard:!0,updateTriggers:{getPosition:t,getIcon:t,getSize:[t,i],getColor:i,getPixelOffset:t}}),new uw({id:"resting",data:d,getPosition:e=>e.pos,getIcon:()=>({id:"sleep",url:(0,u7.asset)("/dormir.svg"),width:246,height:246,mask:!1}),getSize:p,getPixelOffset:e=>{let[i,r]=u.get(e.code)??[0,0];return[i+(n?8:10),r+(n?-10:-12)+1.2*Math.sin(12*t+e.code.charCodeAt(0))]},sizeUnits:"pixels",billboard:!0,updateTriggers:{getSize:[t,n],getPixelOffset:[t,i,n]}}),new uw({id:"explosions",data:c,getPosition:e=>e.elimCoords,getIcon:()=>({id:"boom",url:hs,width:100,height:100,mask:!1}),getSize:e=>14+46*Math.min(1,Math.max(0,(t-e.elimTime)/he.EXPL_DUR)),getColor:e=>{let i=Math.min(1,Math.max(0,(t-e.elimTime)/he.EXPL_DUR));return[255,255,255,Math.round(255*(1-i*i))]},sizeUnits:"pixels",billboard:!0,updateTriggers:{getSize:t,getColor:t}}),new uw({id:"graves",data:l,getPosition:e=>e.elimCoords,getIcon:()=>({id:"tomb",url:hr,width:64,height:64,mask:!1}),getSize:22,getPixelOffset:[16,-2],sizeUnits:"pixels"})]},[e,t,i,r,n]),a=(0,_.useRef)(null),l=(0,_.useCallback)((e=!1)=>{a.current?.getMap().fitBounds(ht,{padding:hi,animate:!e,duration:400})},[]);(0,_.useEffect)(()=>{let e=0,t=()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>l(!0))};return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),()=>{window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t),cancelAnimationFrame(e)}},[l]);let c=(0,_.useCallback)(t=>{let i=t.object,r=t.layer?.id;if(!i?.code)return null;let n=e.teams[i.code]?.name??i.code,s={background:"#fff",color:"#14171F",border:"2px solid #14171F",borderRadius:"4px",fontFamily:"Oswald, sans-serif",fontSize:"12px",padding:"6px 9px",boxShadow:"3px 3px 0 rgba(20,23,31,0.18)"};return"trails"===r?{html:`<b>${n}</b><br/>${i.fromCity} → ${i.toCity}`,style:s}:"flags"===r?{html:`<b>${n}</b>`,style:s}:null},[e]);return(0,v.jsx)(j,{ref:a,initialViewState:{longitude:-100,latitude:37,zoom:3.1},onLoad:()=>l(!0),style:{position:"absolute",inset:0,width:"100%",height:"100%"},mapStyle:ho,maxBounds:[[-150,6],[-45,66]],attributionControl:!1,children:(0,v.jsx)(ha,{layers:o,getTooltip:c})})}],35277)},14200,e=>{e.n(e.i(35277))}]);