// Плавная прокрутка страницы
$(document).ready(function() {
	$('a[href*=#]').bind('click', function(e) {
	e.preventDefault();
 
	var target = $(this).attr("href");
 
	$('html, body').stop().animate({ 
		scrollTop: $(target).offset().top
		}, 500, function() {
			location.hash = target;
		});
 
		return false;
	});
});


// Подсветка активной страницы
$(document).ready(function(){
$('.location-color').each(function () {
        var location = window.location.href;
        var link = this.href; 
        if(location == link) {
            $(this).addClass('active');
        }
    });
});