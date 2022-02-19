require "test_helper"

class YoursControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get yours_index_url
    assert_response :success
  end
end
