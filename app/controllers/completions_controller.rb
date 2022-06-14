class CompletionsController < ApplicationController

  def choice
    @completion = Completion.find(params[:id])
    @completion.update(completed: true)
    # gets completions param
    # completion.completed = true
    # if input  == completion.chall.answer_correct
    #   team.score += completion.chall.points
    # end
  end

  def correct
    @completion = Completion.find(params[:id])
    @team = Team.find(params[:team_id])
    @team.score += @completion.challenge.points
    @team.save
  end
end
