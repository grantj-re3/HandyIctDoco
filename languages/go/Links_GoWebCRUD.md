# Go language: CRUD web API / app

CRUD = Create, Read, Update, Delete

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


## Videos

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

