$(document).ready(function() {
	load();
	header();
	search();
});

function load() {
	var name = "";
	var data = ['A', 'l', 'a', 'n', ' ', 'M', 'a'];

	setTimeout(function() {
		(function doTimeout (i) {
			setTimeout(function () {
				if (i--) {
					name += data[data.length-1-i];
					$('#loading_name').html(name);
					doTimeout(i);
				}
			}, 100);
		})(data.length);
	}, 1500);

	setTimeout(function() {
		$('#loading_button').css('transform', 'scale(0.85)');
		setTimeout(function() {
			$('#loading_button').css('transform', 'scale(1)');
			setTimeout(function() {
				$('#loading').css('transform', 'translateX(-120%)');
				setTimeout(function() {
					$('#loading').css('display', 'none');
				}, 400);
			}, 300);
		}, 250);
	}, 2500);
};

function header() {
	var profile_open = false;
	var clicks = 0;
	var height = $('#information').css('height');
	$('#information').css('height', '0');

	$('#profile_wrapper').mouseover(function() {
		if (!profile_open) {
			$('#profile_wrapper').css('transform', 'rotate(30deg)');
		}
	});
	$('#profile_wrapper').mouseleave(function() {
		if (!profile_open) {
			$('#profile_wrapper').css('transform', 'rotate(0deg)');
		}
	});
	$('#profile_wrapper').click(function() {
		profile_open = !profile_open;
		if (profile_open) {
			open_profile();
		} else {
			close_profile();
		}
	});
	$('#container').click(function() {
		clicks ++;
		if (clicks) {
			close_profile();
		}
	});
	function open_profile() {
		profile_open = true;
		$('#profile_wrapper').css('transform', 'rotate(-270deg)');
		$('#information').css('display', 'flex');

		setTimeout(function() {
			$('#information').css('opacity', '1');
			setTimeout(function() {
				$('#information').css('height', height);
			}, 1);
		}, 1);
		$('#main').addClass('no_click');
		clicks = -1;
	};
	function close_profile() {
		profile_open = false;
		$('#profile_wrapper').css('transform', 'rotate(0deg)');
		$('#information').css('opacity', '0');
		setTimeout(function() {
			$('#information').css('height', '0');
			setTimeout(function() {
				$('#information').css('display', 'none');
			}, 300);
		}, 1);
		$('#main').removeClass('no_click');
	};
};

function search() {
	$('#search').submit(function() {
		return false;
	});
};






