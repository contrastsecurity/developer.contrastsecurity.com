---
title: "Getting Started: Runtime Security"
sidebar_position: 1
---

Done by: Application Developer<br/>
Time Needed: 15 minutes

What you get: An agent that detects Ruby security flaws as the application runs.

1. Add the Contrast Ruby gem:
  ```shell
  gem 'contrast-agent'
  ```
1. Install the agent
  ```shell
  bundle install
  ```
  You can also use bundle update.
1. [Configure middleware](https://docs.contrastsecurity.com/en/ruby-configuration.html) (Rails or Sinatra)
1. Run your application

Once complete, you can [view your results](../keep-going/look-at-results.md)