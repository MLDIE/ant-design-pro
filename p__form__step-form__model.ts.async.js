(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{kWX1:function(e,t,r){"use strict";r.r(t);var a=r("p0pE"),n=r.n(a),p=r("d6i3"),c=r.n(p),u=r("1l/V"),o=r.n(u),s=r("io9h");function i(e){return f.apply(this,arguments)}function f(){return(f=o()(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.a)("/api/forms",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var m={namespace:"formStepForm",state:{current:"info",step:{payAccount:"ant-design@alipay.com",receiverAccount:"test@example.com",receiverName:"Alex",amount:"500"}},effects:{submitStepForm:c.a.mark(function e(t,r){var a,n,p;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,p=r.put,e.next=4,n(i,a);case 4:return e.next=6,p({type:"saveStepFormData",payload:a});case 6:return e.next=8,p({type:"saveCurrentStep",payload:"result"});case 8:case"end":return e.stop()}},e)})},reducers:{saveCurrentStep:function(e,t){var r=t.payload;return n()({},e,{current:r})},saveStepFormData:function(e,t){var r=t.payload;return n()({},e,{step:n()({},e.step,r)})}}};t.default=m}}]);