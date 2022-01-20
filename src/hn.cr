require "http/client"
require "json"

module HN
  VERSION = "0.1.0"

  class HackerNews
    @user_agent : String

    def initialize(@user_agent : String)
    end

    # send request to url with endpoint
    def get(@endpoint : String)
      url = "https://hacker-news.firebaseio.com/v0/#{endpoint}.json"
      headers = HTTP::Headers{"User-Agent" => @user_agent}
      HTTP::Client.get(url, headers: headers) do |response|
        data = JSON.parse(response.body_io)
        status_code = response.status_code
        if status_code == 200
          return data
        else
          error = data["error"]
          raise Exception.new("#{status_code} on endpoint #{endpoint}")
        end
      end
    end

    # get item info
    def item(item_id)
      return get("item/#{item_id}")
    end

    # get user info
    def user(username)
      return get("user/#{username}")
    end

    def max_item
      return get("maxitem")
    end

    # get story info (default: new)
    def get_stories(kind = "new")
      # kinds: new, top, best, ask, show, job
      return get(kind + "stories")
    end

    # get changed items
    def changed_items
      return get("updates")["items"]
    end

    # get changed profiles
    def changed_profiles
      return get("updates")["profiles"]
    end
  end
end
