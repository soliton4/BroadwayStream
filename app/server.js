(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
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
    if (promiseland._hasModule({ hashStr: "5dfb761f6f9f7a18826904ff284db2fe" })){ return promiseland._getModule("5dfb761f6f9f7a18826904ff284db2fe"); };
var PL$18/*console*/;try{PL$18/*console*/ = console;}catch(e){};
var PL$24/*stream*/;try{PL$24/*stream*/ = stream;}catch(e){};
var PL$32/*filename*/;try{PL$32/*filename*/ = filename;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$3/*Stream*/;
var PL$34/*local*/;
var _TPL$34/*local*/;

/* ---------------------------- */
/* type Stream */
var PL$2/*type:Stream*/ = classSystem._createProvisionalClass();
PL$3/*Stream*/ = PL$2/*type:Stream*/
var PL$4/*Stream-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:Stream*/).then(function(parType){
  PL$2/*type:Stream*/ = parType;
  PL$4/*Stream-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:Stream*/);
});
var PL$5/*type:Stream**/ = classSystem._createPromiseOfClass(PL$2/*type:Stream*/);
var PL$6/*Stream**/ = PL$5/*type:Stream**/;
var PL$7/*Stream*-constructor*/ = undefined;classSystem.readyPromise(PL$5/*type:Stream**/).then(function(parType){
  PL$5/*type:Stream**/ = parType;
  PL$7/*Stream*-constructor*/ = classSystem.getTypeConstructor(PL$5/*type:Stream**/);
});
/* ---------------------------- */

