Rails.application.routes.draw do
  root 'yours#index'
  get 'yours/index' # 自動で設定されたルーティング
  namespace :v1 do
    mount_devise_token_auth_for "User", at: "auth"
  end
end