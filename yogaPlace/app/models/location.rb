class Location < ApplicationRecord
  has_many :reviews
  has_and_belongs_to_many :the_classes
end
