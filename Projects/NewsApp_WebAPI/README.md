# NewsApp Web API

NewsApp Web API is a full-stack news application built with a React frontend and a .NET backend. It is designed to present current news content in a digital reading experience inspired by the layout and tone of a classic newspaper.

The project is split into two main parts:

- `FrontEnd`: a Vite + React application for browsing articles, categories, search, pagination, and article detail views
- `BackEnd`: a .NET Web API that provides article data, categories, and search support

API endpoint details are documented separately in [BackEnd/README.md](./BackEnd/README.md).

## Highlights

- Newspaper-inspired interface with editorial typography and structured article layouts
- Category-based browsing
- Keyword search flow shared across routed pages
- Paginated article lists
- Article detail view with source, byline, and supporting metadata
- Frontend and backend separated into clear application layers

## Tech Stack

### Frontend

- React 19
- Vite
- React Router
- Tailwind CSS v4
- Axios
- shadcn/ui building blocks

### Backend

- ASP.NET Core Web API
- C#

## Project Structure

```text
NewsApp_WebAPI/
├── BackEnd/
│   ├── BackEndProject/
│   └── README.md
├── FrontEnd/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── Pages/
│   │   └── lib/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Frontend Overview

The frontend is responsible for the reading experience and user interaction. It currently includes:

- a shared layout with navigation, search functionality, routed content, and footer
- reusable UI pieces such as `NewsCard`, `NewsCardList`, and pagination
- category pages and a home page built around fetched article collections
- an article detail page designed as a long-form editorial reading surface
#### Consists of three  pages:
- Home page fetches topheadlines articles from the backend.
- Category page fetches articles from the backend based on the category selected.
- Article detail page fetches the article from the backend and displays it.
## Backend Overview

The backend is responsible for exposing the news data consumed by the frontend. It handles the application’s data retrieval and query workflows and acts as the bridge between the client interface and the underlying news source logic.

For endpoint-by-endpoint details, request shapes, and response notes, see [BackEnd/README.md](./BackEnd/README.md).

## Getting Started

### Prerequisites

- Node.js and npm
- .NET SDK

### Run the Frontend

From `FrontEnd/`:

```bash
npm install
npm run dev
```

### Run the Backend

From `BackEnd/`, restore dependencies and run the API with your normal .NET workflow.

## Development Notes

- The frontend uses routed pages under a shared application shell.
- Search state is shared from the main layout into child pages.
- The UI leans into a print-inspired visual language rather than a generic dashboard style.
- The backend README should remain the source of truth for API surface documentation.

## AI Disclaimer

AI was used as a supporting tool for debugging assistance and UI improvements.

## Author

Developed by Tony Riad.
