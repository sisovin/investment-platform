# Investment Platform

Welcome to the **Investment Platform** repository! This platform is designed to provide robust tools and features for managing investments. The repository contains a highly modular and scalable codebase, primarily written in TypeScript, aimed at delivering an intuitive and efficient investment management experience.

---

## Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [Development Guidelines](#development-guidelines)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

---

## Features

- **Portfolio Management**: Create, update, and track investment portfolios.
- **Real-Time Market Data**: Integration with APIs for real-time market data.
- **Risk Analysis**: Tools for assessing and mitigating investment risks.
- **Performance Analytics**: Visualize investment performance metrics.
- **Customizable Investment Strategies**: Support for creating tailored investment plans.
- **User Authentication**: Secure login and account management.
- **Scalable Architecture**: Designed for high performance and scalability.

---

## Technology Stack

### Languages
- **TypeScript**: Primary language (99.2% of the codebase).

### Tools & Frameworks
- **Angular 19**: Frontend framework for building dynamic and scalable user interfaces.
- **NestJS**: Backend framework for creating robust and maintainable APIs.
- **Tailwind CSS**: Utility-first CSS framework for building modern and responsive UIs.
- **PostgreSQL**: SQL database with Prisma ORM for efficient querying and schema migrations.
- **argon2**: Secure password hashing algorithm.
- **JWT**: Token-based authentication for secure API interactions.
- **Jest**: Testing framework for unit and integration tests.

### Other
- **Docker**: Containerized deployment.
- **GitHub Actions**: CI/CD workflows.
- **ESLint**: Code linting for maintaining style consistency.

---
## Project Structure

1. **Angular 19 and NestJS Setup**: A monorepo structure to manage both frontend and backend codebases. 
   - Run `npm install` to set up dependencies.
   - Use `npm start` to concurrently launch the Angular frontend and NestJS backend.
   
2. **Reusable Components**: Tailwind CSS-based UI components that are modular and customizable.
   
3. **Database Setup**: PostgreSQL database integrated with Prisma ORM for migrations and schema management.
   - To initialize the database, run:
     ```bash
     npx prisma migrate dev
     ```

4. **Authentication and Security**: Implements argon2 for hashing and JWT for secure user authentication.

5. **SEO Optimization**: Metadata tags and search-engine-friendly content for better discoverability.
---

## Setup and Installation

Follow these steps to set up the Investment Platform locally:

### Prerequisites
- **Node.js** (v16 or later)
- **npm** or **yarn**
- **Docker** (if running the platform in a containerized environment)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sisovin/investment-platform.git
   cd investment-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   # Or if using yarn:
   yarn install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the necessary environment variables. Refer to `.env.example` for guidance.

4. Start the development server:
   ```bash
   npm run dev
   # Or if using yarn:
   yarn dev
   ```

5. Access the platform at `http://localhost:3000` in your browser.

### Running with Docker
1. Build the Docker image:
   ```bash
   docker build -t investment-platform .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 investment-platform
   ```

---

## Usage

### Scripts
Here are the main scripts provided in the `package.json`:

- **Start Development Server**:
  ```bash
  npm run dev
  ```

- **Run Tests**:
  ```bash
  npm test
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Lint Code**:
  ```bash
  npm run lint
  ```

### API Documentation
The platform provides a RESTful API for interacting with the backend services. API documentation is available via Swagger at `http://localhost:3000/api-docs` when the server is running.

---

## Development Guidelines

To maintain code quality and consistency, adhere to the following guidelines:

1. **Code Style**: Follow the linting rules defined in `.eslintrc`.
2. **Testing**: Write unit and integration tests for all new features and bug fixes.
3. **Commits**: Use descriptive commit messages. Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
4. **Pull Requests**: Ensure all CI checks pass before submitting a pull request.

---

## Contributing

We welcome contributions to the Investment Platform! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them.
4. Push your changes to your fork and submit a pull request.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or feedback, please contact the repository owner:

- **GitHub**: [sisovin](https://github.com/sisovin)
- **Email**: [Your Email Here]

---
