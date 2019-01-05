class User < ApplicationRecord
  has_many :reviews, dependent: :nullify
  has_secure_password
  validates :email, presence: true

  def to_token_payload
    {
      sub: id,
      email: email
    }
  end
end
