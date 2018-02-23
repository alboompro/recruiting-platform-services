class SmartCoffeeController < ApplicationController
  def produtos
     @produtos = Recipe.all
  end


end
