class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(
    followee_id: params[:user_id],
    follower_id: current_user.id)
    if @follow.save
      @users = User.where(id: @follow.followee_id) + User.where(id: @follow.follower_id)
      render "api/users/index"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    Follow.find_by(followee_id: 181, follower_id: 180)
    @follow = Follow.find_by(
    follower_id: current_user.id,
    followee_id: params[:user_id])
    followee_id = @follow.followee_id
    follower_id = @follow.follower_id
    @follow.destroy
    @users = User.where(id: followee_id) + User.where(id: follower_id)
    render "api/users/index"
  end
end
