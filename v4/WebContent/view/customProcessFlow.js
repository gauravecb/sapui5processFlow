jQuery.sap.require("com.sap.dashboard.js.circliful");
jQuery.sap.declare("com.sap.dashboard.view.customProcessFlow");

sap.ui.core.Control.extend("com.sap.dashboard.view.customProcessFlow", {      // call the new Control type "my.Hello" 
    // and let it inherit from sap.ui.core.Control
	metadata : {                              // the Control API
		properties : {
			"id" : "string",                
			"dimension" : "string",
			"text" : "string",
		    "info" : "string",
		    "width" : "string",
		    "fontsize" :"string",
		    "percentValue": "string",
		    "forgroundColor" : "string",
		    "backgroundColor" : "string",
		   // "type" :  "string",
		    //"fill" :  "string",
	      }
	},
	
	onAfterRendering : function() {
		var sId = "#"+this.sId;
		$(sId).circliful();

	},
	

	renderer : function(oRm, oControl) {
          
		oRm.write("<div " );
		oRm.write("id = " +" "+ oControl.getId() +" ");
		oRm.write("data-dimension=" +oControl.getDimension() +" ");
		oRm.write("data-text="+ oControl.getText()+" ");
		oRm.write( "data-info="+ oControl.getInfo()+" ");
		oRm.write("data-width="+ oControl.getWidth()+" ");
		oRm.write("data-fontsize="+oControl.getFontsize()+" ");
		oRm.write("data-percent="+oControl.getPercentValue()+" ");
		oRm.write("data-fgcolor="+oControl.getForgroundColor()+" ");
		oRm.write("data-bgcolor="+oControl.getBackgroundColor()+" ");
		//oRm.write("data-type="+oControl.getType()+" ");
		//oRm.write("data-fill="+oControl.getFill()+" ");
		
		oRm.write(">");
		oRm.write("</div>");
	}
});


//<div id="myStathalf" data-dimension="250" data-text="60%" data-info="New Clients" data-width="30" data-fontsize="38" data-percent="60" data-fgcolor="#7ea568" data-bgcolor="#eee" data-type="half" data-fill="#ddd"></div>

