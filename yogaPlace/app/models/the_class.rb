class TheClass < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :reviews
  has_and_belongs_to_many :location
end
