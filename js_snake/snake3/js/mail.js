$(function () {




			let $form = $('.app');
			let $res = $('.result');

			$('.send').on('click', function (e) {
				$(this).prop("disabled", true);
				$('.fa-spinner').css('display', 'inline-block');
				$.post('app.php', $form.serialize(), function (data) {
					if (data.res) {
						$res.html('Ваш результат записан. Вы набрали: ' + data.score);
						$form.slideUp(300);
					} else {

						// $res.html(data.errors.toString());
						console.log(data.errors);
						if (data.errors.name) {
							$('[name="name"] + span').css({
								"display": "inline"
							}).html(data.errors.name);
						}
						if (data.errors.phone) {
							$('[name="phone"] + span').css({
								"display": "inline"
							}).html(data.errors.phone);
						}
						if (data.errors.email) {
							$('[name="email"] + span').css({
								"display": "inline"
							}).html(data.errors.email);
						}
					}
					$(".send").prop("disabled", false);
					$('.fa-spinner').css('display', 'none');
				}, 'json');

			});

$('input').on('input', function(e){
	$(this).find(' + .error').css('display', 'none');
})
		});			