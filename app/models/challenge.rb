class Challenge < ApplicationRecord
  belongs_to :game
  has_many :completions
end
