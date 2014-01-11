NewAuthDemo.Models.Gist = Backbone.Model.extend({
  parse: function(response){
    var favorite = new NewAuthDemo.Models.Favorite(response.favorite, {gist_id: response.id});
    response.favorite = favorite;
    this.set("favorite", favorite);

    var gistFiles = new NewAuthDemo.Collections.GistFiles(response.gistFiles,
      {gist_id: response.id}
    );
    response.gistFiles = gistFiles;
    this.set("gistFiles", gistFiles);

    console.log(response);
    return response;
  },

  toJSON: function(options){
    var cloned_data = _.clone(this.attributes);
    console.log(_.omit(cloned_data, 'favorite'));
    return _.omit(cloned_data, 'favorite');
  }
});
