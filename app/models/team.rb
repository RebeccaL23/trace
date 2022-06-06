class Team < ApplicationRecord
  belongs_to :game
  has_many :completions, dependent: :destroy
  has_many :challenges, through: :stages
end
