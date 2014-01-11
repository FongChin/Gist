NewAuthDemo.Views.GistDetail = Backbone.View.extend({
  template: JST["gists/show"],
  render: function(){
    var renderedContent = this.template({gist: this.model});
    this.$el.html(renderedContent);
    return this;
  }
})