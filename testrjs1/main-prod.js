var tQuery={};console.log("tQuery.js loaded"),define("tquery",function(e){return function(){return e.tQuery}}(this)),tQuery.SuperPlugin2=function(){console.log("inside superplugin constructor")},tQuery.SuperPlugin2.prototype.aMethod=function(){console.log("inside superplugin2 aMethod")},console.log("tQuery.SuperPlugin2.js loaded"),define("tquery.superplugin2",function(){}),requirejs.config({shim:{tquery:{exports:"tQuery"},"tquery.superplugin1":["tquery"],"tquery.superplugin2":["tquery"]}}),console.log("main.js loaded"),require(["tquery.superplugin2"],function(){console.log("inside main.js",tQuery)}),define("main",function(){})