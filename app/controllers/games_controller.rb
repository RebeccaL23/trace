# required for qrcode
require "rqrcode"
require "chunky_png"

class GamesController < ApplicationController
  before_action :set_game, only: %i[show edit update destroy]
  skip_before_action :authenticate_user!, only: %i[confirmation]

  def show
    @challenge = Challenge.new
  end

  def new
    @game = Game.new
  end

  # not checked!
  def create
    raise
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

  qrcode = RQRCode::QRCode.new("#{request.original_url}")

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

  IO.binwrite("./app/assets/images/qr_code#{@game.code}.png", png.to_s)

  end

  private

  def set_game
    @game = Game.find(params[:id])
  end

  def game_params
    params.require(:game).permit(:name, :city, :start, :end, :photo, :code, :cloud_photo)
  end
end
