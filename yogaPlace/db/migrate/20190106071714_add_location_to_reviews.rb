class AddLocationToReviews < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :location, foreign_key: true
  end
end
