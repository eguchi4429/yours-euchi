Rails.application.routes.draw do
  devise_for :users
  root 'yours#index' # ここを追記します
  get 'yours/index' # 自動で設定されたルーティング
end
