class ClientRecipeIngredient < ApplicationRecord
  belongs_to :ingredient
  belongs_to :client_recipe
end
