class AddCodeToGames < ActiveRecord::Migration[7.0]
  def change
    add_column :games, :code, :string
  end
end
