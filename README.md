# hn.cr

[![GitHub release](https://img.shields.io/github/release/crystal-libs/hn.cr.svg)](https://github.com/crystal-libs/hn.cr/releases) [![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://crystal-libs.github.io/hn.cr)

**[Hacker News API](https://github.com/HackerNews/API) wrapper written in [Crystal](https://github.com/crystal-lang/crystal)**

All functions return JSON

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     hn:
       github: crystal-libs/hn.cr
   ```

2. Run `shards install`

## Usage

### Require the module, set user agent:

```crystal
require "hn"

user_agent = "[description]:[version] by @[username]"
hn = HN::HackerNews.new(user_agent)
```

### Get an item:

```crystal
hn.item("1")
#{"by" => "pg", "descendants" => 15, "id" => 1, "kids" => [15, 234509, 487171, 454426, 454424, 454410, 82729], "score" => 57, "time" => 1160418111, "title" => "Y Combinator", "type" => "story", "url" => "http://ycombinator.com"}
```
    
### Get a user:

```crystal
hn.user("test")
#{"about" => "", "created" => 1175289467, "delay" => 0, "id" => "test", "karma" => 1, "submitted" => [1043201, 1029445, 1026445, 586568, 418362, 418361, 11780]}
```
### Get the max item:

```crystal
hn.max_item
#29832636
```

### Get stories:

The function takes a required `kind` argument. It must be one of the following:

- "new"
- "top"
- "best"
- "ask"
- "show"
- "job"

```crystal
hn.get_stories(kind="ask")
#[29830770, 29826725, 29830214, 29825080, 29825844, ...]
```

### Get changed items:

```crystal
hn.changed_items
#[29831564, 29832264, 29832633, 29832087, 29825303, ...]
```

### Get changed profiles:

```crystal
hn.changed_profiles
#["throwawayboise", "givemeethekeys", "jorts", "vasco", "podge", ...]
```

## Development

TODO: Write development instructions here

## Contributing

1. Fork it (<https://github.com/crystal-libs/hn.cr/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [gxfr](https://github.com/gxfr) - creator and maintainer
