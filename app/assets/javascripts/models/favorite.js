NewAuthDemo.Models.Favorite = Backbone.Model.extend({
  urlRoot: function(){
    return "/gists/" + this.gist_id + "/favorite";
  },

  initialize: function(attributes, options){
    this.gist_id = options.gist_id;
  }
});
