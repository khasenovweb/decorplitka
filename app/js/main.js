$(document).ready(function(){
	$('.sec5__slider').owlCarousel({
		items: 1,
		nav: true,
		navText: ["<img src=\"img/arrow-left.svg\">","<img src=\"img/arrow-right.svg\" >"],
	});

	$('.collection__head__slider').owlCarousel({
		items: 1,
		nav: true,
		navText: ["<img src=\"img/arrow-left-white.svg\">","<img src=\"img/arrow-right-white.svg\" >"],
	});

	$('.owl-item').each(function(){
		var url = $(this).find('.collection__head__slider__item').attr('href');
		var index = $(this).index();
		$('.owl-dot').css('background-image','url('+url+')');
	});

	$('.category__filter__item').each(function(i, el){
		console.log(el);
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

	$('[data-view="list"]').click(function(){
		$('.category__content__items').addClass('line');
	});
	$('[data-view="block"]').click(function(){
		$('.category__content__items').removeClass('line');
	});

	//======================Letter========================//
	$('.sec4__menu__letter').click(function(){
		$('.sec4__menu__letter').removeClass('active');
		$(this).addClass('active');
	});

	$('body').click(function(){
		if ($(event.target).closest(".sec4__submenu").length) return;
		if ($(event.target).closest(".sec4__menu__letter").length) return;
		$('.sec4__menu__letter').removeClass('active');
	});
	//======================END Letter========================//

	//======================Modal========================//
	$('[data-modal-show]').click(function(){
		var id = $(this).attr('data-modal-show');
		$('[data-modal="'+id+'"]').show();
	});
	$('[data-modal-close]').click(function(){
		var id = $(this).attr('data-modal-close');
		$('[data-modal="'+id+'"]').hide();
	});
	$('[data-modal]').click(function(){
		if ($(event.target).closest(".modal").length) return;
		$(this).hide();
	});
	//======================END Modal========================//

	$('input[data-mask="phone"]').mask('+7 (999) 999-9999');


	$.validator.addMethod("phone", function (value) {
		  return value.replace(/\D+/g, "").length >= 11;
		},"Введите номер телефона полностью");
	
	  $("form[data-validate='callorder']").each(function (i, el) {
		$(el).validate({
		  rules: {
			phoneinput: "phone",
			politics: {
				required: true
			}
		  },
		  submitHandler: function(form) {
			console.log('Валидно');
			$('[data-modal]').hide();
			$('[data-modal="3"]').show();
		  }
		});
	  });


	$('[data-mobilenav-show]').click(function(){
		var id = $(this).attr('data-mobilenav-show');
		$('[data-mobilenav="'+id+'"]').toggleClass('active');
	});
	$('[data-mobilenav-close]').click(function(){
		var id = $(this).attr('data-mobilenav-close');
		$('[data-mobilenav="'+id+'"]').removeClass('active');
	});
});