var PL$27/*getStream*/ = (function(f){
promiseland.registerRemote("server", "5dfb761f6f9f7a18826904ff284db2fe", "PL$33", f, (classSystem.createFunctionType({ "return": PL$5/*type:Stream**/, arguments: []})));
if (promiseland.profileHas("server")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("5dfb761f6f9f7a18826904ff284db2fe", "PL$33", arguments);
}
};
})((function(t){return t;})(function (PL$28/*session*/){
var PL$29;
var _TPL$29;
(function(){ var vAr = new PL$7/*Stream*-constructor*/(); PL$29 = vAr[0]; _TPL$29 = vAr[1]; })();var PL$30/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$29.reject(e);
    };
  };
};
var PL$31/*catch rejected*/ = function(e){
  PL$29.reject(e);
};
PL$30/*promiseland exception catcher*/(function(){

  ;
  PL$29.resolve(new PL$4/*Stream-constructor*/(PL$32/*filename*/)); return;
  PL$29.resolve(); return;
})();return [PL$29, _TPL$29];
}));

  ;
  var PL$8/*fileName*/;
  ;
  var PL$9/*isServer*/;
  ;
  var PL$10/*spawn*/;
  ;
  (function(){
  if (!promiseland.profileHas("server")){
  var p = new __Promise();
  p.reject({id: 14, msg: "function does not execute in this frame."});
  return p;
  };
  var PL$11 = new __Promise();
  var PL$13/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$11.reject(e);
      };
    };
  };
  var PL$14/*catch rejected*/ = function(e){
    PL$11.reject(e);
  };
  var PL$15/*cp*/;
  PL$13/*promiseland exception catcher*/(function(){
  
    ;
    PL$9/*isServer*/ = true;
    __requireFun("child_process").then(PL$13/*promiseland exception catcher*/(function(PL$16){PL$15/*cp*/ = PL$16;
    PL$10/*spawn*/ = PL$15/*cp*/["spawn"];
    PL$11.resolve(); return;}), PL$14/*catch rejected*/);
    ;
  })();return PL$11;
  })();
  classSystem._resolveProvisional(PL$2/*type:Stream*/, classSystem.createClass({className: "Stream",members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"filename","type":classSystem.getBuiltinType("var")},{"name":"start","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: []}))},{"name":"streamData","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"serve":1,"line":12,"column":12,"offset":156}, "hashStr": "5dfb761f6f9f7a18826904ff284db2fe", "name": "Stream"}, {"constructor": (function(PL$17/*parFilename*/){
  
    ;
    (function(s, v){ v = s[10](v); s[9] = v; return v; })(this, PL$17/*parFilename*/);
    ;}), "filename": undefined, "start": (function(){
  var PL$22/*self*/;
  var _TPL$22/*self*/;
  
    try{;
    PL$18/*console*/["log"]("start executed");
    if(PL$9/*isServer*/){
      PL$18/*console*/["log"]("starting stream");
      try
      {
        var PL$19/*params*/ = [
          "-y", 
          "-i", 
          this[9], 
          "-r", 
          "30000/1001", 
          "-b:a", 
          "2M", 
          "-bt", 
          "4M", 
          "-vcodec", 
          "libx264", 
          "-pass", 
          "1", 
          "-coder", 
          "0", 
          "-bf", 
          "0", 
          "-flags", 
          "-loop", 
          "-wpredp", 
          "0", 
          "-an", 
          "-f", 
          "h264", 
          "-"
        ];
        ;
        var PL$20/*x*/ = "";
        ;
        var PL$21/*i*/ = 0;
        ;
        for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$19/*params*/["length"]);++PL$21/*i*/){{
          PL$20/*x*/ += " ";
          PL$20/*x*/ += PL$19/*params*/[PL$21/*i*/];}};
        ;
        PL$18/*console*/["log"](("ffmpeg " + PL$20/*x*/));
        this[5]["process"] = PL$10/*spawn*/("ffmpeg", PL$19/*params*/);
        this[5]["stream"] = this[5]["process"]["stdout"];
        /*tracked assign*/(function(v){
        if (_TPL$22/*self*/){ _TPL$22/*self*/(); };
        PL$22/*self*/ = v;
        if (v){
        _TPL$22/*self*/ = v[2]();
        }else{
        _TPL$22/*self*/ = undefined;
        };
        return v;
        })(this)/*end assign*/
        ;
        this[5]["stream"]["on"]("data", (function(PL$23/*data*/){
        
          ;
          if(! (PL$23/*data*/ && PL$23/*data*/["length"])){
            return;
          };
          ;
          PL$22/*self*/[13](PL$23/*data*/["toString"]("base64"));
          ;}));
        PL$24/*stream*/["on"]("error", (function(PL$25/*err*/){
        
          ;
          PL$18/*console*/["log"]("some stream error");
          PL$18/*console*/["log"](PL$25/*err*/);
          ;}));}catch(PL$26/*e*/){
        PL$18/*console*/["log"](PL$26/*e*/);};
      ;
    };
    ;
    if (_TPL$22/*self*/){ _TPL$22/*self*/();};}catch(e){if (_TPL$22/*self*/){ _TPL$22/*self*/();};throw e};;}), "streamData": (function(PL$23/*data*/){
  
    ;
    if(! PL$9/*isServer*/){
    };
    ;
    if(this[5]["cb"]){
      this[5]["cb"](PL$23/*data*/);
    };
    ;
    ;})}));PL$3/*Stream*/;
  /* function getStream (){} - hoisted */;
  ;
  PL$34/*local*/;
  var PL$35/*server*/ = {
    "startStreaming": (function(PL$36/*parCb*/){
    var PL$37 = new __Promise();
    var PL$39/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$37.reject(e);
        };
      };
    };
    var PL$40/*catch rejected*/ = function(e){
      PL$37.reject(e);
    };
    PL$39/*promiseland exception catcher*/(function(){
    
      ;
      /*temptracked promise*/(function(vAr){
      var r = vAr[0].thenReuse(vAr[1], PL$39/*promiseland exception catcher*/(function(PL$41){/*temp tracked assign*/(function(vAr){
        if (_TPL$34/*local*/){ _TPL$34/*local*/(); };
        if(vAr){
          var v = vAr[0];
          PL$34/*local*/ = v;
          _TPL$34/*local*/ = vAr[1];
          return v;
        }else{
          PL$34/*local*/ = undefined; 
          _TPL$34/*local*/ = undefined;
          return;
        };
      })(PL$41)/*end temp assign*/;
      PL$34/*local*/[5]["cb"] = PL$36/*parCb*/;
      PL$34/*local*/[11]();
      PL$37.resolve(); return;}), PL$40/*catch rejected*/);
      return r;
      })(PL$27/*getStream*/());/*temptracked promise end*/
      ;
    })();return PL$37;
    }),
    "setFileName": (function(PL$17/*parFilename*/){
    
      ;
      PL$32/*filename*/ = PL$17/*parFilename*/;
      ;})
  };
  ;
  return PL$35/*server*/;
  ;})();
;return PL$1;
};
  
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
