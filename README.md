# CRUD

## Prerequisites

- Ensure you have the latest versions of Docker and Docker Compose installed.
- Initialize your environment variables by creating a `.env` file. You can use `.env.example` as a reference or directly copy it.

## Installation

To get started, follow these simple steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to start the application: docker compose up -d
   This command will spin up the necessary containers in the background.

**Note:** If port 3000 is already in use (e.g., from `.env.example`), please switch to an available port like 3001 or 5000.

## Postman

- Here's the Postman collection (code-challenge.postman_collection.json) for interacting with the API.
- If you change the port in your `.env` file or Docker Compose setup, remember to update the corresponding port in Postman settings.
