class Api::V1::ProductController < ApplicationController
    # GET - /api/v1/product
    def index
        recipes = Recipe.order('name')
        render json: recipes
    end

    # GET - /api/v1/product/{id}/complement
    def ingredients()
        ingredients = Ingredient.joins(:Complement).where(Complements: {recipe_id: params[:id]})
        render json: ingredients
    end
end
