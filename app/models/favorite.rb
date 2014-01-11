class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id
  validates :gist_id, :user_id, :presence => true

  belongs_to :gist
  belongs_to :user

  def has_favorited?(user)
    Favorite.exists?(:user_id => user.id)
  end

end
