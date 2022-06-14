class Team < ApplicationRecord
  attribute :score, :integer, default: 0
  belongs_to :game
  has_many :completions, dependent: :destroy
  has_many :challenges, through: :stages
  has_one_attached :team_photo
end
