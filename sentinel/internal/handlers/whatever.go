package handlers

import (
	"net/http"

	"github.com/labstack/echo/v5"
)

func Whatever(ectx echo.Context) error {
    ectx.Response().WriteHeader(http.StatusOK)
    return nil
}



