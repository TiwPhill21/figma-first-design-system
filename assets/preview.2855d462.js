var L=Object.defineProperty;var i=(n,r)=>L(n,"name",{value:r,configurable:!0});import{k as p,d as m,w as h}from"./iframe.0128e060.js";import{M as D,i as b}from"./index.1c358e82.js";import"./es.map.constructor.adab4a92.js";var _;function N(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}i(N,"_taggedTemplateLiteral");function P(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}i(P,"_classCallCheck$1");function v(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}i(v,"_defineProperties$1");function I(n,r,e){return r&&v(n.prototype,r),e&&v(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}i(I,"_createClass$1");var w=i(function(){return Math.random().toString(16).slice(2)},"generateRandomId"),Y=function(){function n(){var r=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.transport,a=e.async,s=a===void 0?!1:a;P(this,n),this.isAsync=void 0,this.sender=w(),this.events={},this.data={},this.transport=void 0,this.addPeerListener=p(function(l,u){r.addListener(l,u)},m(_||(_=N([`
      channel.addPeerListener is deprecated
    `])))),this.isAsync=s,t&&(this.transport=t,this.transport.setHandler(function(l){return r.handleEvent(l)}))}return i(n,"Channel"),I(n,[{key:"hasTransport",get:i(function(){return!!this.transport},"get")},{key:"addListener",value:i(function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},"addListener")},{key:"emit",value:i(function(e){for(var t=this,a=arguments.length,s=new Array(a>1?a-1:0),l=1;l<a;l++)s[l-1]=arguments[l];var u={type:e,args:s,from:this.sender},c={};s.length>=1&&s[0]&&s[0].options&&(c=s[0].options);var T=i(function(){t.transport&&t.transport.send(u,c),t.handleEvent(u)},"handler");this.isAsync?setImmediate(T):T()},"emit")},{key:"last",value:i(function(e){return this.data[e]},"last")},{key:"eventNames",value:i(function(){return Object.keys(this.events)},"eventNames")},{key:"listenerCount",value:i(function(e){var t=this.listeners(e);return t?t.length:0},"listenerCount")},{key:"listeners",value:i(function(e){var t=this.events[e];return t||void 0},"listeners")},{key:"once",value:i(function(e,t){var a=this.onceListener(e,t);this.addListener(e,a)},"once")},{key:"removeAllListeners",value:i(function(e){e?this.events[e]&&delete this.events[e]:this.events={}},"removeAllListeners")},{key:"removeListener",value:i(function(e,t){var a=this.listeners(e);a&&(this.events[e]=a.filter(function(s){return s!==t}))},"removeListener")},{key:"on",value:i(function(e,t){this.addListener(e,t)},"on")},{key:"off",value:i(function(e,t){this.removeListener(e,t)},"off")},{key:"handleEvent",value:i(function(e){var t=this.listeners(e.type);t&&t.length&&t.forEach(function(a){a.apply(e,e.args)}),this.data[e.type]=e.args},"handleEvent")},{key:"onceListener",value:i(function(e,t){var a=this,s=i(function l(){return a.removeListener(e,l),t.apply(void 0,arguments)},"onceListener");return s},"onceListener")}]),n}();const G=Y;var U=h.LOGLEVEL,f=h.console,E={trace:1,debug:2,info:3,warn:4,error:5,silent:10},H=U,d=E[H]||E.info,j={trace:i(function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return d<=E.trace&&f.trace.apply(f,[r].concat(t))},"trace"),debug:i(function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return d<=E.debug&&f.debug.apply(f,[r].concat(t))},"debug"),info:i(function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return d<=E.info&&f.info.apply(f,[r].concat(t))},"info"),warn:i(function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return d<=E.warn&&f.warn.apply(f,[r].concat(t))},"warn"),error:i(function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return d<=E.error&&f.error.apply(f,[r].concat(t))},"error"),log:i(function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return d<E.silent&&f.log.apply(f,[r].concat(t))},"log")};function M(){var n={setHandler:i(function(){},"setHandler"),send:i(function(){},"send")};return new G({transport:n})}i(M,"mockChannel");var S;(function(n){n.TAB="tab",n.PANEL="panel",n.TOOL="tool",n.TOOLEXTRA="toolextra",n.PREVIEW="preview",n.NOTES_ELEMENT="notes-element"})(S||(S={}));function O(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}i(O,"_defineProperties");function F(n,r,e){return r&&O(n.prototype,r),e&&O(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}i(F,"_createClass");function W(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}i(W,"_classCallCheck");var B=F(i(function n(){var r=this;W(this,n),this.loaders={},this.elements={},this.config={},this.channel=void 0,this.serverChannel=void 0,this.promise=void 0,this.resolve=void 0,this.getChannel=function(){return r.channel||r.setChannel(M()),r.channel},this.getServerChannel=function(){if(!r.serverChannel)throw new Error("Accessing non-existent serverChannel");return r.serverChannel},this.ready=function(){return r.promise},this.hasChannel=function(){return!!r.channel},this.hasServerChannel=function(){return!!r.serverChannel},this.setChannel=function(e){r.channel=e,r.resolve()},this.setServerChannel=function(e){r.serverChannel=e},this.getElements=function(e){return r.elements[e]||(r.elements[e]={}),r.elements[e]},this.addPanel=function(e,t){r.add(e,Object.assign({type:S.PANEL},t))},this.add=function(e,t){var a=t.type,s=r.getElements(a);s[e]=Object.assign({id:e},t)},this.setConfig=function(e){Object.assign(r.config,e)},this.getConfig=function(){return r.config},this.register=function(e,t){r.loaders[e]&&j.warn("".concat(e," was loaded twice, this could have bad side-effects")),r.loaders[e]=t},this.loadAddons=function(e){Object.values(r.loaders).forEach(function(t){return t(e)})},this.promise=new Promise(function(e){r.resolve=function(){return e(r.getChannel())}})},"AddonStore")),R="__STORYBOOK_ADDONS";function V(){return h[R]||(h[R]=new B),h[R]}i(V,"getAddonsStore");var $=V(),o;(function(n){n.CHANNEL_CREATED="channelCreated",n.CONFIG_ERROR="configError",n.STORY_INDEX_INVALIDATED="storyIndexInvalidated",n.STORY_SPECIFIED="storySpecified",n.SET_STORIES="setStories",n.SET_CURRENT_STORY="setCurrentStory",n.CURRENT_STORY_WAS_SET="currentStoryWasSet",n.FORCE_RE_RENDER="forceReRender",n.FORCE_REMOUNT="forceRemount",n.PRELOAD_STORIES="preloadStories",n.STORY_PREPARED="storyPrepared",n.STORY_CHANGED="storyChanged",n.STORY_UNCHANGED="storyUnchanged",n.STORY_RENDERED="storyRendered",n.STORY_MISSING="storyMissing",n.STORY_ERRORED="storyErrored",n.STORY_THREW_EXCEPTION="storyThrewException",n.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",n.UPDATE_STORY_ARGS="updateStoryArgs",n.STORY_ARGS_UPDATED="storyArgsUpdated",n.RESET_STORY_ARGS="resetStoryArgs",n.SET_GLOBALS="setGlobals",n.UPDATE_GLOBALS="updateGlobals",n.GLOBALS_UPDATED="globalsUpdated",n.REGISTER_SUBSCRIPTION="registerSubscription",n.PREVIEW_KEYDOWN="previewKeydown",n.SELECT_STORY="selectStory",n.STORIES_COLLAPSE_ALL="storiesCollapseAll",n.STORIES_EXPAND_ALL="storiesExpandAll",n.DOCS_RENDERED="docsRendered",n.SHARED_STATE_CHANGED="sharedStateChanged",n.SHARED_STATE_SET="sharedStateSet",n.NAVIGATE_URL="navigateUrl",n.UPDATE_QUERY_PARAMS="updateQueryParams"})(o||(o={}));o.CHANNEL_CREATED;o.CONFIG_ERROR;o.STORY_INDEX_INVALIDATED;o.STORY_SPECIFIED;o.SET_STORIES;o.SET_CURRENT_STORY;o.CURRENT_STORY_WAS_SET;o.FORCE_RE_RENDER;var x=o.FORCE_REMOUNT;o.STORY_PREPARED;o.STORY_CHANGED;o.STORY_UNCHANGED;o.PRELOAD_STORIES;o.STORY_RENDERED;o.STORY_MISSING;o.STORY_ERRORED;o.STORY_THREW_EXCEPTION;var X=o.STORY_RENDER_PHASE_CHANGED;o.UPDATE_STORY_ARGS;o.STORY_ARGS_UPDATED;o.RESET_STORY_ARGS;o.SET_GLOBALS;o.UPDATE_GLOBALS;o.GLOBALS_UPDATED;o.REGISTER_SUBSCRIPTION;o.PREVIEW_KEYDOWN;o.SELECT_STORY;o.STORIES_COLLAPSE_ALL;o.STORIES_EXPAND_ALL;o.DOCS_RENDERED;o.SHARED_STATE_CHANGED;o.SHARED_STATE_SET;o.NAVIGATE_URL;o.UPDATE_QUERY_PARAMS;function k(n,r){return J(n)||z(n,r)||Q(n,r)||K()}i(k,"_slicedToArray");function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(K,"_nonIterableRest");function Q(n,r){if(!!n){if(typeof n=="string")return g(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(n,r)}}i(Q,"_unsupportedIterableToArray");function g(n,r){(r==null||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}i(g,"_arrayLikeToArray");function z(n,r){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var t=[],a=!0,s=!1,l,u;try{for(e=e.call(n);!(a=(l=e.next()).done)&&(t.push(l.value),!(r&&t.length===r));a=!0);}catch(c){s=!0,u=c}finally{try{!a&&e.return!=null&&e.return()}finally{if(s)throw u}}return t}}i(z,"_iterableToArrayLimit");function J(n){if(Array.isArray(n))return n}i(J,"_arrayWithHoles");var y=new D(global),q=y.fn.bind(y),Z=b({action:q},{retain:!0}),ee=Z.action,C=$.getChannel(),A=[];C.on(x,function(){return A.forEach(function(n){var r;return n==null||(r=n.mockClear)===null||r===void 0?void 0:r.call(n)})});C.on(X,function(n){var r=n.newPhase;r==="loading"&&A.forEach(function(e){var t;return e==null||(t=e.mockClear)===null||t===void 0?void 0:t.call(e)})});var ne=i(function(r){var e=r.id,t=r.initialArgs;return Object.entries(t).reduce(function(a,s){var l=k(s,2),u=l[0],c=l[1];return typeof c=="function"&&c.name==="actionHandler"?(Object.defineProperty(c,"name",{value:u,writable:!1}),Object.defineProperty(c,"__storyId__",{value:e,writable:!1}),a[u]=ee(c),A.push(a[u]),a):(a[u]=c,a)},{})},"addActionsFromArgTypes"),se=[ne];export{se as argsEnhancers};
//# sourceMappingURL=preview.2855d462.js.map
