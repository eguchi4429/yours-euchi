class AddauthorityToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :authority, :string
  end
end
