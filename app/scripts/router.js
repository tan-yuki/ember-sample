App.Router.map(function () {
  this.resource('rooms', function() {
    this.resource('room', { path: ':room_id' });
  });
});

App.RoomsRoute = Ember.Route.extend({
  model: function() {
    return rooms;
  }
});

App.RoomRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});
