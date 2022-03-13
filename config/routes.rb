Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'yours/index'
    end
  end
  devise_for :users
  root 'yours#index' # ここを追記します
  get '*path', to: 'yours#index' # Vueでルーティングするため全てindexにルーティングする
end