const { json } = require("express");

//middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    //verificar si el error tiene un codigo de estado definido, de lo contrario, establecer el codigo de estado predeterminado
    const statusCode = err.statusCode || 500;

    //construir objetos de repuesta de error
    const errorResponse = {
        error: {
            message: err.message || "Error interno del servidor",
            code: err.code || "internal_error",
        },
    };

    //Enviar repuesta de error en formato JSON
    res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;
