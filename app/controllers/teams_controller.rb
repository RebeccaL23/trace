class TeamsController < ApplicationController
  before_action :set_game, only: %i[new create]

  def new
    @team = Team.new
  end

  def create
    @team = Team.new(team_params)
    @team.game = @game
    if @team.save
      redirect_to game_team_play_path(@game, @team), notice: 'You just made a team'
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def set_game
    @game = Game.find(params[:game_id])
  end

  def team_params
    params.require(:team).permit(:name, :team_photo)
  end
end

# @completion = Completion.create(completed: false, team: @team, challenge: @challenge)

# def set_team
#   @team = Team.find(params[:id])
# end
