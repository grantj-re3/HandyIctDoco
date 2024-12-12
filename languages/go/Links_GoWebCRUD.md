# Go language: CRUD web API / app

CRUD = Create, Read, Update, Delete


## API doco

1. [Honeybadger: Ayooluwa Isaiah | A Gentle Introduction to Web Services With Go | 2020](https://www.honeybadger.io/blog/go-web-services/)
   - A basic web server with the built-in router, ServeMux
   - Understanding this is perhaps a prerequisite to a CRUD app

1. [Honeybadger: Salem Olorundare | Creating a CRUD application with Golang and MySQL | 2023](https://www.honeybadger.io/blog/how-to-create-crud-application-with-golang-and-mysql/)
   - A CRUD API using the *Gorilla mux* router & MySQL
   - The [Gorilla mux](https://github.com/gorilla/mux) doco looks good

1. [Medium: Antony Injila | Golang CRUD API | 2023](https://medium.com/@antonyshikubu/golang-crud-api-45abf75b6a10)
   - A CRUD API using [Gin](https://github.com/gin-gonic/gin),
     [Gorm](https://github.com/jinzhu/gorm),
     [GoDotEnv](https://github.com/joho/godotenv) & PostgreSQL
   - Only 3 Go scripts required (plus .env, go.mod, go.sum)

1. [Medium: Vishal Jain | Building basic RESTful (CRUD) with Golang & MySQL | 2021](https://towardsdev.com/building-basic-restful-crud-with-golang-mysql-6869dfdefade)
   - A CRUD API using Gorilla mux, Gorm & MySQL
   - Code is available at [GitHub](https://github.com/Vishalj32/rest-go-demo)

1. DEV: Sam Zhang
   - [Learning Go Web Development From Zero | 2022](https://dev.to/samzhangjy/learning-go-web-development-from-zero-a1l)
     * A *Hello world* app using Gin
     * Understanding this is perhaps a prerequisite to a CRUD app
   - [Restful CRUD with Golang for beginners | 2022](https://dev.to/samzhangjy/restful-crud-with-golang-for-beginners-23ia)
     * A CRUD API using Gin, Gorm & PostgreSQL
     * Code is available at [GitHub](https://github.com/samzhangjy/go-blog)

1. [LinkedIn: Zakaria S. | Building Your First CRUD App in Go: A Hands-On Tutorial | 2023](https://www.linkedin.com/pulse/building-your-first-crud-app-go-hands-on-tutorial-zackaria-slimane-)
   - A CRUD API using the *chi* router & MySQL
   - It might be difficult to create a working app from the article (and there is no git repo)
   - However, the chi router appears to have good doco:
     * https://github.com/go-chi/chi
     * https://github.com/go-chi/chi/tree/master/_examples/hello-world
     * https://github.com/go-chi/chi/tree/master/_examples/rest

1. Soham Kamani
   - Part 1: [Build a web application in Go | 2017-2020](https://www.sohamkamani.com/golang/how-to-build-a-web-application/)
     * Bird encyclopedia
     * Web REST API & HTML submit (POST) form
   - Part 2: [Using a PostgreSQL Database in Go | 2021-2024](https://www.sohamkamani.com/golang/sql-database/)
     * Uses the database directly rather than via an ORM

1. [Golang with Code Example | Fiber Golang: A Powerful Web Framework for Go (Golang) | 2023](https://golang.withcodeexample.com/blog/fiber-golang-powerful-web-framework/)

1. [DEV: Francisco Mendes | How to Build REST API using Go Fiber and Gorm ORM | 2022](https://dev.to/franciscomendes10866/how-to-build-rest-api-using-go-fiber-and-gorm-orm-2jbe)

1. [Medium: adhi tanjung | How to Build REST API using Go Fiber, Gorm ORM, and PostgreSQL | 2022](https://medium.com/@adhtanjung/how-to-build-rest-api-using-go-fiber-gorm-orm-and-postgresql-a454848672a0)


## API videos

1. [AppliedGo: Christoph Berger | RESTful Web API Basics in Go (video) | 2016](https://www.youtube.com/watch?v=iVXaPD_Jbu0)
   - A bit old, but very well explained
   - [Code & written explanation](https://appliedgo.net/rest/)
   - Uses httprouter & no database.
   - Example does Create, Read & Update (but not Delete)

1. [Traversy Media: Brad Traversy | Golang REST API With Mux (video) | 2018](https://www.youtube.com/watch?v=SonwZ6MF5BE)
   - Uses Gorilla mux & no database

1. [Pragmatic Reviews | Golang / Go Gin Framework Crash Course (playlist) | 2020](https://www.youtube.com/playlist?list=PL3eAkoh7fypr8zrkiygiY1e9osoqjoV9w)
   - 14 videos. Most are less than 20 minutes.
   - Video 1: Shows how to divide the app into folders & scripts for controller, service, etc.
   - Video 10: Uses Gin, Gorm & SQLite

1. [TutorialEdge | Building REST APIs in Go 1.22 - New Features (video) | 2024](https://www.youtube.com/watch?v=tgLvIghsJFo)
   - New Feature: net/http's HandleFunc now has an easier way to detect HTTP verbs GET, POST, PUT, etc.
   - New Feature: net/http's HandleFunc now has an easier way to extract fields from URL paths

1. [TutorialEdge | Understanding Contexts in Go in 5(-ish?) Minutes (video) | 2021](https://www.youtube.com/watch?v=h2RdcrMLQAo)
   - Interesting coding of timeout & errors via context

1. [Alex Mux | Golang Context Package: It's More Than You Think! (video) | 2024](https://www.youtube.com/watch?v=BkzgYfygDy8)


## Web app doco

1. [GitBook: Jeremy Saenz | Introduction | Building Web Apps with Go | 2014-2024](https://codegangsta.gitbooks.io/building-web-apps-with-go/content/)
   - Uses HttpRouter, Negroni HTTP Middleware, (HTTP/JSON/XML) Render &  SQLite

1. [The Go Project | Writing Web Applications | c.2010](https://go.dev/doc/articles/wiki/)
   - [Source code](https://go.dev/doc/articles/wiki/final.go) and [plain text source code](https://go.dev/doc/articles/wiki/final.go?m=text)
   - Uses the router & HTML template from the standard library
   - Does not use any database

1. [Scott Logic: Rosie Hamilton | Creating My First Web Application with Go | 2017](https://blog.scottlogic.com/2017/02/28/building-a-web-app-with-go.html)
   - Uses the router & HTML template from the standard library
   - Does not use any database

## Web app videos

1. [TutorialEdge | Creating a Go API using an ORM - Tutorial (video) | 2018](https://www.youtube.com/watch?v=VAGodyl84OY)
   * Uses Gorilla mux, Gorm & SQLite

1. [TutorialEdge | Building a Go REST API using Gorm and Fiber! (video) | 2020](https://www.youtube.com/watch?v=Iq2qT0fRhAA)

1. [Alex Mux | Golang Project: Building a Secure Login Portal (video) | 2024](https://www.youtube.com/watch?v=OmLdoEMcr_Y)

1. [Alex Mux | Go Project: Let's Make a PONG Game in Golang! (video) | 2024](https://www.youtube.com/watch?v=V_OGeYj6p00)
   - We use Ebitengine V2 to create our 2D game
   - My own version of the source code is [here](code-examples/go_pong)

