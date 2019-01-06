class Review < ApplicationRecord
  belongs_to :user
  belongs_to :the_class, optional: true
  belongs_to :location, optional: true
end
