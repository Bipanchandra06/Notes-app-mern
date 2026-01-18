# MERN Stack Notes Application

A full-stack notes management system built with the MERN stack (MongoDB, Express, React, Node.js). This project features a centralized build system, rate limiting for API security, and is fully optimized for deployment on Render.

---

## Features

* **Full CRUD Operations**: Users can create, view, update, and delete notes seamlessly.
* **Responsive UI**: Modern interface built with React 18, Tailwind CSS, and DaisyUI components.
* **API Security**: Integrated rate limiting using Upstash Redis to prevent abuse.
* **Production Ready**: Backend serves frontend static files from a single port in production.

---

## Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Rate Limiting**: Upstash Redis

---

## Project Structure

The repository uses a root `package.json` to manage both the `frontend` and `backend` directories:

```text
.
├── backend/            # Express server and API routes
├── frontend/           # React application (Vite build)
├── package.json        # Unified scripts for the entire project
└── README.md
```

## Installation & Setup

1. Clone the Repository
```
git clone [https://github.com/Bipanchandra06/Notes-app-mern.git](https://github.com/Bipanchandra06/Notes-app-mern.git)
cd Notes-app-mern
```


2. Configure Environment Variables

Create a .env file inside the backend/ directory with the following variables:
```
PORT=5001
MONGO_URI=your_mongodb_atlas_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
NODE_ENV=development
```

3. Install and Build

From the root folder, run this command to install all dependencies for both frontend and backend and generate the production build:
```
npm run build
```


## Running Locally

Development Mode

Runs the React development server on port 5173 and the Express API on port 5001 concurrently:
```
npm run dev
```


Production Mode

Simulates the production environment where the backend serves the frontend/dist folder:

Windows (PowerShell):
```

$env:NODE_ENV="production"; npm start

```
Mac/Linux:
```

NODE_ENV=production npm start
```


## Deployment on Render

This project is pre-configured for a smooth deployment on Render:

Connect Repo: Connect your GitHub repository to Render.

Branch: Set to master (or your primary branch).

Build Command: ```npm run build```

Start Command: ```npm start```

Environment Variables: In the Render Dashboard, add NODE_ENV=production, your MONGO_URI, and your Upstash Redis credentials.

Author

Bipanchandra06
