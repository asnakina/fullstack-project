class CreateJoinTableUsersClasses < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :the_classes do |t|
      # t.index [:user_id, :the_class_id]
      # t.index [:the_class_id, :user_id]
    end
  end
end
