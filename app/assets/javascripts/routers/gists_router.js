NewAuthDemo.Routers.Gists = Backbone.Router.extend({
  routes: {
    "": "index",
    "new": "new",
    "edit/:id": "edit"
  },

  index: function(){
    var view = new NewAuthDemo.Views.GistsIndex({ collection: NewAuthDemo.gists });
    this._swapView(view);
  },

  new: function(){
    var view = new NewAuthDemo.Views.GistForm({ 
      model: new NewAuthDemo.Models.Gist(),
      collection: NewAuthDemo.gists
    });
    this._swapView(view);
  },

  edit: function(id){
    var view = new NewAuthDemo.Views.GistForm({
      model: NewAuthDemo.gists.get(id),
      collection: NewAuthDemo.gists
    });
    this._swapView(view);
  },

  _swapView: function(newView){
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $("#content").html(newView.render().$el)
  }
});
