App.AnimationSlide = Ember.Mixin.create({
	classNames: ['ember-view-slide'],

	willAnimateIn: function () {
		if (this.get('noInitAnimation') && !this.get('controller.session.isGoingBack')) { return; }
		this.$().addClass('animated slide-in');
	},

	animateIn: function (done) {
		if (this.get('noInitAnimation') && !this.get('controller.session.isGoingBack')) { return done(); }
		var $this = this.$();
		Ember.run.later(this, function () {
			$this.addClass('transition-in');
			$this.removeClass('slide-in');

			$this.on('webkitTransitionEnd transitionend', function () {
				if (!$(event.target).is($this)) { return; }
				$this.off('webkitTransitionEnd transitionend');
				done();
			}.bind(this));
		}, 1);
	},

	didAnimateIn: function () {
		this.get('controller').send('viewDidAnimateIn');
		this.$().removeClass('animated transition-in');
	},

	willAnimateOut: function () {
		if (this.get('controller.session.hasPresentView') && !this.get('isPresentView')) { return; }
		this.$().addClass('animated');
	},

	animateOut : function (done) {
		if (this.get('controller.session.hasPresentView') && !this.get('isPresentView')) {
			return Ember.run.later(this, done, 300);
		}
		var $this = this.$();
		Ember.run.later(this, function () {
			$this.addClass('transition-out slide-out');

			$this.on('webkitTransitionEnd transitionend', function (event) {
				if (!$(event.target).is($this)) { return; }
				$this.off('webkitTransitionEnd transitionend');
				done();
			});
		}, 1);
	},

	didAnimateOut: function () {
		this.$().removeClass('animated transition-out slide-out');
	}
});
