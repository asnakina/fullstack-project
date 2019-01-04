class CreateTheClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :the_classes do |t|
      t.string :title
      t.date :date
      t.text :description

      t.timestamps
    end
  end
end
