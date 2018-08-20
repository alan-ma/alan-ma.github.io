$('#container').ready(function() {
	load();
	init_header();
	search();
	load_canvas_background()
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
			}, 120);
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
}

function init_header() {
	var profile_open = false;
	var clicks = 0;
	var current_tab = "0";
	var old_tab = "1";
	var translate_amount = 0;
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
	}
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
	}
	$('header label').click(function() {
		if (!$(this).hasClass('selected')) {
			$('header label').removeClass('selected');
			$(this).addClass('selected');
			var open_this = $(this).attr('data-title');
			current_tab = $(this).attr('data-order');
			swap(Number(current_tab) - Number(old_tab));
		}
	});
	function swap(amount) {
		tab_content = '';
			switch(current_tab) {
				case '1':
					tab_content = 'Introduction';
					break;
				case '3':
					tab_content = 'Resume';
					break;
			}
			$('#searchbar').attr('placeholder', tab_content);
		translate_amount += -100 * amount;
		old_tab = current_tab;
		$('#main .content').css('transform', 'translateX(' + translate_amount + '%)');
		$('#introduction').css('z-index', '11');
	}
	$('#introduction button').click(function() {
		$('header label').removeClass('selected');
		$('#resume_label').addClass('selected');
		current_tab = $('#resume_label').attr('data-order');
		swap(Number($('#resume_label').attr('data-order'))-1);
	});
}

function search() {
	$('#search').submit(function() {
		return false;
	});
}

function load_canvas_background() {
	var canvas = document.getElementById("canvas_background");
	var ctx = canvas.getContext("2d");
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	class shape {
		constructor(x, y, xs, ys, xv, yv) {
			this.x = x;
			this.y = y;
			this.xv = xv;
			this.yv = yv;
			this.xs = xs;
			this.ys = ys;
		}

		update() {
			this.x += this.xv;
			this.y += this.yv;

			if (this.x + this.xs > canvas.width || this.x < 0) {
				this.xv *= -1;
			}
			if (this.y + this.ys > canvas.height || this.y < 0) {
				this.yv *= -1;
			}
		}
	};

	var shapes = [];
	for (i=0; i<10; i++) {
		shapes.push(new shape(canvas.width*(Math.random()*0.8+0.1), canvas.height*(Math.random()*0.8+0.1), 100 + 20*Math.random(), 100 + 20*Math.random(), 0.2 + 2*(Math.random()-0.5), 0.2 + 2*(Math.random()-0.5)))
	}
	setInterval(function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (i=0; i<shapes.length; i++) {
			shapes[i].update();
			ctx.beginPath();
			ctx.fillStyle = "rgba(150, 150, 150, 0.1)";
			ctx.fillRect(shapes[i].x, shapes[i].y, shapes[i].xs, shapes[i].ys);
		}
	});
}





