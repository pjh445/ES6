$(document).ready(function(){
	//console.log("연결됨");
	$("header").css({"background":"purple" , "color":"white"});
	$("h1").css("font-family","Single Day");
	$("h2").css({"font-family":"Yeon Sung" , "font-size":"2.5rem"});
	//$("nav ul").css("list-style-type","circle");
	
	$("aside h3").click(function(){
		//console.log("클릭됨");
		$(this).addClass("bg").siblings().removeClass();
	});
	
	$("h2").click(function(){
		$("main, #layout>div").css("overflow","hidden");
		$(this).animate({marginLeft:"100vw"});
	});
	
	$("nav li").click(function(){
		$("nav ul").css({"overflow":"hidden" , "position":"relative"});
		$(this).css("position","absolute").animate({marginLeft:"100vw"});
	});
});///////////전체끝









