App.PopupMessageComponent = Ember.Component.extend({
	classNames: ['popup-message'],
	classNameBindings: ['isError:error', 'isInfo:info'],
	isError: Ember.computed.equal('type', 'error'),
	isInfo: Ember.computed.equal('type', 'info'),

	didInsertElement: function () {
		var self = this;
		var $this = this.$();

		setTimeout(function () {
			$this.addClass('show');
		}, 10);

		var hide = function () {
			$this.addClass('hide');
			$this.on('webkitTransitionEnd transitionend', function () {
				self.sendAction('hide');
			});
		};

		var hideTimeout = setTimeout(hide, 3000);

		$this.on('click', function () {
			clearTimeout(hideTimeout);
			hide();
		});
	}
});
