
$("a").on("click",function(e){
	var index = $(this).parent().data("index")
	$("#section1").css("background-image",'url(images/bg'+ index+'.jpg)')
})