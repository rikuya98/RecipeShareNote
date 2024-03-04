# frozen_string_literal: true

Rails.application.routes.draw do
  resources :recipes, only: %i[index create]
  resource :session, only: %i[show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
