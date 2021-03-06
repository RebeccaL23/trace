# required for qrcode
require "rqrcode"
require "chunky_png"

class GamesController < ApplicationController
  before_action :set_game, only: %i[show edit update destroy]
  skip_before_action :authenticate_user!, only: %i[confirmation join start status play leaderboard]

  def show
    @challenge = Challenge.new
  end

  def join
    @games = Game.all
    if params[:code].present?
      @game = @games.where(code: params[:code]).first
      if @game.valid?
      redirect_to game_status_path(@game)
      end
    end
  end

  def new
    @game = Game.new
  end

  def create
    @game = Game.new(game_params)
    @game.user = current_user
    if @game.save
      redirect_to game_path(@game), notice: 'you created a game!'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    @game.update(game_params)
    redirect_to game_path(@game)
  end

  def edit
  end

  def status
    @game = Game.find(params[:game_id])
  end

  def play
    @game = Game.find(params[:game_id])
    @team = Team.find(params[:team_id])
    @finished = false
    if @team.completions.all? { |comp| comp.completed == true}
      @finished = true
    end
  end

  def destroy
    @game.destroy
    redirect_to user_path(current_user.id), status: :see_other
  end

  def confirmation
    @game = Game.find(params[:game_id])
    games = Game.all
    if @game.code.nil?
      code = [*'A'..'Z', *0..9].sample(6).join
      while games.where(code: code).count >= 1
        code = [*'A'..'Z', *0..9].sample(6).join
      end
      @game.code = code
      @game.save
    end

    # qrcode = RQRCode::QRCode.new("#{request.original_url}")
    qrcode = RQRCode::QRCode.new("https://trace-game.herokuapp.com/games/#{@game.id}/status")

    png = qrcode.as_png(
      bit_depth: 1,
      border_modules: 1,
      color_mode: ChunkyPNG::COLOR_GRAYSCALE,
      color: "black",
      file: nil,
      fill: "white",
      module_px_size: 10,
      resize_exactly_to: false,
      resize_gte_to: false,
      size: 250
    )

    # IO.binwrite("./app/assets/images/qr_code#{@game.code}.png", png.to_s)
    Cloudinary::Uploader.upload("#{png.to_data_url}",
    :public_id => "qr_code#{@game.code}",
    :use_filename => true
    )
  end

  def leaderboard
    @game = Game.find(params[:game_id])
    @teams = @game.teams
    @teams.each do |team|
      # Check if team doesn't have a finish time
      if team.finish.nil?
        # If all completions are completed, set team finish time to now
        if team.completions.all? { |comp| comp.completed == true}
          team.finish = Time.now
          team.save
        end
      end
    end
  end

  private

  def set_game
    @game = Game.find(params[:id])
  end

  def game_params
    params.require(:game).permit(:name, :city, :start, :end, :photo, :code, :cloud_photo)
  end
end
