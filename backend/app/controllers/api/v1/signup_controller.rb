class Api::V1::SignupController < ApplicationController
    # GET - /api/v1/signup
    def index
        email = params[:email]

        client_exists = Client.exists?(email: email)
        if(client_exists)
            render :nothing => true, :status => :unauthorized
            return
        end
        
        render :nothing => true, :status => :ok
    end    
end
