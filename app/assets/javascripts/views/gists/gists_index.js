NewAuthDemo.Views.GistsIndex = Backbone.View.extend({
  events: {
    "click button.favorite": "favorite",
    "click button.unfavorite": "unfavorite"
  },

  tagName: 'ul',

  template: JST['gists/index'],

  initialize: function(){
    this.listenTo(this.collection, "add change", this.render);
  },

  render: function(){
    var renderedContent = this.template({gists: this.collection})
    this.$el.html(renderedContent);
    return this;
  },

  favorite: function(event){
    var gist_id = $(event.currentTarget).data("id");
    var gist = this.collection.get(gist_id);
    var $btn = $(event.currentTarget);
    
    var favorite = new NewAuthDemo.Models.Favorite(
      {gist_id: parseInt(gist_id)},
      {gist_id: parseInt(gist_id)}
    );

    favorite.save({}, {
      success: function(){
       gist.set("favorite", favorite);
       $btn.attr("class", "unfavorite");
       $btn.text("unfavorite");
      },
      error: function(){
        alert("The gist can't be favorited at this time.")
      }
    });
  },

  unfavorite: function(event){
    var $btn = $(event.currentTarget);
    var gist_id = $(event.currentTarget).data("id");
    var gist = this.collection.get(gist_id);
    var favorite = gist.get("favorite");
    favorite.destroy({
      url: favorite.urlRoot(),
      success: function(){
        gist.set("favorite", undefined);
        $btn.attr("class", "favorite");
        $btn.text("favorite");
      },
      error: function(){
        console.log("error unfavoriting yo!")
      }
    });
  }

});
