class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    if params[:query].present?
      @games = Game.search_by_name(params[:query])
      if @games.nil?
        @games = Game.all
      end
    else
      @games = Game.all
    end
  end
end
