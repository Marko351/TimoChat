const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: "TimoChat",
      version: "1.0.0",
      description: "Timo Chat Documentation"
    },

    host: "localhost:5500",
    basePath: "/",
    securityDefinitions: {
      apiKey: {
        type: "apiKey",
        name: "authorization",
        in: "header"
      }
    },
    tags: [{
      name: "Authentication",
      description: "User Authentication"
    }, ]
  },

  apis: ["./server/modules/*/*.js"],

  definitions: {
    faruk: {
      properties: {
        uuid: {
          type: "string"
        }
      }
    }
  }
};

const specs = swaggerJsdoc(options);

module.exports = app => {
  app.use("/docs", swaggerUi.serve);
  app.get("/docs", swaggerUi.setup(specs));
};