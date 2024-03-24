# frozen_string_literal: true

FactoryBot.define do
  factory :recipe do
    title { 'Test Recipe' }
    content { 'Test Content' }
  end
end
