package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
)

func Profile(c *fiber.Ctx) error {
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.Claims)
	return c.JSON(fiber.Map{
		"info":   "Profile",
		"claims": claims,
	})
}
