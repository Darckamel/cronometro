$.index.open();
$.loading.show();
setTimeout(function() { 
	var venta2 = Alloy.createController("timer").getView();	
	venta2.open();
	$.index.close();
}, 5000);
	

