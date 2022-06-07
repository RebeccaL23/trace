Rails.application.routes.draw do
  get 'users/show'
  devise_for :users
  root to: "pages#home"

  # users (for admin only; show page for all games, devise handles sign-up etc.)
  resources :users, only: [:show]

  # games
  resources :games, only: %i[show new create edit update] do
    get "confirmation", to: "games#confirmation", as: :confirmation
    # teams
    resources :teams, only: %i[show new] do
      get "leader", to: "teams#leaderboard", as: :leaderboard
      get "expired", to: "teams#expired", as: :expired
    end
    # challenges
    resources :challenges, only: %i[new create edit update]
  end

  get "join", to: "games#join", as: :join
  resources :games, only: [:destroy]
  resources :challenges, only: [:destroy]
end
