class AddClassToReviews < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :the_class, foreign_key: true
  end
end
