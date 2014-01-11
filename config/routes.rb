NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  resources :gists, :only => [:index, :show, :create, :update] do
    resource :favorite, :only => [:create, :destroy]
    resources :gist_files, :only => [:create, :destroy]
  end
  resources :favorites, :only => [:index]
  root :to => "static_pages#root"
end
