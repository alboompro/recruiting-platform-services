class ClientRecipe < ApplicationRecord
  belongs_to :recipe
  belongs_to :client
end
