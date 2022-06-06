class Team < ApplicationRecord
  belongs_to :game
  has_many :stages, dependent: :destroy
  has_many :challenges, through: :stages
end
