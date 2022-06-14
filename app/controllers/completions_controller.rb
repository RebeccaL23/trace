class CompletionsController < ApplicationController

  def choice
    @completion = Completion.find(params[:id])
    @completion.update(completed: true)
    # gets completions param
    # completion.completed = true
    # if input  == completion.chall.correct_answer
    #   team.score += completion.chall.points
    # end
  end
end
