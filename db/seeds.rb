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

user1 = User.create(
  email: "rebecca@gmail.com",
  password: "123456"
)

user2 = User.create(
  email: "adrian@gmail.com",
  password: "123456"
)

user3 = User.create(
  email: "padre@gmail.com",
  password: "123456"
)

puts "Created 3 users!"

puts "Creating games..."

Game.create(
  name: "Jack the Ripper",
  city: "London",
  start: "12-06-2022 10:00",
  end: "12-06-2022 13:00",
  user: user1
)

Game.create(
  name: "Jurassic Park",
  city: "London",
  start: "14-06-2022 10:00",
  end: "14-06-2022 13:00",
  user: user1
)

Game.create(
  name: "Ancient Aliens",
  city: "London",
  start: "14-06-2022 10:00",
  end: "14-06-2022 13:00",
  user: user1
)

puts "Created 3 games!"

puts "Creating teams..."

team1 = Team.new(
  name: "Firestarters",
  game: games[0]
)
team1.save!

team2 = Team.new(
  name: "Spice Boyz",
  game: games[0]
)
team2.save!

team1 = Team.new(
  name: "Firestarters",
  game: games[1]
)
team1.save!

team2 = Team.new(
  name: "Spice Boyz",
  game: games[1]
)
team2.save!
team1 = Team.new(
  name: "Firestarters",
  game: games[2]
)
team1.save!

team2 = Team.new(
  name: "Spice Boyz",
  game: games[2]
)
team2.save!

puts "Created 2 teams per game!"

puts "Creating challenges..."

16.times do
  Challenge.create(
    question: "How many lions are there in trafalgar square?",
    answer_1: "3",
    answer_2: "1",
    answer_3: "8",
    correct_answer: "4",
    points: 10,
    location: "Trafalgar Square",
    game: games.sample
  )
end

puts "Created 16 challenges!"


# 16.times do
#   Completion.create(
#     completed: false,
#     team: teams.sample,
#     challenge: challenges.sample
#   )
# end

# puts "Created 16 completions"
