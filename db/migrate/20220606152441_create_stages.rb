class CreateStages < ActiveRecord::Migration[7.0]
  def change
    create_table :completions do |t|
      t.boolean :completed
      t.references :team, null: false, foreign_key: true
      t.references :challenge, null: false, foreign_key: true

      t.timestamps
    end
  end
end
