package handler

import (
	"server/models"
	"server/validate"

	"github.com/gofiber/fiber/v2"
)

func Home(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"info": "Home",
	})
}

func Login(c *fiber.Ctx) error {
	req := models.UserAuthentication{}

	if err := c.BodyParser(&req); err != nil {
		return c.JSON(fiber.ErrBadRequest)
	}

	if req.Username != "test" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.ErrUnauthorized)
	}

	if req.Password != "test" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.ErrUnauthorized)
	}

	token, err := validate.GenerateToken(req.Username, "normaluser")
	if err != nil {
		return c.Status(fiber.StatusUnprocessableEntity).JSON(err.Error())
	}

	return c.JSON(fiber.Map{
		"success": true,
		"token":   token,
	})
}
