package routes

import (
	"server/handler"
	"server/validate"

	"github.com/gofiber/fiber/v2"
)

func SetupRouter(r *fiber.App) {
	r.Get("/", handler.Home)
	r.Post("/login", handler.Login)

	private := r.Group("/private", validate.AuthedRequired())
	private.Get("/", handler.Profile)
}
