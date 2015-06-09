jQuery.sap.require("com.sap.dashboard.js.Chart");
jQuery.sap.declare("com.sap.dashboard.view.customPieChart");

sap.ui.core.Control.extend("com.sap.dashboard.view.customPieChart", {      // call the new Control type "my.Hello" 
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
		
		var pieData = this.getModel().oData
			var ctx = document.getElementById("chart-area").getContext("2d");
			window.myPie = new Chart(ctx).Pie(pieData);
		

	},
	

	renderer : function(oRm, oControl) {
          
		oRm.write("<div " );
		oRm.write(">");
			oRm.write("<canvas " ); 
			oRm.write("id = " +" "+ oControl.getId() +" ");
			oRm.write("width="+ oControl.getWidth()+" ");
			oRm.write("height="+ oControl.getHeight()+" ");
			oRm.write(">" ); 
			oRm.write("</canvas>" ); 
		
		oRm.write("</div>");
	}
});


