class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id, :gist_files_attributes
  validates :title, :user_id, :presence => true

  belongs_to :owner, :class_name => "User", :foreign_key => :user_id
  has_many :favorites
  has_many :likers, :through => :favorites, :source => :user
  has_many :gist_files
  accepts_nested_attributes_for :gist_files
end
