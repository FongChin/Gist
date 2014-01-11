class CreateGists < ActiveRecord::Migration
  def change
    create_table :gists do |t|
      t.string :title, :null => false
      t.integer :user_id, :null => false

      t.timestamps
    end
    add_index :gists, :user_id
  end

end
