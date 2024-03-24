# frozen_string_literal: true

class RecipesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # GET /recipes
  def index
    recipes = Recipe.all
    render json: recipes, status: :ok
  end

  # POST /recipes
  def create
    recipe = Recipe.new(recipe_params)
    if recipe.save
      head :no_content
    else
      render json: { erros: recipe.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PUT /recipes/:id
  def update
    recipe = Recipe.find(params[:id])
    if recipe.update(recipe_params)
      head :no_content
    else
      render json: { erros: recipe.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/:id
  def destroy
    recipe = Recipe.find(params[:id])
    recipe.destroy
    head :no_content
  end

  private

  def record_not_found(exception)
    render json: { error: exception.message }, status: :not_found
  end

  def recipe_params
    params.require(:recipe).permit(:title, :content)
  end
end
