class Api::V1::SignupController < ApplicationController
    # POST - /api/v1/signup
    def create
        name = params[:name]
        email = params[:email]

        client_exists = Client.exists?(email: email)
        if(client_exists)
            render :nothing => true, :status => :unauthorized
            return
        end
        
        coupon_code = generate_coupon_code
        Client.create(name: name, email: email, coupon_code: coupon_code, created_at: DateTime.now)
        
        render :nothing => true, :status => :ok
    end

    private

    def generate_coupon_code
        return (0...8).map { (65 + rand(26)).chr }.join
    end
end
