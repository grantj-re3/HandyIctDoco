# Ruby

Click [here](../coding/beginner-programming-courses.md) for beginner material.

Click [here](ruby-testing.md) for Ruby testing with RSpec.

Click [here](../coding/object-oriented-design.md) for Object Oriented Design material.


This page is for resources which don't fit into the above categories!

1. [Ruby home page](https://www.ruby-lang.org/en/)
   - [Documentation](https://www.ruby-lang.org/en/documentation/) - Guides, tutorials, and reference material
   - [Documentation](https://docs.ruby-lang.org/en/master/index.html) - Class and Module Index

1. Gregory Brown
   - [Yuki & Moto Press: Gregory Brown, et al | Best of Practicing Ruby (Book Edition) | c.2018](https://yukimotopress.github.io/practicing)
   - [Yuki & Moto Press | Ruby Best Practices | c.2009](https://yukimotopress.github.io/practices)
     * About testing
   - [Yuki & Moto Press Bookshelf](https://yukimotopress.github.io/)
   - [Practicing Ruby ejournal: Gregory Brown, et al | 2010-2015](https://practicingruby.com/) and [Github source](https://github.com/elm-city-craftworks/practicing-ruby-manuscripts)
     * [Ruby and the singleton pattern don't get along | 2011](https://practicingruby.com/articles/ruby-and-the-singleton-pattern-dont-get-along)
     * [Learning new things step-by-step | 2011](https://practicingruby.com/articles/learning-new-things-step-by-step)
       + Writing a simple Ruby graphics game using [Ray](https://mon-ouie.github.io/posts/ray_0_2.html)

1. Jim Weirich
   - [RubyConf 2011 Writing Solid Ruby Code by Jim Weirich](https://www.youtube.com/watch?v=FR95rp-9Oo4)
     * [GitHub: jimweirich | presentation_writing_solid_ruby_code](https://github.com/jimweirich/presentation_writing_solid_ruby_code)
     * This presentation is *not* about S.O.L.I.D. design principles
     * Overview: Good programming books | Write tests as specifications | Pry/Ruby-Debugger |
       Risk | Saikuro/cyclomatic complexity | Choose simple solutions | Fix the cause
     * Book: Steve Maguire, Writing Solid Code, 1993, Microsoft Press
   - [Keynote: Jim Weirich - Why aren't you using Ruby? (RubyConf Uruguay 2013) (video)](https://www.youtube.com/watch?v=0D3KfnbTdWw)
     * Alternative title: Why I Use Ruby
     * [Story 1: Making the switch](https://www.youtube.com/watch?v=0D3KfnbTdWw&t=3m47s)
       + Perl --> Python --> Ruby
       + Summary: Principle of least surprise | Data abstraction |
         Classes! Object Oriented! | Easy to learn
     * [Story 2: Emergency Rescue](https://www.youtube.com/watch?v=0D3KfnbTdWw&t=9m34s)
       + Summary: Emergency | Quick solution (~1/2 hour) | Lots of $$s saved!
     * [Story 3: Make in Ruby](https://www.youtube.com/watch?v=0D3KfnbTdWw&t=16m44s)
       + He writes a working draft of *rake* (Ruby Make) during the presentation
       + I have put a working copy of the files [here](code-examples/rake)
       + Summary: 28 lines of code | 1/2 hour of effort | Core Rake engine | File tasks?
     * [Story 4: Beautiful Testing](https://www.youtube.com/watch?v=0D3KfnbTdWw&t=28m10s)
       + Alternative title: Design by Conference
       + Summary: Sometimes ideas mature slowly | Synergy! |
         Describe/context & Given/When/Then | Expressive / Readable tests
     * [Story 5: Flying robot/drone](https://www.youtube.com/watch?v=0D3KfnbTdWw&t=37m36s)
       + Summary: Realtime programming | Threads | Actor version coming soon |
         Easy to extend to handle C data fields | Fun
   - [Ruby Conference 2008 - What All Rubyists Should Know About Threads](https://www.youtube.com/watch?v=fK-N_VxdW7g)
     * [GitHub: jimweirich | presentation_enterprise_mom](https://github.com/jimweirich/presentation_enterprise_mom)
       + Includes a PDF of the presentation slides

1. Code with Jason: Jason Swett
   - [Articles](https://www.codewithjason.com/articles/) and [podcast](https://www.codewithjason.com/podcast/)
   - [Understanding Ruby Proc objects | 2021](https://www.codewithjason.com/ruby-procs/)
   - [What the ampersand in front of &block means | 2021](https://www.codewithjason.com/ampersand-ruby-block/)
   - [Understanding Ruby closures | 2021](https://www.codewithjason.com/ruby-closures/)
   - [How map(&:some_method) works | 2021](https://www.codewithjason.com/how-map-works/)
   - [The difference between procs and lambdas in Ruby | 2022](https://www.codewithjason.com/the-difference-between-procs-and-lambdas-in-ruby/)
     * [ruby-doc.org | Proc (for Ruby 2.6)](https://ruby-doc.org/core-2.6/Proc.html)

1. RubyGuides: Jesus Castello
   - [Articles](https://www.rubyguides.com/ruby-post-index/)
   - [The Ultimate Guide To Blocks, Procs & Lambdas | 2016-2023](https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/)
   - [How To Debug & Fix Your Ruby Programs | 2015-2020](https://www.rubyguides.com/2015/07/ruby-debugging/)
   - [Writing A Shell In 25 Lines Of Ruby Code | 2015-2019](https://www.rubyguides.com/2016/07/writing-a-shell-in-ruby/)

1. PyCall
   - [GitHub: mrkn | PyCall: Calling Python functions from the Ruby language | 2016-2024](https://github.com/mrkn/pycall.rb)
   - [ReadySteadyCode | HOWTO execute Python code with Ruby](https://readysteadycode.com/howto-execute-python-code-with-ruby)

1. [Jerome Dalbert | A Diagram of the Ruby Core Object Model | 2013](http://jeromedalbert.com/a-diagram-of-the-ruby-core-object-model/)


## Gotchas

1. [Medium: Jeff Adler | Inheriting class variables in Ruby | 2020](https://medium.com/@jeffm.adler/inheriting-class-variables-in-ruby-971f8f977884)
   - @@variables are shared among entire class hierarchies (that is, parents and their subclasses)

