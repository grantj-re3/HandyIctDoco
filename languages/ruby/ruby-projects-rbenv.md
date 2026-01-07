# Ruby projects with *rbenv and bundler*

## Detail

1. :thumbsup: [Better Stack: Stanley Ulili | Getting Started with rbenv | 2025](https://betterstack.com/community/guides/scaling-ruby/rbenv-explained/)
   - Installing rbenv | Understanding rbenv's operation | Installing Ruby versions with rbenv |
     Setting Ruby versions for your projects | Managing gems with rbenv | Using Bundler with rbenv
   - [Gemfile], Gemfile.lock and .ruby-version should be committed to version control with your project code

1. Prerequisite packages for rbenv
   - Packages listed on [this](https://collectionbuilder.github.io/cb-docs/docs/software/ruby_linux/) page are:
     *autoconf bison build-essential libssl-dev libyaml-dev libreadline-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev*
   - Packages listed on [this](https://vegastack.com/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-20-04/) page are
     the same *except* *libreadline-dev* is replaced with *libreadline6-dev*, and *libgdbm3* is added

1. GitHub rbenv
   - [Seamlessly manage your app’s Ruby environment with rbenv](https://github.com/rbenv/rbenv)
     * Doesn't cover bundler
   - [ruby-build](https://github.com/rbenv/ruby-build)
     * As a standalone program, *ruby-build*. | As a plugin for rbenv, *rbenv install*.

1. [Bundler | Bundler’s Purpose and Rationale](https://bundler.io/guides/rationale.html#summary)
   - Checking Your Code into Version Control: check in ... the Gemfile and Gemfile.lock snapshot
   - A Simple Bundler Workflow

1. Launch School | Core Ruby Tools
   - [Ruby Version Managers: Rbenv](https://launchschool.com/books/core_ruby_tools/read/ruby_version_managers#rbenv)
   - [Bundler | 2025](https://launchschool.com/books/core_ruby_tools/read/bundler)

1. [Visual Studio Code | Ruby in Visual Studio Code | 2024](https://code.visualstudio.com/docs/languages/ruby)
   - "we recommend using a version manager ... such as *rbenv* on macOS and Linux and *rbenv on Windows*"


## Brief articles and tips

1. [makandra: Arne Hartherz | rbenv: How to switch to another Ruby version | 2014-2024](https://makandracards.com/makandra/21545-rbenv-switch-another-ruby-version)
1. [DEV Community: Chuck | Set Up Rbenv Revisited | 2021](https://dev.to/eclecticcoding/set-up-rbenv-revisited-4ngo)
1. OLD: [GitHub Gist: Micah Elliott | Setting up and installing rbenv, ruby-build, rubies, rbenv-gemset, and bundler | 2012](https://gist.github.com/MicahElliott/2407918)

