class GamesController < ApplicationController
  before_action :set_game, only: %i[show edit update destroy confirmation]

  def show

  end

  def new
    @game = Game.new
  end

  # not checked!
  def create
    @game = Game.new(game_params)
    @game.user = current_user
    if @game.save
      redirect_to game_path(@game), notice: 'you created a game!'
    else
      render :new, status: :unprocessable_entity
    end
  end

  # not checked!
  def update
    @game.update(game_params)
    redirect_to game_path(@game)
  end

  # not checked!
  def edit
  end

  # not checked! is it simply current_user or current_user.id
  def destroy
    @game.destroy
    redirect_to user_path(current_user.id), status: :see_other
  end

  # not checked!
  def confirmation
    # @games = Game.all
    # if @game.id < 6 chars
    #   while @game.id matches ids in @games
    #     new = generate 6 digits
    #     @game.id = new
    #   end
    # end
  end

  private

  def set_game
    @game = Game.find(params[:id])
  end

  def game_params
    params.require(:game).permit(:name, :city, :start, :end, :photo)
  end
end
