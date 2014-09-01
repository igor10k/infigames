// ikSlider 0.0.1
// Copyright (c) 2014 Igor Kozlov
// igorkozlov.me

(function ($, window, document) {
	var defaults = {
		initialProgress: 0
	};

	function IkSlider(el, options) {
		this.el = el;
		this.$el = $(el);
		this.options = $.extend({}, defaults, options);
		this.init();
	}

	$.extend(IkSlider.prototype, {
		init: function () {
			this.$el.addClass('ikslider');
			this.$bar = $('<div class="ikslider-bar"/>');
			this.$seeker = $('<div class="ikslider-seeker"/>');
			this.$el.append(this.$bar, this.$seeker);
			this.barWidth = this.$bar.outerWidth(true);
			this.seekerWidth = this.$seeker.outerWidth(true);

			this.$el.on('mousedown.ikSlider touchstart.ikSlider', $.proxy(this, 'startDragging'));

			if (this.options.initialProgress) {
				this.setProgress(this.options.initialProgress);
			}
		},

		getMouseX: function (event) {
			var x, elOffset;
			elOffset = this.$el.offset();
			if (event.originalEvent.touches) {
				x = event.originalEvent.touches[0].pageX;
			} else {
				x = event.pageX;
			}
			x -= elOffset.left;
			return x;
		},

		moveSeeker: function (x) {
			x = x - Math.floor(this.seekerWidth / 2);
			if (x < 0) {
				x = 0;
			} else if (x + this.seekerWidth > this.barWidth) {
				x = this.barWidth - this.seekerWidth;
			}
			this.$seeker.css('left', x);
			this.progress = x / (this.barWidth - this.seekerWidth);
		},

		startDragging: function (event) {
			$(document).on('mousemove.ikSlider touchmove.ikSlider', $.proxy(this, 'dragging'));
			$(document).on('mouseup.ikSlider touchend.ikSlider', $.proxy(this, 'stopDragging'));

			this.moveSeeker(this.getMouseX(event));

			this.$el.trigger('start', this);
			return false;
		},

		dragging: function (event) {
			this.moveSeeker(this.getMouseX(event));

			this.$el.trigger('dragging', this);
			return false;
		},

		stopDragging: function () {
			$(document).off('mousemove.ikSlider touchmove.ikSlider');
			$(document).off('mouseup.ikSlider touchend.ikSlider');

			this.$el.trigger('stop', this);
			return false;
		},

		setProgress: function (progress) {
			this.moveSeeker((this.barWidth - this.seekerWidth) * progress + this.seekerWidth / 2);
		}
	});

	$.fn.ikSlider = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_ikSlider')) {
				$.data(this, 'plugin_ikSlider', new IkSlider(this, options));
			}
		});
	};
})(jQuery, window, document);
