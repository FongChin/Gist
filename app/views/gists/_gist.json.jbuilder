json.(gist, :id, :title, :created_at, :updated_at)
json.gistFiles do
  json.array! gist.gist_files do |gist_file|
    json.partial! './gist_files/show', :gist_file => gist_file
  end
end
