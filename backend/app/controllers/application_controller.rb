# frozen_string_literal: true

class ApplicationController < ActionController::API
  include ActionController::Cookies
  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      value: form_authenticity_token
    }
  end
end
