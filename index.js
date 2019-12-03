"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function ownKeys(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function _objectSpread2(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(o,!0).forEach(function(e){_defineProperty(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var OPEN="js-popup-open",TARGET="js-popup",CLOSE="js-popup-close",IS_ACTIVE="is-active",NO_SCROLL="no-scroll",BTN_IN_POPUP_OPEN="js-btn-in-popup-open",defaultOptions={toggleBodyClass:!0,escapeHandler:!0,closeOnOverlayClick:!0},Popup=function(){function t(e){_classCallCheck(this,t),this.popups=_toConsumableArray(document.querySelectorAll(".".concat(TARGET))),this.options=_objectSpread2({},defaultOptions,{},e),this.open=this.handleOpen.bind(this),this.close=this.handleClose.bind(this),this.btn=null,this.popup=null,this.closeTrigger=null}return _createClass(t,[{key:"init",value:function(){this._addListeners()}},{key:"destroy",value:function(){this._removeListeners(),this._removeOpenClassNames()}},{key:"handleEscClick",value:function(e){if(e&&"keydown"===e.type&&e&&"Escape"===e.code){if(!this.openPopups.length)return;this.closeTrigger="Escape button",this.closeAll(),this.onClose&&this.onClose()}}},{key:"handleBtnClick",value:function(e){if(e&&"click"===e.type){var t=e.target.closest(".".concat(CLOSE));if(this.options.closeOnOverlayClick){var o=e.target.classList&&e.target.classList.contains(TARGET)?e.target:null;this.closeTrigger=t||o}else this.closeTrigger=t;if(!this.closeTrigger)return;e.preventDefault(),this.closePopup()}}},{key:"handleOpen",value:function(e){this.btn=e.target.closest(".".concat(OPEN)),this.btn&&(e.target.closest(".".concat(BTN_IN_POPUP_OPEN))||(e.preventDefault(),this.openPopup()))}},{key:"handleClose",value:function(e){this.options.escapeHandler&&this.handleEscClick(e),this.handleBtnClick(e)}},{key:"closePopup",value:function(){this.popup=this.closeTrigger.closest(".".concat(TARGET)),this.name=this.popup.dataset.popup,this.btn=document.querySelector(".".concat(OPEN,'[data-popup-target="').concat(this.name,'"]')),this.popup.classList.remove(IS_ACTIVE),this.options.toggleBodyClass&&document.body.classList.remove(NO_SCROLL),this.onClose&&this.onClose()}},{key:"openPopup",value:function(){this.name=this.btn.dataset.popupTarget,this.popup=document.querySelector(".".concat(TARGET,'[data-popup="').concat(this.name,'"]')),this.popup&&(this.closeAll(),this.popup.classList.add(IS_ACTIVE),this.options.toggleBodyClass&&document.body.classList.add(NO_SCROLL),this.onOpen&&this.onOpen())}},{key:"openTarget",value:function(e){this.name=e.dataset.popup,this.btn=document.querySelector(".".concat(OPEN,'[data-popup-target="').concat(this.name,'"]')),this.openPopup()}},{key:"closeAll",value:function(){this.openPopups.length&&(this.openPopups.forEach(function(e){e.classList.remove(IS_ACTIVE)}),this.options.toggleBodyClass&&document.body.classList.remove(NO_SCROLL))}},{key:"_addListeners",value:function(){document.addEventListener("click",this.open),document.addEventListener("click",this.close),document.addEventListener("keydown",this.close)}},{key:"_removeListeners",value:function(){document.removeEventListener("click",this.open),document.removeEventListener("click",this.close),document.removeEventListener("keydown",this.close)}},{key:"_removeOpenClassNames",value:function(){this.popups.forEach(function(e){e.classList.remove(IS_ACTIVE)}),this.options.toggleBodyClass&&document.body.classList.remove(NO_SCROLL)}},{key:"openPopups",get:function(){return this.popups.filter(function(e){return e.classList.contains(IS_ACTIVE)})}},{key:"closeBtns",get:function(){return this.popup?_toConsumableArray(this.popup.querySelectorAll(".".concat(CLOSE))):null}}]),t}();module.exports=Popup;
