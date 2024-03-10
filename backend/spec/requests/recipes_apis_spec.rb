require 'rails_helper'

RSpec.describe 'RecipesController' do
  describe 'GET /recipes' do
    context 'レシピが存在する場合' do
      let!(:recipes) { create_list(:recipe, 3) }

      it '全てのメモが取得できることを確認する' do
        aggregate_failures do
          get '/recipes'
          expect(response).to have_http_status(:ok)
          expect(response.parsed_body.length).to eq(3)
        end
      end
    end
  end
end
