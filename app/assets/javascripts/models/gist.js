NewAuthDemo.Models.Gist = Backbone.Model.extend({
  parse: function(response){
    if (response.favorite){
      var favorite = new NewAuthDemo.Models.Favorite(response.favorite, {gist_id: response.id});
      response.favorite = favorite;
      this.set("favorite", favorite);      
    }

    var gistFiles = new NewAuthDemo.Collections.GistFiles(response.gistFiles,
      {gist_id: response.id}
    );
    response.gistFiles = gistFiles;
    this.set("gistFiles", gistFiles);

    return response;
  },

  toJSON: function(options){
    var cloned_data = _.clone(this.attributes);
    return _.omit(cloned_data, 'favorite');
  }
});
