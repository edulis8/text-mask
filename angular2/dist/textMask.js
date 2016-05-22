!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular2/common"),require("angular2/core")):"function"==typeof define&&define.amd?define(["angular2/common","angular2/core"],t):"object"==typeof exports?exports.textMask=t(require("angular2/common"),require("angular2/core")):e.textMask=t(e.ng.common,e.ng.core)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,i=3>o?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(i=(3>o?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},o=r(3),i=r(8),u=r(7),c=function(){function e(e,t){this.model=t,this.textMaskConfig={mask:"",guide:!0},this.inputElement=e.nativeElement}return e.prototype.ngOnInit=function(e){var t=(void 0===e?{}:e).mask,r=void 0===t?this.textMaskConfig.mask:t;this.conformedInput="",this.placeholder=o.convertMaskToPlaceholder(r),this.originalPlaceholder=this.originalPlaceholder||this.placeholder},e.prototype.ngOnChanges=function(e){var t=e.textMaskConfig,r=t.currentValue.mask,n=t.previousValue.mask,a=t.currentValue.guide,o=t.previousValue.guide;r===n&&a===o||(this.ngOnInit({mask:r}),this.model.valueAccessor.writeValue(""))},e.prototype.onInput=function(e){void 0===e&&(e="");var t=this,r=t.textMaskConfig,n=r.mask,a=r.guide,i=t.placeholder,u=t.conformedInput,c=o.conformToMask(e,n,a===!1?{guide:a,previousConformedInput:u}:{}),s=c.output,l=o.adjustCaretPosition({previousConformedInput:u,conformToMaskResults:c,currentCaretPosition:this.inputElement.selectionStart}),f=s===i&&0===l?"":s;this.conformedInput=f,this.model.valueAccessor.writeValue(f),o.safeSetSelection(this.inputElement,l)},e.prototype.updateModel=function(e){this.model.viewToModelUpdate(e)},n([i.Input("textMask"),a("design:type",Object)],e.prototype,"textMaskConfig",void 0),e=n([i.Directive({selector:"input[textMask][ngModel]",host:{"[placeholder]":"originalPlaceholder","(input)":"onInput($event.target.value)","(keyup)":"updateModel($event.target.value)"}}),a("design:paramtypes",[i.ElementRef,u.NgModel])],e)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=c,t.Directive=c;var s=r(3);t.conformToMask=s.conformToMask,t.convertMaskToPlaceholder=s.convertMaskToPlaceholder,t.adjustCaretPosition=s.adjustCaretPosition},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).map(function(e){return-1!==d.maskingCharacters.indexOf(e)?d.placeholderCharacter:e}).join("")}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).reduce(function(e,t){return-1===d.maskingCharacters.indexOf(t)&&-1===e.indexOf(t)&&e.push(t),e},[])}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function i(e,t){return-1!==e.indexOf(t)}function u(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case d.maskingCharactersEnums.numeric:return s(e);case d.maskingCharactersEnums.uppercase:case d.maskingCharactersEnums.lowercase:case d.maskingCharactersEnums.alphabetic:return l(e);case d.maskingCharactersEnums.alphanumeric:return s(e)||l(e);case d.maskingCharactersEnums.any:return!0;default:return!1}}function c(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case d.maskingCharactersEnums.uppercase:return e.toUpperCase();case d.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function s(e){return!isNaN(e)&&" "!==e}function l(e){return/^[a-zA-Z]+$/.test(e)}function f(e,t){for(var r=e.length>t.length?e.length:t.length,n=0;r>n;n++)if(e[n]!==t[n])return n;return null}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.getDelimiters=a,t.tokenize=o,t.contains=i,t.isAcceptableCharacter=u,t.potentiallyTransformCharacter=c,t.getIndexOfFirstChange=f;var d=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(a).default}});var o=r(4);Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return n(o).default}});var i=r(6);Object.defineProperty(t,"safeSetSelection",{enumerable:!0,get:function(){return n(i).default}});var u=r(2);Object.defineProperty(t,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return u.convertMaskToPlaceholder}})},function(e,t,r){"use strict";function n(e){var t=e.previousConformedInput,r=void 0===t?"":t,n=e.conformToMaskResults,i=void 0===n?{}:n,u=e.currentCaretPosition,c=void 0===u?0:u;if(0===c)return 0;var s=i.output,l=void 0===s?"":s,f=i.meta,d=void 0===f?{}:f,h=d.input,p=void 0===h?"":h,m=d.mask,v=void 0===m?"":m,g=(0,a.getIndexOfFirstChange)(r,p),k=g-c>1;if(k)return c;var C=(0,a.convertMaskToPlaceholder)(v),y=!(p.length<r.length),M=Math.abs(r.length-p.length)>1,b=y&&(r===l||l===C),P=""===r&&l===C,x=M?l:C,j=C[g]!==o.placeholderCharacter,O=c;if(M)O=0;else if(b)O--;else if(y)for(var _=c;_<C.length;_++){var T=j&&P===!1;if(C[_]===o.placeholderCharacter){O=_+(T?1:0);break}}if(y){for(var E=O;E<=x.length;E++)if(x[E]===o.placeholderCharacter||E===x.length)return E>l.length?l.length:E}else for(var A=O;A>=0;A--)if(x[A-1]===o.placeholderCharacter||0===A)return A}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(2),o=r(1)},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=(0,a.convertMaskToPlaceholder)(t),i=r.guide,u=void 0===i?!0:i,c=r.previousConformedInput,s=u===!1&&void 0!==c,l=(0,a.tokenize)(e),f=s&&!(e.length<c.length),d="";if(""!==e){e:for(var h=0;h<n.length;h++){var p=n[h];if(p===o.placeholderCharacter){if(l.length>0)for(;l.length>0;){var m=l.shift();if(m===o.placeholderCharacter&&s!==!0){d+=o.placeholderCharacter;continue e}if((0,a.isAcceptableCharacter)(m,t[h])){d+=(0,a.potentiallyTransformCharacter)(m,t[h]);continue e}}if(s)break;d+=p}else d+=p}if(s&&f===!1){for(var v=null,g=0;g<d.length;g++)n[g]===o.placeholderCharacter&&d[g]!==o.placeholderCharacter&&(v=g);d=null!==v?d.substr(0,v+1):""}}return{output:d,meta:{input:e,mask:t,guide:u}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(2),o=r(1)},function(e,t){"use strict";function r(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(t,r){t.exports=e},function(e,r){e.exports=t}])});