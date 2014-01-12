NewAuthDemo.Collections.GistFiles = Backbone.Collection.extend({
  model: NewAuthDemo.Models.GistFile,

  url: function(){
    return "/gists/" + this.gist_id + "/gist_files";
  },

  comparator: "id", 

  initialize: function(models, options){
    this.gist_id = options.gist_id;
  }

});
