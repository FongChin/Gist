NewAuthDemo.Views.GistForm = Backbone.View.extend({
  events: {
    "click form input[type='submit']": "handleFormInput",
    "click button#add_new_gist_file_form": "addNewGistForm"
  },

  template: JST["gists/form"],

  render: function(){
    var renderedContent = this.template({gist: this.model});
    this.$el.html(renderedContent);
    return this;
  },

  handleFormInput: function(event){
    event.preventDefault();
    var data = this.$('form').serializeJSON();
    this.model.set(data['gist']);
    var options = {
      success: function(model, response){
        Backbone.history.navigate("#/", {trigger: true});
    };
    if (this.model.isNew()){
      this._createGist(data, options);
    } else{
      this._updateGist(data, options);
    }
  },

  _createGist: function(data, options){
    NewAuthDemo.gists.create(this.model, options);
  },

  _updateGist: function(data, options){
    gist.save({}, options);
  },

  addNewGistForm: function(event){
    event.preventDefault();
    this.$("#file_forms").append(JST["gists/gist_file_new_form"]());
    return;
  }
})