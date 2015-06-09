//jQuery.sap.require("com.sap.dashboard.js.jqplot");
//jQuery.sap.require("com.sap.dashboard.js");
sap.ui.controller("com.sap.dashboard.view.allocationBudget", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.allocationBudget
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.allocationBudget
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.allocationBudget
*/
	onAfterRendering: function() {
		var chartId = this.getView().byId("chart3").getId()
		plot3 = jQuery.jqplot(chartId, 
			    [[['Verwerkende industrie',9],['Retail', 10], ['Primaire producent', 5], 
			    ['Out of home', 0],['Groothandel', 0], ['Grondstof', 0], ['Consument', 0], ['Bewerkende industrie', 2]]], 
			    {
			      title: ' ', 
			      seriesDefaults: {
			        shadow: false, 
			        renderer: jQuery.jqplot.PieRenderer, 
			        rendererOptions: { 
			          sliceMargin: 4, 
			          showDataLabels: true 
			        } 
			      }, 
			      legend: { show:true, 
			    	  rendererOptions: {
		                numberRows: 4
		            },location: 'e' }
			    }
		
     );

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.allocationBudget
*/
//	onExit: function() {
//
//	}

});