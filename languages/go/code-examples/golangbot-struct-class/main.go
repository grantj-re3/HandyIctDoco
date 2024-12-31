// https://golangbot.com/structs-instead-of-classes/
package main

import "oop/employee"

func main() {
	e := employee.New("Sam", "Adolf", 30, 20)
	e.LeavesRemaining()
}
