class CreateJoinTableLocationClasses < ActiveRecord::Migration[5.2]
  def change
    create_join_table :locations, :the_classes do |t|
      # t.index [:location_id, :the_class_id]
      # t.index [:the_class_id, :location_id]
    end
  end
end
