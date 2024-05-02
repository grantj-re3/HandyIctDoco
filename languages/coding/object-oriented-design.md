# Object Oriented Design

## Sandi Metz

1. [Confreaks | GORUCO 2009 - SOLID Object-Oriented Design by Sandi Metz (video) | 2015](https://www.youtube.com/watch?v=v-2yFMzxqwU)
   - Discusses O (open/closed), S (single responsibility) and D (dependency injection).
     I (interface segregation) is not really applicable in Ruby.
   - 12m24s The coding examples start here
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
   - 10m52s The coding examples start here
   - Need to define a role for each object
   - OOP perhaps should be called Message Oriented Programming
   - OOP "affords" *anthropomorphic, polymorphic, loosely-coupled, role-playing, factory-created, message-sending* objects

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


## Code smells

1. [Refactoring.Guru | Code Smells](https://refactoring.guru/refactoring/smells)
1. [Coding Horror | Code Smells | 2006](https://blog.codinghorror.com/code-smells/)
   - [Industrial Logic: Joshua Kerievsky | Smells to Refactorings Cheatsheet | 2005](https://www.industriallogic.com/blog/smells-to-refactorings-cheatsheet/)
1. [LinearB: Justin Reynolds | Code Smells: What Are They And How Can I Prevent Them? | 2022](https://linearb.io/blog/what-is-a-code-smell)
1. [TechTarget: Joydip Kanjilal | Understanding code smells and how refactoring can help | 2022](https://www.techtarget.com/searchsoftwarequality/tip/Understanding-code-smells-and-how-refactoring-can-help)


## SOLID

1. [freeCodeCamp: Kolade Chris | SOLID Design Principles in Software Development | 2023](https://www.freecodecamp.org/news/solid-design-principles-in-software-development/)

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


## Design Patterns

1. [jGeek: P.J. Paweska | SOLID Principles: Improve Your Python Code (video) | 2023](https://www.youtube.com/watch?v=sX6hrDJfoxY)
   - [0m0s Design Patterns - Background](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=0s)
   - [2m11s Design Patterns - Introduction](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=2m11s)
     1. Creational: Singleton Pattern, Factory Method Pattern, Builder Pattern
     1. Structural: Adaptor Pattern
     1. Behavioural: Strategy Pattern, Observer Pattern, State Pattern
   - [4m50s Why do we need software architecture?](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=4m50s)
     * [8m24s Why use UML?](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=8m24s)
     * [11m10s Difference between organised an unorganised code](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=11m10s)
     * [12m40s Python environment](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=12m40s)
     * [18m31s Optional UML refresher](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=18m31s)
   - [24m31s Python v3.5+ OOP refresher](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=24m31s)
     * [37m10s Interface Contract and Abstract Class concepts](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=37m10s)
     * [46m43s OOP Code examples](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=46m43s)
     * [1h2m3s How Interface Contracts work](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h2m3s)
   - [1h13m54s What makes a great architecture?](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h13m54s)
     * Loose coupling; Separation of concerns; Law of Demeter, LoD (i.e. Principle of Least Knowledge)
     * [1h17m30s SOLID Principles](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h17m30s)
   - [1h23m58s Singleton Pattern](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h23m58s)
     * A single instance of a class. E.g. Logging, caching, thread pools, database connections, configuration access
     * [1h30m57s UML diagram](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h30m57s)
     * [1h40m26s Singleton with Python metaclass](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h40m26s)
     * [1h47m45s Exploring thread safety in Python](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h47m45s)
     * [1h54m42s Practical examples](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h54m42s)
     * [2h8m38s Practical example: Create a logger](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=2h8m38s)
     * [2h20m22s Exercises](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=2h20m22s)
   - [2h22m47s Factory Method Pattern](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=2h22m47s)
     * Used when caller can't anticipate the types of objects it must create or you have many objects of a common type
     * [2h31m47s UML diagram / architecture](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=2h31m47s)
     * [2h37m26s Coding](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=2h37m26s)
     * [2h48m43s Exercises](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=2h48m43s)
   - [2h50m47s Builder Pattern](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=2h50m47s)
     * Used for creating complex objects
     * [2h59m43s UML diagram / architecture](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=2h59m43s)
     * [3h4m50s Coding](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h4m50s)
     * [3h11m8s Exercises](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h11m8s)
   - [3h12m17s Adapter Pattern](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h12m17s)
     * Used to convert the interface of a class to another interface
     * [3h19m21s UML diagram / architecture](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h19m21s)
     * [3h22m18s Coding](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h22m18s)
     * [3h27m11s Exercises](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h27m11s)
   - [3h29m13s Strategy Pattern](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h29m13s)
     * Used to extract related algorithms into separate classes with a common interface [*very useful*]
     * [3h34m25s UML diagram / architecture](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h34m25s)
     * [3h38m30s Coding](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h38m30s)
     * [3h44m5s Exercises](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h44m5s)
   - [3h46m19s Observer Pattern](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h46m19s)
     * Used for event notification between objects [*very useful*]
     * [3h48m46s UML diagram / architecture](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h48m46s)
     * [3h55m18s Coding](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=3h55m18s)
     * [4h9m16s Exercises](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=4h9m16s)
   - [4h12m17s State Pattern](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=)
     * Used for Finite State Machines i.e. for an object which changes its behaviour depending on its internal state
     * [4h17m9s UML diagram / architecture](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=4h17m9s)
     * [4h21m55s More, including example](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=4h21m55s)
     * [4h27m26s Coding](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=4h27m26s)
   - [4h35m22s Course Assignment: Game of Life](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=4h35m22s)
     * [4h44m19s Support materials](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=4h44m19s)
     * [4h45m0s Starter code](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=4h45m0s)
     * [4h47m28s Architecture [*good starting ideas*]](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=4h47m28s)
   - [4h50m10s Final thoughts](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=4h50m10s)


### Design Pattern examples: Multiple languages

1. [Refactoring.Guru | The Catalog of Design Patterns](https://refactoring.guru/design-patterns/catalog)
   - A catalog of 22 Creational, Structural & Behavioral Design Patterns
   - Each pattern includes description, UML class diagram, pseudocode & code example in 10 languages (including Ruby) with execution results

1. [SourceMaking.com | Design Patterns](https://sourcemaking.com/design_patterns)
   - A catalog of 26 Creational, Structural & Behavioral Design Patterns
   - Each pattern includes description, UML class diagram & code example in 5 languages (excluding Ruby) without execution result

1. [Wikipedia | Software design pattern | 2003-2024](https://en.wikipedia.org/wiki/Software_design_pattern)
   * Links to 58 Creational, Structural, Behavioral & Concurrency Design Patterns
   * Links describe patterns with UML & a variety of languages (often Java)


### Design Pattern examples: Ruby

1. [DEV Community: Davide Santangelo | Mastering Common and Advanced Ruby Design Patterns: A Comprehensive Guide with Code Examples | 2023](https://dev.to/daviducolo/mastering-common-and-advanced-ruby-design-patterns-a-comprehensive-guide-with-code-examples-17l0)

1. [Medium: D. L. Jerome | Design Patterns in Ruby (23 articles) | 2016-2017](https://medium.com/@dljerome)

1. [GitHub: borderBite | Examples from the book Design Patterns in Ruby by Russ Olsen | 2023](https://github.com/design-patterns-in-ruby/design-patterns-in-ruby)

1. [GitHub: davidgf | Design Patterns in Ruby (Russ Olsen) | 2017-2023](https://github.com/davidgf/design-patterns-in-ruby)

1. [HackerNoon: Stephen | Can You Really Code Without IF Statements? | 2020](https://hackernoon.com/can-you-really-code-without-if-statements-k0483ymg)
   - An example of the Strategy Pattern & Factory Pattern in Ruby (nicely integrated into a single tiny "project")

1. [freeCodeCamp: Sihui Huang | Design Patterns: Command and Concierge in Life and Ruby | 2018](https://www.freecodecamp.org/news/design-patterns-command-and-concierge-in-life-and-ruby-aab9815817ea/)
   - An example of the Command Pattern in Ruby

1. OmbuLabs: Cleiviane Costa
   - [Refactoring: Clean your ruby code with design patterns | 2018-2020](https://www.ombulabs.com/blog/code-refactor/refactoring-with-design-patterns.html)
     * Factory Pattern & Strategy Pattern
   - [Refactoring with Design Patterns - The Template Pattern | 2018-2020](https://www.ombulabs.com/blog/code-refactor/design-patterns/refactoring-template-pattern.html)
   - [Refactoring with Design Patterns - The State Pattern | 2019-2020](https://www.ombulabs.com/blog/code-refactor/design-patterns/refactoring-state-pattern.html)


### Design Pattern examples: Non-Ruby

1. [DZone: Ranga Karanam | Design Patterns for Beginners With Java Examples | c.2020](https://dzone.com/articles/design-patterns-for-beginners-with-java-examples)
1. [Tutorials Point | Design Patterns in Java Tutorial](https://www.tutorialspoint.com/design_pattern/index.htm)
1. [freeCodeCamp: Germán Cocca | JavaScript Design Patterns – Explained with Examples | 2022](https://www.freecodecamp.org/news/javascript-design-patterns-explained/)

1. Eduard Ghergu | Fundamental Software Design Principles for Quality Coding | 2022
   - [Video](https://www.pentalog.com/pentabar/software-design-principles-for-quality-coding/).
     Same video on [YouTube](https://www.youtube.com/watch?v=axM7wHZ26F8)
   - [GitHub source material](https://github.com/AbstractSoft/design_principles) including examples in C#
   - Articles:
     [part 1](https://www.pentalog.com/blog/it-development-technology/solid-principles-object-oriented-programming/), 
     [part 2](https://www.pentalog.com/blog/it-development-technology/software-design-principles/),
     [part 3](https://www.pentalog.com/blog/it-development-technology/design-principles/)

