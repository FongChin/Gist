class FavoritesController < ApplicationController
  def create
    @favorite = current_user.favorites.new({:gist_id => params[:gist_id]})
    if @favorite.save
      render :json => @favorite
    else
      render :json => {:status => 422}
    end
  end

  def destroy
    @favorite = Favorite.where({
      :user_id => current_user.id,
      :gist_id => params[:gist_id]
    }).first
    @favorite.destroy
    render :json => @favorite
  end

  def index
    @gists = current_user.favorite_gists
    render 'gists/index'
  end
end
