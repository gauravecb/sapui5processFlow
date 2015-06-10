//firstchange
//second change
//Third change from SapWEbIDE
jQuery.sap.require("com.sap.dashboard.js.jqplot");
jQuery.sap.require("com.sap.dashboard.js.pieRenderer");
jQuery.sap.declare("com.sap.dashboard.view.customPieLegands");

sap.ui.core.Control.extend("com.sap.dashboard.view.customPieLegands", {      // call the new Control type "my.Hello" 
    // and let it inherit from sap.ui.core.Control
	metadata : {                              // the Control API
		properties : {
			"id" : "string",                
		    "info" : "string",
		    "width" : "string",
		    "height" : "string",
		   
	      }
	},
	
	onAfterRendering : function() {
		var sId = this.sId;
		plot3 = jQuery.jqplot("chart3", 
			    [[['Verwerkende industrie',9],['Retail', 10], ['Primaire producent', 5], 
			    ['Out of home', 0],['Groothandel', 0], ['Grondstof', 0], ['Consument', 0], ['Bewerkende industrie', 2]]], 
			    {
			      title: ' ', 
			      seriesDefaults: {
			        shadow: false, 
			        renderer:jQuery.jqplot.PieRenderer, 
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
		
     )
	},
	

	renderer : function(oRm, oControl) {
          
		oRm.write("<div " );
		oRm.write("id =" + " " +"chart3");
		oRm.write('style= "margin-top:20px; margin-left:20px; width:700px; height:500px;"');
		oRm.write(">")
		oRm.write("</div>");
	}
});


