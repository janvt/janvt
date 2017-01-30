$(function() {
  new hashTagsView({
    el: '#hashTags',
    collection: new Backbone.Collection()
  });
});

var hashTagsView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.add);
    this.listenTo(this.collection, 'remove', this.remove);
  },

  stripWhitespaceAndSetText: function(text) {
    this.$el.text($.trim(text || this.$el.text()).replace(/\s{2,}/g, ' '))
  },

  add: function(model) {
    var currentText = this.$el.text();
    var currentTags = currentText.split(' ');
    var htgfName = '#' + model.get('name');
    if(_.indexOf(currentTags, htgfName) == -1) {
      this.stripWhitespaceAndSetText(currentText + " " + htgfName)
    }
  },

  remove: function(model) {
    var currentText = this.$el.text();
    var htgfName = '#' + model.get('name');
    this.stripWhitespaceAndSetText(currentText.replace(htgfName, ''));
  }
});