Rails.application.routes.draw do
  resources :locations
  post 'user_token' => 'user_token#create'
  resources :the_classes
  resources :reviews
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
