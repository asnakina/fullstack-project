class Location < ApplicationRecord
  has_many :reviews
  has_many :the_classes
end
