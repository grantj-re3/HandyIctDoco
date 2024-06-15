# Object Oriented Design

Click [here](ood-design-patterns.md) for links to OOD Design Patterns.

Click [here](ood-diagrams.md) for links to OOD Diagrams.


## Recap of OOP 

1. [LinkedIn: Nimesh Ekanayake | Concepts in Object-Oriented Programming (OOP) | 2022](https://www.linkedin.com/pulse/concepts-object-oriented-programming-oop-nimesh-ekanayake)
   - Encapsulation, Polymorphism, Inheritance & Composition

1. [DEV: Fajar Zuhri Hadiyanto | Types of Relation Between Classes in Object Oriented Programming | 2021](https://dev.to/fajarzuhrihadiyanto/types-of-relation-between-classes-in-object-oriented-programming-551m)
   - HAS-A: Aggregation & Composition
   - IS-A: Inheritance


## Sandi Metz

1. [Confreaks | GORUCO 2009 - SOLID Object-Oriented Design by Sandi Metz (video) | 2015](https://www.youtube.com/watch?v=v-2yFMzxqwU)
   - Discusses O (open/closed), S (single responsibility) and D (dependency injection).
     I (interface segregation) is not really applicable in Ruby.
   - 12m24s: The coding examples start here
   - TDD: Write the unit test (result will be red); then write the class (result will be green); then refactor.
   - How do you know if you should you refactor a class? Ask yourself:
     * Is it DRY (Don't Repeat Yourself)?
     * Does it have one responsibility?
     * Does everything in it change at the same rate?
     * Does it depend on things that **change less often than it does**? [See 37m8s](https://www.youtube.com/watch?v=v-2yFMzxqwU&t=37m8s)
     * *If the answer to any of these is 'no' you should consider refactoring [again]*
   - Triangle of Responsibility Refactoring: Refactor -> Extract -> Inject -> Refactor
   - Thoughts
     * SOLID is about managing dependencies in your apps
     * If [unit] testing seems hard, examine your design (because unit testing depends upon the design of the code)
   - Aside:
     * Code smell: Don't use "isKindOf()"
     * TDD = Test-driven development
     * [Mock](https://www.telerik.com/products/mocking/unit-testing.aspx) = dependencies are
       replaced by... objects that simulate the behavior of the real ones

1. [Polly want a message Sandi Metz (video) | 2018](https://www.youtube.com/watch?app=desktop&v=XXi_FBrZQiU)
   - 10m52s: The coding examples start here
   - Need to define a role for each object
   - OOP perhaps should be called Message Oriented Programming
   - OOP "affords" *anthropomorphic, polymorphic, loosely-coupled, role-playing, factory-created, message-sending* objects

1. [Confreaks | RailsConf 2014 - All the Little Things by Sandi Metz (video) | 2014](https://www.youtube.com/watch?v=8bZh5LMaSmE)
   - A solution to *The Gilded Rose Code Kata*
     * [GitHub: jimweirich | The Gilded Rose Code Kata | c.2011-2013](https://github.com/jimweirich/gilded_rose_kata)
     * What is a code kata? For answers, read [this](https://github.com/gamontal/awesome-katas) or [this](http://codekata.com/)
   - Important points:
     * 21m14s: The open/closed principle says "You ought to be able to add new behaviour without editing existing code"
     * 29m06s: Inheritance is not evil. It is safe to use it when:
       + you have a shallow and narrow hierarchy
       + subclasses to be at the leaf nodes of the object graph (they don't know about "other things")
       + subclasses to use all the behaviour of the superclass
     * 30m43s: It is ok for the [default] behaviour of a method in a superclass *to do nothing*
   - Summary:
     * Prefer duplication over the wrong abstraction
     * Reach for the open/closed principle (i.e. the "O" in SOLID)
     * Make small things/objects
     * Refactor through the complexity to make your code simpler and smaller

1. Book: [Practical Object-Oriented Design, An Agile Primer Using Ruby (POODR), 2nd Ed. | 2018](https://www.poodr.com/)
   - [O’Reilly page for POODR with table of contents](https://www.oreilly.com/library/view/practical-object-oriented-design/9780134445588/)
   - [Arachne Tutorials | Practical Object-Oriented Design in Ruby (Sandi Metz) (playlist) | 2015](https://www.youtube.com/playlist?list=PLECibIxMfd0dVOFbn7cbtvuiatC0XvINP)
     * A video summary of each chapter of POODR

1. [Blog](https://sandimetz.com/blog)
   - [SOLID Design Principles - Dependency Injection | 2009](https://sandimetz.com/blog/2009/03/21/solid-design-principles)
   - [Getting It Right By Betting On Wrong | 2014](https://sandimetz.com/blog/2014/05/28/betting-on-wrong)
   - [How Shall We Define Design? | 2012](https://sandimetz.com/blog/2012/07/05/how-shall-we-define-design)
   - [Ruby Case Statements and 'kind_of?' | 2009](https://sandimetz.com/blog/2009/06/12/ruby-case-statements-and-kind-of)
     * Open–Closed Principle (OCP); "Always send messages if you can"


## Coupling and cohesion

1. [CodeOpinion.com: Derek Comartin | SOLID? Nope, just Coupling and Cohesion | 2022](https://codeopinion.com/solid-nope-just-coupling-and-cohesion/)
1. [Shubham Gautam | Cohesion and Coupling in Object Oriented Programming (OOPS)](https://www.enjoyalgorithms.com/blog/cohesion-and-coupling-in-oops)
1. [Yet another explanation of OOP (loose coupling, tight cohesion) | c.2019](https://codegym.cc/quests/lectures/questcore.level01.lecture03)

### Coupling metrics

1. [CodeOpinion.com: Derek Comartin | Write Stable Code using Coupling Metrics | 2021](https://codeopinion.com/write-stable-code-using-coupling-metrics/)
1. [Microsoft Learn: Mikejo5000, et al. | Code metrics - Class coupling | 2024](https://learn.microsoft.com/en-us/visualstudio/code-quality/code-metrics-class-coupling?view=vs-2022)
1. [Stack Overflow | OOP metrics to determine coupling | 2017](https://softwareengineering.stackexchange.com/questions/351112/oop-metrics-to-determine-coupling)


## SOLID

1. [freeCodeCamp: Kolade Chris | SOLID Design Principles in Software Development | 2023](https://www.freecodecamp.org/news/solid-design-principles-in-software-development/)

1. [RubyConf 2009 - SOLID Ruby by: Jim Weirich](https://www.youtube.com/watch?v=dKRbsE061u4)
   - [GitHub: jimweirich | presentation_solid_ruby | 2009](https://github.com/jimweirich/presentation_solid_ruby)
     * Includes a PDF of the presentation
   - [Robert C. Martin (Uncle Bob) | The Principles of OOD | 2005](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod)
   - 8m42s: SOLID is about managing dependencies
   - UML Class Diagrams: Arrows point in the direction of the dependency
   - How does SOLID apply to dynamically typed languages like Ruby?

1. Peter Lee | 2020
   - [Software Design Principles Every Programmer Should Know](https://medium.com/@peterlee2068/software-design-principles-every-programmer-should-know-c164a83c6f87)
     * SOLID
     * DRY, KISS, YAGNI
   - [SOLID Principles Every Programmer Should Know](https://medium.com/an-idea/solid-principles-every-programmer-should-know-3399eb663ad2)
     * With Java code examples

1. [OODesign.com | SOLID Design Principles](https://www.oodesign.com/design-principles/)
   - 6 web pages with UML and Java examples

1. [Kevin Berridge | OOP: You’re Doing It Completely Wrong (video) | 2014](https://vimeo.com/91672848)

1. [Women Who Code: Nadia Zhuk | Object Oriented Programming: SOLID principles (video) | 2022](https://www.youtube.com/watch?v=erPk8Y5nw6k)

1. [DigitalOcean: Samuel Oloruntoba | SOLID: The First 5 Principles of Object Oriented Design | 2021](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
   - Single-Responsibility Principle: e.g. the "outputter" logic has its own class

1. [Google TechTalks: Misko Hevery | The Clean Code Talks -- Inheritance, Polymorphism, & Testing (video) | 2008](https://www.youtube.com/watch?v=4F72VULWFvc)
   - Use polymorphism when: Behaviour changes based on state; Same conditionals are in multiple places in code
   - 30m44s: "...try writing a small project without any [IF statements]... it's worth the experience"
   - Other presentations re clean code are [here](https://www.youtube.com/playlist?list=PL4B8197063D90CDB3)

1. Ordina | SOLID Python: with Johan Vergeer | 2020
   - [Part 1: Single Responsibility Principle (video)](https://www.youtube.com/watch?v=OCogAzOqn3Y)
   - [Part 2: Open-Closed Principle (video)](https://www.youtube.com/watch?v=77kphOzOSUc)
   - [Part 3: Liskov Substitution Principle (video)](https://www.youtube.com/watch?v=8wjntHrTGPs)
   - [Part 4: Interface Segregation Principle (video)](https://www.youtube.com/watch?v=-0wQdMEF1mY)
   - [Part 5: Dependency Inversion Principle (video)](https://www.youtube.com/watch?v=YrpDElQK10k)

1. [Practicing Ruby: Gregory Brown | SOLID Design Principles | 2011](https://practicingruby.com/articles/solid-design-principles)


## Code smells

1. [Refactoring.Guru | Code Smells](https://refactoring.guru/refactoring/smells)
1. [Coding Horror | Code Smells | 2006](https://blog.codinghorror.com/code-smells/)
   - [Industrial Logic: Joshua Kerievsky | Smells to Refactorings Cheatsheet | 2005](https://www.industriallogic.com/blog/smells-to-refactorings-cheatsheet/)
1. [LinearB: Justin Reynolds | Code Smells: What Are They And How Can I Prevent Them? | 2022](https://linearb.io/blog/what-is-a-code-smell)
1. [TechTarget: Joydip Kanjilal | Understanding code smells and how refactoring can help | 2022](https://www.techtarget.com/searchsoftwarequality/tip/Understanding-code-smells-and-how-refactoring-can-help)


## Refactoring

1. Refactoring.Guru
   - [Refactoring](https://refactoring.guru/refactoring)
     * [Clean code](https://refactoring.guru/refactoring/what-is-refactoring)
     * [Technical debt](https://refactoring.guru/refactoring/technical-debt)
     * [When to refactor](https://refactoring.guru/refactoring/when)
     * [How to refactor](https://refactoring.guru/refactoring/how-to)
   - [Refactoring Techniques](https://refactoring.guru/refactoring/techniques)
     * links to over 60 techniques
     * described in a logical and structured style

1. SourceMaking.com
   - Almost identical content to Refactoring.Guru
   - [Refactoring](https://sourcemaking.com/refactoring)
   - [Refactoring techniques](https://sourcemaking.com/refactoring/refactorings)

1. [Martin Fowler @ OOP2014 "Workflows of Refactoring"](https://www.youtube.com/watch?v=vqEg37e4Mkw)

1. [Johns Hopkins University, Programming Languages Laboratory, Prof. Scott Smith | Refactoring | c.2018](https://pl.cs.jhu.edu/oose/lectures/refactoring.shtml)

1. [CodeSee | Code Refactoring: 6 Techniques and 5 Critical Best Practices | 2024](https://www.codesee.io/learning-center/code-refactoring)

1. Refraction
   - [Techniques for Refactoring and Improving Code Structure in Object-Oriented Programming | 2024](https://refraction.dev/blog/refactoring-object-oriented-programming-techniques)
   - [Common Refactoring Patterns and How to Use Them | 2024](https://refraction.dev/blog/common-refactoring-patterns)
   - [The Art of Refactoring Code | 2024](https://refraction.dev/blog/art-of-refactoring-code)

1. Yoan Thirion
   - [Refactoring journey | 2021-2023](https://ythirion.github.io/refactoring-journey/)
     * [Step by step solution guide (scala)](https://github.com/ythirion/refactoring-journey/blob/solution/solutions/scala/scala-refactoring-facilitator-guide.md)
   - [Theatrical players refactoring Kata](https://yoan-thirion.gitbook.io/knowledge-base/software-craftsmanship/code-katas/theatrical-players-refactoring-kata)
     * [Let's refactor (OOP style)](https://yoan-thirion.gitbook.io/knowledge-base/software-craftsmanship/code-katas/theatrical-players-refactoring-kata/lets-refactor-oop-style)

1. Pat Shaughnessy
   - [Using a Ruby Class To Write Functional Code | 2014](https://patshaughnessy.net/2014/4/8/using-a-ruby-class-to-write-functional-code)
     and republished [here](https://www.cloudbees.com/blog/ruby-class-to-write-functional-code)
   - [Use An Ask, Don’t Tell Policy With Ruby | 2014](https://patshaughnessy.net/2014/2/10/use-an-ask-dont-tell-policy-with-ruby)
     ... I feel the ideas are good, even though the jargon isn't correct as discussed
     [here](https://pragdave.me/thoughts/active/2014-02-11-telling-asking-and-the-power-of-jargon.html)

1. [GeePawHill.org | Refactoring blog posts | 2019-2021](https://www.geepawhill.org/category/refactoring/)
   - [Refactoring Pro-Tip: Making Local Variables Maximally Local](https://www.geepawhill.org/2019/03/16/refactoring-pro-tip-making-local-variables-maximally-local/)

