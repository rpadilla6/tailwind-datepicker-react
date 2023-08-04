"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{DatePickerContext:function(){return DatePickerContext},default:function(){return _default}});var _react=_interopRequireWildcard(require("react"));var _options=_interopRequireDefault(require("../Options"));var _date=require("../Utils/date");function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}var DatePickerContext=(0,_react.createContext)({options:_options.default,view:"days",setView:function(){},show:false,setShow:function(){},selectedDate:new Date,changeSelectedDate:function(){},showSelectedDate:true,setShowSelectedDate:function(){},selectedMonth:0,selectedYear:0,getFormattedDate:function(){return""}});var DatePickerProvider=function(param){var children=param.children,customOptions=param.options,onChange=param.onChange,show=param.show,setShow=param.setShow,selectedDateState=param.selectedDateState,showSelecteDateState=param.showSelecteDateState;var options=_objectSpread({},_options.default,customOptions);var ref=_slicedToArray((0,_react.useState)("days"),2),view=ref[0],setView=ref[1];var ref1=_slicedToArray(selectedDateState||(0,_react.useState)((options===null||options===void 0?void 0:options.defaultDate)||new Date),2),selectedDate=ref1[0],setSelectedDate=ref1[1];var ref2=_slicedToArray(showSelecteDateState||(0,_react.useState)((options===null||options===void 0?void 0:options.defaultDate)!==null),2),showSelectedDate=ref2[0],setShowSelectedDate=ref2[1];var selectedMonth=selectedDate.getMonth();var selectedYear=selectedDate.getFullYear();var changeSelectedDate=function(action,date){if((options===null||options===void 0?void 0:options.maxDate)&&date>options.maxDate)return;if((options===null||options===void 0?void 0:options.minDate)&&date<options.minDate)return;if((options===null||options===void 0?void 0:options.disabledDates)&&options.disabledDates.indexOf(date)>=0)return;setSelectedDate(date);setShowSelectedDate(true);if((options===null||options===void 0?void 0:options.autoHide)&&view==="days"&&action==="date")setShow(false);if(onChange)onChange(date)};var getFormattedDate=function(date,formatOptions){return(0,_date.getFormattedDate)((options===null||options===void 0?void 0:options.language)?options===null||options===void 0?void 0:options.language:"en",date,formatOptions)};return _react.default.createElement(DatePickerContext.Provider,{value:{options:options,view:view,setView:setView,show:show,setShow:setShow,selectedDate:selectedDate,changeSelectedDate:changeSelectedDate,showSelectedDate:showSelectedDate,setShowSelectedDate:setShowSelectedDate,selectedMonth:selectedMonth,selectedYear:selectedYear,getFormattedDate:getFormattedDate}},children)};var _default=DatePickerProvider;