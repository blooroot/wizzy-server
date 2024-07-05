package main

import (
	"log"
	"sentinel/internal/handlers"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)



func main() {
    app := pocketbase.New()
    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
        e.Router.GET("/root", handlers.Whatever)
        return nil
    })

    startErr := app.Start()
    if startErr != nil {
        log.Panicln(startErr)
        return
    }
}







