"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function(){return _default}});var _react=_interopRequireWildcard(require("react"));var _tailwindMerge=require("tailwind-merge");var _options=_interopRequireDefault(require("../Options"));var _datePickerPopup=_interopRequireDefault(require("./DatePickerPopup"));var _datePickerProvider=_interopRequireWildcard(require("./DatePickerProvider"));function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}var DatePicker=function(param){var children=param.children,options=param.options,onChange=param.onChange,classNames=param.classNames,show=param.show,setShow=param.setShow,selectedDateState=param.selectedDateState;return _react.default.createElement("div",{className:(0,_tailwindMerge.twMerge)("w-full",classNames)},_react.default.createElement(_datePickerProvider.default,{options:options,onChange:onChange,show:show,setShow:setShow,selectedDateState:selectedDateState},_react.default.createElement(DatePickerMain,{options:options},children)))};var DatePickerMain=(0,_react.forwardRef)(function(param,ref){var customOptions=param.options,children=param.children;var options=_objectSpread({},_options.default,customOptions);var _$ref=(0,_react.useContext)(_datePickerProvider.DatePickerContext),setShow=_$ref.setShow,show=_$ref.show;var InputRef=(0,_react.useRef)(null);var DatePickerRef=(0,_react.useRef)(null);(0,_react.useEffect)(function(){var handleClickOutside=function(event){if(!((InputRef===null||InputRef===void 0?void 0:InputRef.current)&&(DatePickerRef===null||DatePickerRef===void 0?void 0:DatePickerRef.current)))return;if(!InputRef.current.contains(event.target)&&!DatePickerRef.current.contains(event.target)){setShow(false)}};document.addEventListener("mousedown",function(event){return handleClickOutside(event)});return function(){document.removeEventListener("mousedown",function(event){return handleClickOutside(event)})}},[DatePickerRef,InputRef,setShow]);return _react.default.createElement(_react.default.Fragment,null,children?children:_react.default.createElement("div",{className:"relative"},_react.default.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},_react.default.createElement(CalendarIcon,null)),_react.default.createElement(Input,{ref:InputRef,idProp:options===null||options===void 0?void 0:options.inputIdProp,nameProp:options===null||options===void 0?void 0:options.inputNameProp,placeholderProp:options===null||options===void 0?void 0:options.inputPlaceholderProp,dateFormat:options===null||options===void 0?void 0:options.inputDateFormatProp})),show&&_react.default.createElement(_datePickerPopup.default,{ref:ref!==null&&ref!==void 0?ref:DatePickerRef}))});DatePickerMain.displayName="DatePickerMain";var Input=(0,_react.forwardRef)(function(props,ref){var _$ref;var _$ref1=(0,_react.useContext)(_datePickerProvider.DatePickerContext),setShow=_$ref1.setShow,selectedDate=_$ref1.selectedDate,showSelectedDate=_$ref1.showSelectedDate,options=_$ref1.options,getFormattedDate=_$ref1.getFormattedDate;var nameProp=props.nameProp||"date";var idProp=props.idProp||nameProp;var placeholderProp=props.placeholderProp||"Select Date";var format=props.dateFormat||null;return _react.default.createElement("input",{ref:ref,type:"text",name:nameProp,id:idProp,className:(0,_tailwindMerge.twMerge)("pl-9 pr-2.5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",options===null||options===void 0?void 0:(_$ref=options.theme)===null||_$ref===void 0?void 0:_$ref.input),placeholder:placeholderProp,value:selectedDate&&showSelectedDate?getFormattedDate(selectedDate,format):"",onFocus:function(){return setShow(true)},readOnly:true})});Input.displayName="Input";var CalendarIcon=function(){var ref;var options=(0,_react.useContext)(_datePickerProvider.DatePickerContext).options;return _react.default.createElement("svg",{"aria-hidden":"true",className:(0,_tailwindMerge.twMerge)("w-5 h-5 text-gray-500 dark:text-gray-400",options===null||options===void 0?void 0:(ref=options.theme)===null||ref===void 0?void 0:ref.inputIcon),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},_react.default.createElement("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}))};var _default=DatePicker;