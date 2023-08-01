"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function(){return _default}});var _react=_interopRequireWildcard(require("react"));var _tailwindMerge=require("tailwind-merge");var _date=require("../Utils/date");var _buttons=require("./Buttons");var _datePickerProvider=require("./DatePickerProvider");var _days=_interopRequireDefault(require("./Views/Days"));var _decades=_interopRequireDefault(require("./Views/Decades"));var _months=_interopRequireDefault(require("./Views/Months"));var _years=_interopRequireDefault(require("./Views/Years"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}var DatePickerPopup=(0,_react.forwardRef)(function(_props,ref){var _$ref,_$ref1,_$ref2;var _$ref3=(0,_react.useContext)(_datePickerProvider.DatePickerContext),selectedMonth=_$ref3.selectedMonth,selectedYear=_$ref3.selectedYear,view=_$ref3.view,options=_$ref3.options;var language=(options===null||options===void 0?void 0:options.language)?options===null||options===void 0?void 0:options.language:"en";var locale=new Intl.Locale(language);var weekStart=(locale===null||locale===void 0?void 0:(_$ref=locale.weekInfo)===null||_$ref===void 0?void 0:_$ref.firstDay)||1;var firstOfMonth=(0,_date.firstDateOfMonth)(selectedYear,selectedMonth,1);var start=(0,_date.dayOfTheWeekOf)(firstOfMonth,weekStart,weekStart);return _react.default.createElement("div",{ref:ref,className:(0,_tailwindMerge.twMerge)("absolute z-50 block pt-2 top-10",options===null||options===void 0?void 0:options.datepickerClassNames)},_react.default.createElement("div",{className:(0,_tailwindMerge.twMerge)("inline-block p-4 bg-white rounded-lg shadow-lg dark:bg-dark-gray-900",options===null||options===void 0?void 0:(_$ref1=options.theme)===null||_$ref1===void 0?void 0:_$ref1.background)},_react.default.createElement("div",null,(options===null||options===void 0?void 0:options.title)&&_react.default.createElement("div",{className:(0,_tailwindMerge.twMerge)("px-2 py-3 font-semibold text-center text-gray-900 dark:text-white",options===null||options===void 0?void 0:(_$ref2=options.theme)===null||_$ref2===void 0?void 0:_$ref2.text)},options===null||options===void 0?void 0:options.title),_react.default.createElement("div",{className:"flex justify-between mb-2"},_react.default.createElement(_buttons.ButtonPrevMonth,null),_react.default.createElement(_buttons.ButtonSelectMonth,null),_react.default.createElement(_buttons.ButtonNextMonth,null))),_react.default.createElement("div",{className:"p-1"},view==="days"&&_react.default.createElement(_days.default,{start:start}),view==="months"&&_react.default.createElement(_months.default,null),view==="years"&&_react.default.createElement(_years.default,null),view==="decades"&&_react.default.createElement(_decades.default,null)),(options===null||options===void 0?void 0:options.btnRow)?options.btnRow():null,((options===null||options===void 0?void 0:options.todayBtn)||(options===null||options===void 0?void 0:options.clearBtn))&&_react.default.createElement("div",{className:"flex mt-2 space-x-2"},(options===null||options===void 0?void 0:options.todayBtn)&&_react.default.createElement(_buttons.ButtonToday,null),(options===null||options===void 0?void 0:options.clearBtn)&&_react.default.createElement(_buttons.ButtonClear,null))))});DatePickerPopup.displayName="DatePickerPopup";var _default=DatePickerPopup;