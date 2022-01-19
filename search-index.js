crystal_doc_search_index_callback({"repository_name":"hn","body":"# hn.cr\n\n[![GitHub release](https://img.shields.io/github/release/trollmao/hn.svg)](https://github.com/trollmao/hn/releases) [![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://trollmao.github.io/hn.cr)\n\n**[Hacker News API](https://github.com/HackerNews/API) wrapper written in [Crystal](https://github.com/crystal-lang/crystal)**\n\nAll functions return JSON\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     hn:\n       github: trollmao/hn\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n### Require the module, set user agent:\n\n```crystal\nrequire \"hn\"\n\nuser_agent = \"[description]:[version] by @[username]\"\nhn = HN::HackerNews.new(user_agent)\n```\n\n### Get an item:\n\n```crystal\nhn.item(\"1\")\n#{\"by\" => \"pg\", \"descendants\" => 15, \"id\" => 1, \"kids\" => [15, 234509, 487171, 454426, 454424, 454410, 82729], \"score\" => 57, \"time\" => 1160418111, \"title\" => \"Y Combinator\", \"type\" => \"story\", \"url\" => \"http://ycombinator.com\"}\n```\n    \n### Get a user:\n\n```crystal\nhn.user(\"test\")\n#{\"about\" => \"\", \"created\" => 1175289467, \"delay\" => 0, \"id\" => \"test\", \"karma\" => 1, \"submitted\" => [1043201, 1029445, 1026445, 586568, 418362, 418361, 11780]}\n```\n### Get the max item:\n\n```crystal\nhn.max_item\n#29832636\n```\n\n### Get stories:\n\nThe function takes a required `kind` argument. It must be one of the following:\n\n- \"new\"\n- \"top\"\n- \"best\"\n- \"ask\"\n- \"show\"\n- \"job\"\n\n```crystal\nhn.get_stories(kind=\"ask\")\n#[29830770, 29826725, 29830214, 29825080, 29825844, ...]\n```\n\n### Get changed items:\n\n```crystal\nhn.changed_items\n#[29831564, 29832264, 29832633, 29832087, 29825303, ...]\n```\n\n### Get changed profiles:\n\n```crystal\nhn.changed_profiles\n#[\"throwawayboise\", \"givemeethekeys\", \"jorts\", \"vasco\", \"podge\", ...]\n```\n\n## Development\n\nTODO: Write development instructions here\n\n## Contributing\n\n1. Fork it (<https://github.com/trollmao/hn/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [trollmao](https://github.com/trollmao) - creator and maintainer","program":{"html_id":"hn/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"hn","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"hn/HN","path":"HN.html","kind":"module","full_name":"HN","name":"HN","abstract":false,"locations":[{"filename":"src/hn.cr","line_number":4,"url":"https://github.com/trollmao/hn.cr/blob/bea79b2d9b399e26605671bb7fad0c3a5e17b3e6/src/hn.cr#L4"}],"repository_name":"hn","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.0\""}],"types":[{"html_id":"hn/HN/HackerNews","path":"HN/HackerNews.html","kind":"class","full_name":"HN::HackerNews","name":"HackerNews","abstract":false,"superclass":{"html_id":"hn/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"hn/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"hn/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/hn.cr","line_number":7,"url":"https://github.com/trollmao/hn.cr/blob/bea79b2d9b399e26605671bb7fad0c3a5e17b3e6/src/hn.cr#L7"}],"repository_name":"hn","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"hn/HN","kind":"module","full_name":"HN","name":"HN"},"constructors":[{"html_id":"new(user_agent:String)-class-method","name":"new","abstract":false,"args":[{"name":"user_agent","external_name":"user_agent","restriction":"String"}],"args_string":"(user_agent : String)","args_html":"(user_agent : String)","location":{"filename":"src/hn.cr","line_number":10,"url":"https://github.com/trollmao/hn.cr/blob/bea79b2d9b399e26605671bb7fad0c3a5e17b3e6/src/hn.cr#L10"},"def":{"name":"new","args":[{"name":"user_agent","external_name":"user_agent","restriction":"String"}],"visibility":"Public","body":"_ = allocate\n_.initialize(user_agent)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"changed_items-instance-method","name":"changed_items","doc":"get changed items","summary":"<p>get changed items</p>","abstract":false,"location":{"filename":"src/hn.cr","line_number":50,"url":"https://github.com/trollmao/hn.cr/blob/bea79b2d9b399e26605671bb7fad0c3a5e17b3e6/src/hn.cr#L50"},"def":{"name":"changed_items","visibility":"Public","body":"return (get(\"updates\"))[\"items\"]"}},{"html_id":"changed_profiles-instance-method","name":"changed_profiles","doc":"get changed profiles","summary":"<p>get changed profiles</p>","abstract":false,"location":{"filename":"src/hn.cr","line_number":55,"url":"https://github.com/trollmao/hn.cr/blob/bea79b2d9b399e26605671bb7fad0c3a5e17b3e6/src/hn.cr#L55"},"def":{"name":"changed_profiles","visibility":"Public","body":"return (get(\"updates\"))[\"profiles\"]"}},{"html_id":"get(endpoint:String)-instance-method","name":"get","doc":"send request to url with endpoint","summary":"<p>send request to url with endpoint</p>","abstract":false,"args":[{"name":"endpoint","external_name":"endpoint","restriction":"String"}],"args_string":"(endpoint : String)","args_html":"(endpoint : String)","location":{"filename":"src/hn.cr","line_number":14,"url":"https://github.com/trollmao/hn.cr/blob/bea79b2d9b399e26605671bb7fad0c3a5e17b3e6/src/hn.cr#L14"},"def":{"name":"get","args":[{"name":"endpoint","external_name":"endpoint","restriction":"String"}],"visibility":"Public","body":"@endpoint = endpoint\nurl = \"https://hacker-news.firebaseio.com/v0/#{endpoint}.json\"\nheaders = HTTP::Headers {\"User-Agent\" => @user_agent}\nHTTP::Client.get(url, headers: headers) do |response|\n  data = JSON.parse(response.body_io)\n  status_code = response.status_code\n  if status_code == 200\n    return data\n  else\n    error = data[\"error\"]\n    raise(Exception.new(\"#{status_code} on endpoint #{endpoint}\"))\n  end\nend\n"}},{"html_id":"get_stories(kind=\"new\")-instance-method","name":"get_stories","doc":"get story info (default: new)","summary":"<p>get story info (default: new)</p>","abstract":false,"args":[{"name":"kind","default_value":"\"new\"","external_name":"kind","restriction":""}],"args_string":"(kind = \"new\")","args_html":"(kind = <span class=\"s\">&quot;new&quot;</span>)","location":{"filename":"src/hn.cr","line_number":44,"url":"https://github.com/trollmao/hn.cr/blob/bea79b2d9b399e26605671bb7fad0c3a5e17b3e6/src/hn.cr#L44"},"def":{"name":"get_stories","args":[{"name":"kind","default_value":"\"new\"","external_name":"kind","restriction":""}],"visibility":"Public","body":"return get(kind + \"stories\")"}},{"html_id":"item(item_id)-instance-method","name":"item","doc":"get item info","summary":"<p>get item info</p>","abstract":false,"args":[{"name":"item_id","external_name":"item_id","restriction":""}],"args_string":"(item_id)","args_html":"(item_id)","location":{"filename":"src/hn.cr","line_number":30,"url":"https://github.com/trollmao/hn.cr/blob/bea79b2d9b399e26605671bb7fad0c3a5e17b3e6/src/hn.cr#L30"},"def":{"name":"item","args":[{"name":"item_id","external_name":"item_id","restriction":""}],"visibility":"Public","body":"return get(\"item/#{item_id}\")"}},{"html_id":"max_item-instance-method","name":"max_item","abstract":false,"location":{"filename":"src/hn.cr","line_number":39,"url":"https://github.com/trollmao/hn.cr/blob/bea79b2d9b399e26605671bb7fad0c3a5e17b3e6/src/hn.cr#L39"},"def":{"name":"max_item","visibility":"Public","body":"return get(\"maxitem\")"}},{"html_id":"user(username)-instance-method","name":"user","doc":"get user info","summary":"<p>get user info</p>","abstract":false,"args":[{"name":"username","external_name":"username","restriction":""}],"args_string":"(username)","args_html":"(username)","location":{"filename":"src/hn.cr","line_number":35,"url":"https://github.com/trollmao/hn.cr/blob/bea79b2d9b399e26605671bb7fad0c3a5e17b3e6/src/hn.cr#L35"},"def":{"name":"user","args":[{"name":"username","external_name":"username","restriction":""}],"visibility":"Public","body":"return get(\"user/#{username}\")"}}]}]}]}})