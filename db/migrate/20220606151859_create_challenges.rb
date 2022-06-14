class CreateChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :challenges do |t|
      t.string :question
      t.string :answer_1
      t.string :answer_2
      t.string :answer_3
      t.string :answer_correct
      t.integer :points
      t.string :location
      t.references :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
