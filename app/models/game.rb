class Game < ApplicationRecord
  belongs_to :user # one admin per game
  has_many :teams, dependent: :destroy
  has_many :challenges, dependent: :destroy
  validates :name, :city, :start, :end, presence: true
  validates :id, uniqueness: true

  # search on a user's index page
  include PgSearch::Model
  pg_search_scope :search_by_name,
                  against: %i[name city],
                  using: {
                    tsearch: { prefix: true }
                  }
end
