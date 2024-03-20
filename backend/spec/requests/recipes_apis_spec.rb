# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'RecipesController' do
  describe 'GET /recipes' do
    context 'レシピが存在する場合' do
      let!(:recipes) { create_list(:recipe, 3) }

      it '全てのメモが取得できることを確認する' do
        aggregate_failures do
          get '/recipes'
          assert_request_schema_confirm
          assert_response_schema_confirm(200)
          expect(response).to have_http_status(:ok)
          expect(response.parsed_body.length).to eq(3)
        end
      end
    end
  end

  describe 'POST /recipes' do
    context 'パラメータが正常な場合' do
      it 'レシピが作成されることを確認する' do
        aggregate_failures do
          expect do
            post '/recipes', params: { title: 'aaaaaaaa', content: 'aaaaaaa' }, as: :json
          end.to change(Recipe, :count).by(+1)
          expect(response).to have_http_status(:no_content)
          assert_request_schema_confirm
          assert_response_schema_confirm(204)
        end
      end
    end
    context 'パラメータが異常な場合' do
      it '422になり、エラーメッセージがレスポンスとして返る' do
        aggregate_failures do
          post '/recipes', params: { recipe: { title: '', content: '' } }
          assert_response_schema_confirm(422)
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.parsed_body['erros']).to include("Title can't be blank")
          expect(response.parsed_body['erros']).to include("Content can't be blank")
        end
      end
    end
  end

  describe 'PUT /recipes/:id' do
    context 'パラメータが正常な場合' do
      let!(:recipe) { create(:recipe) }
      let(:params) { { title: '新しいタイトル', content: '新しいコンテンツ' } }
      it 'レシピが更新されることを確認する' do
        aggregate_failures do
          put "/recipes/#{recipe.id}", params: { recipe: params }, as: :json
          expect(response).to have_http_status(:no_content)
          assert_response_schema_confirm(204)
          expect(Recipe.find(recipe.id).title).to eq('新しいタイトル')
          expect(Recipe.find(recipe.id).content).to eq('新しいコンテンツ')
        end
      end
    end
    context 'パラメータが異常な場合' do
      let!(:recipe) { create(:recipe) }
      let!(:params) { { title: '', content: '' } }
      it '422になり、エラーメッセージがレスポンスとして返る' do
        aggregate_failures do
          put "/recipes/#{recipe.id}", params: { recipe: params }
          expect(response).to have_http_status(:unprocessable_entity)
          assert_response_schema_confirm(422)
          expect(response.parsed_body['erros']).to include("Title can't be blank")
          expect(response.parsed_body['erros']).to include("Content can't be blank")
        end
      end
    end

    describe 'DELETE /recipes/:id' do
      context 'レシピが存在する場合' do
        let!(:recipe) { create(:recipe) }
        it 'レシピが削除されることを確認する' do
          aggregate_failures do
            delete "/recipes/#{recipe.id}"
            expect(response).to have_http_status(:no_content)
            assert_response_schema_confirm(204)
            expect(Recipe.find_by(id: recipe.id)).to be_nil
          end
        end
      end
      context 'レシピが存在しない場合' do
        it '404になることを確認する' do
          aggregate_failures do
            expect { delete '/recipes/0' }.not_to change(Recipe, :count)
            expect(response).to have_http_status(:not_found)
          end
        end
      end
    end
  end
end
