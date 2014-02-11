App.Router.map(function () {
  this.resource('rooms', { path: '/' }, function() {
    this.resource('room', { path : ':room_id' });
  });
});
