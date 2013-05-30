(function ($) {

$.widget('mm.showmore', {
	options: {
		itemsToShow: 3,
		showMoreTitle: 'show more',
		showLessTitle: 'show less'
	},

	_create: function() {
		this._setOptions({
			'itemsToShow': this.options.itemsToShow,
			'showMoreTitle': this.options.showMoreTitle,
			'showLessTitle': this.options.showLessTitle
		});

		this.items = this.element.children();

		if ( this.items.length <= this.options.itemsToShow ) { return; }

		this.itemsToHide = this.items.slice( +this.options.itemsToShow, +this.items.length );

		this.showToggleLink();

		this.hideItems();
	},

	_destroy: function() {},

	_setOption: function() {},

	showToggleLink: function() {
		var linkText = this.options.showMoreTitle;

		this.toggleLink = $('<a/>', {
			'href': '#',
			'class': 'js-toggle-show',
			text: linkText,
			click: this.onToggleLinkClick.bind( this )
		}).appendTo( this.element );
	},

	toggleItems: function() {
		this.itemsToHide.toggle();
	},

	toggleLinkTitle: function() {
		var title = ( this.toggleLink.text() === this.options.showMoreTitle ) ? this.options.showLessTitle : this.options.showMoreTitle;
		this.toggleLink.text( title );
	},

	hideItems: function() {
		this.itemsToHide.hide();
	},

	onToggleLinkClick: function( e ) {
		e.preventDefault();

		this.toggleItems();
		this.toggleLinkTitle();
	}
});

})(jQuery);