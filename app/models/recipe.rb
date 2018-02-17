class Recipe < ApplicationRecord
  has_and_belongs_to_many :ingredients, join_table: 'recipe_ingredients'
  has_many :complements
  has_many :client_recipes
end
