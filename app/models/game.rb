class Game < ApplicationRecord
  belongs_to :user # one admin per game
  has_many :teams, dependent: :destroy
  has_many :challenges, dependent: :destroy
  validates :name, :city, :start, :end, presence: true
  validates :id, uniqueness: true
end
