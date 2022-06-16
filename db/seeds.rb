require "open-uri"
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

# challenges = Challenge.all
# teams = Team.all
# games = Game.all

puts "Creating users..."

user1 = User.create(email: "rebecca@gmail.com", password: "123456")
# user2 = User.create(email: "adrian@gmail.com", password: "123456")
# user3 = User.create(email: "padre@gmail.com", password: "123456")

puts "Created #{User.count} user!"

puts "Creating 9 games..."

game1 = Game.new(
  name: "Best of London",
  city: "London",
  start: "17-06-2022 14:30",
  end: "17-06-2022 19:00",
  user: user1
)
game1.cloud_photo.attach(io: URI.open("https://res.cloudinary.com/borhan-cloud/image/upload/v1655392123/article-2006892-0CAE44C200000578-609_1024x615_large_qoycul.jpg"), filename: "#{game1.name}", content_type: "image/png")
game1.save

game2 = Game.new(
  name: "Jurassic Park",
  city: "London",
  start: "18-06-2022 10:00",
  end: "18-06-2022 13:00",
  photo: 'placeholder.png',
  user: user1
)
game2.cloud_photo.attach(io: URI.open("https://res.cloudinary.com/borhan-cloud/image/upload/v1655303678/9nldf77qdz15mmu2fxz1a1nedgkr.webp"), filename: "#{game2.name}", content_type: "image/png")
game2.save

game3 = Game.new(
  name: "Harry Potter",
  city: "London",
  start: "12-06-2022 10:00",
  end: "12-06-2022 13:00",
  photo: 'placeholder.png',
  user: user1
)
game3.cloud_photo.attach(io: URI.open("https://res.cloudinary.com/borhan-cloud/image/upload/v1655304990/e0tzavf07g8nwukpnfp0o8lbnagn.jpg"), filename: "#{game3.name}", content_type: "image/png")
game3.save

game4 = Game.new(
  name: "Staff pub crawl",
  city: "London",
  start: "12-06-2022 10:00",
  end: "12-06-2022 13:00",
  photo: 'placeholder.png',
  user: user1
)
game4.cloud_photo.attach(io: URI.open("https://res.cloudinary.com/borhan-cloud/image/upload/v1655391779/DQoRhQSVAAA2_h2_a3wvxq.jpg"), filename: "#{game4.name}", content_type: "image/png")
game4.save

game5 = Game.new(
  name: "Hen party",
  city: "London",
  start: "16-06-2022 14:00",
  end: "16-06-2022 16:00",
  photo: 'placeholder.png',
  user: user1
)
game5.cloud_photo.attach(io: URI.open("https://res.cloudinary.com/borhan-cloud/image/upload/v1655392009/blackpool_carlas_hen_weekend_book_koye3t.jpg"), filename: "#{game5.name}", content_type: "image/png")
game5.save

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

puts "Creating challenges..."

# 16.times do

  Challenge.create(
    question: "How many capsules does the London Eye have?",
    answer_1: "18",
    answer_2: "99",
    answer_3: "48",
    answer_correct: "32",
    points: 10,
    location: "London Eye",
    game: Game.first
  )

  Challenge.create(
    question: "What colour are the dials and clock hands of Big Ben?",
    answer_1: "Le Wagon red",
    answer_2: "Black",
    answer_3: "Neon green",
    answer_correct: "Prussian blue",
    points: 10,
    location: "House of Commons, Westminster, London SW1A 0AA, United Kingdom",
    game: Game.first
  )
# end

puts "Created #{Challenge.count} challenges!"

# 16.times do
#   Completion.create(
#     completed: false,
#     team: teams.sample,
#     challenge: challenges.sample
#   )
# end

# puts "Created 16 completions"
