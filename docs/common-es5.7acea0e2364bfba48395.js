function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{yTNM:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("fXoL"),i=n("tk/3"),s=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpClient=e,this.serve="../assets/mock/",this.serve2="../rpg/assets/mock/"}return _createClass(t,[{key:"getFahen",value:function(){return this.httpClient.get("".concat(this.serve,"fahen.json"))}},{key:"getLytix",value:function(){return this.httpClient.get("".concat(this.serve,"lytix.json"))}},{key:"getGameHooks",value:function(){return this.httpClient.get("".concat(this.serve,"hooks.json"))}},{key:"getLootIndividual0to4",value:function(){return this.httpClient.get("".concat(this.serve,"individual0to4.json"))}},{key:"getLootIndividual5to10",value:function(){return this.httpClient.get("".concat(this.serve,"individual5to10.json"))}},{key:"getLootIndividual11to16",value:function(){return this.httpClient.get("".concat(this.serve,"individual11to16.json"))}},{key:"getLootIndividual17plus",value:function(){return this.httpClient.get("".concat(this.serve,"individual17plus.json"))}},{key:"getLootHoard0to4",value:function(){return this.httpClient.get("".concat(this.serve,"hoard0to4.json"))}},{key:"getLootHoard5to10",value:function(){return this.httpClient.get("".concat(this.serve,"hoard5to10.json"))}},{key:"getLootHoard11to16",value:function(){return this.httpClient.get("".concat(this.serve,"hoard11to16.json"))}},{key:"getLootHoard17plus",value:function(){return this.httpClient.get("".concat(this.serve,"hoard17plus.json"))}},{key:"gems",value:function(){return this.httpClient.get("".concat(this.serve,"gems.json"))}},{key:"art",value:function(){return this.httpClient.get("".concat(this.serve,"art.json"))}},{key:"magItem",value:function(){return this.httpClient.get("".concat(this.serve,"magItem.json"))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Xb(i.a))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);