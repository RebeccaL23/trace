class UsersController < ApplicationController
  def show
    @games = Game.all
    @user = User.find(params[:id])
  end
end
