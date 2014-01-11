class GistFile < ActiveRecord::Base
  attr_accessible :body, :gist_id, :name
  validates :body, :name, :presence => true

  belongs_to :gist
end
