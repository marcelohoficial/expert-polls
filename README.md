# Expert Pools

Welcome to **Expert Pools**, a backend project designed to create a polling API where users can participate by voting on their preferred options and view the results in real-time. This project leverages modern technologies to ensure efficiency, scalability, and ease of use.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contact](#contact)

## Introduction

Expert Pools is a straightforward yet powerful backend project that provides an API for creating and participating in polls. Built with Fastify, WebSocket, Docker, Prisma, Redis, Zod, and TypeScript, this project ensures a robust and efficient polling system. Users can create polls, vote on various options, and see real-time results, making it an excellent choice for applications needing quick and responsive polling functionality.

## Features

- **Poll Creation**: Easily create new polls with multiple options.
- **Vote Casting**: Participate in polls by voting for preferred options.
- **Real-Time Results**: View poll results in real-time using WebSocket.
- **Scalability**: Efficient handling of multiple polls and votes.
- **Validation**: Ensure data integrity with schema validation using Zod.

## Technologies Used

### Fastify

Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. Key benefits include:
- **Performance**: Extremely fast and low overhead.
- **Schema-based**: Automatic request and response validation with JSON Schema.
- **Extensibility**: Powerful hooks and plugin system.

### WebSocket

WebSocket enables real-time, bidirectional communication between the server and the clients. Key benefits include:
- **Real-Time Updates**: Instantaneous data updates without polling.
- **Efficiency**: Low latency and minimal overhead for continuous data flow.

### Docker

Docker is a platform for developing, shipping, and running applications in containers. Key benefits include:
- **Consistency**: Ensures the application runs the same across different environments.
- **Isolation**: Containerized apps run in their isolated environments.
- **Scalability**: Easy to scale and manage applications.

### Prisma

Prisma is a next-generation ORM that simplifies database access with an auto-generated query builder for TypeScript and Node.js. Key benefits include:
- **Type Safety**: Ensures type-safe database queries.
- **Productivity**: Accelerates development with an intuitive API.
- **Migrations**: Simplifies database migrations.

### Redis

Redis is an in-memory data structure store, used as a database, cache, and message broker. Key benefits include:
- **Performance**: Extremely fast read and write operations.
- **Data Persistence**: Optional persistence for in-memory data.
- **Pub/Sub**: Support for message brokering.

### Zod

Zod is a TypeScript-first schema declaration and validation library. Key benefits include:
- **Type Safety**: Ensures data validation and type safety.
- **Ease of Use**: Simple and intuitive API for schema definitions.

### TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. Key benefits include:
- **Type Safety**: Reduces errors and improves code quality.
- **Developer Experience**: Enhanced tooling and autocompletion.
- **Maintainability**: Easier to refactor and maintain large codebases.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out:

**Developed by Marcelo**  
GitHub: [marcelohoficial](https://github.com/marcelohoficial/expert-polls)  
Email: [marcelopromova@gmail.com](mailto:marcelopromova@gmail.com)
