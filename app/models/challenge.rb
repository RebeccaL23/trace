class Challenge < ApplicationRecord
  belongs_to :game
  has_many :completions
  geocoded_by :location
  after_validation :geocode, if: :will_save_change_to_location?
end
