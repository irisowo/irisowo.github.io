// JavaScript Document
$(document).ready(function(){
    $("nav").load("nav1.html");
    $("footer").load("footer.html");
    getcon('js/list.json');
    
    var param = new URLSearchParams(document.location.search.substring(1));
    var pn = param.get("id"); //string
    var aid = parseInt(pn) //int
    switch(aid){
        case 0 :
            getcon('js/list.json');
        break;

        case 1:
            getcon2('js/list.json');
        break;
    }
    $("section").css({"display":"none"}).fadeIn(1000);

});


function getcon(filename) {
	
	$.getJSON(filename, function(data) {

        $("section").empty();
        $.each(data, function(index, en){	
            var html = '<div class="box">';
            html +='<div class="imgbox">';
            html +='<img src="'+en['圖片']+'">';
            html +='</div>';
            html +='<h3>'+en['品名']+'</h3>';
            html +='<p>'+en['朝代']+'</p>';
            html +='<p>'+en['作者']+'</p>';
            html +='<p>'+en['尺寸']+'</p>';
            html +='</div>' //最後不用分號
    
            $("section").append(html);
        });
		
	});
	
	return false;
}


function getcon2(filename) {
	
	$.getJSON(filename, function(data) {

        $("section").empty();
        $.each(data, function(index, en){	
            if(en['分類'] == "玉"){
                var html = '<div class="box">';
                html +='<div class="imgbox">';
                html +='<img src="'+en['圖片']+'">';
                html +='</div>';
                html +='<h3>'+en['品名']+'</h3>';
                html +='<p>'+en['朝代']+'</p>';
                html +='<p>'+en['作者']+'</p>';
                html +='<p>'+en['尺寸']+'</p>';
                html +='</div>' //最後不用分號
                $("section").append(html);
            }
        });
		
	});
	
	return false;
}
