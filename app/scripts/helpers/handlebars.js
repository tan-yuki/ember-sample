/*
 * Handlebars helper scripts
 */

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});


(function() {
  var showdown = new Showdown.converter();
  Ember.Handlebars.helper('format-markdown', function(input) {
    return new Handlebars.SafeString(showdown.makeHtml(input));
  });
})();
