window.NewAuthDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewAuthDemo.gists = new NewAuthDemo.Collections.Gists();
    NewAuthDemo.gists.fetch({
      success: function(){
        new NewAuthDemo.Routers.Gists();
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  NewAuthDemo.initialize();
});
