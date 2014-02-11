App.RoomsRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        name: 'Room1',
      },
      {
        id: 2,
        name: 'Room2',
      }
    ];
  }
});

