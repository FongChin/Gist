json.array! @gists do |gist|
  json.partial! 'gist', :gist => gist
  favorite = gist.favorites.find_by_user_id(@current_user.id)
  if favorite
    json.favorite favorite, :id, :user_id, :gist_id
  end  
end