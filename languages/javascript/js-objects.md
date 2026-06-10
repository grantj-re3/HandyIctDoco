# Objects in JavaScript

## Javascript prototypes/inheritance

1. :thumbsup: [Medium: Lavesh Gaurav | Understanding JavaScript Prototypes and Prototype Chain: A Deep Dive | 2025](https://medium.com/@laveshgaurav/understanding-javascript-prototypes-and-prototype-chain-a-deep-dive-4e00498da1fb)
   - Objects inherit properties and methods from other objects, rather than from classes
   - Article looks at how prototypes work, how the prototype chain enables inheritance
   - What is a Prototype in JavaScript? | Understanding the Prototype Chain | Constructor Functions and Prototypes |
     Object.create() and Prototypal Inheritance | Overriding and Shadowing Prototype Properties | Common Mistakes and Misconceptions About Prototypes

1. :thumbsup: [Medium: Anurag Majumdar | “Super” and “Extends” In JavaScript ES6 - Understanding The Tough Parts | 2018](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)
   - Compares class-like implementation in ES6 vs ES5 with an example
   - Aside:
     * `ParentClassName.prototype.methodName` is the same as `Object.getPrototypeOf(ChildClassName.prototype).methodName`
     * E.g. `Animal.prototype.eat` is the same as `Object.getPrototypeOf(Gorilla.prototype).eat`
   - Note the good comment by Brian

1. [Medium: Tharunbalaji | Deep Diving Into JavaScript’s Prototype System: A Developer’s Journey | 2025](https://medium.com/@tharunbalaji110/deep-diving-into-javascripts-prototype-system-a-developer-s-journey-4d5e2bd37483)
   - Describes the steps which occur when: the new keyword is used | a method is called
   - Every object has __proto__ | Constructor functions have prototype | Primitives get wrapped |
     Classes are just syntax sugar | The [prototype] chain ends at null

1. [DEV: Satyajit Gain | A Deep Dive into JavaScript’s Prototype Chain and the Foundational Role of Functions | 2024](https://dev.to/satyajitgain/a-deep-dive-into-javascripts-prototype-chain-and-the-foundational-role-of-functions-1b62)
   - The Foundation: Functions as Constructors with Prototype Links | Understanding the Prototype Chain: A Series of Linked Prototypes |
     Practical Inheritance through Constructor Functions | Functions, Prototypes, and Shared Memory |
     The Alternative with Object.create | Why JavaScript’s Prototype Chain Matters


## Mozilla Developer Network

1. :thumbsup: [Working with objects | 2026](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)

1. [Inheritance and the prototype chain | 2025](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

1. [Object.prototype.constructor | 2025](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)


## JavaScript classes/objects

1. [Delicious Insights: Christophe Porteneuve | JS classes with ES2015+ | 2022](https://delicious-insights.com/en/posts/js-classes/)

1. JavaScript Weblog: Angus Croll
   - [Five ways to create objects… | 2010](https://javascriptweblog.wordpress.com/2010/03/16/five-ways-to-create-objects/)
   - [Five ways to create objects – part 2: Inheritance | 2010](https://javascriptweblog.wordpress.com/2010/03/16/five-ways-to-create-obejcts-part-2-inheritance/)
   - [Understanding JavaScript Prototypes | 2010](https://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/)


## Don't use JavaScript classes

1. [Toptal: Justen Robertson | As a JS Developer, ES6 Classes Are What Keep Me Up at Night | 2018](https://www.toptal.com/developers/javascript/es6-class-chaos-keeps-js-developer-up)

1. [Medium: Johnny Araujo | Stop Using JavaScript Classes! | 2022](https://medium.com/@araujjohnny/stop-using-javascript-classes-d0b6890ef097)

