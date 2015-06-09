jQuery.sap.declare("com.sap.dashboard.Component");


sap.ui.core.UIComponent.extend("com.sap.dashboard.Component",{

	metadata : {
		routing : {
			config : { 
				viewType:"XML",
				viewPath:"com.sap.dashboard.view",
				targetControl:"navContainer",
				targetAggregation:"pages",
				clearTarget : false
			},
			routes : [
			          {
			        	  pattern : "",
			        	  name:"distributionTable",
			        	  view:"distributionTable"
			          },
			          {
			        	  pattern :"allocationBudget/{id}",
			        	  name : "allocationBudget",
			        	  view : "allocationBudget"
			          }]
		}
	}
});

/*onInit: function() {
	this.router = sap.ui.core.UIComponent.getRouterFor(this);
	this.router.attachRouteMatched(this._handleRouteMatched, this);
},
_handleRouteMatched:function(evt){
	if("SecondPage" !== evt.getParameter("name")){
		return;
	}
	var id = evt.getParameter("arguments").id;
	var model = new sap.ui.model.json.JSONModel({id:id});
	this.getView().setModel(model,"data");
},*/

com.sap.dashboard.Component.prototype.init = function(){
	jQuery.sap.require("sap.ui.core.routing.History");
	jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
	
	sap.ui.core.UIComponent.prototype.init.apply(this);
	
	var router = this.getRouter();
	this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
	router.initialize();
};
com.sap.dashboard.Component.prototype.destroy = function(){
	if(this.routeHandler){
		this.routeHandler.destroy();
	}
	sap.ui.core.UIComponent.destroy.apply(this,arguments);
};
com.sap.dashboard.Component.prototype.createContent = function(){
	this.view = sap.ui.view({id:"Home",viewName:"com.sap.dashboard.view.Home",type:sap.ui.core.mvc.ViewType.JS});
	return this.view;
};