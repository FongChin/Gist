class GistsController < ApplicationController
  before_filter :require_current_user!

  def index
    @gists = current_user.gists.includes(:gist_files)
    @current_user = current_user
    render 'index'
  end

  def create
    params[:gist][:user_id] = current_user.id
    @gist = Gist.new(params[:gist])
    if @gist.save
      render 'show'
    else
      render :json => {:status => 422}
    end
  end

  def update
    @gist = Gist.find(params[:id])
    if @gist.update_attributes(params[:gist])
      render 'show'
    else
      render :json => {:status => 422}
    end
  end
end
