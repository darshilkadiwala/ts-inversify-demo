---
title: Node.js App with Express, Inversify and TypeScript
description: This repo showcases a Node.js app with Inversify for DI and TypeScript for type safety. Learn code organization, DI setup, and Inversify Express Utils routing.
draft: true
keywords:
  - node
  - node.js
  - typescript
  - inversify
  - express
  - sample
  - app
slug: node-js-app-express-inversify-typescript
tags:
  - typescript
---

# Node.js App with Inversify and TypeScript

This repository contains a sample Node.js application built using Inversify for dependency injection and TypeScript for type safety. The application is structured to demonstrate how to organize your codebase, set up dependency injection, and create routes using Inversify Express Utils.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/get-npm) (usually comes with Node.js)

## Getting Started

Follow these steps to set up and run the demo app:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/darshilkadiwala/ts-inversify-demo.git
   cd ts-inversify-demo
   ```
   
2. **Install Dependencies:**

   Install the project dependencies using npm:

   ```bash 
   npm install
   ``` 

3. **Start the development server:**
   
   ```bash
   npm run dev
   ```

   This command will compile the TypeScript code and start the Node.js server. You should see a message like "Server is running on port 3000" in the console.

4. **Access the App:**

   Open your web browser and navigate to `http://localhost:5000`. You should see a welcome message indicating that the app is up and running.

## Project Structure

The project structure follows a basic layout for a Node.js application using TypeScript and Inversify:

```

ts-inversify-demo

├── src/
│    ├── @types/
│    │   ├── express/
│    │   │   └── index.d.ts
│    │   └── index.d.ts
│    ├── controllers/
│    │   └── user.controller.ts
│    ├── repositories/
│    │   └── user.repository.ts
│    ├── services/
│    │   └── user.service.ts
│    ├── bootstrap.ts
│    └── di-container.ts
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc 
├── nodemon.json
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

```

- `src/`: Contains the source code of the application.
  - `@types/`: Custom TypeScript type definitions.
    - `express/`: Type definitions for Express.
      - `index.d.ts`
    - `index.d.ts`
  - `controllers/`: Controllers for handling routes.
    - `user.controller.ts`: Example user controller.
  - `repositories/`: Repositories for data access.
    - `user.repository.ts`: Example user repository.
  - `services/`: Services for business logic.
    - `user.service.ts`: Example user service.
  - `bootstrap.ts`: Application bootstrap file.
  - `di-container.ts`: Dependency injection container setup.
- `.eslintignore`: Files and directories to exclude from ESLint.
- `.eslintrc`: ESLint configuration.
- `.gitignore`: Files and directories to exclude from version control.
- `.prettierrc`: Prettier configuration. 
- `nodemon.json`: Nodemon configuration for development.
- `package-lock.json`: Auto-generated file for package versions.
- `package.json`: Project configuration and dependencies.
- `README.md`: Project documentation (you're reading it!).
- `tsconfig.json`: TypeScript compiler configuration.

## Scripts

- `dev`: Starts the development server using `nodemon` and `ts-node`.
- `lint`: Runs ESLint for linting your TypeScript files.

## Dependencies

- Express: Web framework for building APIs.
- Inversify: Inversion of Control (IoC) container.
- Inversify Express Utils: Utilities for building Express routes with Inversify.
- Reflect-Metadata: Enables reflection in TypeScript.
- TypeScript: Superset of JavaScript that provides type safety.

## Contributing

Feel free to contribute to this project by submitting pull requests or creating issues for any improvements or bug fixes.

## Resources

- [Inversify Documentation](https://inversify.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---