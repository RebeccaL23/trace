Rails.application.routes.draw do
  get 'users/show'
  devise_for :users
  root to: "pages#home"

  # users (for admin only; show page for all games, devise handles sign-up etc.)
  resources :users, only: [:show]

  # games
  resources :games, only: %i[show new create edit update] do
    get "status", to: "games#status", as: :status
    get "confirmation", to: "games#confirmation", as: :confirmation
    get "leader", to: "games#leaderboard", as: :leaderboard
    # teams
    resources :teams, only: %i[show new create] do
      get "play", to: "games#play", as: :play
      get "expired", to: "teams#expired", as: :expired

      post "completion/:id/choice", to: "completions#choice", as: :completion
    end
    # challenges
    resources :challenges, only: %i[new create edit update]
  end

  get "join", to: "games#join", as: :join
  resources :games, only: [:destroy]
  resources :challenges, only: [:destroy]
end
