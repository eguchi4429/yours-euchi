Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'yours/index'
      get 'yours/question'
    end
  end
  devise_for :users
  root 'yours#index' # ここを追記します
  get 'yours/index' # 自動で設定されたルーティング
end
