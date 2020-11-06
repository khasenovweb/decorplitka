$(document).ready(function(){
	$('.sec5__slider').owlCarousel({
		items: 1,
		nav: true,
		navText: ["<img src=\"img/arrow-left.svg\">","<img src=\"img/arrow-right.svg\" >"],
	});

	$('.category__filter__item').each(function(i, el){
		$(el).find('.category__filter__item__showall').click(function(){
			$(el).find('.category__filter__checkbox__wrapper').toggleClass('active');
			$(this).find('.category__filter__item__showall__icon').toggleClass('active');

			if($(el).find('.category__filter__checkbox__wrapper').hasClass("active") == true){
				$(this).find('.category__filter__item__showall__title').text('Свернуть');
			}else {
				$(this).find('.category__filter__item__showall__title').text('Показать еще');
			}
			
		});
		if($(el).find('.category__filter__checkbox').length <= 5) {
			$('.category__filter__checkbox__wrapper').eq($(el).index()).addClass('active');
			$('.category__filter__item__showall').eq($(el).index()).hide();
		}
	});
});
