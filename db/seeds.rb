# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroying users, teams, games and challenges"

User.destroy_all
Team.destroy_all
Game.destroy_all
Challenge.destroy_all

puts "Destroyed users, teams, games and challenges"

challenges = Challenge.all
teams = Team.all
games = Game.all

puts "Creating users..."

user1 = User.create(email: "rebecca@gmail.com", password: "123456")
# user2 = User.create(email: "adrian@gmail.com", password: "123456")
# user3 = User.create(email: "padre@gmail.com", password: "123456")

puts "Created #{User.count} user!"

puts "Creating 9 games..."


Game.create(
  name: "Rebecca's Tots",
  city: "London",
  start: "14-06-2022 10:00",
  end: "14-06-2022 23:00",
  photo: 'nkids.jpg',
  user: user1
)
2.times do
  Game.create(
    name: "Jack the Ripper",
    city: "London",
    start: "12-06-2022 10:00",
    end: "12-06-2022 13:00",
    photo: 'placeholder.png',
    user: user1
  )

  Game.create(
    name: "Jurassic Park",
    city: "London",
    start: "01-06-2022 10:00",
    end: "01-06-2022 13:00",
    photo: 'placeholder.png',
    user: user1
  )

  Game.create(
    name: "Ancient Aliens",
    city: "London",
    start: "14-06-2022 10:00",
    end: "14-06-2022 13:00",
    photo: 'placeholder.png',
    user: user1
  )
end

puts "Created #{Game.count} games!"

# puts "Creating teams..."

# team1 = Team.new(
#   name: "Firestarters",
#   game: games[0]
# )
# team1.save!

# team2 = Team.new(
#   name: "Spice Boyz",
#   game: games[0]
# )
# team2.save!

# team1 = Team.new(
#   name: "Firestarters",
#   game: games[1]
# )
# team1.save!

# team2 = Team.new(
#   name: "Spice Boyz",
#   game: games[1]
# )
# team2.save!

# team1 = Team.new(
#   name: "Firestarters",
#   game: games[2]
# )
# team1.save!

# team2 = Team.new(
#   name: "Spice Boyz",
#   game: games[2]
# )
# team2.save!

# puts "Created 2 teams per game!"

puts "Creating 6 challenges..."

# 16.times do
  Challenge.create(
    question: "How many lions are there in trafalgar square?",
    answer_1: "3",
    answer_2: "1",
    answer_3: "8",
    answer_correct: "4",
    points: 10,
    location: "Trafalgar Square",
    game: Game.first
  )

  Challenge.create(
    question: "How many capsules does the London Eye have?",
    answer_1: "18",
    answer_2: "42",
    answer_3: "69",
    answer_correct: "32",
    points: 10,
    location: "London Eye",
    game: Game.first
  )

  Challenge.create(
    question: "What is the common name for The Royal Courts of Justice?",
    answer_1: "Elizabeth's Naughty List",
    answer_2: "The Loyal Courts of Justice",
    answer_3: "The Loyal Courts of Justyce",
    answer_correct: "The Law Courts",
    points: 10,
    location: "The Royal Courts of Justice",
    game: Game.first
  )
  Challenge.create(
    question: "How many rooms in the Buckingham Palace?",
    answer_1: "Between 300 and 500",
    answer_2: "Over 1000",
    answer_3: "Less than 700",
    answer_correct: "Over 700",
    points: 10,
    location: "Buckingham Palace",
    game: Game.first
  )
  Challenge.create(
    question: "Which river does the Palace of Westminster sit on?",
    answer_1: "River Island",
    answer_2: "Amazon River",
    answer_3: "Lake Toba",
    answer_correct: "River Thames",
    points: 10,
    location: "Palace of Westminster",
    game: Game.first
  )
# end

puts "Created 6 challenges!"

# 16.times do
#   Completion.create(
#     completed: false,
#     team: teams.sample,
#     challenge: challenges.sample
#   )
# end

# puts "Created 16 completions"
