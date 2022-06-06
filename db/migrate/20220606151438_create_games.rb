class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :name
      t.string :city
      t.datetime :start
      t.datetime :end
      t.references :user, null: false, foreign_key: true
      t.string :photo

      t.timestamps
    end
  end
end
