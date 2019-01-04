require 'test_helper'

class TheClassesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @the_class = the_classes(:one)
  end

  test "should get index" do
    get the_classes_url, as: :json
    assert_response :success
  end

  test "should create the_class" do
    assert_difference('TheClass.count') do
      post the_classes_url, params: { the_class: { date: @the_class.date, description: @the_class.description, title: @the_class.title } }, as: :json
    end

    assert_response 201
  end

  test "should show the_class" do
    get the_class_url(@the_class), as: :json
    assert_response :success
  end

  test "should update the_class" do
    patch the_class_url(@the_class), params: { the_class: { date: @the_class.date, description: @the_class.description, title: @the_class.title } }, as: :json
    assert_response 200
  end

  test "should destroy the_class" do
    assert_difference('TheClass.count', -1) do
      delete the_class_url(@the_class), as: :json
    end

    assert_response 204
  end
end
