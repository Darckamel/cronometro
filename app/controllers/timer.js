var args = arguments[0] || {};


function inicio (data){
	
	var seg = data;
	function cronometro(){
		if(seg!=0){
			Titanium.API	.info(seg);
			seg--;
			
			var m = seg/60;
			var s = seg % 60;
			
			$.display_lbl.text = " " + parseInt(m) + " m : " + parseInt(s) + " s ";
		}else{
			Titanium.API.info("Termino");
			alert("Termino el tiempo");
			clearInterval(test);
		}	
	}	

	var test = setInterval(cronometro, 1000);
	
};
$.start_btn.addEventListener('click', function(e){
	if($.minutos.value != "" || $.segundos.value != ""){
		var totalSeg = function (){
			if($.minutos.value != 0 || $.minutos.value != null){
				var totalTime = (parseInt($.minutos.value) * 60) + parseInt($.segundos.value);
				return totalTime;
			}	
		else{
			return $.segundos.value;
		}
		};
		inicio(totalSeg());
		
	}	
	else{
		alert("Campos vacios");
	}
	

});

// $.set_btn.addEventListener('click',function(){
	// $.display_lbl.text = " 00 m : 00 s ";
	// my_timer.set(1,30);
// });

$.stop_btn.addEventListener('click',function(){
	my_timer.stop();
});

$.timer.addEventListener("swipe",function(e){
	if(e.direction=="down"){
		$.minutos.blur();
		$.segundos.blur();
	}
});

$.minutos.addEventListener("change",function(e){
	var val = e.source.value;
	!!( /[^0-9]/.test(val) ) ? e.source.value = val.replace(/[^0-9]/gi,'') : false;
	e.source.value = e.source.value.slice(0, 2);
});

$.segundos.addEventListener("change",function(e){
	var val = e.source.value;
	!!( /[^0-9]/.test(val) ) ? e.source.value = val.replace(/[^0-9]/gi,'') : false;
	e.source.value = e.source.value.slice(0, 2);
	if(e.source.value > 59){
		alert("No pueden ser mas de 60 segundos");
		e.source.value = "";
	}
});