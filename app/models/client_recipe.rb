class ClientRecipe < ApplicationRecord
  belongs_to :client
  belongs_to :recipe
  has_and_belongs_to_many :ingredients
end
