class Api::V1::SubmitController < ApplicationController
    # POST - /api/v1/submit
    def create
        client_name = params[:client_name]
        client_email = params[:client_email]
        recipes = params[:recipes]
        coupon_code = params[:coupon_code]

        client = Client.new
        client.name = client_name 
        client.email = client_email 
        client.coupon_code = coupon_code 
        client.created_at = DateTime.now
        client.save
        
        recipes.each do |recipe|
            client_recipe = ClientRecipe.new
            client_recipe.recipe_id = recipe["recipe_id"]
            client_recipe.client_id = client.id
            client_recipe.created_at = DateTime.now
            client_recipe.save

            recipe["ingredients"].each do |ingredient_id|
                client_recipe_ingredient = ClientRecipeIngredient.new
                client_recipe_ingredient.ingredient_id = ingredient_id
                client_recipe_ingredient.client_recipe_id = client_recipe.id
                client_recipe_ingredient.save
            end
        end

        render :nothing => true, :status => :ok
    end
end
