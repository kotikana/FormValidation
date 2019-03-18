$(document).ready(function() {
	var mail = $('.input__email');
	var pass =$('.input__pass');
	var post =$('.input__post');
	var birth =$('.birth');
	var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	var year = new Date();
	var nowYear = year.getFullYear();

	for (var i = 1960; i <=  nowYear; i++) {
		$('.birth').append($('<option>', { 
			value:i,
			text : i 
		}));
	};

	birth.change(function(){
		var yearVal = $('.birth option:selected').text();
		if(nowYear - +yearVal > 17) {
			$(this).css({'border-bottom' : '1px solid #999999'});
			$('.tooltip__birth').css({'opacity':'0'});
		} else {
			$(this).css({'border-bottom' : '1px solid #ff3000'});
			$('.tooltip__birth').css({'opacity':'1'}).text('You must be at least 18 year old');
		}
	});

	$(function(){
		mail.on('keyup', function() {
			if($(this).val() != '') {
				if(pattern.test($(this).val())){
					$(this).css({'border-bottom' : '1px solid #999999','color':'black'});
					$('.tooltip__email').hide();
				} else {
					$(this).css({'border-bottom' : '1px solid #ff3000','color' : '#ff3000'});
					$('.tooltip__email').css({'opacity':'1','transition' : '.5s'}).text('Please include an \'\@\'\ in the email address');
				}
			} else {
				$(this).css({'border-bottom' : '1px solid #ff0000'});
				$('.tooltip__email').css({'opacity' : '1','transition' : '.5s'}).text('This field can\'\ t be empty');
			}
		});
		mail.on('blur', function () {
			if($(this).val() != '') {
				if(pattern.test($(this).val())){
					$(this).css({'border-bottom' : '1px solid #999999'});
					$('.tooltip__email').css({'opacity' : '0'});
				} else {
					$(this).css({'border-bottom' : '1px solid #ff3000','color' : '#ff3000'});
					$('.tooltip__email').css({'opacity':'1','transition' : '.5s'}).text('Please include an \'\@\'\ in the email address');
				}
			} else {
				$(this).css({'border-bottom' : '1px solid #ff0000'});
				$('.tooltip__email').css({'opacity' : '1','transition' : '.5s'}).text('This field can\'\ t be empty');
			}
		});
		pass.on('blur', function () {
			if($(this).val() !='' ) {
				$(this).css({'border-bottom' : '1px solid #999999'});
				$('.tooltip__pass').css({'opacity' : '0'});
			} else {
				$(this).css({'border-bottom' : '1px solid #ff0000'});
				$('.tooltip__pass').css({'opacity' : '1','transition' : '.5s'}).text('This field can\'\ t be empty');
			}
		});
		post.on('blur', function () {
			if($(this).val() !='' ) {
				$(this).css({'border-bottom' : '1px solid #999999'});
				$('.tooltip__post').css({'opacity' : '0'});
			} else {
				$(this).css({'border-bottom' : '1px solid #ff0000'});
				$('.tooltip__post').css({'opacity' : '1','transition' : '.5s'}).text('This field can\'\ t be empty');
			}
		});
	});

	$(function(){
		$('.location_quest').hover( function () {
			$('.tooltip__quest').css({'opacity' : '1','transition' : '.5s'})
			.text('We don`t use postal codes to cantact members directly');
		},
		function(){
			$('.tooltip__quest').css({'opacity' : '0','transition' : '.5s'});
		});
	});

	$(function() {
		$('.register_btn').on('click',function(){
			var yearVal = $('.birth option:selected').text();
			if ($('.form')[0].checkValidity()){
				console.log('Form is valid')
			} else {
				if (mail.val() == '') {
					$('.tooltip__email').css({'opacity' : '1','transition' : '.5s'}).text('This field can\'\ t be empty');
					mail.css({'border-bottom' : '1px solid #ff0000'});
				}
				if (pass.val() == '') {
					$('.tooltip__pass').css({'opacity' : '1','transition' : '.5s'}).text('This field can\'\ t be empty');
					pass.css({'border-bottom' : '1px solid #ff0000'});
				}
				if (post.val() == '') {
					$('.tooltip__post').css({'opacity' : '1','transition' : '.5s'}).text('This field can\'\ t be empty');
					post.css({'border-bottom' : '1px solid #ff0000'});
				}
				if (nowYear - +yearVal < 19) {
					$('.tooltip-select').css({'opacity' : '1','transition' : '.5s'}).text('You must be at least 18 year old');
				}
			}
		});
	});
});
