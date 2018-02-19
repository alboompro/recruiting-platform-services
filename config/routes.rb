Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'smart_coffee/acrescimos'
  root 'smart_coffee#acrescimos'
end
