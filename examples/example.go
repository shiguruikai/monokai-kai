// Doc comment: Example Go file.
package main

import (
	"fmt"
	"strings"
)

const MaxCount = 100

type Printable interface {
	Print(message string)
}

// User struct for data storage
type User struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Active   bool
}

// Example struct with Generics (Go 1.18+)
type Example[T any] struct {
	Name string
	Data T
}

var prefix = "GO"

func (e *Example[T]) Print(message string) {
	// Simple comment
	version := 1
	fmt.Printf("%s_%s: %s (v%d)\n", prefix, e.Name, message, version)
	
	items := []string{"apple", "banana"}
	for _, item := range items {
		fmt.Println(strings.ToUpper(item))
	}
}

func GlobalFunc(param int) int {
	return param * 2
}

func main() {
	ex := &Example[int]{
		Name: "Gopher",
		Data: 42,
	}
	ex.Print("Hello Go!")
}
