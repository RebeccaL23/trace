class ChallengesController < ApplicationController
  before_action :set_game, only: %i[create edit update]
  before_action :set_challenge, only: %i[ edit update destroy]
  # skip_before_action :verify_authenticity_token, only: %i[] # not sure if needed

  def new
    @challenge = Challenge.new
  end

  def create
    @challenge = Challenge.new(challenge_params)
    @challenge.game = @game
    if @challenge.save
      redirect_to game_path(@game), notice: 'You have created a new challenge!'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @challenge.update(challenge_params)
    redirect_to game_path(@game)
  end

  def destroy
    @game = @challenge.game
    @challenge.destroy
    redirect_to game_path(@game), status: :see_other
  end

  private

  def set_game
    @game = Game.find(params[:game_id])
  end

  def set_challenge
    @challenge = Challenge.find(params[:id])
  end

  def challenge_params
    params.require(:challenge).permit(:question, :answer_1, :answer_2, :answer_3, :correct_answer, :points, :location)
  end
end
