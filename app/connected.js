(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "40324c5af51370eefba09b0093e7ae57" })){ return promiseland._getModule("40324c5af51370eefba09b0093e7ae57"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "40324c5af51370eefba09b0093e7ae57", "module": PL$1, promising: true });
var PL$10/*document*/;try{PL$10/*document*/ = document;}catch(e){};
var PL$14/*window*/;try{PL$14/*window*/ = window;}catch(e){};
var PL$17/*Uint8Array*/;try{PL$17/*Uint8Array*/ = Uint8Array;}catch(e){};
var PL$18/*ArrayBuffer*/;try{PL$18/*ArrayBuffer*/ = ArrayBuffer;}catch(e){};
var PL$21/*console*/;try{PL$21/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*server*/;
var PL$7/*Player*/;
var PL$9/*player*/;
var PL$11/*toUint8Array*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./server").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*server*/ = PL$6;
  __requireFun("Broadway/Player/Player").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*Player*/ = PL$8;
  PL$9/*player*/ = new PL$7/*Player*/();
  PL$10/*document*/["body"]["appendChild"](PL$9/*player*/["canvas"]);
  PL$11/*toUint8Array*/ = (function(PL$12/*parStr*/){
  
    ;
    var PL$13/*raw*/ = PL$14/*window*/["atob"](PL$12/*parStr*/);
    ;
    var PL$15/*rawLength*/ = PL$13/*raw*/["length"];
    ;
    var PL$16/*array*/ = new PL$17/*Uint8Array*/(new PL$18/*ArrayBuffer*/(PL$15/*rawLength*/));
    ;
    var PL$19/*i*/;
    ;
    for(PL$19/*i*/ = 0;(PL$19/*i*/ < PL$15/*rawLength*/);PL$19/*i*/++){{
      PL$16/*array*/[PL$19/*i*/] = PL$13/*raw*/["charCodeAt"](PL$19/*i*/);}};
    return PL$16/*array*/;
    ;});
  PL$5/*server*/["startStreaming"]((function(PL$20/*parDataStr*/){
  
    ;
    PL$21/*console*/["log"]("x");
    var PL$22/*bin*/ = PL$11/*toUint8Array*/(PL$20/*parDataStr*/);
    ;
    PL$9/*player*/["decode"](PL$22/*bin*/);
    ;}));
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
