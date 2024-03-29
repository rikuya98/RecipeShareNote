# frozen_string_literal: true

class SessionsController < ApplicationController
  def show
    set_csrf_token
    render json: {}, status: :ok
  end
end
