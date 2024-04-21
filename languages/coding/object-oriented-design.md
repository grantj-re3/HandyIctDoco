# Object Oriented Design

## Sandi Metz

1. [Confreaks | GORUCO 2009 - SOLID Object-Oriented Design by Sandi Metz (video) | 2015](https://www.youtube.com/watch?v=v-2yFMzxqwU)
   - SOLID is about managing dependencies in your apps
   - Discusses O (open/closed), S (single responsibility) and D (dependency injection).
     I (interface segregation) is not really applicable in Ruby.
   - 12m24s The coding examples start here
     * Code smell: Don't use "isKindOf()"
     * TDD = Test-driven development
     * [Mock](https://www.telerik.com/products/mocking/unit-testing.aspx) = dependencies are
       replaced by... objects that simulate the behavior of the real ones

1. [Polly want a message Sandi Metz (video) | 2018](https://www.youtube.com/watch?app=desktop&v=XXi_FBrZQiU)
   - 10m52s The coding examples start here
   - Need to define a role for each object
   - OOP perhaps should be called Message Oriented Programming

1. Book: [Practical Object-Oriented Design, An Agile Primer Using Ruby (POODR), 2nd Ed. | 2018](https://www.poodr.com/)
   - [O’Reilly page for POODR with table of contents](https://www.oreilly.com/library/view/practical-object-oriented-design/9780134445588/)
   - [Arachne Tutorials | Practical Object-Oriented Design in Ruby (Sandi Metz) (playlist) | 2015](https://www.youtube.com/playlist?list=PLECibIxMfd0dVOFbn7cbtvuiatC0XvINP)
     * A video summary of each chapter of POODR


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

1. [Google TechTalks: Misko Hevery | The Clean Code Talks -- Inheritance, Polymorphism, & Testing (video) | 2008](https://www.youtube.com/watch?v=4F72VULWFvc)
   - Other presentations re clean code are [here](https://www.youtube.com/playlist?list=PL4B8197063D90CDB3)

1. [jGeek: P.J. Paweska | SOLID Principles: Improve Your Python Code (video) | 2023](https://www.youtube.com/watch?v=sX6hrDJfoxY)
   - [0m0s Design Patterns - Background](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=0s)
   - [2m11s Design Patterns - Introduction](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=2m11s)
     1. Creational
        * Singleton Pattern
        * Factory Method Pattern
        * Builder Pattern
     1. Structural
        * Adaptor Pattern
     1. Behavioural
        * Strategy Pattern
        * Observer Pattern
        * State Pattern
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
     * Loose coupling
     * Separation of concerns
     * Law of Demeter, LoD (also known as the Principle of Least Knowledge)
     * [1h17m30s SOLID Principles](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h17m30s)
   - [1h23m58s Singleton Pattern](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h23m58s)
     * E.g. Logging, caching, thread pools, database connections, configuration access
     * When to use? To control access to a shared resource.
     * When not to use?
       + Global access
       + If you violate the SRP
     * [1h30m57s UML diagram and the Singleton Pattern](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h30m57s)
     * [1h40m26s Singleton with Python metaclass](https://www.youtube.com/watch?v=sX6hrDJfoxY&t=1h40m26s)
   - ...

1. Ordina | SOLID Python: with Johan Vergeer | 2020
   - [Part 1: Single Responsibility Principle (video)](https://www.youtube.com/watch?v=OCogAzOqn3Y)
   - [Part 2: Open-Closed Principle (video)](https://www.youtube.com/watch?v=77kphOzOSUc)
   - [Part 3: Liskov Substitution Principle (video)](https://www.youtube.com/watch?v=8wjntHrTGPs)
   - [Part 4: Interface Segregation Principle (video)](https://www.youtube.com/watch?v=-0wQdMEF1mY)
   - [Part 5: Dependency Inversion Principle (video)](https://www.youtube.com/watch?v=YrpDElQK10k)

