class Client < ApplicationRecord
  has_many :client_recipes

  # validação
  validates_presence_of :name, :email
  validates_uniqueness_of :name, :email, case_sensitive: false
end
