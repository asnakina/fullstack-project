class TheClassesController < ApplicationController
  before_action :set_the_class, only: [:show, :update, :destroy]

  # GET /the_classes
  def index
    @the_classes = TheClass.all

    render json: @the_classes
  end

  # GET /the_classes/1
  def show
    render json: @the_class
  end

  # POST /the_classes
  def create
    @the_class = TheClass.new(the_class_params)

    if @the_class.save
      render json: @the_class, status: :created, location: @the_class
    else
      render json: @the_class.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /the_classes/1
  def update
    if @the_class.update(the_class_params)
      render json: @the_class
    else
      render json: @the_class.errors, status: :unprocessable_entity
    end
  end

  # DELETE /the_classes/1
  def destroy
    @the_class.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_the_class
      @the_class = TheClass.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def the_class_params
      params.require(:the_class).permit(:title, :date, :description)
    end
end
