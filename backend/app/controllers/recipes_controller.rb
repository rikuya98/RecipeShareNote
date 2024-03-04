# frozen_string_literal: true

class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: recipes
  end

  def create
    Recipe.create(recipe_params)
    head :created
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :content)
  end
end
