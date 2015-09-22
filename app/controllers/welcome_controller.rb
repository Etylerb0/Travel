class WelcomeController < ApplicationController
  def index
  	@homeland = 'Chicago'
  	@countries = ['London', 'Tokyo', 'South Africa']
  end

  def about
  end

  def contact
  end	
end
