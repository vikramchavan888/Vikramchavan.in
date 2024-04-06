// Barba Load Wrapper
barba.hooks.beforeEnter(() => {

	$(document).ready(function() {
		$('.hover1').on('mouseenter mouseleave', function() {
			if ($('.keychain-list').hasClass('active1')) {
		} else {
			$('.keychain-list').addClass('active1');
			$('.keychain-list').removeClass('active2');
			$('.keychain-list').removeClass('active3');
			$('.keychain-list').removeClass('active4');
		}
		});
		$('.hover2').on('mouseenter mouseleave', function() {
			if ($('.keychain-list').hasClass('active2')) {
		} else {
			$('.keychain-list').addClass('active2');
			$('.keychain-list').removeClass('active1');
			$('.keychain-list').removeClass('active3');
			$('.keychain-list').removeClass('active4');
		}
		});
		$('.hover3').on('mouseenter mouseleave', function() {
			if ($('.keychain-list').hasClass('active3')) {
		} else {
			$('.keychain-list').addClass('active3');
			$('.keychain-list').removeClass('active1');
			$('.keychain-list').removeClass('active2');
			$('.keychain-list').removeClass('active4');
		}
		});
	});
	
	$(document).ready(function(){

		$('.hover1').click(function(){
			$('.keychain-list').addClass('active1');
			$('.keychain-list').removeClass('active2');
			$('.keychain-list').removeClass('active3');
			$('.keychain-list').removeClass('active4');
		});
		$('.hover2').click(function(){
			$('.keychain-list').addClass('active2');
			$('.keychain-list').removeClass('active1');
			$('.keychain-list').removeClass('active3');
			$('.keychain-list').removeClass('active4');
		});
		$('.hover3').click(function(){
			$('.keychain-list').addClass('active3');
			$('.keychain-list').removeClass('active1');
			$('.keychain-list').removeClass('active2');
			$('.keychain-list').removeClass('active4');
		});
	});


});