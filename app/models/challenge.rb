class Challenge < ApplicationRecord
  belongs_to :game
  has_many :stages
end
