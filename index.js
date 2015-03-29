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
    if (promiseland._hasModule({ hashStr: "3b0270ff8df273a15dd882013e4f6bf2" })){ return promiseland._getModule("3b0270ff8df273a15dd882013e4f6bf2"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "3b0270ff8df273a15dd882013e4f6bf2", "module": PL$1, promising: true });
var PL$13/*process*/;try{PL$13/*process*/ = process;}catch(e){};
var PL$16/*__dirname*/;try{PL$16/*__dirname*/ = __dirname;}catch(e){};
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
var PL$9/*Fw*/;
var PL$11/*program*/;
var PL$14/*dirs*/;
var PL$15/*i*/;
var PL$17/*fw*/;
var PL$18/*server*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  var PL$5 = new __Promise();
  var PL$6 = new __Promise();
  var PL$7/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.resolve(e); }; }; };
  var PL$8 = function(e){ PL$6.resolve(e); };
  PL$7/*try catch*/(function(){
    __requireFun("promiseland-webframework").then(PL$7/*try catch*/(function(PL$10){PL$9/*Fw*/ = PL$10;
    __requireFun("commander").then(PL$7/*try catch*/(function(PL$12){PL$11/*program*/ = PL$12;
    PL$11/*program*/["version"]("0.0.1")["option"]("-p, --port [number]", "port number")["option"]("-f, --file [path]", "filename of video file")["parse"](PL$13/*process*/["argv"]);
    PL$14/*dirs*/ = [
      "app", 
      "Broadway"
    ];
    PL$15/*i*/ = 0;
    for(PL$15/*i*/ = 0;(PL$15/*i*/ < PL$14/*dirs*/["length"]);++PL$15/*i*/){{
      PL$14/*dirs*/[PL$15/*i*/] = {
        "client": ("/" + PL$14/*dirs*/[PL$15/*i*/]),
        "server": (((PL$16/*__dirname*/ + "/") + PL$14/*dirs*/[PL$15/*i*/]) + "/")
      };}};
    ;
    PL$17/*fw*/ = new PL$9/*Fw*/({
      "load": "app/start",
      "loadOnConnect": "app/connected",
      "requireAuth": false,
      "session": false,
      "dirs": PL$14/*dirs*/,
      "css": [
        "app/style.css"
      ]
    });
    PL$17/*fw*/["listen"]((PL$11/*program*/["port"] || 8080));
    __requireFun("./app/server").then(PL$7/*try catch*/(function(PL$19){PL$18/*server*/ = PL$19;
    PL$18/*server*/["setFileName"](PL$11/*program*/["file"]);
    PL$5.resolve();}), PL$8);
  ;}), PL$8);
  ;}), PL$8);
  ;})();
  PL$6.then(PL$3/*promiseland exception catcher*/(function(PL$20/*e*/){
    PL$21/*console*/["log"](PL$20/*e*/);
    PL$5.resolve();;}));
  PL$5.then(PL$3/*promiseland exception catcher*/(function(){;
  ;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/)
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
