Ember.LinkView.reopen({
	click: function () {
		if (this.get('controller').isView) { return; } // inside component
		this.set('controller.session.isGoingBack', !!this.get('goingBack'));
		this.set('controller.session.hasPresentView', !!this.get('presentView'));
	},

	didInsertElement: function () {
		if (!this.get('animated')) { return; }
		var $this = this.$();
		$this.addClass('ember-view-fade fade-out');
		Ember.run.next(this, function () {
			$this.addClass('transition');
			$this.removeClass('fade-out');
		});
	},
	willDestroyElement: function () {
		if (!this.get('animated')) { return; }
		var $this = this.$();
		var $clone = $this.clone().appendTo($this.parent());
		Ember.run.next(this, function () {
			$clone.addClass('fade-out');
			$clone.on('webkitTransitionEnd transitionend', function () {
				$clone.remove();
			});
		});
	}
});
