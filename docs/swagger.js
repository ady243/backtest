const swagger = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "API Documentation",
    description: "A simple API documentation for this project",
    contact: {
      name: "Ady Masivi",
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "localhost:4000",
  basePath: "/api",
  tags: [
    {
      name: "Products",
      description: "Everything about products",
    },
  ],
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/products": {
      get: {
        tags: ["Products"],
        summary: "Get all products",
        description: "Get all products",
        operationId: "getProducts",
        produces: ["application/json"],
        parameters: [],
        responses: {
          200: {
            description: "Successful operation",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Product",
              },
            },
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
  },
}

export default swagger
