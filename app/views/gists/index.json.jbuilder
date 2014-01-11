json.array! @gists do |gist|
  json.partial! 'partial', :gist => gist
  favorite = gist.favorites.find_by_user_id(@current_user.id)
  if favorite
    json.favorite favorite, :id, :user_id, :gist_id
  end
  json.gistFiles do
    json.array! gist.gist_files do |gist_file|
      json.partial! './gist_files/show', :gist_file => gist_file
    end
  end
end