class Api::V1::SubmitController < ApplicationController
    # POST - /api/v1/submit
    def create
        client_id = params[:client_id]
        recipe_id = params[:recipe_id]
        ingredients_id = params[:ingredients_id]

        client_recipe = ClientRecipe.new
        client_recipe.recipe_id = recipe_id
        client_recipe.client_id = client_id
        client_recipe.created_at = DateTime.now

        client_recipe.save

        ingredients_id.each do |ingredient|
            client_recipe_ingredient = ClientRecipeIngredient.new
            client_recipe_ingredient.ingredient_id = ingredient
            client_recipe_ingredient.client_recipe_id = client_recipe.id

            client_recipe_ingredient.save
        end

        render :nothing => true, :status => :ok
    end
end
