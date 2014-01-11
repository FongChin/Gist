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
    var that = this;
    var options = {
      success: function(model, response){
        Backbone.history.navigate("#/", {trigger: true});
      }
    };
    if (this.model.isNew()){
      this.collection.create(this.model, options);
    } else{
      this.model.save({}, options);
    }
  },
  
  addNewGistForm: function(event){
    event.preventDefault();
    this.$("#file_forms").append(JST["gists/gist_file_new_form"]());
    return;
  }
});