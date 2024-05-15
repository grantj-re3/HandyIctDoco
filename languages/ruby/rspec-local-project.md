# How to use RSpec with Bundler on Linux Mint 21

I have written this document because some of the instructions on the internet
are out of date (because Bundler has deprecated --path and other switches). Read
[here](https://github.com/rubygems/bundler/blob/d4993be66fa2e76b3ca00ea56a51ecab5478b726/UPGRADING.md)
for background info.

The instructions below work for me. None of the commands require *sudo* unless specified.


## Environment

- Linux Mint 21 LTS
- ruby and ruby-bundler installed via *sudo apt install ...*
  * ruby 3.0.2p107 (2021-07-07 revision 0db68f0233) [x86_64-linux-gnu]
  * Bundler version 2.3.5
- RSpec gem installed in the **local project directory** via bundler as per the instructions below
  * RSpec 3.13


## Instructions

```
$ mkdir PROJECT_DIR
$ cd PROJECT_DIR
```

Create a 'Gemfile' containing:
```
# Gemfile
source "https://rubygems.org"
gem "rspec"
```

Configure and install gems as per the Gemfile. Creates:

- Gemfile.lock
- .bundle/config
- vendor/bundle/ruby/x.y.z/...
```
$ bundle config set --local path 'vendor/bundle'
$ bundle install    # Took 5sec using broadband. Took 16min using mobile hotspot!
```

Initialise RSpec. Creates:

- .rspec
- spec/spec_helper.rb
```
$ bundle exec rspec --init
$ mkdir lib
```

Then follow the normal Test Driven Development (TDD) interative process:
red/green/refactor.  For example:

- Edit spec/MYFILE_spec.rb; rspec command below will give *red/fail* test-result
- Edit lib/MYFILE.rb; rspec command below will give *green/pass* test-result
- Refactor
- Repeat the 3 steps above as needed

Test using a command like one of those below.
```
$ bundle exec rspec
$ bundle exec rspec --format documentation
```

