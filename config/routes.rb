Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'smart_coffee/login'
  root 'smart_coffee#login'
end
